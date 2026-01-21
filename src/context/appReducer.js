export const initialState = {
  applications: [],
  skills: [],
  user: {
    name: 'Student',
    email: 'student@example.com',
  },
};

export const appReducer = (state, action) => {
  switch (action.type) {
    // Application Actions
    case 'ADD_APPLICATION':
      return {
        ...state,
        applications: [...state.applications, action.payload],
      };

    case 'UPDATE_APPLICATION':
      return {
        ...state,
        applications: state.applications.map((app) =>
          app.id === action.payload.id ? action.payload : app
        ),
      };

    case 'DELETE_APPLICATION':
      return {
        ...state,
        applications: state.applications.filter(
          (app) => app.id !== action.payload
        ),
      };

    case 'SET_APPLICATIONS':
      return {
        ...state,
        applications: action.payload,
      };

    // Skill Actions
    case 'ADD_SKILL':
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };

    case 'UPDATE_SKILL':
      return {
        ...state,
        skills: state.skills.map((skill) =>
          skill.id === action.payload.id ? action.payload : skill
        ),
      };

    case 'DELETE_SKILL':
      return {
        ...state,
        skills: state.skills.filter((skill) => skill.id !== action.payload),
      };

    case 'SET_SKILLS':
      return {
        ...state,
        skills: action.payload,
      };

    // User Actions
    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };

    // Bulk Actions
    case 'LOAD_STATE':
      return action.payload;

    case 'RESET_STATE':
      return initialState;

    default:
      return state;
  }
};
