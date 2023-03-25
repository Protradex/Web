<template>
	<div class="home">
		<b-container>
			<div class="ai-content mt-3 mb-3 mt-md-4 mb-md-5 pt-3 pb-3 pt-md-5 pb-md-5 pl-0 pr-0 pl-md-5 pr-md-5">
				<b-row align-v="center">
					<b-col xs="12" md="8">
						<div class="ai-content-1 font-50-40-36">{{ $t('AI-led professional trading strategies') }}</div>
						<div class="ai-content-2 font-30-24-16">{{ $t('A one-stop financial service platform focusing on crypto decentralized derivatives.') }}
						</div>
					</b-col>
					<b-col xs="12" md="4" class="mt-4 mt-md-0">
						<img class="w-75 m-auto d-flex align-items-center justify-content-center" src="@/assets/image/video@2x.png" alt="">
					</b-col>
				</b-row>
			</div>
		</b-container>

		<b-container>
			<div class="proTradex-content mt-3 mb-3 mt-md-5 mb-md-5 pt-3 pb-3 pt-md-5 pb-md-5 pl-0 pr-0 pl-md-5 pr-md-5">
				<div class="proTradex-content-1 d-flex align-items-center justify-content-center">
					<div class="proTradex-content-1-1 font-40-30-26">{{ $t('Why Choose') }}</div>
					<div class="proTradex-content-1-2 font-40-30-26 ml-2">{{ $t('ProTradex') }}?</div>
				</div>
				<div class="proTradex-content-2 mt-4 mt-md-5 p-4">
					<div class="pt-4 pb-4">
						<b-row align-v="center">
							<b-col xs="12" md="4">
								<img class="w-75 m-auto d-flex align-items-center justify-content-center" src="@/assets/image/proTradex.png" alt="">
							</b-col>
							<b-col xs="12" md="8">
								<ul class="font-18-14">
									<li class="pt-2 pb-2">{{ $t('It is backed by and focused on the crypto decentralized derivatives market; it is a strategy aggregator that achieves optimal returns through intelligent scheduling. As a result, it boasts a promising future.') }}</li>
									<li class="pt-2 pb-2">{{ $t('It has mature and proven liquidity market-making strategies, which are calculated by big data and automatically executed by AI systems. ProTradex offers stable returns with low risks.') }}</li>
									<li class="pt-2 pb-2">{{ $t('Through low thresholds, high yield returns and various incentive mechanisms, it aggregates long-tail funds and provides liquidity services to the market through a sizable amount of funds.') }}</li>
									<li class="pt-2 pb-2">{{ $t('Through a highly innovative derivative mechanism, it is making blue chip NFT a derivative investment underlier to release more value stored in blue chip NFTs.') }}</li>
								</ul>
							</b-col>
						</b-row>
					</div>
				</div>
			</div>
		</b-container>
		<b-container>
			<div class="mission-content mt-3 mb-3 mt-md-5 mb-md-5 pt-3 pb-3 pt-md-5 pb-md-5 pl-0 pr-0 pl-md-5 pr-md-5">
				<div class="mission-content-1 d-flex align-items-center justify-content-center">
					<div class="mission-content-1-2 font-40-30-26">{{ $t('ProTradex') }}</div>
					<div class="mission-content-1-1 font-40-30-26 ml-2">{{ $t('Mission') }}</div>
				</div>
				<div class="mission-content-2 mt-4 mt-md-5">
					<b-row align-v="center">
						<b-col xs="12" md="8">
							<div class="mission-content-2-1 font-24-20">{{ $t('ProTradex') }}</div>
							<div class="mission-content-2-2 font-20-14 mt-3">{{ $t('Is committed to promoting the better development of crypto decentralized derivatives market and allowing more long-tail investors to participate in the dividends of the on-chain derivatives market development.') }}</div>
						</b-col>
						<b-col xs="12" md="4" class="mt-4 mt-md-0">
							<img class="w-75 m-auto d-flex align-items-center justify-content-center" src="@/assets/image/dqy.png" alt="">
						</b-col>
					</b-row>
				</div>
			</div>
		</b-container>
