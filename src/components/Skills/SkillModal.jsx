import { useState } from 'react';
import { Modal } from '../Common/Modal';
import { Input } from '../Common/Input';
import { Select } from '../Common/Select';
import { Button } from '../Common/Button';
import { SKILL_CATEGORIES, SKILL_LEVELS } from '../../utils/constants';

export const SkillModal = ({
  isOpen,
  onClose,
  onSave,
  initialData,
  title = 'Add New Skill',
}) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: '',
      category: 'frontend',
      level: 1,
      resources: [],
    }
  );

  const [errors, setErrors] = useState({});
  const [resourceInput, setResourceInput] = useState({ title: '', url: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'level' ? parseInt(value) : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleAddResource = () => {
    if (resourceInput.title.trim()) {
      setFormData((prev) => ({
        ...prev,
        resources: [...prev.resources, resourceInput],
      }));
      setResourceInput({ title: '', url: '' });
    }
  };

  const handleRemoveResource = (index) => {
    setFormData((prev) => ({
      ...prev,
      resources: prev.resources.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Skill name is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.level) newErrors.level = 'Level is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
      setFormData({
        name: '',
        category: 'frontend',
        level: 1,
        resources: [],
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Skill Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
            placeholder="e.g., React, TypeScript, CSS"
          />
          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            error={errors.category}
            options={SKILL_CATEGORIES}
            required
          />
        </div>

        <div>
          <label className="label-base">Proficiency Level</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              name="level"
              min="1"
              max="5"
              value={formData.level}
              onChange={handleInputChange}
              className="flex-1 h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-secondary">
                {formData.level}
              </span>
              <span className="text-sm text-primary-600">
                {SKILL_LEVELS.find((l) => l.value === formData.level)?.label}
              </span>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div>
          <label className="label-base">Learning Resources (Optional)</label>
          <div className="flex gap-2 mb-3">
            <Input
              placeholder="Resource title"
              value={resourceInput.title}
              onChange={(e) =>
                setResourceInput((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              className="flex-1"
            />
            <Button
              type="button"
              onClick={handleAddResource}
              variant="secondary"
              size="sm"
            >
              Add
            </Button>
          </div>

          {formData.resources.length > 0 && (
            <div className="space-y-2 mb-3">
              {formData.resources.map((resource, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-primary-50 p-2 rounded border border-primary-200"
                >
                  <span className="text-sm text-primary-700">
                    {resource.title}
                  </span>
                  <Button
                    type="button"
                    onClick={() => handleRemoveResource(index)}
                    variant="ghost"
                    size="sm"
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-3 justify-end pt-4 border-t border-primary-200">
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {initialData ? 'Update' : 'Add'} Skill
          </Button>
        </div>
      </form>
    </Modal>
  );
};
