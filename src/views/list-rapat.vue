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
        <el-breadcrumb-item>List View</el-breadcrumb-item>
      </el-breadcrumb>
    <br>
      <el-row>
        <el-col :span="3"><rapatc/></el-col>
        <el-col :span="4">
          <router-link to="/vc" class="btn">
            <el-button plain> Calendar View
            </el-button>
          </router-link>
        </el-col>
      </el-row>
    <br>
      <el-table
        :data="tableData"
        stripe border
        style="width: 100%;">
        <el-table-column
          prop="sDate"
          label="Date"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="id"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="title"
          label="Title">
        </el-table-column>
        <el-table-column
          prop="location"
          label="Location">
        </el-table-column>
        <el-table-column
          prop="category"
          label="Category"
          width="180">
        </el-table-column>
        <el-table-column
          label="Action"
          width="120">
            <el-row>
              <el-col :span="9">
                <dView/>
              </el-col>
              <el-col :span="9">
                <eRapat/>
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
import rapatc from '@/components/create-rapat-fc.vue'
import side from '@/components/Sider.vue'
import dView from '@/components/view-rapat.vue'
import eRapat from '@/components/edit-rapat.vue'

export default {
  components : {
    headerr,
    eRapat,
    rapatc,
    side,
    dView,
  },
  data : () => ({
    dialogVisible : false,
    tableData : [{
      sDate : '',
      eDate : '',
      id : '',
      title : '',
      category : '',
      action : '',
      location : '',
    }]
  }),
}
</script>

<style scoped>
  .el-button:hover {
    background-color: #409eff !important;
    color: white !important;
  }
</style>
