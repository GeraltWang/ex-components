<script setup lang="ts">
import ExTable from '../packages/components/ExTable/index.vue'
import { reactive } from 'vue'

const columns = reactive([
  {
    label: 'Name',
    prop: 'name'
  }
])

const data = reactive([
  {
    name: '1121212'
  }
])
</script>

<template>
  <div>
    <ExTable :data="data" :columns="columns" show-column-setting />
  </div>
</template>

<style scoped></style>
