import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-3 mx-3'>
        <div className="card">
        <span className="position-absolute top- translate-middle badge rounded-pill bg-danger" 
        style={{left: '90%', zIndex:"1"}}> {source}</span>
            <img src={!imageUrl?"https://c.biztoc.com/p/10245102320fdea1/og.webp":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem