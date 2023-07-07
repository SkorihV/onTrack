<script setup>
import { ref } from 'vue'
import { isTimelineItemValid } from '@/Validators'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from '@/components/TimelineHour.vue'

const props = defineProps({
  timelineItem: {
    type: Object,
    validator: isTimelineItemValid
  }
})

const options = [
  {
    value: 1,
    label: 'Coding'
  },
  {
    value: 2,
    label: 'Reading'
  },
  {
    value: 3,
    label: 'Training'
  }
]

const selectedActivityId = ref(1)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="props.timelineItem?.hour" />
    <BaseSelect
      :selected="selectedActivityId"
      :options="options"
      placeholder="Rest"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
