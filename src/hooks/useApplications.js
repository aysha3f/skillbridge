import { useCallback } from 'react';
import { useAppContext } from './useAppContext';

export const useApplications = () => {
  const { state, dispatch } = useAppContext();

  const addApplication = useCallback((application) => {
    const newApplication = {
      ...application,
      id: Date.now().toString(),
      dateApplied: application.dateApplied || new Date().toISOString().split('T')[0],
    };
    dispatch({ type: 'ADD_APPLICATION', payload: newApplication });
    return newApplication;
  }, [dispatch]);

  const updateApplication = useCallback((id, updates) => {
    const updatedApplication = {
      ...state.applications.find((app) => app.id === id),
      ...updates,
      id,
    };
    dispatch({ type: 'UPDATE_APPLICATION', payload: updatedApplication });
    return updatedApplication;
  }, [dispatch, state.applications]);

  const deleteApplication = useCallback((id) => {
    dispatch({ type: 'DELETE_APPLICATION', payload: id });
  }, [dispatch]);

  const getApplicationById = useCallback(
    (id) => state.applications.find((app) => app.id === id),
    [state.applications]
  );

  const getApplicationsByStatus = useCallback(
    (status) => state.applications.filter((app) => app.status === status),
    [state.applications]
  );

  const getApplicationStats = useCallback(() => {
    const applications = state.applications;
    return {
      total: applications.length,
      applied: applications.filter((a) => a.status === 'applied').length,
      reviewing: applications.filter((a) => a.status === 'reviewing').length,
      interviewed: applications.filter((a) => a.status === 'interviewed').length,
      offered: applications.filter((a) => a.status === 'offered').length,
      rejected: applications.filter((a) => a.status === 'rejected').length,
    };
  }, [state.applications]);

  return {
    applications: state.applications,
    addApplication,
    updateApplication,
    deleteApplication,
    getApplicationById,
    getApplicationsByStatus,
    getApplicationStats,
  };
};
