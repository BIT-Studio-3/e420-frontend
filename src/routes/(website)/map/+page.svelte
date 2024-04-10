<script>
  //This will be he java script code for the fetching of the location
  import { onMount } from "svelte";
  // import { userDetails } from "$lib/components/tokenStore.js";
 
  // setTimeout(async() => { 
  //   document.querySelector(".location-info").remove();
  // }, 3000);
 

  let locationInfo = null;
  const locationSymbol = "X1-HM65-A1"; // headquarters symbol
  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiSEpGSFVFRklKRklVIiwidmVyc2lvbiI6InYyLjIuMCIsInJlc2V0X2RhdGUiOiIyMDI0LTA0LTA5IiwiaWF0IjoxNzEyNzQyOTQ2LCJzdWIiOiJhZ2VudC10b2tlbiJ9.rtPWY0LJsrgkJlR4SHKcVw7UkDpz86kcB13Z7cx5Tl6vL8jyd-C2vJKjbKQZEgKgY6QuAkTq-lSWgx4HY78SaD5Pyx7QF9vYyrrbOxSq2iqG8b2E0t4KmC4m9nEWeDbqvMNla-f0bm96Y_oSGnAUYkM2cwm-1_PBVOoXlZiF01-7bsrB0ELOKa9MX77NvDv-d7iFVpWQF5A2PGatzVwNjZSLnWr20rJrg_Mvb3nno8AV_rp6DHVinpJkcQuJNdOe6fDu0shQoOw1sJcnM-KKm-sthYiX7LU3cEK-lhKn4MqeK__X81pDO3P0TYduVm4j62tConj66MM7MyicrOY_nw";
 

  onMount(async () => {
    try {
      const response = await fetch(
        "https://api.spacetraders.io/v2/systems/X1-HM65/waypoints/X1-HM65-A1",
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
      setTimeout(() => {
        document.querySelector(".location-details").style.display = "block";
        document.querySelector(".loading-message").remove();
      }, 300);
    } catch (error) {
      console.error("Error:", error);
    }
    console.log(locationInfo);
  });
</script>

<body>
  <div class="location-info">
    <!-- this needs to be replaced with an actual loading animation -->
    <div class="loading-message">
      <h1>Loading...</h1>
      <p>Fetching location information...</p>
    </div>

    <!-- The {#if locationInfo} directive is a conditional rendering block (in Svelte) that checks 
    if the locationInfo variable is truthy (i.e., not null, undefined, or an empty string). 
    If the condition is true, Svelte will render the content inside the block. 
    If the condition is false, Svelte will skip over the block and not render its contents-->
    {#if locationInfo}
      <div class= "location-details">
        <h2>{locationInfo.data.symbol}</h2>
        <div class="location-info-container">
          <div class="location-info-left">
            <p>Type:</p>
            <p>Position:</p>
            <p>Orbitals:</p>
          </div>
          <div class="location-info-right">
            <p>{locationInfo.data.type}</p>
            <p>{locationInfo.data.x}, {locationInfo.data.y}</p>
          </div>
        </div>
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
  background-color: #43455C;
  color: #3BBA9C;
  width: 30%;
  
  border-radius: 0 20px 20px 0 / 0 25% 25% 0;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
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
}

.location-info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.location-info-left,.location-info-right {
  display: flex;
  flex-direction: column;
} 

.location-info-left p,.location-info-right p {
  margin: 0;
}

#orbital-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.orbital-list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 5px;
}

.loading-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
