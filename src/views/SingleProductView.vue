<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-carousel show-arrows="hover" height="410" class="bg-grey-lighten-2" hide-delimiters>
        <v-carousel-item
          :src="productDetails.images[0]"
          cover
        ></v-carousel-item>

        <v-carousel-item
          :src="productDetails.images[1]"
          cover
        ></v-carousel-item>

        <v-carousel-item
          :src="productDetails.images[2]"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
  <v-row class="bg-indigo-lighten-4 ma-auto pa-8">
    <v-col >
      <v-card align="center" class="bg-indigo-lighten-5 ">
        <v-card-item class="pt-8">
          <v-card-title class="text-h4 text-dark pa-2">Product info:{{productDetails.id }} </v-card-title>
          <v-divider class="bg-indigo-darken-4" width="10%"></v-divider>
          <v-card-subtitle class="pt-4 text-h6"
            >{{ productDetails.title }}
          </v-card-subtitle>
          <v-card-text class="text-grey-darken-4"
            >{{ productDetails.category }} - {{ productDetails.brand }}
          </v-card-text>
          <v-card-text class="text-grey-darken-4">
            <tmplate v-slot>
              <p class="mb-2">{{ productDetails.description }}</p>
              <p>
                price:
                <span class="mt-2 text-indigo"> {{ productDetails.price }} $</span>
              </p>
            </tmplate>
          </v-card-text>
        </v-card-item>
        <div>
          <v-card-actions class="d-flex justify-center">
            <!-- rounded color="primary" -->
            <v-btn
      rounded="pill"
        class="bg-purpleme text-right"
              @click="addToCard(productDetails)"
            >
              <v-icon large > mdi-cart </v-icon>
              addToCart
            </v-btn>

            <!-- <v-spacer></v-spacer> -->

          </v-card-actions>

          <!-- <div>
                    <v-btn rounded color="primary" @click="addToCard(product)" to='/cart'>
                                <v-icon large color="primary">
                                    mdi-cart
                                </v-icon>
                                addToCart
                            </v-btn>

                  </div> -->
          <!-- <div  v-if="!alert" class="text-center"> -->
          <!-- <v-btn variant="outlined"  justify="center" class=" bg-red mb-8"  @click="alert = true">
                        SHOW Offer
                     </v-btn> -->
          <!-- <v-btn variant="outlined"  justify="center" class=" bg-red mb-8"  @click="addToCard(productDetails)">
                        Add
                     </v-btn> -->

          <!-- </div> -->


        </div>
      </v-card>
    </v-col>
    <v-col cols="6">
      <div class="w-100 h-100">
        <v-img :src="productDetails.images[0]" class="h-100 w-100" />
      </div>
      <!-- <v-img  :src="product.images[0]" cover height="273" /> -->
    </v-col>
  </v-row>
  <!-- </section> -->
</template>
<script>
import { mapState } from "pinia";
import { useProductStore } from "@/store/product";
import { useCartStore } from "@/store/Cart";
import { mapActions } from "pinia";

export default {
  components: {

  },
  data() {
    return {
      alert: false,
    };
  },
  computed: {
    ...mapState(useProductStore, ["productDetails"]),
    product() {
      return {
        id: this.id,
        title: this.title,
        price: this.price,
        category: this.category,
        image: this.image,
      };
    },
  },
  methods: {
    ...mapActions(useCartStore, ["addToCard"]),
  },
};
</script>
