<template>
<div>
    <div style="margin-top:-60px; margin-right:-200px;">
      <el-button type="text" @click="hide ^= true" style="font-size:26px; margin-left:35px;" class="btn el-icon-menu">
        Menu
      </el-button>
    </div>
  <el-aside width="200px" v-show="hide" style="margin-top:3px; margin-left:20px; height:100%;">
  <el-menu style="margin-left:20px;">
    <el-button type="text">
      <router-link to="/" class="white" tag="el-link"> Home </router-link>
    </el-button> <br>
    <el-button type="text">
      <router-link to="/cal" class="white" tag="el-link"> Calendar </router-link>
    </el-button> <br>
    <el-button type="text">
      <el-dropdown>
      <span class="el-dropdown-link">
          Rapat - List View <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="bg-blue">
        <el-dropdown-item class="bg-blue">
          <router-link to="/lr" class="white" tag="el-link">List Rapat</router-link>
        </el-dropdown-item>
        <el-dropdown-item class="bg-blue">
          <router-link to="/vc" class="white" tag="el-link">View Calendar</router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
      </el-dropdown>
    </el-button> <br>
    <el-button type="text">
      <router-link to="/isu" class="white" tag="el-link"> Issue </router-link>
    </el-button>
  </el-menu>
  </el-aside>
</div>
</template>

<script>
export default {
  data () {
    return {
      hide : false,
    }
  },
  methods : {

  }
}
</script>

<style scoped>
  .btn, .el-icon-menu {
    color: #409eff !important;
  }
  .btn:hover,.el-icon-menu:hover {
    color:black !important;
  }
  .el-aside, .el-menu, .bg-blue {
    background-color: #409eff !important;
    border-style: none !important;
  }
  .white:hover,.el-dropdown-link:hover {
    color: #e6f2ff !important;
  }
  .white,.el-dropdown-link {
    color: white !important;
  }
</style>
