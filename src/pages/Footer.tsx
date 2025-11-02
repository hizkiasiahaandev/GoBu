"use client"

import { Bus, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="space-y-4">
                        <a href="#home" className="flex items-center gap-3 group">
                            <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg shadow-xl bg-linear-to-br from-blue-600 to-blue-700 text-white group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                                <Bus className="w-6 h-6" />
                            </span>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold tracking-tight text-white">
                                    GoBus
                                </span>
                                <span className="text-xs text-gray-400 font-medium tracking-wide">
                                    Perjalanan Nyaman & Aman
                                </span>
                            </div>
                        </a>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Melayani perjalanan antar kota dengan armada terbaik dan pelayanan prima untuk kenyamanan perjalanan Anda.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="#"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-green-500 transition-all duration-300 hover:scale-110"
                            >
                                <Phone className="w-5 h-5" />
                            </a>
                        </div>

                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Menu Cepat</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#armada" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                                    Armada
                                </a>
                            </li>
                            <li>
                                <a href="#layanan" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                                    Layanan
                                </a>
                            </li>
                            <li>
                                <a href="#tentang" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                                    Tentang
                                </a>
                            </li>
                            <li>
                                <a href="#galeri" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                                    Galeri
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Layanan</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                                    Sewa Bus Pariwisata
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                                    Antar Jemput Bandara
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                                    Bus Eksekutif
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                                    Paket Wisata
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                                    Bus Karyawan
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Kontak Kami</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                <span>Jl. Gatot Subroto No. 123, Medan, Sumatera Utara</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                                <a href="tel:+6281234567890">+62 812-3456-7890</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                                <a href="mailto:info@gobus.com">info@gobus.com</a>
                            </li>
                        </ul>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg shadow-lg bg-linear-to-br from-blue-600 to-blue-700 px-6 py-3 text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl w-full"
                        >
                            <Phone className="w-4 h-4" />
                            Hubungi Kami
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                        <p>&copy; {new Date().getFullYear()} GoBus. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                                Kebijakan Privasi
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                                Syarat & Ketentuan
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}