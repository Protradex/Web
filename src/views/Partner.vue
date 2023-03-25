<template>
	<div class="home">
		<b-container>
			<div class="ai-content mt-3 mb-3 mt-md-4 mb-md-5 pt-3 pb-3 pt-md-5 pb-md-5 pl-0 pr-0 pl-md-5 pr-md-5">
				<b-row align-v="center">
					<b-col xs="12" md="6">
						<div class="ai-content-1 font-50-40-36">{{ $t('cooperative partner') }}</div>
						<div class="ai-content-2 font-30-24-16">{{ $t('Win-win cooperation') }}</div>
					</b-col>
					<b-col xs="12" md="6" class="mt-4 mt-md-0">
						<img class="w-75 m-auto d-flex align-items-center justify-content-center" src="@/assets/image/parnet.png" alt="">
					</b-col>
				</b-row>
			</div>
		</b-container>
		<b-container>
			<div class="ai-content mt-3 mb-3 mt-md-4 mb-md-5 pt-3 pb-3 pt-md-5 pb-md-5">
				<div class="d-flex justify-content-center flex-wrap">
					<b-row align-v="center" class="w-50 pr-0 pr-md-4">
<!--						<b-col xs="6" md="6">-->
<!--							<img class="w-100" src="@/assets/image/1@2x.png" alt="">-->
<!--						</b-col>-->
            <b-col xs="6" md="6">
              <img class="w-100" src="@/assets/image/8@2x.png" alt="">
            </b-col>
						<b-col xs="6" md="6">
							<img class="w-100" src="@/assets/image/2@2x.png" alt="">
						</b-col>
					</b-row>
					<b-row align-v="center" class="w-50">
						<b-col xs="6" md="6">
							<img class="w-100" src="@/assets/image/3@2x.png" alt="">
						</b-col>
						<b-col xs="6" md="6">
							<img class="w-100" src="@/assets/image/4@2x.png" alt="">
						</b-col>
					</b-row>
					<b-row align-v="center" class="w-50 pr-0 pr-md-4">
						<b-col xs="6" md="6">
							<img class="w-100" src="@/assets/image/5@2x.png" alt="">
						</b-col>
						<b-col xs="6" md="6">
							<img class="w-100" src="@/assets/image/6@2x.png" alt="">
						</b-col>
					</b-row>
					<b-row align-v="center" class="w-50">
						<b-col xs="6" md="6">
							<img class="w-100" src="@/assets/image/7@2x.png" alt="">
						</b-col>

					</b-row>
				</div>
			</div>
		</b-container>
	</div>
</template>

<script>
	export default {
		name: 'Partner',
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
			font-weight: 800;
			color: #000000;
		}
		.ai-content-2{
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: #000000;
		}

	}
</style>
