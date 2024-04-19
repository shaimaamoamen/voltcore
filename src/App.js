
import React,{Component} from "react";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import Index from './Components/Index/Index.js'
import Page from './Components/Page/Index.js';
class App extends Component{
  render(){
    return( 
<div className="App">
    <BrowserRouter>   
  
      <Routes>  
          <Route exact path="/" element={<Index/>}/>
          <Route path="/call1" element={<Page/>}/>
          <Route path="/call2" element={<Page/>}/>
          <Route path="/call3" element={<Page/>}/>
          <Route path="/call4" element={<Page/>}/>
          <Route path="/call5" element={<Page/>}/>
          <Route path="/call6" element={<Page/>}/>
          <Route path="/call7" element={<Page/>}/>
          <Route path="/contact1" element={<Page/>}/>
          <Route path="/contact2" element={<Page/>}/>
          <Route path="/contact3" element={<Page/>}/>
          <Route path="/contact4" element={<Page/>}/>
          <Route path="/contact5" element={<Page/>}/>
          <Route path="/contact6" element={<Page/>}/>
          <Route path="/contact7" element={<Page/>}/>
          <Route path="/contact8" element={<Page/>}/>
      </Routes>  
    
     </BrowserRouter> 
      </div>
    )
  }
}

export default App;
