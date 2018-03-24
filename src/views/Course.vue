<template>
  <div v-if="CourseType&&course">
    <course-head></course-head>
    <course-wrap :course-type="CourseType[0]" :course-data="course" :class="ClassType[0]"></course-wrap>
    <course-wrap :course-type="CourseType[1]" :course-data="course" :class="ClassType[1]"></course-wrap>
    <course-wrap :course-type="CourseType[2]" :course-data="course" :class="ClassType[2]"></course-wrap>
    <course-wrap :course-type="CourseType[3]" :course-data="course" :class="ClassType[3]"></course-wrap>
    <course-wrap :course-type="CourseType[4]" :course-data="course" :class="ClassType[4]"></course-wrap>
    <course-wrap :course-type="CourseType[5]" :course-data="course" :class="ClassType[5]"></course-wrap>
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
        CourseType:[],
        ClassType:[],
        token:null,
        course:null,
        user:null
      }
    },
    methods:{
      selectCourseType(msg){
        for(let item in msg){
          if(msg[item].length != 0){
            this.CourseType.push(item)
          }
        }
        for(let item in msg){
          if(msg[item].length === 0){
            this.CourseType.push(item)
          }
        }
        for(let todo of this.CourseType){
          let className = todo.split(" ")
          this.ClassType.push('courseType' + className[1])
        }
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
            this.selectCourseType(this.course)
          })
        })
      }
      //Chrome环境api测试代码
      api.getUser('eyJleHAiOjE1MjE4ODUzMTUsImlhdCI6MTUyMTg4MjMxNSwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE1MjE4ODUzMTUsImlkIjoiNjE2MDQ4MDUxMiIsInhoIjoiODAwMDExNjA5MyJ9.ymtRZgdOMbnkrhhWssbY3mAeP9nsU7RO2F7KQmlY4RE').then((res) => {
        this.user = res.data.base_info.xh
        console.log(this.user)
        api.getCourse(this.user).then((res) => {
          this.course = res.data.message
          console.log(this.course)
          this.selectCourseType(this.course)
        })
      })
    }
  }
</script>