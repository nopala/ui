<template>
  <div>
    <el-button plain @click="dialogVisible = true">
      Create Issue
    </el-button>
    <el-dialog
      title="Create Issue"
      :visible.sync="dialogVisible"
      width="30%">
      <hr color="#409EFF" style="margin-top:-25px;"> <br>
      <p v-if="errors.length">
        <ul>
          <li v-for="error in errors" :key="error">
            {{error}}
          </li>
        </ul>
      </p>
      <p style="margin-top:-10px;">
        Title
        <el-input v-model="title"></el-input>
      </p>
      <p style="margin-top:-10px;">
        Description
        <el-input type="textarea" :rows="8" v-model="description"></el-input>
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
      title : '',
      description : '',
      errors : '',
    };
  },
  methods : {
    submit () {
      const title = this.title;
      const description = this.description;
      const errors = this.errors;

      this.errors = [];

      if(!this.title) {
        this.errors.push('Harap Isi Title');
      }
      if
      (!this.description) {
        this.errors.push('Harap Isi Description');
      }
      else {
        window.alert('title :'+ title +' | description :'+ description);
      }
    },
  }
}
</script>

<style scoped>
  li {
    list-style-type : none;
  }
  .el-button:hover {
    background-color: #409eff !important;
    color: white !important;
  }
</style>
