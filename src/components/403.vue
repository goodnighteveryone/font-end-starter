<template>
  <div class="errPage-container">
    <el-button class="pan-back-btn" @click="back">
      <el-icon><ArrowLeft /></el-icon>
      返回
    </el-button>
    <el-row>
      <el-col :span="12">
        <div class="falseInfo">
          <div class="falseInfo__oops">OOPS!</div>
          <div class="falseInfo__info">Access Forbidden</div>
          <div class="falseInfo__headline">{{ message }}</div>
          <div class="falseInfo__info">
            Please check that the URL you entered is correct, or click the
            button below to return to the personalpage.
          </div>
          <a href="/personalSetting" class="falseInfo__return-home"
            >Back to personalPage</a
          >
        </div>
      </el-col>
      <el-col :span="12">
        <img
          src="../../assets/img/403.gif"
          width="497"
          height="271"
          alt="无权限"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import router from '@/router'
const message = ref('YOU ARE NOT ALLOWED ENTER')
const back = () => {
  router.go(-1)
}
</script>

<style lang="scss" scoped>
.errPage-container {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;
  .pan-back-btn {
    background: #fbba3a;
    color: #fff;
    border: none !important;
  }
  .pan-gif {
    margin: 0 auto;
    display: block;
  }
  .pan-img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
}
.falseInfo {
  position: relative;
  float: left;
  width: 300px;
  padding: 30px 0;
  overflow: hidden;
  &__oops {
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
    color: #c9502d;
    opacity: 0;
    margin-bottom: 20px;
    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  &__headline {
    font-size: 20px;
    line-height: 24px;
    color: #222;
    font-weight: bold;
    opacity: 0;
    margin-bottom: 10px;
    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
  }
  &__info {
    font-size: 13px;
    line-height: 21px;
    color: grey;
    opacity: 0;
    margin-bottom: 30px;
    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
  }
  &__return-home {
    display: block;
    float: left;
    width: 160px;
    height: 36px;
    background: #fbba3a;
    border-radius: 100px;
    text-align: center;
    color: #ffffff;
    opacity: 0;
    font-size: 14px;
    line-height: 36px;
    cursor: pointer;
    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
  }
  @keyframes slideUp {
    0% {
      transform: translateY(60px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
