"use client"

import { useState } from "react"
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Armchair, BusFront, Mountain } from "lucide-react"

type Category = "semua" | "armada" | "interior" | "perjalanan"

type GalleryItem = {
    id: number
    image: string
    title: string
    category: Exclude<Category, "semua">
    description: string
}

type CategoryItem = {
    id: Category
    label: string
    icon: React.ElementType
}

export default function Galery() {
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
    const [activeCategory, setActiveCategory] = useState<Category>("semua")

    const categories: CategoryItem[] = [
        { id: "semua", label: "Semua Foto", icon: Camera },
        { id: "armada", label: "Armada", icon: BusFront },
        { id: "interior", label: "Interior", icon: Armchair },
        { id: "perjalanan", label: "Perjalanan", icon: Mountain }
    ]

    const galeriData: GalleryItem[] = [
        {
            id: 1,
            image: "/bus1.jpg",
            title: "Bus Eksekutif Premium",
            category: "armada",
            description: "Armada bus eksekutif dengan eksterior modern dan elegan"
        },
        {
            id: 2,
            image: "/bus2.jpg",
            title: "Bus Pariwisata",
            category: "armada",
            description: "Bus pariwisata nyaman untuk perjalanan keluarga"
        },
        {
            id: 3,
            image: "/bus3.jpg",
            title: "Interior Mewah",
            category: "interior",
            description: "Kursi reclining dengan jarak lega dan nyaman"
        },
        {
            id: 4,
            image: "/bus4.jpg",
            title: "Entertainment System",
            category: "interior",
            description: "Fasilitas hiburan lengkap untuk perjalanan menyenangkan"
        },
        {
            id: 5,
            image: "/bus6.jpg",
            title: "Perjalanan Wisata",
            category: "perjalanan",
            description: "Dokumentasi perjalanan wisata pelanggan kami"
        },
        {
            id: 6,
            image: "/bus7.jpg",
            title: "Trip Destinasi Favorit",
            category: "perjalanan",
            description: "Momen indah di destinasi wisata populer"
        },
        {
            id: 7,
            image: "/bus8.jpg",
            title: "Armada VIP",
            category: "armada",
            description: "Bus VIP dengan fasilitas premium eksklusif"
        },
        {
            id: 8,
            image: "/bus9.jpg",
            title: "Perjalanan Grup",
            category: "perjalanan",
            description: "Pelanggan menikmati perjalanan bersama keluarga"
        }
    ]

    const filteredGaleri = activeCategory === "semua"
        ? galeriData
        : galeriData.filter((item) => item.category === activeCategory)

    const openLightbox = (image: GalleryItem) => {
        setSelectedImage(image)
        document.body.style.overflow = "hidden"
    }

    const closeLightbox = () => {
        setSelectedImage(null)
        document.body.style.overflow = "unset"
    }

    const navigateImage = (direction: "next" | "prev") => {
        if (!selectedImage) return
        const currentIndex = filteredGaleri.findIndex((item) => item.id === selectedImage.id)
        if (currentIndex === -1) return
        const newIndex =
            direction === "next"
                ? (currentIndex + 1) % filteredGaleri.length
                : (currentIndex - 1 + filteredGaleri.length) % filteredGaleri.length
        setSelectedImage(filteredGaleri[newIndex])
    }

    return (
        <section id="galeri" className="relative py-20 bg-linear-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                        <Camera className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Galeri Kami</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Dokumentasi <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Perjalanan</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Lihat koleksi foto armada dan momen perjalanan bersama GoBus
                    </p>
                </div>

                <div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    role="tablist"
                    aria-label="Filter kategori galeri"
                >
                    {categories.map((category) => {
                        const Icon = category.icon
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${activeCategory === category.id
                                        ? "bg-linear-to-br from-blue-600 to-blue-700 text-white shadow-xl scale-105"
                                        : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg border border-gray-200"
                                    }`}
                                role="tab"
                                aria-selected={activeCategory === category.id}
                                aria-controls="galeri-content"
                                aria-label={`Filter galeri: ${category.label}`}
                            >
                                <Icon className="w-4 h-4" />
                                {category.label}
                            </button>
                        )
                    })}
                </div>

                <div
                    id="galeri-content"
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    role="tabpanel"
                    aria-label="Konten galeri foto"
                >
                    {filteredGaleri.map((item) => (
                        <article
                            key={item.id}
                            className="group relative aspect-square rounded-lg overflow-hidden shadow-lg  transition-all duration-300 cursor-pointer"
                            onClick={() => openLightbox(item)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Lihat foto ${item.title}`}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault()
                                    openLightbox(item)
                                }
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                    <p className="text-white/90 text-sm">{item.description}</p>
                                </div>

                                <div className="absolute top-4 right-4 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm">
                                    <Maximize2 className="w-5 h-5 text-white" aria-hidden="true" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredGaleri.length === 0 && (
                    <div className="text-center py-16" role="status" aria-live="polite">
                        <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" aria-hidden="true" />
                        <p className="text-gray-600 text-lg">Tidak ada foto dalam kategori ini</p>
                    </div>
                )}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="lightbox-title"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110 z-50"
                        aria-label="Tutup galeri lightbox"
                    >
                        <X className="w-6 h-6" aria-hidden="true" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            navigateImage("prev")
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110 z-50"
                        aria-label="Foto sebelumnya"
                    >
                        <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            navigateImage("next")
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110 z-50"
                        aria-label="Foto selanjutnya"
                    >
                        <ChevronRight className="w-6 h-6" aria-hidden="true" />
                    </button>

                    <div
                        className="max-w-5xl max-h-[90vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        />
                        <div className="mt-6 text-center space-y-2">
                            <h3 id="lightbox-title" className="text-white text-2xl font-bold">
                                {selectedImage.title}
                            </h3>
                            <p className="text-white/80 text-lg">{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
