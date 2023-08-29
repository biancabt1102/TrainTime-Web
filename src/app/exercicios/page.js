import NavBar from "@/components/NavBar";
import DataRow from "@/app/exercicios/DataRow";

async function getExercicios() {
  const url = "http://localhost:8080/traintime/api/exercicios";
  const resp = await fetch(url, { next: { revalidate: 0 } });
  const data = await resp.json();
  return data._embedded.entityModelList;
}

export default async function Exercicios() {
  const data = await getExercicios();
  console.log("ABC" + data);
  return (
    <>
      <NavBar active={"exercicios"} />

      <main className="bg-emerald-900 m-12 p-4 rounded">
        <h2 className="text-center font-museo font-semibold text-2xl">Lista de exercícios</h2>
        <div id="data">
          {data.map(exercicio => <DataRow exercicio={exercicio} />)}
        </div>
      </main>
    </>
  );
}
