export default (state = {}, action) => {
  switch(action.type){
    case 'LOGIN_REQUEST':
      return {
        isLoading: true,
        loggedIn: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        isLoading: false,
        loggedIn: true,
        token: action.payload
      };
    case 'LOGIN_FAILURE':
      return {
        isLoading: false,
        msgError: action.payload
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
}