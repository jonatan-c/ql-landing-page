import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Soluciones Financieras a tu Alcance
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Préstamos personales, tarjetas de crédito y cuentas de ahorro
              diseñadas para ti.
            </p>
          </div>
          <div
            className="space-x-4"
            style={{
              marginTop: "120px",
            }}
          >
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              href="#contacto"
            >
              Comienza tu solicitud ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
