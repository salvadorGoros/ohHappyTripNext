import Image from "next/image";

const profileImage = "/img/andrea.jpg"; // Ejemplo: "/img/mi-foto.jpg"

const services = [
    {
        icon: "🎟️",
        title: "Cero Costo Adicional",
        description: "Mis servicios de planeación ya están incluidos en las tarifas oficiales de los proveedores.",
    },
    {
        icon: "🏷️",
        title: "Monitoreo de Ofertas",
        description: "Si surge una promoción posterior a tu reserva que aplique a tu viaje, la aplicamos de inmediato.",
    },
    {
        icon: "🗺️",
        title: "Guía Paso a Paso",
        description: "Tips de filas virtuales, Lightning Lane, restaurantes con vista y aplicaciones móviles.",
    },
    {
        icon: "📞",
        title: "Soporte Durante Tu Viaje",
        description: "Contáctame por WhatsApp para resolver dudas en tiempo real mientras disfrutas tus vacaciones.",
    },
];

export default function Nosotros() {
    return (
        <section
            id="nosotros"
            className="hero-bg scroll-mt-[70px] flex min-h-[calc(100vh-55px)] w-full items-center px-4 py-8 sm:px-6 lg:px-8"
        >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-8 rounded-2xl bg-[#f0f3ff] p-6 sm:p-8 md:grid-cols-[0.85fr_1.5fr] md:gap-12 lg:p-10">
                <div className="flex flex-col items-center">
                    <div className="relative aspect-[4/4.3] w-full max-w-[280px] overflow-hidden rounded-2xl border-[6px] border-white bg-[#dceaff] shadow-md">
                        {profileImage ? (
                            <>
                                <Image
                                    src={profileImage}
                                    alt="Foto de la asesora de Oh Happy Trip"
                                    fill
                                    sizes="(max-width: 768px) 80vw, 280px"
                                    className="object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-white/95 px-3 py-2 text-center">
                                    <p className="text-sm font-semibold text-[#102a50] sm:text-base">Tu asesora de viajes</p>
                                    <p className="text-xs text-slate-600 sm:text-sm">Fundadora y asesora certificada</p>
                                </div>
                            </>
                        ) : (
                            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-slate-600 sm:text-base">
                                Agrega aquí la ruta de tu imagen
                            </div>
                        )}
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {["Disney Certified Specialist", "Universal Specialist", "Especialista Xcaret"].map((badge) => (
                            <span
                                key={badge}
                                className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#075985] shadow-sm sm:text-sm"
                            >
                                ✧ {badge}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#0874a5] sm:text-sm">
                        Tu aliada de confianza
                    </p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight text-[#08234a] sm:text-3xl lg:text-4xl">
                        &quot;Mi misión es que tú solo te preocupes por empacar y coleccionar sonrisas.&quot;
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                        Viajar a parques temáticos y destinos de playa es una inversión emocional invaluable.
                        Como asesora oficial, transformo la compleja logística de reservaciones de atracciones,
                        restaurantes populares y transporte en un itinerario fluido, personalizado y sin estrés.
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {services.map((service) => (
                            <article
                                key={service.title}
                                className="rounded-xl bg-white p-4 shadow-sm"
                            >
                                <h3 className="text-sm font-semibold text-[#102a50] sm:text-base">
                                    <span className="mr-2 text-base text-[#0874a5] sm:text-lg" aria-hidden="true">{service.icon}</span>
                                    {service.title}
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                                    {service.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <a
                        className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#006a9c] px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#00547c] sm:text-base"
                        href="https://wa.me/525519647258"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ▣ Platicar por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
