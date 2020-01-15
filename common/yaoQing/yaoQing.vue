<template>
	<view>
		<!-- 邀请弹窗 -->
		<view class="mask" v-show="tc">
			<view class="tc">
				<h4>Invitation</h4>
				<p>
					Please leave your information and choose the time if you want to have
					a B2B meeting with our company.
				</p>

				<view class="gs">
					<!-- 公司名称 -->
					<view>
						<p>
							<text style="color: #f00;">*</text>
							Your Company Name:
						</p>
						<input type="text" value="" placeholder="your Company Name" />
					</view>
					<!-- 时间选择 -->
					<view>
						<p>
							<text style="color: #f00;">*</text>
							Your Time Selection：
						</p>
						<text class="txt">企业可以通过邮件自行预约其他的时间和地点</text>
						<select
							name=""
							id=""
							style="width: 100%; height: 74upx; 
						border: 1px solid #eee; 
						color: #888;
						outline: 0;
						background: transparent;
						"
						>
							<option value="">15:00-15:15</option>
							<option value="">15:30-15:45</option>
							<option value="">Other</option>
						</select>
					</view>
					<!-- 地点选项 -->
					<view>
						<p>
							<!-- <text style="color: #f00;">*</text> -->
							Your location selection
						</p>
						<select
							name=""
							id=""
							style="width: 100%; height: 74upx; 
									border: 1px solid #eee; 
									color: #888;
									outline: 0;
									background: transparent;
							"
						>
							<option value="">Conference room 1</option>
							<option value="">Conference room 2</option>
						</select>
					</view>
					<!-- 您的姓名 -->
					<view>
						<p>
							<text style="color: #f00;">*</text>
							Your Name:
						</p>
						<input type="text" placeholder="enter your  Name" />
					</view>
					<!-- 电话号码 -->
					<view>
						<p>Your Telephone No:</p>
						<input type="text" placeholder="enter  Your  Telephone " />
					</view>
					<!-- 电子邮箱地址 -->
					<view>
						<p>
							<text style="color: #f00;">*</text>
							Your Emal Address:
						</p>
						<input type="text" placeholder="enter your Emal" />
					</view>
					<!-- 您的交流 -->
					<p>Your interflow:</p>
					<textarea value="" placeholder="Please enter your  MESSAGE" />
				</view>

				<view class="btn">
					<p type="primary" plain size="mini" @tap="tiJiao">Submission</p>
					<p type="primary" plain size="mini" @tap="fh">Ruturn</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		tc: false
	},

	data() {
		return {};
	},

	methods: {
		hide() {
			this.$emit('hide');
		},

		tiJiao() {
			this.hide();
		},

		show() {
			this.$emit('show');
		},

		fh() {
			this.show();
		}
	}
};
</script>

<style lang="scss">
.mask::-webkit-scrollbar {
	display: none;
}

.tc {
	z-index: 999;
	box-sizing: content-box;
	width: 85%;
	margin: 30upx auto 0;
	animation: go_in 1s;
	background: #fff;
	padding: 10upx 20upx;

	.btn {
		display: flex;
		justify-content: space-around;

		p {
			padding: 0 10upx;
			border: 2upx dashed #007aff;
			font-size: 24upx;
			width: 160upx;
			text-align: center;
			line-height: 50upx;
			border-radius: 10upx;
			margin: 20upx 0;
			color: #007aff;
		}
	}

	> .gs {
		p {
			font-weight: 400;
			font-size: 12px;
			color: #101010;
			height: 20px;
			margin: 20upx 0;
		}
		
		.txt {
			font-size: 24rpx;
			color: #b9b5b5;
			display: block;
			margin: -20rpx 0 20rpx;
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

	> h4 {
		font-weight: 400;
		font-size: 20px;
		color: #3e3e3e;
		text-align: center;
		height: 54upx;
		border-bottom: 1px dashed #007aff;
		width: 240upx;
		margin: auto;
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
</style>
