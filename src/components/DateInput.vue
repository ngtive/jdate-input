<script setup lang="ts">

import { ref, watch } from "vue";
import moment from "moment-jalaali";
import useJalaliInputMask from "../composables/jdate-hook";
import { Moment } from "moment-jalaali";

const props = withDefaults(defineProps<{
  valueFormat?: 'jYYYY/jMM/jDD' | 'YYYY/MM/DD' | string,
  displayFormat?: 'jalali' | 'georgian',
  name?: string;
  lockFuture?: boolean;
  modelValue?: string;
  disabled?: boolean;
  id?: string;
  additional?: any;
}>(), {
  lockFuture: true,
  disabled: false,
  boolean: false,
  plainText: false,
  modelValue: undefined,
  valueFormat: 'YYYY/MM/DD',
  displayFormat: 'jalali',
});

const emit = defineEmits<{
  (e: 'update:model-value', date: string): void;
}>();

const fieldRef = ref();
const {day, year, month, date, onKeyDown, setInitialValue} = useJalaliInputMask(props.displayFormat === 'georgian', props.lockFuture);



watch(day, () => {
  if (year.value.length === 4 && month.value.length === 2 && day.value.length === 2) {
    let m: Moment;
    if (props.displayFormat === 'georgian') {
      m = moment(date.value, 'YYYY/MM/DD');
    } else {
      m = moment(date.value, 'jYYYY/jMM/jDD');
    }
    if (m.isValid()) {
      emit('update:model-value', m.format(props.valueFormat));
    }
  }
});

watch(() => props.modelValue, (newModelValue) => {
  if (newModelValue) {
    setInitialValue(newModelValue, props.valueFormat);
  }
}, {
  immediate: true,
});

</script>

<template>
  <input
    v-bind="additional"
    :name="name"
    :value="date"
    @keydown="onKeyDown"
    ref="fieldRef"
    :disabled="disabled"
    :id="id" />
</template>

<style scoped lang="scss">

</style>
