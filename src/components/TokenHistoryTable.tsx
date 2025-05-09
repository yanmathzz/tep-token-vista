
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface TokenHistoryTableProps {
  tokenSymbol: string;
}

const TokenHistoryTable: React.FC<TokenHistoryTableProps> = ({ tokenSymbol }) => {
  // Mock transaction data
  const transactions = [
    {
      id: 1,
      type: "buy",
      amount: 150,
      price: 22.5,
      date: "2023-04-15T14:30:00",
      wallet: "0x8f7a...5b3c",
    },
    {
      id: 2,
      type: "sell",
      amount: 75,
      price: 23.2,
      date: "2023-04-14T10:15:00",
      wallet: "0x3d2e...9f1a",
    },
    {
      id: 3,
      type: "buy",
      amount: 300,
      price: 21.8,
      date: "2023-04-13T09:45:00",
      wallet: "0xa1c7...2d4f",
    },
    {
      id: 4,
      type: "sell",
      amount: 120,
      price: 22.0,
      date: "2023-04-12T16:20:00",
      wallet: "0x6b9d...4e7c",
    },
    {
      id: 5,
      type: "buy",
      amount: 180,
      price: 21.5,
      date: "2023-04-11T11:30:00",
      wallet: "0xf3e2...8a5b",
    }
  ];
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Histórico de Transações {tokenSymbol}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Tipo</TableHead>
                <TableHead className="w-[150px]">Quantidade</TableHead>
                <TableHead className="w-[150px]">Preço</TableHead>
                <TableHead className="w-[180px] hidden md:table-cell">Data</TableHead>
                <TableHead className="hidden md:table-cell">Carteira</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map(transaction => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    <Badge variant={transaction.type === "buy" ? "default" : "destructive"}>
                      {transaction.type === "buy" ? "Compra" : "Venda"}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{transaction.amount} {tokenSymbol}</TableCell>
                  <TableCell>R$ {transaction.price.toFixed(2)}</TableCell>
                  <TableCell className="hidden md:table-cell">{formatDate(transaction.date)}</TableCell>
                  <TableCell className="hidden md:table-cell">{transaction.wallet}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenHistoryTable;
