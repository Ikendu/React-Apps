import { data, people } from "../../data";

export const RESTORE = "RESTORE";
export const CLEAR_LIST = "CLEAR_LIST";
export const REMOVE_USER = "REMOVE_USER";

const reducer = (state, action) => {
  if (action.type === RESTORE) return { ...state, people: data };
  if (action.type === CLEAR_LIST) return { ...state, people: [] };
  if (action.type === REMOVE_USER) {
    let newUser = state.people.filter((person) => person.id !== action.id);
    return { ...state, people: newUser };
  }
};

export default reducer;
