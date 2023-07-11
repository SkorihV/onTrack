import { PAGE_TIMELINE, HOURS_IN_DAY, MIDNIGHT_HOUR, SECONDS_IN_HOUR } from '@/constants'
import { isPageValid, isNull } from '@/Validators'

export function normalizePageHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export function generateActivities() {
  return ['Coding', 'Treading', 'Training'].map((name, hours) => {
    return {
      id: id(),
      name: name,
      secondsToComplete: hours * SECONDS_IN_HOUR
    }
  })
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function normalizeSelectValue(value) {
  return isNaN(value) || isNull(value) ? value : +value
}

export function generateTimelineItems() {
  const timelineItems = []
  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activities) => ({ value: activities.id, label: activities.name }))
}
