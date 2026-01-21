import { useState } from 'react';
import { Modal } from '../Common/Modal';
import { Input } from '../Common/Input';
import { Select } from '../Common/Select';
import { Button } from '../Common/Button';
import { APPLICATION_STATUSES } from '../../utils/constants';

export const ApplicationModal = ({
  isOpen,
  onClose,
  onSave,
  initialData,
  title = 'Add New Application',
}) => {
  const [formData, setFormData] = useState(
    initialData || {
      company: '',
      position: '',
      dateApplied: new Date().toISOString().split('T')[0],
      status: 'applied',
      location: '',
      jobUrl: '',
      notes: '',
    }
  );

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.dateApplied) newErrors.dateApplied = 'Date is required';
    if (!formData.status) newErrors.status = 'Status is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
      setFormData({
        company: '',
        position: '',
        dateApplied: new Date().toISOString().split('T')[0],
        status: 'applied',
        location: '',
        jobUrl: '',
        notes: '',
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Company Name"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            error={errors.company}
            required
            placeholder="e.g., Google, Microsoft"
          />
          <Input
            label="Position"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            error={errors.position}
            required
            placeholder="e.g., Frontend Engineer Intern"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Date Applied"
            name="dateApplied"
            type="date"
            value={formData.dateApplied}
            onChange={handleInputChange}
            error={errors.dateApplied}
            required
          />
          <Select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            error={errors.status}
            options={APPLICATION_STATUSES}
            required
          />
        </div>

        <Input
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="e.g., Mountain View, CA or Remote"
        />

        <Input
          label="Job URL"
          name="jobUrl"
          type="url"
          value={formData.jobUrl}
          onChange={handleInputChange}
          placeholder="https://..."
        />

        <div>
          <label className="label-base">Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Add any notes about this application..."
            className="input-base min-h-24 resize-none"
          />
        </div>

        <div className="flex gap-3 justify-end pt-4 border-t border-primary-200">
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {initialData ? 'Update' : 'Add'} Application
          </Button>
        </div>
      </form>
    </Modal>
  );
};
