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
  <p>
    In order to use this library inside a Qelos app, copy this manifest URL and create a new plugin from it:
    <input type="text" :value="manifestURL" readonly />
  </p>
  <HelloQelos :sdk="sdk" />
</template>
