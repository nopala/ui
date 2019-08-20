<template>
  <div>
    <el-button type="text" @click="formVisible = true">
      Edit
    </el-button>

    <el-dialog
      title="Edit Rapat"
      :visible.sync="formVisible"
      width="30%">
      <hr color="#409EFF">
      <div style="margin-top:-40px;">
        <p>
          Subject
          <el-input placeholder="" v-model="input">

          </el-input>
        </p>
        <p>
          Location
          <el-input placeholder="" v-model="input2">

          </el-input>
        </p>
        <p>
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
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)">
          Delete
        </el-button>
        <el-button @click="formVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirm(),formVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
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
    confirm : function () {
      window.alert('berhasil di edit')
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  }

}
</script>

<style scoped>

</style>
