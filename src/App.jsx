import React, { useEffect, useState } from "react";
import Logo from "./assets/ruminac_logo.png";
import ProductImage from "./assets/ruminac_producto.jpg";
import QRImage from "./assets/QR.png";

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('active');
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach(r => observer.observe(r));
  }, []);

  return (
    <div className="font-sans bg-orange-50 text-slate-800 overflow-x-hidden">

      {/* NAV */}
      <nav className="sticky top-0 z-20 bg-orange-600/95 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
          <div className="font-black tracking-widest">RUMINACT</div>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6 text-sm font-semibold">
            <li>Inicio</li>
            <li>Producto</li>
            <li>Beneficios</li>
            <li>Contacto</li>
          </ul>

          {/* Mobile button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="md:hidden bg-orange-600 px-4 pb-4 space-y-3 text-sm font-semibold">
            <li>Inicio</li>
            <li>Producto</li>
            <li>Beneficios</li>
            <li>Contacto</li>
          </ul>
        )}
      </nav>

      {/* HERO */}
      <header className="bg-white rounded-b-[60px] md:rounded-b-[120px]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-5 py-20 md:py-28">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              CADA RACIÓN CUENTA,<br />CADA PRODUCTOR IMPORTA
            </h1>
            <p className="mt-5 mb-8 text-base md:text-lg">
              Activador ruminal líquido de origen natural que mejora la digestión y productividad del ganado bovino.
            </p>
            <a href="#contacto" className="inline-block bg-orange-600 text-white px-7 py-3 rounded-full font-bold">
              Ver beneficios
            </a>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-2xl">
            <img src={Logo} alt="RUMINACT" className="max-w-xs md:max-w-md mx-auto" />
          </div>
        </div>
      </header>

      {/* BENEFICIOS */}
      <section className="reveal bg-white rounded-[60px] md:rounded-[100px] -mt-12 px-5 py-16 md:py-20">
        <h2 className="text-center text-2xl md:text-3xl font-black mb-10">Beneficios clave</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 bg-gradient-to-br from-orange-500 to-orange-400 p-6 rounded-[30px] md:rounded-[40px]">
          {['✔ Digestión', '⚙ Rendimiento', '♻ Salud ruminal', '$ Rentabilidad'].map(b => (
            <div key={b} className="bg-white/20 text-white rounded-2xl p-5 text-center font-semibold">{b}</div>
          ))}
        </div>
      </section>

      {/* QUÉ ES */}
      <section
        className="reveal relative py-24 md:py-32"
        style={{
          backgroundImage: "url('https://www.todoagro.com.ar/wp-content/uploads/2021/07/ganaderia-bovinos-17.jpg')",
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-orange-50/90" />
        <div className="relative max-w-4xl mx-auto text-center px-5">
          <h2 className="text-3xl md:text-4xl font-black mb-6">¿Qué es RUMINACT?</h2>
          <p className="text-base md:text-lg">
            RUMINACT es un activador ruminal líquido diseñado para estimular la actividad microbiana del rumen, mejorando la digestión y el desempeño productivo del ganado bovino.
          </p>
        </div>
      </section>

      {/* PARA QUÉ SIRVE */}
      <section className="reveal py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-5">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black mb-10">¿Para qué sirve?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {["Estimula la fermentación ruminal", "Mejora la digestión de forrajes", "Optimiza el consumo del alimento"].map(t => (
                <div key={t} className="bg-white rounded-3xl p-6 shadow-xl font-semibold">{t}</div>
              ))}
            </div>
          </div>
          <img src={ProductImage} alt="Producto" className="max-w-xs md:max-w-sm mx-auto mt-10 md:mt-0" />
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="reveal bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-t-[60px] md:rounded-t-[120px] py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-5 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">Mejora hoy el rendimiento de tu ganado</h2>
            <p className="text-base md:text-lg">Contáctanos para precios, asesoría y disponibilidad</p>
          </div>
          <img src={QRImage} alt="QR" className="max-w-[180px] md:max-w-xs mx-auto" />
        </div>
      </section>

      <footer className="bg-orange-600 text-white text-center py-6 text-sm">
        © 2025 RUMINACT | Proyecto UTP Veraguas
      </footer>

      {/* Animaciones */}
      <style>{`
        .reveal { opacity: 0; transform: translateY(40px); transition: all .9s ease; }
        .reveal.active { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  );
}
