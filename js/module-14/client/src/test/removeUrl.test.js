"use strict";

import Model from "../js/model";
import axios from "axios";

jest.mock("axios");

const cardId = 6;

const response = {
    data: {}
}

axios.delete.mockResolvedValue(response);

const item = {
  title: "Stack Overflow - Where Developers Learn",
  description: "Stack Overflow",
  image: "https://cdn.sstatic.net/apple-touch-icon@2.png?v=73d79a89bded",
  url: "https://stackoverflow.com/",
  id: cardId
};

describe("Testing module unit", () => {
  it("Should remove url", () => {
    const model = new Model();
    model.cardList.push(item);
    return model.deleteUrl(item.id).then(() => {
        expect(model.cardList).toEqual([]);
    }).catch(err => expect(err).not.toBeNull());
  });
});
