import * as actionTypes from './actionTypes';

const prefix = '/api/';

const contentStart = () => ({ type: actionTypes.CONTENT_START });
const contentSuccess = data => ({ type: actionTypes.CONTENT_SUCCESS, ...data });
const contentFail = error => ({ type: actionTypes.CONTENT_FAIL, error });
export const getContent = () => async (dispatch, getState) => {
    dispatch(contentStart());

    try {
        let lang = localStorage.getItem('lang');
        if (!lang || lang === 'undefined') {
            lang = process.env.MIX_DEFAULT_LANG;
            localStorage.setItem('lang', lang);
        }
        const res = await fetch(`${prefix}content/${lang}`);
        const resData = await res.json();

        try {
            let { currencies, countries } = getState().content;

            if (!countries || !currencies) {
                const currenciesRes = await fetch(CORS + 'https://raw.githubusercontent.com/mhs/world-currencies/master/currencies.json', { method: 'GET', mode: 'cors' });
                currencies = await currenciesRes.json();

                const phoneRes = await fetch(CORS + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
                const namesRes = await fetch(CORS + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

                let phone = await phoneRes.json();
                let names = await namesRes.json();

                currencies = JSON.parse(currencies.contents);
                phone = JSON.parse(phone.contents);
                names = JSON.parse(names.contents);

                countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] }));

                currencies = currencies.sort((a, b) => a.name.localeCompare(b.name));
                countries = countries.sort((a, b) => a.name.localeCompare(b.name));

                return dispatch(contentSuccess({ ...resData, currencies, countries }));
            }
        } catch (error) {
            console.log(error);
            return dispatch(contentSuccess({ ...resData, countries: [], currencies: [] }));
        }

        dispatch(contentSuccess(resData));
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
        localStorage.setItem('lang', resData.language.abbr);
        dispatch(contentSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(contentFail(error));
    }
};