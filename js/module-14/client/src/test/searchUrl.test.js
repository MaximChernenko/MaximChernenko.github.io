"use strict";

import Model from "../js/model";

const testUrl = "https://allmusic.com";

describe("Testing model unit", () => {
  it("Should return right settings object", () => {
    const model = new Model();
    model.cardList.push({
      id: 0,
      url: testUrl
    });

    const result = {
      id: 0,
      url: testUrl,
      idx: 0,
      arr: model.cardList
    };

    expect(model.searchUrl("0", testUrl)).toEqual(result);
  });
});
