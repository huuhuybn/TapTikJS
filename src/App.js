import logo from './logo.svg';
import './App.css';
import { useState,lazy } from 'react';
function App() {
  const [link,setLink] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href={link}>Video</a>
        <input placeholder={'Enter Tiktok Link'}/>
        <button title={'Download'} onClick={()=>{

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

        }} download>Download</button>
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
        Download TikTok videos without Logo, Watermark completely free
        TapTik is the best tool to download TikTok Videos without logo, watermark today in Vietnam. Website does not require installing any software on your computer or phone. The only job you need do is COPY the link of the TikTok Video And when the process of creating the download link is finished, you just need to press the DOWNLOAD HD button and save the video to your device
        Outstanding features
        Downloaded video does not contain logo or watermark, video is in HD quality or equal to original video quality
        Easy to download TikTok videos using devices such as computers, phones, tablets
        Download videos using a browser on your computer, phone or tablet without installing any good software which support program
        The website is completely free for all users. We only show a few ads from Adsense or from ads host unit
        How to use TapTik
        Open the TikTok app on your phone, tablet or web browser
        Select any Video you want to Download
        Choose the Share Video button
        Select Copy Link button
        Open the TapTik website and paste the copied link into the input box and press Download HD
        Wait a few minutes for the system to search and create a download link and then save the Video
      </header>
    </div>
  );
}

export default App;
