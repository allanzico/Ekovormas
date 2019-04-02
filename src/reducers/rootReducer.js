import {  combineReducers, createStore , applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import {translations} from "../translations";

const store = createStore(
  combineReducers({
    i18n: i18nReducer
  }),
  applyMiddleware(thunk),
);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale('en'));

export default store;
