<script>
  

  function nameFunction() {
    // Redirecting to a different page when the button is clicked
    window.location.href = "/"; 
  }

  
</script>

<button on:click={nameFunction}>Log In</button>


<style>
  label {
    color: white;
  }

  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  button {
    background-color: white;
    color: black;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;

    /*displays a pointer cursor only when hovering over the 
  button helps to show the user that they are in fact on the interactive button*/
    cursor: pointer;
    width: 100%;
  }

  /* hover effect for button */
  button:hover {
    opacity: 0.8;
  }
</style>
