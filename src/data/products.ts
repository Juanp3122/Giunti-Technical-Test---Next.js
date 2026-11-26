export type Format = "Cartaceo" | "Digitale" | "Corso online" | "In presenza";

export const categories = [
  "Clinica e Neuropsicologia",
  "Scuola ed Età evolutiva",
  "Lavoro e Organizzazioni",
  "Formazione",
] as const;

export type Category = (typeof categories)[number];

type BaseProduct = {
  id: string;
  name: string;
  author: string;
  image: string;
  category: Category;
  price: number;
  discountPrice: number;
  format: Format;
};

export type Test = BaseProduct & {
  kind: "test";
  ageRange: string;
};

export type Course = BaseProduct & {
  kind: "corso";
  startDate: string; // ISO: AAAA-MM-DD
};

export type Product = Test | Course;



export const products: Product[] = [
  {
    kind: "test",
    id: "mmpi-2",
    name: "MMPI-2",
    author: "Dott.ssa Elena Rossi",
    image: "/images/image1.jpg",
    category: "Clinica e Neuropsicologia",
    price: 1250,
    discountPrice: 1062.5,
    format: "Cartaceo",
    ageRange: "18+ anni",
  },
  {
    kind: "test",
    id: "wisc-v",
    name: "WISC-V",
    author: "Prof. Marco Bianchi",
    image: "/images/image2.jpg",
    category: "Scuola ed Età evolutiva",
    price: 980,
    discountPrice: 882,
    format: "Digitale",
    ageRange: "6–16 anni",
  },
  {
    kind: "test",
    id: "bfq-2",
    name: "BFQ-2",
    author: "Dott. Luca Ferrari",
    image: "/images/image3.jpg",
    category: "Lavoro e Organizzazioni",
    price: 215,
    discountPrice: 193.5,
    format: "Digitale",
    ageRange: "12+ anni",
  },
  {
    kind: "test",
    id: "bdi-ii",
    name: "BDI-II",
    author: "Dott.ssa Chiara Romano",
    image: "/images/image4.jpg",
    category: "Clinica e Neuropsicologia",
    price: 340,
    discountPrice: 289,
    format: "Cartaceo",
    ageRange: "13+ anni",
  },
  {
    kind: "corso",
    id: "corso-wais-iv",
    name: "Somministrazione e scoring WAIS-IV",
    author: "Prof. Andrea Conti",
    image: "/images/image5.jpg",
    category: "Formazione",
    price: 450,
    discountPrice: 360,
    format: "Corso online",
    startDate: "2027-01-20",
  },
  {
    kind: "corso",
    id: "corso-colloquio",
    name: "Il colloquio clinico in ambito peritale",
    author: "Dott.ssa Giulia Marino",
    image: "/images/image6.jpg",
    category: "Formazione",
    price: 1250,
    discountPrice: 1000,
    format: "In presenza",
    startDate: "2027-03-12",
  },
  {
    kind: "corso",
    id: "corso-colloquioIII",
    name: "Il colloquio",
    author: "Dott.ssa Giulia Marino",
    image: "/images/image7.jpg",
    category: "Formazione",
    price: 1250,
    discountPrice: 1000,
    format: "In presenza",
    startDate: "2027-03-12",
  },
  {
    kind: "corso",
    id: "corso-colloquioII",
    name: "Il colloquio II",
    author: "Dott.ssa Giulia Marino",
    image: "/images/image8.jpg",
    category: "Formazione",
    price: 1250,
    discountPrice: 1000,
    format: "In presenza",
    startDate: "2027-03-12",
  },
];