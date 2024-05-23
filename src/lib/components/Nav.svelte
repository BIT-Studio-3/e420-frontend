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



<!-- Old styling  -->
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
 
  .nav-words {
    font-family: "Orbitron", sans-serif;
    color: white;
    font-size: 20px;
  } 

  .nav-words :hover {
    Change background color on hover 
    background-color: #3BBA9C !important;
    border-radius: 9%;
    Change text color on hover 
    color: black;
  } 
</style> -->
