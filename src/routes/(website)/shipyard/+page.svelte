<script>
  import { onMount } from "svelte";
  // import { userDetails } from "$lib/components/tokenStore.js";

  let shipyard = undefined;
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiSERERERGSERIREhEIiwidmVyc2lvbiI6InYyLjIuMCIsInJlc2V0X2RhdGUiOiIyMDI0LTAzLTEwIiwiaWF0IjoxNzExMjU0MTEzLCJzdWIiOiJhZ2VudC10b2tlbiJ9.LWLSspQm1mHq3y7fuY092_XrbwROoZCtz9RnZemyTQDP2Dtc8EbS1BisAAPSuj9WznJT_40rD1JE3ECpYsSFkRKwvmwZog0d5q951lkhBFfsgICa3pVGt44cjz_ZiIesUTmuRM0rXzdsr521JSWn6iIT2Kdc_xFPPRWg21cmhXhEcK9APi_Ed2N47-XEZEQ8wbiTgaDHzFfo6w82-jY1FfO0t6l5IjrrgABU2ZTJqaXcx16GVcvvDUSYdhOUTkzfPugWCKYNovauY67BXdE3tIcyrg5X2gIy5gw4IkRQ0PSYqJeM4bSOZ6cmjZFZb__22Th1iQo0UggggH48QOVA1g";
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
        shipyard = jsonData.data;
        delete shipyard.transactions;
      }

      console.log(shipyard);
    } catch (error) {
      console.error("Error:", error);
    }
  });
</script>

<div id="shipyard-container">
  <!-- add loading animation -->
  {#if shipyard}
    {#if shipyard.symbol}
      <div class="shipyard-box">
        <div id="shipyard-details">
          <h1>Symbol: {shipyard.symbol}</h1>
          <h2>Ship Types:</h2>
          {#each shipyard.shipTypes as shipType}
            <p>- {shipType}</p>
          {/each}
          {#if shipyard.ships}
            <h3>Available: {shipyard.ships}</h3>
          {:else}
            <p>No ships in stock at this time</p>
          {/if}
          <p>Mod Fee: {shipyard.modificationsFee}</p>
        </div>
      </div>
    {:else}
      <div id="error">
        <h1>{shipyard.msg}</h1>
      </div>
    {/if}
  {/if}
</div>
