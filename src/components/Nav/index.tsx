import { IconCategory, IconHome, IconPackage } from "@tabler/icons-react";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex justify-center items-center gap-6 bg-gray-800 p-4 rounded-lg shadow-md">
            <Link href="/" className="flex flex-col items-center justify-center bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <IconHome className="w-6 h-6 mb-1" />
                <span className="text-sm font-bold uppercase">Home</span>
            </Link>

            <Link href="/produto" className="flex flex-col items-center justify-center bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <IconPackage className="w-6 h-6 mb-1" />
                <span className="text-sm font-bold uppercase">Produto</span>
            </Link>

            <Link href="/categoria" className="flex flex-col items-center justify-center bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <IconCategory className="w-6 h-6 mb-1" />
                <span className="text-sm font-bold uppercase">Categoria</span>
            </Link>
        </nav>
    );
}
