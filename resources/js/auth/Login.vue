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

</template>
