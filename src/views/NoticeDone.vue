<script>
    
</script>

<template>
    <main class="notice-container">
        <div class="rice-content">
            <br>
            <h2>活動注意事項與聲明</h2>
            <br>
            <h6>本人/團體，保證自身身心健康且健康狀況良好，自願參加活動，
                並已詳細閱讀過活動簡章及主辦單位於活動前所公告之相關資訊，
                且同意亦保證遵守大會於活動規程中所約定事項，對於選手
                在活動中需自行負擔的危險性及責任已有一定的認知與了解，活
                動中若發生任何意外事件，願意自行負責，一切責任與主辦單位無關。
            </h6>
            <br>
            <h5>體能診斷自我評估項目</h5>
            <br>
            <ul>
                <li>是否有醫師告訴過您，您的心臟有些問題，您只能做醫生建議的運動？</li>
                <li>您是否曾在您從事體能活動時出現胸痛的現象？</li>
                <li>最近一個月，在沒從事體能活動情況下，您是否曾出現胸痛的情形？</li>
                <li>您是否曾因暈眩而失去平衡或意識的情況？</li>
                <li>從事體能活動是不是會使得您的骨骼或關節的問題更嚴重或惡化？</li>
                <li>您是否因高血壓或心臟疾病而需住院？</li>
                <li>您是否有任何不適合體能活動的原因？</li>
            </ul>
            <br>
            <h5>注意事項</h5>
            <br>
            <ul>
                <li>如果以上問題有一項為是，為了您的安全建議請勿報名本活動，並與您的醫師聯繫就診。</li>
                <li>若是採團體報名，請團隊聯絡人務必告知團員以上注意事項。</li>
                <li>本系統同時間只能操作一場報名/一個團體，若多開報名頁面或同時操作多團報名，可能會造成資料錯誤或遺失。</li>
            </ul>
            <br>
            <h6>參賽資格︰</h6>
            <ol>
                <li>未滿18歲選手報名，必須填寫線上「家長同意書」。</li>
                <li>6歲以下兒童需與18歲以上成人同時報名參賽。</li>
                <li>活動起跑前未線上填寫「家長同意書」者，主辦單位有權拒絕該未成年報名者參加，且不予退費。</li>
            </ol>
            <br>
            <ul>
                <li>參賽物資之版權為本公司所有，尺寸表使用之方式，請實際丈量平常所穿之衣服尺寸為衡量標準。</li>
                <li>所有參賽物資皆以實品為主，誤差值±3cm為國際標準容許範圍，視為正常誤差值。</li>
                <li>如欲更改紀念品尺寸，請於報名截止日期前自行至報名系統上修改，報名截止日後不得以任何理由要求尺寸變更。</li>
                <li>所有產品皆秉持著高品質、高品管製作技術，請詳細套量以免發生尺寸不合的情形，客製化訂做商品不適用鑑賞期，恕不接受任何退換。</li>
                <li>報名時請詳加評估自身體能，報名日截止後，不得以任何理由要求更換人名、報名參賽項目或申請退費。</li>
                <li>選手物資配達後，恕不受理更換，請參賽者於報名前依照簡章內提供之尺寸表謹慎選擇。</li>
            </ul>
            <br>
            <h6>本人/團體一旦報名，視為同意本網頁公告活動規程中所有規定。
                本活動規程如有未盡事宜，得由大會修正後於本網頁公布之。
                本人/團體同意活動畫面提供大會無償使用。
                一旦選擇報名即同意上述聲明及隱私政策條款！
            </h6>
            <br><br>

            <!-- Form Section -->
            <div class="rice-form">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="rice-agreement1" v-model="agreement1">
                    <label class="form-check-label" for="rice-agreement1">
                        已詳細閱讀、瞭解並同意運動報名網《<span>活動規範</span>》及《<span>免責聲明</span>》
                    </label>
                </div>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="rice-agreement2" v-model="agreement">
                    <label class="form-check-label" for="rice-agreement2">
                        已充分瞭解並同意上述《注意事項》與 簡章內容
                    </label>
                </div>
            </div>
            <br><br>
            <!-- Buttons Section -->
            <div class="rice-btn">
                <button type="button" class="btn-final" id="btn1" disabled="agee">個人報名<br><span>(僅限1人)</span></button>
                <button type="button" class="btn-final" id="btn2" disabled="agee">團體報名<br><span>(含2人以上)</span></button>
            </div>
        </div>
    </main>
</template>

<style scoped>

        .rice-content {
            background-color: white;
            padding: 20px;
            line-height: 2;
            font-size: 12px;
        }

        .rice-btn {
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 50px;
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

        .btn-final:disabled{
            background-color: #ececec;
            color: #3b3b3b;
        }

        .rice-form {
            height: 98px;
            border-radius: 8px;
            padding: 10px;
            background-color: #fde6e6;
            box-shadow: 0px 4px 4px 0px #00000040;
        }

        .rice-form span {
            color: red;
        }

        .rice-content h2 {
            font-weight: bolder;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .rice-content h5 {
            font-weight: bold;
            color: #ff6d35;
        }

        .rice-content h6 {
            font-size: 12px;
            line-height: 2;
        }
    </style>