import axios from 'axios';


const KEY = 'AIzaSyBiCT5yPKAlwfjonw1U6XIFsZ7vu3tkTrs';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

export default youtube