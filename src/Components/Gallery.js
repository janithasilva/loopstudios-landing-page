import React from 'react';
import './Custom.css'
import './CSS/Gallery.css'

class Gallery extends React.Component {
    render() {
      return (
        <section className="gallery" title="Gallery">
          <div className="gallery-wrapper">
            <h2 className="subtitle gallery-subtitle">Our Creations</h2>
  
            <button className="button gallery-button" title="See all">See all</button>
  
            <div className="gallery-card">
              <div className="gallery-card-item "><span className="gallery-card-title">Deep earth</span></div>
              <div className="gallery-card-item "><span className="gallery-card-title">Night arcade</span></div>
              <div className="gallery-card-item "><span className="gallery-card-title">Soccer team VR</span></div>
              <div className="gallery-card-item "><span className="gallery-card-title" style={{width:'30%'}}>The grid</span></div>
              <div className="gallery-card-item "><span className="gallery-card-title">From up above VR</span></div>
              <div className="gallery-card-item "><span className="gallery-card-title">Pocket borealis</span></div>
              <div className="gallery-card-item "><span className="gallery-card-title">The curiosity</span></div>
              <div className="gallery-card-item "><span className="gallery-card-title">Make it fisheye</span></div>
            </div>
          </div>
        </section>
      );
    }
  }

  export default Gallery;