<template>
	<view class="con">
		<my-header></my-header>
		<image
			style="width: 100%;"
			src="../../static/images/h1.png"
			mode="widthFix"
		></image>

		<view class="top">
			<image src="../../static/images/sj.png" mode="widthFix"></image>
			<p>Enterprise Show</p>
		</view>
		<view class="example-body">
			<uni-search-bar
				placeholder="Please enter keywords"
				@confirm="search"
				@input="input"
			/>
		</view>

		<view v-for="(it, index) in list" :key="index">
			<p class="tj">Recommend</p>
			<view class="c">
				<view class="t">
					<image src="../../static/images/h1.png" mode="widthFix"></image>
					<view>
						<h5 @tap="zhuanTi">{{ it.h5 }}</h5>
						<p>{{ it.p1 }}</p>
					</view>
				</view>
				
				<view class="b">
					<text>{{ it.t }}</text>
					<text>{{ it.count }}</text>
					<p>{{ it.p2 }}</p>
				</view>

				<view class="an">
					<button type="primary" size="mini" plain="true" @tap="yywd">
						邀约我的
					</button>
					<button type="primary" size="mini" plain="true" @tap="wyyd">
						我邀约的
					</button>
					<button type="primary" size="mini" plain="true" @tap="arrange">
						日程安排
					</button>
				</view>

				<!-- 		<view class="btn">
					<button type="primary" size="mini" @tap="zhuanTi">
						Activity details
					</button>
					<button type="primary" size="mini" @tap="ybm">
						Registered company
					</button>
				</view> -->
			</view>
			<view
				class="main"
				v-for="(item, i) in it.main.slice(0, it.main[0].pageSize)"
				:key="i"
			>
				<view class="y"></view>
				<view class="head">
					<image :src="item.pic" mode="widthFix"></image>
					<p @tap="zhanShi">{{ item.p1 }}</p>
				</view>

				<view class="nr">
					<view>
						<view
							class="p1"
							v-for="(item, i) in item.p"
							@tap="qh(i)"
							:key="i"
							:style="{
								color:
									item.p2 == 'Booked'
										? 'red' || color
										: item.p2 == 'to be confirmed'
										? '#007aff'
										: ''
							}"
						>
							<p>{{ item.p1 }}</p>
							<p>{{ item.p2 }}</p>
							<!-- {{ item.p2 }} -->
						</view>
						<!-- 预约 -->
						<!-- 		<p class="p2" @tap="yud">{{ item.p3 }}</p>
						<p class="p1" @tap="daKai">{{ item.p6 }}</p> -->
						<!-- 已确认 -->
						<!-- <p class="p3" @tap="yiqr">{{ item.p4 }}</p> -->
					</view>
					<p>{{ item.p5 }}</p>
				</view>
			</view>
			<view class="loading">
				<button
					type="primary"
					plain="true"
					@tap="loading(index, it)"
					v-if="true ? it.main[0].pageSize < it.main.length : ''"
				>
					{{ it.loading }}
				</button>
				<p v-else>没有更多了</p>
			</view>

			<!-- 弹窗 -->
			<view class="mask" v-show="tanc">
				<view class="tc">
					<view>
						<p>Corporate：</p>
						<text>Artepharm Co, Ltd</text>
						<icon type="clear" size="24" @tap="yc" style="text-align: right;" />
					</view>
					<view>
						<p>time：</p>
						<text>15:15-15:30</text>
					</view>
					<view>
						<p>place：</p>
						<text>Glory Orientalam B</text>
					</view>

					<!-- <p>Waiting for appointment</p> -->
				</view>
			</view>
		</view>

		<view class="footer">
			<button type="primary" @tap="fanHui">HOME</button>
		</view>

		<yao-qing :tc.sync="tc" @hide="a" @show="b"></yao-qing>
	</view>
</template>

