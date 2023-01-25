import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../Store/Store";

export const UseTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
