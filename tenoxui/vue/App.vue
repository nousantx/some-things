<script setup lang="ts">
import { onMounted } from 'vue'
import { makeTenoxUI } from '@tenoxui/core'
import { property } from '@tenoxui/property'

onMounted(() => {
  document.querySelectorAll('*[class]').forEach((element) => {
    new makeTenoxUI({ element: element as HTMLElement, property }).useDOM()
  })
})
</script>

<template>
  <div class="bg-red text-blue">Hello World</div>
</template>
