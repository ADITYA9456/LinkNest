"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    const showNavbar = ["/", "/generate"].includes(pathname)

    return ( <>{showNavbar && <nav className="flex justify-between items-center p-4 px-12 bg-white fixed right-[10vw] w-[80vw] top-14 rounded-4xl text-white">
            <div className="flex gap-7 items-center">
                <Image width={100} height={100} className="text-lg " src="/logo.png" alt="logo" />
                <div className="flex gap-4 items-center">
                    <Link href="/home" className="text-black bg-amber-50 p-1 rounded-3xl px-2  hover:bg-amber-100 hover:text-purple-500 ">Templates</Link>
                    <Link href="/about" className="text-black bg-amber-50 p-1 rounded-3xl px-2  hover:bg-amber-100 hover:text-purple-500 ">Marketplace</Link>
                    <Link href="/contact" className="text-black bg-amber-50 p-1 rounded-3xl px-2  hover:bg-amber-100 hover:text-purple-500 ">Discover</Link>
                    <Link href="/contact" className="text-black bg-amber-50 p-1 rounded-3xl px-2  hover:bg-amber-100 hover:text-purple-500 ">Pricing</Link>
                    <Link href="/contact" className="text-black bg-amber-50 p-1 rounded-3xl px-2  hover:bg-amber-100 hover:text-purple-500 ">Learn</Link></div>
            </div>
            <div className="flex gap-4 ">
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-300 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 p-1.5 text-center me-2 mb-2">
                Login</button>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-300 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5  text-center me-2 mb-2">
                SignUp for free</button>
            </div>
        </nav>}
        </>

    )
}

export default Navbar