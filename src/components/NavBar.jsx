import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="flex justify-between items-center gap-12 bg-emerald-800 p-6">
            <ul className="flex items-center gap-12 text-emerald-500">
                <li>
                    <Link href="/">
                        <h1 className="text-3xl text-emerald-100 font-grad font-normal">TrainTime</h1>
                    </Link>
                </li>
                <li>
                    <Link className={`${active=="avaliacao" && "text-emerald-300"} ${"font-museo font-normal"}`} href="/avaliacao">
                        Cadastrar exercício
                    </Link>
                </li>
                <li>
                    <Link className={`${active=="exercicios" && "text-emerald-300"} ${"font-museo font-normal"}`} href="/exercicios">
                        Visualizar exercícios
                    </Link>
                </li>
            </ul>

            <div className="h-12 w-12 overflow-hidden rounded-full">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>
        </nav>

    )
}
