import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, image, url, author, date, source } = this.props
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge pill bg-secondary" style={{left: '90%', zIndex: 1}}>{source}</span>
                    <img src={image} className="card-img-top" alt="newsImage" />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className='text-muted'>By {author || 'Unknown'} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={url} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem