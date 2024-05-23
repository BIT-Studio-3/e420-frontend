<div class="dashbaord">
    <h1>Dashbaord</h1>
    <div class="user">
      <ul>
        <li>Username:</li>
        <li>Credits:</li>
      </ul>
    </div>
    <div class="active-Loans">
      <h3>Active Loans</h3>
      <ul>
        <li>Type:</li>
        <li>Due:</li>
        <li>Repayment Amount:</li>
        <li>Status:</li>
      </ul>
    </div>
    <div class="owned-Ships">
      <h3>Owned Ships</h3>
      <p>ship name</p>
    </div>
</div>

<style>
.dashbaord{  
  text-decoration: none;
  font-family: "Orbitron", sans-serif;
  color: white;
}

.dashbaord ul li{
  list-style: none;
}
</style>










<!-- <script>
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
