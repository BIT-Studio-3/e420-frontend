<script>
  import { fly } from 'svelte/transition';

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

<style>
  .btn-bounce {
      background: #2e3047; /* inner box color */
      color: #3BBA9C; /* text and border color */
      margin-right: 30px; /* margin between buttons */
      border: none;
      border-radius: 20px; /* round edges */
      padding: 20px 30px; /* adjust padding for bigger size */
      transition: transform 0.3s ease-in-out;
  }

  .btn-bounce:hover {
      transform: scale(1.1);
  }
</style>

<div class="buttons">
  <button
      class="btn-bounce"
      on:click={startAccept}
  >
      Accept
  </button>

  <button
      class="btn-bounce"
      on:click={startReject}
  >
      Reject
  </button>
</div>

   
  
  
  
  
  