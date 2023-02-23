<template>
  <v-card class="w-100">
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar

        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Dashboard</v-toolbar-title>

        <v-spacer></v-spacer>


        <!-- <v-btn variant="text" icon="mdi-filter"></v-btn> -->
        <v-btn rounded variant="text" to="/profile" v-if="isLoggedIn">
          <v-icon>mdi-account</v-icon>

        {{ user.firstName }}


                </v-btn>
        <!-- <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
        width="250" height="100vh"
      >

      <v-list>
        <v-list-item    to="/chartview"
          ><v-icon>mdi-home</v-icon>  Dashboard</v-list-item
        >
        <v-list-item   to="/productInfo"
          ><v-icon>mdi-database</v-icon>  Products List</v-list-item
        >
        <v-list-item      to="/userInfo"
          ><v-icon>mdi-account</v-icon> users List</v-list-item
        >
        <v-list-item       to="/"
          ><v-icon>mdi-earth</v-icon> Back</v-list-item
        >
        <v-btn
                  rounded class="bg-indigo ma-3"
                  variant="text"
                  v-if="isLoggedIn"
                  to="/"
                  @click="logout"
                >
                  {{ $t("message.logout") }}
                </v-btn>
                <v-btn v-else variant="text" to="/login">
                  {{ $t("message.Login") }}
                </v-btn>
      </v-list>
      </v-navigation-drawer>

      <v-main class="bg-indigo-lighten-4" style="height: 1000px;">
        <router-view />

      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { useTheme } from "vuetify";
import { useUserStore } from "@/store/User";

// import <DashboardSection from "@/views/chartView.vue";
export default {
    name: "SelectLocale",
    persist: true,
    setup() {
        const theme = useTheme();
        return {
            theme,
            toggleTheme: () => (theme.global.name.value = theme.global.current.value.dark
                ? "light"
                : "dark"),
        };
    },
    data() {
        return {
            // drawer: true,
            // items: [
            //   { title: "Home", icon: "mdi-home-city" },
            //   { title: "My Account", icon: "mdi-account" },
            //   { title: "Users", icon: "mdi-account-group-outline" },
            // ],
            rail: true,
            langs: ["en", "ar"],
            name: "LocaleSwitcher",
            locales: ["ar", "fr", "en"],
            itemss: ["Home", "Products", "About", "contact"],
            tab: null,
            drawer: false,
            group: null,
            items: [
                {
                    title: "Products List",
                    to: "/",
                },
                {
                    title: "Bar",
                    value: "bar",
                },
                {
                    title: "Fizz",
                    value: "fizz",
                },
                {
                    title: "Buzz",
                    value: "buzz",
                },
            ],
        };
    },
    watch: {
        group() {
            this.drawer = false;
        },
    },
    computed: {
      ...mapState(useUserStore, ["isLoggedIn", "user"]),
      ...mapActions(useUserStore, ["logout"]),

        showMenu() {
            return this.toggleMenu || this.$vuetify.breakpoint.mdAndUp
        }
    },
    mounted() {
        if (sessionStorage.getItem("locale")) {
            this.$i18n.locale = sessionStorage.getItem("locale");
        }
        else {
            sessionStorage.setItem("locale", this.$i18n.locale);
        }
    },
    methods: {
        toggleLocale() {
            this.$i18n.locale = this.$i18n.locale === "en" ? "ar" : "en";
            this.$vuetify.locale.current =
                this.$vuetify.locale.current === "en" ? "ar" : "en";
        },
        updateLanguage() {
            sessionStorage.setItem("locale", this.$i18n.locale);
        },
    },
    // components: { DashboardSection }
};
</script>
