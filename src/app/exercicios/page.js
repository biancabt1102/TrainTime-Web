import NavBar from "@/components/NavBar";

export default function Exercicios() {
  return (
    <>
      <NavBar active={"exercicios"} />

      <main className="bg-emerald-900 m-12 p-4 rounded">
        <h2 className="text-center">Lista de exercícios</h2>
      </main>
    </>
  );
}
