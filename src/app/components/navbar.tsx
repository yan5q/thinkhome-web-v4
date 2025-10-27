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
                <GlassSurface width="auto" height="auto" borderRadius={999} displace={2} distortionScale={-100} className="relative" fallbackStyle={{ border: "0px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(200,200,200,0.2)", boxShadow: "0 8px 32px 0 rgba(31, 31, 31, 0.2), 0 2px 16px 0 rgba(100, 100, 100, 0.1), inset 0 10px 16px 0 rgba(100, 100, 100, 0.2), inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)" }} fallbackWithBackdropStyle={{ backdropFilter: "blur(8px) saturate(1)", WebkitBackdropFilter: "blur(8px) saturate(1)" }}>
                    {/* Circle on the left side */}
                    <div className="flex items-center gap-4 px-4 py-2">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-400 via-pink-500 to-red-500 border border-white/30 shrink-0 shadow-lg text-[rgba(255,255,255,0)]">o</div>
                        <Button onClick={() => setOpen(true)}>MENU</Button>
                    </div>
                </GlassSurface>
            </div>
            <CommandMenu open={open} setOpen={setOpen} />
        </>
    );
}
