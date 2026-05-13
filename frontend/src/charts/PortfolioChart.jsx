import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#10b981",
];

function PortfolioChart({ data }) {

  return (
    <div className="bg-slate-900/50 rounded-3xl p-6 backdrop-blur-xl border border-white/10">

      <h2 className="text-2xl font-bold mb-6">
        Asset Allocation
      </h2>

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={110}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default PortfolioChart;