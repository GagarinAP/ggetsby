import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'

export default class Template extends React.Component {
  state = {
    navCollapsed: true,
    date: new Date()
  }
  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed })
  }
  static propTypes = {
    children: PropTypes.any
  }
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
          <div className="container">
              <nav className="navbar navbar-default">
                  <div className="container-fluid">
                      <div className="navbar-header">
                          <button
                              aria-expanded='false'
                              className='navbar-toggle collapsed'
                              onClick={this._onToggleNav}
                              type='button'
                          >
                              <span className='sr-only'>Toggle navigation</span>
                              <span className='icon-bar'/>
                              <span className='icon-bar'/>
                              <span className='icon-bar'/>
                          </button>
                          <Link className="navbar-brand" to={prefixLink('/')}>GGetsby</Link>
                      </div>
                      <div
                          className={(this.state.navCollapsed ? 'collapse' : '') + ' navbar-collapse'}
                      >
                          <ul className="nav navbar-nav navbar-right">
                              <li><Link to={prefixLink('/education/')}>Education</Link></li>
                              <li><Link to={prefixLink('/portfolio/')}>Portfolio</Link></li>
                              <li><Link to={prefixLink('/about/')}>About</Link></li>
                              <li><Link to={prefixLink('/contact/')}>Contact</Link></li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </div>
          {this.props.children}
          <footer className="footer">
              <div className="container">
                  <p className="text-muted text-center">Footer content here &copy; {this.state.date.getFullYear()}</p>
              </div>
          </footer>
      </div>
    )
  }
}
