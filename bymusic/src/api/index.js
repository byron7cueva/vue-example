import config from './config';


let {apiKey} = config;

const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`;

export default function getArtists(country) {
    let url = URL.replace(':country',country);
    return fetch(url)
            .then(response => response.json())
            .then(json => json.topartists.artist);
}