export interface ItodoState {
  todos: any[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface IFetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS;
}

interface IFetchTodosSuccess {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}

interface IFetchTodosErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface ISetTodoPage {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodoAction =
  | IFetchTodosAction
  | IFetchTodosSuccess
  | IFetchTodosErrorAction
  | ISetTodoPage;
