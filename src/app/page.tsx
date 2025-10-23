import Hero from "./components/hero";
import Footer from "./components/footer";
import AnimatedBackground from "./components/background";
import About from "./components/about";

export default function MainPage() {
    return (
        <div className=" items-center justify-center h-screen">
            {/* <AnimatedBackground> */}
            <div>
                <div className="h-[calc(100vh-100px)]">
                    <Hero />
                </div>
                <About />
            </div>
            {/* </AnimatedBackground> */}
            <Footer />
        </div>
    );
}
