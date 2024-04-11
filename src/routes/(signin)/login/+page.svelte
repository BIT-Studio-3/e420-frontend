<script>
  import { checkAgent, wrongToken } from "$lib/components/tokenStore.js";
  import { token } from "../../../stores/index";
  import { onDestroy } from "svelte";

  let username;
  let tokenValue;
  token.subscribe((t) => (tokenValue = t));

  let unsubscribe = token.subscribe((t) => (tokenValue = t));

  async function handleLogin() {
    const options = {
      headers: {
        //includes headers of fetched data
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenValue}`,
      },
    };

    const res = await fetch("https://api.spacetraders.io/v2/my/agent", options);
    const agent = await res.json();
  }

</script>
<div class="outer-box">
  <label for="login-header"><b>User Login</b></label>
  <div class="content">
    <hr class="line" />
    <div class="input-container">
      <input
        placeholder="Enter your username"
        class="input-username"
        type="text"
        id="username-input"
      />
      <input
        placeholder="Enter your token"
        class="input-token"
        type="text"
        id="token-input"
        maxlength="1000"
      />
    </div>
    <div class="login">
      <button class="login-button" on:click={() => checkAgent()}>Login</button>
      <!-- <button class="register-button">Register </button> -->
      <a href="/register" class="register-link">Click Here To Register</a>
    </div>
    {#if $wrongToken}
      <p class="wrong-token-message">
        Incorrect username and/or token, please try again
      </p>
    {/if}
  </div>
</div>

<style>
  label {
    color: #3BBA9C;
  }
  .wrong-token-message{
    color: #3BBA9C;
  }
  .register-link{
    color: #3BBA9C;
  }
  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 15px;
  } 
  button {
    background-color: white;
    color: black;
    padding: 10px 20px;
    margin: 8px 0;
    border: none; 
  /*displays a pointer cursor only when hovering over the 
  button helps to show the user that they are in fact on the interactive button*/
    cursor: pointer;
    width: 30%;
    border-radius: 25px;
  } 

  /* hover effect for button */
  button:hover {
    opacity: 0.8;
    background-color: #3BBA9C;
  }
  .login{
    display: flex;
    justify-content: space-between;
    
  }

  .register-link{
    margin-top: 15px;
  }

  .outer-box {
    font-family: 'Orbitron', sans-serif;
  }

</style>
