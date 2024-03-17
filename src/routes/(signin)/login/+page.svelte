<script>
  import{writable} from "svelte/store";

  export const token = writable("empty");
  export const wrongToken = writable(false);
  export const username = writable("empty");

  async function checkAgent() {
    try{
      const tokenInput = document.getElementById("token-input");
      let tokenValue = tokenInput.value;//stores token input data in tokenValue
      const usernameInput = document.getElementById("username-input");
      let username = usernameInput.value;//stores userName 

      const options = {
        headers: {//includes headers of fetched data
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenValue}`,
        },
      };

      const res = await fetch(
        "https://api.spacetraders.io/v2/my/agent",
        options
      );
      const json = await res.json();
      console.log(json);
      try{//handles errors
        

      }

  }

  
  export function setToken(value){ //this is a function that sets the value of the token
    token.set(value);
  }
  export function getToken(value){
    return token;
  }

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
