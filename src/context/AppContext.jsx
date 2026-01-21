import { createContext, useReducer, useEffect } from 'react';
import { initialState, appReducer } from './appReducer';
import { initializeDemoData } from '../utils/mockData';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load state from localStorage on mount, or use demo data if first visit or if empty
  useEffect(() => {
    const savedState = localStorage.getItem('skillbridgeState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        // If both applications and skills are empty, load demo data instead
        if (parsedState.applications.length === 0 && parsedState.skills.length === 0) {
          const demoData = initializeDemoData();
          dispatch({ type: 'LOAD_STATE', payload: demoData });
        } else {
          dispatch({ type: 'LOAD_STATE', payload: parsedState });
        }
      } catch (error) {
        console.error('Error loading state from localStorage:', error);
        // If error, load demo data
        const demoData = initializeDemoData();
        dispatch({ type: 'LOAD_STATE', payload: demoData });
      }
    } else {
      // First visit - load demo data
      try {
        const demoData = initializeDemoData();
        dispatch({ type: 'LOAD_STATE', payload: demoData });
      } catch (error) {
        console.error('Error loading demo data:', error);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('skillbridgeState', JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
