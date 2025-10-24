import { AuroraText } from "@/components/ui/aurora-text";
import Button from "./button";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
    variable: "--font-ibm-plex-sans",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
            <div className="flex flex-col items-center justify-center">
                <h1 className={`text-7xl font-bold ${ibmPlexSans.className}`}>
                    <AuroraText colors={["#7928CA", "#0070F3", "#38bdf8"]}>Think</AuroraText>Home
                </h1>
                <h2 className="text-4xl font-medium text-muted-foreground">Moderní IT řešení</h2>
                <div className="flex flex-row pt-5 gap-4">
                    <Button href="/">služby</Button>
                    <Button href="/">kontakt</Button>
                </div>
            </div>
        </div>
    );
}
