import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./Reducers/todoReducer";
import { userReducer } from "./Reducers/userReducer";

//? эта функция обьединяет разные редюсеры в одном сторе
const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

//? иниициализируем стор и первым параметром передаём объединённые в один редюсеры
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

//? получаем тип рутредюсера
export type RootState = ReturnType<typeof rootReducer>;
