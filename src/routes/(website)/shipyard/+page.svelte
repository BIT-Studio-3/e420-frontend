<script>
  import { onMount } from "svelte";
  // import { userDetails } from "$lib/components/tokenStore.js";

  let shipyards = undefined;
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
        "https://api.spacetraders.io/v2/systems/X1-NT89/waypoints/X1-NT89-A1/shipyard",
        options,
      );

      const json = await res.json();
      shipyards = json.data;
      // store error message if there's no shipyard at current location
      if (shipyards.error.code === 404) {
        shipyards = {
          msg: "No shipyard available at current waypoint",
        };
      }

      if (shipyards.transactions) {
        delete shipyards.transactions;
      }

      console.log(shipyards);
    } catch (error) {
      console.error("Error:", error);
    }
  });
</script>

<div id="shipyard-container">
<!-- add loading animation -->
  {#if shipyards.symbol}
  <div class="shipyard-box">
    <div id="shipyard-details">
      <p>Type: {shipyards.}</p>
      <p>Symbol: {shipyards.}</p>
      <p>X: {shipyards.}</p>
      <p>Y: {shipyards.}</p>
    </div>
    </div>
  {:else}
    <div id="error">
      <h1>{shipyards.msg}</h1>
    </div>
  {/if}
</div>
