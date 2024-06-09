<!-- Planet images -->
<script>
  import { onMount } from 'svelte';

  let bluePlanet = [];
  const BASE_URL = `https://api.unsplash.com/photos`;
  const ACCESS_KEY = '3nIPvkJHkQsAzWJu8cdbM95fz8fYLCcsxJMqBF-t_oo'; 
  const PHOTO_ID = 'prMn9KINLtI'; // Use the correct photo ID from the given URL

  onMount(async () => {
      try {
          const response = await fetch(`${BASE_URL}/${PHOTO_ID}?client_id=${ACCESS_KEY}`);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          bluePlanet = [data]; // Assuming you want to display only one image
      } catch (error) {
          console.error('Error fetching image:', error);
      }
  });
</script>

<!-- Page layout -->
<div class="main-container">
  <div class="container-1">
    <div class="dashboard">
      <h1>Dashboard</h1>
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
    <div class="planet-Location">
        <h1>You are here</h1>
          {#if bluePlanet.length > 0}
            <div>
              <img src={bluePlanet[0].urls.regular} alt={bluePlanet[0].alt_description} />
            </div>
          {/if}
           <p class="planetInfo">
            Icy planet with flesh eating bacteria aproach with the <br>
            appropriate safety gear
           </p>
    </div>
  </div>
</div>


<style>
.main-container {
  display: flex;
  margin: 20px; 
  text-decoration: none;
  font-family: "Orbitron", sans-serif;
  color: white;
}

.container-1 {
  width: 50%; 
  margin-right: 20px; 
}

.dashboard{  
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

.container-2{
  width: 50%;
}

.planet-Location{
  text-align: center;
}

.planet-Location img {
  width: 200px; 
    height: 200px; 
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
