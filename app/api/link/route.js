import clientPromise from "@/lib/mongobd"


export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("LinkNest")
    const collection = db.collection("links")

// if handle is already present in the database then return error
    const existingLink = await collection.findOne({ handle:body.handle})

    if (existingLink) {
        return Response.json({error: true, message: "Handle already exists" , success : false , result : null,})
    }

    const result = await collection.insertOne(body)
    return Response.json({error: false, message: "Link is added" , success : true , result : result,  })
  }






