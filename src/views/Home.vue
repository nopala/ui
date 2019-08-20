<template>
  <el-container>
    <el-header>
      <headerr/>
    </el-header>
  <el-container>
      <side/>
    <el-main style="margin-top:-20px;">
      <h1>Home</h1>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
        <div>
          <p style="margin:-10px;">
            asdasda
          </p>
        </div>
      </el-card>
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

</style>
