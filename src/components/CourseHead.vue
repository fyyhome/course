<template>
  <div class="course-head">
    <router-link to="/"></router-link>
    <p>我的选课</p>
  </div>
</template>

<style scoped>
  .course-head{
    width: 100vw;
    height: 4.67vw;
    margin-top: 5.6vw;
    margin-bottom: 6.8vw;
    position: relative;
    text-align: center;
  }
  .course-head a{
    width: 2.4vw;
    height: 100%;
    position: absolute;
    left: 4.4vw;
    background-image: url(../assets/images/back@2x.png);
  }
  .course-head p{
    height: 100%;
    line-height: 1;
    font-family: PingFang-SCBold !important;
    font-size: 4.5vw;
    font-weight: bold;
    color: #333333;
  }
</style>