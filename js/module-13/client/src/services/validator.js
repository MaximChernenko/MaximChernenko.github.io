'use strict';

export default class Validator {
    constructor(){}

    //Паттерн для url

    static get pattern() {
        return /^https?:\/\/(www\.)?[\.a-zA-Z0-9]+\.[a-z]{2,6}(\.[a-z]{2,6})?\/?(\/[_\/&?=a-zA-Z0-9-]+)?$/;
    }

    //Проверка на соответствие паттерну 

    static isValid(value) {
        return this.pattern.test(value);
    }
}