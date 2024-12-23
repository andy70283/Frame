<template>
    <main class="register-container">
        <div class="image">
            <img src="../assets/img/logoimg/chii圖片.jpg" class="img-fluid" alt="上方活動主圖">
        </div>
        <div class="activity-title">
            <div class="text">
                <div class="fs-1">Chiikawa</div>
                <div class="fs-2">路跑活動</div>
            </div>
            <div class="box">
                <div class="box-1">個人報名</div>
            </div>
        </div>
        <div class="section">
            <div class="step my-5">
                <div class="d-flex justify-content-between align-items-center">
                    <!-- Step 1 -->
                    <div class="progress-step active">1</div>
                    <div class="line"></div>
                    <!-- Step 2 -->
                    <div class="progress-step inactive">2</div>
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
            <div class="form">
                <div class="mb-4">
                    <label for="nationality" class="form-label"><span>*</span>國家 / Country</label>
                    <select id="country" class="input-check form-select">
                        <option value="" selected disabled>請選擇</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="JAPAN">JAPAN</option>
                        <option value="UK">UK</option>
                        <option value="China">China</option>
                        <option value="USA">USA</option>
                        <option value="ITALY">ITALY</option>
                        <option value="KOREA">Korea</option>
                    </select>
                    <span class="warning"></span>
                </div>
                <div class="mb-4">
                    <label for="name" class="form-label"><span>*</span>姓名 / Name</label>
                    <input type="text" id="name" class="input-check form-control" placeholder="請輸入姓名">
                    <span class="warning"></span>
                </div>
                <div class="mb-4">
                    <label for="gender" class="form-label"><span>*</span>性別 / Gender</label>
                    <select id="gender" class="input-check form-select">
                        <option value="" selected disabled>請選擇</option>
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                    <span class="warning"></span>
                </div>
                <div class="mb-4">
                    <label for="idnumber" class="form-label"><span>*</span>身分證字號 / ID Number</label>
                    <input type="text" id="idnumber" class="input-check form-control" placeholder="身分證字號">
                    <span class="warning"></span>
                </div>
                <div class="mb-4">
                    <label for="birthday" class="form-label"><span>*</span>生日 / Birthday</label>
                    <div class="d-flex gap-2">
                        <select class="form-select" id="birthyear"></select>
                        <select class="form-select" id="birthmonth"></select>
                        <select class="form-select" id="birthdate"></select>
                    </div>
                    <span class="warning1"></span>
                </div>
                <div class="mb-4">
                    <label for="email" class="form-label"><span>*</span>信箱 / Email</label>
                    <input type="email" id="email" class="input-check form-control" placeholder="請輸入信箱">
                    <span class="warning"></span>
                </div>
                <div class="mb-4">
                    <label for="city" class="form-label"><span>*</span>縣市 / City</label>
                    <select id="city" class="input-check form-select" ></select>
                    <span class="warning"></span>
                </div>
                <div class="mb-4">
                    <label for="district" class="form-label"><span>*</span>鄉鎮市區 / District</label>
                    <select id="district" class="input-check form-select"></select>
                    <span class="warning"></span>
                </div>
                <div class="mb-4">
                    <label for="roadname" class="form-label"><span>*</span>路名 / Road Name</label>
                    <select id="roadname" class="input-check form-select">
                        <option value="" selected disabled>請選擇</option>
                        <option value="中華路">中華路</option>
                        <option value="三民路">三民路</option>
                        <option value="中山路">中山路</option>
                        <option value="大誠街">大誠街</option>
                        <option value="公園路">公園路</option>
                    </select>
                    <span class="warning"></span>
                </div>
                <div class="mb-4">
                    <label for="address" class="form-label"><span>*</span>路,巷,弄,號 / Road,Lane,Lane,Number</label>
                    <input type="text" id="address" class="input-check form-control" placeholder="請選行政區後填物資寄送地址/address">
                    <span class="warning"></span>
                </div>
                <div class="mb-4">
                    <label for="address" class="form-label"><span>* 確認寄送地址/Address</span></label>
                    <div class="viewpostage">檢視郵資/View Postage</div>
                    <input class="form-control" type="text" id="automatic" placeholder="資料自動帶入" aria-label="Disabled input example" disabled>
                    <div class="addresscheck">煩請務必確認完整地址 !</div>
                </div>
            </div>
        </div>
        <div class="box-2">
            <div class="box-2text-m">※ 若非現場報到的跑者，則物資寄至活動現場時，仍需收取郵資費，活動當天在現場領取物資。</div>
            <div class="box-2text-s">（Postage fees will still apply for race packets sent to the event venue. On
                the day of the event, packages can be collected at the venue. ）</div>
        </div>
        <div class="section">
            <div class="mb-4">
                <label for="mobilephone" class="form-label"><span>*</span>手機 / Mobile Phone</label>
                <input type="text" id="mobilephone" class="input-check form-control" placeholder="請輸入手機">
                <span class="warning"></span>
            </div>
            <div class="mb-4">
                <label for="mobilephone" class="form-label"><span>*</span>市話 / Phone</label>
                <input type="text" id="phone" class="input-check form-control" placeholder="請輸入市話">
                <span class="warning"></span>
            </div>
            <div class="mb-4">
                <label for="emergencycontactname" class="form-label"><span>*</span>緊急聯絡人姓名
                    Emergency Contact Name</label>
                <input type="text" id="emergencycontactname" class="input-check form-control" placeholder="緊急聯絡人姓名">
                <span class="warning"></span>
            </div>
            <div class="mb-4">
                <label for="emergencymobilephone" class="form-label"><span>*</span>緊急聯絡人手機
                    Emergency Mobile Phone</label>
                <input type="text" id="emergencymobilephone" class="input-check form-control" placeholder="緊急聯絡人手機">
                <span class="warning"></span>
            </div>
            <div class="confirm-button">
                <button type="button" class="btn2">下一步 / Next</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
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
            justify-content: center;
            align-items: center;
        }

        .confirm-button {
            display: flex;
            justify-content: end;
            margin-top: 50px;
            margin-bottom: 30px;
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

        .inactive {
            background-color: #e9ecef;
            color: gray;
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
            padding: 24px;
            margin-bottom: 14px;
            box-shadow: 0px 4px 4px 0px #00000040;
        }

        .box-2text-m {
            font-size: 15px;
            font-weight: bold;
        }

        .box-2text-s {
            font-size: 11px;
            /* margin-top: 5px; */
        }
        .warning {
            color: red;
            position: absolute;
            font-size: 14px;
        }
        .warning1 {
            color: red;
            position: absolute;
            font-size: 14px;
        }
    </style>