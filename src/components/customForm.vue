<template>
  <el-form
    class="form w"
    :model="data"
    ref="formRef"
    @submit.prevent
    :label-position="labelOption?.labelPosition || 'right'"
    :labelWidth="labelOption?.labelWidth || '100px'"
  >
    <el-row :gutter="row.rowGutter" v-for="row in formItemData" :key="row.rowGutter">
      <el-col :span="item.colSpan" v-for="item in row.formItem" :key="item.type">
        <el-form-item :label="item.label" :prop="item.key" :rules="rules[item.key]">
          <component
            :is="components[item.type]"
            v-model="data[item.key]"
            :disabled="item.disabled"
            :placeholder="item.placeholder"
            :maxlength="item.maxlength"
            :src="item.value"
            :show-word-limit="item.showWordLimit"
            :show-password="item.showPassword || false"
            :type="item.inputType"
            :clearable="item.clearable"
            :autosize="item.autosize"
            v-if="item.isVisible"
            :class="item.className"
            @click="item.event"
            @keydown.enter="item.keyboardEvent"
          >
            <template #prefix v-if="item.icon">
              <svg-icon :icon-class="item.icon" class-name="icon-20" />
            </template>
            <template #suffix v-if="item.suffixText">{{ item.suffixText }}</template>
            <template v-if="item.type === 'select'">
              <el-option
                v-for="(option, index) in item.options"
                :key="index"
                :label="option.label"
                :value="option.value"
              ></el-option>
            </template>
            <template v-if="item.type === 'button'">
              {{ item.value }}
            </template>
            <template v-if="item.type === 'customEle'">
              <slot name="customEle"></slot>
            </template>
            <slot name="checkboxGroup">
              <template v-if="item.type === 'checkboxGroup'">
                <el-checkbox
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                ></el-checkbox>
              </template>
            </slot>
          </component>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
  <div class="footer-btn" v-if="formFooterBtn?.isVisible || false">
    <el-button v-debounce="cancel" v-show="formFooterBtn.leftIsVisible" :class="formFooterBtn.leftBtnClass">{{
      formFooterBtn.leftBtnText
    }}</el-button>
    <el-button
      type="primary"
      v-debounce="submit"
      v-show="formFooterBtn.rightIsVisible"
      :class="formFooterBtn.rightBtnClass"
      >{{ formFooterBtn.rightBtnText }}</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { type FormRules, type FormInstance, ElCheckboxGroup, ElDatePicker } from 'element-plus'
import CustomEle from './customEle.vue'
const props = withDefaults(
  defineProps<{
    formItemData: FormType[]
    rules?: FormRules
    formData: { [key: string]: string | number | string[] }
    formFooterBtn?: FormFooterBtn
    labelOption?: FormLabel
  }>(),
  {
    formItemData: () => [],
    rules: () => ({}),
    formData: () => ({}),
    labelOption: () => ({}),
  }
)
const emits = defineEmits(['cancel', 'submit'])
const data = reactive<{ [key: string]: string | number | string[] }>(props.formData)
// 通过 components 对象来注册组件
const components: {
  [key: string]: any
} = {
  input: ElInput,
  select: ElSelect,
  option: ElOption,
  button: ElButton,
  checkboxGroup: ElCheckboxGroup,
  // checkbox: ElCheckbox,
  image: ElImage,
  datePicker: ElDatePicker,
  customEle: CustomEle,
}
const formRef = ref<FormInstance>()
watch(
  () => props.formItemData,
  (newFormItemData) => {
    // console.log('newFormItemData', newFormItemData)
  },
  { deep: true }
)
watch(
  () => props.formData,
  (newFormData) => {
    // console.log('newFormData', newFormData)
    Object.assign(data, newFormData)
  },
  { deep: true }
)
onMounted(() => {})
const cancel = () => {
  formRef.value?.resetFields()
  emits('cancel')
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate((valid: any) => {
    if (!valid) {
      ElMessage.error('请检查输入项！')
      return
    }
    emits('submit', data)
  })
}
</script>

<style lang="scss" scoped>
// .form {
// }
.footer-btn {
  margin-top: 6px;
}
</style>
