
import Hero from "./components/hero";
import Footer from "./components/footer";
import About from "./components/about";

export default function MainPage() {
    return (
        <div className=" items-center justify-center h-screen">
            {/* <AnimatedBackground> */}
            <div>
                <div className="lg:h-[90vh] md:h-[90vh] h-screen">
                    <Hero />
                </div>
                <About />
            </div>
            {/* </AnimatedBackground> */}
            <Footer />
        </div>
    );
}
