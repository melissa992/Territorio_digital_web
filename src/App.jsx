import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  Database,
  FileAudio,
  FileText,
  ImageIcon,
  MapPin,
  Menu,
  Music,
  Sparkles,
  Upload,
  Users,
  Video,
  X,
} from "lucide-react";
import {
  CATEGORIA_ICONS,
  CATEGORIAS,
  COMUNIDADES,
  DIVERSIDADES,
  FORMATO_STYLES,
  MUNICIPIOS,
  SABERES,
} from "./data";

const quickFilters = ["Todos", ...MUNICIPIOS];
const cardAccents = [
  "border-l-[#f59e0b]",
  "border-l-[#ef4444]",
  "border-l-[#0f4c5c]",
  "border-l-[#14b8a6]",
  "border-l-[#f97316]",
];
const metricIconAccents = [
  "border-amber-200 bg-amber-50 text-amber-700",
  "border-rose-200 bg-rose-50 text-rose-700",
  "border-cyan-200 bg-cyan-50 text-cyan-700",
  "border-yellow-200 bg-yellow-50 text-yellow-700",
];

const metricCards = [
  { value: "5+", label: "Territorios", icon: MapPin },
  { value: "100+", label: "Saberes Digitalizados", icon: Database },
  { value: "6 Meses", label: "de Ejecución", icon: Sparkles },
  { value: "100%", label: "Acceso Abierto", icon: Users },
];

const integrantes = [
  "JHADE MICHELLE FRANCO COQUE",
  "ANGIE MELISSA OCORO HURTADO",
  "DERLIN VANESSA OCORO HURTADO",
  "YAZMIN ANDREA RODRIGUEZ SANCHEZ",
  "CRISTHIAN ANDRES MONCADA GONZALEZ",
];

function TerritorioLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-2xl border border-amber-200/80 bg-[#fffaf0] p-2 shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-2 ring-amber-300/20">
        <img
          src="/logo.jpeg"
          alt="Territorio Digital logo"
          className="h-16 w-auto max-w-[220px] rounded-xl object-contain"
        />
      </div>
    </div>
  );
}

