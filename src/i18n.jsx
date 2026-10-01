import { createContext, useContext, useState } from "react";

export const CONTACT = {
  phone1: "+351 914 014 369",
  phone1Href: "tel:+351914014369",
  phone2: "+351 918 079 004",
  phone2Href: "tel:+351918079004",
  whatsapp:
    "https://wa.me/351918079004?text=" +
    encodeURIComponent("Olá, gostaria de solicitar um táxi em Paços de Ferreira."),
  email: "coelhoeirmalda@gmail.com",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Táxis Leão & Henrique, R. Ferrara Plaza, Carvalhosa, Paços de Ferreira"),
};

const dict = {
  pt: {
    nav: { services: "Serviços", fleet: "Frota", about: "A Empresa", contact: "Contactos", call: "Chamar Táxi" },
    hero: {
      eyebrow: "PAÇOS DE FERREIRA · SERVIÇO DE TÁXIS",
      line1: "Leão & Henrique,",
      line2: "Serviço de Táxis.",
      sub: "Mais de 50 anos de confiança em movimento. Frota 100% Mercedes-Benz ao serviço de empresas, seguradoras, escolas e particulares — transfers de aeroporto e serviço ocasional, de Lamoso para todo o país.",
      cta1: "Chamar Táxi · 914 014 369",
      cta2: "WhatsApp Direto",
      scroll: "Deslize para conhecer",
      photoBadge: "LAMOSO · EST. 50+ ANOS",
    },
    trust: {
      bigLabel: "Anos de Experiência",
      pills: [
        { icon: "star", text: "5.0 no Google" },
        { icon: "car", text: "Frota 100% Mercedes-Benz" },
        { icon: "award", text: "Táxis Leão & Henrique · Lamoso" },
      ],
    },
    services: {
      eyebrow: "SERVIÇOS",
      title: "O que fazemos,",
      titleItalic: "com rigor.",
      items: [
        {
          title: "Empresas & Corporate",
          desc: "Deslocações executivas e receção dos vossos clientes ao aeroporto — com discrição, pontualidade e motoristas que falam inglês fluentemente.",
        },
        {
          title: "Transfers de Aeroporto",
          desc: "Ligação direta ao Aeroporto Francisco Sá Carneiro (Porto) e a todos os aeroportos do país, com seguimento de voo e hora marcada garantida.",
        },
        {
          title: "Seguradoras",
          desc: "Transporte ao serviço das principais companhias de seguros, com o cuidado e a fiabilidade que cada situação exige.",
        },
        {
          title: "Transporte Escolar",
          desc: "Viagens diárias com máxima segurança e motoristas experientes e atenciosos, de confiança das famílias há gerações.",
        },
        {
          title: "Serviço Ocasional",
          desc: "Durante o dia, ligamos Paços de Ferreira ao Porto e a qualquer destino do país. Basta um telefonema.",
        },
      ],
    },
    fleet: {
      eyebrow: "A FROTA",
      title: "Frota de táxis",
      titleItalic: "exclusivamente Mercedes-Benz.",
      tabs: [
        {
          id: "sedan",
          name: "Sedan Executive",
          badge: null,
          desc: "Elegância e serenidade para viagens de negócios ou lazer, com o refinamento que só um Mercedes oferece.",
          features: ["Até 4 passageiros", "Ar condicionado", "Mala ampla", "Pagamento por cartão"],
        },
        {
          id: "electric",
          name: "100% Elétrico",
          badge: "ECO",
          desc: "O nosso Mercedes elétrico: zero emissões, silêncio absoluto. Sustentabilidade sem comprometer o conforto.",
          features: ["Zero emissões", "Silêncio absoluto", "Até 4 passageiros", "Pagamento por cartão"],
        },
        {
          id: "vito",
          name: "Mercedes-Benz Vito",
          badge: "ATÉ 8 LUGARES",
          desc: "A carrinha para grupos maiores: até 8 passageiros com bagagem — ideal para equipas de empresa e transfers de grupo.",
          features: ["Até 8 passageiros", "Espaço para bagagem", "Ideal para grupos", "Pagamento por cartão"],
        },
      ],
    },
    about: {
      storyEyebrow: "A NOSSA HISTÓRIA",
      storyTitle: "Meio século ao volante em Paços de Ferreira",
      storyP1: "Os Táxis Leão & Henrique nasceram em Lamoso há mais de 50 anos e cresceram com a região. Gerações de clientes confiam em nós para as viagens que importam — do primeiro dia de escola ao voo de negócios.",
      storyP2: "Hoje, a frota é moderna, exclusivamente Mercedes-Benz e aposta em veículos elétricos — mas os valores são os de sempre: pontualidade, segurança e um trato próximo, de vizinho. E uma equipa de motoristas treinada, com inglês fluente para receber clientes estrangeiros e turistas.",
      payEyebrow: "PAGAMENTO FÁCIL",
      payTitle: "Pague como preferir",
      paySub: "Sem complicações no final da viagem.",
      payments: [
        { icon: "card", title: "Cartão de Crédito / Débito", desc: "Terminal a bordo — Visa, Mastercard e Multibanco." },
        { icon: "phone", title: "Apple Pay", desc: "Pagamento contactless rápido e seguro." },
        { icon: "wallet", title: "MB Way", desc: "Transferência instantânea pelo telemóvel." },
      ],
    },
    marquee: [
      "Transfers de Aeroporto",
      "Empresas & Corporate",
      "Seguradoras",
      "Transporte Escolar",
      "Serviço Ocasional",
      "Transporte de Grupos",
    ],
    contact: {
      eyebrow: "CONTACTOS",
      title: "Vamos",
      titleItalic: "a caminho?",
      desc: "Ligue, envie WhatsApp ou email — respondemos com a rapidez de quem está na estrada há 50 anos.",
      callLabel: "Chamada Direta",
      waLabel: "Mensagem Instantânea",
      emailLabel: "Email",
      standLabel: "Praça de Táxis",
      stand: "R. Ferrara Plaza, 4590-073 Carvalhosa",
      hqLabel: "Sede",
      hq: "Lamoso, Paços de Ferreira",
      maps: "Abrir no Google Maps",
      rating: "5.0 ★ Avaliação Google",
    },
    footer: {
      tag: "Serviço de Táxis · Paços de Ferreira",
      rights: "© 2026 Táxis Leão & Henrique. Todos os direitos reservados.",
    },
  },
  en: {
    nav: { services: "Services", fleet: "Fleet", about: "About Us", contact: "Contact", call: "Call a Taxi" },
    hero: {
      eyebrow: "PAÇOS DE FERREIRA · TAXI SERVICE",
      line1: "Leão & Henrique,",
      line2: "Taxi Service.",
      sub: "Over 50 years of trust in motion. A 100% Mercedes-Benz fleet serving companies, insurers, schools and private clients — airport transfers and daytime hire, from Lamoso to anywhere in the country.",
      cta1: "Call a Taxi · 914 014 369",
      cta2: "Direct WhatsApp",
      scroll: "Scroll to explore",
      photoBadge: "LAMOSO · EST. 50+ YEARS",
    },
    trust: {
      bigLabel: "Years of Experience",
      pills: [
        { icon: "star", text: "5.0 on Google" },
        { icon: "car", text: "100% Mercedes-Benz Fleet" },
        { icon: "award", text: "Táxis Leão & Henrique · Lamoso" },
      ],
    },
    services: {
      eyebrow: "SERVICES",
      title: "What we do,",
      titleItalic: "with rigour.",
      items: [
        {
          title: "Corporate & Business",
          desc: "Executive travel and airport meet-and-greet for your clients — with discretion, punctuality and fluent English-speaking drivers.",
        },
        {
          title: "Airport Transfers",
          desc: "Direct connection to Francisco Sá Carneiro Airport (Porto) and every airport in the country, with flight tracking and guaranteed scheduling.",
        },
        {
          title: "Insurance Companies",
          desc: "Transport for leading insurance companies, with the care and reliability every situation demands.",
        },
        {
          title: "School Transport",
          desc: "Daily runs with maximum safety and experienced, caring drivers — trusted by families for generations.",
        },
        {
          title: "Occasional Hire",
          desc: "Daytime trips connecting Paços de Ferreira to Porto and anywhere in the country. Just one phone call away.",
        },
      ],
    },
    fleet: {
      eyebrow: "THE FLEET",
      title: "A taxi fleet",
      titleItalic: "exclusively Mercedes-Benz.",
      tabs: [
        {
          id: "sedan",
          name: "Executive Saloon",
          badge: null,
          desc: "Elegance and serenity for business or leisure travel, with the refinement only a Mercedes can offer.",
          features: ["Up to 4 passengers", "Air conditioning", "Ample boot", "Card payment"],
        },
        {
          id: "electric",
          name: "100% Electric",
          badge: "ECO",
          desc: "Our electric Mercedes: zero emissions, absolute silence. Sustainability without compromising comfort.",
          features: ["Zero emissions", "Absolute silence", "Up to 4 passengers", "Card payment"],
        },
        {
          id: "vito",
          name: "Mercedes-Benz Vito",
          badge: "UP TO 8 SEATS",
          desc: "The van for larger groups: up to 8 passengers with luggage — ideal for company teams and group transfers.",
          features: ["Up to 8 passengers", "Luggage space", "Ideal for groups", "Card payment"],
        },
      ],
    },
    about: {
      storyEyebrow: "OUR STORY",
      storyTitle: "Half a century behind the wheel in Paços de Ferreira",
      storyP1: "Táxis Leão & Henrique was born in Lamoso over 50 years ago and grew with the region. Generations of clients trust us for the journeys that matter — from the first day of school to the business flight.",
      storyP2: "Today the fleet is modern, exclusively Mercedes-Benz and invests in electric vehicles — but the values are the same as ever: punctuality, safety and a close, neighbourly service. And a trained team of drivers, fluent in English, ready to welcome international clients and tourists.",
      payEyebrow: "EASY PAYMENT",
      payTitle: "Pay as you prefer",
      paySub: "No hassle at the end of the journey.",
      payments: [
        { icon: "card", title: "Credit / Debit Card", desc: "On-board terminal — Visa, Mastercard and Multibanco." },
        { icon: "phone", title: "Apple Pay", desc: "Fast and secure contactless payment." },
        { icon: "wallet", title: "MB Way", desc: "Instant transfer from your phone." },
      ],
    },
    marquee: [
      "Airport Transfers",
      "Corporate & Business",
      "Insurance Companies",
      "School Transport",
      "Occasional Hire",
      "Group Transport",
    ],
    contact: {
      eyebrow: "CONTACT",
      title: "Shall we",
      titleItalic: "get going?",
      desc: "Call, WhatsApp or email us — we answer with the speed of someone who's been on the road for 50 years.",
      callLabel: "Direct Call",
      waLabel: "Instant Message",
      emailLabel: "Email",
      standLabel: "Taxi Stand",
      stand: "R. Ferrara Plaza, 4590-073 Carvalhosa",
      hqLabel: "Head Office",
      hq: "Lamoso, Paços de Ferreira",
      maps: "Open in Google Maps",
      rating: "5.0 ★ Google Rating",
    },
    footer: {
      tag: "Taxi Service · Paços de Ferreira",
      rights: "© 2026 Táxis Leão & Henrique. All rights reserved.",
    },
  },
};

const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("pt");
  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
