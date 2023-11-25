import store from "~/store";
import { _setCurrentAccount } from ".";

export const setCurrentAccount = data => store.dispatch(_setCurrentAccount(data))