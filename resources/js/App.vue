<script setup>
import Login from "./auth/Login.vue";
import LocaleSelect from "./components/LocaleSelect.vue";

import { useAppLangStore } from "./stores/AppLangStore";

import { ref, watch, computed } from "vue";

const theme = ref("light");


const drawer = ref(true);
const group = ref(null);
const onClick = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
};

const appLangStore = useAppLangStore();

const isRtl = computed({
  get() {
    return appLangStore.isRtl
  },
  set(val) {
    appLangStore.isRtl = val
  }
})

watch(group, (newGroupValue) => {
    drawer.value = false;
});

</script>

<template>
    <v-locale-provider :rtl="isRtl">
        <v-app :theme="theme">
            <!-- v-system-bar -->
            <v-system-bar color="grey-darken-3"></v-system-bar>

            <!-- v-app-bar -->
            <v-app-bar prominent>
                <v-app-bar-nav-icon
                    @click.stop="drawer = !drawer"
                ></v-app-bar-nav-icon>

                <v-toolbar-title>My Application</v-toolbar-title>

                <v-spacer></v-spacer>
                <!-- locale switcher -->
                <LocaleSelect />

                <!-- theme switcher -->
                <v-btn
                    :prepend-icon="
                        theme === 'light'
                            ? 'mdi-weather-sunny'
                            : 'mdi-weather-night'
                    "
                    @click="onClick"
                >
                </v-btn>
            </v-app-bar>

            <!-- sidebar menu -->
            <v-navigation-drawer v-model="drawer">
                <v-list>
                    <v-list-item
                        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                        title="Sandra Adams"
                        subtitle="sandra_a88@gmailcom"
                    ></v-list-item>
                </v-list>

                <v-divider></v-divider>
                <v-list density="compact" nav>
                    <v-list-item
                        prepend-icon="mdi-folder"
                        :title="$t('myFiles')"
                        value="myfiles"
                    ></v-list-item>
                    <v-list-item
                        prepend-icon="mdi-account-multiple"
                        :title="$t('sharedWithMe')"
                        value="shared"
                    ></v-list-item>
                    <v-list-item
                        prepend-icon="mdi-star"
                        :title="$t('starred')"
                        value="starred"
                    ></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <!-- this is main content for the application -->
            <v-main>
                <v-container>
                    <v-alert text="this is alert from vuetify" variant="tonal"
                        ><v-icon size="sm" icon="mdi-home"
                    /></v-alert>
                    <h1>Welcome Page from Vue</h1>
                    <Login />

                    <!-- footer -->
                </v-container>
            </v-main>
            <v-footer app class="justify-center" border>
                this is footer
            </v-footer>
        </v-app>
    </v-locale-provider>
</template>

<style></style>
