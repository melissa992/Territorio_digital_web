import {
  FileAudio,
  FileVideo,
  FileText,
  Image as ImageIcon,
  Mic,
  Music,
  BookOpen,
  Users,
  Leaf,
  UtensilsCrossed,
} from "lucide-react";

export const MUNICIPIOS = [
  "Buenaventura",
  "Cali",
  "Jamundí",
  "Palmira",
  "Buga",
  "Florida",
];

export const CATEGORIAS = [
  "Oralidad",
  "Música",
  "Medicina Tradicional",
  "Gastronomía",
  "Danza y Bailes",
  "Costumbres y Fiestas",
  "Artesanías",
];

export const FORMATO_STYLES = {
  "AUDIO MP3": {
    icono: FileAudio,
    clase: "border-orange-200 bg-orange-50 text-orange-700",
  },
  "VIDEO MP4": {
    icono: FileVideo,
    clase: "border-cyan-200 bg-cyan-50 text-cyan-700",
  },
  "DOCUMENTO PDF": {
    icono: FileText,
    clase: "border-indigo-200 bg-indigo-50 text-indigo-700",
  },
  "FOTOGRAFÍA JPG": {
    icono: ImageIcon,
    clase: "border-amber-200 bg-amber-50 text-amber-700",
  },
};

export const CATEGORIA_ICONS = {
  Oralidad: Mic,
  Música: Music,
  "Medicina Tradicional": Leaf,
  Gastronomía: UtensilsCrossed,
  "Danza y Bailes": Music,
  "Costumbres y Fiestas": BookOpen,
  Artesanías: Users,
};

