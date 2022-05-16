<script>
export default ({
    props: {
        buttonlink: String,
        buttontext: String
    },
    data() {
       
    }
})
</script>

<style scoped>


</style>
<template>

    <div class="container d-flex align-items-center justify-content-between">
        
        <a href="index.html" class="logo d-flex align-items-center scrollto me-auto me-lg-0"> 
             <img src="/assets/images/logo.png" > 
        </a>

	<nav id="navbar" class="navbar">
		<slot>

        </slot>
        
        <i class="bi bi-list mobile-nav-toggle d-none"></i>
    </nav> 
       
    <a v-if="buttonlink" :href="buttonlink" class="header-btn scrollto">
         {{buttontext}}
    </a>

</template>
