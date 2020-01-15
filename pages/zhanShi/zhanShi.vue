<template>
	<view class="con">
		<my-header></my-header>
		<image
			style="width: 100%; margin-bottom: -10upx;"
			src="../../static/images/h1.png"
			mode="widthFix"
		></image>

		<view class="ac"><p>Beijing foreign languages commer</p></view>

		<view class="s" v-for="(item, i) in s" :key="i">
			<view class="top">
				<p>{{ item.p1 }}</p>
				<h4>{{ item.h4 }}</h4>
			</view>
			<p>{{ item.p2 }}</p>
		</view>

		<view class="sc">
			<view v-for="(item, i) in sc" :key="i">
				<image :src="item.pic" mode="widthFix"></image>
				<p>{{ item.p }}</p>
			</view>
		</view>

		<view class="tc">
			<h4>Invitation</h4>
			<p>
				Please leave your information and choose the time if you want to have a
				B2B meeting with our company.
			</p>

			<view>
				<!-- 公司名称 -->
				<p>
					<text style="color: #f00">*</text>
					Your Company Name:
				</p>
				<input type="text" value="" placeholder="your Company Name" />
				<!-- 时间选择 -->
				<p>
					<text style="color: #f00">*</text>
					Your Time Selection：
				</p>
				<select
					style="width: 100%; height: 70upx; 
						border: 1px solid #eee; 
						color: #888;
						outline: 0;
						margin: 20upx 0;
						padding: 10upx 0;
						background: 0;
						"
				>
					<option>15:00-15:15</option>
					<option>15:30-15:45</option>
				</select>
				<!-- 您的姓名 -->
				<p>
					<text style="color: #f00">*</text>
					Your Name:
				</p>
				<input type="text" placeholder="enter your  Name" />
				<!-- 电话号码 -->
				<p>Your Telephone No:</p>
				<input type="text" placeholder="enter  Your  Telephone " />
				<!-- 电子邮箱地址 -->
				<p>
					<text style="color: #f00">*</text>
					Your Emal Address:
				</p>
				<input type="text" placeholder="enter your Emal" />
				<!-- 您的交流 -->
				<p>Your interflow:</p>
				<textarea value="" placeholder="Please enter your  MESSAGE" />
				<view class="btn"><p @tap="ok">Submission</p></view>
			</view>
		</view>

		<view class="footer">
			<button type="primary" @tap="fanHui">Return</button>
			<view class="ok">
				<h6>leave a message:</h6>
				<view>
					<view>
						<input type="text" value="" placeholder="leave word" />
						<p @tap="ok">OK</p>
					</view>
					<image src="../../static/images/xiuGai.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			sc: [
				{
					pic: '../../static/images/shouCang.png',
					p: 'Contact Person: Wu Guangjian'
				},
				{
					pic: '../../static/images/phone.png',
					p: 'Phone Number: +86 020-32118822'
				},
				{
					pic: '../../static/images/youXiang.png',
					p: 'Email: qiuhaoxuan@gedi.com.cn'
				}
			],

			s: [
				{
					p1: '',
					h4: 'Company Profile',
					p2: `China Energy Engineering Group Guangdong Electric Power Design Institute
				(hereinafter called “GEDI”) was founded in 1958. As an international
				engineering and project contracting firm with National Comprehensive
				Class-A Engineering qualification, GEDI has achieved core strengths of
				planning and consulting, survey and design, EPC contracting and
				investment and operation. GEDI is committed to one-stop integrated
				solution and all-life-cycle management service for our clients at home
				and abroad in fields of power, nuclear, building, network and telecom,
				public works.`
				},
				{
					p1: '',
					h4: 'Business Area',
					p2: `Energy-Electric Power`
				},
				{
					p1: '',
					h4: 'Matchmaking Intention',
					p2: `Energy-Electric Power`
				}
			]
		};
	},

	methods: {
		ok() {
			uni.showModal({
				title: 'prompt',
				content: 'Submitted successfully',
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
					} else {
						uni.navigateTo({
							url: '../sub/sub?id=2'
						});
					}
				}
			});
		},

		fanHui() {
			uni.navigateTo({
				url: '../diplayList/diplayList'
			});
		}
	}
};
</script>

