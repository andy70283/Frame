<script setup></script>
<template>
<main class="payment-container">
        <div class="image">
            <img src="./logo-img/chii圖片.jpg" class="img-fluid" alt="上方活動主圖">
        </div>
        <div class="activity-title">
            <div class="text">
                <div class="fs-1">Chiikawa</div>
                <div class="fs-2">路跑活動</div>    
            </div>
            <div class="box">
                <div class="box-1">繳費狀態</div>
            </div>
        </div>
        <div class="section">
            <div class="step my-5">
                <div class="d-flex justify-content-between align-items-center">
                    <!-- Step 1 -->
                    <div class="progress-step active">1</div>
                    <div class="line"></div>
                    <!-- Step 2 -->
                    <div class="progress-step active">2</div>
                    <div class="line"></div>
                    <!-- Step 3 -->
                    <div class="progress-step active">3</div>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <div class="text-center">填寫<br>個人資料</div>
                    <div class="text-center">付款</div>
                    <div class="text-center">繳費狀態</div>
                </div>
            </div>
            <div class="content">
                <div class="title-1">
                    <div><img src="./img/subway_mark.png" alt="標題icon">&ensp; 繳費狀態 / Payment status</div>
                </div>
                <div class="form">
                    <div class="f1">
                        <div class="text-1">繳費狀態</div>
                        <div class="text-2">未完成</div>
                    </div>
                    <div class="f2">
                        <div class="text-1">繳費金額</div>
                        <div class="text-2" id="price">$820</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">報名費</div>
                        <div class="text-2">$690</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">物資商品</div>
                        <div class="text-2">$0</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">郵資</div>
                        <div class="text-2">$130</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">折扣碼折抵</div>
                        <div class="text-2" id="Discount">$0</div>
                    </div>
                </div>
                <div class="title-2">
                    <div><img src="./img/subway_mark.png" alt="標題icon">&ensp; 個人資料 / Confirm information</div>
                </div>
                <div class="form-2">
                    <div class="f3">
                        <div class="text-1">姓名</div>
                        <div class="text-2" id="name">Alisa</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">國家</div>
                        <div class="text-2" id="country">台灣</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">生日</div>
                        <div class="text-2" id="birth">1997.XX.XX</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">年齡</div>
                        <div class="text-2" id="age">28</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">身分證字號</div>
                        <div class="text-2" id="idnumber">LXXXXXXXXX</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">性別</div>
                        <div class="text-2" id="gender">女</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">信箱</div>
                        <div class="text-2" id="email">XXXXX@gmail.com</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">地址</div>
                        <div class="text-2" id="address">台中市西屯區文華路100號</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">寄送地址</div>
                        <div class="text-2" id="sendaddress">台中市西屯區文華路100號</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">手機</div>
                        <div class="text-2" id="mobilephone">09XXXXXXXX</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">市話</div>
                        <div class="text-2" id="phone">04-23XXXXXX</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">緊急聯絡人</div>
                        <div class="text-2" id="emergencycontactname">何小珍</div>
                    </div>
                    <div class="f3">
                        <div class="text-1">緊急聯絡人</div>
                        <div class="text-2" id="emergencymobilephone"></div>
                    </div>
                </div>
                <div class="remind">
                    <u class="remindtext">所有退款請求須於購買後30天內提出，並需滿足退款條件，詳情請參閱我們的退款政策。</u>
                </div>
            </div>
            <div class="confirm-button">
                <a href="cart-done.html"><button class="btn1">上一步 / Previous</button></a>
                <a href="index.html"><button class="btn2">確認報名 / Confirm</button></a>
            </div>
    
        </div>
    </main>
</template>
<style>

.image {
width: 100%;
height: 371px;
background-position: center;
}

.img-fluid {
width: 100%;
height: 100%;
object-fit: cover;
}

.activity-title {
    font-size: 36px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}

span {
    color: red;
}
label {
    font-weight: bold;
}
.text {
    margin-top: 40px;
    margin-bottom:15px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}
.box-1 {
    width: 104px;
    height: 44px;
    background-color: white;
    border: 4px solid orangered;
    border-radius: 10px;
    color: black;
    font-size: 20px;
    line-height: 36px;
}

.box {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-bottom: 40px;
}

.progress-step {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 18px;
    font-weight: bold;
}

.active {
    background-color: #007bff;
    color: white;
}

.completed {
    background-color: #6c757d;
    color: white;
}

.line {
    flex-grow: 1;
    height: 2px;
    background-color: #6c757d;
    align-self: center;
}

.section {
    width: 80%;
    margin: auto;
}

.form-check-label {
    font-size: 12px;
    font-weight: normal;
}

.viewpostage {
    color: #007bff;
    font-size: 12px;
    margin-bottom: 5px;
}
.addresscheck {
    color: gray;
    font-size: 12px;
    margin-top: 5px;
}
.box-2 {
    background-color: #FFE8E8;
    width: 100%;
    height: 143px;
    padding: 15px;
    margin-bottom: 14px;
}
.box-2text-m {
    font-size: 15px;
    font-weight: bold;
}

.box-2text-s {
    font-size: 11px;
    /* margin-top: 5px; */
}
.title-1 , .title-2 {
    font-weight: bold;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
}

.content {
    width: 100%;
}

.form {
    margin-bottom: 50px;
}
.form-2 {
    margin-bottom: 30px;
}


.f1, .f2, .f3 {
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-size: 12px;
}
.f1 {
    background-color: grey;
}
.f2 {
    background-color: pink;
}
.f3 {
    background-color: white;
}

.remind {
    width: 70%;
    margin: auto;
    font-size: 16px;
    font-weight: bold;
}

.confirm-button {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 30px;
}

.btn1 {
    font-size: 14px;
    width: 146px;
    height: 39px;
    background-color: white;
    border: 2px solid #009FE7;
    border-radius: 10px;
    font-weight: bold;
}

.btn1:hover {
    color: white;
    background-color: #009FE7;
}

.btn1:active {
    color: white;
    background-color: #009FE7;
    opacity: 0.7;
}

.btn2 {
    font-size: 14px;
    width: 146px;
    height: 39px;
    background-color: white;
    border: 2px solid #FF6D35;
    border-radius: 10px;
    font-weight: bold;
}

.btn2:hover {
    color: white;
    background-color: #FF6D35;
}

.btn2:active {
    color: white;
    background-color: #FF6D35;
    opacity: 0.7;
}

</style>