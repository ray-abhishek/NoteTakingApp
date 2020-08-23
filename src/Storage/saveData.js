export const saveState = (state) => {
      const jsonState = JSON.stringify(state);
      localStorage.setItem('noteapp_state', jsonState);
  };