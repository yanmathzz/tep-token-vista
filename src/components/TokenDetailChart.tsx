
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import { Badge } from "@/components/ui/badge";

interface TokenDetailChartProps {
  tokenName: string;
  tokenSymbol: string;
  price: number;
  priceChange: number;
}

interface ChartData {
  name: string;
  price: number;
  volume?: number;
}

const TokenDetailChart: React.FC<TokenDetailChartProps> = ({ 
  tokenName, 
  tokenSymbol,
  price,
  priceChange
}) => {
  const [period, setPeriod] = useState("24h");

  // Mock data for price chart
  const generatePriceData = () => {
    const data: ChartData[] = [];
    const points = period === "24h" ? 24 : period === "7d" ? 7 : period === "1m" ? 30 : 365;
    const interval = period === "24h" ? "h" : period === "7d" ? "d" : period === "1m" ? "d" : "m";
    
    let currentPrice = price * 0.8;
    const trend = priceChange >= 0 ? 1 : -1;
    
    for (let i = 0; i < points; i++) {
      const randomFactor = 0.95 + Math.random() * 0.1;
      currentPrice = currentPrice * randomFactor + (trend * 0.01 * currentPrice);
      
      data.push({
        name: `${i + 1}${interval}`,
        price: parseFloat(currentPrice.toFixed(2))
      });
    }
    
    // Make sure the last point is the current price
    data[data.length - 1].price = price;
    return data;
  };

  // Mock data for volume chart
  const generateVolumeData = () => {
    const data: ChartData[] = [];
    const points = period === "24h" ? 24 : period === "7d" ? 7 : period === "1m" ? 30 : 12;
    const interval = period === "24h" ? "h" : period === "7d" ? "d" : period === "1m" ? "d" : "m";
    
    for (let i = 0; i < points; i++) {
      const volume = Math.round(50000 + Math.random() * 100000);
      data.push({
        name: `${i + 1}${interval}`,
        volume
      });
    }
    
    return data;
  };

  const priceData = generatePriceData();
  const volumeData = generateVolumeData();

  const formatCurrency = (value: number) => {
    return `R$ ${value.toFixed(2)}`;
  };

  const formatVolume = (value: number) => {
    return `R$ ${value.toLocaleString()}`;
  };

  const isPositive = priceChange >= 0;

  return (
    <Card className="h-full overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              {tokenName} 
              <Badge variant="outline">{tokenSymbol}</Badge>
            </CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              R$ {price.toFixed(2)}
            </span>
            <span
              className={`text-sm ${
                isPositive ? "text-tep-positive" : "text-tep-negative"
              }`}
            >
              {isPositive ? "+" : ""}{priceChange.toFixed(2)}%
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <div className="px-6">
          <div className="flex justify-between items-center mb-4">
            <Tabs defaultValue="price" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="price">Preço</TabsTrigger>
                <TabsTrigger value="volume">Volume</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex space-x-1">
              <button 
                className={`px-3 py-1 text-xs rounded-md ${period === '24h' ? 'bg-secondary' : 'hover:bg-secondary/50'}`}
                onClick={() => setPeriod('24h')}
              >
                24H
              </button>
              <button 
                className={`px-3 py-1 text-xs rounded-md ${period === '7d' ? 'bg-secondary' : 'hover:bg-secondary/50'}`}
                onClick={() => setPeriod('7d')}
              >
                7D
              </button>
              <button 
                className={`px-3 py-1 text-xs rounded-md ${period === '1m' ? 'bg-secondary' : 'hover:bg-secondary/50'}`}
                onClick={() => setPeriod('1m')}
              >
                1M
              </button>
              <button 
                className={`px-3 py-1 text-xs rounded-md ${period === '1y' ? 'bg-secondary' : 'hover:bg-secondary/50'}`}
                onClick={() => setPeriod('1y')}
              >
                1A
              </button>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="price" className="w-full">
          <TabsContent value="price" className="mt-0">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={priceData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop 
                        offset="5%" 
                        stopColor={isPositive ? "#22c55e" : "#ef4444"} 
                        stopOpacity={0.8} 
                      />
                      <stop 
                        offset="95%" 
                        stopColor={isPositive ? "#22c55e" : "#ef4444"} 
                        stopOpacity={0} 
                      />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: "#a3a3a3" }}
                    tickLine={{ stroke: "#525252" }}
                    axisLine={{ stroke: "#525252" }}
                  />
                  <YAxis 
                    tickFormatter={formatCurrency}
                    tick={{ fill: "#a3a3a3" }}
                    tickLine={{ stroke: "#525252" }}
                    axisLine={{ stroke: "#525252" }}
                  />
                  <CartesianGrid strokeDasharray="3 3" stroke="#383838" />
                  <Tooltip 
                    formatter={(value: number) => [`R$ ${value.toFixed(2)}`, "Preço"]}
                    labelFormatter={(label) => `Período: ${label}`}
                    contentStyle={{ 
                      backgroundColor: "#1E293B", 
                      border: "1px solid #334155",
                      borderRadius: "0.375rem"
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke={isPositive ? "#22c55e" : "#ef4444"} 
                    fill="url(#colorPrice)" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="volume" className="mt-0">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={volumeData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: "#a3a3a3" }}
                    tickLine={{ stroke: "#525252" }}
                    axisLine={{ stroke: "#525252" }}
                  />
                  <YAxis 
                    tickFormatter={formatVolume}
                    tick={{ fill: "#a3a3a3" }}
                    tickLine={{ stroke: "#525252" }}
                    axisLine={{ stroke: "#525252" }}
                  />
                  <CartesianGrid strokeDasharray="3 3" stroke="#383838" />
                  <Tooltip 
                    formatter={(value: number) => [`R$ ${value.toLocaleString()}`, "Volume"]}
                    labelFormatter={(label) => `Período: ${label}`}
                    contentStyle={{ 
                      backgroundColor: "#1E293B", 
                      border: "1px solid #334155",
                      borderRadius: "0.375rem"
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="volume" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TokenDetailChart;
