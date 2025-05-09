
import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TokenDetailChart from "@/components/TokenDetailChart";
import TokenHistoryTable from "@/components/TokenHistoryTable";
import CompanyUpdates from "@/components/CompanyUpdates";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTokenById } from "@/data/tokens";
import { ArrowUp, ArrowDown, Info } from "lucide-react";
import CompanyFinancials from "@/components/CompanyFinancials";
import TokenMetrics from "@/components/TokenMetrics";

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
              <div className="flex items-center gap-2 mb-1">
                <Link to={`/company/${token.companyId}`} className="text-sm text-muted-foreground hover:underline">
                  {token.companyName}
                </Link>
              </div>
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
            {/* Left Column - Charts */}
            <div className="lg:col-span-2 space-y-6">
              {/* Price Chart */}
              <TokenDetailChart 
                tokenName={token.name} 
                tokenSymbol={token.symbol} 
                price={token.price}
                priceChange={token.priceChange}
              />
              
              {/* Financial Charts */}
              <CompanyFinancials 
                tokenName={token.name}
                revenue={token.revenue}
                profit={token.revenue * 0.3} // Mocked profit as 30% of revenue
              />
            </div>
            
            {/* Right Column - Info */}
            <div className="space-y-6">
              {/* Key Metrics */}
              <TokenMetrics 
                price={token.price}
                priceChange={token.priceChange}
                volume={token.volume}
                roi={token.roi}
                revenue={token.revenue}
              />
              
              {/* About Product */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Sobre {token.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {token.description}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Este produto é desenvolvido pela <Link to={`/company/${token.companyId}`} className="text-blue-400 hover:underline">{token.companyName}</Link> e utiliza blockchain para tokenizar seus ativos, permitindo que investidores participem do crescimento do produto de forma transparente e segura.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Os tokens {token.symbol} representam uma parte do valor do produto e seus detentores têm direitos sobre uma parcela proporcional dos lucros gerados pela comercialização.
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
          
          {/* Token Movement History */}
          <div className="mb-8">
            <TokenHistoryTable tokenSymbol={token.symbol} />
          </div>
          
          {/* Latest Updates */}
          <div className="mb-8">
            <CompanyUpdates tokenName={token.companyName} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TokenDetail;
