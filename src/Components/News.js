import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    async function updateNews(p = 0) {
        props.setProgress(10)
        const newPage = page + p
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${newPage}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(40)
        let parsedData = await data.json()
        props.setProgress(70)
        setLoading(false)
        setArticles(parsedData.articles)
        setPage(newPage)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100)
    }

    async function addNews(p = 0) {
        const newPage = page + p
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${newPage}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        setPage(newPage)
        setTotalResults(parsedData.totalResults)
    }

    useEffect(() => {
        document.title = `News Daily - ${props.category}`
        updateNews()
        //eslint-disable-next-line
    }, [])


    // handlePrevClick = async () => {
    //     updateNews(-1)
    // }

    async function handleNextClick() {
        addNews(1);
    }

    return (
        <>
            <h1 className='text-center' style={{margin: '90px auto 30px'}}>News Daily - Top {props.category} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={handleNextClick}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            let { title, description, urlToImage, url, author, publishedAt, source } = element
                            return <div className="col-md-4" key={url}>
                                <NewsItem title={title || ''} description={description || ''} image={urlToImage || 'https://cdn.ndtv.com/common/images/ogndtv.png'} url={url} author={author} date={publishedAt} source={source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    pageSize: 9,
    country: 'in',
    category: 'general'
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}

export default News
