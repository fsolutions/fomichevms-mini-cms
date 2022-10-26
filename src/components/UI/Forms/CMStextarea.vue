<template>
  <textarea 
    :value="modelValue"
    @input="updateValue"
  ></textarea>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent ({
    name: 'cms-textarea',
    props: {
      modelValue: [String, Number],
    },
    methods: {
      updateValue(event: Event) {
        const target = event.target as HTMLButtonElement;
        this.$emit('update:modelValue', target.value);
      }
    }
  });
</script>