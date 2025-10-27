export default function Team() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-stretch justify-center p-5 md:p-7 lg:p-7 max-w-6xl mx-auto md:gap-8 gap-4 lg:gap-8 shadow-2xl rounded-4xl" style={{ boxShadow: "0 8px 32px 0 rgba(31, 31, 31, 0.2), 0 2px 16px 0 rgba(100, 100, 100, 0.1), inset 0 10px 16px 0 rgba(100, 100, 100, 0.2), inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)" }}>
            <div className="flex flex-col items-center justify-center p-10 bg-neutral-100 rounded-2xl shadow-2xl h-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                <h1 className="text-xl font-bold font-mono">Samuel Paluba</h1>
                <h2 className="text-md font-bold text-muted-foreground">CEO & Zakladatel</h2>
                <p className="text-sm text-muted-foreground">Stará se o obchodní jednání, vztahy se zákazníky a školení</p>
            </div>
            <div className="flex flex-col items-center justify-center p-10 bg-neutral-100 rounded-2xl shadow-2xl h-full hover:scale-105 transition-all duration-300 cursor-pointer">
                <h1 className="text-xl font-bold font-mono">Jansa0ndrej</h1>
                <h2 className="text-md font-bold text-muted-foreground">CTO & Zakladatel</h2>
                <p className="text-sm text-muted-foreground">Moderní webové aplikace a kybernetická bezpečnost</p>
            </div>
            <div className="flex flex-col items-center justify-center p-10 bg-neutral-100 rounded-2xl shadow-2xl h-full hover:scale-105 transition-all duration-300 cursor-pointer">
                <h1 className="text-xl font-bold font-mono">Erdinc Daskin</h1>
                <h2 className="text-md font-bold text-muted-foreground">Capital Developer</h2>
                <p className="text-sm text-muted-foreground">Next.js, moderní webové aplikace, UX/UI</p>
            </div>
            <div className="flex flex-col items-center justify-center p-10 bg-neutral-100 rounded-2xl shadow-2xl h-full hover:scale-105 transition-all duration-300 cursor-pointer">
                <h1 className="text-xl font-bold font-mono">Vojtech Pell</h1>
                <h2 className="text-md font-bold text-muted-foreground">WordPress & Hardware Specialist</h2>
                <p className="text-sm text-muted-foreground">WordPress weby, repase PC, hardware servis</p>
            </div>
        </div>
    );
}
