import { IconCategory, IconHome, IconPackage, IconPackageExport } from "@tabler/icons-react";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex justify-center items-center gap-6 bg-gray-800 p-4 rounded-lg shadow-md">
            <Link href="/" className="Nav-Item">
                <IconHome className="w-6 h-6 mb-1" />
                <span className="text-sm font-bold uppercase">Home</span>
            </Link>

            <Link href="/privado/produto" className="Nav-Item">
                <IconPackage className="w-6 h-6 mb-1" />
                <span className="text-sm font-bold uppercase">Produto Client</span>
            </Link>

            <Link href="/privado/produto3" className="Nav-Item">
                <IconPackageExport className="w-6 h-6 mb-1" />
                <span className="text-sm font-bold uppercase">Produto Server</span>
            </Link>

            <Link href="/privado/categoria" className="Nav-Item">
                <IconCategory className="w-6 h-6 mb-1" />
                <span className="text-sm font-bold uppercase">Categoria</span>
            </Link>
        </nav>
    );
}
