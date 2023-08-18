import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-emerald-900 m-12 p-4 rounded text-center">
        <h2>Página não encontrada</h2>
        <Link href="/" className='hover:text-sky-400'>Voltar para home</Link>
    </main>
  );
}
