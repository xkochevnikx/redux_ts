export interface IUserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

// ? перечисление типов
export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface IFetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface IFetchUsersSuccess {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface IFetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

//? тип обобщает интерфейсы для экшена
export type UserAction =
  | IFetchUsersAction
  | IFetchUsersSuccess
  | IFetchUsersErrorAction;
