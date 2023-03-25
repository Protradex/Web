<template>
	<div id="app">
		<navbar></navbar>
		<transition name="router-fade" mode="out-in">
			<router-view />
		</transition>
		<!-- 网络加载进度条 -->
		<vue-progress-bar></vue-progress-bar>
	</div>
</template>

<script>
	import Navbar from 'components/common/Navbar'
	export default {
		name: 'App',
		components: {
			Navbar,
		},
	}
</script>

<style lang="scss">
	body{
		background: #F2F2FC;
	}
	
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		min-width: 320px;
	}

	a:hover {
		text-decoration: none;
	}
	.router-fade-enter-active,
	.router-fade-leave-active {
		transition: opacity 0.2s;
	}
	.router-fade-enter,
	.router-fade-leave-active {
		opacity: 0;
	}
</style>
