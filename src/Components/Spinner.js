import React from 'react'
import loading from './loading.gif'

//----Class Component
// export class Spinner extends Component {
//   render() {
//     return (
//       <div className="text-center">
//         <img className="my-3" src={loading} alt="loading" width="50px" height="50px"/>
//       </div>
//     )
//   }
// }


//----Funaction Component
const Spinner = ()=>{
    return (
      <div className="text-center">
        <img className="my-3" src={loading} alt="loading" width="50px" height="50px"/>
      </div>
    )
}

export default Spinner
