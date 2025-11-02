"use client"

import { useState } from "react"
import { Users, Wifi, Coffee, Tv, Snowflake, Music, Shield, Award, Bus, BusFront, Crown, PhoneCall, MessageCircle } from "lucide-react"

export default function Armada() {
    const [activeTab, setActiveTab] = useState(0)

    const armadaData = [
        {
            name: "Bus Eksekutif",
            icon: BusFront,
            capacity: "35 Penumpang",
            image: "/bus1.jpg",
            features: [
                { icon: Wifi, text: "WiFi Gratis" },
                { icon: Snowflake, text: "AC Full Blast" },
                { icon: Tv, text: "LED TV & Audio" },
                { icon: Coffee, text: "Snack & Minuman" },
            ],
            description:
                "Bus premium dengan kursi reclining yang nyaman dan fasilitas lengkap untuk perjalanan jarak jauh.",
        },
        {
            name: "Bus Pariwisata",
            icon: Bus,
            capacity: "45 Penumpang",
            image: "/bus4.jpg",
            features: [
                { icon: Wifi, text: "WiFi Gratis" },
                { icon: Music, text: "Karaoke System" },
                { icon: Tv, text: "Entertainment System" },
                { icon: Snowflake, text: "AC Dingin" },
            ],
            description:
                "Pilihan terbaik untuk wisata keluarga atau rombongan dengan entertainment system lengkap.",
        },
        {
            name: "Bus VIP",
            icon: Crown,
            capacity: "28 Penumpang",
            image: "/bus3.jpg",
            features: [
                { icon: Shield, text: "Asuransi Perjalanan" },
                { icon: Wifi, text: "High-Speed WiFi" },
                { icon: Coffee, text: "Premium Catering" },
                { icon: Award, text: "Service Excellence" },
            ],
            description:
                "Armada VIP dengan kelas premium, kursi super lebar, dan pelayanan eksklusif untuk kenyamanan maksimal.",
        },
    ]

    return (
        <section id="armada" className="relative py-20 bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Armada Kami</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Pilihan Armada <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Berkualitas</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Armada bus modern dengan berbagai pilihan untuk memenuhi kebutuhan perjalanan Anda
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {armadaData.map((armada, index) => {
                        const Icon = armada.icon
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 ${activeTab === index
                                    ? "bg-linear-to-br from-blue-600 to-blue-700 text-white shadow-lg scale-105"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-lg"
                                    }`}
                                aria-label={`Pilih ${armada.name}`}
                                aria-pressed={activeTab === index}
                            >
                                <Icon className="w-5 h-5" />
                                {armada.name}
                            </button>
                        )
                    })}
                </div>

                <div className="relative">
                    {armadaData.map((armada, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-500 ${activeTab === index ? "opacity-100 block" : "opacity-0 hidden"
                                }`}
                            role="tabpanel"
                            aria-hidden={activeTab !== index}
                            aria-label={`Informasi ${armada.name}`}
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="relative group">
                                    <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-lg">
                                        <img
                                            src={armada.image}
                                            alt={armada.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
                                            <p className="text-sm text-gray-600">Kapasitas</p>
                                            <p className="text-xl font-bold text-blue-600">{armada.capacity}</p>
                                        </div>
                                    </div>
                                    <div className="absolute -z-10 top-6 right-6 w-full h-full bg-linear-to-br from-blue-200 to-blue-300 rounded-lg"></div>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                                            {armada.name}
                                        </h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {armada.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                            <Award className="w-5 h-5 text-blue-600" />
                                            Fasilitas Unggulan
                                        </h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {armada.features.map((feature, idx) => {
                                                const Icon = feature.icon
                                                return (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors group"
                                                        role="listitem"
                                                        aria-label={feature.text}
                                                    >
                                                        <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-linear-to-br from-blue-600 to-blue-700 text-white group-hover:scale-110 transition-transform">
                                                            <Icon className="w-5 h-5" />
                                                        </div>
                                                        <span className="font-medium text-gray-700">{feature.text}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <a
                                            href="https://wa.me/6289510144492"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 rounded-lg shadow-lg bg-linear-to-br from-blue-600 to-blue-700 px-8 py-4 text-white text-base font-semibold transition-all duration-300 hover:scale-105"
                                            aria-label={`Sewa ${armada.name} sekarang`}
                                        >
                                            <PhoneCall className="w-5 h-5" />
                                            Sewa Sekarang
                                        </a>

                                        <a
                                            href="#kontak"
                                            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-4 text-gray-700 text-base font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
                                            aria-label="Tanya detail lebih lanjut"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            Tanya Detail
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Shield,
                            title: "Terawat & Aman",
                            desc: "Semua armada rutin diperiksa dan dirawat untuk keamanan maksimal",
                        },
                        {
                            icon: Users,
                            title: "Driver Profesional",
                            desc: "Sopir berpengalaman dan terlatih untuk kenyamanan perjalanan Anda",
                        },
                        {
                            icon: Award,
                            title: "Harga Kompetitif",
                            desc: "Dapatkan harga terbaik dengan kualitas pelayanan premium",
                        },
                    ].map((item, i) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={i}
                                className="group text-center p-8 rounded-xl bg-linear-to-br from-blue-50 to-white border border-blue-100 hover:border-blue-500 transition-all duration-300"
                            >
                                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-linear-to-br from-blue-600 to-blue-700 text-white mb-4 transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-600">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}