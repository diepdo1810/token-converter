<template>
  <div class="space-y-2">
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      @change="handleChange" :data-value="selectedValue">
      <option value="">{{ selectLabel }}</option>
      <option v-for="option in selects" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>

</template>

<script>
export default {
  name: 'BaseSelectEl',
  inject: ['handleChange'],
  props: {
    selects: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    selectLabel: {
      type: String,
      required: true,
    },
    selectedValue: {
      type: String,
      default: '',
    },
  },
}
</script>