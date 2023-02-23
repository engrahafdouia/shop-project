<template>
   <h3 class="text-h4  font-weight-bold white-text py-6 px-4 ">Products List </h3>

<v-breadcrumbs :items="['ProductsList','All Products' ]"></v-breadcrumbs>
<v-layout>
            <v-flex py-1 no-wrap>
                <v-btn color="" class=" ma-10 bg-indigo-lighten-5" to="/addProduct">Add Product <v-icon>mdi-email-edit-outline</v-icon></v-btn>
            </v-flex>
        </v-layout>
  <v-card>
    <v-layout>
      <v-main >

        <v-row justify="center">
          <v-col cols="12" align="left">
            <div>
              <h3 class="py-2 px-2 text-center">Product List</h3>
              <!-- d-inline -->
              <!-- <div class="d-flex justify-center align-center">
                <div class="w-25">
                  <h5 class="px-3">Product Name</h5>
                  <v-text-field
                    type="text"
                    v-model="ProductName"
                    class="px-3 py-3"
                  />
                </div>
                <div class="w-25">
                  <h5 class="px-3">Category</h5>
                  <v-text-field
                    type="text"
                    v-model="Category"
                    class="px-3 py-3"
                  />
                </div>
                <div>
                  <v-btn
                    color="primary"
                    @click="AddNewProduct()"
                    class="px-auto"
                  >
                    <v-icon dark>mdi-plus</v-icon>AddProduct
                  </v-btn>
                </div>
              </div> -->
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="pa-2">ProductsCount is : {{ getProductsCount }}</p>
          </v-col>
        </v-row>
        <section class=" ma-auto pt-8 pb-8">
          <v-row justify="center">
            <v-col align="center">

              <v-table class="" v-model:items-per-page="itemsPerPage">
      <thead>
        <tr class="bg-sucsess">
          <!-- <th class="text-center py-2">Id</th>
          <th class="text-left py-2">Title</th>
          <th class="text-left py-2">Actions</th>

          <th class="text-left py-2">Category</th> -->

        </tr>
      </thead>

      <tbody>
        <tr class="bg-info" v-for="(product, i) in this.ProductsStore" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>


          <td>{{ product.category }}</td>
          <td>
            <router-link to="/EditProduct">
              <v-icon class="ma-2" @click="returnindexProductEdit(i)"
                >mdi-circle-edit-outline</v-icon
              >
            </router-link>
          </td>
          <td><v-icon class="ma-2" @click="RemoveProduct(i)">mdi-delete</v-icon></td>
          <v-divider></v-divider>
        </tr>
      </tbody>
    </v-table>
              <v-data-table :search="searchvalue"
      :items-per-page="itemsPerPage"
      :headers="headers"
      :items="ProductsStore"
      :sort-by="[{ key: 'id', order: 'asc' }]"
      class="elevation-1 ">
                <template v-slot:default align="center">
                  <thead align="center">
                    <tr>
                      <th class="text-center text-purpleme bg-indigo-lighten-3">
                        Number
                      </th>
                      <th class="text-center text-purpleme bg-indigo-lighten-3">
                        ProductName
                      </th>
                      <th class="text-center text-purpleme bg-indigo-lighten-3">
                        Category
                      </th>
                      <th class="text-center text-purpleme bg-indigo-lighten-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody align="left" class="bg-white">
                    <tr v-for="item in products" :key="item.id">
                      <td class="text-center text-purpleme bg-indigo-lighten-3">
                        {{ item.id }}
                      </td>
                      <td>{{ item.title }}</td>
                      <td class="text-center w-25">{{ item.category }}</td>
                      <td class="text-center w-25">
                        <div class="d-flex jistify-row">
                          <v-btn variant="text">
                            <v-icon
                              size="15"
                              class="text-red-darken-2 ma-2"
                              @click="removeProduct(item.id)"
                              >mdi-delete</v-icon
                            >
                          </v-btn>
                          <AdminEditProduct class="pa-3" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </section>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
import { useAdminProductsStore } from "@/store/AdminProducts";

import { mapActions } from "pinia";
import { mapState } from "pinia";
import { mapStores } from "pinia";
import AddNewProductForm from "@/components/AddNewProductForm.vue";
import AdminEditProduct from "@/components/AdminEditProduct.vue";

export default {
  data() {
    return {
      ProductName: "",
      Category: "",
      Products: this.ProductsStore,
      //searchvalue:this.searchvalue
      loaded: false,
      loading: false,
      dialog: false,
      dialogDelete: false,
      itemsPerPage: 5,
      headers: [
        {
          title: "Id",
          key: "id",
        },
        {
          title: "Title",
          key: "title",
        },
        {
          title: "Price ",
          key: "price",
        },

        // {
        //   title: "Brand",
        //   key: "brand",
        // },
        {
          title: "Category",
          key: "category",
        },
        // {
        //   title: "Image",
        //   key: "image",
        // },
        { title: "Actions", key: "actions", sortable: false },
      ],

      editedIndex: -1,
      editedItem: {
        id: 0,
        title: "",
        price: 0,
        rating: 0,
        brand: 0,
        category: "",
        //  image: "",
      },
      defaultItem: {
        id: 0,
        title: "",
        price: 0,
        rating: 0,
        brand: 0,
        category: "",
        // image: "",
      },
    };
  },
  components: {
    AddNewProductForm,
    AdminEditProduct,
  },
  computed: {
    ...mapState(useAdminProductsStore, [
      "products",
      " ProductName",
      " Category",
      "getProductName",
      "getProducts",
      "getProductsCount",
    ]),
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    trucate(value, length = 50) {
      return value.length <= length
        ? value
        : value.substring(0, length) + "...";
    },
    AddNewProduct() {
      const id = this.products.length + 1;
      const data = {
        id: id,
        title: this.ProductName,
        category: this.Category,
      };
      this.products.push(data);
      this.ProductName = "";
      this.Category = "";
    },
    ...mapActions(useAdminProductsStore, ["fetchProducts", "removeProduct"]),
  },
};
</script>
<style>
.table th,
td {
  border: 1px solid grey;
  padding: 5px;
}

.header {
  color: #8af837;
}
</style>
