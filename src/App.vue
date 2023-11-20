<script setup lang="ts">
// import ExTable from '../packages/components/ExTable/index.vue'
import { ExTable } from '../packages'
import { reactive } from 'vue'

const columns = reactive([
  {
    label: 'Name',
    prop: 'name'
  }
])

interface Data {
  name: string
}

const data = reactive<Data[]>([
  {
    name: '1121212'
  },
  {
    name: '1121212'
  },
  {
    name: '1121212'
  },
  {
    name: '1121212'
  },
  {
    name: '1121212'
  },
  {
    name: '1121212'
  },
  {
    name: '1121212'
  },
  {
    name: '1121212'
  },
  {
    name: '1121212'
  },
  {
    name: '1121212'
  },
  {
    name: '1121212'
  },
  {
    name: '1121212'
  },
])
</script>

<template>
  <div>
    <ExTable :data="data" :columns="columns" show-column-setting></ExTable>
  </div>
</template>

<style scoped></style>
