import { Briefcase, Target, CheckCircle, TrendingUp } from 'lucide-react';
import { StatCard } from './StatCard';
import { StatusBreakdownChart } from '../Charts/StatusBreakdownChart';
import { useApplications } from '../../hooks/useApplications';
import { useSkills } from '../../hooks/useSkills';
import { Button } from '../Common/Button';

export const Dashboard = ({ onNavigate }) => {
  const { applications, getApplicationStats } = useApplications();
  const { skills, getSkillStats } = useSkills();

  const appStats = getApplicationStats();
  const skillStats = getSkillStats();

  const chartData = [
    { name: 'applied', value: appStats.applied },
    { name: 'reviewing', value: appStats.reviewing },
    { name: 'interviewed', value: appStats.interviewed },
    { name: 'offered', value: appStats.offered },
    { name: 'rejected', value: appStats.rejected },
  ].filter((item) => item.value > 0);

  const successRate = appStats.total > 0
    ? Math.round((appStats.offered / appStats.total) * 100)
    : 0;

  const recentApplications = applications.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-primary-900 mb-2">
          Welcome Back!
        </h2>
        <p className="text-primary-600">
          Track your internship journey and monitor your skill growth
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Total Applications"
          value={appStats.total}
          icon={Briefcase}
          color="secondary"
        />
        <StatCard
          label="Interviews"
          value={appStats.interviewed}
          icon={Target}
          color="warning"
        />
        <StatCard
          label="Offers"
          value={appStats.offered}
          icon={CheckCircle}
          color="success"
        />
        <StatCard
          label="Success Rate"
          value={`${successRate}%`}
          icon={TrendingUp}
          color="secondary"
          trend={appStats.total === 0 ? 'No data yet' : `${appStats.offered} out of ${appStats.total}`}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2">
          <StatusBreakdownChart data={chartData} />
        </div>

        {/* Skills Summary */}
        <div className="card">
          <h3 className="text-lg font-bold text-primary-900 mb-4">
            Skills Summary
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-primary-200">
              <span className="text-sm text-primary-600">Total Skills</span>
              <span className="text-2xl font-bold text-secondary">{skillStats.total}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-primary-200">
              <span className="text-sm text-primary-600">Avg. Level</span>
              <span className="text-2xl font-bold text-accent">{skillStats.avgLevel}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-primary-200">
              <span className="text-sm text-primary-600">Frontend</span>
              <span className="text-lg font-semibold text-primary-700">{skillStats.frontend}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-primary-200">
              <span className="text-sm text-primary-600">Backend</span>
              <span className="text-lg font-semibold text-primary-700">{skillStats.backend}</span>
            </div>
            <Button
              onClick={() => onNavigate('skills')}
              variant="secondary"
              className="w-full mt-4"
            >
              View All Skills
            </Button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 card">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-primary-900">
            Recent Applications
          </h3>
          <Button
            onClick={() => onNavigate('applications')}
            variant="ghost"
            size="sm"
          >
            View All
          </Button>
        </div>
        {recentApplications.length === 0 ? (
          <p className="text-primary-500 text-center py-8">
            No applications yet. Start tracking your journey!
          </p>
        ) : (
          <div className="space-y-3">
            {recentApplications.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between pb-3 border-b border-primary-100 last:border-b-0"
              >
                <div>
                  <p className="font-medium text-primary-900">{app.company}</p>
                  <p className="text-sm text-primary-600">{app.position}</p>
                </div>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded text-sm font-medium">
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
