
<template>
   <v-row align="center">
    <v-col class="text-center">
    <h1> Click the Button to Create your invoice</h1>

      <div class="my-2">
        <v-btn depressed small color="primary"  v-on:click="Button()" > Create invoice </v-btn>
      </div>

    </v-col>
  </v-row>
</template>

<script>
export default {
name:"Button",

methods:{
    Button(){
      this.$emit("authenticated", true);
      this.$router.replace({ name: "AppHeader"});
      // this.$router.replace({name:"InvoiceSelector"});
    }
  }
}
</script>

<style>

</style>