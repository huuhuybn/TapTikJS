import logo from './logo.svg';
import './App.css';
import {useState, lazy} from 'react';

function App() {
    const [link, setLink] = useState();
    return (
        <div className="App">

            <header className="App-header">
                <h1 className="App-link">PINTEREST VIDEO DOWNLOADER</h1>
                <h2>Download Video Pinterest HD, 2K</h2>

                <div style={{flexDirection : 'row', width : '100%'}}>
                <input style={{borderWidth: 1, borderColor: 'blue',height : 40, borderRadius: 5}}
                       placeholder={'Enter Pinterest Link'}/>
                <button style={{ height : 40}} title={'Download'} onClick={() => {
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
              </div>


            </header>
            <div>
                DOWNLOAD VIDEO PINTEREST
            </div>
            <div>
                DotSave is best download Video Pinterest and Photo Pinterest website/tool.
                <br/>
                It works for computers, tablets and mobile devices.
                <br/>
                Download Pinterest Video Full HD, 2K, 4K
            </div>
            <div>
                FEATURE
            </div>

            <div>
                Download Pinterest Video with FullHD, 720p, 320p ...
                <br/>
                Download Pinterest Photo with Original Size, Large, Medium, Thumbnail size ...
                <br/>
                Download Pinterest Video without installing anythings
            </div>


        </div>
    );
}

export default App;
