<template>
  <section class="bg-indigo-lighten-5">

    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="item.id"
          cols="12"
          lg="4"
          xl="3"
        >
          <v-card max-width="344">
            <v-img :src="item.image" height="200px" cover />
            <v-card-title>
              {{ item . title }}
            </v-card-title>
            <v-card-subtitle>
              {{ item . price }}$ - {{ item.category }}
            </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="error" icon variant="text" @click="removeItem(i)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCartStore } from "@/store/Cart";

export default {
  components: {},
  computed: {
    ...mapState(useCartStore, ["items"] , ["itemscount"]),
  },
  methods: {
    ...mapActions(useCartStore, ["removeItem"]),

  },
};
</script>

<style></style>




