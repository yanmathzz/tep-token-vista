
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface Message {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  text: string;
  timestamp: Date;
}

interface TokenChatProps {
  tokenName: string;
}

const TokenChat: React.FC<TokenChatProps> = ({ tokenName }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      user: {
        name: "João Silva",
        avatar: "JS",
      },
      text: `Olá pessoal! Acabei de analisar os dados do token ${tokenName} e estou impressionado com o desempenho recente. O que vocês acham?`,
      timestamp: new Date(Date.now() - 60000 * 15),
    },
    {
      id: "2",
      user: {
        name: "Maria Oliveira",
        avatar: "MO",
      },
      text: `Também fiquei surpresa com os resultados! Os novos parceiros comerciais parecem ter impactado positivamente a demanda.`,
      timestamp: new Date(Date.now() - 60000 * 10),
    },
    {
      id: "3",
      user: {
        name: "Ricardo Santos",
        avatar: "RS",
      },
      text: `Alguém sabe qual é a previsão para o próximo trimestre? Estou considerando aumentar minha posição.`,
      timestamp: new Date(Date.now() - 60000 * 5),
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const message: Message = {
      id: Date.now().toString(),
      user: {
        name: "Você",
        avatar: "VC",
      },
      text: newMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, message]);
    setNewMessage("");
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Chat ao vivo</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto max-h-[360px] scrollbar-thin mb-4">
          {messages.map((message) => (
            <div key={message.id} className="mb-4">
              <div className="flex items-start gap-3">
                <Avatar>
                  <div className="bg-secondary text-primary rounded-full w-full h-full flex items-center justify-center text-sm">
                    {message.user.avatar}
                  </div>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-sm">
                      {message.user.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Separator className="mb-4" />
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1"
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TokenChat;
