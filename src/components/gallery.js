import React from 'react';
import ImageGallery from 'react-image-gallery';
import './gallery.css';

const imgStyle = {
  width: 'auto',
  height: 'auto'
};

const images = [
    {
      original: 'https://d.facdn.net/art/rakkantekicoyote/1441774323/1441774323.rakkantekicoyote_felixregression.png',
      thumbnail: 'https://t.facdn.net/17631001@150-1441774323.jpg',
    },
    {
      original: 'https://d.facdn.net/art/rakkantekicoyote/1406359363/1406359363.rakkantekicoyote_%E7%8F%BE%E4%BB%A3%E3%81%AE%E6%B5%AA%E4%BA%BA.png',
      thumbnail: 'https://t.facdn.net/14093257@150-1406359363.jpg',
    },
    {
      original: 'https://d.facdn.net/art/rakkantekicoyote/1558916055/1558916055.rakkantekicoyote_project---felix_idle_anim_big.gif',
      thumbnail: 'https://t.facdn.net/31679879@150-1558916055.jpg',
    },
  ];

export class Gallery extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div style={imgStyle}>
        <ImageGallery items={images}/>
        </div>
    }
}