<template>
  <div class="row justify-content-center">
      <b-form @submit.prevent="onSubmit" class="col-3">
        <b-form-group class="mt-3">
            <b-form-input
                id="firstname"
                name="firstname"
                v-model="form.firstname"
                type="text"
                v-validate="{ required: true }"
                :state="validateState('firstname')"
                aria-describedby="firstname-live-feedback"
                data-vv-as="firstname"
                placeholder="Enter firstname"
            ></b-form-input>

            <b-form-invalid-feedback id="firstname-live-feedback">{{ veeErrors.first('firstname') }}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group class="mt-3">
            <b-form-input
                id="lastname"
                name="lastname"
                v-model="form.lastname"
                v-validate="{ required: true }"
                :state="validateState('lastname')"
                aria-describedby="lastname-live-feedback"
                data-vv-as="lastname"
                type="text"
                placeholder="Enter lastname"
            ></b-form-input>

            <b-form-invalid-feedback id="lastname-live-feedback">{{ veeErrors.first('lastname') }}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group class="mt-3">
            <b-form-input
                id="email"
                name="email"
                v-model="form.email"
                v-validate="{ required: true }"
                :state="validateState('email')"
                aria-describedby="email-live-feedback"
                data-vv-as="email"
                type="text"
                placeholder="Enter email"
            ></b-form-input>

            <b-form-invalid-feedback id="email-live-feedback">{{ veeErrors.first('email') }}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group class="mt-3">
            <b-form-input
                id="password"
                name="password"
                v-model="form.password"
                v-validate="{ required: true }"
                :state="validateState('password')"
                aria-describedby="password-live-feedback"
                data-vv-as="password"
                type="password"
                placeholder="Enter password"
            ></b-form-input>

            <b-form-invalid-feedback id="password-live-feedback">{{ veeErrors.first('password') }}</b-form-invalid-feedback>
        </b-form-group>
      
        <p class="alert alert-danger mt-3" v-if="errorMsg">{{ errorMsg }}</p>

        <b-button  type="submit" variant="primary" class="mt-3" >Submit
            <b-spinner v-if="isLoading" small></b-spinner>
        </b-button>

      </b-form>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Register',

    data() {
        return {
            form: {
                firstname: '',
                lastname: '',
                email: '',
                password: ''    
            }
        }
    },

    computed: {
        ...mapGetters('user', [
            'errorMsg',
            'isLoading'
        ])
    },

    methods: {
        validateState(ref) {
            if (
                this.veeFields[ref] &&
                (this.veeFields[ref].dirty || this.veeFields[ref].validated)
            ) {
                return !this.veeErrors.has(ref);
            }
            return null;
        },
        onSubmit() {
               this.$validator.validateAll().then(result => {
                if (!result) {
                    return
                }
                this.$store.dispatch('auth/register', this.form)
            })
        },
    }
}
</script>

<style scoped>
    .was-validated .form-control:valid, .form-control.is-valid {
        background-image: unset;
    }
</style>