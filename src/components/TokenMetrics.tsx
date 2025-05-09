
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, ArrowDown, Volume, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TokenMetricsProps {
  price: number;
  priceChange: number;
  volume: number;
  roi: number;
  revenue: number;
}

const TokenMetrics: React.FC<TokenMetricsProps> = ({ 
  price, 
  priceChange, 
  volume, 
  roi, 
  revenue 
}) => {
  const isPositive = priceChange >= 0;
  const quarterlyGrowth = 12.8; // Mocked quarterly growth
  const isGrowthPositive = quarterlyGrowth >= 0;
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Métricas do Token</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Preço</span>
            <span className="font-medium">R$ {price.toFixed(2)}</span>
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
              {Math.abs(priceChange).toFixed(2)}%
            </span>
          </div>
          <Separator />
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <span className="text-muted-foreground">Volume 24h</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Volume total de negociações nas últimas 24 horas</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center gap-1">
              <Volume className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">
                R$ {volume.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <span className="text-muted-foreground">ROI 30 dias</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Retorno sobre o investimento nos últimos 30 dias</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <span
              className={
                roi >= 0 ? "text-tep-positive" : "text-tep-negative"
              }
            >
              {roi.toFixed(2)}%
            </span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <span className="text-muted-foreground">Crescimento Trimestral</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Crescimento percentual em relação ao trimestre anterior</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <span
              className={`flex items-center gap-1 ${
                isGrowthPositive ? "text-tep-positive" : "text-tep-negative"
              }`}
            >
              {isGrowthPositive ? (
                <ArrowUp className="h-4 w-4" />
              ) : (
                <ArrowDown className="h-4 w-4" />
              )}
              {Math.abs(quarterlyGrowth).toFixed(1)}%
            </span>
          </div>
          <Separator />
          <div className="flex justify-between">
            <span className="text-muted-foreground">Receita Mensal</span>
            <span className="font-medium">
              R$ {revenue.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Market Cap</span>
            <span className="font-medium">
              R$ {(price * 1000000).toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenMetrics;
