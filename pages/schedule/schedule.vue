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
			<p>预约日程</p>
		</view>

		<view class="wdyy">
			<p></p>
			<h5>我的预约</h5>
		</view>

		<view v-for="(item, i) in list" :key="i">
			<view class="main">
				<view class="d1">
					<image :src="item.pic"></image>
					<view>
						<h4>{{ item.h4 }}</h4>
						<view>
							<p>{{ item.p1 }}</p>
							<h6>{{ item.h6 }}</h6>
						</view>
						<p>{{ item.p2 }}</p>
					</view>
				</view>
			</view>

			<!-- 			<view class="d2">
				<view v-for="(item, i) in item.sjd" :key="i" @tap="sj(i)" :class="[i == index ? 'a1' : '']">
					<view>
						<image
							v-show="i !== 0 ? image1 == false : image1 == true"
							:src="item.pic"
							mode="widthFix"
						></image>
						<image
							v-show="i == 0 ? image2 == true : image2 == false"
							:src="item.pic1"
							mode="widthFix"
						></image>
					</view>
					<p>{{ item.p }}</p>
				</view>
			</view> -->

			<!-- 时间段显示 -->
			<view class="d3">
				<view v-for="(item, i) in item.d3" :key="i">
					<view class="c" v-show="t">
						<!-- <p class="time">{{ item.time }}</p> -->

						<view class="lxr" v-show="shiJian">
							<view @tap="detail(item)">
								<!-- <image src="../../static/logo.png" mode="widthFix"></image> -->
								<view>
									<view class="sJian">
										<h2>{{ item.h1 }}</h2>
										<text>——</text>
										<h2>{{ item.h2 }}</h2>
									</view>
									<p v-show="true ? item.qr !== '空闲' : ''">{{ item.name }}</p>
									<!-- <p>电话：{{ item.phone }}</p> -->
								</view>
								<p
									:class="[
										item.qr == '空闲' ? 'pq' : item.qr == '已预约' ? 'yyy' : ''
									]"
								>
									{{ item.qr }}
								</p>
							</view>

							<p v-show="true ? item.qr !== '空闲' : ''">{{ item.p1 }}</p>
							<view class="btn">
								<button size="mini" @tap="jieShou">{{ item.js }}</button>
								<button
									size="mini"
									@tap="q(item)"
									:class="[item.qx == '取消' ? 'q1' : '']"
								>
									{{ item.qx }}
								</button>
							</view>
						</view>
						<!-- 暂无预约 -->
						<view v-show="true ? item.qr == '空闲' : ''">
							<view class="zanWu">
								<view>
									<image
										src="../../static/images/zanWu.png"
										mode="widthFix"
									></image>
								</view>
								<p>暂无预约</p>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 邀约方显示 -->
			<view v-show="yaoYue" class="yyf">
				<view class="lxr" v-for="(item, i) in item.d3" :key="i">
					<view>
						<!-- <image src="../../static/logo.png" mode="widthFix"></image> -->
						<view>
							<p @tap="detail(item)">{{ item.name }}</p>
							<!-- <p>电话：{{ item.phone }}</p> -->
						</view>
						<p
							:class="[
								item.qr == '空闲' ? 'pq' : item.qr == '已预约' ? 'yyy' : ''
							]"
						>
							{{ item.qr == '空闲' ? '已拒绝' : item.qr }}
						</p>
					</view>

					<p>{{ item.p1 }}</p>
					<view class="sjd">
						<p>预约时间段：</p>
						<text style="color: #007AFF;">{{ item.t1 }}</text>
					</view>
					<view class="btn">
						<button size="mini" @tap="jieShou">{{ item.js }}</button>
						<button
							size="mini"
							@tap="q(item)"
							:class="[item.qx == '取消' ? 'q1' : '']"
						>
							{{ item.qx }}
						</button>
					</view>
				</view>
			</view>
		</view>

		<!-- <my-popup :show.sync="show" @h="show = false"></my-popup> -->

		<!-- 弹出框 -->
		<view class="mask" v-show="show">
			<view class="input">
				<p>通知</p>
				<textarea placeholder="请输入拒绝理由" v-show="refuse" />
				<textarea placeholder="请输入取消理由" v-show="can" />
				<view>
					<p @tap="define">确定</p>
					<p @tap="cancel">取消</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			shiJian: true,
			refuse: true,
			can: false,
			yaoYue: false,
			show: false,
			s_obj: false,
			// s_obj: {
			// 	show_in: false,
			// 	show_out: false
			// },
			zwyy: false,
			image1: false,
			image2: true,
			t: true,
			index: 0,
			list: [
				{
					pic: '../../static/logo.png',
					h4: '第二届中日第三方市场合作A',
					p1: '2019-11-15',
					h6: '洽谈地址：第七会议室',
					p2: '主论坛拟由双方主办单位负责人作主旨发言经济团体及企代表发言',
					sjd: [
						{
							pic: '../../static/images/shiJian.png',
							pic1: '../../static/images/shiJianActive.png',
							p: '时间段显示'
						},
						{
							pic: '../../static/images/yaoYueF.png',
							pic1: '../../static/images/yaoYueFActive.png',
							p: '邀约方显示'
						}
					],
					d3: [
						{
							h1: '15:00',
							h2: '15:15',
							time: '15:00-15:15',
							name: '公司：Artepharm Co., Ltd., China',
							phone: '010-149146124',
							qr: '待确认',
							p1:
								'简介：主论坛拟由双方主办单位负责人作主旨发言经济团体及企代表发言 ',
							js: '接受',
							qx: '拒绝',
							t1: '15:00-15:15'
						},
						{
							h1: '15:15',
							h2: '15:30',
							time: '15:00-15:15',
							name: '公司：Artepharm Co., Ltd., China',
							phone: '010-149146124',
							qr: '已预约',
							p1:
								'简介：主论坛拟由双方主办单位负责人作主旨发言经济团体及企代表发言',
							qx: '取消',
							t1: '15:15-15:30'
						},
						{
							h1: '15:30',
							h2: '15:45',
							time: '15:00-15:15',
							name: '公司：Artepharm Co., Ltd., China',
							phone: '010-149146124',
							qr: '邀约待确认',
							p1:
								'简介：主论坛拟由双方主办单位负责人作主旨发言经济团体及企代表发言',
							qx: '取消',
							t1: '15:15-15:30'
						},
						{
							h1: '14:00',
							h2: '14:30',
							time: '15:00-15:15',
							name: '公司：Artepharm Co., Ltd., China',
							phone: '010-149146124',
							qr: '空闲',
							p1:
								'简介：主论坛拟由双方主办单位负责人作主旨发言经济团体及企代表发言',
							t1: '14:00-14:30'
						}
					]
				}
			]
		};
	},

	// onLoad() {
	// 	if (this.list.d3.length == 0) {
	// 		this.zwyy = true;
	// 	} else {
	// 		this.zwyy = false;
	// 	}
	// },

	methods: {
		define() {
			this.show = false;
		},

		cancel() {
			this.show = false;
		},

		jieShou() {
			uni.showToast({
				title: '已接受'
			});
		},

		// activity() {
		// 	uni.navigateTo({
		// 		url: '../activity/activity'
		// 	});
		// },

		qd() {
			this.tz = false;
		},

		qx() {
			this.tz = false;
			this.s_obj = true;
		},

		q(item) {
			this.show = true;
			if (item.qx == '取消') {
				this.can = true;
				this.refuse = false;
			} else {
				this.can = false;
				this.refuse = true;
			}
		},

		sj(i) {
			if (i == 0) {
				this.t = true;
				this.shiJian = true;
				this.index = i;
				this.image1 = false;
				this.image2 = true;
				this.yaoYue = false;
			} else {
				this.t = false;
				this.index = i;
				this.image1 = true;
				this.image2 = false;
				this.shiJian = false;
				this.yaoYue = true;
			}
		},

		detail(item) {
			if (item.qr == '待确认') {
				uni.navigateTo({
					url: '../details/details'
				});
			} else if (item.qr == '已预约') {
				uni.navigateTo({
					url: '../details/details?id=1'
				});
			}
		},

		yyf() {
			this.t = false;
			this.yaoYue = true;
			this.shiJian = false;
		},

		xiaoXi() {
			uni.navigateTo({
				url: '../news/news'
			});
		},

		yongHu() {
			uni.navigateTo({
				url: '../geRenzx/geRenzx'
			});
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
	animation: go_out 0.3s;
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

.sJian {
	display: flex;
	align-items: center;

	h2:first-child {
		border-left: 10upx solid #007aff;
		padding-left: 20upx;
	}

	text {
		margin: 0 20upx;
	}
}

.d3 {
	> view {
		margin: 10upx 0;
	}
}

.pq {
	border: 1px dashed rgb(130, 130, 130) !important;
	color: rgb(125, 125, 125) !important;
}

.main {
	background: #fff;
	padding: 20upx;
	margin: 40upx 0 20upx;
}

.c {
	background: #fff;
	// margin: 20upx 0;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px;
}

.time {
	line-height: 60upx;
	font-size: 32upx;
	color: #828282;
	width: 95%;
	margin: auto;
	border-bottom: 1px dashed #c1c1c1;
}

.zanWu {
	text-align: center;

	view {
		width: 120upx;
		height: 120upx;
		border-radius: 100%;
		text-align: center;
		background: rgb(242, 242, 242);
		margin: -50upx auto 0;
		display: flex;
		align-items: center;
		justify-content: center;

		image {
			width: 50upx;
			height: 50upx;
		}
	}

	p {
		font-size: 28upx;
		line-height: 3;
	}
}

.q1 {
	background: #2375ff !important;
}

.btn {
	text-align: right;
	button:first-child {
		margin: 0 10upx;
		color: #fff;
		background: rgb(35, 117, 255);
	}
	button {
		background: rgb(255, 152, 0);
		color: #fff;
		font-size: 26rpx;
	}
}

.lxr {
	margin: 10upx 0;
	padding: 20upx;
	background: #fff;
	// box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px;

	.sjd {
		display: flex;
		font-size: 24upx;
		margin-left: 30upx;
		margin-top: 20upx;

		p {
			color: #999;
		}

		text {
			color: #999;
		}
	}

	> p {
		font-size: 24upx;
		color: #999;
		// margin-left: 30upx;
		margin-bottom: 20upx;
		// line-height: 2;
		margin-top: 12upx;
		width: 400upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	> view:first-of-type {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28upx;
		margin-top: 20upx;

		view {
			margin-right: 30upx;
			p {
				margin: 20upx 0 0;
				font-size: 28upx;
				color: #000;
			}
		}

		image {
			border-radius: 100%;
			height: 80upx;
			width: 80upx;
		}

		> p {
			border: 1px dashed #007aff;
			color: #007aff;
			width: 158upx;
			border-radius: 10upx;
			text-align: center;
			line-height: 24 * 2upx;
			height: 24 * 2upx;
		}
	}
}

.d1 {
	display: flex;
	align-items: center;
	> view {
		width: 70%;
		h4 {
			font-weight: 400;
			color: #101010;
			font-size: 32upx;
		}

		p {
			color: #101010;
			font-size: 24upx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		view {
			display: flex;
			margin-top: 20upx;
			justify-content: space-between;
			p {
				color: #999;
				font-size: 24upx;
			}
			h6 {
				color: #999;
				font-weight: 500;
			}
		}
	}
	image {
		width: 30%;
		height: 140upx;
		margin-right: 20upx;
	}
}

.yyy {
	color: rgb(0, 150, 136) !important;
	border: 1px dashed rgb(0, 150, 136) !important;
}

.a1 {
	p {
		color: #007aff !important;
	}
}

.yyf {
	// background: #fff;
	// padding: 20upx;
}

.d2 {
	display: flex;
	align-items: center;
	justify-content: space-around;
	background: #fff;
	margin: 20upx;
	border-radius: 20upx;

	view {
		text-align: center;
		// background: #fff;
		padding: 4upx 0;
		width: 300upx;

		view {
			// background: rgb(240, 240, 240);
			// border-radius: 100%;
			// width: 80upx;
			// height: 70upx;
			// margin: auto;

			image {
				width: 50upx;
				height: 50upx;
				margin-top: 10upx;
			}
		}

		p {
			font-size: 24upx;
			color: #ccc;
		}
	}
}

.wdyy {
	background: #fff;
	display: flex;
	align-items: center;
	margin-top: 20upx;
	padding: 20upx;
	margin-bottom: -40upx;

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
	background: #fff;
	padding: 60upx 20upx 25upx;
	height: 30upx;
	border-bottom: 1px solid rgb(236, 236, 236);
}
</style>
