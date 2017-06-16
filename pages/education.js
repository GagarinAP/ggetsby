import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import edu from 'pages/image/edu.jpg'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="panel" style={{backgroundImage: `url(${edu})`,resizeMode: 'cover', height:'350px'}}>
              <h1>
                  Hi people
              </h1>
              <p>Welcome to page 2</p>
              <Link to={prefixLink('/')}>Go back to the homepage</Link>
          </div>
          <div className="row">
              <div className="col-md-12">
                  <div className="panel-group">
                      <div className="panel panel-success">
                          <div className="panel-heading"><strong>2016:</strong>Panel with panel-success class</div>
                          <div className="panel-body">Panel Content</div>
                      </div>
                      <div className="panel panel-success">
                          <div className="panel-heading"><strong>2015:</strong>Panel with panel-success class</div>
                          <div className="panel-body">Panel Content</div>
                      </div>
                      <div className="panel panel-success">
                          <div className="panel-heading"><strong>2013:</strong>Panel with panel-success class</div>
                          <div className="panel-body">Panel Content</div>
                      </div>
                      <div className="panel panel-success">
                          <div className="panel-heading"><strong>2011:</strong>Panel with panel-success class</div>
                          <div className="panel-body">Panel Content</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
