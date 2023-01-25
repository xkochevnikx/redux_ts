import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./Reducers/todoReducer";
import { userReducer } from "./Reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

//? получаем тип рутредюсера
export type RootState = ReturnType<typeof rootReducer>;
