import { setLocale } from 'react-redux-i18n';

export function setLanguage(language) {
    return (dispatch) => {
        dispatch(setLocale(language));
    };
}
