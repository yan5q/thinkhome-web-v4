import ScrollVelocity from "@/components/ScrollVelocity";
import Button from "./button";
import Link from "next/link";

export default function About() {

    return (
        <div>
            <div className="flex flex-col items-center text-center justify-center justify-self-center p-10 pb-0 w-full">
                <h1 className="text-3xl font-bold text-center">Co vlastně děláme?</h1>
                <h2 className="text-lg text-muted-foreground text-center">Různé IT řešení, jako:</h2>
            </div>
            <div className="cursor-pointer">
                <Link href="/kontakt">
                    <ScrollVelocity velocity={20} texts={["| Weby na zakázku | Kyberbezpečnost | AI | Cloud", "| IT správa | Repasování | Sítě"]} />
                    <h2 className="text-lg text-muted-foreground text-center mb-10">A další... klikněte pro více.</h2>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center justify-self-center p-10 md:p-10 lg:p-10 w-full">
                <h1 className="text-3xl font-bold">Kdo vůbec jsme?</h1>
                <h2 className="text-lg text-muted-foreground text-center pb-5 lg:max-w-[60vw] md:max-w-[60vw] max-w-[80vw]">Jsme skupinka IT studentů, fungující jako komplexní IT partner pro firmy a domácnosti. Zajišťujeme vše od správy IT přes modernizaci techniky až po ekologický přístup k hardwaru.</h2>
                <Button href="/kontakt" className="px-20 md:px-20 lg:px-20 mb-10">Kontaktujte nás</Button>
            </div>
        </div>
    );
}
