<template>
	<view>
		<my-header></my-header>

		<view class="wz">
			<p>You are here：</p>
			<navigator style="color: #007AFF;" url="../index/index">home</navigator>
			<text style="margin: 0 10upx;">></text>
			<navigator style="color: #007AFF;" url="../geRenzx/geRenzx">
				personal center
			</navigator>
			<text style="margin: 0 10upx;">></text>
			<p>My Bookings</p>
		</view>

		<view class="wdyy">
			<p></p>
			<h5>My Bookings</h5>
		</view>

		<view
			class="wd"
			v-for="(item, i) in wd"
			:key="i"
			:style="{ 'border-bottom': i == wd.length - 1 ? '0' : '' }"
		>
			<view class="wdz">
				<view>
					<view><image :src="item.pic" mode="widthFix"></image></view>
					<p @tap="detail">{{ item.p1 }}</p>
				</view>
				<p>{{ item.p2 }}</p>
				<p style="text-align: left; margin: 10px 0;">{{ item.p3 }}</p>
			</view>
			<view class="wdx">
				<!-- <p>{{ item.p3 }}</p> -->
				<button
					type="primary"
					size="mini"
					style="text-align: center;"
					@tap="btn(item)"
				>
					{{ item.btn }}
				</button>
				<text
					:class="[
						item.txt == 'Confirmed' ? 't1' : item.txt == 'Confused' ? 't2' : ''
					]"
				>
					{{ item.txt }}
				</text>
			</view>
		</view>

		<!-- 弹出框 -->
		<view class="mask" v-show="yn">
			<view class="input">
				<p>Tips</p>
				<!-- <textarea placeholder="请输入拒绝理由" v-show="refuse" /> -->
				<textarea placeholder="Please enter the reason for cancellation" />
				<view>
					<p @tap="yes">YES</p>
					<p @tap="no">NO</p>
				</view>
			</view>
		</view>

		<yao-qing :tc.sync="tc" @hide="a" @show="b"></yao-qing>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tc: false,
			// refuse: true,
			// can: false,
			yn: false,
			wd: [
				{
					pic: '../../static/images/h1.png',
					p1: 'Beijing foreign languages commercial trade co. LTD',
					p2: 'Place of negotiation : Glory Oriental...',
					p3: 'Invitation time : 15:15-15:30',
					btn: 'Cancel',
					txt: 'To be confirmed'
				},
				{
					pic: '../../static/images/h1.png',
					p1: 'Beijing foreign languages commercial trade co. LTD',
					p2: 'Place of negotiation : Glory Oriental...',
					p3: 'Invitation time : 15:15-15:30',
					btn: 'Cancel',
					txt: 'Confirmed'
				},
				{
					pic: '../../static/images/h1.png',
					p1: 'Beijing foreign languages commercial trade co. LTD',
					p2: 'Place of negotiation : Glory Oriental...',
					p3: 'Invitation time : 15:15-15:30',
					btn: 'Invite again',
					txt: 'Confused'
				}
			]
		};
	},

	methods: {
		btn(item) {
			// 弹窗
			if (item.btn == 'Cancel') {
				this.yn = true;
			} else {
				this.tc = true;
			}
		},

		yes() {
			this.yn = false;
		},

		no() {
			this.yn = false;
		},

		a() {
			this.tc = false;

			uni.showModal({
				title: 'Submit successfully',
				content:
					'Submitted successfully. Submitted message sent to your account',
				// 查看邀请列表
				cancelText: 'view invitation List',
				cancelColor: '#009688',
				// 邀请其他公司
				confirmText: 'invite Another Company',
				confirmColor: '#009688',
				success(res) {
					console.log(res);
					if (res.confirm == true) {
						uni.navigateTo({
							url: '../diplayList/diplayList'
						});
					}
				}
			});
		},

		b() {
			this.tc = false;
		},

		detail() {
			uni.navigateTo({
				url: '../details/details'
			});
		}
	}
};
</script>

<style lang="scss">
// .mask {
// 	position: fixed;
// 	z-index: 999;
// 	top: 0;
// 	right: 0;
// 	left: 0;
// 	bottom: 0;
// 	background: rgba(0, 0, 0, 0.6);

// 	.nr {
// 		background: #fff;
// 		padding: 50upx;
// 		width: 530upx;
// 		height: 316upx;
// 		animation: go_in 1s;
// 		margin-left: 30px;
// 		margin-top: 215px;

// 		h5 {
// 			font-size: 40upx;
// 			margin-bottom: 40upx;
// 		}

// 		p {
// 			color: #999;
// 			font-size: 28upx;
// 		}

// 		view {
// 			text-align: right;

// 			button {
// 				margin: 140upx 20upx 20upx;
// 			}
// 		}
// 	}
// }

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
			color: #007aff;
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

@keyframes go_in {
	0% {
		opacity: 0;
		transform: translateY(50px);
	}
	100% {
		opacity: 1;
	}
}

.wd {
	background: #ffffff;
	padding: 20upx;
	margin: 20upx 0;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px;

	.wdz {
		view {
			display: flex;
			justify-content: space-between;
			align-items: center;

			view {
				background: rgb(238, 238, 238);
				width: 90upx;
				padding: 10upx;

				image {
					width: 100%;
					height: 100upx;
				}
			}

			> p {
				width: 85%;
				font-size: 28upx;
			}
		}
		> p {
			line-height: 40upx;
			font-size: 24upx;
			color: #999;
			margin: {
				left: 104upx;
				top: 20upx;
				bottom: 20upx;
			}
		}
	}

	.wdx {
		display: flex;
		align-items: center;
		text-align: right;
		> p {
			font-size: 24upx;
			color: #999;
		}

		> button {
			margin-right: 20upx;
		}

		> text {
			padding: 0 10upx;
			border: 1px dashed #007aff;
			font-size: 24upx;
			text-align: center;
			line-height: 56upx;
			border-radius: 5upx;
			color: #007aff;
		}
	}
}

.t1 {
	border-color: rgb(0, 150, 136) !important;
	color: rgb(0, 150, 136) !important;
}

.t2 {
	border-color: rgb(187, 187, 187) !important;
	color: rgb(91, 91, 91) !important;
}

.wdyy {
	background: #fff;
	display: flex;
	align-items: center;
	// margin-top: 40upx;
	padding: 20upx;

	p {
		width: 5px;
		height: 20px;
		margin-right: 10upx;
		background-color: rgb(35, 117, 255);
	}

	h5 {
		color: #999;
		font-weight: 400;
		font-size: 14px;
	}
}

.wz {
	display: flex;
	font-size: 24upx;
	color: #999;
	background: #fff;
	align-items: center;
	padding: 40upx 20upx 20upx;
	height: 30upx;
	border-bottom: 1px solid rgb(236, 236, 236);
}
</style>
