"use client";

import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import { useState } from "react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Mensaje enviado:", result);
        setSuccessMessage("Mensaje enviado con éxito");
        setTimeout(() => {
          setSuccessMessage("");
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        console.error("Error al enviar el mensaje");
        setSuccessMessage("Error al enviar el mensaje");
        setTimeout(() => {
          setSuccessMessage("");
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-1">
        <Hero />
        <Services />
        <Testimonials />
        <Contact
          formData={formData}
          formErrors={formErrors}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          successMessage={successMessage}
        />
      </main>
      <Footer />
    </div>
  );
}
