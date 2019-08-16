import config from './config';


let {apiKey} = config;

const COUNTRY = 'ecuador';
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${COUNTRY}&api_key=${apiKey}&format=json`;

export default function getArtists() {
    return fetch(URL)
            .then(response => response.json())
            .then(json => json.topartists.artist);
}