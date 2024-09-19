import React from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface Props {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  formErrors: {
    name: string;
    email: string;
    message: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  successMessage: string;
}

const Contact = ({
  formData,
  formErrors,
  handleInputChange,
  handleSubmit,
  successMessage,
}: Props) => {
  return (
    <section
      id="contacto"
      className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
    >
      <div className="container m-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contáctanos
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Estamos aquí para responder tus preguntas y ayudarte en tu camino
              hacia el éxito financiero.
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <strong className="mr-4">Dirección:</strong> Calle Financiera
                123, Ciudad Económica
              </p>
              <p className="flex items-center">
                <strong className="mr-4">Teléfono:</strong> +1 234 567 890
              </p>
              <p className="flex items-center">
                <strong className="mr-4">Email:</strong> info@finpro.com
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Nombre completo
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleInputChange}
                className={formErrors.name ? "border-red-500" : ""}
              />
              {formErrors.name && (
                <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Correo electrónico
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className={formErrors.email ? "border-red-500" : ""}
              />
              {formErrors.email && (
                <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={handleInputChange}
                className={formErrors.message ? "border-red-500" : ""}
              />
              {formErrors.message && (
                <p className="mt-1 text-xs text-red-500">
                  {formErrors.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Enviar mensaje
            </Button>
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
