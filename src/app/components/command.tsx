import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

interface CommandMenuProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function CommandMenu({ open, setOpen }: CommandMenuProps) {
    return (
        <CommandDialog open={open} onOpenChange={setOpen} className="rounded-3xl overflow-hidden">
            <CommandList>
                <CommandEmpty>Samá voda.</CommandEmpty>
                <CommandGroup>
                    <CommandItem className="text-xl font-mono lowercase rounded-2xl mt-1">Domů</CommandItem>
                    <CommandItem className="text-xl font-mono lowercase rounded-2xl">Služby</CommandItem>
                    <CommandItem className="text-xl font-mono lowercase rounded-2xl">O nás</CommandItem>
                    <CommandItem className="text-xl font-mono lowercase rounded-2xl mb-1" >Kontakt</CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
