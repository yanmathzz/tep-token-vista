
import { CompanyData } from './tokens';
import { TokenData } from '@/components/TokenCard';

export const butecoCompany: CompanyData = {
  id: 'buteco-meu-garoto',
  name: 'Buteco Meu Garoto',
  logo: 'BMG',
  description: 'Uma casa tradicional em Belém que transforma a experiência do buteco paraense em produtos autênticos e de alta qualidade, valorizando os sabores e a cultura regional.',
  productCount: 1
};

export const cachaçaToken: TokenData = {
  id: 'cachaca-de-jambu',
  symbol: 'JAMBU',
  name: 'Cachaça de Jambu',
  description: 'Cachaça artesanal produzida com folhas de jambu, planta típica da Amazônia conhecida pelo efeito "formigamento" na boca. A primeira cachaça tokenizada do Norte do Brasil, com processo de produção sustentável e valorização de insumos locais.',
  price: 85.75,
  priceChange: 4.2,
  volume: 120500,
  roi: 32.5,
  revenue: 450000,
  companyId: 'buteco-meu-garoto',
  companyName: 'Buteco Meu Garoto',
  chartData: Array(20).fill(0).map((_, i) => ({ value: 100 + Math.random() * 20 })),
  featured: true
};

// Function to inject the Buteco company data into the existing data from tokens.ts
export const injectButecoData = () => {
  // This function is just a placeholder - the actual data insertion happens
  // in the pages where we use the data, by importing the above objects
  console.log('Buteco Meu Garoto data is ready to use');
};
