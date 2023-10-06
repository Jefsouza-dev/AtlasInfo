"use client";
import Link from "next/link";

const error = () => {
  return (
    <section className="flex flex-col container">
      <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
        Ops, ocorreu um erro ao exibir esse país!
      </h1>

      <Link className="flex items-center justify-center py-2" href={"/"}>
        <span className="text-lg ">Voltar</span>
      </Link>
    </section>
  );
};

export default error;
