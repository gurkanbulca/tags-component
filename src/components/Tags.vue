<template>
  <div>
    <span v-for="(tag,index) of tags" :key="index" :id="index" class="badge badge-info mr-1">
      {{tag}}
      <i @click="removeTags" class="fas fa-times"></i>
    </span>
    <input
      @keypress.enter="addToTags"
      class="form-control"
      :class="{'is-invalid':alert}"
      type="text"
      placeholder="Input task..."
    />
    <small v-show="alert" class="text-danger">*bu tag zaten mevcut.</small>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
      alert: false
    };
  },
  methods: {
    addToTags(event) {
      if (
        new Set([...this.tags, event.target.value]).size == this.tags.length
      ) {
        // Tag zaten mevcut ise...
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 2000);
      } else {
        // tag mevcut değil ise...
        this.tags.push(event.target.value);
        this.$http.put("tags.json",{tags:this.tags})
        event.target.value = "";
      }
    },
    removeTags(event) {
      this.tags.splice(event.target.parentElement.id, 1);
      this.$http.put('tags.json',{tags:this.tags})

    }
  },
  created(){
    this.$http.get("tags.json")
      .then(response=>{
        return response.json()
      })
      .then(tags=>{
        this.tags=tags.tags
      })
  }
};
</script>

<style scoped>
.fa-times:hover {
  cursor: pointer;
  color: rgb(238, 238, 238);
}
input {
  display: inline-block !important;
  width: 130px !important;
  height: 25px !important;
}
</style>
