<template>
<div class="container px-lg-5">
  <div class="row mx-lg-n5">
        <div class="col py-3 px-lg-5">
            <img src="@/assets/logoVotaApp2.png" class="img-fluid" alt="votaapp">  
        </div>
        <div id="login" class="col py-3 px-lg-5 ">
            <h3>INGRESE A LA REUNIÓN</h3>
            <login-form :person="person" @login="submit"></login-form>       
        </div>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

import LoginForm from '@/components/auth/LoginForm.vue'

export default {
    name: "ViewLogin",
    components: {
        LoginForm
    },
    data(){
        return {
            person: {
                email: "",
                clave: ""
            }
        }
    },
    methods: {
        ...mapActions('auth', ['signIn']),
        async submit(){
            const validateForm = this.$validator.validateAll();
            if(!validateForm){
                return false
            }

            await this.signIn(this.person).then(() =>{
                this.$router.push('/secret')
            })
        }
    }
}
</script>