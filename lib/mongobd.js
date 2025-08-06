// lib/mongobd.js - Improved MongoDB connection

import { MongoClient } from 'mongodb'

// Fall back to localhost if no URI is provided
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/linknest'

// Better default options for stability
const options = { 
  maxPoolSize: 10,
  minPoolSize: 1,
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 30000,
  family: 4,
  retryWrites: true,
  retryReads: true
}

let client
let clientPromise

// Attempt to connect with error handling
const connect = () => {
  try {
    client = new MongoClient(uri, options)
    return client.connect()
      .catch(err => {
        console.error('MongoDB connection error:', err.message)
        // If using srv protocol and it fails, try falling back to localhost
        if (uri.includes('mongodb+srv://')) {
          console.log('Attempting to connect to fallback local MongoDB...')
          client = new MongoClient('mongodb://localhost:27017/linknest', options)
          return client.connect()
        }
        throw err
      })
  } catch (error) {
    console.error('Failed to create MongoDB client:', error.message)
    throw error
  }
}

if (process.env.NODE_ENV === 'development') { 
  // In development mode, use a global variable to preserve connection across reloads
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, don't use a global variable
  clientPromise = connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise

// Helper function to get database with error handling
export async function getDb() {
  try {
    const client = await clientPromise
    return client.db('LinkNest')
  } catch (error) {
    console.error('Error getting database:', error.message)
    throw new Error('Failed to connect to database')
  }
}
