import './App.css';
import Header from './Components/Header';
import Movie from './Components/Movie';
import Movies from './Movies.json';
function App() {
  return (
   <div className='App'>
      <Header/>
      <div className='main'>
      {
         Movies.map((element) => {
            return(
            <Movie 
            title ={element.Title}
            year = {element.Year}
            img = {element.Poster}

            />
            )
         })
      }



  
  

      </div>
   </div>
  
  );
}


export default App;
