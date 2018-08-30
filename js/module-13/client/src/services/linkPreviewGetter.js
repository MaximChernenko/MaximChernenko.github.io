'use strict';

import axios from 'axios';
const key = '5b88308dc52943bcc27b5d67121b3987a9840158c7977';
axios.defaults.baseURL = 'http://localhost:3000';

export function getPreview(url) {
    const apiUrl = `http://api.linkpreview.net/?key=${key}&q=${url}`;
    return axios.get(apiUrl);
}

export function postData(data) {
    const apiUrl = '/cards';
    return axios.post(apiUrl, data).then(resp => resp.data);
}

export function deleteData(id) {
    const apiUrl = `/cards/${id}`;
    return axios.delete(apiUrl, id);
}

export function getData() {
    const apiUrl = '/cards';
    return axios.get(apiUrl).then(resp => resp.data);
}