<style lang="scss">
.footer {
	position: fixed;
	bottom: 0;
	left: 0;
	height: 220upx;
	width: 100%;
	padding: 40upx 0;
	background: #fff;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10upx 0px;

	.ok {
		padding: 20upx;
		position: relative;

		image {
			width: 30upx;
			position: absolute;
			height: 30upx;
			right: 170upx;
			bottom: 32upx;
		}

		> view {
			view {
				display: flex;
				align-items: center;
				justify-content: space-around;
				position: relative;

				input {
					width: 500upx;
					height: 56upx;
					color: #999;
					background: rgb(247, 243, 243);
					border-radius: 40upx;
					padding: 0 30upx;
				}

				p {
					background: rgba(187, 187, 187, 0.26);
					font-size: 24upx;
					border-radius: 50%;
					padding: 10upx;
					color: #101010;
				}
			}
		}

		h6 {
			font-size: 24upx;
			color: #999;
			margin: 20upx 0;
		}
	}

	button {
		width: 580upx;
		line-height: 80upx;
		margin: auto;
	}
}

.btn {
	p {
		padding: 0 5px;
		border: 1px dashed #007aff;
		font-size: 12px;
		text-align: center;
		line-height: 28px;
		border-radius: 2px;
		color: #007aff !important;
		width: 212upx;
		margin-top: 20upx;
		margin-bottom: 380upx;
	}
}

.tc {
	z-index: 999;
	box-sizing: content-box;
	padding: 20upx;
	background: #fff;
	margin: auto;

	> view {
		p {
			font-weight: 400;
			font-size: 12px;
			color: #101010;
		}

		input {
			border: 1px solid #eee;
			margin: 20upx 0;
			padding: 16upx 10upx;
			font-size: 26upx;
			color: #999;
		}

		textarea {
			border: 1px solid #eee;
			height: 140upx;
			color: #999;
			width: 96%;
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
		height: 60upx;
		border-bottom: 1px dashed #007aff;
		width: 240upx;
		margin: auto;
	}

	> p {
		font-size: 24upx;
		color: #999;
		margin: 20upx 0;
		text-align: center;
	}
}

.mask {
	width: 375px;
	height: 814px;
	position: fixed;
	left: 0px;
	top: 0px;
	z-index: 999;
	background-color: rgba(49, 49, 49, 0.5);
}

.sc {
	box-shadow: rgba(0, 0, 0, 0.29) 0px 1px 2px 0px;
	background: #fff;
	height: 150upx;
	padding: 20upx;
	border-bottom: 1px solid #eee;

	> view {
		display: flex;
		align-items: center;
		line-height: 50upx;

		p {
			font-size: 24upx;
			margin-left: 20upx;
		}

		image {
			width: 40upx;
			height: 40upx;
		}
	}
}

.s {
	padding: 20upx;
	background: #ffffff;
	// margin-bottom: 20upx;
	border-bottom: 1px solid #eee;

	> p {
		font-size: 24upx;
		color: #999;
		margin-top: 20upx;
		margin-left: 26upx;
		display: inline-block;
		text-align: justify;
		line-height: 40upx;
	}

	.top {
		display: flex;
		align-items: center;
		p {
			width: 4px;
			height: 20px;
			background: #007aff;
			font-size: 14px;
			margin-right: 20upx;
		}
		h4 {
			font-weight: 400;
			font-size: 32upx;
			color: #424242;
		}
	}
}

.ac {
	background: #fff;

	> p {
		font-size: 36upx;
		color: #101010;
		text-align: center;
		line-height: 70upx;
		background: #fff;
		border-bottom: 1px dashed rgb(187, 187, 187);
	}
}
</style>
