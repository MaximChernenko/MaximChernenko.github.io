"use strict";

import Model from "../js/model";
import axios from "axios";

jest.mock("axios");

const cardId = 6;

const getResponse = {
  data: {
    title: "Stack Overflow - Where Developers Learn",
    description: "Stack Overflow",
    image: "https://cdn.sstatic.net/apple-touch-icon@2.png?v=73d79a89bded",
    url: "https://stackoverflow.com/"
  }
};

const postResponse = {
  data: {
    title: "Stack Overflow - Where Developers Learn",
    description: "Stack Overflow",
    image: "https://cdn.sstatic.net/apple-touch-icon@2.png?v=73d79a89bded",
    url: "https://stackoverflow.com/",
    id: cardId
  }
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

axios.get.mockResolvedValue(getResponse);
axios.post.mockResolvedValue(postResponse);

describe("Testing module unit", () => {
  let model;
  beforeEach(() => {
    model = new Model();
  });

  it("Should add truthy url", () => {
    return model
      .addUrl("http://all.com")
      .then(res => {
        expect(res).toEqual(result);
      })
      .catch(err => expect(err).not.toBeNull());
  });

  it("Should add falsy url", () => {
    expect(model.addUrl("httl.com")).toBeNull();
  });
});
