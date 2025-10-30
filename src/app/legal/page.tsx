import React from "react";

const LegalContent = () => {
    return (
        <div className="max-w-4xl mx-auto py-16 mt-[10vh]">
            <h1 className="text-3xl font-bold mb-6">Právní informace a povinné údaje</h1>

            <h2 className="text-2xl font-semibold mb-3">Identifikace společnosti</h2>
            <div className="space-y-1">
                <p>
                    <span className="font-semibold">Obchodní firma:</span> ThinkHome s.r.o.
                </p>
                <p>
                    <span className="font-semibold">Sídlo:</span> Rytířova 777/3, Praha 12, 143 00
                </p>
                {/* <p>
                    <span className="font-semibold">IČO:</span> [XXXXXXXX]
                </p>
                <p>
                    <span className="font-semibold">DIČ:</span> [CZXXXXXXXX] (vyplňte, pokud jste plátci DPH)
                </p>
                <p>
                    <span className="font-semibold">Zápis v OR:</span> zapsáno v obchodním rejstříku vedeném [Městský/Krajský] soud v [Praze/Brně/…], spisová značka [C/oddíl + číslo]
                </p>
                <p>
                    <span className="font-semibold">Statutární orgán:</span> [Jméno a příjmení jednatele/jednatelů] (nepovinné, doporučeno)
                </p>
                <p>
                    <span className="font-semibold">ID datové schránky:</span> [XXXXXXXX] (nepovinné)
                </p> */}
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-3">Kontaktní údaje</h2>
            <div className="space-y-1">
                <p>
                    <span className="font-semibold">E‑mail:</span> info@thinkhome.org
                </p>
                <p>
                    <span className="font-semibold">Telefon:</span>+420 910 129 289
                </p>
                <p>
                    <span className="font-semibold">Korespondenční adresa:</span> Rytířova 777/3, Praha 12, 143 00
                </p>
                <p>Další možnosti naleznete na stránce kontaktu.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-3">Dohled, oprávnění a profesní regulace</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>Pokud je podnikání podmíněno oprávněním (např. živnostenské), uveďte orgán dohledu: [Příslušný živnostenský úřad].</li>
                <li>Je‑li činnost regulovanou profesí, uveďte profesní komoru, právní předpis a profesní titul: [např. ČKAIT, ČAK apod.].</li>
                <li>Pokud jste plátci DPH, uveďte DIČ; nejste‑li plátci, můžete výslovně uvést „Společnost není plátcem DPH“.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-3">Všeobecné podmínky používání webu</h2>
            <div className="space-y-3">
                <p>Obsah těchto stránek má informativní povahu. Přestože usilujeme o správnost a aktuálnost, neručíme za úplnost nebo bezchybnost zveřejněných informací.</p>
                <p>Bez předchozího písemného souhlasu je zakázáno obsah webu kopírovat, upravovat, šířit či zpřístupňovat třetím osobám jinak než pro vlastní osobní potřebu v souladu s autorským právem.</p>
                <p>Odkazy na weby třetích stran mohou být uvedeny pouze pro vaše pohodlí; společnost neodpovídá za jejich obsah ani dostupnost.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-3">Odpovědnost</h2>
            <div className="space-y-3">
                <p>Společnost neodpovídá za škody způsobené použitím nebo nemožností použití tohoto webu, ledaže by byla škoda způsobena úmyslně nebo z hrubé nedbalosti. Informace mohou být kdykoli změněny bez předchozího oznámení.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-3">Autorská práva</h2>
            <div className="space-y-3">
                <p>Veškerý text, grafika, loga, design i software tvořící tyto stránky jsou chráněny právem duševního vlastnictví. Autorská práva náleží ThinkHome s.r.o. nebo licenčním partnerům.</p>
                <p>„ThinkHome“ a související označení mohou být ochrannými známkami; jejich užití bez souhlasu je zakázáno.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-3">Zásady zpracování osobních údajů (GDPR)</h2>
            <div className="space-y-3">
                <p>
                    <span className="font-semibold">Správce:</span> ThinkHome s.r.o.{/*, IČO [XXXXXXXX]*/}, se sídlem Rytířova 777/3, Praha 12, 143 00. Kontaktní e‑mail: privacy@thinkhome.org
                </p>
                <p>
                    <span className="font-semibold">Účely a právní základ:</span>
                    (i) odpověď na dotazy a poptávky (oprávněný zájem či plnění smlouvy), (ii) provoz webu a měření návštěvnosti (oprávněný zájem/ souhlas), (iii) plnění právních povinností (např. účetní doklady), (iv) marketing na základě souhlasu.
                </p>
                <p>
                    <span className="font-semibold">Rozsah údajů:</span> zejména identifikační a kontaktní údaje (jméno, e‑mail, telefon), obsah komunikace, údaje o použití webu a cookies.
                </p>
                <p>
                    <span className="font-semibold">Doba uchování:</span> po dobu nezbytnou k dosažení účelu, nejdéle však do odvolání souhlasu nebo uplynutí zákonných lhůt.
                </p>
                <p>
                    <span className="font-semibold">Příjemci / zpracovatelé:</span> IT poskytovatelé a nástroje analytiky či e‑mailingu; předávání mimo EU/EHP pouze při zajištění odpovídajících záruk.
                </p>
                <p>
                    <span className="font-semibold">Vaše práva:</span> právo na přístup, opravu, výmaz, omezení, přenositelnost a námitku; právo kdykoli odvolat souhlas. Žádosti zasílejte na privacy@thinkhome.org.
                </p>
                <p>
                    <span className="font-semibold">Dozorový úřad:</span> Úřad pro ochranu osobních údajů (Pplk. Sochora 27, 170 00 Praha 7,{" "}
                    <a className="underline" href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">
                        uoou.cz
                    </a>
                    ).
                </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-3">Cookies a obdobné technologie</h2>
            <div className="space-y-3">
                <p>Web používá nezbytné cookies pro správné fungování a dále analytické/marketingové cookies pouze na základě vašeho souhlasu. Preferenci můžete kdykoli změnit.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <span className="font-semibold">Nezbytné cookies:</span> technické zabezpečení, uložení voleb (právní základ: oprávněný zájem).
                    </li>
                    <li>
                        <span className="font-semibold">Analytické cookies:</span> měření návštěvnosti a výkonu (právní základ: souhlas).
                    </li>
                    <li>
                        <span className="font-semibold">Marketingové cookies:</span> personalizace obsahu a reklam (právní základ: souhlas).
                    </li>
                </ul>
                <p>Správu cookies proveďte v nastavení vašeho prohlížeče nebo prostřednictvím lišty pro správu souhlasu (pokud je dostupná).</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-3">Mimosoudní řešení spotřebitelských sporů (ADR) a ODR</h2>
            <div className="space-y-3">
                <p>
                    Pokud na tomto webu nabízíme zboží či služby spotřebitelům, je subjektem mimosoudního řešení spotřebitelských sporů Česká obchodní inspekce,{" "}
                    <a className="underline" href="https://www.coi.cz" target="_blank" rel="noopener noreferrer">
                        coi.cz
                    </a>
                    . Platforma EU pro online řešení sporů je dostupná na adrese{" "}
                    <a className="underline" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                        ec.europa.eu/consumers/odr/
                    </a>
                    .
                </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-3">Ceny a daně</h2>
            <div className="space-y-3">
                <p>Pokud na webu uvádíme ceny, jsou prezentovány jako konečné, včetně všech daní a poplatků, nebo je jasně uvedeno, zda cenu navýší DPH a případné náklady na dopravu. Upravte dle charakteru služeb/produktů.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-3">Závěrečná ustanovení</h2>
            <div className="space-y-3">
                <p>Tyto informace a zásady mohou být průběžně aktualizovány. Doporučujeme stránku pravidelně kontrolovat.</p>
                <p>
                    <span className="font-semibold">Poslední aktualizace:</span> 28. 10. 2025
                </p>
            </div>
        </div>
    );
};

export default LegalContent;
