import Image from "next/image";
import React from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "María G.",
    text: "FinPro transformó mi perspectiva financiera. Ahora me siento segura sobre mi futuro económico.",
    image: "guillermo-vercel",
  },
  {
    id: 2,
    name: "Carlos R.",
    text: "Gracias a la asesoría de FinPro, logré multiplicar mis inversiones en tiempo récord.",
    image: "guillermo-vercel",
  },
  {
    id: 3,
    name: "Laura M.",
    text: "El plan de jubilación que diseñaron para mí superó todas mis expectativas. ¡Altamente recomendado!",
    image: "guillermo-vercel",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container m-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-4">
                <Image
                  src={`/${testimonial.image}.jpeg`}
                  alt={`Foto de ${testimonial.name}`}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <blockquote className="mb-2 text-lg font-medium">
                {testimonial.text}
              </blockquote>
              <cite className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
