import clientPromise from "../../../lib/mongobd";
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json()
        
        // Validate required fields
        if (!body.handle || !body.links) {
            return NextResponse.json({
                error: true, 
                message: "Handle and links are required", 
                success: false, 
                result: null
            }, { status: 400 })
        }

        const client = await clientPromise;
        const db = client.db("LinkNest")
        const collection = db.collection("links")

        // Check if handle already exists
        const existingLink = await collection.findOne({ handle: body.handle })

        if (existingLink) {
            return NextResponse.json({
                error: true, 
                message: "Handle already exists", 
                success: false, 
                result: null
            }, { status: 409 })
        }

        // Insert new link
        const result = await collection.insertOne({
            ...body,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        
        return NextResponse.json({
            error: false, 
            message: "Link is added", 
            success: true, 
            result: result
        }, { status: 201 })
        
    } catch (error) {
        console.error('Database error:', error)
        return NextResponse.json({
            error: true, 
            message: "Internal server error", 
            success: false, 
            result: null
        }, { status: 500 })
    }
}






