import { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { Modal } from '../Common/Modal';
import { Button } from '../Common/Button';
import { SkillModal } from './SkillModal';
import { SKILL_LEVELS, SKILL_CATEGORIES } from '../../utils/constants';
import { useSkills } from '../../hooks/useSkills';

export const SkillCard = ({ skill }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const { updateSkill, deleteSkill } = useSkills();

  const categoryLabel = SKILL_CATEGORIES.find(
    (c) => c.value === skill.category
  )?.label;
  const levelLabel = SKILL_LEVELS.find((l) => l.value === skill.level)?.label;

  const handleDelete = () => {
    deleteSkill(skill.id);
    setIsDeleteConfirmOpen(false);
  };

  const handleUpdate = (updatedData) => {
    updateSkill(skill.id, updatedData);
    setIsEditModalOpen(false);
  };

  // Calculate progress bar width
  const progressWidth = (skill.level / 5) * 100;

  return (
    <>
      <div className="card flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-primary-900">{skill.name}</h3>
            <p className="text-xs text-primary-500 uppercase tracking-wide">
              {categoryLabel}
            </p>
          </div>
          <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-semibold">
            {levelLabel}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-primary-200 rounded-full h-2 mb-4 overflow-hidden">
          <div
            className="bg-secondary h-full rounded-full transition-all duration-300"
            style={{ width: `${progressWidth}%` }}
          />
        </div>

        {/* Level Display */}
        <div className="flex justify-between mb-4">
          <span className="text-xs text-primary-600">
            Level: {skill.level}/5
          </span>
          <span className="text-xs text-primary-500">
            {progressWidth.toFixed(0)}% Complete
          </span>
        </div>

        {/* Resources */}
        {skill.resources && skill.resources.length > 0 && (
          <div className="mb-4 pb-4 border-b border-primary-200">
            <p className="text-xs font-semibold text-primary-700 mb-2">
              Resources:
            </p>
            <ul className="text-xs space-y-1">
              {skill.resources.slice(0, 2).map((resource, index) => (
                <li key={index} className="text-primary-600">
                  • {resource.title}
                </li>
              ))}
              {skill.resources.length > 2 && (
                <li className="text-primary-500">
                  +{skill.resources.length - 2} more
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Actions */}
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

      {/* Edit Modal */}
      <SkillModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleUpdate}
        initialData={skill}
        title="Edit Skill"
      />

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteConfirmOpen}
        onClose={() => setIsDeleteConfirmOpen(false)}
        title="Delete Skill"
      >
        <p className="text-primary-700 mb-6">
          Are you sure you want to delete {skill.name}?
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
