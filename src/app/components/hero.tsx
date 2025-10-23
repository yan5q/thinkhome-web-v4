
import { AuroraText } from "@/components/ui/aurora-text";
import Button from "./button";



export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-7xl font-[800]">
                    <AuroraText colors={["#7928CA", "#0070F3", "#38bdf8"]}>Think</AuroraText>Home
                </h1>
                <h2 className="text-4xl font-medium text-muted-foreground">~ Moderní IT řešení</h2>
                <div className="flex flex-row pt-5 gap-4">
                    <Button href="/">služby</Button>
                    <Button href="/">kontakt</Button>
                </div>
            </div>
        </div>
    );
}
