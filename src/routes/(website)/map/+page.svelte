<script>
  import { onMount } from "svelte";
  
  let locationInfo = null;

  // Hardcoded location info
  locationInfo = {
    data: {
      symbol: "X1-HM65-A1",
      type: "Planet",
      x: 1024,
      y: 768,
      orbitals: [
        { symbol: "Orbital-1" },
        { symbol: "Orbital-2" },
        { symbol: "Orbital-3" }
      ]
    }
  };

  /*
  // Uncomment and use this if you want to fetch data from the API
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
      locationInfo = responseData; // Assign fetched data to the 'locationInfo' variable
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
  */

  onMount(() => {
    setTimeout(() => {
      document.querySelector(".location-details").style.display = "block";
      document.querySelector(".loading-message").remove();
    }, 300);
  });
</script>

<body>
  <div class="location-info">
    <!-- Loading message -->
    <div class="loading-message">
      <h1>Loading...</h1>
      <p>Fetching location information...</p>
    </div>

    <!-- Render location info if available -->
    {#if locationInfo}
      <div class="location-details">
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


  .location-info {
    text-decoration: none;
    font-family: "Orbitron", sans-serif;
    color: white;
    padding: 20px;
    max-width: 450px;
    margin-left: 20px; /* Align to the left */
  }

  .location-details {
  display: none;
  padding: 10px;
  border-radius: 10px;
  max-width: 400px; 
  border: 2px solid white; 
  background-color: transparent; 
  box-sizing: border-box;
  
  /* Flexbox centering */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; /* Center text within the box */
}

.location-info-container {
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
  margin-bottom: 5px;
  flex-direction: row; 
}

.location-info-left,
.location-info-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  margin-right: 30px; 
}

  .location-info-left p,
  .location-info-right p,
  #orbital-list p {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    line-height: 1.5; /* Ensure consistent line height */
  }

  #orbital-list {
    margin-top: 10px;
  }

  #orbital-list h3 {
    margin-bottom: 5px;
  }

  .loading-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>