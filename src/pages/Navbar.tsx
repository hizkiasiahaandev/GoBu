"use client"

import { useState } from "react"
import { Menu, X, Phone, Bus } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg shadow-xl bg-linear-to-br from-blue-600 to-blue-700 text-white group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
            <Bus className="w-6 h-6" />
          </span>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight bg-linear-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent">
              GoBus
            </span>
            <span className="text-xs text-gray-500 font-medium tracking-wide">
              Perjalanan Nyaman & Aman
            </span>
          </div>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
        </button>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#armada" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
              Armada
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#layanan" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
              Layanan
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#tentang" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
              Tentang
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#galeri" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
              Galeri
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#kontak" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
              Kontak
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>

        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 rounded-lg shadow-lg bg-linear-to-br from-blue-600 to-blue-700 px-6 py-3 text-white text-sm font-semibold transition-all duration-300 hover:scale-105"
        >
          <Phone className="w-4 h-4" />
          Pesan Sekarang
        </a>
      </nav>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden bg-white border-t border-gray-100`}>
        <ul className="flex flex-col gap-1 px-4 py-4 text-sm">
          <li>
            <a onClick={() => setOpen(false)} href="#home" className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#armada" className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              Armada
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#layanan" className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              Layanan
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#tentang" className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              Tentang
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#galeri" className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              Galeri
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#kontak" className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              Kontak
            </a>
          </li>
          <li className="mt-2">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              className="inline-flex w-full shadow-lg items-center justify-center gap-2 rounded-lg bg-linear-to-br from-blue-600 to-blue-700 px-6 py-3 text-white font-semibold hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Pesan Sekarang
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}