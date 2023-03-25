<template>
	<div class="home">
		<b-container>
			<div class="ai-content mt-3 mb-3 mt-md-4 mb-md-5 pt-3 pb-3 pt-md-5 pb-md-5 pl-0 pr-0 pl-md-5 pr-md-5">
				<b-row align-v="center">
					<b-col xs="12" md="5" class="mb-4 mb-md-0">
						<img class="w-75 m-auto d-flex align-items-center justify-content-center" src="@/assets/image/product-1.png" alt="">
					</b-col>
					<b-col xs="12" md="7">
						<div class="ai-content-1 text-center text-md-right font-50-40-36">{{ $t('Decentralized NFTliquidity protocol offering NFT lending and loan services') }}</div>
					</b-col>
				</b-row>
				<div class="ai-content-2 font-18-14 mt-2 mt-md-4">{{ $t('ProTradex currently offers a decentralized NFT-based leveraged mortgage lending protocol, which is different from the current NFT lending platforms on the market. ProTradex not only allows users to stake NFT assets into a pool of funds to obtain crypto assets such as USDT, but also supports them to stake crypto assets in the agreement to borrow funds through leverage and use them to purchase popular NFT within the platform and make profits when the price of NFT rises.') }}</div>
			</div>
		</b-container>

		<b-container>
			<div class="launch-content mt-3 mb-3 mt-md-5 mb-md-5 pb-3 pb-md-5 pl-0 pr-0 pl-md-5 pr-md-5">
				<div class="launch-content-1 p-4">
					<div class="pt-4 pb-4">
						<div class="font-18-14">{{ $t('Currently, we offer three types of lending agreements for users to choose from. They are perpetual loans, flip loans and bonds, which differ in loan-to-value (LTV) ratio, interest rate, and lending cycle.') }}</div>
						<b-row class="pt-4">
							<b-col md="4" class="mt-4">
								<div class="m-auto text-center d-flex align-items-center justify-content-center flex-column">
									<img class="w-25" src="@/assets/image/perpetual@2x.png" alt="">
									<div class="launch-content-1-1 font-24-20 mt-4">{{ $t('Perpetual loan') }}</div>
									<div class="launch-content-1-2 font-18-14 mt-4">{{ $t('Perpetual NFT loan has no loan cycle and is available to users at a dynamic low interest rate, but users need to pay attention to the staking rate of funds to prevent liquidation.') }}</div>
								</div>
							</b-col>
							<b-col md="4" class="mt-4">
								<div class="m-auto text-center d-flex align-items-center justify-content-center flex-column">
									<img class="w-25 mb-3" src="@/assets/image/pay@2x.png" alt="">
									<div class="launch-content-1-1 font-24-20 mt-4">{{ $t('Flip loan') }}</div>
									<div class="launch-content-1-2 font-18-14 mt-4">{{ $t('Short-term loan cycle with fixed interest rate, and can be redeemed before maturity.') }}</div>
								</div>
							</b-col>
							<b-col md="4" class="mt-4">
								<div class="m-auto text-center d-flex align-items-center justify-content-center flex-column">
									<img class="w-25 mb-2" src="@/assets/image/bond@2x.png" alt="">
									<div class="launch-content-1-1 font-24-20 mt-4">{{ $t('Bonds') }}</div>
									<div class="launch-content-1-2 font-18-14 mt-4">{{ $t('Offers a relatively high loan-to-value (LTV) ratio, fixed short-term loan period, and can be redeemed before maturity.') }}</div>
								</div>
							</b-col>
						</b-row>
						<div class="mt-5 d-flex justify-content-center">
							<div class="launch-content-1-3 pl-5 pr-5 pt-2 pb-2">{{ $t('Launch App') }}</div>
						</div>
					</div>
				</div>
			</div>
		</b-container>
		<b-container>
			<div class="coming-content mt-3 mb-3 mt-md-5 mb-md-5 pl-0 pr-0 pl-md-5 pr-md-5">
				<div class="coming-content-1">
					<b-row align-v="end">
						<b-col xs="12" md="6">
							<div class="coming-content-1-1 font-40-30-26">{{ $t('Market maker services focusing on the liquidity of') }}</div>
							<div class="coming-content-1-2 font-40-30-26 mt-3">{{ $t('crypto decentralized derivatives') }}</div>
						</b-col>
						<b-col xs="12" md="6" class="mt-4 mt-md-0 d-flex justify-content-lg-end">
							<div class="coming-content-1-3 pl-4 pr-4 pt-2 pb-2">{{ $t('Coming soon') }}</div>
						</b-col>
					</b-row>
				</div>
				<div class="coming-content-2 font-18-14 mt-4">{{ $t('Market maker services are like crypto savings accounts in cyberspace, where users deposit assets. Market maker services send these assets to run in the crypto decentralized derivatives ecosystem (liquidity/DEX, etc.), and then return the earnings to the user. However, unlike bank accounts (which traditionally have a utilization rate of less than 10%), Our market maker services use efficient operations and extremely fast strategies, which means that users can achieve a 50%+ utilization rate of their assets, resulting in the highest possible return ratios.') }}</div>
			</div>
		</b-container>
	</div>
</template>

<script>
	export default {
		name: 'Product',
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
			text-align: right;
			font-family: Source Han Sans CN;
			font-weight: 800;
			color: #000000;
		}
		.ai-content-2{
			font-family: Source Han Sans CN;
			font-weight: 300;
			color: rgba(0, 0, 0, 0.8);
		}

	}

	.launch-content {
		width: 100%;
		.launch-content-1{
			width: 100%;
			background: #FFFFFF;
			box-shadow: 0px 3px 29px 0px rgba(19,19,20,0.09);
			font-family: Source Han Sans CN;
			font-weight: 300;
			color: #A2A0A9;
			border-radius: 30px;
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
			.launch-content-1-3{
				display: inline-block;
				box-sizing: content-box;
				background: #283082;
				border-radius: 25px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #FFFFFF;
			}
		}
	}

	.coming-content {
		width: 100%;
		.coming-content-1{
			width: 100%;
			font-family: Source Han Sans CN;
			font-weight: 300;
			color: #A2A0A9;
			border-radius: 30px;
			.coming-content-1-1{
				font-family: Source Han Sans CN;
				font-weight: 800;
				color: #000000;
			}
			.coming-content-1-2{
				font-family: Source Han Sans CN;
				font-weight: 800;
				color: #000000;
				-webkit-text-stroke: 1px #000000;
				text-stroke: 1px #000000;
				background: linear-gradient(-22deg, #C2F0B7 0%, #FDFACD 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
			.coming-content-1-3{
				box-sizing: content-box;
				display: inline-block;
				background: #283082;
				border-radius: 25px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #FFFFFF;
			}
		}
		.coming-content-2{
			font-family: Source Han Sans CN;
			font-weight: 300;
			color: rgba(0, 0, 0, 0.8);
			line-height: 28px;
		}
	}
</style>
