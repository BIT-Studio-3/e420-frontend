<!-- Navigation bar structure -->
<!-- seems to be an unorder list with more list items inside- Login  Buy  Loan  Controls 
each has an anchor tag along with an additinal div for its self. The Nav bar will be a horizontal line-->
<nav>
  <ul class="nav-words">
    <li>
      <a id="Login">
        <div>Login</div>
      </a>
    </li>
    <li>
      <a id="Buy">
        <div>Buy</div>
      </a>
    </li>
    <li>
      <a id="Loan">
        <div>Loan</div>
      </a>
    </li>
    <li>
      <a id="Controls">
        <div>Controls</div>
      </a>
    </li>
  </ul>
</nav>

<style>
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
  .nav-words :hover {
    /* Change background color on hover */
    background-color: #3BBA9C !important;
    /* Change text color on hover */
    color: black;
  }

  .nav-words {
    font-family: "Orbitron", sans-serif;
    color: white;
    font-size: 20px;
  }
</style>
