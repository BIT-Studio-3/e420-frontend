<script>
  import Nav from "$lib/components/Nav.svelte";
</script>

<header class="floating-header">
  <Nav />
</header>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0; /* Light background for contrast */
  }

  .floating-header {
    position: fixed; /* Keeps the header fixed at the top of the viewport */
    top: 20px; /* Distance from the top of the page */
    left: 50%; /* Centers the header horizontally */
    transform: translateX(-50%); /* Adjusts the horizontal centering */
    background-color: rgb(66, 66, 66); 
    border-radius: 70px; 
    padding: 1px, 10px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000; /* Ensures it stays on top of other content */
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
