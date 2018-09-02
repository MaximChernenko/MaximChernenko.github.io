'use strict';

export default class EventEmitter {
    constructor() {
        this.events = {};
    }
    //Подписка
    on(type, callback) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }
    //Вызов
    emit(type, ...args) {
        if(this.events[type]) {
            this.events[type].forEach(callback => callback(...args));
        }
    }
}