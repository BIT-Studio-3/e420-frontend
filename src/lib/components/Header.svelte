<script>
  import Nav from "$lib/components/Nav.svelte";
</script>

<div class="hover-area">
<header class="floating-header">
  <Nav />
</header>
</div> 

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0; /* Light background for contrast */
  }

  .hover-area {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px; /* Height of the hover area */
  z-index: 1001; /* Ensure hover area is above header */
}


  .floating-header {
    position: fixed; /* Keeps the header fixed at the top of the viewport */
    top: -100px; /* Distance from the top of the page */
    left: 50%; /* Centers the header horizontally */
    transform: translateX(-50%); /* Adjusts the horizontal centering */
    background-color: transparent; 
    border: 4px solid rgb(255, 255, 255);
    border-radius: 70px; 
    padding: 1px, 10px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000; /* Ensures it stays on top of other content */
    display: flex;
    justify-content: center;
    align-items: center;
    transition: top 0.3s ease-in-out;
  }

  .hover-area:hover .floating-header {
    top: 0;
  }

</style>
