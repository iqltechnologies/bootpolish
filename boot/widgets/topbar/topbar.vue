<script>
export default ({
    props: {
        email: String,
        phone: String,
        timing: String,
        facebook: String,
        twitter: String, 
        instagram: String,
        backgroundcolor: String,
        textcolor: String
    },
    data() {
       
    }
})
</script>

<style scoped>


.topbar{
    background: v-bind(backgroundcolor);
    color: v-bind(textcolor);
    font-size: 10pt;
    line-height: 1;
    box-shadow: 0px 0px 5px 2px #0000004a;
}
.topbar a{
    color: v-bind(textcolor);
    text-decoration: none;
    padding: 12px 12px;
    border-right: 1px solid #f9fafb36;
    display: inline-block;
}
.topbar a:hover{
    background:#f9fafb1c
}
.topbar li:last-child a{

    border-right: none;
}
.topbar i{
    font-weight: bold;
}
 .social-list {
    list-style: none;
    margin: 0;
    margin-left: 25px;
    text-align: right;
}
.social-list li.button a{
    padding:0px;
    margin: 0 10px;
}
.social-list li {
    display: inline-block;
    margin: 0px;
}
.topbar-info {
    list-style: none;
    padding: 0;
    margin: 0;
}
.topbar-info li:first-child {
    padding-left: 0;
}
.topbar-info li {
    padding: 0 20px;
    float: left;
}
 .topbar-info li i {
    display: inline-block;
    vertical-align: middle;
    font-size: 15px;
    margin-right: 7px;
    line-height: 1;
}
</style>
<template>

      <div class="topbar" >
          <div class="container">
         <!-- contact info -->
        <div class="col">
            <!-- contact info -->
         <ul class="topbar-info">
            <li v-if="email"><i class="fa fa-envelope"></i><a :href="'tel:'+email">{{email }}</a></li>
            <li v-if="timing"><i class="fa fa-clock-o"></i><a >{{timing}}</a></li>
            <li v-if="phone"><i class="fa fa-phone"></i><a :href="'tel:'+phone">{{phone}}</a></li>
         </ul>

         <ul class="social-list">

            <li v-if="facebook">
                <a :href="facebook" ><span class="fa fa-facebook"></span></a>
            </li>

            <li v-if="slack">
                <a :href="slack" >
                    <span class="fa fa-slack"></span>
                </a>
            </li>

            <li v-if="twitter">
                <a :href="twitter">
                    <span class="fa fa-twitter"></span>
                </a>
            </li>

            <li v-if="youtube">
                <a :href="youtube" >
                    <span class="fa fa-youtube"></span>
                </a>
            </li>

            <li v-if="instagram">
                <a :href="instagram">
                    <span class="fa fa-instagram"></span>
                </a>
            </li>

            <li class="button">
                <a>
                    <button class="btn btn-sm btn-primary">Dashboard</button>
                </a>
            </li>

         </ul>
         <div v-if="extraText" class="extra-text">
             {{extraText}}		
         </div>
      </div>
      </div>
      </div>


</template>
