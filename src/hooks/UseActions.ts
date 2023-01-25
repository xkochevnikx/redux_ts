import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionsCreators from "../Store/Action-creators/index";

export const UserActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionsCreators, dispatch);
};
