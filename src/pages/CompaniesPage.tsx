
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyCard from "@/components/CompanyCard";
import { companies } from "@/data/tokens";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CompaniesPage = () => {
  const [search, setSearch] = useState("");

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                Empresas Participantes
              </h1>
              <p className="text-muted-foreground">
                Conheça as empresas paraenses que estão tokenizando seus produtos
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="w-full">
              <Input
                placeholder="Pesquisar empresas..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="max-w-md"
              />
            </div>
          </div>
          
          {filteredCompanies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                Nenhuma empresa encontrada com os termos de pesquisa atuais.
              </p>
              <Button variant="outline" onClick={() => setSearch("")}>
                Limpar Pesquisa
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompaniesPage;
