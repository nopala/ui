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
        <el-breadcrumb-item>Rapat</el-breadcrumb-item>
        <el-breadcrumb-item>Calendar View</el-breadcrumb-item>
      </el-breadcrumb>
      <br>
      <router-link to="/lr" class="btn">
        <el-button plain>
           List View
        </el-button>
      </router-link>
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
}
</script>

<style scoped>
  .el-button:hover {
    background-color: #409eff !important;
    color: white !important;
  }
</style>
