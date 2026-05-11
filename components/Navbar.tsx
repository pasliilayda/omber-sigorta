"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Omber Sigorta"
            className="h-16 w-auto md:h-24"
          />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-bold text-[#071f3d] md:flex">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/#services">Hizmetler</Link>
          <Link href="/#about">Hakkımızda</Link>
          <Link href="/#faq">Sık Sorulanlar</Link>
          <Link href="/#form">İletişim</Link>

          <a
            href="https://wa.me/905488504194"
            target="_blank"
            className="rounded-full bg-[#071f3d] px-6 py-3 text-white"
          >
            Bilgi Al
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full bg-[#071f3d] p-3 text-white md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-base font-bold text-[#071f3d]">
            <Link href="/">Ana Sayfa</Link>
            <Link href="/#services">Hizmetler</Link>
            <Link href="/#about">Hakkımızda</Link>
            <Link href="/#faq">Sık Sorulanlar</Link>
            <Link href="/#form">İletişim</Link>

            <a
              href="https://wa.me/905488504194"
              target="_blank"
              className="rounded-full bg-[#071f3d] px-6 py-3 text-center text-white"
            >
              Bilgi Al
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
