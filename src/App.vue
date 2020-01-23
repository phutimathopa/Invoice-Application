<template>
  <v-app>

    <router-view @authenticated="setAuthenticated" />

  </v-app>
</template>

<script>


export default {
  name: 'App',

  mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "Create-Invoice" });
            }
        },
  methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            }
        }
};
</script>
