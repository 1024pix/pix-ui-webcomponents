<script setup>
import { ref, computed } from 'vue';
import '@1024pix/pix-ui-themes/dist/pix-theme-default.css';

const getIsDisabled = computed(() => {
  return isLoadingOrTriggering || isDisabled.value;
})

const isLoadingOrTriggering = computed(() => {
    return isLoading.value || isTriggering.value;
})

const updateClassNames = computed(() => {
  isBorderVisible.value && classNames.value.push('pix-button--border');
  getIsDisabled && classNames.value.push('pix-button--disabled');
  return classNames.value.join(' ');
})

const button = ref();
const isLoading = ref(false);
const isTriggering = ref(false);
const icon = ref('');
const isBorderVisible = ref(true);
const triggerAction = ref(Function);
const isDisabled = ref(false);

const props = defineProps({
  type: {
    type: String,
    default: "button"
  },
  shape: { 
    type: String,
    default: "squircle"
  },
  size: {
    type: String,
    default: "big"
  },
  backgroundColor: {
    type: String,
    default: "blue"
  },
});

const classNames = ref([
  'pix-button',
  `pix-button--shape-${props.shape}`,
  `pix-button--size-${props.size}`,
  `pix-button--background-${props.backgroundColor}`,
]);

async function isSettingTimeOut () {
  await new Promise((resolve) => setTimeout(() => resolve(console.log('ici')), 3000));
  isDisabled.value = false
}

async function _triggerAction(event) {
  if (isDisabled.value) {
    console.log('isDisabled.value', isDisabled.value);
    return;
  }

  if (props.type === 'submit' && !triggerAction.value) _handleClick();

  if (!triggerAction.value) {
    throw new Error('@triggerAction params is required for PixButton !');
  }
  try {
    isTriggering.value = true;
    console.log('when triggered !', triggerAction.value);
    console.log('isDisabled.value', isDisabled.value);
    await triggerAction.value;
    await isSettingTimeOut();
  } finally {
    console.log('triggering done ! ');
    isTriggering.value = false;
  }
}

function _handleClick() {
  button.value.getRootNode().host.closest('form')
  .dispatchEvent(new Event('submit', {cancelable: true}));
}
</script>

<template>
  <button
    ref="button"
    :type="type"
    @click="_triggerAction"
    :class="updateClassNames"
  >
    <div v-if="isLoadingOrTriggering">
      <div className="loader loader--blue">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
      <span className="loader__not-visible-text"><slot/></span>
    </div>
    <div v-else>
      <slot />
      <slot name="icon"></slot>
    </div>
  </button>
</template>

<style>
@import '@1024pix/pix-ui-themes/dist/pix-theme-pluto.css';
  button {
    background-color: red;
  }
</style>
