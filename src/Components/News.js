import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        pageSize: 9,
        country: 'in',
        category: 'general'
    }

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalPages: null,
            totalResults: 0
        }
        document.title = `News Daily - ${this.props.category}`
    }

    async componentDidMount() {
        this.updateNews()
    }

    async updateNews(page = 0) {
        const newPage = this.state.page + page
        console.log('1f', this.state.page)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7959be7989e14c15aa4c7087dce3b37c&page=${newPage}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            loading: false,
            articles: parsedData.articles,
            page: newPage,
            totalResults: parsedData.totalResults
        })
        console.log('1', this.state.page)
    }

    async addNews(page = 0) {
        const newPage = this.state.page + page
        console.log('1f', this.state.page)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7959be7989e14c15aa4c7087dce3b37c&page=${newPage}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            loading: false,
            articles: this.state.articles.concat(parsedData.articles),
            page: newPage,
            totalResults: parsedData.totalResults
        })
        console.log('1', this.state.page)
    }

    // handlePrevClick = async () => {
    //     this.updateNews(-1)
    // }

    handleNextClick = async () => {
        this.addNews(1)
    }

    render() {
        return (
            <>
                <h1 className='text-center my-5'>News Daily - Top {this.props.category} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.handleNextClick}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                let { title, description, urlToImage, url, author, publishedAt, source } = element
                                return <div className="col-md-4" key={url}>
                                    <NewsItem title={title || ''} description={description || ''} image={urlToImage || 'https://cdn.ndtv.com/common/images/ogndtv.png'} url={url} author={author} date={publishedAt} source={source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container my-3 d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button className="btn btn-dark" onClick={this.handlePrevClick}>{this.state.page}</button>
                    <button disabled={this.state.page === this.state.totalPages} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News