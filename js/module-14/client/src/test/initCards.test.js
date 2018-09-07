'use strict';

import Model from "../js/model";
import axios from "axios";

jest.mock('axios');

const cardId = 6;

const response = {
  data: [
    {
      title: "Stack Overflow - Where Developers Learn",
      description: "Stack Overflow",
      image: "https://cdn.sstatic.net/apple-touch-icon@2.png?v=73d79a89bded",
      url: "https://stackoverflow.com/",
      id: cardId
    }
  ]
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

axios.get.mockResolvedValue(response);

describe("Testing module unit", () => {

  it("Should init cards", () => {
    const model = new Model();
    return model.initCards().then(res => {
        expect(res).toEqual(result);
    }).catch(err => expect(err).not.toBeNull);
  });
});
