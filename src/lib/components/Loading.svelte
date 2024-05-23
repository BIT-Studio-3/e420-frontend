<script>
    import { onMount } from "svelte";
    onMount(async () => {
      setTimeout(async () => {
        document.querySelector(".container").remove();
      }, 3000);
    });
  </script>
  
  <div class="container">
    <div class="loading-wave">
      <div class="loading-bar"></div>
      <div class="loading-bar"></div>
      <div class="loading-bar"></div>
      <div class="loading-bar"></div>
    </div>
  </div>
  
  <style>
  .container{
    background-color: black;
    display:flex;
    height:100vh;
    width:100%;
    justify-content:center;
    align-items:center;
  }
    .loading-wave {
      width: 300px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  
    .loading-bar {
      width: 20px;
      height: 10px;
      margin: 0 5px;
      background-color: #ff3c3c;
      border-radius: 5px;
      animation: loading-wave-animation 1s ease-in-out infinite;
    }
  
    .loading-bar:nth-child(2) {
      animation-delay: 0.1s;
    }
  
    .loading-bar:nth-child(3) {
      animation-delay: 0.2s;
    }
  
    .loading-bar:nth-child(4) {
      animation-delay: 0.3s;
    }
  
    @keyframes loading-wave-animation {
      0% {
        height: 10px;
      }
  
      50% {
        height: 50px;
      }
  
      100% {
        height: 10px;
      }
    }
  </style>
  