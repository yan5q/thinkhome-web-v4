"use client";

import { useMemo, useState } from "react";
import Button from "../components/button";

export default function ContactPage() {
    const [step, setStep] = useState(0);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    const steps = ["Zpráva", "Jméno", "Odeslat"];

    const canNext = step === 0 ? message.trim().length > 0 : step === 1 ? name.trim().length > 0 : true;

    const mailtoHref = useMemo(() => {
        const to = "info@thinkhome.org";
        const subject = `New message from ${name || "Anonymous"}`;
        const body = `${message}${name ? `\n\n— ${name}` : ""}`;
        const params = new URLSearchParams({ subject, body });
        return `mailto:${to}?${params.toString()}`;
    }, [message, name]);

    const reset = () => {
        setStep(0);
        setMessage("");
        setName("");
    };

    return (
        <div className="flex flex-col items-center justify-center lg:h-[90vh] md:h-[90vh] h-screen lg:mt-11 md:mt-11 mx-0 mt-0 md:mx-10 lg:mx-10 lg:rounded-4xl md:rounded-4xl rounded-none bg-linear-to-b from-neutral-100 to-blue-200 px-6">
            <h1 className="text-4xl font-bold mt-6">Kontaktujte nás</h1>

            <div className="w-full max-w-2xl mt-8">
                <ol className="flex items-center justify-between">
                    {steps.map((label, index) => (
                        <li key={label} className="flex-1 flex items-center">
                            <div className="flex items-center">
                                <div className={`flex items-center justify-center w-8 h-8 rounded-full border ${index <= step ? "bg-black text-white border-black" : "bg-white text-black border-black/50"}`}>{index + 1}</div>
                                <span className="ml-3 font-mono text-sm">{label}</span>
                            </div>
                            {index < steps.length - 1 && <div className={`flex-1 h-px mx-3 ${index < step ? "bg-black" : "bg-black/30"}`} />}
                        </li>
                    ))}
                </ol>

                <div className="mt-8 rounded-lg border border-black bg-white p-6">
                    {step === 0 && (
                        <div>
                            <label htmlFor="message" className="block font-mono text-sm mb-2">
                                Vaše zpráva
                            </label>
                            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={6} placeholder="Co byste nám chtěli?" className="w-full rounded-md border border-black/50 p-3 outline-none focus:border-black" />
                            <div className="mt-4 flex justify-end">
                                <Button onClick={() => canNext && setStep(1)} className={canNext ? "" : "opacity-50 pointer-events-none"}>
                                    Další
                                </Button>
                            </div>
                        </div>
                    )}

                    {step === 1 && (
                        <div>
                            <label htmlFor="name" className="block font-mono text-sm mb-2">
                                Vaše jméno
                            </label>
                            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jan Novák" className="w-full rounded-md border border-black/50 p-3 outline-none focus:border-black" />
                            <div className="mt-4 flex justify-between">
                                <Button onClick={() => setStep(0)}>
                                    Zpět
                                </Button>
                                <Button onClick={() => canNext && setStep(2)} className={canNext ? "" : "opacity-50 pointer-events-none"}>
                                    Zkontrolovat & odeslat
                                </Button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Připraveno odeslat?</h2>

                            <div className="rounded-md border border-black/50 p-4 bg-neutral-50">
                                <div className="text-sm">
                                    <span className="font-semibold">Na:</span> info@thinkhome.org
                                </div>
                                <div className="text-sm mt-2">
                                    <span className="font-semibold">Předmět:</span> {`Nová zpráva od ${name || "Anonymního uživatele"}`}
                                </div>
                                <div className="text-sm mt-2">
                                    <span className="font-semibold">Obsah:</span>
                                </div>
                                <pre className="mt-1 whitespace-pre-wrap wrap-break-word text-sm">
                                    {message}
                                    {name ? `\n\n— ${name}` : ""}
                                </pre>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-3 justify-between">
                                <Button onClick={() => setStep(1)}>
                                    Zpět
                                </Button>
                                <div className="flex gap-3">
                                    <Button href={mailtoHref}>odeslat</Button>
                                    <Button onClick={reset} className="ml-2">
                                        Začít znovu
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
