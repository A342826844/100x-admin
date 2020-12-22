<template>
  <div id="nav">
    <Layout>
      <router-view/>
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from './components/Layout/index.vue';

export default defineComponent({
  components: {
    Layout,
  },
});

</script>

<style lang="less">

</style>
