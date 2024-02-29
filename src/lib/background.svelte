<div class="shaper" />

<style>
  /* not being used */
  html, 
  body {
  }
  
  .shaper {
    background: rgb(0, 0, 0) url(option2.jpg) repeat 0 0;
    height: 120vh;
    width: 98.3vw;
    -webkit-animation: slide 120s linear infinite;
  }

  @-webkit-keyframes slide { 
    from {
      background-position: 0 0;
    }
    to {
      background-position: -512px -512px;
    }
  }
</style>