function App() {
  const [selectedMunicipio, setSelectedMunicipio] = useState("Todos");
  const [selectedCategoria, setSelectedCategoria] = useState("Todas");
  const [selectedComunidad, setSelectedComunidad] = useState("Todas");
  const [selectedDiversidad, setSelectedDiversidad] = useState("Todas");
  const [selectedSaber, setSelectedSaber] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submittedSaberes, setSubmittedSaberes] = useState([]);
  const [formData, setFormData] = useState({
    titulo: "",
    municipio: "Cali",
    categoria: "Oralidad",
    descripcion: "",
  });
  const [files, setFiles] = useState([]);

  const allSaberes = useMemo(
    () => [...submittedSaberes, ...SABERES],
    [submittedSaberes],
  );

  const filteredSaberes = useMemo(() => {
    return allSaberes.filter((saber) => {
      const matchesMunicipio =
        selectedMunicipio === "Todos" || saber.municipio === selectedMunicipio;
      const matchesCategoria =
        selectedCategoria === "Todas" || saber.categoria === selectedCategoria;
      const matchesComunidad =
        selectedComunidad === "Todas" || saber.comunidad === selectedComunidad;
      const matchesDiversidad =
        selectedDiversidad === "Todas" || saber.diversidad === selectedDiversidad;

      return (
        matchesMunicipio &&
        matchesCategoria &&
        matchesComunidad &&
        matchesDiversidad
      );
    });
  }, [allSaberes, selectedCategoria, selectedComunidad, selectedDiversidad, selectedMunicipio]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const incoming = Array.from(event.target.files || []);
    setFiles((prev) => [...prev, ...incoming]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const incoming = Array.from(event.dataTransfer.files || []);
    setFiles((prev) => [...prev, ...incoming]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const imageFile = files.find((file) => file.type.startsWith("image/"));
    const formato = imageFile
      ? "FOTOGRAFÍA JPG"
      : files.some((file) => file.type.startsWith("video/"))
        ? "VIDEO MP4"
        : files.some((file) => file.type.startsWith("audio/"))
          ? "AUDIO MP3"
          : "DOCUMENTO PDF";

    setSubmittedSaberes((prev) => [
      {
        id: `registro-${Date.now()}`,
        formato,
        municipio: formData.municipio,
        titulo: formData.titulo,
        autor: "Registro comunitario",
        categoria: formData.categoria,
        imagen: imageFile ? URL.createObjectURL(imageFile) : "/comunidad.jpeg",
        descripcion: formData.descripcion,
        historia: formData.descripcion,
        comunidad: "Colectivos culturales urbanos",
        diversidad: "Comunidades mestizas",
      },
      ...prev,
    ]);
    setIsSubmitted(true);
  };

  const handleSectionNavigation = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] text-slate-800">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="animate-drift absolute left-[-10%] top-[-8%] h-80 w-80 rounded-full bg-amber-300/25 blur-3xl" />
        <div className="animate-drift-slow absolute right-[-8%] top-32 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="animate-drift absolute bottom-[-10%] left-1/3 h-80 w-80 rounded-full bg-indigo-200/25 blur-3xl" />
      </div>

      <header className="relative sticky top-0 z-40 border-b border-yellow-200/60 bg-[linear-gradient(105deg,#c88700_0%,#2456a6_36%,#ed7d24_68%,#c9402f_100%)] backdrop-blur-xl shadow-[0_10px_28px_rgba(91,55,31,0.26)]">
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <TerritorioLogo />
            <div className="hidden max-w-[260px] border-l border-amber-200/30 pl-3 sm:block">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-200">
                Proyecto
              </p>
              <p className="text-[10px] font-semibold uppercase leading-4 tracking-[0.08em] text-white">
                Territorio Digital – Ingenio Mayaguez / Universidad ICESI
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 text-sm md:flex">
            <a
              href="#repositorio"
              className="rounded-full border border-white/65 bg-white/80 px-4 py-2 font-semibold text-[#123b63] shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:border-white hover:bg-white"
            >
              Repositorio
            </a>
            <a
              href="#comunidades"
              onClick={(event) => handleSectionNavigation(event, "comunidades")}
              className="rounded-full border border-white/65 bg-white/80 px-4 py-2 font-semibold text-[#123b63] shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:border-white hover:bg-white"
            >
              Comunidades
            </a>
            <a
              href="#integrantes"
              onClick={(event) => handleSectionNavigation(event, "integrantes")}
              className="rounded-full border border-white/65 bg-white/80 px-4 py-2 font-semibold text-[#123b63] shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:border-white hover:bg-white"
            >
              Integrantes
            </a>
            <a
              href="#cargar-saber"
              className="rounded-full border border-yellow-200 bg-yellow-300 px-4 py-2 font-bold text-[#4a2700] shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-yellow-200"
            >
              Cargar Saber
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
            }
            className="rounded-full border border-white/30 bg-white/15 p-2 shadow-[0_6px_16px_rgba(0,0,0,0.16)] transition hover:bg-white/25 md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </nav>
        <div className="header-spectrum" aria-hidden="true" />
        {mobileMenuOpen && (
          <div className="border-t border-white/15 bg-[#6f2b24] px-4 py-3 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {[
                ["Repositorio", "#repositorio"],
                ["Comunidades", "#comunidades"],
                ["Cargar Saber", "#cargar-saber"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={(event) => {
                    setMobileMenuOpen(false);
                    handleSectionNavigation(event, href.slice(1));
                  }}
                  className="rounded-full border border-white/60 bg-white/85 px-4 py-2.5 text-sm font-semibold text-[#123b63] shadow-sm transition hover:bg-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="animate-rise max-w-3xl">
              <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[0.98] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Territorio Digital
              </h1>
              <p className="mt-5 text-lg font-bold uppercase tracking-[0.2em] text-[#c58a00]">
                Diversidad • Cultura • Colombia
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Preservamos la memoria colectiva del departamento, conectando
                comunidades, saberes ancestrales, músicas, gastronomías y
                relatos vivos de la cultura afrocolombiana y mestiza del Valle
                del Cauca.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#repositorio"
                  className="banner-button inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#123b63] bg-[#123b63]/10 px-5 py-3 text-sm font-semibold text-[#123b63] shadow-[0_8px_20px_rgba(18,59,99,0.12)] backdrop-blur-sm transition hover:-translate-y-1 hover:bg-[#123b63]/20"
                >
                  Explorar saberes
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#cargar-saber"
                  className="banner-button banner-button-warm inline-flex items-center justify-center rounded-xl border-2 border-[#c58a00] bg-[#c58a00]/12 px-5 py-3 text-sm font-semibold text-[#805500] shadow-[0_8px_20px_rgba(197,138,0,0.12)] backdrop-blur-sm transition hover:-translate-y-1 hover:bg-[#c58a00]/22"
                >
                  Compartir un saber
                </a>
              </div>
            </div>

            <div
              className="animate-rise relative"
              style={{ animationDelay: "120ms" }}
            >
              <div className="absolute -inset-3 rounded-[2rem] border border-amber-300/50" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-slate-900 shadow-[0_24px_70px_rgba(15,56,61,0.18)]">
                <img
                  src="/comunidad.jpeg"
                  alt="Integrantes de la Escuela de Liderazgo Mayagüez reunidos en comunidad"
                  className="community-photo h-[360px] w-full object-cover opacity-90 sm:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102d31] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <p className="text-xs font-mono uppercase tracking-[0.22em] text-amber-200">
                    Escuela de Liderazgo Mayagüez
                  </p>
                  <p className="mt-2 max-w-sm text-2xl font-bold leading-tight">
                    Somos Comunidad
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {metricCards.map(({ value, label, icon: Icon }, index) => (
              <div
                key={label}
                className={`rounded-2xl border border-slate-200 border-t-4 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(14,116,144,0.08)] ${
                  [
                    "border-t-amber-400",
                    "border-t-rose-400",
                    "border-t-cyan-400",
                    "border-t-orange-400",
                  ][index]
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`rounded-lg border p-1.5 ${metricIconAccents[index]}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Métrica
                  </span>
                </div>
                <div className="mt-3 text-2xl font-black text-slate-900">
                  {value}
                </div>
                <div className="mt-1 text-xs text-slate-600">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="repositorio"
          className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
        >
          <div className="mb-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
              <div className="mb-3 flex items-center gap-2 text-[#ef4444]">
                <Database className="h-5 w-5" />
                <span className="text-xs font-mono uppercase tracking-[0.24em]">
                  Repositorio de datos
                </span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Catálogo de Saberes Culturales
              </h2>
              </div>
              <p className="text-sm font-medium text-slate-500">
                {filteredSaberes.length} resultados disponibles
              </p>
            </div>
            <div className="mt-5 grid gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 sm:grid-cols-2 lg:grid-cols-4">
              <label className="grid gap-1.5 text-xs font-semibold text-slate-600">
                Municipio
                <select
                  value={selectedMunicipio}
                  onChange={(event) => setSelectedMunicipio(event.target.value)}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-normal text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                >
                  {quickFilters.map((municipio) => (
                    <option key={municipio} value={municipio}>
                      {municipio}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1.5 text-xs font-semibold text-slate-600">
                Categoría
                <select
                  value={selectedCategoria}
                  onChange={(event) => setSelectedCategoria(event.target.value)}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-normal text-slate-800 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                >
                  <option value="Todas">Todas</option>
                  {CATEGORIAS.map((categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1.5 text-xs font-semibold text-slate-600">
                Comunidad
                <select
                  value={selectedComunidad}
                  onChange={(event) => setSelectedComunidad(event.target.value)}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-normal text-slate-800 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                >
                  {COMUNIDADES.map((comunidad) => (
                    <option key={comunidad} value={comunidad}>
                      {comunidad}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1.5 text-xs font-semibold text-slate-600">
                Diversidad étnica
                <select
                  value={selectedDiversidad}
                  onChange={(event) => setSelectedDiversidad(event.target.value)}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-normal text-slate-800 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                >
                  {DIVERSIDADES.map((diversidad) => (
                    <option key={diversidad} value={diversidad}>
                      {diversidad}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredSaberes.map((saber, index) => {
              const formatConfig = FORMATO_STYLES[saber.formato];
              const FormatIcon = formatConfig.icono;
              const CategoryIcon = CATEGORIA_ICONS[saber.categoria];

              return (
                <article
                  key={saber.id}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-200 border-l-4 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 hover:shadow-[0_18px_38px_rgba(14,116,144,0.12)] ${cardAccents[index % cardAccents.length]}`}
                >
                  <img
                    src={saber.imagen}
                    alt={saber.titulo}
                    className="-mx-5 -mt-5 mb-5 h-48 w-[calc(100%+2.5rem)] object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.16em] ${formatConfig.clase}`}
                    >
                      <FormatIcon className="h-3.5 w-3.5" />
                      {saber.formato}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {saber.municipio}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-700">
                      <CategoryIcon className="h-3.5 w-3.5 text-[#ef4444]" />
                      {saber.categoria}
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-6 text-slate-900">
                    {saber.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {saber.descripcion}
                  </p>
                  <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                    <span className="text-xs font-mono uppercase tracking-[0.18em] text-slate-500">
                      Portador
                    </span>
                    <p className="mt-2">{saber.autor}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedSaber(saber)}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-2.5 text-sm font-medium text-orange-700 transition hover:bg-orange-100"
                  >
                    Ver detalles
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="comunidades"
          className="scroll-mt-24 mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
        >
          <div className="overflow-hidden rounded-3xl border border-cyan-200 bg-[#eefbfa] shadow-[0_18px_50px_rgba(14,116,144,0.08)]">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:p-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-blue-700">
                  <Users className="h-4 w-4" />
                  Comunidades
                </span>
                <h2 className="mt-4 text-3xl font-black leading-tight text-[#123b63] sm:text-4xl">
                  Un territorio, muchas voces
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                  Conectamos experiencias de Buenaventura, Cali, Jamundí,
                  Palmira y Buga para que cada comunidad pueda reconocer su
                  historia y compartirla con otras.
                </p>
                <div className="mt-6 rounded-2xl border border-blue-200 bg-white/75 p-4">
                  <p className="text-xs font-mono uppercase tracking-[0.18em] text-blue-700">
                    Filtrar por territorio
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {quickFilters.map((municipio) => (
                      <button
                        key={municipio}
                        type="button"
                        onClick={() => setSelectedMunicipio(municipio)}
                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition hover:-translate-y-0.5 ${
                          selectedMunicipio === municipio
                            ? "border-[#123b63] bg-[#123b63] text-white shadow-sm"
                            : "border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:text-orange-700"
                        }`}
                      >
                        {municipio}
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-slate-500">
                    {selectedMunicipio === "Todos"
                      ? `${allSaberes.length} saberes disponibles en el territorio`
                      : `${filteredSaberes.length} saberes registrados en ${selectedMunicipio}`}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {MUNICIPIOS.map((municipio, index) => (
                  <button
                    key={municipio}
                    type="button"
                    onClick={() => setSelectedMunicipio(municipio)}
                    className={`rounded-2xl border p-4 text-center shadow-sm transition hover:-translate-y-1 ${
                      [
                        "border-yellow-200 bg-yellow-50",
                        "border-blue-200 bg-blue-50",
                        "border-orange-200 bg-orange-50",
                        "border-red-200 bg-red-50",
                        "border-cyan-200 bg-cyan-50",
                      ][index]
                    } ${selectedMunicipio === municipio ? "ring-2 ring-[#123b63] ring-offset-2" : "opacity-80 hover:opacity-100"}`}
                  >
                    <MapPin className="mx-auto h-5 w-5 text-slate-700" />
                    <p className="mt-2 text-sm font-semibold text-slate-800">
                      {municipio}
                    </p>
                    <span className="mt-1 block text-[11px] text-slate-500">
                      {allSaberes.filter((saber) => saber.municipio === municipio).length} saberes
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="integrantes"
          className="scroll-mt-24 mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
        >
          <div className="folklore-panel overflow-hidden rounded-3xl border border-amber-200 bg-[#fffaf0] shadow-[0_18px_50px_rgba(146,64,14,0.08)]">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-rose-700">
                  <Users className="h-4 w-4" />
                  Integrantes
                </div>
                <h2 className="max-w-lg text-3xl font-black leading-tight text-[#713f12] sm:text-4xl">
                  Escuela de Liderazgo Mayagüez
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-[#854d0e]">
                  Un equipo que reconoce, protege y comparte los saberes que
                  mantienen viva la memoria del territorio.
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm font-medium text-rose-700">
                  <span className="h-px w-10 bg-rose-300" />
                  Liderazgo, identidad y participación
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {integrantes.map((integrante, index) => (
                  <div
                    key={integrante}
                    className={`rounded-2xl border bg-white/85 p-4 shadow-sm transition hover:-translate-y-1 ${
                      index % 2 === 0
                        ? "border-amber-200 hover:border-amber-400"
                        : "border-rose-200 hover:border-rose-400"
                    } ${index === integrantes.length - 1 ? "sm:col-span-2" : ""}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 font-mono text-xs font-bold text-amber-800 ring-4 ring-amber-50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-1 text-sm font-semibold leading-5 text-slate-800">
                        {integrante}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="cargar-saber"
          className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
        >
          <div className="rounded-3xl border border-slate-200 border-t-4 border-t-cyan-400 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-[#0f4c5c]">
                      <BookOpen className="h-5 w-5" />
                      <span className="text-xs font-mono uppercase tracking-[0.24em]">
                        Participación abierta
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      Ingresar Nuevo Saber Cultural
                    </h2>
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-slate-600">
                      Título del saber
                    </span>
                    <input
                      name="titulo"
                      value={formData.titulo}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                      placeholder="Ej. Canto de alabaos de la familia Londoño"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-slate-600">
                      Municipio
                    </span>
                    <select
                      name="municipio"
                      value={formData.municipio}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                    >
                      {MUNICIPIOS.map((municipio) => (
                        <option key={municipio} value={municipio}>
                          {municipio}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block lg:col-span-2">
                    <span className="mb-2 block text-sm text-slate-600">
                      Categoría
                    </span>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {CATEGORIAS.map((categoria) => (
                        <button
                          key={categoria}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, categoria }))
                          }
                          className={`rounded-xl border px-3 py-2.5 text-sm transition ${
                            formData.categoria === categoria
                              ? "border-orange-300 bg-orange-50 text-orange-800"
                              : "border-slate-200 bg-white text-slate-700"
                          }`}
                        >
                          {categoria}
                        </button>
                      ))}
                    </div>
                  </label>

                  <label className="block lg:col-span-2">
                    <span className="mb-2 block text-sm text-slate-600">
                      Descripción / Historia
                    </span>
                    <textarea
                      name="descripcion"
                      value={formData.descripcion}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                      placeholder="Relata la historia, el contexto y la comunidad que transmite este saber cultural..."
                    />
                  </label>
                </div>

                <div
                  onDragOver={(event) => {
                    event.preventDefault();
                    setDragActive(true);
                  }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={handleDrop}
                  className={`rounded-2xl border border-dashed p-6 text-center transition ${
                    dragActive
                      ? "border-orange-300 bg-orange-50"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700">
                    <Upload className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-base text-slate-700">
                    Arrastra y suelta archivos aquí
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Audio, imágenes, PDF y materiales de archivo comunitario
                  </p>
                  <label className="mt-4 inline-flex cursor-pointer items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-slate-300">
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    Seleccionar archivos
                  </label>
                  {files.length > 0 && (
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {files.map((file, index) => (
                        <span
                          key={`${file.name}-${index}`}
                          className="rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs text-orange-800"
                        >
                          {file.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-[#0f4c5c] px-5 py-3 font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:brightness-110"
                  >
                    Publicar Registro en la Memoria Digital
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 ring-8 ring-cyan-100">
                  <BadgeCheck className="h-10 w-10" />
                </div>
                <h3 className="mt-6 text-3xl font-bold text-slate-900">
                  Registro publicado con éxito
                </h3>
                <p className="mt-3 max-w-xl text-slate-600">
                  Tu saber cultural está ahora en la memoria digital del
                  ecosistema Territorio Digital y será visible para la
                  comunidad.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-slate-300"
                >
                  Cargar otro registro
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          Territorio Digital • Proyecto Universidad ICESI & Ingenio Mayagüez •
          Valle del Cauca
        </div>
      </footer>

      {selectedSaber && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-sm">
          <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 border-t-4 border-t-cyan-400 bg-white p-6 shadow-2xl shadow-slate-300/50">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-cyan-700">
                  {selectedSaber.formato}
                </span>
                <img
                  src={selectedSaber.imagen}
                  alt={selectedSaber.titulo}
                  className="mt-4 h-52 w-full rounded-2xl object-cover"
                />
                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {selectedSaber.titulo}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSaber(null)}
                className="rounded-full border border-slate-200 p-2 text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500">
                  Municipio
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-700">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  {selectedSaber.municipio}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500">
                  Categoría
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  {selectedSaber.categoria}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500">
                  Autor
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  {selectedSaber.autor}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm leading-7 text-slate-600">
                {selectedSaber.historia}
              </p>
            </div>

            {selectedSaber.fuente && (
              <a
                href={selectedSaber.fuente}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800 transition hover:border-amber-400 hover:bg-amber-100"
              >
                Consultar referencia cultural
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            )}

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                {selectedSaber.formato === "AUDIO MP3" && (
                  <FileAudio className="h-4 w-4 text-orange-600" />
                )}
                {selectedSaber.formato === "VIDEO MP4" && (
                  <Video className="h-4 w-4 text-cyan-600" />
                )}
                {selectedSaber.formato === "DOCUMENTO PDF" && (
                  <FileText className="h-4 w-4 text-indigo-600" />
                )}
                {selectedSaber.formato === "FOTOGRAFÍA JPG" && (
                  <ImageIcon className="h-4 w-4 text-amber-600" />
                )}
                Registro abierto y público
              </div>
              <button
                type="button"
                onClick={() => setSelectedSaber(null)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-slate-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
