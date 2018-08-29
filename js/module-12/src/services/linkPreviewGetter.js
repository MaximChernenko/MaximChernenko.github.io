'use strict';

import axios from 'axios';
const key = '5b86632f8cc37dda3dd68bdae57a6f55a9411390cbecc';

export default function getPreview(url) {
    const apiUrl = `http://api.linkpreview.net/?key=${key}&q=${url}`;
    return axios.get(apiUrl);
}