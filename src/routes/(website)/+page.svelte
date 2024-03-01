<script>

  
import Location from "$lib/components/Location.svelte";


  let displayMe = "";
  function marketplace() {}
  function loan() {}
  function fleet() {
    if(displayMe == ""){
        displayMe = "fleet";
    }
    else{
        displayMe = "";
    }
  }
  function player_details() {
    if(displayMe == ""){
        displayMe = "details";
    }
    else{
        displayMe = "";
    }
  }
</script>






<!-- game front end  -->
<div class="game_background">
  <div class="game_container">
    <div class="left_game_screen">
      <div class="button_bar">
        <a href="/" class="button" on:click={marketplace}>marketplace</a> <!-- when you click the 'marketplace' button-->
        <a href="/" class="button" on:click={loan}>Login</a>
        <a href="/" class="button" on:click={fleet}>fleet</a>
        <a href="/" class="button" on:click={player_details}>location details</a>
      </div>
      {#if displayMe == "details"}
        <Location />
        <!-- {:else if displayMe == "fleet"} -->
       
      <!-- {:else}
        <p>{x} is between 5 and 10</p> - -->
      {/if}
    </div>
    <div class="left_game_screen">
      <img src="..\map-of-planets.png" alt="placeHolderMap" />
      </div>
    </div>
  </div>

<style>
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
    background-color: grey;
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
    font-size: 15.5px;
    border: 2.5px solid black;
    border-radius: 2.5px;
    background-color: darkgray;
    color: black;
  }

  .button_bar {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
  }
</style>

