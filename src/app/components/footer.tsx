import { AuroraText } from "@/components/ui/aurora-text";
import Link from "next/link";

const links = [
    { title: "Legal", href: "/legal" },
    { title: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
    return (
        <footer className="md:py-8">
            <div className="mx-auto max-w-full px-6 border-t border-muted-foreground/20">
                <Link href="/" aria-label="go home" className="mx-auto block size-fit pt-8">
                    <h2 className="text-xl font-bold">
                        {/* <AuroraText colors={["#7928CA", "#0070F3", "#38bdf8"]}>Think</AuroraText> */}
                        ThinkHome s.r.o.
                    </h2>
                    <h3 className="text-sm text-center text-muted-foreground">IČO: 23893591</h3>
                </Link>
                <div className="my-3 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link) => (
                        <Link key={link.title} href={link.href} className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