<script>
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue';
import uniSection from '@/components/uni-section/uni-section.vue';
export default {
	components: {
		uniSearchBar,
		uniSection
	},
	data() {
		return {
			tc: false,
			tanc: false,
			show: true,
			isShow: false,
			count: 0, // 每点一次加载更多 +1
			pageStart: 0,
			// pageSize: 5, // 第一次显示5条
			page: 5,
			isShowTip: false,
			li: [{ name: '1123' }, { name: 'aff' }],
			list: [
				{
					h5: 'The second third market cooperation between China ...',
					p1:
						'main BBS is intended to be issued by the principals of the ponsoring units of',
					t: 'Venue: Tokyo, Japan',
					count: '企业数量：15',
					p2: '2019-11-15 12:12:50',
					loading: '加载更多',
					main: [
						{
							pic: '../../static/images/biaoQian.png',
							pageSize: 5,
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						},
						{
							pic: '../../static/images/biaoQian.png',
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						},
						{
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							pic: '../../static/images/biaoQian.png',
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						},
						{
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							pic: '../../static/images/biaoQian.png',
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						},
						{
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							pic: '../../static/images/biaoQian.png',
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						},
						{
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							pic: '../../static/images/biaoQian.png',
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						}
					]
				},
				{
					h5: 'The second third market cooperation between China ...',
					p1:
						'main BBS is intended to be issued by the principals of the ponsoring units of',
					t: 'Venue: Tokyo, Japan',
					count: '企业数量：10',
					p2: '2019-11-15 12:12:50',
					loading: '加载更多',
					main: [
						{
							pageSize: 5,
							pic: '../../static/images/biaoQian.png',
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						},
						{
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							pic: '../../static/images/biaoQian.png',
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						},
						{
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							pic: '../../static/images/biaoQian.png',
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						},
						{
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							pic: '../../static/images/biaoQian.png',
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						},
						{
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							pic: '../../static/images/biaoQian.png',
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						},
						{
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							pic: '../../static/images/biaoQian.png',
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						},
						{
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							pic: '../../static/images/biaoQian.png',
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						},
						{
							p: [
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:15-15:30',
									p2: 'Booked'
								},
								{
									p1: '15:00-15:15',
									p2: 'fee'
								},
								{
									p1: '15:45-16:00',
									p2: 'to be confirmed'
								}
							],
							pic: '../../static/images/biaoQian.png',
							p1: '01-Beijing commercial trade co. LTD',
							p2: '15:00-15:15 fee',
							p6: '15:30-15:45 fee',
							p3: '15:15-15:30 Booked',
							p4: '15:45-16:00 to be confirmed',
							p5:
								'China Energy Engineering Group Guangdong China EnergyEngineering GroupGuangdong'
						}
					]
				}
			]
		};
	},

	methods: {
		fanHui() {
			uni.navigateTo({
				url: '../index/index'
			});
		},

		loading(i, it) {
			let pageSize = it.main[0].pageSize;
			uni.showLoading({
				title: '加载中'
			});
			if (i == 0 && pageSize < it.main.length) {
				setTimeout(() => {
					uni.hideLoading();
				}, 500);
				it.main.slice(0, pageSize);
				it.main[0].pageSize += 5;
			} else {
				it.main[0].pageSize += 5;
				setTimeout(() => {
					uni.hideLoading();
				}, 500);
			}
		},

		arrange() {
			uni.navigateTo({
				url: '../sub/sub?id=3'
			});
		},

		yywd() {
			uni.navigateTo({
				url: '../sub/sub?id=1'
			});
		},

		wyyd() {
			uni.navigateTo({
				url: '../sub/sub?id=2'
			});
		},

		yc() {
			this.tanc = false;
		},

		zs() {
			uni.navigateTo({
				url: '../zhanShi/zhanShi'
			});
		},

		qh(i) {
			if (i == 0) {
				this.tc = true;
			} else if (i == 1) {
				this.tanc = true;
			} else if (i == 2) {
				this.tc = true;
			} else if (i == 3) {
				this.tanc = true;
			}
		},

		zhuanTi() {
			uni.navigateTo({
				url: '../activity/activity'
			});
		},

		ybm() {
			uni.navigateTo({
				url: '../baoMing/baoMing'
			});
		},

		a() {
			this.tc = false;
			uni.showModal({
				title: 'Submit successfully',
				content:
					'Submitted successfully. Submitted message sent to your account',
				// 查看邀请列表
				cancelText: 'view invitation List',
				// cancelColor: '#009688',
				// 邀请其他公司
				confirmText: 'invite Another Company',
				// confirmColor: '#009688',
				success(res) {
					if (res.confirm == true) {
						uni.navigateTo({
							url: '../diplayList/diplayList'
						});
					} else {
						uni.navigateTo({
							url: '../sub/sub?id=2'
						});
					}
				}
			});
		},

		search(e) {
			// console.log(e);
		},

		input(e) {
			// var that = this
			// if (e.value && e.value.length > 0) {
			// 	that.isShow = true;
			// 	console.log(that.li[0].name);
			// 	that.list = that.list.filter((item) => {
			// 		let reg = new RegExp(e.value, 'g');
			// 		// let reString = '<span>' + e.value + '</span>'
			// 		if (that.li[0].name.match(reg)) {
			// 			that.li[0].name = that.li[0].name.replace(reg)
			// 			return that.li[0].name
			// 		}
			// 	})
			// } else if (e.value === '') {
			// 	that.isShow = false
			// }
		},

		b() {
			this.tc = false;
		},

		zhanShi() {
			uni.navigateTo({
				url: '../zhanShi/zhanShi'
			});
		},

		daKai() {
			this.tc = true;
		},

		yud() {
			this.tanc = true;
		},

		yiqr() {
			this.tanc = true;
		}
	}
};
</script>