<!--    <b-container>-->
<!--      <div class="proTradex-content mt-3 mb-3 mt-md-5 mb-md-5 pt-3 pb-3 pt-md-5 pb-md-5 pl-0 pr-0 pl-md-5 pr-md-5">-->
<!--        <div class="proTradex-content-1 d-flex align-items-center justify-content-center">-->
<!--          <div class="proTradex-content-1-1 font-40-30-26">{{ $t('A multi skilled team') }}</div>-->
<!--          <div class="proTradex-content-1-2 font-40-30-26 ml-2">{{ $t('Built from the ground up') }}?</div>-->
<!--        </div>-->
<!--        <div class="proTradex-content-2 mt-4 mt-md-5 p-4">-->
<!--          <div class="pt-4 pb-4">-->
<!--            <b-row cl ass="pt-4">-->
<!--              <b-col md="3" class="mt-4">-->
<!--                <div class="m-auto text-center d-flex align-items-center justify-content-center flex-column">-->
<!--                  <img class="w-25" src="@/assets/image/t-1.png" alt="">-->
<!--                  <div class="launch-content-1-1 font-24-20 mt-2">{{ $t('Victor') }}</div>-->
<!--                  <div class="launch-content-1-2 font-18-14 mt-2">{{ $t('Founder & CEO') }}</div>-->
<!--                </div>-->
<!--              </b-col>-->
<!--              <b-col md="3" class="mt-4">-->
<!--                <div class="m-auto text-center d-flex align-items-center justify-content-center flex-column">-->
<!--                  <img class="w-25 " src="@/assets/image/t-2.png" alt="">-->
<!--                  <div class="launch-content-1-1 font-24-20 mt-2">{{ $t('Vedamir') }}</div>-->
<!--                  <div class="launch-content-1-2 font-18-14 mt-2">{{ $t('Co-founderDEFI Magician') }}</div>-->
<!--                </div>-->
<!--              </b-col>-->
<!--              <b-col md="3" class="mt-4">-->
<!--                <div class="m-auto text-center d-flex align-items-center justify-content-center flex-column">-->
<!--                  <img class="w-25 " src="@/assets/image/t-3.png" alt="">-->
<!--                  <div class="launch-content-1-1 font-24-20 mt-2">{{ $t('Vlad') }}</div>-->
<!--                  <div class="launch-content-1-2 font-18-14 mt-2">{{ $t('Co-founder UXead') }}</div>-->
<!--                </div>-->
<!--              </b-col>-->

<!--              <b-col md="3" class="mt-4">-->
<!--                <div class="m-auto text-center d-flex align-items-center justify-content-center flex-column">-->
<!--                  <img class="w-25" src="@/assets/image/t-4.png" alt="">-->
<!--                  <div class="launch-content-1-1 font-24-20 mt-2">{{ $t('Phil') }}</div>-->
<!--                  <div class="launch-content-1-2 font-18-14 mt-2">{{ $t('SWISS ArmyKnife') }}</div>-->
<!--                </div>-->
<!--              </b-col>-->
<!--              <b-col md="3" class="mt-4">-->
<!--                <div class="m-auto text-center d-flex align-items-center justify-content-center flex-column">-->
<!--                  <img class="w-25 " src="@/assets/image/t-5.png" alt="">-->
<!--                  <div class="launch-content-1-1 font-24-20 mt-2">{{ $t('Adrian') }}</div>-->
<!--                  <div class="launch-content-1-2 font-18-14 mt-2">{{ $t('Partnerships') }}</div>-->
<!--                </div>-->
<!--              </b-col>-->
<!--              <b-col md="3" class="mt-4">-->
<!--                <div class="m-auto text-center d-flex align-items-center justify-content-center flex-column">-->
<!--                  <img class="w-25 " src="@/assets/image/t-6.png" alt="">-->
<!--                  <div class="launch-content-1-1 font-24-20 mt-2">{{ $t('Francois') }}</div>-->
<!--                  <div class="launch-content-1-2 font-18-14 mt-2">{{ $t('Bizdev Growth') }}</div>-->
<!--                </div>-->
<!--              </b-col>-->
<!--              <b-col md="3" class="mt-4">-->
<!--                <div class="m-auto text-center d-flex align-items-center justify-content-center flex-column">-->
<!--                  <img class="w-25 " src="@/assets/image/t-7.png" alt="">-->
<!--                  <div class="launch-content-1-1 font-24-20 mt-2">{{ $t('Viktor') }}</div>-->
<!--                  <div class="launch-content-1-2 font-18-14 mt-2">{{ $t('Developer') }}</div>-->
<!--                </div>-->
<!--              </b-col>-->
<!--              <b-col md="3" class="mt-4">-->
<!--                <div class="m-auto text-center d-flex align-items-center justify-content-center flex-column">-->
<!--                  <img class="w-25 " src="@/assets/image/t-8.png" alt="">-->
<!--                  <div class="launch-content-1-1 font-24-20 mt-2">{{ $t('Dmitry') }}</div>-->
<!--                  <div class="launch-content-1-2 font-18-14 mt-2">{{ $t('Developer') }}</div>-->
<!--                </div>-->
<!--              </b-col>-->
<!--            </b-row>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </b-container>-->
    <b-container>
      <div class="proTradex-content mt-3 mb-3 mt-md-5 mb-md-5 pt-3 pb-3 pt-md-5 pb-md-5 pl-0 pr-0 pl-md-5 pr-md-5">
        <div class="proTradex-content-1 d-flex align-items-center justify-content-center">
          <div class="proTradex-content-1-2 font-40-30-26 ml-2">{{ $t('Investors') }}</div>
        </div>
        <div class="proTradex-content-2 mt-4 mt-md-5 p-4">
          <div class="pb-4">
            <b-row  align-v="center">
              <b-col md="3" class="mt-4">
                <div class="m-auto text-center d-flex align-items-center justify-content-center ">
                  <img class="w-100" src="@/assets/image/l-1.png" alt="">
                </div>
              </b-col>
              <b-col md="3" class="mt-4">
                <div class="m-auto text-center d-flex align-items-center justify-content-center ">
                  <img class="w-100" src="@/assets/image/l-2.png" alt="">
                </div>
              </b-col>
              <b-col md="3" class="mt-4">
                <div class="m-auto text-center d-flex align-items-center justify-content-center ">
                  <img class="w-100" src="@/assets/image/l-3.png" alt="">
                </div>
              </b-col>

              <b-col md="3" class="mt-4">
                <div class="m-auto text-center d-flex align-items-center justify-content-center ">
                  <img class="w-100" src="@/assets/image/l-4.png" alt="">
                </div>
              </b-col>
              <b-col md="4" class="mt-4">
                <div class="m-auto text-center d-flex align-items-center justify-content-center ">
                  <img class="w-100" src="@/assets/image/l-5.png" alt="">
                </div>
              </b-col>
              <b-col md="4" class="mt-4">
                <div class="m-auto text-center d-flex align-items-center justify-content-center ">
                  <img class="w-100" src="@/assets/image/l-6.png" alt="">
                </div>
              </b-col>
              <b-col md="4" class="mt-4">
                <div class="m-auto text-center d-flex align-items-center justify-content-center ">
                  <img width="105px"   src="@/assets/image/l-7.png" alt="">
                </div>
              </b-col>
              <b-col md="4" class="mt-4">
                <div class="m-auto text-center d-flex align-items-center justify-content-center ">
                  <img class="w-100" src="@/assets/image/l-8.png" alt="">
                </div>
              </b-col>
              <b-col md="4" class="mt-4">
                <div class="m-auto text-center d-flex align-items-center justify-content-center ">
                  <img class="w-100" src="@/assets/image/l-9.png" alt="">
                </div>
              </b-col>
              <b-col md="4" class="mt-4">
                <div class="m-auto text-center d-flex align-items-center justify-content-center ">
                  <img width="159px"  src="@/assets/image/l-10.png" alt="">
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </b-container>
	</div>
