import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import portfolio from 'pages/image/portfolio.jpg'
import Chat from './image/portfolio/Chat-hover.png'
import Fowler from './image/portfolio/fowler-hover.png'
import Land from './image/portfolio/land-hover.png'
import Osbb from './image/portfolio/osbb-hover.png'
import Pattern from './image/portfolio/pattern-hover.png'
import Polo from './image/portfolio/polo360-hover.png'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="panel" style={{backgroundImage: `url(${portfolio})`,resizeMode: 'cover', height:'350px'}}>
          <h1 className="head-page">Portfolio page here</h1>
          <p className="head-page">Welcome to my work!</p>
          <Link className="btn btn-lg btn-default" to={prefixLink('/')}>Go back to the homepage</Link>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="panel">
              <img src={Chat} alt="Jane" />
              <h2>Project #1</h2>
              <p className="title">CEO &amp; Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="btn btn-lg btn-default">Link</button></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel">
              <img src={Fowler} alt="Mike" />
              <h2>Project #2</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="btn btn-lg btn-default">Link</button></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel">
              <img src={Land} alt="John" />
              <h2>Project #3</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="btn btn-lg btn-default">Link</button></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel">
              <img src={Osbb} alt="Jane" />
              <h2>Project #4</h2>
              <p className="title">CEO &amp; Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="btn btn-lg btn-default">Link</button></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel">
              <img src={Pattern} alt="Mike" />
              <h2>Project #5</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="btn btn-lg btn-default">Link</button></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel">
              <img src={Polo} alt="John" />
              <h2>Project #6</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="btn btn-lg btn-default">Link</button></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
