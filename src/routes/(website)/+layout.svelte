<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Background from '$lib/components/Background.svelte';
    import Login from "$lib/components/Login.svelte";
</script>



<Login/>




<Header/>
<Background/>
<slot/>
<Footer/>

