"use client";

import { useState } from "react";

const fieldClassName =
    "mt-1 w-full rounded-lg border border-transparent bg-[#f7f8fc] px-3 py-2.5 text-sm text-[#102a50] outline-none transition focus:border-[#1684b3] focus:ring-2 focus:ring-[#1684b3]/20";
const labelClassName = "block text-sm font-medium text-[#102a50]";

export default function Cotizar() {
    const [minorCount, setMinorCount] = useState("0");
    const [childAges, setChildAges] = useState([]);
    const [whatsAppUrl, setWhatsAppUrl] = useState("");
    const [travelDocumentsChoice, setTravelDocumentsChoice] = useState(null);

    function handleMinorCountChange(event) {
        const value = event.target.value;
        setMinorCount(value);

        const count = Math.min(Math.max(Number(value) || 0, 0), 10);
        setChildAges((currentAges) =>
            Array.from({ length: count }, (_, index) => currentAges[index] ?? "")
        );
    }

    function handleChildAgeChange(index, value) {
        setChildAges((currentAges) =>
            currentAges.map((age, ageIndex) => (ageIndex === index ? value : age))
        );
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const ages = childAges.join(", ") || "No viajan menores";
        const message = [
            "Hola, quiero solicitar una cotización de viaje.",
            "",
            `Nombre: ${formData.get("fullName")}`,
            `WhatsApp con lada: ${formData.get("phone")}`,
            `Destino preferido: ${formData.get("destination")}`,
            `Mes o fecha estimada: ${formData.get("travelDate")}`,
            `Adultos (18 años o más): ${formData.get("adults")}`,
            `Menores de 18 años: ${minorCount}`,
            `Edades de los menores: ${ages}`,
            `Servicio: ${formData.get("service")}`,
            `Presupuesto estimado: ${formData.get("budget")}`,
            `Celebración o detalles: ${formData.get("details") || "Ninguno"}`,
        ].join("\n");
        const url = `https://wa.me/525519647258?text=${encodeURIComponent(message)}`;

        setWhatsAppUrl(url);
        window.open(url, "_blank", "noopener,noreferrer");
    }

    const documentsConfirmed = travelDocumentsChoice === "yes";

    return (
        <section
            id="cotizar"
            className="hero-bg flex min-h-[calc(100vh-55px)] w-full scroll-mt-[70px] items-center justify-center px-4 py-8 sm:px-6"
        >
            <div className="relative w-full max-w-4xl rounded-2xl bg-white p-5 shadow-md sm:p-8">
                <input
                    className="sr-only"
                    aria-describedby="travel-documents-title"
                    checked={travelDocumentsChoice === "yes"}
                    id="travel-documents-yes"
                    name="travel-documents"
                    onChange={() => setTravelDocumentsChoice("yes")}
                    type="radio"
                    value="yes"
                />
                <input
                    className="sr-only"
                    aria-describedby="travel-documents-title"
                    checked={travelDocumentsChoice === "no"}
                    id="travel-documents-no"
                    name="travel-documents"
                    onChange={() => setTravelDocumentsChoice("no")}
                    type="radio"
                    value="no"
                />

                <div
                    aria-hidden={!documentsConfirmed}
                    className={`transition-[filter,opacity] duration-300 ${
                        documentsConfirmed ? "pointer-events-auto select-auto opacity-100 blur-0" : "pointer-events-none select-none opacity-50 blur-sm"
                    }`}
                >
                    <div className="mx-auto mb-6 max-w-2xl text-center">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#0874a5] sm:text-sm">
                            Sin compromiso • 100% gratuito
                        </p>
                        <h2 className="mt-2 text-2xl font-bold text-[#102a50] sm:text-3xl">
                            Solicita tu Cotización a Medida
                        </h2>
                        <p className="mt-1 text-sm text-slate-600">
                            Completa los detalles de tu plan. Te enviaré opciones oficiales con las promociones vigentes.
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className={labelClassName}>
                                Nombre completo *
                                <input
                                    className={fieldClassName}
                                    type="text"
                                    name="fullName"
                                    autoComplete="name"
                                    placeholder="Ej. Ana Patricia Flores"
                                    required
                                />
                            </label>
                            <label className={labelClassName}>
                                WhatsApp con lada *
                                <input
                                    className={fieldClassName}
                                    type="tel"
                                    name="phone"
                                    autoComplete="tel"
                                    placeholder="Ej. +52 811 234 5678"
                                    required
                                />
                            </label>
                        </div>

                        <p className="-mt-2 rounded-lg bg-[#eef3ff] px-3 py-2 text-xs text-slate-600">
                            El seguimiento de tu solicitud será por WhatsApp.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className={labelClassName}>
                                Destino preferido *
                                <select className={fieldClassName} name="destination" defaultValue="" required>
                                    <option value="" disabled>Selecciona tu destino...</option>
                                    <option>Walt Disney World</option>
                                    <option>Disneyland Resort</option>
                                    <option>Universal Orlando</option>
                                    <option>Xcaret</option>
                                    <option>Playa</option>
                                    <option>Crucero</option>
                                    <option>Otro / Aún no lo decido</option>
                                </select>
                            </label>
                            <label className={labelClassName}>
                                Mes o fecha estimada de viaje *
                                <input
                                    className={fieldClassName}
                                    type="text"
                                    name="travelDate"
                                    placeholder="Ej. Octubre 2026 o 15–22 de julio"
                                    required
                                />
                            </label>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <label className={labelClassName}>
                                Adultos (18 años o más) *
                                <input
                                    className={fieldClassName}
                                    type="number"
                                    name="adults"
                                    min="1"
                                    max="20"
                                    step="1"
                                    defaultValue="2"
                                    required
                                />
                            </label>
                            <label className={labelClassName}>
                                Menores de 18 años
                                <input
                                    className={fieldClassName}
                                    type="number"
                                    name="minorCount"
                                    min="0"
                                    max="10"
                                    step="1"
                                    value={minorCount}
                                    onChange={handleMinorCountChange}
                                    required
                                />
                            </label>
                            <div>
                                <p className={labelClassName}>Edades de los menores</p>
                                {childAges.length === 0 ? (
                                    <p className={`${fieldClassName} text-slate-500`}>No viajan menores</p>
                                ) : (
                                    <div className="grid grid-cols-2 gap-2">
                                        {childAges.map((age, index) => (
                                            <label className={labelClassName} key={index}>
                                                Menor {index + 1} *
                                                <input
                                                    className={fieldClassName}
                                                    type="number"
                                                    name={`childAge${index + 1}`}
                                                    min="0"
                                                    max="17"
                                                    step="1"
                                                    value={age}
                                                    onChange={(event) => handleChildAgeChange(index, event.target.value)}
                                                    placeholder={`Menor ${index + 1}`}
                                                    aria-label={`Edad del menor ${index + 1}`}
                                                    required
                                                />
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className={labelClassName}>
                                Servicios que requieres *
                                <select className={fieldClassName} name="service" defaultValue="" required>
                                    <option value="" disabled>Selecciona un servicio...</option>
                                    <option>Paquete completo (Hospedaje + Boletos)</option>
                                    <option>Hospedaje</option>
                                    <option>Boletos y entradas</option>
                                    <option>Crucero</option>
                                    <option>Asesoría de viaje</option>
                                    <option>Otro</option>
                                </select>
                            </label>
                            <label className={labelClassName}>
                                Presupuesto estimado *
                                <select className={fieldClassName} name="budget" defaultValue="" required>
                                    <option value="" disabled>Selecciona un presupuesto...</option>
                                    <option>Económico / Ofertas</option>
                                    <option>Moderado</option>
                                    <option>Confort</option>
                                    <option>Premium</option>
                                    <option>Por definir</option>
                                </select>
                            </label>
                        </div>

                        <label className={labelClassName}>
                            Especificaciones del viaje
                            <textarea
                                className={`${fieldClassName} min-h-24 resize-y`}
                                name="details"
                                placeholder="Ej. Cumpleaños, primer viaje a Disney, aniversario o preferencia de habitación..."
                                rows="3"
                            />
                        </label>

                        <p className="rounded-lg bg-[#eef3ff] p-3 text-xs leading-relaxed text-slate-600">
                            Al enviar, se abrirá WhatsApp con los datos de tu solicitud para que puedas revisarlos y enviarlos.
                            La cotización final dependerá de la disponibilidad y las tarifas vigentes.
                        </p>

                        <div className="text-center">
                            <button
                                className="rounded-full bg-[#f3da69] px-6 py-3 text-sm font-semibold text-[#102a50] shadow-md transition-colors hover:bg-[#f3ce2a] sm:px-8 sm:text-base"
                                type="submit"
                            >
                                ▻ Enviar solicitud de cotización por WhatsApp
                            </button>
                            <p className="mt-2 text-xs text-slate-500">
                                WhatsApp se abrirá con tu solicitud preparada para enviar.
                            </p>
                            {whatsAppUrl && (
                                <p className="mt-2 text-sm text-slate-600" role="status">
                                    Si WhatsApp no se abrió,{" "}
                                    <a
                                        className="font-semibold text-[#0874a5] underline"
                                        href={whatsAppUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ábrelo desde aquí
                                    </a>.
                                </p>
                            )}
                        </div>
                    </form>
                </div>

                {!documentsConfirmed && (
                    <div
                        aria-labelledby="travel-documents-title"
                        className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-white/30 p-4 backdrop-blur-[2px]"
                    >
                        <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl sm:p-8">
                            <p className="text-3xl" aria-hidden="true">✈️</p>
                            <h2
                                id="travel-documents-title"
                                className="mt-3 text-xl font-bold text-[#102a50] sm:text-2xl"
                            >
                                Antes de cotizar
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                                ¿Todos los viajeros cuentan con visa y pasaporte estadounidense vigentes?
                            </p>

                            {travelDocumentsChoice === "no" && (
                                <p className="mt-5 rounded-lg bg-[#eef3ff] p-3 text-sm text-slate-700">
                                    Para continuar con esta solicitud, todos los viajeros deben contar con esos documentos vigentes.
                                </p>
                            )}

                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                <button
                                    type="button"
                                    className="rounded-full bg-[#0874a5] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#06628a] sm:text-base"
                                    onClick={() => setTravelDocumentsChoice("yes")}
                                >
                                    Sí, todos los tienen
                                </button>
                                <button
                                    type="button"
                                    className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 sm:text-base"
                                    onClick={() => setTravelDocumentsChoice("no")}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
