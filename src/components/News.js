import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps = {
    country : "in",
    pageSize : 8,
    category : "sports"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string
  }
  
  constructor(props){
    super(props);
    this.state ={
      articles : [],
      loading : true,
      page : 1,
      totalResults : 0
    }
    document.title = this.props.category;
  }

  
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c3b366334f9437c9ea503d4410c4cef&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({articles : parseddata.articles,totalResults : parseddata.totalResults,loading : false});
  }

   fetchMoreData = async() => {
      this.setState({page : this.state.page+1});
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c3b366334f9437c9ea503d4410c4cef&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
          articles : this.state.articles.concat(parseddata.articles),
        });
  };

  render() {
    return (
      <div>
      <h1 className='text-center mb-4'>Taaza Khabar from {this.props.category}</h1>
      {this.state.loading&&<Spinner/>}
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={<Spinner/>}
        >
      <div className='row container my-3 mx - 4'>
       {this.state.articles.map((element)=>{
           return(
            <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,48):""} description={element.description?element.description.slice(0,90):""}
             imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
            </div>
           )
        })}
       </div>
       </InfiniteScroll>
      </div>
    )
  }
}

export default News



 {/* <div className="container d-flex justify-content-between">
        <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled = {Math.ceil(this.state.totalResults/this.props.pageSize)<=this.state.page} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
  
  // handleNextClick = async()=>{
  //   if(Math.ceil(this.state.totalResults/this.props.pageSize)>this.state.page){
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c3b366334f9437c9ea503d4410c4cef&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading : true})
  //   let data = await fetch(url);
  //   let parseddata = await data.json();
  //   this.setState({
  //     articles : parseddata.articles,
  //     page : this.state.page+1,
  //     loading : false
  //   });
  //  }
  // }

  // handlePrevClick = async()=>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c3b366334f9437c9ea503d4410c4cef&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading : true})
  //   let data = await fetch(url);
  //   let parseddata = await data.json();
  //   this.setState({
  //     articles : parseddata.articles,
  //     page : this.state.page-1,
  //     loading : false
  //   });
  // }