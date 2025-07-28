import React, { Component } from 'react';
import './App.css';

class App extends Component {
  menuClick() {
    const navlist = document.getElementById("nav-list");
    //navlist.style.display = "block";
    navlist.classList.toggle("active");
  }

  render() {
    return (
      <>
        <header>
          <nav>
            <div className="logo">My Website</div>
            <ul id = "nav-list">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
            <div className='menu' onClick={()=>this.menuClick()}>&#9776;</div>
          </nav>
        </header>
        <section>
          <h1>Welcome to my Resposive Webpage</h1>
          <p>This is a simple example of a responsive webpage using React.</p>
          <p>Resize the window to see how it adapts!</p>
          <p>Enjoy exploring the features!</p>
          <p>Feel free to modify the code and make it your own!</p>
          <p>Happy coding!</p>
          <p>Check out the source code on GitHub!</p>
          <p>Thank you for visiting!</p>
          <p>Have a great day!</p>
          <p>Stay tuned for more updates!</p>
          <p>Contact us for any inquiries!</p>
          <p>Follow us on social media!</p>
          <p>Subscribe to our newsletter for the latest news!</p>
          <p>Join our community for discussions and support!</p>
          <p>Explore our other projects!</p>
          <p>Learn more about our mission and values!</p>
          <p>We appreciate your feedback!</p>
        </section>
        <footer>©Copyright 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
