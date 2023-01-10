import axios from 'axios';
import React,{useState, useEffect} from 'react';
import './NowPlayingPopup.scss';
import {ReactComponent as Spinner} from '../Assets/spinner.svg'
import spotifyConfig from "../Config/spotify.json";
import config from '../Config/variables.json'
function NowPlayingPopup(props) {

  const [mobileNavbarState,  setMobileNavbarState] = useState(false)
  const [loading,  setLoading] = useState(false)
  const [error,  setError] = useState(false)
  const [spotifyData,  setSpotifyData] = useState(spotifyConfig)
  useEffect(() => {
        setLoading(true);
        axios(config.SPOTIFY_URL).then((data) => {
            setSpotifyData(data.data)
            setLoading(false)
        }).catch(() => {
            setLoading(false)
            setError(true)
            // props.close()
        });
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