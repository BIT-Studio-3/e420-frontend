<div class="shaper">
  <h1></h1>
  <h2></h2>
</div>
  <div class="title">
    <div class="menu">
      <h1>Controls</h1>
    </div>
    <div class="controls">
      <ul>
        <li>help - display help in console</li>
        <li>buy (item) - buy from marketplace</li>
        <li>sell (item) - sell item in marketplace</li>
        <li>travel (place) - travel to said destination</li>
        <li>scan - scans P.O.V in front of ship</li>
        <li>mine (resource) - begin mining resource</li>
        <li>PlaceHolder</li>
        <li>PlaceHolder</li>
        <li>PlaceHolder</li>
        <li>PlaceHolder</li>
      </ul>
    </div>
  </div>


<style>
.title{
  color: white;
  position: relative;
}
.shaper {
  background: rgb(0, 0, 0) url(option2.jpg) repeat 0 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 120vh;
  width: 120vw;
  -webkit-animation: slide 70s linear infinite;
}

.shaper h1 {
font-family: sans-serif;
font-size: 80px;
color: black;
}

.shaper h2 {
font-family: sans-serif;
font-size: 40px;
color: black(0, 0, 0);
}
@-webkit-keyframes slide {
from { background-position: 0 0; }
to { background-position: -512px -512px; }

}
  .controls {
    display: flex;
    justify-content: center;
    font-size: 24px;
  }
  .menu {
    display: flex;
    justify-content: center;
  }
  .menu title {
    display: flex;
    justify-content: center;

  }
  .menu h1 {
    display: flex;
    justify-content: center;
    font-size: 40px;
  }
</style>
