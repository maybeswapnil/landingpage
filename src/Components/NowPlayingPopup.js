import axios from 'axios';
import {useState, useEffect} from 'react'
import ImageForm from './ImageForm';
import './NowPlayingPopup.scss';

function NowPlayingPopup(props) {

  const [mobileNavbarState,  setMobileNavbarState] = useState(false)
  const [spotifyData,  setSpotifyData] = useState({
    "album": {
        "album_type": "single",
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/23fqKkggKUBHNkbKtXEls4"
                },
                "href": "https://api.spotify.com/v1/artists/23fqKkggKUBHNkbKtXEls4",
                "id": "23fqKkggKUBHNkbKtXEls4",
                "name": "",
                "type": "artist",
                "uri": "spotify:artist:23fqKkggKUBHNkbKtXEls4"
            }
        ],
        "available_markets": {},
        "external_urls": {
            "spotify": "https://open.spotify.com/album/2sPYPyDFwgi1jrRTGhoxq2"
        },
        "href": "https://api.spotify.com/v1/albums/2sPYPyDFwgi1jrRTGhoxq2",
        "id": "2sPYPyDFwgi1jrRTGhoxq2",
        "images": [
            {
                "height": 640,
                "url": "https://cdn.pixabay.com/photo/2018/05/08/21/29/spotify-3384019_960_720.png",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02a333559091297eda04eba27c",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851a333559091297eda04eba27c",
                "width": 64
            }
        ],
        "name": "Stargazing - EP",
        "release_date": "2017-09-21",
        "release_date_precision": "day",
        "total_tracks": 5,
        "type": "album",
        "uri": "spotify:album:2sPYPyDFwgi1jrRTGhoxq2"
    },
    "artists": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/23fqKkggKUBHNkbKtXEls4"
            },
            "href": "https://api.spotify.com/v1/artists/23fqKkggKUBHNkbKtXEls4",
            "id": "23fqKkggKUBHNkbKtXEls4",
            "name": "Kygo",
            "type": "artist",
            "uri": "spotify:artist:23fqKkggKUBHNkbKtXEls4"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/4xnihxcoXWK3UqryOSnbw5"
            },
            "href": "https://api.spotify.com/v1/artists/4xnihxcoXWK3UqryOSnbw5",
            "id": "4xnihxcoXWK3UqryOSnbw5",
            "name": "",
            "type": "artist",
            "uri": ""
        }
    ],
    "available_markets": {},
    "disc_number": 1,
    "duration_ms": '',
    "explicit": false,
    "external_ids": {
        "isrc": ""
    },
    "external_urls": {
        "spotify": ""
    },
    "href": "",
    "id": "",
    "is_local": false,
    "name": "",
    "popularity": false,
    "preview_url": "",
    "track_number": 4,
    "type": "",
    "uri": ""
})
  useEffect(() => {
        axios('https://spotify-playing-now.herokuapp.com/spotify/nowplaying').then((data) => {
            setSpotifyData(data.data)
        })
        setInterval(() => {
            axios('https://spotify-playing-now.herokuapp.com/spotify/nowplaying').then((data) => {
                setSpotifyData(data.data)
            })
        }, 5000)
  }, [mobileNavbarState])

  return (
      <div id="popup2" className="overlay">
        <div className="popup2">
            <img src={spotifyData.album.images[0].url} className="popup2-image"/>
            <a className="close" href='#content' onClick={() => props.close()}>&times;</a>
            <div className="spotify-content">
            <h1>{spotifyData.album.artists[0].name}</h1>
            <h4>{spotifyData.name}</h4>
            <p>{(spotifyData.duration_ms)/1000}</p>
        
            </div> 
           
        </div>
      </div>
  );
}

export default NowPlayingPopup;


