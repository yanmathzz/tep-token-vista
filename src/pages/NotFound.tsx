
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md text-center py-20">
          <h1 className="text-6xl font-bold mb-6">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
          <p className="text-muted-foreground mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Button asChild>
            <Link to="/">Voltar para o início</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
