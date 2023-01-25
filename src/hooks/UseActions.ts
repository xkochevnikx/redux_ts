import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionsCreators from "../Store/Action-creators/index";

//? создаём хук вызывая который можно через деструктуризацию получить доступ к любому экшн криэйтеру в него передаём диспатч и возвращает он функцию из коробки которая принимает все экшн криэйтеры и диспатч. внутри она делает магию которая при вызове этого хука позволяет достать из него экшн криэйтер и напрямую вызывать его без диспатча
export const UseActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionsCreators, dispatch);
};
