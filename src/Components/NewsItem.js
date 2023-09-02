import React from 'react'

const NewsItem = (props) => {
        let { title, description, image, url, author, date, source } = props
        return (
            <div className='my-3'>
                <div className="card" style={{height: '400px'}}>
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0}}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={image} className="card-img-top" alt="newsImage" style={{height: '200px', objectFit:'contain'}}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{
                            textOverflow: 'ellipsis',
                            height: '25px',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            display: 'block'
                        }}>
                            {title}
                        </h5>
                        <p className="card-text" style={{
                            textOverflow: 'ellipsis',
                            height: '18px',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                        }}>{description}</p>
                        <p className="card-text"><small className='text-muted'>By {author || 'Unknown'} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={url} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
