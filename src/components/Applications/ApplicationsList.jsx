import { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import { Button } from '../Common/Button';
import { ApplicationCard } from './ApplicationCard';
import { ApplicationModal } from './ApplicationModal';
import { useApplications } from '../../hooks/useApplications';
import { APPLICATION_STATUSES } from '../../utils/constants';

export const ApplicationsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const { applications, addApplication } = useApplications();

  const filteredApplications =
    filterStatus === 'all'
      ? applications
      : applications.filter((app) => app.status === filterStatus);

  const handleAddApplication = (formData) => {
    addApplication(formData);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-primary-900 mb-4">
          My Applications
        </h2>
        <p className="text-primary-600">
          Track {applications.length} internship application
          {applications.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="primary"
          className="flex items-center justify-center gap-2"
        >
          <Plus size={20} /> Add Application
        </Button>

        <div className="flex items-center gap-2">
          <Filter size={20} className="text-primary-600" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="input-base"
          >
            <option value="all">All Statuses</option>
            {APPLICATION_STATUSES.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Applications Grid */}
      {filteredApplications.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-primary-600 text-lg mb-4">
            {applications.length === 0
              ? 'No applications yet. Start tracking your internship journey!'
              : 'No applications with this status.'}
          </p>
          {applications.length === 0 && (
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="primary"
              className="inline-flex items-center gap-2"
            >
              <Plus size={20} /> Add Your First Application
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApplications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      )}

      {/* Add Application Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddApplication}
        title="Add New Application"
      />
    </div>
  );
};
