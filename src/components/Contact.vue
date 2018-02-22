<template>
    <div class="contact">

    <form @submit.prevent="submitForm" novalidate v-if="!isSubmitted">

        <div class="contact-headline">
            <h1>Contact Classy Clothing</h1>
        </div>
            <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
            <span v-show="errors.has('email')" class="help">{{ errors.first('email') }}</span>


            <input name="name" v-model.lazy="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
            <span v-show="errors.has('name')" class="help">{{ errors.first('name') }}</span>

            <textarea name="message" v-model.lazy="message" v-validate="'required'" :class="{'textarea': true, 'is-danger': errors.has('message') }" type="textarea" placeholder="Message"></textarea>
            <span v-show="errors.has('message')" class="help">{{ errors.first('message') }}</span>
        <div class="submit">
            <p class="control">
                <button class="button" type="submit" :disabled="errors.any()">Submit</button>
            </p>
        </div>
    </form>

    <div v-else class="thank">
          Thanks for your input!
    </div>

  </div>
</template>

<script>
export default {
  name: 'contact',
  data: function() {
        return {
            form: {
                name: '',
                email: '',
                message: '',
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
