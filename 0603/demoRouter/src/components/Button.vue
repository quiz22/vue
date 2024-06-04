<script setup>
</script>

<template>
  <div id="container">
    <hr>
    <h1>Element Plus</h1>
    <hr>
    <p>
      <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </el-row>
    </p>
    <p>
      <el-row class="mb-4">
        <el-button plain round disabled>Plain</el-button>
        <el-button plain type="primary">Primary</el-button>
        <el-button plain type="success">Success</el-button>
        <el-button plain type="info">Info</el-button>
        <el-button plain type="warning">Warning</el-button>
        <el-button plain type="danger">Danger</el-button>
      </el-row>
    </p>
    <p>
      <el-row class="mb-4">
        <el-button round>Round</el-button>
        <el-button round type="primary">Primary</el-button>
        <el-button round type="success">Success</el-button>
        <el-button round type="info">Info</el-button>
        <el-button round type="warning">Warning</el-button>
        <el-button round type="danger">Danger</el-button>
      </el-row>
    </p>
    <p>
      <el-row class="mb-4">
        <el-button circle>00</el-button>
        <el-button circle type="primary">01</el-button>
        <el-button circle type="success">02</el-button>
        <el-button circle type="info">03</el-button>
        <el-button circle type="warning">04</el-button>
        <el-button circle type="danger">05</el-button>
      </el-row>
    </p>
    <hr>
    <h1>Vant</h1>
    <hr>
    <p>
      <van-button>默认</van-button>
      <van-button type="primary">primary</van-button>
      <van-button type="success">success</van-button>
      <van-button type="default">default</van-button>
      <van-button type="warning">warning</van-button>
      <van-button type="danger">danger</van-button>
    </p>
    <p>
      <van-button plain>plain</van-button>
      <van-button plain type="primary">primary</van-button>
      <van-button plain type="success">success</van-button>
      <van-button plain type="default">default</van-button>
      <van-button plain type="warning">warning</van-button>
      <van-button plain type="danger">danger</van-button>
    </p>
    <p>
      <van-button hairline>hairline</van-button>
      <van-button hairline type="primary">primary</van-button>
      <van-button hairline type="success">success</van-button>
      <van-button hairline type="default">default</van-button>
      <van-button hairline type="warning">warning</van-button>
      <van-button hairline type="danger">danger</van-button>
    </p>
    <p>
      <van-button loading>loading</van-button>
      <van-button loading type="primary">primary</van-button>
      <van-button loading type="success">success</van-button>
      <van-button loading type="default">default</van-button>
      <van-button loading type="warning">warning</van-button>
      <van-button loading type="danger">danger</van-button>
    </p>
    <hr>
    <h1>Ant Design Vue</h1>
    <hr>
    <p>
      <a-button>默认</a-button>
      <a-button type="primary">primary</a-button>
      <a-button type="dashed">dashed</a-button>
      <a-button type="default">default</a-button>
      <a-button type="text">text</a-button>
      <a-button type="link">link</a-button>
    </p>
    <p>
      <a-button ghost>ghost</a-button>
      <a-button ghost type="primary">primary</a-button>
      <a-button ghost type="dashed">dashed</a-button>
      <a-button ghost type="default">default</a-button>
      <a-button ghost type="text">text</a-button>
      <a-button ghost type="link">link</a-button>
    </p>
  </div>
</template>

<style scoped>
div#contianer{
  width: 100%;
  height:fit-content;
}
</style>
