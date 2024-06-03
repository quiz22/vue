<template>
    <div class="login-container">
        <div class="login-box">
            <!-- 头像区域 -->
            <div class="avatar-box">
                <img class="avatar" src="/vite.svg" />
            </div>
            <!-- 表单区域 -->
            <div class="form-login">
                <!-- 登录名称 -->
                <div class="form-group">
                    <label for="username">登录名称：</label>
                    <input type="text" class="form-control" id="username" placeholder="请输入登录名称" autocomplete="off"
                        v-model.trim="username" />
                </div>
                <!-- 登录密码 -->
                <div class="form-group">
                    <label for="password">登录密码：</label>
                    <input type="password" class="form-control" id="password" placeholder="请输入登录密码"
                        v-model.trim="password" @keyup.enter="onLogin()" />
                </div>
                <!-- 登录按钮 -->
                <div class="form-group">
                    <button type="button" class="btn" @click="onLogin()">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const onLogin = () => {
        if(username.value === 'admin' && password.value === '123456'){
            router.push('/home');
            return localStorage.setItem('token', 'abc123456');
        }else{
            alert('登录失败！');
            localStorage.removeItem('token');
        }

    }
</script>

<style lang="less" scoped>
.login-container {
    background-color: #35495e;
    height: 100%;
    text-align: center;
    .login-box {
        width: 400px;
        height: 250px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);

        .form-login {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            box-sizing: border-box;
            padding: 1.5rem !important;

            .form-group {
                padding-top: 20px;

                .btn {
                    background-color: deepskyblue;
                    color: #fff;
                }

            }
        }
    }
}

.form-control {
    flex: 1;
    padding: 0.5rem;
}

.avatar-box {
    position: absolute;
    width: 100%;
    top: -65px;
    left: 0;

    .avatar {
        width: 120px;
        height: 120px;
        border-radius: 50% !important;
        box-shadow: 0 0 6px #efefef;
        background-color: #fff;
    }
}</style>