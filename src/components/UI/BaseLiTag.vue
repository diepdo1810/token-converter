<template>
  <li>
    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" :id="id">{{ value }}</a>
  </li>
</template>

<script>
export default {
  name: 'BaseLiTag',
  props: {
    value: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
}
</script>