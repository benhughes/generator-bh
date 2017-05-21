import {} from './actions'; 

const DEFAULT_<%= stateNameUpperCase%>_STATE = {};

export const <%= stateName%>Reducer = (state = {...DEFAULT_<%= stateNameUpperCase%>_STATE}, {type, payload} = {}) => {
  switch (type) {
    default:
      return state;
  }
}

export const getReducers = () => ({
  <%= stateName%>: <%= stateName%>Reducer,
});
