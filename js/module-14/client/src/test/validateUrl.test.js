'use strict';

import Model from "../js/model";

describe('Testing module unit', () => {
    let model;
    beforeEach(() => {
        model = new Model();
    })
    it('Should validate falsy url', () => {
        expect(model.validateUrl('fjfjfhhf')).toBeFalsy();
    });

    it('Should validate truthy url', () => {
        expect(model.validateUrl('https://all.com')).toBeTruthy();
    });
});
