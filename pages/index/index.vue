<template>
	<view class="con">
		<my-header></my-header>
		<image
			style="width: 100%;"
			src="../../static/images/h1.png"
			mode="widthFix"
		></image>
		<view class="main">
			<view v-for="(item, i) in btn" :key="i" class="btn" @tap="hdjs(i)">
				{{ item }}
			</view>
		</view>

		<!-- 弹窗 -->
		<view class="mask" v-show="tc">
			<view class="tc">
				<h4>完善信息</h4>
				<p>为了企业对接交流，请完善公司信息</p>

				<view class="list">
					<view>
						<p>
							1. 联系人
							<text style="color: red;">*</text>
						</p>
						<input type="text" placeholder="请输入联系人" />
					</view>
					<view>
						<p>
							2. 联系方式
							<text style="color: red;" space="" decode="true">
								&nbsp;&nbsp;*
							</text>
						</p>
						<input type="text" placeholder="请输入联系方式" />
					</view>
					<view>
						<p>
							3. 公司简介
							<text style="color: red;">*</text>
						</p>
						<textarea value="" placeholder="请输入公司简介" />
					</view>
				</view>

				<button type="primary" @tap="submit">提交</button>

				<!-- <view class="btn">
					<p type="primary" plain size="mini" @tap="tiJiao">提交</p>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			btn: [
				'活动介绍',
				'论坛报名',
				'签约项目申报',
				'展示项目申报',
				'活动主题',
				'邀约企业(中外方展示不同)'
			],
			tc: false
		};
	},

	onLoad: function(option) {
		if (option.id == 1) {
			this.tc = true;
		}
	},

	methods: {
		submit() {
			this.tc = false;
		},

		hdjs(e) {
			if (e == 0) {
				uni.navigateTo({
					url: '../activity/activity'
				});
			} else if (e == 4) {
				uni.navigateTo({
					url: '../zhuanTi/zhuanTi'
				});
			} else if (e == 5) {
				uni.navigateTo({
					url: '../diplayList/diplayList'
				});
			}
		}
	}
};
</script>

<style lang="scss">
.tc {
	z-index: 999;
	box-sizing: content-box;
	width: 90%;
	margin: 90rpx auto 0;
	animation: go_in 1s;
	background: #fff;
	padding: 20upx;

	button {
		height: 34 * 2rpx;
		line-height: 34 * 2rpx;
		margin: 160rpx 0 40rpx;
	}

	.list {
		view {
			margin: 30rpx 0;
			p {
				font-size: 30rpx;
				line-height: 2;
				color: #515151;
			}
			input {
				border: 1px solid #eee;
				border-radius: 10rpx;
				color: #999;
				padding: 14rpx 30rpx;
				font-size: 28rpx;
			}
			textarea {
				border: 1px solid #eee;
				color: #999;
				padding: 10rpx 30rpx;
				border-radius: 10rpx;
				font-size: 28rpx;
				width: 90%;
			}
		}
	}

	> h4 {
		font-size: 40rpx;
		color: #515151;
		text-align: center;
		border-bottom: 1px dashed #007aff;
		height: 66rpx;
		width: 30%;
		margin: 0 auto 30rpx;
	}

	> p {
		font-size: 24upx;
		color: #999;
		text-align: center;
	}
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

.mask {
	width: 100%;
	height: 100vh;
	position: fixed;
	left: 0px;
	top: 0px;
	overflow: auto;
	z-index: 999;
	background: rgba(0, 0, 0, 0.6);
}

.con > .main {
	margin-top: 90upx;
}
.con > .main > .btn {
	border: 1px solid #007aff;
	width: 530upx;
	text-align: center;
	font-weight: 400;
	font-size: 28upx;
	line-height: 74upx;
	border-radius: 10upx;
	margin: 30upx auto 0;
	color: #007aff;
	height: 74upx;
}

page {
	background: #fff;
}
</style>
