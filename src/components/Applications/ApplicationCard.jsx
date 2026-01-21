import { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { Modal } from '../Common/Modal';
import { Button } from '../Common/Button';
import { ApplicationModal } from './ApplicationModal';
import { formatDate } from '../../utils/formatters';
import { APPLICATION_STATUSES } from '../../utils/constants';
import { useApplications } from '../../hooks/useApplications';

export const ApplicationCard = ({ application }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const { updateApplication, deleteApplication } = useApplications();

  const statusColor = APPLICATION_STATUSES.find(
    (s) => s.value === application.status
  )?.color;

  const handleDelete = () => {
    deleteApplication(application.id);
    setIsDeleteConfirmOpen(false);
  };

  const handleUpdate = (updatedData) => {
    updateApplication(application.id, updatedData);
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div className="card hover:shadow-lg transition-shadow">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-primary-900">
                {application.company}
              </h3>
              <p className="text-sm text-primary-600">{application.position}</p>
            </div>
            <span className={`badge ${statusColor}`}>
              {application.status}
            </span>
          </div>

          {application.location && (
            <p className="text-sm text-primary-600 mb-2">📍 {application.location}</p>
          )}

          <p className="text-xs text-primary-500 mb-4">
            Applied: {formatDate(application.dateApplied)}
          </p>

          {application.notes && (
            <p className="text-sm text-primary-700 mb-4 italic">
              {application.notes.substring(0, 100)}
              {application.notes.length > 100 ? '...' : ''}
            </p>
          )}

          <div className="flex gap-2 mt-auto">
            <Button
              onClick={() => setIsEditModalOpen(true)}
              variant="secondary"
              size="sm"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <Edit2 size={16} /> Edit
            </Button>
            <Button
              onClick={() => setIsDeleteConfirmOpen(true)}
              variant="danger"
              size="sm"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <Trash2 size={16} /> Delete
            </Button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <ApplicationModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleUpdate}
        initialData={application}
        title="Edit Application"
      />

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteConfirmOpen}
        onClose={() => setIsDeleteConfirmOpen(false)}
        title="Delete Application"
      >
        <p className="text-primary-700 mb-6">
          Are you sure you want to delete this application for {application.company}?
          This action cannot be undone.
        </p>
        <div className="flex gap-3 justify-end">
          <Button
            onClick={() => setIsDeleteConfirmOpen(false)}
            variant="secondary"
          >
            Cancel
          </Button>
          <Button onClick={handleDelete} variant="danger">
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
};
