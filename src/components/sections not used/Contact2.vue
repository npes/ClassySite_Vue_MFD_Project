<template>
  <div class="contact">
      <form @submit.prevent="submitForm" novalidate v-if="!isSubmitted">
          <div>
              <label for="firstname">First name</label>
              <input type="text" v-model.lazy="form.firstname" id="firstname" v-validate="'required'" name="firstname">
              <span v-show="errors.has('firstname')" class="help is-danger">({ errors.first('firstname') })</span>
          </div>
          <div>
              <label for="email">Email</label>
              <input type="text" v-model.lazy="form.email" id="email" v-validate="'required|email'" name="email">
              <span v-show="errors.has('email')" class="help is-danger">({ errors.first('email')})</span>
          </div>
          <button type="submit" :disabled="errors.any()">Submit</button>
      </form>
      <div v-else>
          Thanks for your input!
      </div>
  </div>
</template>

<script>
export default {
    name: "contact",
    data: function() {
        return {
            form: {
                firstname: '',
                email: ''
            },
            isSubmitted: false
        }
    },
    methods: {
        submitForm: function() {
            this.isSubmitted = true;
            this.form = null;
        }
    }
}
</script>

<style>

</style>
