import React, { Component } from "react";
import Slider from "react-slick";

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
      <h1 className="colored">Skills</h1>
        <Slider {...settings}>
          <div>
            <img src={require('./icons/html.png')}  alt="html" />
          </div>
          <div>
             <img src={require('./icons/css.png')}  alt="css" />
          </div>
          <div>
             <img src={require('./icons/js.png')}  alt="js" />
          </div>
          <div>
             <img src={require('./icons/react.png')}  alt="react" />
          </div>
          <div>
             <img src={require('./icons/nodejs.png')}  alt="node" />
          </div>
          <div>
             <img src={require('./icons/python.png')}  alt="python" />
          </div>
          <div>
             <img src={require('./icons/django.png')}  alt="django" />
          </div>
          <div>
             <img src={require('./icons/postgres.png')}  alt="postgres" />
          </div>
          <div>
             <img src={require('./icons/mongodb.png')}  alt="mongo db" />
          </div>
        </Slider>
      </div>
    );
  }
}