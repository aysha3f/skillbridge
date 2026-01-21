import { useCallback } from 'react';
import { useAppContext } from './useAppContext';

export const useSkills = () => {
  const { state, dispatch } = useAppContext();

  const addSkill = useCallback((skill) => {
    const newSkill = {
      ...skill,
      id: Date.now().toString(),
      dateAdded: skill.dateAdded || new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0],
    };
    dispatch({ type: 'ADD_SKILL', payload: newSkill });
    return newSkill;
  }, [dispatch]);

  const updateSkill = useCallback(
    (id, updates) => {
      const updatedSkill = {
        ...state.skills.find((s) => s.id === id),
        ...updates,
        id,
        lastUpdated: new Date().toISOString().split('T')[0],
      };
      dispatch({ type: 'UPDATE_SKILL', payload: updatedSkill });
      return updatedSkill;
    },
    [dispatch, state.skills]
  );

  const deleteSkill = useCallback((id) => {
    dispatch({ type: 'DELETE_SKILL', payload: id });
  }, [dispatch]);

  const getSkillById = useCallback(
    (id) => state.skills.find((s) => s.id === id),
    [state.skills]
  );

  const getSkillsByCategory = useCallback(
    (category) => state.skills.filter((s) => s.category === category),
    [state.skills]
  );

  const getSkillStats = useCallback(() => {
    const skills = state.skills;
    return {
      total: skills.length,
      frontend: skills.filter((s) => s.category === 'frontend').length,
      backend: skills.filter((s) => s.category === 'backend').length,
      devops: skills.filter((s) => s.category === 'devops').length,
      softSkills: skills.filter((s) => s.category === 'soft-skills').length,
      avgLevel: skills.length > 0
        ? Math.round(
            (skills.reduce((acc, s) => acc + s.level, 0) / skills.length) * 10
          ) / 10
        : 0,
    };
  }, [state.skills]);

  return {
    skills: state.skills,
    addSkill,
    updateSkill,
    deleteSkill,
    getSkillById,
    getSkillsByCategory,
    getSkillStats,
  };
};
