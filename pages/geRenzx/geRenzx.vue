<template>
	<view>
		<my-header></my-header>
		
		<view class="main">
			<view class="wz">
				<!-- <text></text> -->
				<p>您的位置：</p>
				<navigator style="color: #007AFF" url="../index/index">首页</navigator>
				<text style="margin: 0 10upx;">></text>
				<p>个人中心</p>
			</view>

			<!-- 我的活动 -->
			<view class="hd">
				<!-- <p>我的活动</p> -->
				<view class="wdhd">
					<view>
						<image
							src="../../static/images/huoDong.png"
							mode="widthFix"
						></image>
						<p style="margin: 0 30upx;">我的活动</p>
					</view>
					<image
						mode="widthFix"
						src="../../static/images/youJianTou.png"
					></image>
				</view>
			</view>

			<!-- 邀约设置 -->
			<view class="yy">
				<!-- <p>邀约设置</p> -->
				<view class="yysz">
					<view @tap="docking">
						<view>
							<image
								src="../../static/images/yuYue.png"
								mode="widthFix"
							></image>
							<p>对接邀约</p>
						</view>
						<image
							mode="widthFix"
							src="../../static/images/youJianTou.png"
						></image>
					</view>
					<!-- <view @tap="yuYue">
						<view>
							<image
								src="../../static/images/yuYue.png"
								mode="widthFix"
							></image>
							<p>邀约我的</p>
						</view>
						<image
							mode="widthFix"
							src="../../static/images/youJianTou.png"
						></image>
					</view>
					<view @tap="pre">
						<view>
							<image src="../../static/images/we.png" mode="widthFix"></image>
							<p>我邀约的</p>
						</view>
						<image
							mode="widthFix"
							src="../../static/images/youJianTou.png"
						></image>
					</view>
					<view @tap="schedule">
						<view>
							<image
								src="../../static/images/riCheng.png"
								mode="widthFix"
							></image>
							<p>日程安排</p>
						</view>
						<image
							mode="widthFix"
							src="../../static/images/youJianTou.png"
						></image>
					</view> -->
				</view>
			</view>

			<!-- 系统设置 -->
			<view class="xt">
				<!-- <p>系统设置</p> -->
				<view class="cm">
					<view
						@tap="jump(i)"
						v-for="(item, i) in cm"
						:key="i"
						class="gywm"
						:style="{ 'border-bottom': i == 2 ? '0' : '' }"
					>
						<view>
							<image :src="item.pic1" mode="widthFix"></image>
							<p style="margin: 0 30upx;">{{ item.gywm }}</p>
						</view>
						<image :src="item.pic2" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cm: [
				{
					pic1: '../../static/images/laBa.png',
					gywm: '关于我们',
					pic2: '../../static/images/youJianTou.png'
				},
				{
					pic1: '../../static/images/sheZhi.png',
					gywm: '设置',
					pic2: '../../static/images/youJianTou.png'
				},
				{
					pic1: '../../static/images/tuiChu.png',
					gywm: '退出登录',
					pic2: '../../static/images/youJianTou.png'
				}
			],
			index: 0
		};
	},

	methods: {
		xiaoXi() {
			uni.navigateTo({
				url: '../news/news'
			});
		},

		pre() {
			uni.navigateTo({
				url: '../pre/pre'
			});
		},

		yuYue() {
			uni.navigateTo({
				url: '../yuYue/yuYue'
			});
		},

		yongHu() {
			uni.navigateTo({
				url: '../geRenzx/geRenzx'
			});
		},

		schedule() {
			uni.navigateTo({
				url: '../schedule/schedule'
			});
		},

		docking() {
			uni.navigateTo({
				url: '../Docking/Docking',
			});
		},

		jump(i) {
			if (i == 0) {
				uni.navigateTo({
					url: '../About/About'
				});
			} else if (i == 1) {
				uni.navigateTo({
					url: '../modify/modify'
				});
			} else if (i == 2) {
				uni.navigateTo({
					url: '../login/login'
				});
			}
		}
	}
};
</script>

<style lang="scss">
.hongDian {
	width: 14upx;
	height: 14upx;
	text-align: center;
	position: absolute;
	top: 34upx;
	border-radius: 100%;
	right: 40upx;
	z-index: 999;
	line-height: 40upx;
	background-color: rgb(255, 2, 2);
}

.xt {
	image {
		width: 32upx;
		height: 32upx;
		// margin-right: 10upx;
	}
	> p {
		margin: 20upx 20upx;
	}

	font-size: 28upx;
	.cm {
		background: #fff;
		color: #999;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px;
		// padding: 14upx 40upx;

		.gywm {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid rgb(236, 236, 236);
			height: 80upx;
			padding: 14upx 40upx;
			view {
				display: flex;
				align-items: center;
			}
		}
	}
}

.yy {
	p {
		font-size: 28upx;
		margin: 20upx 30upx;
	}

	image {
		width: 32upx;
		height: 32upx;
	}

	.yysz {
		font-size: 24upx;
		color: #999;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px;
		background: #fff;
		// padding: 10upx 40upx;
		margin-bottom: 20rpx;

		> view {
			padding: 10upx 40upx;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #ececec;
			justify-content: space-between;
			view {
				display: flex;
				align-items: center;
			}
		}
	}
}

.hd {
	> p {
		font-size: 28upx;
		margin-left: 20upx;
	}

	image {
		width: 32upx;
		height: 32upx;
	}

	.wdhd {
		display: flex;
		font-size: 28upx;
		color: #999;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px;
		background: #fff;
		padding: 30upx 40upx;
		align-items: center;
		justify-content: space-between;
		margin: 20upx 0;
		view {
			display: flex;
			align-items: center;
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

// .main {
// 	width: 95%;
// 	margin: auto;
// }

page {
	background-color: #ededed;
}

.header {
	height: 80upx;
	padding: 20upx;
	background: #fff;
}

.header > view > view {
	width: 120upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header > view {
	width: 660upx;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header > view > image {
	width: 330upx;
	height: 20upx;
}

.header > view > view > image {
	width: 40upx;
	height: 40upx;
}
</style>