</template>

<script>
	export default {
		name: 'About',
		data() {
			return {
			}
		},
		computed: {
			lang() {
				return this.$store.state.lang || 'zhmsg';
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
			font-weight: bold;
			color: #000000;
			-webkit-text-stroke: 1px #000000;
			text-stroke: 1px #000000;
			background: linear-gradient(-22deg, #C2F0B7 0%, #FDFACD 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		.ai-content-2 {
			margin-top: 10px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: #000000;
		}

	}

	.proTradex-content {
		width: 100%;
		.proTradex-content-1{
			.proTradex-content-1-1{
				font-family: Source Han Sans CN;
				font-weight: 800;
				color: #000000;
			}
			.proTradex-content-1-2{
				font-family: Source Han Sans CN;
				font-weight: 800;
				color: #000000;
				-webkit-text-stroke: 1px #000000;
				text-stroke: 1px #000000;
				background: linear-gradient(-22deg, #C2F0B7 0%, #FDFACD 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
		.proTradex-content-2{
			width: 100%;
			background: #FFFFFF;
			box-shadow: 0px 3px 29px 0px rgba(19,19,20,0.09);
			font-family: Source Han Sans CN;
			font-weight: 300;
			color: #A2A0A9;
			border-radius: 30px;
			ul{
				margin: 0;
			}
      .launch-content-1-1{
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #000000;
      }
      .launch-content-1-2{
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #A2A0A9;
      }
		}
	}

	.mission-content {
		width: 100%;
		.mission-content-1{
			.mission-content-1-1{
				font-family: Source Han Sans CN;
				font-weight: 800;
				color: #000000;
			}
			.mission-content-1-2{
				font-family: Source Han Sans CN;
				font-weight: 800;
				color: #000000;
				-webkit-text-stroke: 1px #000000;
				text-stroke: 1px #000000;
				background: linear-gradient(-22deg, #C2F0B7 0%, #FDFACD 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
		.mission-content-2{
			width: 100%;
			font-family: Source Han Sans CN;
			font-weight: 300;
			color: #A2A0A9;
			border-radius: 30px;
			.mission-content-2-1{
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #000000;
			}
			.mission-content-2-2{
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #A2A0A9;
			}
		}
	}
</style>
