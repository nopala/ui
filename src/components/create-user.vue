<template>
  <div>
    <el-button class="btn" plain @click="dialogVisible = true">
      Create User
    </el-button>
    <el-dialog
      title="Create User"
      :visible.sync="dialogVisible"
      width="30%">
      <hr color="#409EFF" style="margin-top:-20px;">
      <p>
        Username
        <el-input v-model="username"></el-input>
      </p>
      <div class="block">
        <el-date-picker style="width:250px;"
          v-model="value1"
          type="daterange"
          range-separator="-"
          start-placeholder="From"
          end-placeholder="To">
        </el-date-picker>
      </div>
      <p>
        Group <br>
      <el-select style="width:100%;" v-model="value" placeholder=" ">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">

        </el-option>
      </el-select>
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submit(), dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      username : '',
      value1: '',
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
      value: '',
    }
  },
}
</script>

<style scoped>
  .el-button:hover {
    background-color: #409eff !important;
    color: white !important;
  }
</style>
