<script>
import router from '@/router';
export default{
    methods: {
        submit(item){
            router.push(item);
        }
    },
}
</script>

<template>
    <main class="homepage-container">
        <!------------------------------------------------- 輪播卡片 ---------------------------------------------------->
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <a href="activity-done.html"><img class="d-block w-100" src="../assets/img/輪播卡片.png" alt="輪播卡片-1"></a>
                </div>
                <div class="carousel-item">
                    <a href="activity-done.html"><img class="d-block w-100" src="../assets/img/輪播卡片1.png" alt="輪播卡片-2"></a>
                </div>
                <div class="carousel-item">
                    <a href="activity-done.html"><img class="d-block w-100" src="../assets/img/輪播卡片2.png" alt="輪播卡片-3"></a>
                </div>  
                <div class="carousel-item">
                    <a href="activity-done.html"><img class="d-block w-100" src="../assets/img/輪播卡片3.png" alt="輪播卡片-4"></a>
                </div>
                <div class="carousel-item">
                    <a href="activity-done.html"><img class="d-block w-100" src="../assets/img/輪播卡片4.png" alt="輪播卡片-5"></a>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden"></span>
            </button>
        </div>
        <!------------------------------------------------ 活動資訊及月曆 ------------------------------------------>
        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li class="nav-item" role="presentation" id="hometab">
                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
                    role="tab" aria-controls="home-tab-pane" aria-selected="true">
                    <img class="big-icon" src="../assets/img/home.jpg" alt="活動頁圖示">
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button"
                    role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                    <img class="big-icon" src="../assets/img/date.jpg" alt="月曆月圖示">
                </button>
            </li>
        </ul>
        <!-------------------------------------------------- 活動選項 --------------------------------------------->
        <div class="tab-content d-flex justify-content-center" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">IP聯名活動
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">親子活動
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">一般賽事
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <!------------------------------------------ IP活動卡片  -------------------------------------------------->
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab" tabindex="0">
                            <div class="card shadow" @click="submit('/activityabc')">
                                <img src="../assets/img/card1-1.png" class="card-img-top" alt="IP聯名-活動報名圖片-1" >
                                <div class="card-body">
                                    <span class="badge">報名中</span>
                                    <div class="fs-4">CHIIKAWA路跑</div>
                                    <div class="fs-6">活動簡介...</div>
                                </div>
                            </div>
                            <div class="card shadow" @click="submit('/activityabc')">
                                <img src="../assets/img/card1-2.png" class="card-img-top" alt="IP聯名-活動報名圖片-2">
                                <div class="card-body">
                                    <span class="badge">報名中</span>
                                    <div class="fs-4">史酷比路跑</div>
                                    <div class="fs-6">活動簡介...</div>
                                </div>
                            </div>
                            <div class="card shadow">
                                <img src="../assets/img/card1-3.png" class="card-img-top" alt="IP聯名-活動報名圖片-3">
                                <div class="card-body" @click="submit('/activityabc')">
                                    <span class="badge">報名截止</span>
                                    <div class="fs-4">OVERWATCH路跑</div>
                                    <div class="fs-6">活動簡介...</div>
                                </div>
                            </div>
                    </div>
                    <!------------------------------------------ 親子活動卡片  -------------------------------------------------->
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                        tabindex="0">
                            <div class="card shadow" @click="submit('/activityabc')">
                                <img src="../assets/img/card2-1.png" class="card-img-top" alt="親子-活動報名圖片-1">
                                <div class="card-body">
                                    <span class="badge">報名中</span>
                                    <div class="fs-4">汪汪隊親子路跑</div>
                                    <div class="fs-6">活動簡介...</div>
                                </div>
                            </div>
                            <div class="card shadow" @click="submit('/activityabc')">
                                <img src="../assets/img/card2-2.png" class="card-img-top" alt="親子-活動報名圖片-2">
                                <div class="card-body">
                                    <span class="badge">報名中</span>
                                    <div class="fs-4">全國親子路跑</div>
                                    <div class="fs-6">活動簡介...</div>
                                </div>
                            </div>
                            <div class="card shadow" @click="submit('/activityabc')">
                                <img src="../assets/img/card2-3.png" class="card-img-top" alt="親子-活動報名圖片-3">
                                <div class="card-body">
                                    <span class="badge">報名截止</span>
                                    <div class="fs-4">台中親子公益路跑</div>
                                    <div class="fs-6">活動簡介...</div>
                                </div>
                            </div>
                    </div>
                    <!------------------------------------------ 一般賽事卡片  -------------------------------------------------->
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                        tabindex="0">
                            <div class="card shadow" @click="submit('/activityabc')">
                                <img src="../assets/img/card3-1.png" class="card-img-top" alt="一般-活動報名圖片-1">
                                <div class="card-body">
                                    <span class="badge">報名中</span>
                                    <div class="fs-4">長榮世界路跑</div>
                                    <div class="fs-6">活動簡介...</div>
                                </div>
                            </div>
                            <div class="card shadow" @click="submit('/activityabc')">
                                <img src="../assets/img/card3-2.png" class="card-img-top" alt="一般-活動報名圖片-2">
                                <div class="card-body">
                                    <span class="badge">報名中</span>
                                    <div class="fs-4">台中國道馬拉松</div>
                                    <div class="fs-6">活動簡介...</div>
                                </div>
                            </div>
                            <div class="card shadow" @click="submit('/activityabc')">
                                <img src="../assets/img/card3-3.png" class="card-img-top" alt="一般-活動報名圖片-3">
                                <div class="card-body">
                                    <span class="badge">報名截止</span>
                                    <div class="fs-4">台南市區路跑</div>
                                    <div class="fs-6">活動簡介...</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <!---------------------------------------------- 月曆 ---------------------------------------------->
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <div class="calender">
                    <ul class="month">
                        <li>
                            <span class="month-text">January</span>
                            <span class="year-text">2016</span>
                        </li>
                        <span class="prev">&#10094;</span>
                        <span class="next">&#10095;</span>
                    </ul>
                    <ul class="weeks">
                        <li>SAT</li>
                        <li>SUN</li>
                        <li>MON</li>
                        <li>TUE</li>
                        <li>WED</li>
                        <li>THU</li>
                        <li>FRI</li>
                    </ul>
                    <ul class="days"></ul>
                </div>
                <div class="result"></div>
            </div>
        </div>
        </main>
