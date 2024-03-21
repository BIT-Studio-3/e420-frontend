<script>
  //This will be he java script code for the fetching of the location
  import { onMount } from "svelte";
  import { token } from "$lib/components/tokenStore.js";

  let locationInfo = null;
  const locationSymbol = "X1-NT89-A1"; // headquaters symbol

  onMount(async () => {
    try {
      const response = await fetch(
        "https://api.spacetraders.io/v2/systems/X1-NT89/waypoints/X1-NT89-A1",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();
      locationInfo = responseData; // Assign fetched data to the 'data' variable
      console.log("Location information received successfully:");
    } catch (error) {
      console.error("Error:", error);
    }
    console.log(locationInfo);
  });
</script>

<body>
  <div id="location-info">
    <!-- this needs to be replaced with an actual loading animation -->
    <h1>Loading...</h1>
    <p>Fetching location information...</p>

    <!-- The {#if locationInfo} directive is a conditional rendering block (in Svelte) that checks 
    if the locationInfo variable is truthy (i.e., not null, undefined, or an empty string). 
    If the condition is true, Svelte will render the content inside the block. 
    If the condition is false, Svelte will skip over the block and not render its contents-->
    {#if locationInfo}
      <div id="location-details">
        <p>Type: {locationInfo.data.type}</p>
        <p>Symbol: {locationInfo.data.symbol}</p>
        <p>X: {locationInfo.data.x}</p>
        <p>Y: {locationInfo.data.y}</p>
        <!-- <p>System Symbol: {locationInfo.systemSymbol}</p>
          <p>Orbitals: {locationInfo.orbitals.map(orbital => orbital.symbol).join(', ')}</p> -->
      </div>
    {/if}
  </div>
</body>

<style>
</style>
