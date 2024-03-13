<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Background from '$lib/components/Background.svelte';
</script>



<Header/>
<div class="page-container">
    <Background>
    <div class="inner-content">
        <slot/>
    </div>
    </Background>
</div>
<Footer/>

<style>
    .page-container {
        height: 100%;
        width: 100%;
        display: block;
        justify-content: center;
        /* fit-content ?? */
    }

    .inner-content {
        height: 100%;
        padding: 20px 50px;
    }
</style>

