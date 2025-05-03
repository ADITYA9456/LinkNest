"use client"
import { useState  } from 'react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Generate = () => {

    const searchParams = useSearchParams()

    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [pic, setpic] = useState("")
    const [des, setdes] = useState("")
    const setlink = (index, link, linktext) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext }
                }
                else {
                    return item
                }
            })  
        })
    }
    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))

    }


    const submitLink = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "des":des
        });

        console.log(raw)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/link", requestOptions)
        const result = await r.json()

        if (result.success) {
            toast.success(result.message)
            setLinks([])
            setpic("")
            sethandle("")
        }
        else {
            toast.error(result.message)
        }
    }
    return (
        <div className="min-h-screen bg-[#4ee1e7] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-34 gap-10 text-gray-900">


            <div className="flex-1   bg-white p-8  rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center">
                    Create your link
                </h1>

                {/* Step 1 */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Step 1: Claim your Handle
                    </h2>
                    <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} type="text" placeholder="choose your handle" className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
                    />
                </div>

                {/* Step 2 */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Step 2: Add Links
                    </h2>
                    {links && links.map((item, index) => {
                        return <div key={index} className="flex gap-4 py-2 flex-col sm:flex-row">
                            <input value={item.link || ""} onChange={e => { setlink(index, e.target.value, item.linktext) }} type="text" placeholder="Enter link " className="flex-1 p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                            />
                            <input value={item.linktext || ""} onChange={e => { setlink(index, item.link, e.target.value) }} type="text" placeholder="Site name" className="flex-1 p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
                            />
                        </div>
                    })}
                    <button onClick={() => addLink()} type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-300 hover:bg-gradient-to-l cursor-pointer font-medium rounded-lg text-sm px-5 p-1.5 text-center me-2 mb-2">
                        Add Link</button>
                </div>

                {/* Step 3 */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Step 3: Add Picture and Discription f
                    </h2>
                    <input value={pic || ""} onChange={e => { setpic(e.target.value) }} type="text" placeholder="Enter link to your Picture" className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
                    />
                    <input value={des || ""} onChange={e => { setdes(e.target.value) }} type="text" placeholder="Enter Discription" className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
                    />
                </div>

                {/* Final Button */}
                <button onClick={() => { submitLink() }} className="w-full bg-gradient-to-r from-purple-500 to-pink-300 hover:bg-gradient-to-l cursor-pointer text-white py-4 rounded-full text-lg font-semibold">
                    Create your Link
                </button>
            </div>

            {/* Right Section - Image */}
            <div className="flex-1 flex justify-center items-center">
                <img
                    src="/generate.png" alt="bitlink preview"
                />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Generate;
