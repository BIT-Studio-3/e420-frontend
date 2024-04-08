<script>
  //This will be he java script code for the fetching of the location
  import { onMount } from "svelte";
  // import { userDetails } from "$lib/components/tokenStore.js";

  let locationInfo = null;
  const locationSymbol = "X1-KA58-A1"; // headquarters symbol
  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiSEFIRkZKSkNIIiwidmVyc2lvbiI6InYyLjIuMCIsInJlc2V0X2RhdGUiOiIyMDI0LTAzLTI0IiwiaWF0IjoxNzExNjY1ODI0LCJzdWIiOiJhZ2VudC10b2tlbiJ9.jXErwbZI8Vk_pEyt6OGS3kQrvYvOn74dIvuFYF4OM8PhJBQpwXehCI6DFy-dgeFK-oc7-AikybIeh5RxensjdlxfueAWzb9PoE8mVOIW3QiAINMyI_v34uXg9CSfg1M24hIBX5LYJgAhL72xLyFT_vEWDe8we3-OJib8PcP6s03fs3cjwsGsDcrpTYoUplPb_QMHkDapCz0B0fJgrb3qWse_nqY16XshC3JuBgvYWfDqudtBkuwRZh1sLGkI4HS6LaW5g-p2_0k3Xrnq4iRz8Sh2jSZceRZk99P_uTxQLXNMUDI1tRgK7gfVoT4zRy0Q1YwJItKi-p7z3AC8fa-brQ";
 

  onMount(async () => {
    try {
      const response = await fetch(
        "https://api.spacetraders.io/v2/systems/X1-KA58/waypoints/X1-KA58-A1",
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
      <div class= "location-details">
        <p>Type: {locationInfo.data.type}</p>
        <p>Symbol: {locationInfo.data.symbol}</p>
        <p>X: {locationInfo.data.x}</p>
        <p>Y: {locationInfo.data.y}</p>
        <!-- <p>System Symbol: {locationInfo.systemSymbol}</p>-->
        <div id="orbital-list">
          {#each locationInfo.data.orbitals as orbital (orbital.symbol)}
            <p>{orbital.symbol}</p>
          {/each}
        </div>
      </div>
    {/if} 
  </div>
</body>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Poppins:ital@0;1&display=swap');

  .orbitron-location-details {
  font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  }

  .poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.poppins-regular-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: italic;
}
.location-details {
  
    width: 30%;
    background-color: #43455C;
    color: #3BBA9C;
    font-family: "Orbitron", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

</style>
