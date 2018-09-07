"use strict";

import "./css/normalize.css";
import "./css/styles.css";
import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';

const model = new Model();
const view = new View();
new Controller(model, view);