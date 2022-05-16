<script>
export default ({
    props: {
        heading: String,
        subheading: String,
        paragraph: String
    },
    setup() {
        
    }
})
</script>



<style scoped>
 .signup{
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);

}
.newsletter{
    margin-top:30px
}
</style>


<template>
  
    <div class="container">
        <div class="col">
        <div  class="card signup newsletter">
                <div  class="card-body">
                    <h2 v-if="heading">{{heading}}</h2>
                    <p v-if="subheading"  class="lead">{{subheading}}</p>
                    <form  novalidate="" class="ng-untouched ng-pristine ng-invalid">
                        <div  class="input-group">
                            <input  data-cy="newsletterSignupEmailButton" type="email" name="EMAIL" placeholder="Email address..." aria-label="Your email address..." formcontrolname="email" class="form-control ng-untouched ng-pristine ng-invalid"><button  data-cy="newsletterSignupSubmit" type="submit" class="btn-signup btn btn-primary fw-500" disabled="">Subscribe!</button>
                            <div  class="invalid-feedback mt-2">Email required.</div>
                            <!----><!---->
                        </div>
                    </form>
                    <!----><!----><!---->
                    <p v-if="paragraph"  class="text-xs fst-italic mt-4">{{paragraph}}</p>
                </div>
        </div>
        </div>
    </div>
   
</template>