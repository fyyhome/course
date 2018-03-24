<template>
  <div class="course-wrap">
    <span>{{courseType}}</span>
    <div v-if="computeData">
      <div v-for="todo in nowTypeCourse">
        <p class="course">{{todo.kcmc}}</p>
        <p class="teacher">{{todo.teacher}}</p>
      </div>
    </div>
    <div v-if="!computeData" class="tip-wrap">
      <p>暂无选课</p>
    </div>
  </div>
</template>

<style scoped lang="less">
  @fs:7.5vw;
  .course-wrap{
    width: 674 / @fs;
    min-height: 150 / @fs;
    border-radius: 20 / @fs;
    background-color: #ffffff;
    box-shadow: 0 3/@fs 0 10/@fs rgba(4,0,0,0.01);
    margin: 40/@fs auto;
    span{
      display: inline-block;
      height: 30/@fs;
      max-width: 350/@fs;
      margin-left: 32/@fs;
      margin-top: 28/@fs;
      color: #50b2ff;
      font-size: 29/@fs;
      line-height: 1;
    }
  }
  .base-wrap{
    display: flex;
    width: 600/@fs;
    min-height: 30/@fs;
    box-sizing: content-box;
    margin: auto;
    padding: 33/@fs 0;
  }
  .tip-wrap{
    .base-wrap;
    justify-content: center;
    p{
      height: auto;
      line-height: 33/@fs;
      font-size: 28/@fs;
      color: rgba(0,0,0,0.45);
    }
  }
  .course-wrap > div{
    div{
      .base-wrap;
      justify-content: space-between;
      p{
        font-size: 28/@fs;
        display: flex;
        height: auto;
        line-height: 33/@fs;
      }
    }
  }
  .course-wrap > div > div:nth-child(1) ~ div{
    border-top: 1px solid #eff1f4;
  }
  .course{
    max-width: 280/@fs;
    color: #000000;
    word-break: break-all;
  }
  .teacher{
    max-width: 200/@fs;
    overflow: hidden;
    color: rgba(0,0,0,0.7);
    word-break: break-all;//word-break结合flex布局实现文字从底部向上换行
    align-items: flex-end;
  }
</style>

<script>
  export default{
    name:'CourseWrap',
    props:['courseType','courseData'],
    data(){
      return {
        colorType:'',
        nowTypeCourse:null
      }
    },
    computed:{
      computeData:function(){
        for(let item in this.courseData){
          if(item === this.courseType){
            this.nowTypeCourse = this.courseData[item]
          }
        }
        if(this.nowTypeCourse.length === 0){
          this.nowTypeCourse = false
        }
        return this.nowTypeCourse
      }
    }
  }
</script>