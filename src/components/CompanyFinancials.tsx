
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

interface CompanyFinancialsProps {
  tokenName: string;
  revenue: number;
  profit: number;
}

const CompanyFinancials: React.FC<CompanyFinancialsProps> = ({ tokenName, revenue, profit }) => {
  const [period, setPeriod] = useState("monthly");
  
  // Generate mock data for financials
  const generateFinancialData = (baseRevenue: number, baseProfit: number) => {
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
    
    if (period === "monthly") {
      return months.map((month, index) => {
        // Create some variation in the data
        const multiplier = 0.8 + Math.random() * 0.4;
        const revMultiplier = multiplier * (1 + (index % 3) * 0.1);
        const profitMultiplier = multiplier * (1 + (index % 4) * 0.05);
        
        return {
          name: month,
          receita: Math.round(baseRevenue * revMultiplier),
          lucro: Math.round(baseProfit * profitMultiplier)
        };
      });
    } else {
      return quarters.map((quarter, index) => {
        // Create some variation in the data
        const multiplier = 0.9 + Math.random() * 0.3;
        const revMultiplier = multiplier * (1 + (index % 2) * 0.2);
        const profitMultiplier = multiplier * (1 + (index % 3) * 0.15);
        
        return {
          name: quarter,
          receita: Math.round(baseRevenue * 3 * revMultiplier), // 3 months worth
          lucro: Math.round(baseProfit * 3 * profitMultiplier)
        };
      });
    }
  };
  
  const data = generateFinancialData(revenue / 12, profit / 12);

  // Format currency
  const formatCurrency = (value: number) => {
    return `R$ ${value.toLocaleString()}`;
  };
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Desempenho Financeiro</CardTitle>
          <div className="flex space-x-1">
            <button 
              className={`px-3 py-1 text-xs rounded-md ${period === 'monthly' ? 'bg-secondary' : 'hover:bg-secondary/50'}`}
              onClick={() => setPeriod('monthly')}
            >
              Mensal
            </button>
            <button 
              className={`px-3 py-1 text-xs rounded-md ${period === 'quarterly' ? 'bg-secondary' : 'hover:bg-secondary/50'}`}
              onClick={() => setPeriod('quarterly')}
            >
              Trimestral
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#383838" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: "#a3a3a3" }}
                tickLine={{ stroke: "#525252" }}
                axisLine={{ stroke: "#525252" }}
              />
              <YAxis 
                yAxisId="left"
                orientation="left"
                tickFormatter={formatCurrency}
                tick={{ fill: "#a3a3a3" }}
                tickLine={{ stroke: "#525252" }}
                axisLine={{ stroke: "#525252" }}
              />
              <Tooltip 
                formatter={(value: any) => [`R$ ${Number(value).toLocaleString()}`, ""]}
                contentStyle={{ 
                  backgroundColor: "#1E293B", 
                  border: "1px solid #334155",
                  borderRadius: "0.375rem"
                }}
              />
              <Legend 
                formatter={(value) => <span className="text-sm">{value === "receita" ? "Receita" : "Lucro Líquido"}</span>}
              />
              <Bar 
                yAxisId="left"
                dataKey="receita" 
                name="Receita" 
                fill="#0EA5E9" 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                yAxisId="left"
                dataKey="lucro" 
                name="Lucro Líquido" 
                fill="#22c55e" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyFinancials;
