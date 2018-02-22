<template>
  <div class="contact">
      <div class="contact-headline">
        <h1>Contact Classy Clothing</h1>
      </div>

    <form @submit.prevent="validateBeforeSubmit">
    <div class="">
        <label class="label">Email</label>
        <p class="control has-icon has-icon-right">
            <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
            <i v-show="errors.has('email')" class="fa fa-warning"></i>
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </p>
    </div>
    <div class="">
        <label class="label">Name</label>
        <p class="control has-icon has-icon-right">
            <input name="name" v-model="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
            <i v-show="errors.has('name')" class="fa fa-warning"></i>
            <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
        </p>
    </div>

    <div class="">
        <label class="label">Message</label>
        <p class="control has-icon has-icon-right">
            <textarea name="message" v-model="message" v-validate="'alpha'" :class="{'textarea': true, 'is-danger': errors.has('message') }" type="textarea" placeholder="Message"></textarea>
        </p>
    </div>

    <div class="submit">
        <p class="control">
            <button class="button" type="submit">Submit</button>
        </p>
    </div>
</form>

  </div>
</template>

<script>
export default {
  name: 'contact',
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          //alert('Form Submitted!');
          return;
        }

        //alert('Correct them errors!');
      });
    }
  }
}
</script>

<style>

</style>
