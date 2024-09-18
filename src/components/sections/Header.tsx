import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container m-auto flex h-14 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Image
              src="/placeholder.svg"
              alt="FinPro Logo"
              width={32}
              height={32}
            />
            <span className="hidden font-bold sm:inline-block">FinPro</span>
          </Link>
        </div>

        <div className="hidden md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              className="text-foreground/60 transition-colors hover:text-foreground/80"
              href="#inicio"
            >
              Inicio
            </Link>
            <Link
              className="text-foreground/60 transition-colors hover:text-foreground/80"
              href="#servicios"
            >
              Servicios
            </Link>
            <Link
              className="text-foreground/60 transition-colors hover:text-foreground/80"
              href="#testimonios"
            >
              Testimonios
            </Link>
            <Link
              className="text-foreground/60 transition-colors hover:text-foreground/80"
              href="#contacto"
            >
              Contacto
            </Link>
          </nav>
        </div>

        <button
          className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle Menu</span>
        </button>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-b bg-background md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                className="text-foreground transition-colors hover:text-foreground/80"
                href="#inicio"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                className="text-foreground/60 transition-colors hover:text-foreground/80"
                href="#servicios"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                className="text-foreground/60 transition-colors hover:text-foreground/80"
                href="#testimonios"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link
                className="text-foreground/60 transition-colors hover:text-foreground/80"
                href="#contacto"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
