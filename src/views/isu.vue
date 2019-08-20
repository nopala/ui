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
        <el-breadcrumb-item>Issue</el-breadcrumb-item>
      </el-breadcrumb>
<br>
      <el-row>
        <el-col :span="3">
          <isu/>
        </el-col>
        <el-col :span="5">
          <createUpdateR/>
        </el-col>
        <el-col :span="5">
          <createUpdateRPIC/>
        </el-col>
        <el-col :span="1">
          <assignPIC/>
        </el-col>
      </el-row>
<br>
      <el-table id="table"
        :data="tableData"
        stripe border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID"
          width="80">
        </el-table-column>
        <el-table-column
          prop="title"
          label="Title">
        </el-table-column>
        <el-table-column
          prop="description"
          label="Description">
        </el-table-column>
        <el-table-column
          prop="numberUpdate"
          label="Number Of Update"
          width="140">
        </el-table-column>
        <el-table-column
          prop="lastUpdateOn"
          label="Last Update On"
          sortable
          width="141">
        </el-table-column>
        <el-table-column
          prop="lastUpdateNote"
          label="Last Update Notes"
          sortable
          width="156">
        </el-table-column>
        <el-table-column
          label="Action"
          width="100">
          <el-row>
            <el-col :span="10">
                <vIsu/>
            </el-col>
            <el-col :span="10">
                <eIsu/>
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
import isu from '@/components/create-isu.vue'
import side from '@/components/Sider.vue'
import vIsu from '@/components/view-isu.vue'
import eIsu from '@/components/edit-isu.vue'
import assignPIC from '@/components/assignPIC.vue'
import createUpdateR from '@/components/createUpdateR.vue'
import createUpdateRPIC from '@/components/createUpdateRPIC.vue'

export default {
  components : {
    headerr,
    side,
    isu,
    vIsu,
    eIsu,
    assignPIC,
    createUpdateR,
    createUpdateRPIC,
  },
  data : () => ({
    isu : '',
    tableData : [{
      id : '',
      title : '',
      description : '',
      numberUpdate : '',
      lastUpdateOn : '',
      lastUpdateNote : '',
    }],
  }),
  methods : {
    view : function () {

    },
  }
}
</script>

<style scoped>

</style>
