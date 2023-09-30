"use client"

import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Button from "./Button";

export default function NavBar({ active }) {
    const { user, logout } = useContext(AuthContext);
    const { push } = useRouter();

    function handleLogout() {
        console.log("logout");
        logout();
        push("/login");
    }

    return (
        <nav className="flex justify-between items-center gap-12 bg-emerald-800 p-6">
            <ul className="flex items-center gap-12 text-emerald-500">
                <li>
                    <Link href="/">
                        <h1 className="text-3xl text-emerald-100 font-grad font-normal">TrainTime</h1>
                    </Link>
                </li>
                <li>
                    <Link className={`${active == "avaliacao" && "text-emerald-300"} ${"font-museo font-normal"}`} href="/avaliacao">
                        Cadastrar exercício
                    </Link>
                </li>
                <li>
                    <Link className={`${active == "exercicios" && "text-emerald-300"} ${"font-museo font-normal"}`} href="/exercicios">
                        Visualizar exercícios
                    </Link>
                </li>
            </ul>

            <div className="flex gap-2 items-center">
                <span>{user?.email}</span>
                <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/100" alt="Avatar do usuário" />
                </div>
                <Button onClick={handleLogout} type="button">Logout</Button>
            </div>
        </nav>

    )
}
