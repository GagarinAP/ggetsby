import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import react from './image/react.png'
import portfolio from 'pages/image/portfolio.jpg'
import about from 'pages/image/about.jpg'
import edu from 'pages/image/edu.jpg'
import contact from 'pages/image/contact.jpg'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="panel" style={{backgroundImage: `url(${react})`,resizeMode: 'cover', height:'350px'}}/>
          <div className="row">
            <div className="col-md-6">
              <div className="panel panel-success" style={{backgroundImage: `url(${portfolio})`, height: '280px'}}>
                <div className="panel-body text-center">
                  <h2>Portfolio</h2>
                  <Link className="btn btn-lg btn-default btn-index" to={prefixLink('/portfolio/')}>Read more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="panel panel-success" style={{backgroundImage: `url(${edu})`, height: '280px'}}>
                <div className="panel-body text-center">
                  <h2>Education</h2>
                  <Link className="btn btn-lg btn-default btn-index" to={prefixLink('/education/')}>Read more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="panel panel-success" style={{backgroundImage: `url(${about})`, height: '280px'}}>
                <div className="panel-body text-center">
                  <h2>About</h2>
                  <Link className="btn btn-lg btn-default btn-index" to={prefixLink('/about/')}>Read more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="panel panel-success" style={{backgroundImage: `url(${contact})`, height: '280px'}}>
                <div className="panel-body text-center">
                  <h2>Contact</h2>
                  <Link className="btn btn-lg btn-default btn-index" to={prefixLink('/contact/')}>Read more</Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
