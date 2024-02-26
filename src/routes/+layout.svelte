<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    import Background from '$lib/background.svelte';
    import Login from "../lib/Login.svelte";
</script>



<Login/>




<Header/>
<Background/>
<slot/>
<Footer/>

