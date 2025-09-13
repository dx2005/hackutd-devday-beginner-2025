import React from "react";
import Link from "next/link";
import { User, Settings } from "lucide-react";
import { MousePointerClick } from 'lucide-react';


function Navbar() {
    return (
        <nav className = "flex justify-between items-center py-4 px-8 bg-gray-100 border-gray-300">
            <div className="flex space-x-4">
                <Link href="/settings" className="group relative">
                    <Settings size={30} className ="cursor-pointer" />
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full pointer-events-none"></span>
                </Link>
            </div>
            <div className="font-bold text-3xl">
                <Link href="/">
                    <span className="cursor-pointer">DevGPA</span>
                </Link>
            </div>"
            <MousePointerClick/>
            <div className="flex space-x-4">
                <Link href="/profile" className="group relative">
                    <User size={30} className ="cursor-pointer" />
                </Link>
            </div>
            <div>Hello</div>
        </nav>
    );
}

export default Navbar;