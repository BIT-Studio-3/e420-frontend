<!-- Page layout -->
<div class="main-container">
  <div class="container-1">
    <div class="dashboard">
      <h1>Dashbaord</h1>
      <div class="user">
        <ul>
          <li>Username: sophie.skyyye</li>
          <li>Credits:  116,000</li>
        </ul>
      </div>
      <div class="active-Loans">
        <h3>Active Loans</h3>
        <ul>
          <li>Type:             Starter Loan</li>
          <li>Due:              05/11/2024</li>
          <li>Repayment Amount: 280,000</li>
          <li>Status:           Current</li>
        </ul>
      </div>
      <div class="owned-Ships">
        <h3>Owned Ships</h3>
        <p>ship name</p>
      </div>
    </div>
  </div>
  <div class="container-2">
    <div class="planet">
        <p>planets </p>
    </div>
  </div>
</div>



<!-- <div class="dashbaord-right">
  <div class="user-info">
    <ul>
      <li>sophie.skyyye</li>
      <li>116,000</li>
    </ul>
  </div>
    <div class="loans-info">
      <ul>
        <li>Starter Loan</li>
        <li>05/11/2024</li>
        <li>280,000</li>
        <li>Current</li>
      </ul>
    </div>
  </div>
</div> -->

<style>
.main-container {
    display: flex;
    margin: 20px; 
  }

  .container-1 {
    width: 50%; 
    margin-right: 20px; 
  }

  .container-2{
    width: 50%;
  }

.dashboard{  
  text-decoration: none;
  font-family: "Orbitron", sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
}

.dashboard ul{
  display: inline-block;
  width: 50%;
  vertical-align: top;
}

.dashboard ul li{
  list-style: none;
}

/* .dashbaord-right{
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
} */
</style>


<!-- ---------------------------------------------------------------------------- -->
<!-- Old code -->
<!-- <script>
	import { DriverData } from './../../../.svelte-kit/ambient.d.ts';
  // import Location from "$lib/components/Location.svelte";

  let displayMe = "";
  function marketplace() {}
  function loan() {}
  function fleet() {
    if (displayMe == "") {
      displayMe = "fleet";
    } else {
      displayMe = "";
    }
  }
  function player_details() {
    if (displayMe == "") {
      displayMe = "details";
    } else {
      displayMe = "";
    }
  }
</script> -->
<!-- game front end  -->
<!-- <div class="game_background">
  <div class="game_container">
    <div class="left_game_screen">
      <div class="button_bar">
        <a href="/" class="button" on:click={marketplace}>Marketplace</a>
        when you click the 'marketplace' button-
        <a href="/" class="button" on:click={loan}>Login</a>
        <a href="/" class="button" on:click={fleet}>Fleet</a>
        <a href="/" class="button" on:click={player_details}>Location Details</a
        >
      </div>
        {#if displayMe == "details"} 
       <Location /> 
      {:else if displayMe == "fleet"} 

      {:else}
        <p>{x} is between 5 and 10</p> - 
      {/if} 
    </div>
    <div class="left_game_screen">
      <img src="..\map-of-planets.png" alt="placeHolderMap" />
    </div>
  </div>
</div> -->

<!-- <style>
  /* gives the spacing around the games front end */
  .game_background {
    padding: 75px;
  }
  /* CSS for the Game front end */
  .game_container {
    display: flex;
    gap: 10px;
    height: 600px;
  }
  .left_game_screen {
    flex: 50%;
    background-color: #43455C;
    /* padding: 5px; */
    border: 2.5px solid black;
  }
  .left_game_screen img {
    width: 100%;
    height: 100%;
  }
  /* CSS styling for the button_bar */
  .button {
    text-decoration: none;
    width: 150px;
    text-align: center;
    padding: 10px;
    gap: 2px;
    font-family: "Orbitron", sans-serif;
    font-size: 15.5px;
    
    background-color:#43455C;
    color:white;
  }
  .button::after{
    content: '';
    width: 0%;
    height: 2px;
    background: #3BBA9C;
    display: block;
    margin: auto;
    transition: 0.5s;
}

.button:hover::after {
    width: 100%;
}
  

  .button_bar {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
  }
</style> -->
