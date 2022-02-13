import logo from './logo.svg';
import './App.css';
import {useState, lazy} from 'react';

function App() {
    const [link, setLink] = useState();
    return (
        <div className="App">

            <header className="App-header">
                <h1 style={{color: 'black'}}><span style={{color: 'red'}}>PINTEREST</span> VIDEO DOWNLOADER</h1>
                <h2 style={{color: 'black'}}>Full HD, 2K. All Devices</h2>
                <div className="ui input">
                    <input type="text" placeholder="Enter Pinterest Link..."/>
                </div>

                <button className="ui labeled icon button" style={{marginTop : 8}} title={'Download'} onClick={() => {
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
                }} download><i className="download icon"></i>Download
                </button>





            </header>
            <div>

                <div style={{width: '100%', color: 'black'}}>

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


        </div>
    );
}

export default App;
