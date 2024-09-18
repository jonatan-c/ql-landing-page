import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 py-6 text-white">
      <div className="container m-auto px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-lg font-semibold">FinPro</h3>
            <p className="text-sm text-gray-400">
              Soluciones financieras innovadoras para tu futuro.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="mb-2 text-sm font-semibold">Legal</h4>
              <ul className="text-sm text-gray-400">
                <li>
                  <Link href="/terminos">Términos de servicio</Link>
                </li>
                <li>
                  <Link href="/privacidad">Política de privacidad</Link>
                </li>
              </ul>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          © 2023 FinPro. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
