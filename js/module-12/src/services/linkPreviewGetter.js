'use strict';

import axios from 'axios';
const key = '5b88308dc52943bcc27b5d67121b3987a9840158c7977';

export default function getPreview(url) {
    const apiUrl = `http://api.linkpreview.net/?key=${key}&q=${url}`;
    return axios.get(apiUrl);
}