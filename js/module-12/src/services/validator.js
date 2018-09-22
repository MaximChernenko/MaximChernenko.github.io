'use strict';

export default class Validator {
    constructor(){}

    static get pattern() {
        return /^https?:\/\/(www\.)?[\.a-zA-Z0-9]+\.[a-z]{2,6}(\.[a-z]{2,6})?\/?(\/[_\/&?#=a-zA-Z0-9.-]+)?$/;
    }

    static isValid(value) {
        return this.pattern.test(value);
    }
}