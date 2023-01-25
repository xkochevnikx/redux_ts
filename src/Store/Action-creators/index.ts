import * as UserActionCreators from "./User";
import * as TodoActionCreators from "./Todo";

//? тут связываем все файлы с экшн криэйтерами в один
export default {
  ...TodoActionCreators,
  ...UserActionCreators,
};
