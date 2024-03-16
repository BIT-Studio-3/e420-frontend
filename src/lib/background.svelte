<div class="shaper" />

<style>
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
<!-- this code is purely for the visual for the background of our website, setting the height/width and creating a slow animation for the stars in the background to slowly move. problem with this is that if you zoom out the background doesn't stay relative to the page and looks weird-->