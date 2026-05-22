import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {

  if (active && payload && payload.length) {

    return (
      <div className="bg-slate-900/90 border border-cyan-400/30 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-2xl">

        <p className="text-cyan-300 font-semibold">
          Portfolio Value
        </p>

        <p className="text-white mt-1">
          ${payload[0].value.toLocaleString()}
        </p>

      </div>
    );
  }

  return null;
};

function PerformanceChart({ data }) {

  return (
    <div className="bg-slate-900/50 rounded-3xl p-6 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300">

      <h2 className="text-3xl font-bold mb-6">
        Portfolio Performance
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#06b6d4"
              strokeWidth={5}
              dot={{
                r:6,
                fill:"#06b6d4",
              }}
              activeDot={{
                r:8,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default PerformanceChart;