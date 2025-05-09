
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TokenCard from "@/components/TokenCard";
import CompanyUpdates from "@/components/CompanyUpdates";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { getCompanyById, getTokensByCompanyId } from "@/data/tokens";

const CompanyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const company = id ? getCompanyById(id) : undefined;
  const companyTokens = id ? getTokensByCompanyId(id) : [];

  if (!company) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <Avatar className="h-20 w-20 rounded-md bg-secondary">
              <AvatarFallback className="rounded-md text-primary text-2xl font-bold">
                {company.logo}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                {company.name}
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                {company.description}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Sobre a Empresa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {company.name} é uma empresa paraense comprometida com o desenvolvimento sustentável
                    da região amazônica. Através da tokenização de seus produtos, a empresa busca democratizar
                    o acesso a investimentos e fortalecer a cadeia produtiva local.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Com processos produtivos que respeitam a biodiversidade local e valorizam o conhecimento
                    tradicional, a empresa se destaca pela inovação e compromisso com práticas ESG.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <h4 className="font-medium mb-1">Fundação</h4>
                      <p className="text-sm text-muted-foreground">2015</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Sede</h4>
                      <p className="text-sm text-muted-foreground">Belém, PA</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Produtos Tokenizados</h4>
                      <p className="text-sm text-muted-foreground">{company.productCount}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Website</h4>
                      <a href="#" className="text-sm text-blue-400 hover:underline">
                        www.{company.id}.com.br
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Estatísticas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Total de Produtos</div>
                      <div className="text-2xl font-bold">{company.productCount}</div>
                    </div>
                    <Separator />
                    <div>
                      <div className="text-sm text-muted-foreground">Volume Total</div>
                      <div className="text-2xl font-bold">
                        R$ {companyTokens.reduce((acc, token) => acc + token.volume, 0).toLocaleString()}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <div className="text-sm text-muted-foreground">ROI Médio</div>
                      <div className="text-2xl font-bold">
                        {(companyTokens.reduce((acc, token) => acc + token.roi, 0) / companyTokens.length).toFixed(2)}%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              Produtos Tokenizados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyTokens.map((token) => (
                <TokenCard key={token.id} token={token} />
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <CompanyUpdates tokenName={company.name} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyDetail;
