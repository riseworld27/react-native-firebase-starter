import * as types from './types'
import * as firebase from 'firebase'
import { getMovies } from '../../utils/utils';

export function welcome() {
    return {
        type: types.WELCOME,
    }
}

export function getData(callback) {
    return function (dispatch) {
        return Promise.resolve(getMovies()).then((result) => {
            if (result.status == 200) {
                callback(result._bodyInit);
            } else {
                alert('Something went wrong')
            }
        }).catch((err) => {
            alert('Something went wrong')
        })
    }
}

export function addComment(param) {
    return function (dispatch) {
        let path = "/Comments/" + param.title;
        firebase.database().ref(path).push(param.comment)
    }
}

export function getComment(param, callback) {
    return function (dispatch) {
        let path = "/Comments/" + param;
        firebase.database().ref(path).on('value', (snapshot) => {
            let data = {};
            if (snapshot.val()) {
                data = snapshot.val();
            }
            callback(data)
        });
    }
}