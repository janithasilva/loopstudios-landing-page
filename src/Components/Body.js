import React from 'react';
import './Custom.css'
import './CSS/Body.css'
import imginterractive from '../Assets/Img/image-interactive.jpg'

class Body extends React.Component {
    render() {
      return (
        <section className="body" title="body">
          <img className="body-img" src={imginterractive} alt="body img" />
  
          <div className="body-content">
            <h2 className="body-content-subtitle">The leader in interactive VR</h2>
  
            <p className="body-content-paragraph">
              Founded in 2011, Loopstudios has been producing world-class virtual reality
              projects for some of the best companies around the globe. Our award-winning
              creations have transformed businesses through digital experiences that bind
              to their brand.
            </p>
          </div>
        </section>
      );
    }
  }

export default Body