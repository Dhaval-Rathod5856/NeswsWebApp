
import './App.css';
import React ,{ useState }from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)

  
  return (
      <>
      <Navbar/>
      <LoadingBar
      color="#f11946"
      progress={progress}
      height={3}/>
      <div>
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress}  pageSize={pageSize} key="general" country = 'in' category='general'/>} />
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress}  pageSize={pageSize} key="business" country = 'in' category='business'/>} />
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress}  pageSize={pageSize} key="entertainment" country = 'in' category='entertainment'/>} />
          <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress}  pageSize={pageSize} key="abcd" country = 'in' category='general'/>} />
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress}  pageSize={pageSize} key="health" country = 'in' category='health'/>} />
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress}  pageSize={pageSize} key="science" country = 'in' category='science'/>} />
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress}  pageSize={pageSize} key="sports" country = 'in' category='sports'/>} />
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress}  pageSize={pageSize} key="technology" country = 'in' category='technology'/>}/>          
       </Routes>
      </div>
      </>
    )
}
export default App;
