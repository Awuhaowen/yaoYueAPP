<template>
	<view>
		<view class="con">
			<h1>完善信息</h1>
			<view>
				<p>联系人：</p>
				<input type="text" placeholder="请输入联系人" />
				<p>联系方式：</p>
				<input type="text" placeholder="请输入联系方式" />
				<p>公司简介：</p>
				<textarea value="" placeholder="请输入公司简介" />
			</view>
			<button type="primary" @tap="submit">提交</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},

	methods: {
		submit() {
			uni.navigateTo({
				url: '../index/index'
			});
		}
	}
};
</script>

<style lang="scss">
.con {
	color: #515151;
	padding: 20rpx;
	h1 {
		text-align: center;
		font-size: 44rpx;
		line-height: 3;
		color: #515151;
	}

	view {
		p {
			font-size: 30rpx;
			line-height: 2;
		}
		input {
			border: 1px solid #eee;
			border-radius: 10rpx;
			color: #999;
			padding: 10rpx 0;
			font-size: 28rpx;
		}
		textarea {
			border: 1px solid #eee;
			color: #999;
			border-radius: 10rpx;
			font-size: 28rpx;
			width: 100%;
		}
	}

	button {
		bottom: -220 * 2rpx;
	}
}

page {
	background: #fff;
}
</style>
