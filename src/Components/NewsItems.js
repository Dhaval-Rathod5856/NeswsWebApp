import React from 'react'

//----Class Component
// export  class NewsItems extends Component {
//   render() {
//     let {title, description,ImgUrl,newsUrl,source,date,author} = this.props;
//     return (
//       <div className="my-3">
//        <div className="card">
//             <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
//               <span className="badge rounded-pill bg-danger">{source} </span>
//             </div>
//           <img src={!ImgUrl?"https://www.livemint.com/lm-img/img/2023/10/28/1600x900/This-was-PM-Modi-s-third-visit-to-Rajasthan-in-the_1696741422317_1698479564595.jpg":ImgUrl}  className="card-img-top" alt="..."/>
//           <div  className="card-body">
//             <h5  className="card-title">{title}...</h5>
//             <p  className="card-text">{description}...</p>
//             <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
//             <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
//           </div>
//         </div>

//       </div>
//     )
//   }
// }

//----Function Component
const NewsItems =(props)=> {
    let {title, description,ImgUrl,newsUrl,source,date,author} = props;
    return (
      <div className="my-3">
       <div className="card">
            <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
              <span className="badge rounded-pill bg-danger">{source} </span>
            </div>
          <img src={!ImgUrl?"https://www.livemint.com/lm-img/img/2023/10/28/1600x900/This-was-PM-Modi-s-third-visit-to-Rajasthan-in-the_1696741422317_1698479564595.jpg":ImgUrl}  className="card-img-top" alt="..."/>
          <div  className="card-body">
            <h5  className="card-title">{title}...</h5>
            <p  className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>

      </div>
    )
}

export default NewsItems