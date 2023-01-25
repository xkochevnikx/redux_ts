import { IUserState, UserAction, UserActionTypes } from "../../Types/User";

//? тут создаём изначальное состояние и типизируем его. затем мы указали что функция возвращает объект такого же типа как и изначальное состояние.
const initialState: IUserState = {
  users: [],
  //? лоадинг это флаг в зависимости от его значения будем в компоненте отрисовывать информацию о том что идёт загрузка. когда функция экшнКриэйтер возвратит тип что загрузка завершена или вылезет ошибка,лоадинг изменится на фолс.
  loading: false,
  //? если ошибка произошла в это поле помешается строка и текстом ошибки и тогда она отрисуется в компоненте.
  error: null,
};

//? создаём редюсер в котором будет происходить взаимодействие со списком пользователей в приложении. В параметры принимает стейт и экшн которые тоже типизируем. Редюсер всегда возвращает состояние в стейт в зависимости от типа либо дефолтное
export const userReducer = (
  state = initialState,
  //? затем типизировали наш экшн и теперь знаем в каком кейсе находятся какие значения - например в первом типе запроса есть только поле типа без пэйлоада потому что ничего не возвращается кроме изменения статуса загрузки для отрисовки
  action: UserAction
): IUserState => {
  //? конструкция свитч в зависимости от типа принимает тот или иной кейс
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
