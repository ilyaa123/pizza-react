import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppStore } from "./store";


export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch