<script setup></script>

<template>
    <h2>
        {{ $t("hello") }}
    </h2>
    <v-banner icon="mdi-vuetify" lines="two" text="loremsaklfjasdfjsakdfjsadj;fsljdf">
        <v-banner-actions>
            <v-btn>Click me</v-btn>
        </v-banner-actions>
    </v-banner>
    <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>
</template>