</template>

<style scoped>
        .nav-tabs {
            margin-top: 20px;
            margin-bottom: 20px;
            gap: 80px;
            border: none;
            --bs-nav-tabs-border-color: transparent;
            --bs-nav-tabs-link-active-border-color: transparent;
            --bs-nav-tabs-link-hover-border-color: transparent;
        }

        .nav-pills .nav-link {
            color: #3b3b3b;
            background-color: #ececec;
        }

        .nav-pills {
            gap: 10px;
            font-size: 12px;
            --bs-nav-pills-link-active-bg: #FF6D35;
        }

        .nav-link:hover {
            color: #009FE7;
        }

        .big-icon {
            width: 40px;
            height: 40px;
        }

        .card {
            width: 340px;
            height: 292px;
            border-radius: 14px;
            border: none;
            margin-bottom: 20px;
        }

        .badge {
            color: white;
            background-color: #FF6D35;
            border-radius: 13px;
            padding: 5px 10px;
        }

        .fs-6 {
            font-size: 12px !important;
        }

        .card1 {
            margin: auto;
            border: 2px solid #ffb65f;
            border-radius: 5px;
            padding: 10px;
            min-height: 108.5px;
        }

        /* -----------------------------------月曆卡css ------------------------------------------*/

        main ul {
            list-style-type: none;
            text-align: center;
            font-family: Verdana, sans-serif;
        }

        main li:not(:first-child) {
            cursor: pointer;
        }

        .calender {
            width: 340px;
            margin: auto;
            border-radius: 15px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, .5);
            padding: 10px 0px;
        }

        .calender .month {
            padding: 10px 0px 5px;
            color: #3b3b3b;
            width: 100%;
            position: relative;
        }

        .calender .month .next,
        .calender .month .prev {
            position: absolute;
            top: calc(50% - 15px);
            cursor: pointer;
            padding: 5px;
            display: block;
            color: #FF6D35;
        }

        .calender .month .prev {
            left: 10px;
        }

        .calender .month .next {
            right: 10px;
        }

        .calender .month .next:hover,
        .calender .month .prev:hover {
            color: #009FE7;
        }

        .calender .weeks {
            display: flex;
            padding: 0px 5px;
        }

        .calender .weeks li {
            width: 47px;
            position: relative;
            animation: motion 2s;
            padding: 10px;
            font-size: 12px;
        }


        .calender .days {
            display: flex;
            flex-wrap: wrap;
            padding: 0px 5px;
        }

        .calender .days li {
            flex-basis: calc(100% / 7);
            padding: 5px 0;
            color: #3b3b3b;
            border-radius: 10px;
            /* background-color: #bdc3c7; */
        }

        .calender .days li:hover {
            background-color: #FF6D35;
            color: white;
            opacity: 0.8;
        }

        /* -------------------------------------------------------------------------------- */

        /* 活動資訊區 */

        .result {
            margin-top: 20px;
            margin-bottom: 20px;
        }

        #home-tab,
        #profile-tab {
            width: 20px;
            height: 20px;
        }
    </style>