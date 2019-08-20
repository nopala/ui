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
        <el-breadcrumb-item>User</el-breadcrumb-item>
        <el-breadcrumb-item>User List</el-breadcrumb-item>
      </el-breadcrumb>
<br>
      <el-row>
        <el-col :span="6">
            <nUser/>
        </el-col>
      </el-row>
<br>
    <el-table id="table"
      :data="tableData"
      stripe border
      style="width: 100%">
      <el-table-column
        prop="username" sortable
        label="Username">
      </el-table-column>
      <el-table-column
        prop="from" sortable
        label="From" width="200">
      </el-table-column>
      <el-table-column
        prop="to"
        label="To" width="200">
      </el-table-column>
      <el-table-column
        prop="status"
        label="Status" width="200">
      </el-table-column>
      <el-table-column
        prop="userGroup"
        label="User Group" width="200">
      </el-table-column>
      <el-table-column
        label="Action"
        width="100">
        <el-row>
          <el-col :span="10">
            <el-button type="text">
              View
            </el-button>
          </el-col>
          <el-col :span="10">
            <el-button type="text">
              Hapus
            </el-button>
          </el-col>
        </el-row>
      </el-table-column>
    </el-table>
    </el-main>
  </el-container>
  </el-container>
</template>

<script>
import headerr from '@/components/Header.vue'
import side from '@/components/Sider.vue'
import nUser from '@/components/create-user.vue'

export default {
  components : {
    headerr,
    side,
    nUser,
  },
  data () {
    return {
      tableData : [{
        username : '',
        from : '',
        to : '',
        status : '',
        userGroup : '',
      }]
    }
  }
}
</script>

<style scoped>

</style>
