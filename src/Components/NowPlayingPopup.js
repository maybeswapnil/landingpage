import axios from 'axios';
import React,{useState, useEffect} from 'react'
import equalizer from '../Assets/Equalizer.gif';
import './NowPlayingPopup.scss';
import {ReactComponent as Spinner} from '../Assets/spinner.svg'

function NowPlayingPopup(props) {

  const [mobileNavbarState,  setMobileNavbarState] = useState(false)
  const [loading,  setLoading] = useState(false)
  const [error,  setError] = useState(false)
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
    "name": "User Away",
    "popularity": false,
    "preview_url": "",
    "track_number": 4,
    "type": "",
    "uri": ""
})
  useEffect(() => {
      setLoading(true)
        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://186d-2401-4900-1c88-8fff-00-96-5be5.ngrok-free.app/spotify/nowplaying',
        headers: { 
            'ngrok-skip-browser-warning': '1'
        }
        };

            axios.request(config).then((data) => {
            setSpotifyData(data.data)
            setLoading(false)
        }).catch(() => {
            setLoading(false)
            setError(true)
            // props.close()
        })
  }, [mobileNavbarState])

  useEffect(() => {
    return () => {}
}, [])

  return (
      <div id="popup2" className="overlay">
        <div className="popup2">
            {loading?
            <div className='spinner-div' id='center-div-now' style={{backgroundColor: 'white'}}>
                <Spinner />
            </div>:<>
                    <img src={spotifyData.album.images[0].url} className="popup2-image"/>
                    <a className="close" onClick={() => props.close()}>&times;</a>
                    
                    {!error?<div className="spotify-content" style={{color:'black'}}>
                        <h1>{spotifyData.album.artists[0].name}</h1>
                        <h4>{spotifyData.name}</h4>
                        <p>{((spotifyData.duration_ms)/100000).toFixed(2) + ' minutes'||""}</p>
                        
                    </div>:<div className="spotify-content" style={{color:'black'}}></div> }
                </>
            }
        </div>
      </div>
  );
}

export default NowPlayingPopup;


1
