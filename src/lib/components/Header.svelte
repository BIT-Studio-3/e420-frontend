<script>
  import Nav from "$lib/components/Nav.svelte";
</script>

<header>
  <div class="nav-logo">
    <img src="/Transparent-logo.png" width="200" height="200" />
    <Nav />
  </div>
</header>

<style>
  header {
    background-color:#43455C;
  }

  .nav-logo {
    display: flex;
    align-items: center;
  }
</style>
