import logo from './logo.svg';
import './App.css';
import {useState, lazy} from 'react';

function App() {
    const [link, setLink] = useState();
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-link">TikTok Video Downloader</h1>
                <input style={{borderWidth : 1,borderColor : 'blue',padding : 10, borderRadius : 5, width : '60%'}}
                       placeholder={'Enter Tiktok Link'}/>
                <button style={{ height : 50,width : 100, marginTop : 8}} title={'Download'} onClick={() => {

                    const myHeaders = new Headers({
                        "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
                        "x-rapidapi-key": "2ede18d1bfmsh717c6e42745b666p11ca16jsn68dd7903ab84",
                        "useQueryString": true
                    });

                    fetch('https://tiktok-video-no-watermark2.p.rapidapi.com/?url=https://www.tiktok.com/@lightfury_wing/video/7051934010502565121', {
                        headers: myHeaders
                    }).then(r => r.json()).then(data => {
                        setLink(data.data.play)
                    });

                }} download>Download
                </button>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div>

            </div>


        </div>
    );
}

export default App;
