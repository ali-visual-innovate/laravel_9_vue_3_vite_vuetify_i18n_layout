<script setup>

import { useAuthUserStore } from '../stores/AuthUserStore';

const authUser = useAuthUserStore()

</script>

<template>
    <h2>
        {{ $t("hello") }}
    </h2>
    <h3>
        {{ authUser.name }}
    </h3>
    <v-banner icon="mdi-vuetify" lines="two" text="loremsaklfjasdfjsakdfjsadj;fsljdf">
        <v-banner-actions>
            <v-btn>Click me</v-btn>
        </v-banner-actions>
    </v-banner>
    <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>
</template>
