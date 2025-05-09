
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TokenCard from "@/components/TokenCard";
import CompanyCard from "@/components/CompanyCard";
import LeaderboardCard from "@/components/LeaderboardCard";
import Footer from "@/components/Footer";
import { tokens, companies } from "@/data/tokens";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  // Show only the first 4 tokens in the home page
  const featuredTokens = tokens.slice(0, 4);
  // Show only the first 3 companies
  const featuredCompanies = companies.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <section id="tokens" className="py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">
                  Produtos Tokenizados
                </h2>
                <p className="text-muted-foreground">
                  Explore as melhores oportunidades de investimento em produtos paraenses
                </p>
              </div>
              <Link to="/tokens">
                <Button variant="outline" className="flex items-center gap-2">
                  <span>Ver Todos</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredTokens.map((token) => (
                <TokenCard key={token.id} token={token} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary/10">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">
                  Empresas Participantes
                </h2>
                <p className="text-muted-foreground">
                  Conheça as empresas paraenses que estão tokenizando seus produtos
                </p>
              </div>
              <Link to="/companies">
                <Button variant="outline" className="flex items-center gap-2">
                  <span>Ver Todas</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCompanies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold tracking-tight mb-8">
                  Por que investir em tokens paraenses?
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-card rounded-lg p-6 border">
                    <div className="font-bold text-lg mb-2">Economia Regional</div>
                    <p className="text-muted-foreground">
                      Apoie o desenvolvimento econômico da região amazônica, contribuindo para um crescimento sustentável.
                    </p>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6 border">
                    <div className="font-bold text-lg mb-2">Tokenização</div>
                    <p className="text-muted-foreground">
                      Acesso a frações de produtos promissores, permitindo investimentos a partir de valores acessíveis.
                    </p>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6 border">
                    <div className="font-bold text-lg mb-2">Sustentabilidade</div>
                    <p className="text-muted-foreground">
                      Produtos desenvolvidos com práticas ambientais responsáveis e impacto social positivo.
                    </p>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6 border">
                    <div className="font-bold text-lg mb-2">Inovação Local</div>
                    <p className="text-muted-foreground">
                      Acesso a produtos que combinam conhecimento tradicional com tecnologias inovadoras.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/3">
                <LeaderboardCard tokens={tokens} />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
