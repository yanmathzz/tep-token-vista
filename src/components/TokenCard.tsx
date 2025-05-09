import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, ExternalLink } from "lucide-react";
import MiniChart from "./MiniChart";

export interface TokenData {
  id: string;
  name: string;
  symbol: string;
  companyId: string;
  companyName: string;
  price: number;
  priceChange: number;
  volume: number;
  roi: number;
  revenue: number;
  description: string;
  chartData: { value: number }[];
  featured: boolean;
}

interface TokenCardProps {
  token: TokenData;
}

const TokenCard: React.FC<TokenCardProps> = ({ token }) => {
  const isPositive = token.priceChange >= 0;

  return (
    <Card className="overflow-hidden border-border/40 h-full transition-all hover:border-border hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg">{token.name}</h3>
              <Badge variant="outline" className="text-xs">
                {token.symbol}
              </Badge>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground">
                {token.companyName}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-2xl font-bold">
                R$ {token.price.toFixed(2)}
              </span>
              <span
                className={`flex items-center text-sm ${
                  isPositive ? "text-tep-positive" : "text-tep-negative"
                }`}
              >
                {isPositive ? (
                  <ArrowUp className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 mr-1" />
                )}
                {Math.abs(token.priceChange).toFixed(2)}%
              </span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <MiniChart data={token.chartData} isPositive={isPositive} />
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
          <div>
            <p className="text-muted-foreground">Volume</p>
            <p className="font-medium">R$ {token.volume.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-muted-foreground">ROI</p>
            <p
              className={
                token.roi >= 0 ? "text-tep-positive" : "text-tep-negative"
              }
            >
              {token.roi.toFixed(2)}%
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Receita</p>
            <p className="font-medium">R$ {token.revenue.toLocaleString()}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {token.description}
        </p>
      </CardContent>
      <CardFooter className="bg-secondary/20 px-6 py-4">
        <div className="w-full flex justify-between">
          <Button variant="ghost" size="sm">
            Adicionar
          </Button>
          <Link to={`/token/${token.id}`}>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <span>Detalhes</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TokenCard;
