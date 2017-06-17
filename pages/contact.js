import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet'
import contact from 'pages/image/contact.jpg'
import { config } from 'config'
L.Icon.Default.imagePath = '/image/'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 38.889931,
      lng: -77.009003,
      zoom: 8
    };
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <div className="container">
        <div className="panel" style={{backgroundImage: `url(${contact})`,resizeMode: 'cover', height:'350px'}}>
          <h1 className="head-page">Contact page here</h1>
          <p className="head-page">Welcome to contact</p>
          <Link className="btn btn-lg btn-default" to={prefixLink('/')}>Go back to the homepage</Link>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-success">
              <div className="panel-heading">Map with marker</div>
              <div className="panel-body panel-contact-chart map-padding-zero">
                <Map center={position}
                  zoom={this.state.zoom}
                >
                  <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                  <Marker
                    position={position}
                  >
                    <Popup>
                      <span>Famous city</span>
                    </Popup>
                  </Marker>
                </Map>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="panel panel-success">
              <div className="panel-body">
                <p>Fan? Drop a note.</p>
                <p><span className="glyphicon glyphicon-map-marker"/> Chicago, US</p>
                <p><span className="glyphicon glyphicon-phone"/> Phone: +00 1515151515</p>
                <p><span className="glyphicon glyphicon-envelope"/> Email: mail@mail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="panel panel-success">
              <div className="panel-body">
                <h3 className="text-center">Contact</h3>
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <input className="form-control" id="name" name="name" placeholder="Name" type="text"/>
                  </div>
                  <div className="col-sm-6 form-group">
                    <input className="form-control" id="email" name="email" placeholder="Email" type="email"/>
                  </div>
                </div>
                <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"/><br/>
                <div className="row">
                  <div className="col-sm-12 form-group">
                    <a className="btn btn-lg btn-default pull-right" type="submit">Send</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
