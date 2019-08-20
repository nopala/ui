<template>
  <div>
    <el-button @click="dialogVisible = true" type="text">
      View
    </el-button>
    <el-dialog v-for="data in tableData" :key="data"
      title="View Rapat"
      :visible.sync="dialogVisible"
      width="30%">
      <hr color="#409EFF">
      <div style="margin-top:-30px;">
        <h3>
          Title <br>
        </h3>
        <p style="margin-left:20px; margin-top:-10px;">

        </p>
        <h3>
          Description <br>
        </h3>
        <p style="margin-left:20px; margin-top:-10px;">

        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tableData : '',
      dialogVisible : false,
    }
  }
}
</script>

<style scoped>

</style>
