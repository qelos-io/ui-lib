<script setup lang="ts">
import QelosSDK from '@qelos/sdk';
import HelloQelos from './components/HelloQelos.vue';

const sdk = new QelosSDK({
  appUrl: 'https://api.qelos.io',
  fetch: globalThis.fetch.bind(globalThis),
});
</script>

<template>
  <h1>Demo App</h1> 
  <HelloQelos :sdk="sdk" />
</template>