const SABERES_BASE = [
  {
    id: 1,
    formato: "AUDIO MP3",
    municipio: "Buenaventura",
    titulo: "Alabaos y levantamiento de tumba del Chontaduro",
    autor: "Doña Zenaida Caicedo, Cantora del Litoral",
    categoria: "Oralidad",
    imagen:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Registro sonoro de los cantos fúnebres del litoral pacífico, patrimonio inmaterial de la humanidad.",
    historia:
      "En Buenaventura y el litoral pacífico, los alabaos son los cantos que acompañan el velorio y el novenario de un difunto. Cantados a capela por mujeres mayores, cada verso es un viaje espiritual que guía el alma hacia el más allá. Este registro recoge tres noches de novenario en el barrio Pie del Cerro, donde las cantoras mantienen viva una tradición reconocida por la UNESCO como Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad. Doña Zenaida aprendió de su abuela en el río Yurumanguí y hoy forma a jóvenes cantoras para que la memoria no se apague.",
  },
  {
    id: 2,
    formato: "VIDEO MP4",
    municipio: "Buenaventura",
    titulo: "Marimba de chonta y currulao del río Anchicayá",
    autor: "Familia Perea, Constructores de marimba",
    categoria: "Música",
    imagen:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Documental sobre la construcción ancestral de la marimba de chonta y el ritmo del currulao.",
    historia:
      "La marimba de chonta, junto a los cantos tradicionales del Pacífico Sur, es Patrimonio Cultural Inmaterial de la Humanidad. En las riberas del Anchicayá, la familia Perea selecciona la chonta madura, la labra a machete y tensa las teclas con cuerdas de bejuco. Este video documenta el proceso completo de construcción, que toma semanas, y una fiesta de currulao donde la marimba dialoga con el bombo, el cununo y las voces de la comunidad.",
  },
  {
    id: 3,
    formato: "DOCUMENTO PDF",
    municipio: "Cali",
    titulo: "Salsa caleña: memoria de los barrios obreros",
    autor: "Colectivo Salsero de Siloé",
    categoria: "Música",
    imagen:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Recopilación documental de la historia de la salsa como identidad cultural de Cali.",
    historia:
      "La salsa no llegó a Cali: nació en ella. Desde los años sesenta, en los barrios obreros del oriente, la música de Fania sonaba en gallineros y fiestas de cuadra. Este documento recopila testimonios de disc-jockeys legendarios, la historia de la Feria de Cali y el surgimiento de las escuelas de baile que hicieron de la capital mundial de la salsa un territorio de identidad popular. Incluye la discografía fundacional y el mapa de los gallineros históricos.",
  },
  {
    id: 4,
    formato: "FOTOGRAFÍA JPG",
    municipio: "Jamundí",
    titulo: "Medicina ancestral del Pacífico: plantas y saberes",
    autor: "Maestro Hilario Angulo, Sanador del sur",
    categoria: "Medicina Tradicional",
    imagen:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Registro fotográfico de plantas medicinales y prácticas curativas tradicionales.",
    historia:
      "En las veredas de Jamundí, el maestro Hilario heredó de su madre el conocimiento de más de cuarenta plantas medicinales: el botánico de contradanza para los espantos, el limoncillo para los nervios, el bálsamo para las heridas. La serie fotográfica documenta la huerta medicinal, la preparación de jarabes y baños de descargo, y las consultas donde la medicina tradicional convive con el centro de salud del pueblo. Un saber que sostiene la salud comunitaria desde hace generaciones.",
  },
  {
    id: 5,
    formato: "AUDIO MP3",
    municipio: "Palmira",
    titulo: "Arrullos y coplas de la zona plana",
    autor: "Doña Rosalba Mina, Coplera",
    categoria: "Oralidad",
    imagen:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Cantos de cuna y coplas improvisadas transmitidas por mujeres campesinas.",
    historia:
      "Los arrullos son cantos suaves con los que las madres y abuelas duermen a los niños y los protegen de los malos espíritus. En Palmira, Doña Rosalba canta los arrullos que aprendió en el río Frayle y improvisa coplas en los velorios de cruce y las fiestas del pueblo. Este archivo reúne 27 cantos grabados en su patio, con la participación de sus nietas, tercera generación de copleras de la familia.",
  },
  {
    id: 6,
    formato: "VIDEO MP4",
    municipio: "Buga",
    titulo: "Sancocho de gallina y comidas de patio",
    autor: "Familia Quiñones, Cocineras tradicionales",
    categoria: "Gastronomía",
    imagen:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Receta viva del sancocho de gallina criolla y saberes de la cocina a leña.",
    historia:
      "En Buga, la cocina es patrimonio de las familias. Este video sigue a las hermanas Quiñones en la preparación del sancocho de gallina criolla: la gallina de patio, el plátano verde y maduro, la yuca, el ñame y el cilantro cimarrón, todo en fogón de leña. Incluye las recetas del arroz atollado, los aborrajados y el chontaduro con sal y hielo, platos que cuentan la historia del cruce entre las cocinas afro, indígena y campesina del valle geográfico.",
  },
  {
    id: 7,
    formato: "VIDEO MP4",
    municipio: "Buenaventura",
    titulo: "Currulao: baile de pañuelos y memoria del litoral",
    autor: "Semillero Raíces del Pacífico",
    categoria: "Música",
    imagen:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Registro pedagógico de un baile de parejas sueltas acompañado por marimba, cununos y guasá.",
    historia:
      "El currulao reúne música, danza y herencia afrocolombiana. Sus parejas bailan sueltas, con giros, avances, retiros y el juego del pañuelo, mientras la marimba y los tambores sostienen el diálogo entre quienes bailan. El semillero lo enseña a niñas, niños y jóvenes como una práctica viva de identidad y encuentro comunitario.",
    fuente: "https://es.wikipedia.org/wiki/Currulao",
  },
  {
    id: 8,
    formato: "FOTOGRAFÍA JPG",
    municipio: "Cali",
    titulo: "Petronio Álvarez: cocina, música y encuentro",
    autor: "Colectivo Sabores del Pacífico en Cali",
    categoria: "Gastronomía",
    imagen:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Memoria visual de los fogones, bebidas y músicas que se encuentran en la fiesta del Pacífico.",
    historia:
      "En Cali, los encuentros alrededor de la música del Pacífico también son espacios para compartir cocina, relatos y formas de organización. Esta colección reúne preparaciones con plátano, coco, pescado, hierbas de azotea y bebidas tradicionales, narradas por cocineras y portadores que convierten la fiesta en una escuela abierta de cultura.",
    fuente:
      "https://es.wikipedia.org/wiki/Festival_de_M%C3%BAsica_del_Pac%C3%ADfico_Petronio_%C3%81lvarez",
  },
  {
    id: 9,
    formato: "DOCUMENTO PDF",
    municipio: "Buenaventura",
    titulo: "Hierbas de azotea: botánica cotidiana del Pacífico",
    autor: "Red de Mujeres de las Azoteas",
    categoria: "Medicina Tradicional",
    imagen:
      "https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Cuaderno comunitario sobre cultivo, cuidado y transmisión de plantas aromáticas y medicinales.",
    historia:
      "Las azoteas son pequeños jardines comunitarios donde se cultivan plantas para cocinar, perfumar el hogar y acompañar prácticas tradicionales de cuidado. El cuaderno registra cómo se seleccionan las semillas, se preparan infusiones y se comparte el conocimiento entre generaciones. Es un inventario cultural, no una guía de diagnóstico ni de automedicación.",
    fuente: "https://es.wikipedia.org/wiki/Planta_medicinal",
  },
  {
    id: 10,
    formato: "AUDIO MP3",
    municipio: "Jamundí",
    titulo: "Juga y bunde: rondas para celebrar en comunidad",
    autor: "Agrupación Juvenil Río Claro",
    categoria: "Oralidad",
    imagen:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Voces, palmas y rondas que acompañan celebraciones y encuentros familiares del sur del Valle.",
    historia:
      "La juga y el bunde articulan canto, ritmo y participación colectiva. En este archivo, las voces mayores enseñan versos y respuestas a las nuevas generaciones, mientras las palmas y los tambores marcan una celebración donde cada persona puede entrar y aportar. La práctica se conserva en reuniones familiares, escuelas y fiestas del territorio.",
    fuente: "https://es.wikipedia.org/wiki/Currulao",
  },
  {
    id: 11,
    formato: "FOTOGRAFÍA JPG",
    municipio: "Palmira",
    titulo: "Plantas de patio: albahaca, limoncillo y anamú",
    autor: "Doña Mercedes Mina, Guardiana de semillas",
    categoria: "Medicina Tradicional",
    imagen:
      "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Álbum de plantas de patio, semillas y formas tradicionales de preparar infusiones y baños.",
    historia:
      "El patio campesino funciona como una biblioteca viva: allí se reconocen aromas, ciclos de lluvia y plantas que acompañan el cuidado cotidiano. Mercedes documenta la albahaca, el limoncillo y el anamú desde la memoria familiar, siempre insistiendo en identificar cada especie y consultar al personal de salud antes de combinar preparados con medicamentos.",
    fuente: "https://es.wikipedia.org/wiki/Planta_medicinal",
  },
  {
    id: 12,
    formato: "DOCUMENTO PDF",
    municipio: "Florida",
    titulo: "Tejidos y palabras del pueblo Nasa del Valle",
    autor: "Guardianas de memoria Nasa",
    categoria: "Artesanías",
    imagen:
      "https://images.unsplash.com/photo-1528459105426-b9548367069b?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Cuaderno visual sobre símbolos, fibras y relatos que acompañan el tejido comunitario.",
    historia:
      "El tejido reúne memoria, paciencia y aprendizaje colectivo. Este registro recoge conversaciones sobre símbolos, colores y técnicas transmitidas en espacios familiares y comunitarios del pueblo Nasa, con énfasis en el respeto por los significados que cada portadora decide compartir.",
  },
  {
    id: 13,
    formato: "AUDIO MP3",
    municipio: "Cali",
    titulo: "Memorias viajeras del pueblo Rom en Cali",
    autor: "Colectivo de memoria Rom",
    categoria: "Costumbres y Fiestas",
    imagen:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Relatos orales sobre familia, oficios, movilidad y celebraciones del pueblo Rom o gitano.",
    historia:
      "Este archivo reúne voces de familias Rom que comparten recuerdos sobre sus recorridos, oficios, formas de acompañarse y celebraciones. El registro se construye desde la palabra de sus protagonistas y reconoce la diversidad interna del pueblo Rom o gitano en Colombia.",
  },
  {
    id: 14,
    formato: "VIDEO MP4",
    municipio: "Buenaventura",
    titulo: "Cantos de río y cocina de azotea",
    autor: "Asociación de mujeres del barrio La Playita",
    categoria: "Costumbres y Fiestas",
    imagen:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
    descripcion:
      "Encuentro audiovisual de cantos, cocina y prácticas de cuidado de comunidades negras del litoral.",
    historia:
      "La cocina, el canto y el cuidado de las semillas se encuentran en una jornada comunitaria junto al río. Las mujeres narran qué se prepara, cómo se organiza el trabajo y por qué compartir alimentos y canciones fortalece los vínculos del barrio.",
  },
];