<style lang="scss">
.loading {
	button {
		font-size: 16px;
		width: 90%;
		color: #999;
		border-color: #999;
	}

	p {
		font-size: 32rpx;
		color: #999;
		text-align: center;
	}
}

.an {
	display: flex;
	// justify-content: space-around;
	align-items: center;
	margin-top: -10rpx;

	button:nth-child(2) {
		border-width: 0 1px;
		border-style: solid;
		border-color: #ededed;
	}

	button {
		line-height: 80rpx;
		width: 35%;
		border: 0;
		border-radius: 0;
	}
}

.btn {
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 40upx 0;
}

.mask {
	position: fixed;
	z-index: 999;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.6);

	.tc {
		background: #ffffff;
		padding: 50rpx 30rpx;
		min-height: 80upx;
		font-size: 30upx;
		line-height: 1.4;
		color: #999;
		position: relative;
		max-height: 800upx;
		width: 80%;
		animation: go_in 1s;
		margin: 60% auto;
		border-radius: 10upx;

		> p {
			font-size: 12px;
			background: #007aff;
			color: #fff !important;
			border-radius: 5px;
			text-align: center;
			margin-top: 80upx;
			line-height: 30px;
			width: 55%;
			margin-left: 230upx;
		}

		view {
			display: flex;
			align-items: center;

			icon {
				position: absolute;
				right: 20rpx;
				top: 10rpx;
			}

			> p {
				font-weight: 700;
				color: #101010;
				width: 200upx;
				text-align: right;
			}
		}
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

.footer {
	// position: fixed;
	// bottom: 0;
	// left: 0;
	// height: 120upx;
	// width: 100%;
	// padding: 20upx 0;
	// background: #fff;
	// box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10upx 0px;

	button {
		width: 580upx;
		line-height: 80upx;
		margin: 40upx auto;
	}
}

.main {
	background: #fff;
	padding: 20upx;
	position: relative;
	margin: 10upx 0;

	.nr {
		> p {
			font-size: 24upx;
			color: #999;
			margin-left: 10upx;
		}

		> view {
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;

			.p1 {
				background: #eee;
				border-radius: 10upx;
				font-size: 24upx;
				padding: 0 20upx;
				width: 260upx;
				margin: 20upx 0;
				color: #009688;
				text-align: center;
				line-height: 50upx;
			}
		}
	}

	.head {
		height: 80upx;
		border-bottom: 1px solid #eee;
		image {
			width: 30upx;
			height: 30upx;
		}

		p {
			text-align: center;
			font-size: 28upx;
			color: #999;
			margin-top: -20upx;
		}
	}
}

.y {
	width: 80upx;
	height: 40upx;
	position: absolute;
	left: 50%;
	top: 0;
	margin-left: -40upx;
	// border:1px solid black;
	border-radius: 0 0 100px 100px;
	text-align: center;
	background: #ededed;
}

.c {
	background: #fff;
	padding: 20upx;
	margin-top: 40upx;

	.b {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24upx;
		color: #999;
		margin: 20upx 0;

		p {
			color: #007aff;
		}
	}

	.t {
		display: flex;
		align-items: center;
		image {
			width: 40%;
			height: 40vh;
			// height: 150upx !important;
			margin-right: 20upx;
		}

		view {
			width: 70%;

			h5 {
				font-weight: 400;
				font-size: 32upx;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			p {
				color: #999;
				font-size: 24upx;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
	}

	.b {
	}
}

.tj {
	color: #007aff;
	font-size: 24upx;
	padding: 20upx 20upx 0;
	margin-bottom: -20upx;
}

.top {
	display: flex;
	background: #ffffff;
	align-items: center;
	margin-top: -10upx;
	padding: 20upx;
	image {
		width: 40upx;
		height: 40upx;
	}

	p {
		color: #999999;
		margin-left: 10upx;
		font-size: 28upx;
	}
}
</style>
