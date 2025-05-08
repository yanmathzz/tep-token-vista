
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TokenCard from "@/components/TokenCard";
import { tokens } from "@/data/tokens";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TokensPage = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const sortedTokens = [...tokens].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "price") {
      return b.price - a.price;
    } else if (sortBy === "priceChange") {
      return b.priceChange - a.priceChange;
    } else if (sortBy === "volume") {
      return b.volume - a.volume;
    }
    return 0;
  });

  const filteredTokens = sortedTokens.filter((token) =>
    token.name.toLowerCase().includes(search.toLowerCase()) ||
    token.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                Todos os Tokens
              </h1>
              <p className="text-muted-foreground">
                Explore tokens de empresas paraenses disponíveis para investimento
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="w-full md:w-2/3">
              <Input
                placeholder="Pesquisar tokens..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="max-w-md"
              />
            </div>
            <div className="w-full md:w-1/3 flex justify-start md:justify-end">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nome</SelectItem>
                  <SelectItem value="price">Maior Preço</SelectItem>
                  <SelectItem value="priceChange">Maior Valorização</SelectItem>
                  <SelectItem value="volume">Maior Volume</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {filteredTokens.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTokens.map((token) => (
                <TokenCard key={token.id} token={token} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                Nenhum token encontrado com os termos de pesquisa atuais.
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

export default TokensPage;
