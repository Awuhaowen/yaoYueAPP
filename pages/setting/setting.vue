<template>
	<view>
		<my-header></my-header>

		<view class="wz">
			<p>您的位置：</p>
			<navigator style="color: #007AFF" url="../index/index">首页</navigator>
			<text style="margin: 0 10upx;">></text>
			<navigator style="color: #007AFF" url="../geRenzx/geRenzx">
				个人中心
			</navigator>
			<text style="margin: 0 10upx;">></text>
			<navigator style="color: #007AFF" url="../modify/modify">设置</navigator>
			<text style="margin: 0 10upx;">></text>
			<p>修改密码</p>
		</view>

		<view class="xgmm">
			<p></p>
			<h5>修改密码</h5>
		</view>

		<view class="gs">
			<!-- 			<view>
				<p>用户名:</p>
				<text>tom</text>
			</view> -->

			<view>
				<p>原密码:</p>
				<input type="text" placeholder="请输入密码" />
			</view>

			<view>
				<p>新密码:</p>
				<input type="text" placeholder="请输入新密码" />
			</view>

			<view>
				<p>确认密码:</p>
				<input type="text" placeholder="请确认密码" />
			</view>

			<view class="btn">
				<button type="primary" @tap="tj">提交修改</button>
				<button type="primary" @tap="yongHu">取消</button>
			</view>
		</view>

		<!-- 		<view class="yh">

			<view><p class="tj" @tap="tj">提交</p></view>

			<button type="primary" @tap="yongHu">返回</button>
		</view> -->
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},

	methods: {
		xiaoXi() {
			uni.navigateTo({
				url: '../news/news'
			});
		},

		yongHu() {
			uni.navigateTo({
				url: '../modify/modify'
			});
		},

		tj() {
			uni.showToast({
				mask: true,
				title: '修改成功'
			});
		}
	}
};
</script>

<style lang="scss">
.gs {
	background: #fff;
	padding: 20rpx;

	.btn {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 200rpx 0 30rpx;
		button {
			width: 40%;
			font-size: 30rpx;
		}
	}

	p {
		font-weight: 400;
		font-size: 30rpx;
		color: #101010;
		height: 40rpx;
		margi: 20upx 0;
	}

	input {
		border: 2upx solid #eee;
		margin: 20upx 0;
		padding: 16upx 10upx;
		font-size: 28upx;
		color: #999;
		border-radius: 10upx;
	}

	textarea {
		border: 1px solid #eee;
		height: 140upx;
		color: #999;
		width: 96%;
		border-radius: 10upx;
		font-size: 26upx;
		margin: 20upx 0;
		padding: 10upx;
	}
}

// .yh {
// 	background: #fff;
// 	padding: 20upx;
// 	color: #777;

// 	view {
// 		display: flex;
// 		// width: 90%;
// 		// justify-content: space-between;
// 		align-items: center;
// 		margin: 30upx 0;
// 		font-size: 28upx;

// 		p {
// 			width: 160upx;
// 		}

// 		input {
// 			border: 1px solid #ececec;
// 			padding: 12upx;
// 			width: 70%;
// 			box-shadow: rgba(0, 0, 0, 0.19) 0px 1px 3px 0px;
// 			border-radius: 4px;
// 			font-size: 28upx;
// 		}
// 	}

// 	> view:last-of-type {
// 		height: 100upx;
// 		border-bottom: 2px dashed rgb(187, 187, 187);

// 		.tj {
// 			color: rgb(74, 141, 255);
// 			border: 1px dashed rgb(35, 117, 255);
// 			text-align: center;
// 			width: 374upx;
// 			height: 68upx;
// 			font-size: 32upx;
// 			color: 28upx;
// 			margin: -30upx auto 0;
// 			line-height: 68upx;
// 			border-radius: 10upx;
// 		}
// 	}

// 	button {
// 		width: 90%;
// 		height: 80upx;
// 		line-height: 80upx;
// 		margin: 340upx auto 20upx;
// 	}
// }

.xgmm {
	background: #fff;
	display: flex;
	align-items: center;
	padding: 35upx 20upx 50upx;
	p {
		width: 5px;
		height: 20px;
		margin-right: 10upx;
		background-color: rgb(35, 117, 255);
	}
}

.wz {
	display: flex;
	font-size: 24upx;
	color: #999;
	margin: 0 0 30upx;
	padding: 25upx;
	background: #fff;
}

page {
	background-color: rgba(240, 240, 240, 0.7);
}
</style>
