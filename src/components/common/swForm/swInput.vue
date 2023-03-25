<template>
	<div>
		<!-- 实现 v-model -->
		<!-- 使用 v-bind="$attrs" 将父组件设置给当前组件的属性，全部移交给子元素 -->
		<div class="input-group d-flex align-items-center">
			<b-form-input :type="type" :value="value" :readonly="readonly" @input="onInput" v-bind="$attrs"></b-form-input>
			<div v-if="label != ''" class="input-group-addon color_white">{{label}}</div>
			<slot></slot>
		</div>
		<!-- <b-form-textarea v-if="type == 'textarea'" :value="value" @input="onInput" v-bind="$attrs"></b-form-textarea> -->
	</div>
</template>

<script>
	export default {
		name: 'swInput',
		// 设置继承属性为false
		inheritAttrs: false,
		props: {
			value: {
				type: [String, Number],
				default: ''
			},
			type: {
				type: String,
				default: 'text',
			},
			label: {
				type: String,
				default: '',
			},
			readonly: {
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
	.input-group{
		height: 47px;
		position: relative;
		background: #3C3C3C;
		border-radius: 10px;
		border: 1px solid #5F5E5F;
		.input-group-addon{
			padding: 0 0.8rem;
		}
		/deep/.form-control {
			height: 100%;
			border: none;
			background: transparent;
			color: rgba(255, 255, 255, 1);
			box-shadow: none;
		
			&:hover {
				box-shadow: none;
			}
		}
	}
</style>