const SABER_METADATA = {
  1: { comunidad: "Cantoras y portadores orales", diversidad: "Comunidades negras" },
  2: { comunidad: "Músicos y constructores tradicionales", diversidad: "Comunidades negras" },
  3: { comunidad: "Colectivos culturales urbanos", diversidad: "Comunidades mestizas" },
  4: { comunidad: "Guardianes de plantas y semillas", diversidad: "Comunidades negras" },
  5: { comunidad: "Familias campesinas y copleras", diversidad: "Comunidades mestizas" },
  6: { comunidad: "Cocineras y familias tradicionales", diversidad: "Comunidades mestizas" },
  7: { comunidad: "Semilleros de danza y música", diversidad: "Comunidades negras" },
  8: { comunidad: "Cocineras y portadores del Pacífico", diversidad: "Comunidades negras" },
  9: { comunidad: "Guardianes de plantas y semillas", diversidad: "Comunidades negras" },
  10: { comunidad: "Semilleros de danza y música", diversidad: "Comunidades negras" },
  11: { comunidad: "Guardianes de plantas y semillas", diversidad: "Comunidades mestizas" },
  12: { comunidad: "Tejedoras y autoridades indígenas", diversidad: "Pueblos indígenas" },
  13: { comunidad: "Familias y colectivos Rom", diversidad: "Pueblo Rom o gitano" },
  14: { comunidad: "Cocineras y portadoras del litoral", diversidad: "Comunidades negras" },
};

export const SABERES = SABERES_BASE.map((saber) => ({
  ...saber,
  ...SABER_METADATA[saber.id],
}));

export const DIVERSIDADES = [
  "Todas",
  "Comunidades negras",
  "Pueblos indígenas",
  "Pueblo Rom o gitano",
  "Comunidades mestizas",
];

export const COMUNIDADES = [
  "Todas",
  ...Array.from(new Set(SABERES.map((saber) => saber.comunidad))),
];
