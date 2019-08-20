<template>
  <div>
    <el-button @click="dialogVisible = true" type="text">
      Edit
    </el-button>
    <el-dialog
      title="Edit Rapat"
      :visible.sync="dialogVisible"
      width="40%">
      <hr color="#409EFF">
      <div style="margin-top:-40px;">
        <p>
          Title
          <el-input placeholder="">

          </el-input>
        </p>
        <p>
          Description
          <el-input placeholder="" type="textarea" :rows="8">

          </el-input>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-row>
          <el-col :span="6">
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData)">
            Delete
          </el-button>
          </el-col>
          <el-col :span="6">
            <el-button @click="release">Release</el-button>
          </el-col>
          <el-col :span="6">
            <el-button @click="dialogVisible = false">Cancel</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" @click="confirm(),dialogVisible = false">Confirm</el-button>
          </el-col>
        </el-row>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible : false,
    }
  },
  methods : {
    confirm : function () {
      window.alert('berhasil di edit')
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    release : function () {

    }
  }

}
</script>

<style scoped>

</style>
