<template>
  <div :id="id" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" :aria-labelledby="labelledBy">
      <BaseLiTag v-for="select in selects" :key="select.id" :value="select" />
    </ul>
  </div>
</template>

<script>
import BaseLiTag from "@/components/UI/BaseLiTag.vue";
export default {
  name: 'BaseUlTag',
  components: {
    BaseLiTag,
  },
  props: {
    selects: {
      type: Array,
      required: false,
    },
    labelledBy: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
  },
}
</script>