<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <slot></slot>
  </form>
</template>

<script>
export default {
  inject: ['submitForm'],
  data() {
    return {};
  },
  methods: {},
};
</script>
