"use client"

import Link from "next/link"
import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongobd"
import Image from "next/image";

export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("LinkNest")
    const collection = db.collection("links")

    // If the handle is already claimed, you cannot create the bittree
    const item = await collection.findOne({handle: handle})
    if(!item){
        return notFound()
    }

    console.log(item)

    return <div className="flex min-h-screen bg-purple-400 text-black justify-center items-start py-10 ">
        {item && <div className="photo flex justify-center flex-col items-center gap-4"> 
            <img width={60} height={60} src={item.pic} alt="Profile" className="rounded-full" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <span className="des w-80 text-center">{item.des}</span>
            <div className="links">
                {item.links.map((item, index)=>{
                    return <Link  key={index} href= {item.link}><div className="bg-purple-100 py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3">
                       {item.linktext}
                       
                    </div></Link> 
                })}
            </div>
      </div>}
    </div>
}