<script setup>
import { ref, onMounted, computed } from 'vue'

/*
const getIsDisabled = computed(() => {
  return isLoadingOrTriggering.value || isDisabled.value
})
*/

const isLoadingOrTriggering = computed(() => {
  return isLoading.value || isTriggering.value
})

const updateClassNames = computed(() => {
  isBorderVisible.value && classNames.value.push('pix-button--border')
  //getIsDisabled && classNames.value.push('pix-button--disabled');
  return classNames.value.join(' ')
})

const button = ref()
const isLoading = ref(false)
const isTriggering = ref(false)
//const icon = ref('')
const isBorderVisible = ref(true)
//const isDisabled = ref(false)
let hostNode

const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  shape: {
    type: String,
    default: 'squircle'
  },
  size: {
    type: String,
    default: 'big'
  },
  backgroundColor: {
    type: String,
    default: 'blue'
  }
})

onMounted(() => {
  hostNode = button.value.getRootNode().host
})

const classNames = ref([
  'pix-button',
  `pix-button--shape-${props.shape}`,
  `pix-button--size-${props.size}`,
  `pix-button--background-${props.backgroundColor}`
])

/*
async function isSettingTimeOut() {
  await new Promise((resolve) => setTimeout(() => resolve(console.log('ici')), 3000))
  isDisabled.value = false
}
*/

/*
async function handleTriggerAction(event) {
  if (isDisabled.value) {
    console.log('isDisabled.value', isDisabled.value);
    return;
  }

  if (props.type === 'submit') {
    console.log('Ready to handleClick')
    _handleClick();
    return;
  }

  if (!props.triggerAction) {
    throw new Error('triggerAction param is required with type "button"');
  }
  try {
    isTriggering.value = true;
    await props.triggerAction;
    await isSettingTimeOut();
  } finally {
    console.log('triggering done ! ');
    isTriggering.value = false;
  }
}
*/

function handleClick(event) {
  console.log('handleClick', event)
  console.log({ hostNode })
  if (props.type === 'submit') {
    hostNode.closest('form').dispatchEvent(new Event('submit', { cancelable: true }))
  }
}
</script>

<template>
  <button ref="button" :type="type" @click="handleClick" :class="updateClassNames">
    <div v-if="isLoadingOrTriggering">
      <div className="loader loader--blue">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
      <span className="loader__not-visible-text"><slot /></span>
    </div>
    <div v-else>
      <slot />
      <slot name="icon"></slot>
    </div>
  </button>
</template>

<style>
@import '@1024pix/pix-ui-themes/dist/pix-theme-default.css';
</style>
