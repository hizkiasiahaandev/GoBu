"use client"

import { MapPin, Plane, Briefcase, Camera, GraduationCap, Heart, Clock, Shield, Phone, Check, ArrowRight } from "lucide-react"

export default function Layanan() {
    const layananData = [
        {
            icon: Camera,
            title: "Sewa Bus Pariwisata",
            description: "Nikmati perjalanan wisata yang menyenangkan dengan bus pariwisata nyaman dan fasilitas lengkap untuk keluarga atau rombongan.",
            features: ["Destinasi Fleksibel", "Tour Guide", "Dokumentasi"]
        },
        {
            icon: Plane,
            title: "Antar Jemput Bandara",
            description: "Layanan shuttle bus dari dan ke bandara dengan jadwal fleksibel. Tepat waktu dan aman untuk perjalanan Anda.",
            features: ["24/7 Available", "Track & Trace", "Door to Door"]
        },
        {
            icon: Briefcase,
            title: "Bus Karyawan",
            description: "Solusi transportasi karyawan untuk perusahaan dengan rute regular dan armada terawat untuk kenyamanan tim Anda.",
            features: ["Rute Custom", "Kontrak Bulanan", "GPS Tracking"]
        },
        {
            icon: GraduationCap,
            title: "Bus Study Tour",
            description: "Layanan khusus untuk study tour sekolah atau kampus dengan harga spesial dan pendampingan perjalanan.",
            features: ["Harga Pelajar", "Asuransi Siswa", "Sopir Ramah"]
        },
        {
            icon: Heart,
            title: "Bus Wedding",
            description: "Jadikan hari spesial Anda lebih berkesan dengan layanan bus wedding yang elegan dan dekorasi sesuai tema.",
            features: ["Dekorasi Gratis", "Red Carpet", "Dokumentasi"]
        },
        {
            icon: MapPin,
            title: "Paket Wisata",
            description: "Paket tour lengkap ke destinasi favorit dengan itinerary tersusun, pemandu wisata, dan harga all-in yang ekonomis.",
            features: ["All-In Package", "Hotel & Meals", "Destinasi Populer"]
        }
    ]

    const keunggulanData = [
        {
            icon: Clock,
            title: "Tepat Waktu",
            description: "Komitmen kami untuk selalu on-time di setiap perjalanan"
        },
        {
            icon: Shield,
            title: "Asuransi Lengkap",
            description: "Semua perjalanan dilindungi asuransi untuk keamanan maksimal"
        },
        {
            icon: Phone,
            title: "Customer Service 24/7",
            description: "Tim support siap membantu kapan saja Anda membutuhkan"
        }
    ]
    return (
        <section id="layanan" className="relative py-20 bg-linear-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
            <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Layanan Kami</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Layanan <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Terlengkap</span> untuk Anda
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Berbagai pilihan layanan transportasi bus sesuai kebutuhan perjalanan Anda
                    </p>
                </div>

                <div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    role="list"
                    aria-label="Daftar layanan GoBus"
                >
                    {layananData.map((layanan, index) => {
                        const Icon = layanan.icon
                        return (
                            <article
                                key={index}
                                className="group relative bg-white rounded-lg p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-100"
                                role="listitem"
                                aria-label={layanan.title}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-50 to-transparent rounded-bl-full opacity-50"></div>

                                <div className="relative space-y-4">
                                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-linear-to-br from-blue-600 to-blue-700 text-white shadow-lg transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-600 group-hover:scale-110 group-hover:rotate-6">
                                        <Icon className="w-8 h-8" aria-hidden="true" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                                        {layanan.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">{layanan.description}</p>

                                    <ul
                                        className="space-y-2 pt-2"
                                        role="list"
                                        aria-label={`Fitur ${layanan.title}`}
                                    >
                                        {layanan.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-2 text-sm text-gray-700"
                                            >
                                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 shrink-0">
                                                    <Check className="w-3 h-3" />
                                                </span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="https://wa.me/6289510144492"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 hover:gap-3 transition-all group/link mt-4"
                                        aria-label={`Pesan layanan ${layanan.title}`}
                                    >
                                        <span>Pesan Layanan</span>
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                                    </a>
                                </div>
                            </article>
                        )
                    })}
                </div>

                <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-lg p-12 shadow-lg relative overflow-hidden" role="region" aria-label="Keunggulan layanan">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Mengapa Memilih GoBus?
                            </h3>
                            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                                Komitmen kami memberikan pelayanan terbaik di setiap perjalanan
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {keunggulanData.map((keunggulan, index) => {
                                const Icon = keunggulan.icon
                                return (
                                    <div
                                        key={index}
                                        className="text-center space-y-4 group"
                                        role="article"
                                        aria-label={keunggulan.title}
                                    >
                                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 mx-auto">
                                            <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white">{keunggulan.title}</h4>
                                        <p className="text-blue-100">{keunggulan.description}</p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="text-center">
                            <a
                                href="https://wa.me/6289510144492"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-blue-600 text-base font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                                aria-label="Hubungi kami untuk konsultasi gratis"
                            >
                                <Phone className="w-5 h-5" aria-hidden="true" />
                                Konsultasi Gratis
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}