
import { TokenData } from "@/components/TokenCard";

// Helper function to generate random chart data
const generateChartData = (points: number, isPositive: boolean) => {
  const data = [];
  let value = 100;

  for (let i = 0; i < points; i++) {
    const random = Math.random() * 10;
    if (isPositive) {
      value += (Math.random() > 0.3 ? 1 : -1) * random;
    } else {
      value -= (Math.random() > 0.3 ? 1 : -1) * random;
    }
    data.push({ value: Math.max(50, Math.min(150, value)) });
  }

  return data;
};

export interface CompanyData {
  id: string;
  name: string;
  logo: string;
  description: string;
  productCount: number;
}

export const companies: CompanyData[] = [
  {
    id: "acai-tech",
    name: "Açaí Tech",
    logo: "AT",
    description: "Empresa líder em produção e processamento de açaí na região Norte.",
    productCount: 2
  },
  {
    id: "madeira-paraense",
    name: "Madeira Paraense",
    logo: "MP",
    description: "Referência em manejo sustentável de madeira certificada e produtos florestais.",
    productCount: 1
  },
  {
    id: "para-turismo",
    name: "Pará Turismo",
    logo: "PT",
    description: "Holding que reúne operadoras de turismo, hotéis e serviços de experiência amazônica.",
    productCount: 1
  },
  {
    id: "mineracao-carajas",
    name: "Mineração Carajás",
    logo: "MC",
    description: "Empresa de mineração com tecnologias avançadas para extração com baixo impacto ambiental.",
    productCount: 1
  },
  {
    id: "bio-amazonia",
    name: "Bio Amazônia",
    logo: "BA",
    description: "Pesquisa e desenvolvimento de produtos farmacêuticos e cosméticos baseados na biodiversidade.",
    productCount: 1
  }
];

export const tokens: TokenData[] = [
  {
    id: "acai-premium",
    name: "Açaí Premium",
    symbol: "ACAIP",
    companyId: "acai-tech",
    companyName: "Açaí Tech",
    price: 15.78,
    priceChange: 4.23,
    volume: 183450,
    roi: 12.5,
    revenue: 42000,
    description: "Token do açaí premium congelado, com processos sustentáveis de colheita e distribuição internacional.",
    chartData: generateChartData(20, true),
  },
  {
    id: "acai-polpa",
    name: "Polpa de Açaí",
    symbol: "POLPA",
    companyId: "acai-tech",
    companyName: "Açaí Tech",
    price: 9.45,
    priceChange: 2.87,
    volume: 124750,
    roi: 8.3,
    revenue: 36500,
    description: "Token representando a produção de polpa de açaí processada para mercado nacional e exportação.",
    chartData: generateChartData(20, true),
  },
  {
    id: "madeira-certificada",
    name: "Madeira Certificada",
    symbol: "MDPA",
    companyId: "madeira-paraense",
    companyName: "Madeira Paraense",
    price: 8.92,
    priceChange: -2.31,
    volume: 95620,
    roi: -1.8,
    revenue: 28500,
    description: "Token de madeira certificada com rastreabilidade completa e reflorestamento garantido.",
    chartData: generateChartData(20, false),
  },
  {
    id: "pacotes-turisticos",
    name: "Pacotes Turísticos",
    symbol: "PTUR",
    companyId: "para-turismo",
    companyName: "Pará Turismo",
    price: 22.46,
    priceChange: 8.75,
    volume: 276850,
    roi: 15.2,
    revenue: 67500,
    description: "Token que representa pacotes de experiências turísticas sustentáveis na Amazônia paraense.",
    chartData: generateChartData(20, true),
  },
  {
    id: "minerio-ferro",
    name: "Minério de Ferro",
    symbol: "MCJS",
    companyId: "mineracao-carajas",
    companyName: "Mineração Carajás",
    price: 45.32,
    priceChange: 1.42,
    volume: 547250,
    roi: 7.8,
    revenue: 125000,
    description: "Token de participação na produção de minério de ferro extraído com tecnologias de baixo impacto.",
    chartData: generateChartData(20, true),
  },
  {
    id: "oleo-essencial",
    name: "Óleos Essenciais",
    symbol: "BIOA",
    companyId: "bio-amazonia", 
    companyName: "Bio Amazônia",
    price: 33.65,
    priceChange: -1.25,
    volume: 164370,
    roi: 9.3,
    revenue: 52800,
    description: "Token representando a produção de óleos essenciais extraídos de plantas da biodiversidade amazônica.",
    chartData: generateChartData(20, false),
  }
];

export const getTokenById = (id: string): TokenData | undefined => {
  return tokens.find(token => token.id === id);
};

export const getTokenBySymbol = (symbol: string): TokenData | undefined => {
  return tokens.find(token => token.symbol === symbol);
};

export const getCompanyById = (id: string): CompanyData | undefined => {
  return companies.find(company => company.id === id);
};

export const getTokensByCompanyId = (companyId: string): TokenData[] => {
  return tokens.filter(token => token.companyId === companyId);
};
