<template>
  <main>
    <el-color-picker :model-value="''" style="vertical-align: middle" />

    <el-form ref="formRef" :model="formModel" :rules="formRules">
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="formModel.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="年龄" prop="age">
            <el-input v-model="formModel.age" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-button type="primary" @click="validForm">校验</el-button>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import type { ElForm } from "element-plus";
const useForm = () => {
  const defaultModel = () => ({
    name: "",
    age: 0,
  });
  const formModel = ref(defaultModel());
  const formRules = {
    name: [
      {
        required: true,
        message: "必填",
        trigger: "blur",
      },
    ],
  };
  const formRef = ref<InstanceType<typeof ElForm>>();

  const validForm = () => {
    formRef.value?.validate((valid) => {
      ElMessage.info("res:" + !!valid);
    });
  };

  return {
    defaultModel,
    formModel,
    formRules,
    formRef,
    validForm,
  };
};

const { defaultModel, formModel, formRules, formRef, validForm } = useForm();
</script>
