<script>
    import Background from '$lib/components/Background.svelte';
</script>

<Background/>
<div class="background">
    <div class="signin_box">
      <div class="signin_content">
          <slot />
        <!--When you click the button it activates nameFunction bellow-->
      </div>
    </div>
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
    height: 20vh;
    background-color: rgb(66, 66, 66);
  }
  </style>