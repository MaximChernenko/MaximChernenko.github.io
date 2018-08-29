'use strict';

export default class Storage {
    constructor() {}
    static getItem(key) {
        try {
            const data = JSON.parse(localStorage.getItem(key));
            return data !== null ? data : [];
        } catch(err) {
            console.log(err);
        }
    }
    static setItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch(err) {
            console.log(err);
        }
    }
}