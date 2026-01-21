export const StatCard = ({ label, value, icon: Icon, color = 'secondary', trend }) => {
  const colorClasses = {
    secondary: 'bg-blue-50 border-blue-200',
    success: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    danger: 'bg-red-50 border-red-200',
  };

  const iconColorClasses = {
    secondary: 'text-secondary',
    success: 'text-accent',
    warning: 'text-warning',
    danger: 'text-danger',
  };

  return (
    <div className={`card ${colorClasses[color]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-primary-600">{label}</p>
          <p className="text-3xl font-bold text-primary-900 mt-2">{value}</p>
          {trend && (
            <p className="text-xs text-primary-500 mt-2">{trend}</p>
          )}
        </div>
        {Icon && (
          <div className={`p-3 rounded-lg bg-white ${iconColorClasses[color]}`}>
            <Icon size={24} />
          </div>
        )}
      </div>
    </div>
  );
};
