<template>
  <el-container>
    <el-header>
      <headerr/>
    </el-header>
  <el-container>
        <side/>
    <el-main>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>Calendar</el-breadcrumb-item>
    </el-breadcrumb>
    <el-calendar v-model="value">
    </el-calendar>
    </el-main>
  </el-container>
  </el-container>
</template>

<script>
import headerr from '@/components/Header.vue'
import side from '@/components/Sider.vue'

export default {
  components : {
    headerr,
    side,
  },
  data : () => ({
    value : new Date (),
  }),
}
</script>

<style scoped>

</style>
