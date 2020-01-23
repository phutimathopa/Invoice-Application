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

        <v-list>
          <v-list-item
            
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>User {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
   
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

</style>
