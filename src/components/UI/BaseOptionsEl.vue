<template>
  <option :value="value">{{ name }}</option>
</template>

<script>
export default {
  name: 'BaseSelectEl',
  props: {
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>