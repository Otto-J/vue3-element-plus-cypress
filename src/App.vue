<template>
  <el-config-provider :locale="zhCN">
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import zhCN from "element-plus/lib/locale/lang/zh-cn";
</script>

<style>
/* @import "@/assets/base.css"; */
</style>
