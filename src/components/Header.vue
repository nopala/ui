<template>
  <el-container>
    <el-header>
      <router-link to="/user">
        <el-button type="text" style="float:right; font-size:26px;"
        class="el-icon-user-solid">
        </el-button>
      </router-link>
    </el-header>
    <hr style="width:100%; margin-top:-5px;" color="#409EFF">
</el-container>
</template>

<script>
export default {
  data : () => ({
  }),
  methods: {

  }
}
</script>

<style scoped>
.el-icon-user-solid {
  color: #409eff !important;
}
.el-icon-user-solid:hover {
  color: black !important;
}
</style>
