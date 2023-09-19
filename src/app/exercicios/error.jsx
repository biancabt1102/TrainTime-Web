"use client"
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import React from "react";

export default function ExercicioError({error, reset}) {
  return (
    <>
      <NavBar />

      <main className="bg-emerald-900 mt-12 m-auto p-4 rounded max-w-md">
        <h2 className="text-center font-mont font-normal text-xl text-bold">Um erro aconteceu</h2>
        <p className="text-center font-mont font-normal">{error.message}</p>

        <div className="flex gap-3 justify-between mt-3">
          <Button variant="secundary" href="/">Voltar para Home</Button>
          <Button onClick={reset}>Tentar novamente</Button>
        </div>
      </main>
    </>
  );
}
