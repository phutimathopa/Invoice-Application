<template>
  <div>
    <v-app-bar
      color="deep-grey accent-4"
      dense
      dark
    >
      <v-toolbar-title>INVOICE</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>
        <v-card
            class="mx-auto"
            width="400px"
            >
            <h1>MosNak Engineering</h1>
    </v-card>
     <invoiceSelector/>
  </div>

</template>

<script>

import  invoiceSelector from './InvoiceSelector'

export default {
components:{
  invoiceSelector
}
}
</script>

<style>
  h1 {
      text-align: center;
      text-transform: uppercase;
      color: #4CAF50;
  }

</style>
