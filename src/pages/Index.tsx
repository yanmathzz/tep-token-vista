
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TokenCard from "@/components/TokenCard";
import CompanyCard from "@/components/CompanyCard";
import { getAllTokens, getAllCompanies } from "@/data/tokens";
import Footer from "@/components/Footer";
import { butecoCompany, cachaçaToken } from "@/data/butecoCompany";

const Index = () => {
  const tokens = getAllTokens();
  const companies = getAllCompanies();
  
  // Add Buteco Meu Garoto and Cachaça de Jambu to the respective lists
  const allTokens = [cachaçaToken, ...tokens]; 
  const allCompanies = [butecoCompany, ...companies];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <Hero />
      
      <main className="flex-1 py-8">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Produtos Tokenizados em Destaque
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {allTokens.map((token) => (
              <TokenCard key={token.id} token={token} />
            ))}
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Empresas Parceiras
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {allCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
