<script setup>
import { ref } from 'vue'
import { isTimelineItemValid, validateSelectOptions } from '@/Validators'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from '@/components/TimelineHour.vue'

const props = defineProps({
  timelineItem: {
    type: Object,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const selectedActivityId = ref(null)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="props.timelineItem?.hour" />
    <BaseSelect
      :selected="selectedActivityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
