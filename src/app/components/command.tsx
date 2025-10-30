"use client";

import { CommandDialog, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { useRouter } from "next/navigation";

interface CommandMenuProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function CommandMenu({ open, setOpen }: CommandMenuProps) {
    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
        setOpen(false);
    };

    return (
        <CommandDialog open={open} onOpenChange={setOpen} className="rounded-3xl overflow-hidden">
            <CommandList>
                <CommandEmpty>Samá voda.</CommandEmpty>
                <CommandGroup>
                    <CommandItem className="text-xl font-mono lowercase rounded-2xl mt-1" onSelect={() => navigateTo("/")}>
                        Domů
                    </CommandItem>
                    <CommandItem disabled className="text-xl font-mono lowercase rounded-2xl" onSelect={() => navigateTo("/sluzby")}>
                        Služby
                    </CommandItem>
                    <CommandItem disabled className="text-xl font-mono lowercase rounded-2xl" onSelect={() => navigateTo("/o-nas")}>
                        O nás
                    </CommandItem>
                    <CommandItem className="text-xl font-mono lowercase rounded-2xl mb-1" onSelect={() => navigateTo("/kontakt")}>
                        Kontakt
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
