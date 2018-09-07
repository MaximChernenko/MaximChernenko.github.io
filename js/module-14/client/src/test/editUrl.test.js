"use strict";

import Model from "../js/model";
import axios from "axios";

jest.mock("axios");

const cardId = 6;

const putResponse = {
  data: {
    title: "Stack Overflow - Where Developers Learn",
    description: "Stack Overflow",
    image: "https://cdn.sstatic.net/apple-touch-icon@2.png?v=73d79a89bded",
    url: "https://stackoverflow.com/",
    id: cardId
  }
};

const getResponse = {
  data: {
    title: "Stack Overflow - Where Developers Learn",
    description: "Stack Overflow",
    image: "https://cdn.sstatic.net/apple-touch-icon@2.png?v=73d79a89bded",
    url: "https://stackoverflow.com/",
  }
};

axios.put.mockResolvedValue(putResponse);
axios.get.mockResolvedValue(getResponse);

const baseItem = {
  title: "Stack Overflow",
  description: "St",
  image: "https://cdn.sstatic.net/",
  url: "https://allmusic.com/",
  id: cardId
};

const result = [
  {
    title: expect.any(String),
    description: expect.any(String),
    image: expect.any(String),
    url: expect.any(String),
    id: cardId
  }
];

describe("Testing module unit", () => {
  let model;
  beforeEach(() => {
    model = new Model();
  });
  it("Should edit right url", () => {
    model.cardList.push(baseItem);

    const item = {
      id: cardId,
      url: "https://stackoverflow.com/",
      idx: 0,
      arr: model.cardList
    };

    return model.editUrl(item).then(arr => {
        expect(arr).toEqual(result);
    }).catch(err => {expect(err).not.toBeNull});
  });

  it("Should edit wrong url", () => {
    model.cardList.push(baseItem);

    const item = {
      id: 6,
      url: "https://stackov33",
      idx: 0,
      arr: model.cardList
    };

    expect(model.editUrl(item)).toBeNull();
  });
});
