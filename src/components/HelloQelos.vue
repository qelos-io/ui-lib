<template>
  <div>Hello {{ title || 'Qelos' }}</div>
  <div v-if="sdk">{{ sdk }}</div>
  <div v-if="user">{{ user }}</div>
  <div><el-button @click="$pubsub.publish('custom-message')">Show Message</el-button></div>
</template>

<script setup lang="ts">
import QelosSDK from '@qelos/sdk';
import type { IUser } from '@qelos/sdk/src/authentication';

defineProps<{
    title?: string,
    sdk?: QelosSDK,
    user?: IUser
}>()
</script>

<style scoped>
</style>
