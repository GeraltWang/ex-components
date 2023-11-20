<script setup lang="ts">
// import ExTable from '../packages/components/ExTable/index.vue'
// import { ExTable } from '../packages'
// import { ExTable } from '../lib'
// import '../lib/style.css'
import { ExTable } from 'ex-components/lib'
import 'ex-components/lib/style.css'
import { reactive } from 'vue'

const columns = reactive([
  {
    label: 'title',
    prop: 'title'
  }
])

interface Data {
  title: string
}

const fetchApi = async () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

const responseDataHandler = (res) => {
  console.log(res);
  return {
    rows: res,
    total: res.length
  }
}
</script>

<template>
  <div>
    <ExTable :request-api="fetchApi" :columns="columns" request-auto :response-data-handler="responseDataHandler"
      show-column-setting></ExTable>
  </div>
</template>

<style scoped></style>