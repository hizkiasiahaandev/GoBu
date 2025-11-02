"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react"

type FormDataState = {
    nama: string
    email: string
    telepon: string
    layanan: string
    pesan: string
}

type InfoItem = {
    icon: React.ElementType
    title: string
    info: string
    subInfo: string
    link: string | null
}

export default function Kontak() {
    const [formData, setFormData] = useState<FormDataState>({
        nama: "",
        email: "",
        telepon: "",
        layanan: "",
        pesan: ""
    })
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)

    const kontakInfo: InfoItem[] = [
        {
            icon: Phone,
            title: "Telepon",
            info: "+62 812-3456-7890",
            subInfo: "Senin - Minggu, 24/7",
            link: "tel:+6281234567890"
        },
        {
            icon: Mail,
            title: "Email",
            info: "info@gobus.com",
            subInfo: "Respon dalam 1x24 jam",
            link: "mailto:info@gobus.com"
        },
        {
            icon: MapPin,
            title: "Alamat",
            info: "Jl. Gatot Subroto No. 123",
            subInfo: "Medan, Sumatera Utara",
            link: "https://maps.google.com"
        },
        {
            icon: Clock,
            title: "Jam Operasional",
            info: "24 Jam Setiap Hari",
            subInfo: "Siap melayani kapan saja",
            link: null
        }
    ]

    const layananOptions: string[] = [
        "Sewa Bus Pariwisata",
        "Antar Jemput Bandara",
        "Bus Karyawan",
        "Bus Study Tour",
        "Bus Wedding",
        "Paket Wisata"
    ]

    type FormKeys = keyof FormDataState

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name as FormKeys]: value }))
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (!formData.nama || !formData.email || !formData.telepon || !formData.layanan || !formData.pesan) {
            alert("Mohon lengkapi semua field yang wajib diisi")
            return
        }

        setIsSubmitting(true)

        const message = `Halo GoBus,%0A%0ANama: ${formData.nama}%0AEmail: ${formData.email}%0ATelepon: ${formData.telepon}%0ALayanan: ${formData.layanan}%0A%0APesan:%0A${formData.pesan}`
        const whatsappUrl = `https://wa.me/6281234567890?text=${message}`

        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitSuccess(true)
            window.open(whatsappUrl, "_blank")

            setTimeout(() => {
                setSubmitSuccess(false)
                setFormData({ nama: "", email: "", telepon: "", layanan: "", pesan: "" })
            }, 3000)
        }, 1000)
    }

    return (
        <section id="kontak" className="relative py-20 bg-white overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                        <MessageSquare className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Hubungi Kami</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Mari <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Berbicara</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Kami siap membantu Anda merencanakan perjalanan terbaik. Hubungi kami sekarang!
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-6 mb-16">
                    {kontakInfo.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <article
                                key={index}
                                className="group bg-linear-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-blue-100"
                                role="article"
                                aria-label={`${item.title}: ${item.info}`}
                            >
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-linear-to-br from-blue-600 to-blue-700 text-white shadow-lg transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-600 group-hover:scale-110">
                                        <Icon className="w-7 h-7" aria-hidden="true" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                className="block text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                                                aria-label={`${item.title}: ${item.info}`}
                                            >
                                                {item.info}
                                            </a>
                                        ) : (
                                            <p className="text-blue-600 font-semibold text-sm">{item.info}</p>
                                        )}
                                        <p className="text-xs text-gray-600">{item.subInfo}</p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>


                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-gray-900">Kirim Pesan</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda. Atau hubungi langsung melalui WhatsApp untuk respon lebih cepat.
                            </p>
                        </div>

                        <div className="space-y-6" role="form" aria-label="Form kontak GoBus">
                            <div className="space-y-2">
                                <label htmlFor="nama" className="block text-sm font-semibold text-gray-700">
                                    Nama Lengkap <span className="text-red-500" aria-label="wajib diisi">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nama"
                                    name="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                    placeholder="Masukkan nama lengkap Anda"
                                    aria-required="true"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                        Email <span className="text-red-500" aria-label="wajib diisi">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="nama@email.com"
                                        aria-required="true"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="telepon" className="block text-sm font-semibold text-gray-700">
                                        Nomor Telepon <span className="text-red-500" aria-label="wajib diisi">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="telepon"
                                        name="telepon"
                                        value={formData.telepon}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="08123456789"
                                        aria-required="true"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="layanan" className="block text-sm font-semibold text-gray-700">
                                    Layanan yang Diminati <span className="text-red-500" aria-label="wajib diisi">*</span>
                                </label>
                                <select
                                    id="layanan"
                                    name="layanan"
                                    value={formData.layanan}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                                    aria-required="true"
                                >
                                    <option value="">Pilih layanan</option>
                                    {layananOptions.map((layanan, index) => (
                                        <option key={index} value={layanan}>
                                            {layanan}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="pesan" className="block text-sm font-semibold text-gray-700">
                                    Pesan <span className="text-red-500" aria-label="wajib diisi">*</span>
                                </label>
                                <textarea
                                    id="pesan"
                                    name="pesan"
                                    value={formData.pesan}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                                    placeholder="Ceritakan detail kebutuhan perjalanan Anda..."
                                    aria-required="true"
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting || submitSuccess}
                                className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-white text-base font-semibold transition-all duration-300 ${submitSuccess
                                        ? "bg-green-600 hover:bg-green-700"
                                        : "bg-linear-to-br from-blue-600 to-blue-700 hover:scale-105 shadow-lg"
                                    } disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100`}
                                aria-label={submitSuccess ? "Pesan berhasil dikirim" : "Kirim pesan via WhatsApp"}
                            >
                                {submitSuccess ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" aria-hidden="true" />
                                        Pesan Terkirim!
                                    </>
                                ) : isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                                        Mengirim...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" aria-hidden="true" />
                                        Kirim via WhatsApp
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="relative lg:sticky lg:top-24 space-y-8">
                        <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9944896445817!2d98.6736!3d3.5952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzUnNDIuNyJOIDk4wrA0MCcyNS4wIkU!5e0!3m2!1sen!2sid!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi kantor GoBus di Medan"
                                className="rounded-2xl"
                            ></iframe>
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                                <h4 className="font-bold text-gray-900 mb-1">Kantor Pusat GoBus</h4>
                                <p className="text-sm text-gray-600">Jl. Gatot Subroto No. 123, Medan</p>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-lg p-8 shadow-lg text-white space-y-4">
                            <Phone className="w-12 h-12 mb-2" aria-hidden="true" />
                            <h3 className="text-2xl font-bold">Butuh Bantuan Segera?</h3>
                            <p className="text-blue-100">Tim customer service kami siap membantu Anda 24/7 melalui WhatsApp</p>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-white text-blue-600 px-6 py-3 font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                                aria-label="Chat WhatsApp dengan customer service"
                            >
                                <Phone className="w-5 h-5" aria-hidden="true" />
                                Chat WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
