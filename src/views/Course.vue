<template>
  <div>
    <course-head></course-head>
    <course-wrap :course-type="CourseType[0]"></course-wrap>
    <course-wrap :course-type="CourseType[1]"></course-wrap>
    <course-wrap :course-type="CourseType[2]"></course-wrap>
    <course-wrap :course-type="CourseType[3]"></course-wrap>
    <course-wrap :course-type="CourseType[4]"></course-wrap>
    <course-wrap :course-type="CourseType[5]"></course-wrap>
  </div>
  
</template>

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
          '人文学科和艺术审美 H',
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
    created:function(){
      const data = api.getAppData()
      if(data != ''){
        this.token = data.user.token
        api.getUser(this.token)
      }
      api.getUser('passport eyJhbGciOiJIUzI1NiIsImlhdCI6MTUyMTg2ODU3MiwiZXhwIjoxNTIxODcxNTcyfQ.eyJpZCI6IjYxNjA0ODA1MTIiLCJ4aCI6IjgwMDAxMTYwOTMiLCJleHAiOjE1MjE4NzE1NzJ9.jKz2fQgSPFNIy07O1ly929Xd32FHztmIQylhejrhKUs').then((res) => {
        this.user = res.data.base_info.xh
        console.log(this.user)
      })
      api.getCourse(this.user).then((res) => {
        console.log(res.data)
      })
    }
  }
</script>