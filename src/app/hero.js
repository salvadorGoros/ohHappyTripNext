import Image from "next/image";

export default function Hero() {
    return (
        <div id="hero"
            className="hero-bg flex min-h-[calc(100vh-55px)] w-full flex-col items-center justify-center scroll-mt-[70px]">
            <h1 className="text-3xl font-bold text-center p-4 sm:p-6 sm:text-5xl lg:p-10 lg:text-7xl">
                Tu viaje soñado no se
                <br/>
                improvisa: se planea con
                <br/>
                magia, detalle y sin estrés</h1>
            <h2 className="px-4 py-2 text-center text-base sm:px-6 sm:text-lg lg:px-10 lg:text-2xl">
                Diseño itinerarios exclusivos, aseguro las mejores promociones y te acompaño<br/>
                paso a paso para que tú solo disfrutes cada instante memorable.</h2>
            <div className="flex flex-col items-stretch gap-3 px-4 py-8 text-center text-sm sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-14 sm:text-base lg:px-10 lg:py-20 lg:text-lg">
                <a
                    className="flex items-center justify-center gap-3 rounded-full bg-[#f5e086] px-5 py-3 text-black transition-colors hover:bg-[#f3ce2a] sm:px-7 sm:py-5"
                    href="#cotizar">
                    <span className="text-2xl sm:text-3xl" aria-hidden="true">🛫</span>
                    Cuentame tu viaje (Cotizar Gratis)
                </a>

                <a
                    className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-blue-500 transition-colors hover:bg-[#b4e8f1] sm:px-7 sm:py-5"
                    href="https://wa.me/525519647258"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image src="/img/whats.png" alt="" width={20} height={20}/>
                    Escríbeme por WhatsApp
                </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 p-4 sm:gap-4 sm:p-10">
                <div className="flex items-center gap-3 rounded-lg bg-white p-4 sm:p-5">
                    <span className="text-2xl sm:text-3xl" aria-hidden="true">⚙️</span>
                    <div>
                        <p className="text-sm font-semibold sm:text-base">100% Personalizado</p>
                        <p className="text-xs sm:text-sm">Diseñado especialmente a tu medida</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-white p-4 sm:p-5">
                    <span className="text-2xl sm:text-3xl" aria-hidden="true">🏷️</span>
                    <div>
                        <p className="text-sm font-semibold sm:text-base">Sin Cargos Ocultos</p>
                        <p className="text-xs sm:text-sm">Mismo precio oficial o menor</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-white p-4 sm:p-5">
                    <span className="text-2xl sm:text-3xl" aria-hidden="true">⭐</span>
                    <div>
                        <p className="text-sm font-semibold sm:text-base">Agente Certificada</p>
                        <p className="text-xs sm:text-sm">Disney, Universal y Xcaret</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-white p-4 sm:p-5">
                    <span className="text-2xl sm:text-3xl" aria-hidden="true">🎧</span>
                    <div>
                        <p className="text-sm font-semibold sm:text-base">Acompañamiento Total</p>
                        <p className="text-xs sm:text-sm">Antes y durante todo tu viaje</p>
                    </div>
                </div>
            </div>
        </div>
    );
}