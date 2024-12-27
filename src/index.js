import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';
//import App from './App';
 import reportWebVitals from './reportWebVitals';
 
const dataBook=[
  {
    name:"The Chelembra bank robbery",
    author:"Anirban Bhattacharyya ",
    publicateddate:"22.07.2022",
    price:"240",
    photoName:"Image1",
    stock:"10",
  },
  {
    name:"How to talk to anyone",
    author:"leil Lowndes",
    publicateddate:"24.10.2003",
    price:"345",
    photoName:"Image2",
    stock:"8",
  },
  {
    name:"The power",
    author:"Rhonda Byrne",
    publicateddate:"27.09.2010",
    price:"565",
    photoName:"Image3",
    stock:"6",
  },
  {
    name:"Harry potter",
    author:"J.k Rowling",
    publicateddate:"26.07.1997",
    price:"455",
    photoName:"Photo",
    stock:"5",
  },
  {
    name:"The Psychology of money",
    author:"Morgan house",
    publicateddate:"08.09.2020",
    price:"247",
    photoName:"Photo2",
    stock:"3",
  },
  {
    name:"The power of your subconcious mind",
    author:"Joesph Murphy",
    publicateddate:"26.09.1963",
    price:"675",
    photoName:"Photo3",
    stock:"0",
  }
];

function App(){
  return(
    <div className="container">
      <Home />
      <Header />
      <Menu />
      <Books />
      <Footer />
    </div>
  );}

function Header(){
  const style={};
  return( 
    <header className="header">
    <h1 style={style}>Book Shop</h1>
    </header>
  );
}
function Menu(){
  return(
    <main className="menu">
      <h2 style={{color:"red"}}>BOOKS</h2>
      <p>Start read and read lots of book and place is very peaceful.</p>
      <ul className="book">{dataBook.map((book)=>(<book name={book.name}/>))}</ul>
    </main>
  )
}
{/*function Book(Book){
  return(
    <div>
     <img src={Book.photoName} alt={Book.name}/>
     <div>
    <h3>{Book.name}</h3>
    <p>{Book.author}</p>
    </div>
    </div>
  );
}
*/}

function Books(){
  return(
    <div>
    <img src='books/Image1.png' alt='Bookk' />
    <img src='books/Image2.png' alt='book' />
    <img src='books/Image3.png' alt='book' />
    <img src='books/Photo.png' alt='book' />
    <img src='books/Photo2.png' alt='book' />
    <img src='books/Photo3.png' alt='book' />
    </div>
  )
}

function Footer(){
  const hour=new Date().getHours();
  const openHour=8;
  console.log(openHour);
  const closeHour=24;
  console.log(closeHour);
  const isOpen= hour >= openHour && hour <= closeHour;
  console.log(isOpen);
 //if (hour=>openhour && hour<=closedhour) alertWe are close");
   // else alert("sorry");
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
