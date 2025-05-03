"use client"
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const Generate = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [pic, setpic] = useState("")
    const [des, setdes] = useState("")
    const [handleExists, setHandleExists] = useState(false)

    useEffect(() => {
        const checkHandle = async () => {
            if (!handle) return;
            const res = await fetch(`/api/checkhandle?handle=${handle}`);
            const data = await res.json();
            setHandleExists(data.exists);
        }
        checkHandle();
    }, [handle]);

    const setlink = (index, link, linktext) => {
        setLinks((initialLinks) =>
            initialLinks.map((item, i) =>
                i === index ? { link, linktext } : item
            )
        );
    };

    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }

    const submitLink = async () => {
        const raw = JSON.stringify({
            links,
            handle,
            pic,
            des
        });

        const r = await fetch("http://localhost:3000/api/link", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: raw
        });

        const result = await r.json();

        if (result.success) {
            toast.success(result.message)
            setHandleExists(true); // Now allow "Get your link" to show
        } else {
            toast.error(result.message)
        }
    }

    return (
        <div className="min-h-screen bg-[#4ee1e7] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-34 gap-10 text-gray-900">

            <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center">
                    Create your link
                </h1>

                {/* Step 1: Handle */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Step 1: Claim your Handle</h2>
                    <input value={handle || ""} onChange={e => sethandle(e.target.value)} type="text" placeholder="choose your handle"
                        className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500 transition" />
                </div>

                {/* Step 2: Links */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Step 2: Add Links</h2>
                    {links.map((item, index) => (
                        <div key={index} className="flex gap-4 py-2 flex-col sm:flex-row">
                            <input value={item.link || ""} onChange={e => setlink(index, e.target.value, item.linktext)} type="text" placeholder="Enter link "
                                className="flex-1 p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
                            <input value={item.linktext || ""} onChange={e => setlink(index, item.link, e.target.value)} type="text" placeholder="Site name"
                                className="flex-1 p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500 transition" />
                        </div>
                    ))}
                    <button onClick={addLink} type="button"
                        className="text-white bg-gradient-to-r from-purple-500 to-pink-300 hover:bg-gradient-to-l cursor-pointer font-medium rounded-lg text-sm px-5 p-1.5 text-center me-2 mb-2">
                        Add Link
                    </button>
                </div>

                {/* Step 3: Picture and Description */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Step 3: Add Picture and Description</h2>
                    <input value={pic || ""} onChange={e => setpic(e.target.value)} type="text" placeholder="Enter link to your Picture"
                        className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500 transition" />
                    <input value={des || ""} onChange={e => setdes(e.target.value)} type="text" placeholder="Enter Description"
                        className="w-full p-4 mt-4 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500 transition" />
                </div>

                {/* Final Buttons */}
                <div className="flex gap-4 flex-col sm:flex-row">
                    <button onClick={submitLink}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-300 hover:bg-gradient-to-l cursor-pointer text-white py-4 rounded-full text-lg font-semibold">
                        Create your Link
                    </button>

                    {handleExists && (
                        <button onClick={() => router.push(`/${handle}`)}
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-300 hover:bg-gradient-to-l cursor-pointer text-white py-4 rounded-full text-lg font-semibold ">
                            Get your Link
                        </button>
                    )}
                </div>
            </div>

            {/* Right Side Image */}
            <div className="flex-1 flex justify-center items-center">
                <Image width={400} height={400} src="/generate.png" alt="bitlink preview" />
            </div>

            <ToastContainer />
        </div>
    );
};

export default Generate;
