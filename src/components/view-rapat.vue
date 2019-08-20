<template>
  <div>
    <el-button @click="dialogVisible = true" type="text">
      View
    </el-button>
    <el-dialog v-for="data in rapatData" :key="data"
      title="View Rapat"
      :visible.sync="dialogVisible"
      width="30%">
      <hr color="#409EFF">
      <div style="margin-top:-30px;">
        <h3>
          Subject <br>
        </h3>
        <p style="margin-left:20px; margin-top:-10px;">

        </p>
        <h3>
          Location <br>
        </h3>
        <p style="margin-left:20px; margin-top:-10px;">

        </p>
        <h3>
          Category <br>
        </h3>
        <p style="margin-left:20px; margin-top:-10px;">

        </p>
        <h3>
          Date <br>
        </h3>
        <p style="margin-left:20px;">
          <el-row>
            <el-col :span="4">
              Start
            </el-col>
            <el-col :span="4">
              {{data.sDate}}
            </el-col>
          </el-row>
        </p>
        <p style="margin-left:20px;">
          <el-row>
            <el-col :span="4">
              End
            </el-col>
            <el-col :span="4">
              {{data.eDate}}
            </el-col>
          </el-row>
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
      rapatData : '',
      dialogVisible : false,
    }
  }
}
</script>

<style scoped>

</style>
