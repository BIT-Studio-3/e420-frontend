<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Background from '$lib/components/Background.svelte';
</script>



<Header/>
<Background/>
<div class="page-container">
    <div class="inner-content">
        <slot/>
    </div>
</div>
<Footer/>

<style>
    .layout-container{
        height: 100%;
        width: 100%;
        padding: 200px 0 0 0;
    }
</style>

