<template>
  <b-navbar class="navbar nav-bar-color" toggleable="md" fixed="top">
    <b-container class="container nav-header pt-0 pb-0 pl-0 pr-0 pt-md-2 pb-md-2 pl-md-5 pr-md-5 mt-0 mt-md-4">

      <div class="d-flex">
        <b-navbar-brand :to="{ name: 'about' }" class="logo-wrapper">
          <img class="logo mr-4" src="@/assets/image/ProTradex Logo-02@2x.png" alt="">
        </b-navbar-brand>
        <div class="d-flex justify-content-center align-items-center">
          <div class="d-md-block d-none">
            <div class="d-flex justify-content-center align-items-center">
              <b-navbar-nav class="text-center">
                <template v-for="(item, idx) in navbarArr">
                  <b-nav-item class="nav-item pl-1 pr-1 pl-lg-4 pr-lg-4" :key="idx"
                              :class="{ 'active': curRouteName === item.name || $route.path.includes(item.name) }"
                              v-if="!item.children" @click="routerTo(0, item.name)">
                    {{ $t(item.title) }}
                  </b-nav-item>
                </template>
              </b-navbar-nav>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="d-sm-block d-md-none">
          <img src="@/assets/image/b-menu.png" class="menu" :class="visible ? null : 'collapsed'"
               :aria-expanded="visible ? 'true' : 'false'" aria-controls="nav-collapse"
               @click="visible = !visible">
          <b-collapse id="nav-collapse" v-model="visible" is-nav>
            <b-navbar-nav class="text-center">
              <template v-for="(item, idx) in navbarArr">
                <b-nav-item class="nav-item" :key="idx"
                            :class="{ 'active': curRouteName === item.name || $route.path.includes(item.name) }"
                            v-if="!item.children" @click="routerTo(0, item.name,item.url)">
                  {{ $t(item.title) }}
                </b-nav-item>
              </template>
            </b-navbar-nav>
          </b-collapse>
        </div>
        <div class="d-flex align-items-center">
          <img @click="openUrlFun('https://twitter.com/Pro_Tradex')" class="href ml-4"
               src="@/assets/image/twer@2x.png" alt="">
          <img @click="openUrlFun('https://t.me/ProTradexAnnouncements')" class="href ml-3"
               src="@/assets/image/telegram@2x.png" alt="">
          <div class="lang-main ml-2 d-flex align-items-center">
            <b-dropdown text="">
              <template v-slot:button-content>
                <div class="d-flex align-items-center">
                  <img src="@/assets/lang.png" class="lang" alt="">
                </div>
              </template>
              <div class="dropdownItem">
                <b-dropdown-item @click="changeLang('en')" :class="{'b-dropdown-item-active': lang == 'en'}">
                  <img width="21" src="@/assets/image/en.png" alt="">
                  English
                </b-dropdown-item>
                <b-dropdown-item @click="changeLang('ko')" :class="{'b-dropdown-item-active': lang == 'ko'}">
                  <img width="21" src="@/assets/image/ko.png" alt="">
                  한국어
                </b-dropdown-item>
                <b-dropdown-item @click="changeLang('mela')" :class="{'b-dropdown-item-active': lang == 'mela'}">
                  <img width="21" src="@/assets/image/mela.png" alt="">
                  Melayu
                </b-dropdown-item>
                <b-dropdown-item @click="changeLang('cn')" :class="{'b-dropdown-item-active': lang == 'cn'}">
                  <img width="21" src="@/assets/image/cn.png" alt="">
                  简体中文
                </b-dropdown-item>
              </div>
            </b-dropdown>
          </div>
        </div>
      </div>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    curRouteName() {
      return this.$store.state.curRouteName
    },
    lang() {
      return this.$store.state.lang || 'en';
    }
  },
  data() {
    return {
      visible: false,
      navbarArr: [{
        title: 'About',
        name: 'about'
      },
        {
          title: 'Products',
          name: 'product',
        },
        {
          title: 'Partners',
          name: 'partner',
        },
        {
          title: 'FAQ',
          name: 'faq',
        },
        {
          title: 'Docs',
          name: '0',
          url: 'https://protradex.gitbook.io/protradex-docs/'
        },
      ],
    }
  },
  mounted() {
    this.$i18n.locale = this.lang;
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  methods: {
    changeLang(lang) {
      this.visible = false;
      this.$i18n.locale = lang;
      this.$store.commit('CHANGE_LANG', lang);
    },
    routerTo(type, url) {
      if (type == 0 && url != 0) {
        this.$router.push({
          name: url
        });
      } else {
        window.open('https://protradex.gitbook.io/protradex-docs/','')
      }
    },
    openUrlFun(url){
      window.open(url,'')
    },
    onResize() {
      $("body").css("padding-top", $(".navbar").outerHeight());
      $(".navbar-collapse").css("top", $(".navbar").outerHeight());
    },
  }
}
</script>

<style lang="scss" scoped>
.container {

  // logo
  .logo-wrapper {
    .logo {
      width: 139px;
      height: 43px;
      font-size: 60px;
    }
  }

  .menu {
    width: 22px;
    height: 18px;
    cursor: pointer;
  }

  .href {
    width: 23px;
    height: 19px;
    cursor: pointer;
  }

  .lang-main {
    font-size: 16px;
    font-family: AlibabaPuHuiTiB;
    color: #FFFFFF;

    .lang {
      width: 23px;
      height: 23px;
      cursor: pointer;
    }

    /deep/ .btn-secondary {
      border: none;
      box-shadow: none;
      background: transparent;

      &:after {
        display: none;
      }
    }

    /deep/ .dropdown-menu {
      padding-top: 30px;
      left: auto !important;
      right: 0 !important;
      top: 30px;
      min-width: 120px;
      font-size: 16px;
      font-family: AlibabaPuHuiTiR;
      border: 0;
      background: transparent;
      color: #171B22;

      .dropdownItem {
        padding: 10px 0;
        background: #FFFFFF;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
      }

      .b-dropdown-item-active {
        a {
          color: #FDC500 !important;
        }
      }
    }
  }

  // 右侧collapse
  .navbar-nav {
    .nav-item {
      text-align: center;
      position: relative;

      > .nav-link {
        font-size: 14px;
        color: rgba(0, 0, 0, 1) !important;
      }

      &.active,
      &.active > .nav-link {
        &::after {
          position: absolute;
          content: "";
          left: 50%;
          right: 0;
          bottom: 5px;
          height: 1px;
          background-color: rgba(0, 0, 0, 1);
          width: 24px;
          transform: translateX(-50%);
        }
      }
    }
  }

  .navbar-collapse {
    width: 100%;
    padding: 5px 0;
    background-color: #FFFFFF;
    position: fixed;
    left: 0;

    .navbar-nav {
      .nav-item {
        padding: 2px 10px;

        & /deep/ .dropdown-menu {
          background-color: transparent;
        }
      }
    }
  }
}

// 高亮文字
// .container /deep/ .navbar-nav .active>.nav-link {
// 	color: rgba(255, 255, 255, 1) !important;
// }
/deep/ .dropdown-toggle {
  font-size: 12px;
  color: rgba(0, 0, 0, 1) !important;
}

// dropdown hover事件
.container /deep/ .dropdown:hover > .dropdown-menu {
  margin: 0;
  display: inline-block;

  .dropdown-item {
    background-color: transparent !important;
  }
}

.container /deep/ .dropdown > .dropdown-toggle:active {
  /*Without this, clicking will make it sticky*/
  pointer-events: none;
}
</style>
