import ScrollVelocity from "@/components/ScrollVelocity";

export default function About() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center justify-self-center p-10 w-[40vw]">
                <h1 className="text-3xl font-bold">Co vlastně děláme?</h1>
            </div>
            <div className="">
                <ScrollVelocity velocity={20} texts={["| Weby na zakázku | Kyberbezpečnost | AI | Cloud", "| IT správa | Repasování | Sítě"]} />
            </div>
        </div>
    );
}
