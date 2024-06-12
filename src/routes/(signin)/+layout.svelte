<script>
    import Background from '$lib/components/Background.svelte';
</script>

<div class="page-container">
  <Background>
    <!-- container to wrap inner contents neatly onto the page -->
    <div class="inner-content">
      <slot />
    </div>
  </Background>
</div>

  <style>
  /* Applying box-sizing and margin properties to all elements */
  * {
    box-sizing: border-box;
    margin: 0;
  }
  .background {
    background-color: black;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .signin_box {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 30vh;
    background-color: rgb(203, 55, 55);
  }

  .page-container {
    height: 100%;
    width: 100%;
    display: block;
    justify-content: center;
    /* fit-content ?? */
  }

  .inner-content {
    height: 300px;  
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 50px;
    background-color: rgb(87, 86, 86);
    border-radius: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  </style>