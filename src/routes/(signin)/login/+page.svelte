<script>
  import { token } from "../../../stores/index";
  // import { onDestroy } from "svelte"; // uncomment this to make a log out function

  let usernameValue = "";
  let tokenValue = "";

  // Use this in HTML to display different messages
  let success = true;

  //token.subscribe((t) => (tokenValue = t));

  //let unsubscribe = token.subscribe((t) => (tokenValue = t));

  /** Attempts to fetch the agent the user wants to log in as.
  * Provided that a token and username are supplied, the function will set the token store to be the token provided
  * if a data object with a matching username is returned. If an error is returned in the response or the username does not match, the success flag will be false.
  */
  async function handleLogin() {
    const options = {
      headers: {
        //includes headers of fetched data
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenValue}`,
      },
    };
    try {
  // Get an agent using the token provided - this will return an agent or an error object
      const res = await fetch("https://api.spacetraders.io/v2/my/agent", options);
      const agent = await res.json();
  //If an agent is returned AND the agent username matches the provided username, store the provided token in our token store
      if (agent.data && agent.data.symbol === usernameValue.toUpperCase()) {
        $token = tokenValue;
        usernameValue = "";
        tokenValue = "";
        success = true;
      } 
  // If an error is returned or username does not match
      else {
        success = false;
      }
    } catch(err) {
      console.error(err);
    }
  }

</script>
<div class="outer-box">
  <label for="login-header"><b>User Login</b></label>
  <div class="content">
    <hr class="line" />
    <div class="input-container">
      <input
        bind:value={usernameValue}
        placeholder="Enter your username"
        class="input-username"
        type="text"
        id="username-input"
      />
      <input
        bind:value={tokenValue}
        placeholder="Enter your token"
        class="input-token"
        type="text"
        id="token-input"
        maxlength="1000"
      />
    </div>
    <div class="login">
      <button class="login-button" on:click={handleLogin}>Login</button>
      <a href="/register" class="register-link">Click Here To Register</a>
    </div>
    <div class="test-login">
      <span class="test-text">Current token: {$token}</span>
    </div>
    {#if success == false}
      <p class="wrong-token-message">
        Invalid login details, please try again
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
  .test-login {
    font-size: x-small;
    width: 500px;
    display: block;
    align-items: center;
    background-color: white;
    overflow: hidden;
  }

  .test-text {
    width: 50px;
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
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
