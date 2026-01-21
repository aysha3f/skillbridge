import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { STATUS_COLORS } from '../../utils/constants';

export const StatusBreakdownChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="card flex items-center justify-center h-80">
        <p className="text-primary-500">No application data yet</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="text-lg font-bold text-primary-900 mb-4">
        Application Status
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry) => (
              <Cell key={`cell-${entry.name}`} fill={STATUS_COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
