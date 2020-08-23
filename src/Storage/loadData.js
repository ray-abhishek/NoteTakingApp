export const loadState = () => {
    try {
      const jsonState = localStorage.getItem('noteapp_state');
      if (jsonState === null) {
        return undefined;
      }
      return JSON.parse(jsonState);
    } catch (err) {
      return undefined;
    }
  }; 