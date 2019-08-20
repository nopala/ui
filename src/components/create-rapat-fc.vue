<template>
  <el-container>
      <el-button class="btn" plain @click="formVisible = true">
        Create Rapat
      </el-button>

    <el-dialog
      title="Create New Rapat"
      :visible.sync="formVisible"
      width="40%">
      <hr color="#409EFF" style="margin-top:-25px;">
        <p style="margin-top:-10px; font-size:20px;"> <br>
          Subject
          <el-input
            v-model="input"
            clearable>
          </el-input>
        </p>
        <p style="margin-top:-35px; font-size:20px;"> <br>
          Location
          <el-input
            v-model="input2"
            clearable>
          </el-input>
        </p> <br>
        <p style="margin-top:-35px; font-size:20px;"> <br>
          Category
          <el-select v-model="value" placeholder=" ">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </p>
      <div style="text-align:center;">
          <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            start-placeholder="Start Date"
            end-placeholder="End Date"
            default-value="2019-12-12">
          </el-date-picker>
      <br> <br>
          <el-time-picker
            v-model="value3"
            :picker-options="{
              selectableRange: '18:30:00 - 20:30:00'
            }"
            placeholder="Start Time"
            style="width:170px;">
          </el-time-picker>
          -
          <el-time-picker
            arrow-control
            v-model="value4"
            :picker-options="{
              selectableRange: '18:30:00 - 20:30:00'
            }"
            placeholder="End Time"
            style="width:170px;">
          </el-time-picker>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="formVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirm(),formVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>

export default {
  components : {
  },
  data() {
    return {
      formVisible: false,
      input : '',
      input2 : '',
      dataRapat : String,
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
      value2: '',
      error : 'Seluruh data harus diisi',
      value3: new Date(' '),
      value4: new Date(' '),
    }
  },
  methods : {
    confirm : function() {
      const input = this.input;
      const input2 = this.input2;
      const value = this.value;
      const error = this.error;

      if (!this.input && !this.input2 && !this.value) {
        window.alert(error)
      } else {
        window.alert('Subject : ' + input + ' | Location : ' + input2 + ' | Category : ' + value)
        }
    }
  }
}
</script>

<style scoped>
  .el-button:hover {
    background-color: #409eff !important;
    color: white !important;
  }
</style>
