<template>
  <div class="home">
    <b-container>
      <div class="ai-content mt-3 mb-3 mt-md-4 mb-md-5 pt-3 pb-3 pt-md-5 pb-md-5 pl-0 pr-0 pl-md-5 pr-md-5">
        <b-row align-v="center">
          <b-col xs="12" md="6" class="d-md-none d-block">
            <div class="ai-content-1 font-50-40-36">{{ $t('FAQ') }}</div>
            <div class="ai-content-2 font-30-24-16">{{ $t('frequently asked questions') }}</div>
          </b-col>
          <b-col xs="12" md="6" class="mt-4 mt-md-0">
            <img class="w-75 m-auto d-flex align-items-center justify-content-center" src="@/assets/image/faq.png"
                 alt="">
          </b-col>
          <b-col xs="12" md="6" class="d-none d-md-block">
            <div class="ai-content-1 font-50-40-36">{{ $t('FAQ') }}</div>
            <div class="ai-content-2 font-30-24-16">{{ $t('frequently asked questions') }}</div>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-container>
      <div class="faq-content mt-3 mb-3 mt-md-5 mb-md-5 pl-0 pr-0 pl-md-5 pr-md-5">
        <div class="list" role="tablist">
          <b-card v-for="(item, index) in options" :key="index" no-body class="list-item">
            <b-card-header header-tag="header" role="tab">
              <b-button block :class="item.visible ? null : 'collapsed'"
                        :aria-expanded="item.visible ? 'true' : 'false'" @click="item.visible = !item.visible"
                        variant="info">
                <div class="list-item-1 d-flex align-items-center justify-content-between">
                  <div class="list-item-1-1">{{ $t(item.text) }}</div>
                  <img width="15" height="9"
                       :src="item.visible == false?require('@/assets/image/down.png'):require('@/assets/image/up.png')"
                       alt="">
                </div>
              </b-button>
            </b-card-header>
            <b-collapse v-model="item.visible" role="tabpanel">
              <div class="list-item-3 mt-3">
                <div v-for="(content, idx) in item.contents" :key="idx" class="p-4">
                  <div class="font-16-14">{{ $t(content.text) }}</div>
                </div>
              </div>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      options: [{
        value: 'a',
        text: '什么是ProTradex平台？',
        visible: true,
        contents: [{
          text: 'Protradexx是一个以链上衍生品赛道为基础的一站式金融服务平台，专注于为链上资产提供流动性，提升资金利用率，它服务的资产类型即包括NFT也包括FT资产。',
        }]
      },
        {
          value: 'b',
          text: '相比其他平台，ProTradex的优势是什么？',
          visible: false,
          contents: [{
            text: 'ProTradex的平台优势有以下几点：背靠且专注具备发展潜力与前景的链上衍生品市场，通过智能调度达到最优收益的策略聚合器。'
          },
            {
              text: '具备成熟且经过验证的流动性做市策略，并通过大数据进行计算，AI系统自动执行，收益稳定且低风险。'
            },
            {
              text: '通过低门槛、高收益回报以及多种激励机制，将长尾资金汇聚，通过可观规模的资金为市场提供流动性服务。'
            },
            {
              text: '通过极具创新性的衍生品机制，正在让蓝筹NFT成为衍生投资标的，并让更多的蓝筹NFT中储存的价值得到释放。'
            }
          ]
        },
        {
          value: 'c',
          text: 'ProTradex的愿景是什么？',
          visible: false,
          contents: [
            {
              text: 'ProTradex致力于解决目前衍生品市场所面临的流动性问题，推动更多的链上衍生品协议的积极发展，并在我们的帮助下共同实现盈利。推动链上衍生品赛道积极正向的发展，是我们的愿景。'
            }
          ]
        },
        {
          value: 'b',
          text: '如何参与ProTradex的产品？',
          visible: false,
          contents: [{
            text: '请关注ProTradex官方渠道以获取产品相关的进展。'
          }]
        },
      ],
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang || 'en';
    },
  },
  methods: {
    openTo(url) {
      window.location.href = url;
    },
  }
}
</script>

<style lang="scss" scoped>

.ai-content {
  width: 100%;

  .ai-content-1 {
    font-family: Source Han Sans CN;
    font-weight: 800;
    color: #000000;
  }

  .ai-content-2 {
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #000000;
  }

}

.faq-content {
  .list {
    width: 100%;

    .list-item {
      border: none;
      margin-bottom: 20px;
      background-color: transparent;

      .card-header {
        padding: 0;
        height: 56px;
        border: none;
        border-radius: 0;

        .btn-info {
          padding: 0;
          height: 100%;
          border: 1px solid #000000;
          border-radius: 30px;
          background: linear-gradient(-22deg, #C2F0B7, #FDFACD);

          &:focus {
            box-shadow: none;
          }
        }
      }

      .list-item-1 {
        padding: 0 30px;
        text-align: left;

        .list-item-1-1 {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #A2A0A9;
        }
      }

      .list-item-3 {
        width: 100%;
        background: #FFFFFF;
        border-radius: 30px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #A2A0A9;
      }
    }
  }
}
</style>
