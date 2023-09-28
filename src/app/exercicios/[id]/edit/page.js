import { getExercicio } from "@/actions/avaliacoes";
import NavBar from "@/components/NavBar";
import FormExercicioEdit from "./FormEdit";

export default async function Avaliacao({params}) {
  const exercicio = await getExercicio(params.id);

  return (
    <>
      <NavBar active={"avaliacao"} />
      <FormExercicioEdit exercicio={exercicio}/>
    </>
  );
}
