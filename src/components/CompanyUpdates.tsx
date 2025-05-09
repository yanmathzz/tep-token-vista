
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

interface CompanyUpdatesProps {
  tokenName: string;
}

const CompanyUpdates: React.FC<CompanyUpdatesProps> = ({ tokenName }) => {
  // Mock updates data
  const updates = [
    {
      id: 1,
      title: `${tokenName} anuncia expansão para o mercado internacional`,
      date: "2023-04-15",
      category: "Expansão",
      summary: `A ${tokenName} está se preparando para expandir suas operações para o mercado internacional no próximo trimestre, com foco inicial na América Latina.`
    },
    {
      id: 2,
      title: `Resultados financeiros do Q1 superam expectativas`,
      date: "2023-04-10",
      category: "Financeiro",
      summary: `Os resultados do primeiro trimestre foram divulgados com números acima das previsões de analistas, destacando um crescimento de 22% em relação ao mesmo período do ano anterior.`
    },
    {
      id: 3,
      title: `Nova parceria estratégica com tecnologia blockchain`,
      date: "2023-04-05",
      category: "Parcerias",
      summary: `Uma nova parceria foi firmada com a BlockTech Solutions, trazendo inovações em tecnologia blockchain para aprimorar a segurança e transparência das operações.`
    }
  ];
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Últimas Atualizações</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {updates.map(update => (
            <div key={update.id} className="border-b border-border pb-5 last:border-b-0 last:pb-0">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">{update.title}</h3>
                <Badge variant="outline">{update.category}</Badge>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <CalendarDays className="h-4 w-4 mr-1" />
                <span>{formatDate(update.date)}</span>
              </div>
              <p className="text-sm text-muted-foreground">{update.summary}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyUpdates;
