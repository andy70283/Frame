<script>
    export default {
    mounted() {
        this.startCountdown();
    },
    data() {
        return {
            countdown: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        };
    },
    methods: {
        
        move(item) {
            this.$router.push(item);
        },
        startCountdown() {
            const targetDate = new Date('2025-01-19T00:00:00').getTime();
            setInterval(() => {
                const now = new Date().getTime();
                const distance = targetDate - now;

                this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
            }, 1000);
        }
    },
}
</script>

<template>
    <main class="activity-container">
        <div class="bannar-img">
            <img class="img-fluid" src="../assets/img/logo-img/chii圖片.jpg" alt="上方活動主圖">
        </div>
        <div class="card d-flex flex-column justify-content-center align-items-center">
            <div class="card-countdown d-flex flex-column justify-content-center align-items-center">
                <div class="card-top">
                    報名截止剩餘
                </div>
                <div class="card-body" id="time">{{ countdown.days }}天{{ countdown.hours }}時{{ countdown.minutes }}分{{ countdown.seconds }}秒</div>
            </div>
            <div class="card1">
                <div class="card-title">
                    Chiikawa
                </div>
                <div class="card-title">
                    路跑活動
                </div>
            </div>
            <div class="card2 d-flex flex-column justify-content-between align-items-center">
                <div class="card-info">
                    2025年1月19日(星期日)
                </div>

                <a href="https://reurl.cc/b3G44l" class="card-info">
                    台中市西屯區中央球場
                </a>

                <div class="card-info">
                    0800-271-637(工作日9:00~18:00)
                </div>

                <div class="card-info">
                    05-236-5187(手機直撥)
                </div>
            </div>
            <button @click="move('/notice')" class="btn-final" >
                    我要報名
                    <br>
                    <span>
                        REGISTER
                    </span>
            </button>
        </div>
    </main>
</template>

<style scoped>
.activity-container {
    width: 100%;
}

.bannar-img {
    width: 100%;
    height: 246px;
    background-position: center;
}

.img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.line {
    width: 50%;
    height: 2px;
    background-color: rgb(255, 109, 53);
    margin: 0 auto;
}

.card {
    height: 432px;
    border: none;
    margin-bottom: 20px;
}

.card-countdown {
    width: 205px;
    height: 88px;
    border-bottom: 3px solid #FF6035;
    padding: 20px 0px;
}

.card-top {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
}

.card-body {
    width: 220px;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    padding: 10px;
    text-align: center;
}

.card-title {
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    margin: 0;
}

.card1 {
    margin-top: 30px;
}

.card2 {
    margin-top: 30px;
    font-size: 13px;
    width: 273px;
    height: 88px;
    line-height: 16px;
}

.btn-final {
    margin-top: 30px;
    width: 153px;
    height: 76px;
    background-color: #FF6D35;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 700;
    box-shadow: 0px 4px 4px 0px #00000040;
    line-height: 20px;
    color: white;
}

.btn-final:hover {
    background-color: #009fE7;
}

.btn-final:active {
    opacity: 0.7;
}

.btn-final span {
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
}
</style>