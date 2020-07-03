<template>
    <v-card-text>
        <v-toolbar
        class="mx-auto"
        >
        <template v-slot:extension>
            <v-tabs
            class="space-between"
            v-model="currentItem"
            dark
            background-color="primary"
            grow
            >
               <v-tab
                v-for="item in items"
                :key="item"
               >
               {{item}}
               </v-tab>
            </v-tabs>
        </template>
        </v-toolbar>

        <v-tabs-items v-model="currentItem">
            <v-card flat="">
               <v-card-text>

                  <invoiceitems/>
               
               </v-card-text>        
            </v-card>
        </v-tabs-items>
    </v-card-text>
</template>

<script>
import invoiceitems from "./InvoiceItems.vue"

export default {
    data: () =>( {
        currentItem : 'tab-invoice',
        items: [
         'My Invoice', 'My Customers', 'My Resports'    
        ]
    }),
   methods: {
      addItem (item) {
        this.$nextTick(() => {this.currentItem = 'tab' + item})
    }
  },
  components:{
      invoiceitems
  }
}
</script>