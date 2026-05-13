import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PerformanceChart({ data }) {

  return (
    <div className="bg-slate-900/50 rounded-3xl p-6 backdrop-blur-xl border border-white/10">

      <h2 className="text-2xl font-bold mb-6">
        Portfolio Performance
      </h2>

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#06b6d4"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default PerformanceChart;