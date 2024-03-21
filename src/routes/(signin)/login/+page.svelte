<script>
  import { checkAgent, wrongToken } from "$lib/components/tokenStore.js";
  function nameFunction() {
    // Redirecting to a different page when the button is clicked
    window.location.href = "/";
  }
</script>

<button on:click={nameFunction}>Log In</button>

<div class="outer-box">
  <div class="content">
    <div class="top-buttons">
      <a href="login" class="login-link">Login</a>
      <a href="register" class="register-link">Register</a>
    </div>
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
    </div>
    {#if $wrongToken}
      <p class="wrong-token-message">
        Incorrect username and/or token, please try again
      </p>
    {/if}
  </div>
</div>

<style>
  /* label {
    color: white;
  }
  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  } */
  /* button {
    background-color: white;
    color: black;
    padding: 14px 20px;
    margin: 8px 0;
    border: none; */
  /*displays a pointer cursor only when hovering over the 
  button helps to show the user that they are in fact on the interactive button*/
  /* cursor: pointer;
    width: 100%;
  } */

  /* hover effect for button */
  button:hover {
    opacity: 0.8;
  }
</style>
