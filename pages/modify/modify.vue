<template>
	<view>
		<my-header></my-header>

		<view class="wz">
			<!-- <text></text> -->
			<p>您的位置：</p>
			<navigator style="color: #007AFF" url="../index/index">首页</navigator>
			<text style="margin: 0 10upx;">></text>
			<navigator style="color: #007AFF" url="../geRenzx/geRenzx">
				个人中心
			</navigator>
			<text style="margin: 0 10upx;">></text>
			<p>设置</p>
		</view>

		<view @tap="mm" class="yysz">
			<view>
				<image src="../../static/images/miMa.png" mode="widthFix"></image>
				<p>修改密码</p>
			</view>
			<image mode="widthFix" src="../../static/images/youJianTou.png"></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},

	methods: {
		mm() {
			uni.navigateTo({
				url: '../setting/setting'
			});
		}
	}
};
</script>

<style lang="scss">
.yysz {
	display: flex;
	font-size: 24upx;
	color: #999;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px;
	background: #fff;
	padding: 10upx 40upx;
	align-items: center;
	margin: 10px 0;
	line-height: 60upx;
	justify-content: space-between;

	image {
		width: 32upx;
		height: 32upx;
	}

	view {
		display: flex;
		align-items: center;

		p {
			margin-left: 20upx;
		}
	}
}

.wz {
	display: flex;
	font-size: 24upx;
	color: #999;
	box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 1px 0px;
	background: #fff;
	padding-left: 40upx;
	// padding: 25upx 20upx;
	// margin: 30upx 0;
	line-height: 88upx;
	text:first-child {
		width: 2px;
		height: 88upx;
		margin-right: 20upx;
		background-color: rgb(35, 117, 255);
	}
}
</style>
