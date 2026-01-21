import { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import { Button } from '../Common/Button';
import { SkillCard } from './SkillCard';
import { SkillModal } from './SkillModal';
import { useSkills } from '../../hooks/useSkills';
import { SKILL_CATEGORIES } from '../../utils/constants';

export const SkillsGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState('all');
  const { skills, addSkill } = useSkills();

  const filteredSkills =
    filterCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === filterCategory);

  const handleAddSkill = (formData) => {
    addSkill(formData);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-primary-900 mb-4">My Skills</h2>
        <p className="text-primary-600">
          Track {skills.length} skill{skills.length !== 1 ? 's' : ''} and monitor
          your growth
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="primary"
          className="flex items-center justify-center gap-2"
        >
          <Plus size={20} /> Add Skill
        </Button>

        <div className="flex items-center gap-2">
          <Filter size={20} className="text-primary-600" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="input-base"
          >
            <option value="all">All Categories</option>
            {SKILL_CATEGORIES.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Skills Grid */}
      {filteredSkills.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-primary-600 text-lg mb-4">
            {skills.length === 0
              ? 'No skills yet. Start tracking your learning journey!'
              : 'No skills in this category.'}
          </p>
          {skills.length === 0 && (
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="primary"
              className="inline-flex items-center gap-2"
            >
              <Plus size={20} /> Add Your First Skill
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      )}

      {/* Add Skill Modal */}
      <SkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddSkill}
        title="Add New Skill"
      />
    </div>
  );
};
