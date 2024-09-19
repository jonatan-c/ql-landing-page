import { CreditCard, Landmark, PiggyBank } from "lucide-react";
import React from "react";

const SERVICES = [
  {
    id: 1,
    title: "Tarjetas de Crédito",
    description:
      "Tarjetas con beneficios exclusivos y tasas competitivas para tus compras diarias.",
    icon: <CreditCard className="mb-4 h-12 w-12 text-blue-600" />,
  },
  {
    id: 2,
    title: "Préstamos Personales",
    description:
      "Financiamiento rápido y flexible para tus proyectos personales o consolidación de deudas.",
    icon: <Landmark className="mb-4 h-12 w-12 text-green-600" />,
  },
  {
    id: 3,
    title: "Cuentas de Ahorro",
    description:
      "Haz crecer tu dinero con nuestras cuentas de alto rendimiento y sin comisiones ocultas.",
    icon: <PiggyBank className="mb-4 h-12 w-12 text-purple-600" />,
  },
];

const Services = () => {
  return (
    <section
      id="servicios"
      className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
    >
      <div className="container m-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Nuestros Servicios
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES?.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center"
            >
              {/* <div className="mb-4 rounded-full bg-primary p-3 text-primary-foreground"> */}
              {service.icon}
              {/* </div> */}
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
