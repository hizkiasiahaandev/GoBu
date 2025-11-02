"use client"

import { Target, Eye, Award, Users, TrendingUp, Shield, Heart, Star } from "lucide-react"

export default function Tentang() {
    const visiMisi = [
        {
            icon: Eye,
            title: "Visi Kami",
            description: "Menjadi penyedia layanan transportasi bus terpercaya dan terdepan di Indonesia dengan standar pelayanan internasional dan komitmen terhadap kepuasan pelanggan."
        },
        {
            icon: Target,
            title: "Misi Kami",
            description: "Memberikan layanan transportasi yang aman, nyaman, dan tepat waktu dengan armada berkualitas tinggi serta terus berinovasi dalam meningkatkan pengalaman perjalanan pelanggan."
        }
    ]

    const nilaiData = [
        {
            icon: Shield,
            title: "Keamanan",
            description: "Prioritas utama dalam setiap perjalanan dengan armada terawat dan sopir profesional"
        },
        {
            icon: Heart,
            title: "Pelayanan",
            description: "Melayani dengan sepenuh hati untuk kenyamanan dan kepuasan pelanggan"
        },
        {
            icon: Star,
            title: "Kualitas",
            description: "Standar tinggi dalam armada, fasilitas, dan pelayanan yang kami berikan"
        },
        {
            icon: Users,
            title: "Kepercayaan",
            description: "Membangun hubungan jangka panjang dengan integritas dan profesionalisme"
        }
    ]

    const achievementData = [
        { number: "15+", label: "Tahun Pengalaman", icon: TrendingUp },
        { number: "50+", label: "Armada Berkualitas", icon: Shield },
        { number: "500+", label: "Perjalanan Sukses", icon: Award },
        { number: "98%", label: "Kepuasan Pelanggan", icon: Star }
    ]

    return (
        <section id="tentang" className="relative py-20 bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Tentang Kami</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Mengenal <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">GoBus</span> Lebih Dekat
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Perjalanan kami dimulai dengan satu misi: memberikan layanan transportasi terbaik untuk setiap pelanggan
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative group">
                        <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/bus1.jpg"
                                alt="Bus GoBus modern dan nyaman"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
                        </div>
                        <div className="absolute -z-10 top-6 left-6 w-full h-full bg-linear-to-br from-blue-200 to-blue-300 rounded-lg"></div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-gray-900">
                            Cerita Kami
                        </h3>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                GoBus didirikan dengan visi untuk menghadirkan standar baru dalam industri transportasi bus di Indonesia. Berawal dari armada kecil, kami terus berkembang dengan komitmen kuat pada kualitas dan kepuasan pelanggan.
                            </p>
                            <p>
                                Dengan pengalaman lebih dari 15 tahun, kami telah melayani ribuan pelanggan untuk berbagai kebutuhan perjalanan, mulai dari wisata keluarga, shuttle karyawan, hingga event-event besar.
                            </p>
                            <p>
                                Tim profesional kami yang berpengalaman, armada modern yang terawat, dan sistem pelayanan yang terorganisir menjadi kunci kesuksesan kami dalam memberikan pengalaman perjalanan terbaik.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="grid md:grid-cols-2 gap-8 mb-20"
                    role="region"
                    aria-label="Visi dan Misi GoBus"
                >
                    {visiMisi.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <article
                                key={index}
                                className="group relative bg-linear-to-br from-blue-50 to-white rounded-lg p-8 border border-blue-100 shadow-lg transition-all duration-300 hover:border-blue-500 hover:shadow-blue-100 hover:-translate-y-2"
                                aria-label={item.title}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-100 to-transparent rounded-bl-full opacity-50"></div>

                                <div className="relative space-y-4">
                                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-linear-to-br from-blue-600 to-blue-700 text-white shadow-lg transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-600 group-hover:scale-110 group-hover:rotate-6">
                                        <Icon className="w-8 h-8" aria-hidden="true" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        )
                    })}
                </div>


                <div className="mb-20" role="region" aria-label="Nilai-nilai perusahaan">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nilai-Nilai Kami
                        </h3>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Prinsip yang menjadi fondasi dalam setiap layanan kami
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {nilaiData.map((nilai, index) => {
                            const Icon = nilai.icon
                            return (
                                <div
                                    key={index}
                                    className="group text-center p-8 bg-white rounded-lg border border-gray-200 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-100"
                                    role="article"
                                    aria-label={nilai.title}
                                >
                                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-linear-to-br from-blue-600 to-blue-700 text-white shadow-lg transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-600 group-hover:scale-110">
                                        <Icon className="w-8 h-8" aria-hidden="true" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3 transition-colors group-hover:text-blue-600">
                                        {nilai.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm">{nilai.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-lg p-12 shadow-lg relative overflow-hidden" role="region" aria-label="Pencapaian perusahaan">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Pencapaian Kami
                            </h3>
                            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                                Angka-angka yang membuktikan dedikasi kami dalam melayani Anda
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {achievementData.map((achievement, index) => {
                                const Icon = achievement.icon
                                return (
                                    <div
                                        key={index}
                                        className="text-center space-y-3 group"
                                        role="article"
                                        aria-label={`${achievement.number} ${achievement.label}`}
                                    >
                                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 mx-auto">
                                            <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                                        </div>
                                        <div className="text-4xl md:text-5xl font-bold text-white">{achievement.number}</div>
                                        <div className="text-blue-100 font-medium">{achievement.label}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}