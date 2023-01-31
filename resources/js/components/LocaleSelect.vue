<script setup>
import {ref} from 'vue'
import i18n from '../plugins/i18n';
const locale = ref('ar')


const changeLocale = () => {
  if(i18n.global.locale.value == 'ar'){
    i18n.global.locale.value = 'en'
    locale.value = 'ar'
  }
  else{
    i18n.global.locale.value = 'ar'
    locale.value = 'en'
  }
}
</script>

<template>
    <v-btn @click="changeLocale">
      {{ locale }}
    </v-btn>
</template>

<style scoped>
:deep( .v-input__control){
    max-width: 60px;
}
</style>
