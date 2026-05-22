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

const CustomTooltip = ({ active, payload }) => {

  if (active && payload && payload.length) {

    return (
      <div className="bg-slate-900/90 border border-cyan-400/30 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-2xl">

        <p className="text-cyan-300 font-semibold text-lg">
          {payload[0].name}
        </p>

        <p className="text-white mt-1">
          Allocation: {payload[0].value}%
        </p>

      </div>
    );
  }

  return null;
};

function PortfolioChart({ data }) {

  return (
    <div className="bg-slate-900/50 rounded-3xl p-6 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300">

      <h2 className="text-3xl font-bold mb-6">
        Asset Allocation
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={130}
              paddingAngle={4}
              cornerRadius={12}
              labelLine={false}

              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >

              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                  stroke="transparent"
                />
              ))}

            </Pie>

            <Tooltip content={<CustomTooltip />} />

          </PieChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default PortfolioChart;