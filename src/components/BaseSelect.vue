<script setup>
import BaseButton from './BaseButton.vue'
import { BUTTON_TYPE_NEUTRAL } from '@/constants'
import {
  validateSelectOptions,
  isUndefinedOrNull,
  isNumberOrNull,
  isSelectValueValid
} from '@/Validators'
import { normalizeSelectValue } from '@/functions'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'

const props = defineProps({
  options: {
    type: Object,
    validator: validateSelectOptions
  },
  placeholder: {
    type: String
  },
  selected: {
    type: [String, Number]
  }
})

const emit = defineEmits({
  select: isSelectValueValid
})
const isNotSelected = computed(() => {
  return isUndefinedOrNull(props.selected)
})

function select(value) {
  emit('select', normalizeSelectValue(value))
}
</script>

<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl cursor-pointer"
      @change="select($event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
