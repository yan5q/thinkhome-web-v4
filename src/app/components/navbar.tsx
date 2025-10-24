"use client";

import { useState } from "react";
import GlassSurface from "@/components/GlassSurface";
import Button from "./button";
import CommandMenu from "./command";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto">
                <GlassSurface width="auto" height="auto" borderRadius={999} displace={2} distortionScale={-100} className="relative">
                    {/* Circle on the left side */}
                    <div className="flex items-center gap-4 px-4 py-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 border border-white/30 flex-shrink-0 shadow-lg text-[rgba(255,255,255,0.0)]">o</div>
                        <Button onClick={() => setOpen(true)}>menu</Button>
                        {/* Navigation items - you can add more here */}
                        <div className="flex items-center gap-2">
                            
                        </div>
                    </div>
                </GlassSurface>
            </div>
            <CommandMenu open={open} setOpen={setOpen} />
        </>
    );
}
