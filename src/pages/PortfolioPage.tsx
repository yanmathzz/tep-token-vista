
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioPage = () => {
  const [isConnected, setIsConnected] = React.useState(false);

  const handleConnect = () => {
    setIsConnected(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                Meu Portfólio
              </h1>
              <p className="text-muted-foreground">
                Gerencie seus investimentos em tokens paraenses
              </p>
            </div>
          </div>
          
          {!isConnected ? (
            <div className="bg-card rounded-lg border p-8 text-center max-w-md mx-auto">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-secondary/50 p-6">
                  <Wallet className="h-10 w-10" />
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">Conecte sua Carteira</h2>
              <p className="text-muted-foreground mb-6">
                Para visualizar e gerenciar seu portfólio, conecte sua carteira digital
              </p>
              <Button onClick={handleConnect}>
                Conectar Carteira
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-card rounded-lg border p-8">
                <h2 className="text-xl font-semibold mb-6">Resumo do Portfólio</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-secondary/20 rounded-lg p-4">
                    <p className="text-muted-foreground text-sm">Valor Total</p>
                    <p className="text-2xl font-bold">R$ 12.540,00</p>
                  </div>
                  <div className="bg-secondary/20 rounded-lg p-4">
                    <p className="text-muted-foreground text-sm">Ganho/Perda 24h</p>
                    <p className="text-2xl font-bold text-tep-positive">+R$ 320,45</p>
                  </div>
                  <div className="bg-secondary/20 rounded-lg p-4">
                    <p className="text-muted-foreground text-sm">Retorno Total</p>
                    <p className="text-2xl font-bold text-tep-positive">+8,2%</p>
                  </div>
                </div>
                
                <p className="text-center text-muted-foreground">
                  Os dados do portfólio são apenas para demonstração.
                </p>
              </div>
              
              <div className="bg-card rounded-lg border p-8">
                <h2 className="text-xl font-semibold mb-6">Tokens em seu Portfólio</h2>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    Esta é uma versão demonstrativa. Em uma implementação real, seus tokens apareceriam aqui.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/tokens">Explorar Tokens</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
