<script></script>

<template>
    <main class="rice-container d-flex justify-content-center align-items-center">
        <!-- Login Card -->
        <div class="rice-card">
            <div class="rice-card-header">會員中心</div>

            <!-- Tabs -->
            <div class="rice-nav-tabs">
                <a href="#" class="active">會員登入</a>
                <a href="#" class="active-none" tabindex="1">會員註冊</a>
            </div>

            <!-- Form -->
            <form>
                <label for="email" class="rice-form-label">帳號 (Email格式)</label>
                <input type="email" id="email" class="rice-form-control" placeholder="請輸入您的Email">
                <br>
                <div class="rice-form-group rice-form-group-flex">
                    <label for="password" class="rice-form-label">密碼</label>
                    <a href="#" class="rice-forgot-password">忘記密碼</a>
                </div>
                <input type="password" id="password" class="rice-form-control" placeholder="請輸入密碼">


                <label for="captcha" class="rice-form-label" id="code">驗證碼</label>
                <input type="text" id="captcha" class="rice-form-control rice-form-control-last" placeholder="輸入驗證碼">
                <div class="rice-box">
                    <span class="rice-captcha" id="testcode">QeS24a</span>
                    <button type="button" class="rice-refresh-btn" aria-label="重新整理驗證碼" id="ref">
                        <img src="../assets/img/img/ic_baseline-change-circle.png" alt="刷新驗證碼">
                    </button>
                </div>
                <button type="submit" class="rice-btn" id="sign">登入</button>
            </form>
        </div>
    </main>
</template>

<style scoped>
        .rice-container {
            padding: 30px;
            line-height: 2;
            font-size: 12px;
            font-family: 'Arial', sans-serif;
            color: #3b3b3b;
        }

        .rice-card {
            width: 343px;
            height: 616px;
            border-radius: 8px;
            border: 2px solid black;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 40px;
        }

        .rice-card-header {
            text-align: center;
            font-weight: 400;
            margin-bottom: 20px;
            font-size: 20px;
        }

        .rice-nav-tabs {
            display: flex;
            justify-content: center;
            border-bottom: 1px solid #ddd;
            margin-bottom: 30px;
        }

        .rice-nav-tabs a {
            flex: 1;
            text-align: center;
            padding: 10px;
            text-decoration: none;
            font-size: 16px;
            font-weight: 400;
            color:#585461;
            border-bottom: 2px solid transparent;
        }
    
        .rice-nav-tabs .active {
            border-bottom-color: #FF6D35;
        }

        .rice-nav-tabs a:focus {
            color: #FF6D35;
            border-bottom-color: #FF6D35;
        }

        .rice-form-label {
            display: block;
            margin-bottom: 5px;
        }

        .rice-form-group-flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-right: 5px;
        }

        .rice-form-control {
            width: 100%;
            height: 42px;
            padding: 10px;
            margin-bottom: 20px;
            border: none;
            background-color: #f1f1f1;
            border-radius: 10px;
        }

        .rice-form-control-last {
            margin-bottom: 5px;
        }

        .rice-form-control:focus {
            outline: none;
            border-color: #FF6D35;
        }

        .rice-forgot-password {
            text-align: right;
            font-size:12px;
            color: #9b2E2E;
        }

        .rice-box {
            display: flex;
            align-items: center;
        }

        .rice-refresh-btn {
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding: 10px;
            display: inline-block;
        }

        .rice-captcha {
            display: inline-block;
            padding: 5px 15px;
            background-color: #f5f2a5;
            border: 1px solid #585461;
            color: #000;
            border-radius: 8px;
            width: 80px;
            text-align: center;
        }

        .rice-btn {
            display: block;
            width: 100%;
            padding: 4px;
            background-color: #FF6D35;
            color: #fff;
            text-align: center;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 40px;
        }

        .rice-btn:hover {
            background-color: #009FE7;
        }

        .rice-btn:active {
            opacity: 0.7;
        }
        #code {
            display: flex;
            justify-content: space-between;
        }
</style>