<script>
  import { onMount } from "svelte";

  let shipyard = null;
  const token =
    "";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  onMount(async () => {
    try {
      // fetch shipyard from current waypoint
      const res = await fetch(
        "https://api.spacetraders.io/v2/systems/X1-NT89/waypoints/X1-NT89-A2/shipyard",
        options,
      );

      const jsonData = await res.json();

      // store error message if there's no shipyard at current location
      if (jsonData.error) {
        shipyard = {
          msg: "No shipyard available at current waypoint",
        };
      } else {
        // If successfully retrieved a shipyard, store the data object
        shipyard = jsonData.data;
        delete shipyard.transactions; // removing transactions as it's just too much unnecessary data
      }

      //console.log(shipyard); // uncomment to test shipyard fetch
    } catch (error) {
      console.error("Error:", error);
    }
  });
</script>

<div id="shipyard-container">
  <!-- add loading animation -->
  <!-- if the shipyard var is filled, do the following HTML -->
  {#if shipyard}
  <!-- If shipyard var has actual data and no error object, display the data -->
    {#if shipyard.symbol}
      <div class="shipyard-box">
        <div id="shipyard-details">
          <h1>Symbol: {shipyard.symbol}</h1>
          <h2>Ship Types:</h2>
          {#each shipyard.shipTypes as shipType}
            <p>- {shipType.type}</p>
          {/each}
          <!-- not all shipyards have ships available, so -->
          {#if shipyard.ships} 
            <h3>Available: {shipyard.ships}</h3>
          {:else}
            <p>No ships in stock at this time</p>
          {/if}
          <p>Mod Fee: {shipyard.modificationsFee}</p>
        </div>
      </div>
    {:else}
    <!-- display the error message if the shipyard var doesn't have valid data -->
      <div id="error">
        <h1>{shipyard.msg}</h1>
      </div>
    {/if}
  {/if}
</div>
