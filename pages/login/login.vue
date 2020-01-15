<template>
	<view class="con">
		<view class="logo">
			<image src="../../static/images/logo.png" mode="widthFix"></image>
		</view>

		<!-- 内容 -->
		<view class="main">
			<view class="dl">
				<p
					v-for="(item, i) in dl"
					:key="i"
					@tap="dengLu(i)"
					:class="[i == index ? 'p1' : '']"
				>
					{{ item }}
				</p>
			</view>
			<view v-show="p">
				<view class="phone">
					<p>邮箱地址：</p>
					<input type="text" placeholder="请输入邮箱地址" maxlength="11" />
				</view>

				<view class="yz">
					<p>验证码：</p>
					<input type="text" placeholder="请输入验证码" />
					<!-- <text v-show="text" @tap="getCode">点击获取</text> -->
					<button
						type="primary"
						size="mini"
						v-show="text"
						@tap="getCode"
						:disabled="disabled"
						plain="true"
					>
						{{
							codeTextShow == 0
								? codeText.getCode
								: codeTextShow == 1
								? count + codeText.countDown
								: codeText.getAgain
						}}
					</button>
				</view>

				<button type="primary" class="btn" @tap="dLu">登录</button>
			</view>

			<view v-show="yx">
				<view class="phone">
					<p>邮箱地址：</p>
					<input type="text" placeholder="请输入邮箱地址" maxlength="11" />
				</view>

				<view class="yz">
					<p>密码：</p>
					<input type="text" password="true" placeholder="请输入密码" />
				</view>

				<button type="primary" class="btn" @tap="dLu">登录</button>
			</view>
		</view>

		<p class="bottom">© 中国机电产品进出口商会</p>

		<!-- 弹窗 -->
<!-- 		<view class="mask" v-show="tc">
			<view class="tc">
				<h4>完善信息</h4>
				<p>为了企业对接交流，请完善公司信息</p>

				<view class="list">
					<p>
						<text style="color: red;">*</text>
						联系人：
					</p>
					<input type="text" placeholder="请输入联系人" />
					<p>
						<text style="color: red;">*</text>
						联系方式：
					</p>
					<input type="text" placeholder="请输入联系方式" />
					<p>
						<text style="color: red;">*</text>
						公司简介：
					</p>
					<textarea value="" placeholder="请输入公司简介" />
				</view>

				<button type="primary" @tap="submit">提交</button>

				<view class="btn">
					<p type="primary" plain size="mini" @tap="tiJiao">提交</p>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			codeText: {
				getCode: '获取验证码',
				countDown: 's重新获取',
				getAgain: '重新获取'
			},
			codeTextShow: 0,
			count: 59,
			disabled: false,
			dl: ['验证码登录', '密码登录'],
			index: 0,
			tc: false,
			text: true,
			p: true,
			yx: false
		};
	},
	methods: {
		dengLu(i) {
			if (i == 0) {
				this.p = true;
				this.index = i;
				this.yx = false;
			} else {
				this.p = false;
				this.yx = true;
				this.index = i;
			}
		},

		getCode() {
			this.codeTextShow = 1;
			this.disabled = true;
			let interval = setInterval(() => {
				--this.count;
			}, 1000);

			setTimeout(() => {
				clearInterval(interval);
				this.count = 59;
				this.codeTextShow = 2;
				this.disabled = false;
			}, 60000);
		},

		submit() {
			uni.navigateTo({
				url: '../index/index'
			});
		},

		dLu() {
			// this.tc = true;
			uni.navigateTo({
				url: '../index/index?id=1',
			});
			// uni.showModal({
			// 	title: '提示',
			// 	content: '为了企业对接交流，请完善公司信息',
			// 	showCancel: false,
			// 	success: function(res) {
			// 		if (res.confirm) {
			// 			uni.navigateTo({
			// 				url: '../information/information'
			// 			});
			// 		}
			// 	}
			// });
		}
	}
};
</script>

<style lang="scss">
.tc {
	z-index: 999;
	box-sizing: content-box;
	width: 85%;
	margin: 140rpx auto 0;
	animation: go_in 1s;
	background: #fff;
	padding: 20upx;

	button {
		height: 34 * 2rpx;
		line-height: 34 * 2rpx;
		margin: 160rpx 0 40rpx;
	}

	.list {
		p {
			font-size: 30rpx;
			line-height: 2;
			color: #515151;
		}
		input {
			border: 1px solid #eee;
			border-radius: 10rpx;
			color: #999;
			padding: 10rpx;
			font-size: 28rpx;
		}
		textarea {
			border: 1px solid #eee;
			color: #999;
			padding: 10rpx;
			border-radius: 10rpx;
			font-size: 28rpx;
			width: 96%;
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

.main {
	padding: 50upx 20rpx;
	background: #fff;
	margin-top: 80upx;
	box-shadow: rgba(0, 0, 0, 0.16) 1px 1px 1px 0px;
	border-radius: 2px;
	font-size: 14px;

	p {
		font-size: 28rpx;
	}

	.dl {
		display: flex;
		justify-content: space-around;
		color: #101010;
		p {
			margin: 0 10upx 30upx;
		}
	}

	input {
		border: 1px solid #c7c7c7;
		padding: 16upx;
		font-size: 28upx;
		margin: 20upx 0;
		border-radius: 7upx;
	}

	.yz {
		position: relative;
		button {
			font-size: 24rpx;
			left: 188 * 2rpx;
			// width: 200rpx;
			top: -42 * 2rpx;
			border: none;
		}
		
		uni-button[type=primary][plain][disabled] {
			color: #aaa;
		}
	}

	.btn {
		height: 68upx;
		line-height: 68upx;
		font-size: 28upx;
		margin-top: 80upx;
	}
}

.p1 {
	font-size: 28upx;
	color: rgb(35, 117, 255);
}

.logo {
	text-align: center;
	padding-top: 160upx;
	image {
		width: 400upx;
		height: 96upx;
	}
}

.con {
	width: 80%;
	margin: auto;
	.bottom {
		font-size: 24upx;
		color: #101010;
		text-align: center;
		margin-top: 200upx;
	}
}

page {
	background: rgb(247, 247, 247);
}
</style>
