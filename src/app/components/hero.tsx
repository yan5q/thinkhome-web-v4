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
        <div className="flex flex-col items-center justify-center lg:h-[90vh] md:h-[90vh] h-screen lg:mt-11 md:mt-11 mx-0 mt-0 md:mx-10 lg:mx-10 lg:rounded-4xl md:rounded-4xl rounded-none bg-linear-to-b from-neutral-100 to-blue-200">
            <div className="flex flex-col items-center justify-center ">
                <h1 className={`md:text-7xl lg:text-7xl text-6xl font-bold ${ibmPlexSans.className}`}>
                    <AuroraText colors={["#7928CA", "#0070F3", "#38bdf8"]}>Think</AuroraText>Home
                </h1>
                <h2 className="md:text-4xl lg:text-4xl text-3xl font-medium text-muted-foreground">Moderní IT řešení</h2>
                <div className="flex flex-row pt-5 gap-4">
                    <Button href="/kontakt">služby</Button>
                    <Button href="/kontakt">kontakt</Button>
                </div>
            </div>
        </div>
    );
}
