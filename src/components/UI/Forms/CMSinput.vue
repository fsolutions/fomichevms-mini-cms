<template>
  <input 
    :type="type"
    :value="modelValue"
    @input="updateValue"
  />
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent ({
    name: 'cms-input',
    props: {
      modelValue: [String, Number],
      type: {
        type: String,
        default: 'text'
      }
    },
    methods: {
      updateValue(event: Event) {
        const target = event.target as HTMLButtonElement;
        this.$emit('update:modelValue', target.value);
      }
    }
  });
</script>