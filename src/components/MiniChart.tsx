
import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

interface MiniChartProps {
  data: { value: number }[];
  isPositive: boolean;
}

const MiniChart: React.FC<MiniChartProps> = ({ data, isPositive }) => {
  return (
    <div className="h-12 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={isPositive ? "#22c55e" : "#ef4444"}
            fillOpacity={1}
            fill={isPositive ? "url(#colorPositive)" : "url(#colorNegative)"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniChart;
