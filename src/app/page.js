import Button from "@/components/Button";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="bg-emerald-900 m-12 p-4 rounded">
        <h2 className="text-center font-museo text-emerald-100 text-2xl">Bem-vindo a TrainTime, aqui você registra os seus exercicícios</h2>
        <div className="flex justify-center mt-11 mb-5">
          <Button 
            href="/avaliacao" 
            variant="third" 
          >Vamos começar!</Button>
        </div>
      </main>
    </>
  );
}
