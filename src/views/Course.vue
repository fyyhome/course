<template>
  <div v-if="course">
    <course-head></course-head>
    <course-wrap :course-type="CourseType[0]" :course-data="course" class="courseTypeT"></course-wrap>
    <course-wrap :course-type="CourseType[1]" :course-data="course" class="courseTypeH"></course-wrap>
    <course-wrap :course-type="CourseType[2]" :course-data="course" class="courseTypeS"></course-wrap>
    <course-wrap :course-type="CourseType[3]" :course-data="course" class="courseTypeZ"></course-wrap>
    <course-wrap :course-type="CourseType[4]" :course-data="course" class="courseTypeM"></course-wrap>
    <course-wrap :course-type="CourseType[5]" :course-data="course" class="courseTypeKU"></course-wrap>
  </div>
  
</template>

<style lang="less" scoped>
  @fs:7.5vw;
  .border-left-color(@color){
    border-left: 10/@fs solid @color;
  }
  .courseTypeH{
    .border-left-color(rgb(255,243,168));
  }
  .courseTypeS{
    .border-left-color(rgb(223,255,167));
  }
  .courseTypeZ{
    .border-left-color(rgb(163,193,243));
  }
  .courseTypeT{
    .border-left-color(rgb(235,172,220));
  }
  .courseTypeKU{
    .border-left-color(rgb(252,197,158));
  }
  .courseTypeM{
    .border-left-color(rgb(148,210,185));
  }
</style>

<script>
  import CourseHead from '../components/CourseHead'
  import CourseWrap from '../components/CourseWrap'
  import api from '../assets/js/index.js'
  export default {
    name: 'Course',
    components:{
      CourseWrap,
      CourseHead
    },
    data(){
      return {
        CourseType:[
          '传统文化与世界文明 T',
          '人文学科与艺术审美 H',
          '社会科学与人类发展 S',
          '自然科学与现代技术 Z',
          '医学与生命科学 M',
          '创新创业类 KU'
        ],
        token:null,
        course:null,
        user:null
      }
    },
    created:function(){//app端代码
      const data = api.getAppData()
      if(data != ''){
        this.token = data.user.token
        api.getUser(this.token).then((res) => {
          this.user = res.data.base_info.xh
          console.log(this.user)
          api.getCourse(this.user).then((res) => {
            this.course = res.data.message
            console.log(this.course)
          })
        })
      }
      //Chrome环境api测试代码
      api.getUser('eyJhbGciOiJIUzI1NiIsImlhdCI6MTUyMTg3OTAwOCwiZXhwIjoxNTIxODgyMDA4fQ.eyJpZCI6IjYxNjA0ODA1MTIiLCJ4aCI6IjgwMDAxMTYwOTMiLCJleHAiOjE1MjE4ODIwMDh9.7fwTU6Hl8Oe54cQIKulpEkz7qY_orPhkoWphEmk3W-8').then((res) => {
        this.user = res.data.base_info.xh
        console.log(this.user)
        api.getCourse(this.user).then((res) => {
          this.course = res.data.message
          console.log(this.course)
        })
      })
    }
  }
</script>