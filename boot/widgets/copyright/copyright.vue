<script>
export default ({
    props: {
        text: String,
        link: String
    },
    setup() {
        
    },
    
    data(){
        return{
            topbarCSS: {
                    background: this.backgroundColor
                }
        }
    }
})
</script>

<template>

   
    <div  class="container  copyright">
        <div  class="text-lg-center">{{ text }}</div>
        <div  class="text-lg-center text-xs fst-italic pt-0"><slot></slot></div>
    </div>
       
</template>

<style scoped>
.text-lg-center {
    text-align: center;
    padding-top:1rem
}
.copyright{

    font-size: 12px;
    line-height: 1.5;

}
</style>