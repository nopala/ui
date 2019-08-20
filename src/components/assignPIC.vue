<template>
  <div>
    <el-button plain @click="dialogVisible = true">
      Assign PIC
    </el-button>
    <el-dialog
    title="Assign PIC" width="30%"
    :visible.sync="dialogVisible">
    <div style="margin-top:-30px;">
      <hr color="#409EFF">
        <h3>
          Title
        </h3>
      <p style="margin-top:-10px; margin-left:10px;">
        asdawd
      </p>
        <h3>
          Person In Charge
        </h3>
      <el-table id="table" style="margin-top:-10px;"
      :data="dataTable" stripe border>
        <el-table-column
        prop="no" label="No" width="60px;">
        </el-table-column>
        <el-table-column
        prop="name" label="Name">
        </el-table-column>
        <el-table-column
        label="Action" width="100px;">
          <el-button type="text" @click="hapus">Delete</el-button>
        </el-table-column>
      </el-table>
    </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="save(),dialogVisible = false">
          Save
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible : false,
      dataTable : [{
        no : '1',
        name : 'nopal',
      }],
    }
  },
  methods : {
    save : function () {

    },
    hapus : function () {

    },
  }
}
</script>

<style scoped>
  .el-button:hover {
    background-color: #409eff !important;
    color: white !important;
  }
</style>
