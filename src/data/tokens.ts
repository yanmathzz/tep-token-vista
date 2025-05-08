
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

export const tokens: TokenData[] = [
  {
    id: "acai-token",
    name: "Açaí Tech",
    symbol: "ACAI",
    price: 15.78,
    priceChange: 4.23,
    volume: 183450,
    roi: 12.5,
    revenue: 42000,
    description: "Token que representa ações da maior produtora de açaí da região Norte, com inovação em logística e processamento sustentável.",
    chartData: generateChartData(20, true),
  },
  {
    id: "madepa",
    name: "Madeira Paraense",
    symbol: "MDPA",
    price: 8.92,
    priceChange: -2.31,
    volume: 95620,
    roi: -1.8,
    revenue: 28500,
    description: "Empresa de manejo sustentável de madeira certificada, com projetos de reflorestamento e captura de carbono.",
    chartData: generateChartData(20, false),
  },
  {
    id: "paratour",
    name: "Pará Turismo",
    symbol: "PTUR",
    price: 22.46,
    priceChange: 8.75,
    volume: 276850,
    roi: 15.2,
    revenue: 67500,
    description: "Holding que reúne operadoras de turismo, hotéis e serviços voltados à experiência amazônica autêntica e responsável.",
    chartData: generateChartData(20, true),
  },
  {
    id: "mineracao-carajas",
    name: "Mineração Carajás",
    symbol: "MCJS",
    price: 45.32,
    priceChange: 1.42,
    volume: 547250,
    roi: 7.8,
    revenue: 125000,
    description: "Empresa de mineração com tecnologias avançadas para extração de minério de ferro com baixo impacto ambiental.",
    chartData: generateChartData(20, true),
  },
  {
    id: "bio-amazonia",
    name: "Bio Amazônia",
    symbol: "BIOA",
    price: 33.65,
    priceChange: -1.25,
    volume: 164370,
    roi: 9.3,
    revenue: 52800,
    description: "Pesquisa e desenvolvimento de produtos farmacêuticos e cosméticos baseados na biodiversidade amazônica.",
    chartData: generateChartData(20, false),
  },
  {
    id: "pesca-sustentavel",
    name: "Pesca Sustentável",
    symbol: "PSUS",
    price: 12.24,
    priceChange: 3.17,
    volume: 87620,
    roi: 5.9,
    revenue: 31400,
    description: "Cooperativa de pesca que utiliza métodos sustentáveis e tecnologia para rastreabilidade completa da cadeia produtiva.",
    chartData: generateChartData(20, true),
  },
];

export const getTokenById = (id: string): TokenData | undefined => {
  return tokens.find(token => token.id === id);
};

export const getTokenBySymbol = (symbol: string): TokenData | undefined => {
  return tokens.find(token => token.symbol === symbol);
};
