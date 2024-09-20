const apiMiddleware = (store) => (next) => (action) => {
    if (action.type === 'Api/API_CALL') {
      // Execute the API call promise
      action.promise
        .then((response) => {
          // On success, dispatch the success action
          store.dispatch({
            ...action.actions.success,
            payload: response, // Pass API response as payload
          });
        })
        .catch((error) => {
          // On failure, dispatch the failure action
          store.dispatch({
            ...action.actions.fail,
            payload: error.message, // Pass error message
          });
        });
    } else {
      return next(action);
    }
  };
  
  export default apiMiddleware;