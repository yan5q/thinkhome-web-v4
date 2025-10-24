import ScrollVelocity from "@/components/ScrollVelocity";

import Link from "next/link";

export default function About() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center justify-self-center p-10 w-[40vw]">
                <h1 className="text-3xl font-bold">Co vlastně děláme?</h1>
            </div>
            <div className="cursor-pointer">
                <Link href="/sluzby">
                    <ScrollVelocity velocity={20} texts={["| Weby na zakázku | Kyberbezpečnost | AI | Cloud", "| IT správa | Repasování | Sítě"]} />
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center justify-self-center p-10 w-[40vw]">
                <h1 className="text-3xl font-bold">Kdo vůbec jsme?</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center justify-self-center p-10 w-[80vw] gap-8">
                    <div className="flex flex-col items-center justify-center justify-self-center p-10 w-[40vw] bg-neutral-100 rounded-2xl">
                        <h1>Samuel Paluba</h1>
                        <h2>CEO</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center justify-self-center p-10 w-[40vw] bg-neutral-100 rounded-2xl">
                        <h1>Jansa0ndrej</h1>
                        <h2>CTO</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center justify-self-center p-10 w-[40vw] bg-neutral-100 rounded-2xl">
                        <h1>Erdinc Daskin</h1>
                        <h2>Main Dev</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center justify-self-center p-10 w-[40vw] bg-neutral-100 rounded-2xl">
                        <h1>Samuel Paluba</h1>
                        <h2>CEO</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center justify-self-center p-10 w-[40vw] bg-neutral-100 rounded-2xl">
                        <h1>Jansa0ndrej</h1>
                        <h2>CTO</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center justify-self-center p-10 w-[40vw] bg-neutral-100 rounded-2xl">
                        <h1>Erdinc Daskin</h1>
                        <h2>Main Dev</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center justify-self-center p-10 w-[40vw]">
                <h1 className="text-3xl font-bold">Proč si vybrat nás?</h1>
            </div>
        </div>
    );
}
