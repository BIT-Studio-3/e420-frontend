<div class="background">
    <div class="outside">
        <div class="content">
            <label for="uname"><b>Create New User</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>
            <button on:click={nameFunction}>Create</button>
        </div>

    </div>
</div>

<script>

function nameFunction(){
  
    window.location.href = "/mainPage";
  }
  

</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
  }
.background{
  background-color: black;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
label{
    color: white;

}

.outside{
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20vh;
    background-color: rgb(66, 66, 66);
    
}

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}


button {
  background-color: white;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}
</style>

