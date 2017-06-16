import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import logo from './image/logo.jpg'
import react from './image/react.png'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="panel" style={{backgroundImage: `url(${react})`,resizeMode: 'cover', height:'350px'}}></div>
          <div className="row">
            <div className="col-md-4">
                      <div className="panel panel-success">
                          <div className="panel-body">

                                      <div className="row">
                                          <div className="col-md-12 col-sm-6 col-xs-6">
                                              <img className="img-rounded" src={logo} alt="John"/>
                                          </div>
                                          <div className="col-md-12 col-sm-6 col-xs-6 pull-right">
                                              <h1>John Doe</h1>
                                              <p className="title">CEO & Founder, Example</p>
                                              <p>Harvard University</p>
                                              <div className="link">
                                                  <ul className="list-inline">
                                                      <li><Link to={prefixLink('/')}><i className="fa fa-2x fa-dribbble"/></Link></li>
                                                      <li><Link to={prefixLink('/')}><i className="fa fa-2x fa-twitter"/></Link></li>
                                                      <li><Link to={prefixLink('/')}><i className="fa fa-2x fa-linkedin"/></Link></li>
                                                      <li><Link to={prefixLink('/')}><i className="fa fa-2x fa-facebook"/></Link></li>
                                                  </ul>
                                              </div>
                                              <Link className="btn btn-lg btn-default" to={prefixLink('/education/')}>Education</Link>
                                          </div>
                                      </div>

                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="panel panel-success">
                          <div className="panel-body"><h2>Portfolio</h2></div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="panel panel-success">
                          <div className="panel-body"><h2>Education</h2></div>
                      </div>
                  </div>

          </div>
          <div className="row">

                  <div className="col-md-6">
                      <div className="panel panel-success">
                          <div className="panel-body"><h2>About</h2></div>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="panel panel-success">
                          <div className="panel-body">
                              <h2>Contact</h2>
                          </div>
                      </div>
                  </div>

          </div>
      </div>
    )
  }
}
