
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { CompanyData } from "@/data/tokens";

interface CompanyCardProps {
  company: CompanyData;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <Card className="overflow-hidden border-border/40 h-full transition-all hover:border-border hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-12 w-12 rounded-md bg-secondary">
            <AvatarFallback className="rounded-md text-primary font-bold">
              {company.logo}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg mb-1">{company.name}</h3>
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground">
                {company.productCount} {company.productCount === 1 ? "produto tokenizado" : "produtos tokenizados"}
              </span>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          {company.description}
        </p>
      </CardContent>
      <CardFooter className="bg-secondary/20 px-6 py-4">
        <div className="w-full">
          <Link to={`/company/${company.id}`} className="w-full">
            <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
              <span>Ver Empresa</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
