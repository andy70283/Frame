<script setup>
import { RouterView } from 'vue-router'

</script>

<!-- template = html的畫面 -->
<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/RouterTest">RouterTest</RouterLink>
      </nav>
    </div>
  </header> -->
  <nav class="navbar">
    <div class="container">
      <!-- 漢堡按鈕 -->
      <input type="checkbox" name="" id="ham-switch-menu" hidden>
      <label for="ham-switch-menu">
        <div class="ham-switch-menu-block" tabindex="1">
          <div class="bars-icon"></div>
        </div>
      </label>
      <!-- <router-link to="HomePage" class="running-logo position-absolute start-50"></router-link> -->
      <a href="./index.html" class="running-logo position-absolute start-50"></a>
      <div class="ham-list position-absolute top-0 start-0" id="navbarContent">
        <!-- 第一列：搜尋欄 -->
        <div class="list-top">
          <label for="ham-switch-menu">
            <div class="bars-icon-inner"></div>
          </label>
        </div>
        <div class="search d-flex align-items-center">
          <div class="custom-search d-flex align-items-center justify-content-between">
            <input type="text" placeholder="搜尋">
            <button type="submit">
              <i class="bi bi-search"></i> <!-- Bootstrap 圖標 -->
            </button>
          </div>
        </div>
        <!-- 第二列：手風琴選單 1 -->
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFirst">
              <button class="accordion-button collapsed btn-news" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFirst" aria-expanded="false" aria-controls="collapseFirst">
                <div class="list-icon list-icon-news"></div>
                最新消息
                <div class="list-icon list-icon-che-right"></div>
              </button>
            </h2>
            <div id="collapseFirst" class="accordion-collapse collapse" aria-labelledby="headingFirst">
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button collapsed btn-allgames" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <div class="list-icon list-icon-allgames"></div>
                全部賽事
                <div class="list-icon list-icon-che-down"></div>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
              <a href="">
                <div class="accordion-body">
                  一般賽事
                </div>
              </a>
              <a href="">
                <div class="accordion-body">
                  親子路跑
                </div>
              </a>
              <a href="">
                <div class="accordion-body">
                  IP路跑
                </div>
              </a>
              <a href="">
                <div class="accordion-body border-bottom-0">
                  歷屆賽事
                </div>
              </a>
            </div>
          </div>
          <!-- 第三列：手風琴選單 2 -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed btn-helpcenter" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <div class="list-icon list-icon-helpcenter"></div>
                客服中心
                <div class="list-icon list-icon-che-down"></div>
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
              <a href="">
                <div class="accordion-body">
                  常見問題
                </div>
              </a>
              <a href="">
                <div class="accordion-body">
                  退費申請
                </div>
              </a>
              <a href="">
                <div class="accordion-body border-bottom-0">
                  聯絡我們
                </div>
              </a>
            </div>
          </div>
        </div>
        <router-link to="MemberCenter" class="membercenter">
          登入/會員中心
        </router-link> 
      </div>
    </div>
  </nav>
  <!-- RouterView 每個頁面的內容 -->
  <RouterView />
  <footer>
    <div class="footer-body footer-top d-flex flex-column justify-content-between">
      <div class="title">聯絡我們</div>
      <ul class="contact-info d-flex flex-column justify-content-between">
        <li>
          <a href="">信箱：fcusport@gmail.com</a>
        </li>
        <li>
          <a href="">電話：(04)2451-7250#5985</a>
        </li>
        <li>
          <a href="">地址：台中市西屯區文華路100號</a>
        </li>
      </ul>
    </div>
    <div class="footer-body footer-middle">
      <ul class="more-info d-flex flex-column justify-content-between">
        <li>
          <a href="">影音製作服務</a>
        </li>
        <li>
          <a href="">服務條款</a>
        </li>
        <li>
          <a href="">隱私權政策</a>
        </li>
      </ul>
    </div>
    <div class="footer-body footer-bottom d-flex justify-content-between">
      <a href="" class="social-icon social-icon-line"></a>
      <a href="" class="social-icon social-icon-ig"></a>
      <a href="" class="social-icon social-icon-fb"></a>
      <a href="" class="social-icon social-icon-yt"></a>
    </div>
  </footer>
</template>

<!-- 這個頁面的樣式(可有可無) -->
<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
