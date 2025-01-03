<script></script>

<template>
    <main class="cart-container">
        <div class="image">
            <img src="../assets/img/logo-img/chii圖片.jpg" class="img-fluid" alt="上方活動主圖">
        </div>
        <div class="activity-title">
            <div class="text">
                <div class="fs-1">Chiikawa</div>
                <div class="fs-2">路跑活動</div>
            </div>
            <div class="box">
                <div class="box-1">付款</div>
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
                    <div class="progress-step inactive">3</div>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <div class="text-center">填寫<br>個人資料</div>
                    <div class="text-center">付款</div>
                    <div class="text-center">繳費狀態</div>
                </div>
            </div>
            <div class="detail-content">
                <div class="sign">
                    <div class="title"><img src="../assets/img/img/subway_mark.png" alt="標題icon">報名明細/Registeration Details</div>
                </div><br>
                <div class="Alisa d-flex" id="namephone">Alisa(女)-0900 000 000</div>
                <div class="d-flex gap-0 flex-wrap">
                    <div class="p-2 col-6">報名項目</div>
                    <div class="p-2 col-6">一般民眾-5公里*1</div>
                    <div class="p-2 col-6">物資商品</div>
                    <div class="p-2 col-6">慵懶帆布袋/統用尺寸*1</div>
                    <div class="p-2 col-6"></div>
                    <div class="p-2 col-6">機能上衣-藍色款 / 童10*1</div>
                </div>
            </div>
            <div class="detail-content">
                <div class="sign"><img src="../assets/img/img/subway_mark.png" alt="標題icon">郵資列表/Delivery Fee</div>
                <br>
                <div class="Alisa price">
                    <div>1~1人</div>
                    <div>$130</div>
                </div>
                <div class="text1">參賽物資將於活動前1-2週寄出，請務必填寫正確的、平日(一~五)可收件之郵寄地址。</div>
            </div>
            <div class="detail-content">
                <div class="sign"><img src="../assets/img/img/subway_mark.png" alt="標題icon">費用明細/Cost Details</div>
                <br>
                <div class="d-flex gap-0 flex-wrap">
                    <div class="p-2 col-6">報名費</div>
                    <div class="p-2 col-6">$690</div>
                    <div class="p-2 col-6">物資商品</div>
                    <div class="p-2 col-6">$0</div>
                    <div class="p-2 col-6">郵資</div>
                    <div class="p-2 col-6">$130</div>
                    <div class="p-2 col-6">折扣碼折抵</div>
                    <div class="p-2 col-6">$0</div>
                </div>
                <br>
                <div class="Alisa price">
                    <div class="total">總計</div>
                    <div>$820</div>
                </div>
            </div>
            <div class="detail-content">
                <div class="sign"><img src="../assets/img/img/subway_mark.png" alt="標題icon">取貨地點/Pickup Location</div>
                <br>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="check">
                    <label class="form-check-label" id="sendaddress">
                        宅配寄送：台中市西屯區文華路100號
                    </label>
                </div>
            </div>
            <div class="detail-content">
                <div class="sign"><img src="../assets/img/img/subway_mark.png" alt="標題icon">繳費方式/Payment</div>
                <br>
                <div class="Alisa price">
                    <div class="nopay">未繳金額</div>
                    <div>$820</div>
                </div>
                <br>
                <select class="form-select" aria-label="Default select example" id="payment">
                    <option value="" selected disabled>請選擇</option>
                    <option value="1">信用卡</option>
                    <option value="2">超商繳費</option>
                </select>
                <span class="warning"></span>
                <div class="payteach">繳費教學</div>
                <div class="text2">提醒您本公司不會以任何名義及形式主動致電，要求至ATM或信用卡進行操作匯款，如有接獲+886或陌生來電，務必提高警覺，請勿受騙。</div>
                <br>
                <div class="text3">選擇線上刷卡，在刷卡授權頁面中請勿關閉頁面，請耐心等候。</div>
            </div>
            <div class="detail-content">
                <div class="sign"><img src="../assets/img/img/subway_mark.png" alt="標題icon">折扣碼/Cupon Code</div>
                <div class="mb-3">
                    <label for="formGroupExampleInput1" class="form-label"></label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="請輸入折扣碼">
                </div>
            </div>
            <div class="detail-content">
                <div class="sign"><img class="sign" src="../assets/img/img/subway_mark.png" alt="標題icon">發票/收據/Invoice</div>
                <br>
                <label for=""><span>*</span>請選擇種類</label>
                <select class="form-select" aria-label="Default select example" id="invoicetype">
                    <option value="" selected disabled>請選擇</option>
                    <option value="1">個人</option>
                    <option value="2">公司</option>
                </select>
                <br>
                <label for=""><span>*</span>請選擇方式</label>
                <select class="form-select" aria-label="Default select example" id="invoice">
                    <option value="" selected disabled>請選擇</option>
                    <option value="1">電子發票載具</option>
                    <option value="2">手機條碼載具</option>
                    <option value="3">自然人憑證條碼</option>
                    <option value="4">愛心捐碼</option>
                </select>
            </div>
            <div class="confirm-button">
                <button type="button" class="btn1">上一步 / Previous</button>
                <button type="button" class="btn2">下一步 / Next</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
        .cart-container {
            margin: 0;
            font-size: 12px;
            width: 100%;
        }

        .image {
            margin-top: 70px;
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
            justify-content: center;
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
            margin-bottom: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .box-1 {
            width: 104px;
            height: 44px;
            background-color: white;
            border: 4px solid #FF6D35;
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
            background-color: #009FE7;
            color: white;
        }

        .text-center {
            font-size: 16px;
        }

        .completed {
            background-color: #6c757d;
            color: white;
        }

        .inactive {
            background-color: #e9ecef;
            color: gray;
        }

        .line {
            flex-grow: 1;
            height: 2px;
            background-color: #000000;
            align-self: center;
        }

        .section {
            width: 80%;
            margin: auto;
        }

        .detail-content {
            margin-top: 50px;
        }

        .title {
            font-weight: bold;
        }

        .Alisa {
            background-color: #FF6D35;
            color: white;
            border-radius: 20px;
            padding: 5px 20px 5px 20px;
        }

        .price {
            display: flex;
            justify-content: space-between;
        }

        .text1 {
            padding: 10px;
        }

        .sign {
            font-size: 16px;
            font-weight: bold;
        }

        .payteach {
            margin-bottom: 30px;
            color: #009FE7;
        }

        .text2 {
            color: red;
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