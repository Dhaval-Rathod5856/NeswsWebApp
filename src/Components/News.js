import React, { useEffect,useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

//----Class Component
// export class News extends Component {
//   static defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general',
//   }

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
//   }

//   capitalizeFirstletter = (string) =>{
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
//   constructor(props){
//     super(props);
//     this.state = {
//       articles:[],
//       loading:false,
//       page:1,
//       totalResults: 0
//     }
//     document.title = `${this.capitalizeFirstletter(this.props.category)} - NewsMonkey`;
//   }

//   async UpdateNews(){
//     this.props.setProgress(10);
//     const Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true});
//     let data = await fetch(Url);
//     this.props.setProgress(30);
//     let ParsedData = await data.json();
//     this.props.setProgress(70);
//     console.log(ParsedData);
//     this.setState({
//       articles: ParsedData.articles, 
//       totalResults:ParsedData.totalResults,
//       loading:false})
//       this.props.setProgress(100);
//   }
//   async componentDidMount(){
//     this.UpdateNews();
//   }
  
//   fatchMoreData = async () =>{
//     const Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     this.setState({page: this.state.page + 1});
//     let data = await fetch(Url);
//     let ParsedData = await data.json();
//     console.log(ParsedData);
//     this.setState({
//       articles: this.state.articles.concat(ParsedData.articles), 
//       totalResults:ParsedData.totalResults,
//      })
//   }
//   render() {
//     return (
//      <>
//         <h2 className="text-center" style={{margin: '35px 0px',marginTop: '90px'}}>NewsMonkey - Top {this.capitalizeFirstletter(this.props.category)} Headlines</h2>
//         {this.state.loading && <Spinner/>}
//         <InfiniteScroll 
//         dataLength={this.state.articles.length}
//         next={this.fatchMoreData}
//         hasMore={this.state.articles.length !== this.state.totalResults}
//         loader={<Spinner/>}>
//          <div className="container">
//             <div className="row">
//               {this.state.articles.map((element)=>{
//               return <div className="col-md-4" key={element.url}>
//                         <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} 
//                         ImgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
//                         source={element.source.name}/>
//                       </div>
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>
//       </>
//     )
//   }
// }

// export default News


//----Function Component
const News =(props)=> {
 
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                              <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} 
                             ImgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
                              source={element.source.name}/>
                             </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News