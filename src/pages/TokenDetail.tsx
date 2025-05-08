
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TokenDetailChart from "@/components/TokenDetailChart";
import TokenChat from "@/components/TokenChat";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTokenById } from "@/data/tokens";
import { ArrowUp, ArrowDown } from "lucide-react";

const TokenDetail = () => {
  const { id } = useParams<{ id: string }>();
  const token = id ? getTokenById(id) : undefined;

  if (!token) {
    return <Navigate to="/404" />;
  }

  const isPositive = token.priceChange >= 0;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-1 flex items-center gap-2">
                {token.name}
                <Badge variant="outline" className="text-sm">
                  {token.symbol}
                </Badge>
              </h1>
              <p className="text-muted-foreground">{token.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Adicionar ao Portfólio
              </Button>
              <Button size="sm">Comprar Token</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <TokenDetailChart 
                tokenName={token.name} 
                tokenSymbol={token.symbol} 
                price={token.price}
                priceChange={token.priceChange}
              />
            </div>
            <div>
              <Card className="mb-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Informações</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Preço</span>
                      <span className="font-medium">R$ {token.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Variação 24h</span>
                      <span
                        className={`flex items-center gap-1 ${
                          isPositive ? "text-tep-positive" : "text-tep-negative"
                        }`}
                      >
                        {isPositive ? (
                          <ArrowUp className="h-4 w-4" />
                        ) : (
                          <ArrowDown className="h-4 w-4" />
                        )}
                        {Math.abs(token.priceChange).toFixed(2)}%
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Volume 24h</span>
                      <span className="font-medium">
                        R$ {token.volume.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ROI 30 dias</span>
                      <span
                        className={
                          token.roi >= 0 ? "text-tep-positive" : "text-tep-negative"
                        }
                      >
                        {token.roi.toFixed(2)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Receita Mensal</span>
                      <span className="font-medium">
                        R$ {token.revenue.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Sobre {token.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {token.description}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    A empresa utiliza tecnologia blockchain para tokenizar seus ativos, permitindo que investidores participem do crescimento do negócio de forma transparente e segura.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Website</span>
                    <a href="#" className="text-blue-400 hover:underline">
                      {token.symbol.toLowerCase()}.com.br
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-8">
            <TokenChat tokenName={token.name} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TokenDetail;
