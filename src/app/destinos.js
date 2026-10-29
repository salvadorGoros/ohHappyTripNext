import Image from "next/image";
import Link from "next/link";

const destinations = [
    {
        name: "Disney World & Disneyland",
        badge: "El clásico más mágico",
        rating: "5.0",
        description: "Parques temáticos icónicos, destinos soñados, planes de comida y recuerdos que duran toda la vida.",
        images: [
            "/img/fireworks.avif",
            "/img/disneyland.jpg",
            "/img/epcot.avif",
            "/img/Hollywood_studios.jpg",
            "/img/AK.jpg",
        ],
    },
    {
        name: "Universal & Epic Universe",
        badge: "Novedad 2025/2026",
        rating: "5.0",
        description: "Aventuras de alto impacto con The Wizarding World of Harry Potter, Super Nintendo World y más.",
        images: [
            "/img/uni-stdios.webp",
            "/img/hogwarts.png",
            "/img/island.png",
            "/img/epic.jpg",
            "/img/volcano.webp",
        ],
    },
    {
        name: "Xcaret y Riviera Maya",
        badge: "Todo incluido",
        rating: "5.0",
        description: "Concepto All-Fun Inclusive con acceso ilimitado a parques como Xplor, Xenses y Xel-Há, además del mar.",
        images: [
            "/img/xcaret.jpg",
            "/img/playa-palma.jpg",
            "/img/playa.webp",
            "/img/playa-barco.webp",
            "/img/playa-carru.jpg",
        ],
    },
    {
        name: "Cruceros Disney & Alta Mar",
        badge: "Diversión para todos",
        rating: "4.9",
        description: "Navega a islas privadas exclusivas como Castaway Cay y disfruta cada día con espectáculos a bordo.",
        images: [
            "/img/crucero-carru.webp",
            "/img/crucero4.png",
            "/img/crucero1.webp",
            "/img/crucero2.png",
            "/img/crucero3.png",
        ],
    },
];

export default function Destinos() {
    return (
        <section
            id="destinos"
            className="flex min-h-screen w-full flex-col justify-center scroll-mt-[70px] bg-[#f8f8ff] px-4 py-14 sm:px-6 lg:px-10 lg:py-20"
        >
            <div className="mx-auto flex w-full max-w-screen-2xl flex-1 flex-col justify-center">
                <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end lg:mb-10">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                            Mundos inolvidables
                        </p>
                        <h2 className="mt-1 text-3xl font-bold text-[#102a50] sm:text-4xl">
                            Destinos Mágicos
                        </h2>
                    </div>
                    <p className="max-w-lg text-base leading-relaxed text-slate-600">
                        Selección curada con acceso preferente, reservas gastronómicas clave y beneficios de tu
                        hospedaje oficial.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {destinations.map((destination) => (
                        <article
                            key={destination.name}
                            className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
                        >
                            <div
                                className="relative h-64 overflow-hidden sm:h-72 lg:h-[clamp(18rem,38vh,30rem)]"
                                role="img"
                                aria-label={`Galería de ${destination.name}`}
                            >
                                <div className="destination-carousel-track flex h-full">
                                    {[...destination.images, ...destination.images].map((image, index) => (
                                        <div
                                            key={`${image}-${index}`}
                                            className="relative h-full w-[10%] flex-none"
                                            aria-hidden={index >= destination.images.length}
                                        >
                                            <Image
                                                src={image}
                                                alt=""
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-[#102a50] shadow-sm">
                                    {destination.badge}
                                </span>
                                <span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-[#102a50] shadow-sm">
                                    ★ {destination.rating}
                                </span>
                            </div>

                            <div className="flex min-h-48 flex-col p-5 sm:p-6">
                                <h3 className="text-lg font-bold text-[#102a50] sm:text-xl">{destination.name}</h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                                    {destination.description}
                                </p>
                                <Link
                                    className="mt-4 inline-flex items-center justify-center rounded-full bg-[#f1f4ff] px-5 py-3 text-sm font-semibold text-[#17458a] transition-colors hover:bg-[#dfe8ff]"
                                    href="/#cotizar"
                                >
                                    Cotizar {destination.name.split(" ")[0]} <span className="ml-1" aria-hidden="true">➜</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
