<template>
	<view class="mask" v-show="show">
		<view class="input" v-for="(item, i) in input" :key="i">
			<p>通知</p>
			<textarea :placeholder="item.qx == '取消' ? item : item" />
			<view>
				<p @tap="qd">确定</p>
				<p @tap="q">取消</p>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		show: false
	},
	data() {
		return {
			input: ['请输入拒绝理由', '请输入取消理由']
		};
	},

	methods: {
		hide() {
			this.$emit('h');
		},

		q() {
			this.hide();
		},

		qd() {
			this.hide();
		}
	}
};
</script>

<style lang="scss">
// 弹出框
.mask {
	width: 100%;
	height: 100vh;
	position: fixed;
	z-index: 999;
	overflow: hidden;
	left: 0px;
	top: 0px;
	z-index: 5;
	background-color: rgba(49, 49, 49, 0.5);
}

@keyframes go_in {
	0% {
		opacity: 0;
		transform: translateY(50px);
	}
	100% {
		opacity: 1;
	}
}

.s {
	animation: go_out 2s;
}

.input {
	background: #fff;
	box-sizing: content-box;
	width: 500upx;
	height: 380upx;
	animation: go_in 1s;
	padding: 60upx 0 0 50upx;
	position: fixed;
	left: 50%;
	top: 50%;
	margin-left: -268upx;
	margin-top: -290upx;

	> p {
		font-weight: 400;
		font-size: 32upx;
		color: rgba(0, 0, 0, 0.87);
		margin-bottom: 20upx;
	}

	view {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin: 30upx 100upx;

		p {
			font-weight: 400;
			font-size: 14px;
			color: rgb(0, 150, 136);
			letter-spacing: 0.5px;
			line-height: 16px;
			margin-left: 70upx;
		}
	}

	textarea {
		width: 207px;
		height: 100px;
		color: #999;
		font-size: 28upx;
		padding: 10upx 16upx;
		border: 1px solid #dbdbdb;
	}
}
</style>
