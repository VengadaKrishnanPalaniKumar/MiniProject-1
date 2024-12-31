{/*import React from "react";
import Navbar from "./Navbar";
function Home(){
    return(
        <diV className="home-container">
            <h2></h2>
         <Navbar />
        </diV>
    );
}
export default Home
*/}
  // src/pages/Home.js
import React from 'react';
import './Home.css'; // Import your CSS for styling

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to the Book Shop</h2>
      <p>Browse our collection of books and find your next read!</p>
    </div>
  );
};

export default Home;
