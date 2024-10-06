# Vue TenoxUI Things

This is my collection of tenoxui usage on Vue.

## Create App

```sh
npm create vue@latest # Latest tenoxui tested on: v3.4.29
```

## Install dependencies

```sh
npm i @tenoxui/core @tenoxui/property -D
```

## Starter

```vue
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
```
