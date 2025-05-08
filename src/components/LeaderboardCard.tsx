
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { TokenData } from "./TokenCard";

interface LeaderboardCardProps {
  tokens: TokenData[];
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ tokens }) => {
  // Sort tokens by price change (highest to lowest)
  const sortedTokens = [...tokens].sort((a, b) => b.priceChange - a.priceChange);

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Leaderboard</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="flex justify-between items-center px-6 py-2 text-sm text-muted-foreground">
          <span className="w-1/4">Token</span>
          <span className="w-1/4 text-right">Preço</span>
          <span className="w-1/4 text-right">Variação</span>
          <span className="w-1/4 text-right">Volume</span>
        </div>
        <ul className="divide-y divide-border/40">
          {sortedTokens.map((token) => (
            <li key={token.id}>
              <Link 
                to={`/token/${token.id}`}
                className="flex justify-between items-center px-6 py-3 hover:bg-secondary/20 transition-colors"
              >
                <div className="w-1/4 flex items-center gap-2">
                  <span className="font-medium">{token.symbol}</span>
                </div>
                <div className="w-1/4 text-right font-medium">
                  R$ {token.price.toFixed(2)}
                </div>
                <div 
                  className={`w-1/4 text-right flex items-center justify-end ${
                    token.priceChange >= 0 ? "text-tep-positive" : "text-tep-negative"
                  }`}
                >
                  {token.priceChange >= 0 ? (
                    <ArrowUp className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDown className="h-4 w-4 mr-1" />
                  )}
                  {Math.abs(token.priceChange).toFixed(2)}%
                </div>
                <div className="w-1/4 text-right text-muted-foreground">
                  R$ {token.volume.toLocaleString()}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
