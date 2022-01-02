import { Pagination } from '@material-ui/lab';
import './App.css';
import Cart from './card/Cart';
import Movies from './Movies';

function App() {
  return (
      <div className='test6'>  
        <div className="App">
            <h1><span className='test7'>Top Movies - 2021 </span> </h1>
        </div>    
          <div className="test2">
            {Movies.map((e)=>{
              return (
              <Cart imgSrc={e.imgSrc} name={e.name}/>
            );})}
        </div>
        <Pagination/>
       </div>  
  );
}

export default App;
