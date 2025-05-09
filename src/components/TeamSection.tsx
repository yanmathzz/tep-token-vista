
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  photoUrl: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Pedro Henrique Carneiro Silva",
      role: "Dev Front-end",
      photoUrl: "/lovable-uploads/3cb9df29-916f-44a2-ae84-179c8168aa87.png"
    },
    {
      id: 2,
      name: "Yan Matheus Pinheiro",
      role: "Dev Front-end",
      photoUrl: "/lovable-uploads/0945ea7b-66f4-402c-b34d-bd2e53e28bcf.png"
    },
    {
      id: 3,
      name: "João Pedro Barreiros Baganha",
      role: "Negociação e Relação com Empresas",
      photoUrl: "/lovable-uploads/cfb956fa-edf8-4e1a-b1ed-1bb6dedb30d4.png"
    },
    {
      id: 4,
      name: "Renato Xavier Portela Giordano",
      role: "Negociação e Relação com Empresas",
      photoUrl: "/lovable-uploads/6a8c0499-d44e-4c80-8129-ccae0868d274.png"
    },
    {
      id: 5,
      name: "Julia Furtado Affonso",
      role: "Design de Interface e Experiência do Usuário",
      photoUrl: "/lovable-uploads/ce7de155-e3df-4e3d-8bce-bd96fb2a0ac0.png"
    },
    {
      id: 6,
      name: "Beatriz Souza Brasileiro",
      role: "Design de Interface e Experiência do Usuário",
      photoUrl: "/lovable-uploads/e7389d5c-5023-49cc-8fa8-a4e442ce76a8.png"
    },
    {
      id: 7,
      name: "Ana Letícia Sousa Verde",
      role: "Design de Interface e Experiência do Usuário",
      photoUrl: "/lovable-uploads/6e484178-6694-475b-8838-c4efc3160bc0.png"
    },
    {
      id: 8,
      name: "Luís Cláudio Rodrigues Sarmento",
      role: "Dev Back-End",
      photoUrl: "/lovable-uploads/07337e05-941f-4493-abad-afab246c9138.png"
    },
    {
      id: 9,
      name: "Lívio Marcel Monteiro Cambraia",
      role: "Dev Back-End",
      photoUrl: "/lovable-uploads/74b64cdb-0f6d-4ef1-a56c-9d0d22b4a12e.png"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Nossa Equipe</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center">
              <Avatar className="h-32 w-32">
                <AvatarImage src={member.photoUrl} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamSection;
