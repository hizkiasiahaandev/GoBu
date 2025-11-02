"use client"

import { useState, useEffect } from "react"
import { Phone, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const busImages = [
        "/bus1.jpg",
        "/bus3.jpg",
        "/bus4.jpg",
        "/bus5.jpg",
        "/bus6.jpg"
    ]



    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % busImages.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % busImages.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + busImages.length) % busImages.length)
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center bg-linear-to-br from-blue-50 via-white to-gray-50 pt-24 pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="mx-auto max-w-7xl px-4 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <Badge className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 text-blue-700 shadow-sm px-4 py-2 text-sm font-semibold">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            Terpercaya & Berpengalaman
                        </Badge>

                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                    Perjalanan
                                </span>
                                <br />
                                <span className="text-gray-900">
                                    Nyaman & Aman
                                </span>
                                <br />
                                <span className="text-gray-700 text-4xl md:text-5xl">
                                    Bersama GoBus
                                </span>
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                Nikmati pengalaman perjalanan terbaik dengan armada bus modern, fasilitas lengkap, dan pelayanan profesional untuk setiap tujuan Anda.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full">
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-lg shadow-lg bg-linear-to-br from-blue-600 to-blue-700 px-8 py-4 text-white text-base font-semibold transition-all duration-300 hover:scale-105 group"
                            >
                                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                Pesan Sekarang
                            </a>

                            <a
                                href="#layanan"
                                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-4 text-gray-700 text-base font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg group"
                            >
                                Lihat Layanan
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>


                        <div className="flex items-center gap-8 pt-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-blue-600">500+</span>
                                <span className="text-sm text-gray-600">Perjalanan Sukses</span>
                            </div>
                            <div className="h-12 w-px bg-gray-300"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-blue-600">50+</span>
                                <span className="text-sm text-gray-600">Armada Modern</span>
                            </div>
                            <div className="h-12 w-px bg-gray-300"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-blue-600">98%</span>
                                <span className="text-sm text-gray-600">Kepuasan Pelanggan</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-lg">
                            {busImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Bus ${index + 1}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                                        }`}
                                />
                            ))}

                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>

                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:-translate-x-0.5 transition-transform" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-800 group-hover:translate-x-0.5 transition-transform" />
                            </button>

                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                {busImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="absolute -z-10 top-8 right-8 w-full h-full bg-linear-to-br from-blue-200 to-blue-300 rounded-lg"></div>
                    </div>
                </div>
            </div>

            <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
        </section>
    )
}