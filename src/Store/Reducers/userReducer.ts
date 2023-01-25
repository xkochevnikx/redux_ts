import { IUserState, UserAction, UserActionTypes } from "../../Types/User";

//? тут создаём изначальное состояние и типизируем его. затем мы указали что функция возвращает объект такогоже типа как и изначальное состояние.
const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  //? затем типизировали наш экшн и теперь знаем в каком кейсе находятся какие значения внутри экшена
  action: UserAction
): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
