<template>
  <div>
    <el-button plain @click="dialogVisible = true">
      Create Update Report by PIC
    </el-button>
    <el-dialog title="Create Update Report by PIC" :visible.sync="dialogVisible" width="30%">
      <div style="margin-top:-40px;">
      <hr color="#409EFF" style="margin-top:15px;">
        <p>
          Issue
        </p>
        <p>
          Description
          <el-input type="textarea" :rows="6">

          </el-input>
        </p>
        <div class="block">
          <span class="demonstration">Progress</span>
          <el-slider v-model="value1"></el-slider>
        </div>
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
      value1 : 0,
      options: [{
        value: ' ',
        label: ' '
      }, {
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }],
      value : '',
    }
  },
  methods : {
    save : function () {

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
