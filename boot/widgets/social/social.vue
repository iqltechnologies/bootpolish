<script>
export default ({
    props: {
        email: String,
        facebook: String,
        twitter: String, 
        instagram: String,
        iconcolor: String,
        iconsize: String
    },
    data() {
       
    }
})
</script>

<style scoped>

.social-links a {
    font-size: v-bind(iconsize);
    display: inline-block;
    color: v-bind(iconcolor);
    line-height: 0;
    margin-right: 10px;
    transition: 0.3s;
}

</style>


<template>

 <div class="social-links mt-3"> 
    
    <a v-if="twitter" :href="twitter" class="twitter">
        <i class="fa fa-twitter"></i>
    </a> 

    <a v-if="facebook" :href="facebook" class="facebook">
        <i class="fa fa-facebook"></i>
    </a> 

    <a  v-if="instagram" :href="instagram" class="instagram">
        <i class="fa fa-instagram"></i>
    </a> 

    <a  v-if="linkedin" :href="linkedin" class="linkedin">
        <i class="fa fa-linkedin"></i>
    </a>

    <a  v-if="email" :href="email" class="email">
        <i class="fa fa-envelope-o"></i>
    </a>
</div>


</template>