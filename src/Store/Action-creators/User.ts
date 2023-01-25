import axios from "axios";
import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../Types/User";

//? экшн криэйтер получает данные с сервера и в зависимости от результата вызывает диспатч с типом для редюсера
export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};
