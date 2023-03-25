<template>
	<div>
		<!-- 实现 v-model -->
		<!-- 使用 v-bind="$attrs" 将父组件设置给当前组件的属性，全部移交给子元素 -->
		<b-form-select :value="value" @input="onInput" :disabled="disabled" v-bind="$attrs" :options="colums"></b-form-select>
	</div>
</template>

<script>
	export default {
		name: 'swSelect',
		// 设置继承属性为false
		inheritAttrs: false,
		props: {
			value: {
				type: String,
				default: ''
			},
			colums: {
				type: Array,
				default: {}
			},
			disabled: {
				type: Boolean,
				default: false,
			},
		},
		methods: {
			onInput(val) {
				// 实现v-model语法糖
				this.$emit("input", val);
				// 通知formItem做校验
				this.$parent.$emit('validate');
			}
		},
	}
</script>

<style lang="scss" scoped>
	/deep/.custom-select {
		height: 47px;
		position: relative;
		border-radius: 10px;
		border: 1px solid #5F5E5F;
		color: rgba(255, 255, 255, 1);
		box-shadow: none;
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		//background: #3C3C3C url(../../../assets/dropdown.png) no-repeat right 0.8rem center;
		background-size: 0.8rem 0.45rem;

		&:hover {
			box-shadow: none;
		}
	}
</style>

