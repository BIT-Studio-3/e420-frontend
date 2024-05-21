<script>
  // Nav.svelte doesn't need any JavaScript in this example
</script>

<nav>
  <ul class="nav-words">
    <li>
      <a href="/login" id="Login">
        <div>Login</div>
      </a>
    </li>
    <li>
      <a href="/" id="Home">
        <div>Home</div>
      </a>
    </li>
    <li>
      <a href="/map" id="Map">
        <div>Map</div>
      </a>
    </li>
    <li>
      <a href="/loan" id="Loan">
        <!--  <div>Loan</div> -->
      </a>
    </li>
    <li>
      <a href="/contracts" id="Contracts">
        <div>Contracts</div>
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
    padding: 20px; /* Adjust padding for consistency */
  }

  nav a {
    text-align: center;
    color: white;
    text-decoration: none;
  }

  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav ul li a div,
  nav > div {
    padding: 15px 25px;
  }

  .nav-words li:hover {
    background-color: rgba(250, 250, 250, 0.3) !important;
    color: black;
    border-radius: 40%;
    padding: 1px;
  }

  .nav-words {
    color: white;
    font-size: 15px;
  }
</style>
