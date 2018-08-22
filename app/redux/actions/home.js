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
        getMovies().then((result) => {
            callback(result._bodyInit);
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