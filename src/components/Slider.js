import React, { Component } from "react";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    };
    return (
      <div className="slider">
  
        <Slider {...settings}>
        
          <div>
          <Fade left cascade> <img src={require('./icons/html.png')}  alt="html" /> </Fade>
          </div>
          <div>
          <Fade left cascade> <img src={require('./icons/css.png')}  alt="css" /> </Fade>
          </div>
          <div>
          <Fade left cascade> <img src={require('./icons/js.png')}  alt="js" /> </Fade>
          </div>
          <div>
          <Fade left cascade>  <img src={require('./icons/react.png')}  alt="react" />  </Fade>
          </div>
          <div>
          <Fade left cascade> <img src={require('./icons/nodejs.png')}  alt="node" /> </Fade>
          </div>
          <div>
          <Fade left cascade>  <img src={require('./icons/python.png')}  alt="python" /> </Fade>
          </div>
          <div> 
          <Fade left cascade> <img src={require('./icons/django.png')}  alt="django" /> </Fade>
          </div>
          <div>
          <Fade left cascade> <img src={require('./icons/postgres.png')}  alt="postgres" /> </Fade>
          </div>
          <div>
          <Fade left cascade> <img src={require('./icons/mongodb.png')}  alt="mongo db" />  </Fade>
          </div>
          
        </Slider>
      </div>
    );
  }
}
