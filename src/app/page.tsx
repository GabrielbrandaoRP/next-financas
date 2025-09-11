import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-400">
      <main>
        <h1 className="text-lime-400">
          Bem-vindo a sua conta
        </h1>

        <div>
          <button>
            Fazer depósito
          </button>
          <button>
            Fazer Saque
          </button>
        </div>
      </main>
    </div>
  );
}
