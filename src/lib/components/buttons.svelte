<script>
  import { fly } from "svelte/transition";

  let isAccepting = false;
  let isRejecting = false;

  function startAccept() {
    isAccepting = true;
    setTimeout(() => {
      isAccepting = false;
    }, 1000); // Adjust time
  }

  function startReject() {
    isRejecting = true;
    setTimeout(() => {
      isRejecting = false;
    }, 1000); // Adjust time
  }
</script>

<div class="buttons">
  <button class="btn-bounce" on:click={startAccept}> Accept </button>

  <button class="btn-bounce" on:click={startReject}> Reject </button>
</div>

<style>
  .btn-bounce {
    background: white;
    color: black;
    margin-right: 10px; /* margin between buttons */
    transition: transform 0.3s ease-in-out;
  }

  .btn-bounce:hover {
    transform: scale(1.1);
  }
</style>
