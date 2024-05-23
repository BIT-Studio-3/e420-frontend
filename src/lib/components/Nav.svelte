   <!-- <nav>
    <a id="Login" class="nav-words">
      <div>Login</div>
    </a>
    <a id="Buy" class="nav-words">
      <div>Buy</div>
    </a>
    <a id="Loan" class="nav-words">
      <div>Loan</div>
    </a>
    <a id="Controls" class="nav-words">
      <div>Controls</div>
    </a>
  </nav>

<style>
    nav {
      display: flex;
      justify-content: center;
      overflow: hidden;
      padding: 20px 0;
      gap: 20px;
    }

    nav a {
      text-align: center;
      padding: 10px;
      position: relative;
      transition: background-color 0.3s ease;
    }

    nav a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 0;
      height: 2px;
      background-color: #3BBA9C;
      transition: width 0.3s ease;
    }

    nav a:hover::after {
      width: 100%;
    }

    .nav-words {
      font-family: "Orbitron", sans-serif;
      color: white;
      font-size: 18px;
    }
  </style> -->

<!-- Navigation bar structure -->
<!-- seems to be an unorder list with more list items inside- Login  Buy  Loan  Controls 
each has an anchor tag along with an additinal div for its self. The Nav bar will be a horizontal line-->
<nav>  
  <div class="links">
    <ul>
        <li><a href="">Login</a></li>
        <li><a href="">Buy</a></li>
        <li><a href="">Loan</a></li>
        <li><a href="">Contracts</a></li>
    </ul>
  </div>
</nav>


<style>
  nav{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
    width: 100%;
    padding: 80px;
}

.links{
    flex: 1;
    text-align: right;
}

.links ul li{
    list-style: none;
    display: inline-block;
    padding: 8px 12px;
    position: relative;
}

.links ul li a{
    text-decoration: none;
    font-family: "Orbitron", sans-serif;
    color: white;
    font-size: 20px;
}

.links ul li::after{
    content: '';
    width: 0%;
    height: 2px;
    background: #3BBA9C;
    display: block;
    margin: auto;
    transition: 0.5s;
}

.links ul li:hover::after {
    width: 100%;
}
</style>



<!-- <style>
  nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
    width: 100%;
    padding: 80px;
  }
  nav a {
    /* Center-align text within anchor tags */
    text-align: center;
  }

  /* Styling for the unordered list within the navigation bar */
  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Styling for the list items within the unordered list */
  nav ul li a div,
  nav > div {
    padding: 15px 25px;
  }
 
  .links {
    font-family: "Orbitron", sans-serif;
    color: white;
    font-size: 20px;
  } 

 nav a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 0;
      height: 2px;
      background-color: #3BBA9C;
      transition: width 0.3s ease;
    }

    nav a:hover::after {
      width: 100%;
    }
  /* .nav-words :hover {
    Change background color on hover 
    background-color: #3BBA9C !important;
    border-radius: 9%;
    Change text color on hover 
    color: black;
  }  */
</style> -->
