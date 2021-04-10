import * as actionTypes from './actionTypes';

const prefix = '/api/';

const contentStart = () => ({ type: actionTypes.CONTENT_START });
const contentSuccess = data => ({ type: actionTypes.CONTENT_SUCCESS, ...data });
const contentFail = error => ({ type: actionTypes.CONTENT_FAIL, error });
export const getContent = () => async dispatch => {
    dispatch(contentStart());

    try {
        let lang = localStorage.getItem('lang');
        if (!lang || lang === 'undefined') {
            lang = process.env.MIX_DEFAULT_LANG;
            localStorage.setItem('lang', lang);
        }
        const res = await fetch(`${prefix}content/${lang}`);
        const resData = await res.json();

        const currenciesRes = await fetch(CORS + 'https://raw.githubusercontent.com/mhs/world-currencies/master/currencies.json', { method: 'GET', mode: 'cors' });
        const currencies = await currenciesRes.json();

        const phoneRes = await fetch(CORS + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
        const namesRes = await fetch(CORS + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

        const phone = await phoneRes.json();
        const names = await namesRes.json();

        const countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] })).sort((a, b) => a.country > b.country);

        dispatch(contentSuccess({ ...resData, currencies, countries }));
    } catch (error) {
        console.log(error);
        dispatch(contentFail(error));
    }
};

export const setLanguage = id => async dispatch => {
    dispatch(contentStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix}content/language/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(contentSuccess(resData));
        localStorage.setItem('lang', resData.language.abbr);
    } catch (error) {
        console.log(error);
        dispatch(contentFail(error));
    }
};