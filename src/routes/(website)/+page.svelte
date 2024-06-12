<!-- Planet images -->
<script>
  import { onMount } from 'svelte';

  let planetImages = [
    'blue.jpg',
    'red.jpg',
    'pink.jpg',
    'brown.jpg',
    'brownSand.jpg',
    'redOrange.jpg',
    'black.jpg',
    'lightBlue.jpg'
  ];
  
  let selectedImage = '';

  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * planetImages.length);
    return planetImages[randomIndex];
  }

  onMount(() => {
    selectedImage = getRandomImage();
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
            <div>
              <img src={`planets/${selectedImage}`} alt={selectedImage} />
            </div>
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
