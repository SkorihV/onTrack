<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import { ref } from 'vue'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '@/constants'
import { isActivityValid } from '@/Validators'

defineProps({
  activity: {
    required: true,
    type: String,
    validator: isActivityValid
  }
})

const secondToComplete = ref(null)
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity }}</span>
    </div>
    <div>
      <BaseSelect
        :selected="secondToComplete"
        @select="secondToComplete = $event"
        class="font-mono"
        placeholder="h:mm"
        :options="PERIOD_SELECT_OPTIONS"
      ></BaseSelect>
    </div>
  </li>
</template>

<style scoped></style>
