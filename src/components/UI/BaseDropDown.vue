<template>
  <div class="space-y-2">
    <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="model"
    >
      {{ label }}
    </label>
    <base-button-el :id="id" :label="labelBtn" :dropDown="dropDown"></base-button-el>
    <!-- Dropdown menu -->
    <base-ul-tag :selects="selects" :labelledBy="id" :id="dropDown"></base-ul-tag>
  </div>
</template>
<script>
import BaseButtonEl from "@/components/UI/BaseButonEl.vue";
import BaseUlTag from "@/components/UI/BaseUlTag.vue";

export default {
  name: 'BaseDropDown',
  components: {BaseUlTag, BaseButtonEl},
  props: {
    selects: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    labelBtn: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    dropDown: {
      type: String,
      required: false,
    },
  },
}
</script>