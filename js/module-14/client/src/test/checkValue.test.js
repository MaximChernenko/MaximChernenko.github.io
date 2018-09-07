'use strict';

import Model from '../js/model';

describe('Testing model unit', () => {
    let model;
    beforeEach(() => {
        model = new Model();
    });
    it('Should check truthy value on unique', () => {
        model.cardList.push({url: 'https://trello.com'})
        expect(model.checkValue({url: 'https://trello.com'})).toBeTruthy();
    })

    it('Should check falsy value on unique', () => {
        model.cardList.push({url: 'https://allmusic.com'})
        expect(model.checkValue({url: 'https://trello.com'})).toBeFalsy();
    })
});