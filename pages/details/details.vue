<template>
	<view>
		<my-header></my-header>

		<view class="wz">
			<p>您的位置：</p>
			<navigator style="color: #007AFF" url="../index/index">首页</navigator>
			<text style="margin: 0 10upx;">></text>
			<navigator style="color: #007AFF" url="../geRenzx/geRenzx">个人中心</navigator>
			<text style="margin: 0 10upx;">></text>
			<navigator style="color: #007AFF" url="../yuYue/yuYue">我的预约</navigator>
			<text style="margin: 0 10upx;">></text>
			<p>公司详情</p>
		</view>

		<view class="main">
			<view class="head"><p>Artepharm Co., Ltd., China</p></view>

			<!-- 基本信息 -->
			<view class="con">
				<view class="jbxx">
					<view class="left">
						<p></p>
						<h5>基本信息</h5>
					</view>
					<p>洽谈时间： 2019-11-15 10：30-11：00</p>
					<p>洽谈地点: 第七会议室</p>
				</view>

				<!-- 预约状态 -->
				<view class="yyzt">
					<view class="left">
						<p></p>
						<h5>预约状态</h5>
					</view>
					<view class="zt">
						<view>
							<text>状态：</text>
							<p v-show="yyy">已预约</p>
							<p v-show="confirm">待确认</p>
						</view>
						<view>
							<p>操作：</p>
							<button v-show="js" type="primary" size="mini" @tap="jieShou">接受</button>
							<button v-if="qx" size="mini" @tap="quXiao" style="background: #ff9800; color: #fff;">
								取消
							</button>
							<button v-else size="mini" @tap="jj">拒绝</button>
						</view>
					</view>
				</view>

				<!-- 企业介绍 -->
				<view class="qyjs">
					<view class="left">
						<p></p>
						<h5>企业介绍</h5>
					</view>
					<p>
						China Energy Engineering Group Guangdong Electric Power Design Institute (hereinafter
						called “GEDI”) was founded in 1958. As an international engineering and project
						contracting firm with National Comprehensive Class-A Engineering qualification, GEDI has
						achieved core strengths of planning and consulting, survey and design, EPC contracting
						and investment and operation. GEDI is committed to one-stop integrated solution and
						all-life-cycle management service for our clients at home and abroad in fields of power,
						nuclear, building, network and telecom, public works.
					</p>
				</view>

				<!-- 联系方式 -->
				<view class="lxfs">
					<view class="left">
						<p></p>
						<h5>联系方式</h5>
					</view>
					<view>
						<p>联系人：张小小</p>
						<p>电话：15030349874</p>
						<p>邮箱：8756@163.com</p>
					</view>
				</view>

				<!-- 留言 -->
				<view class="ly">
					<view class="left">
						<p></p>
						<h5>留言</h5>
					</view>
					<p>
						Agriculture processing company looking for development and investment support to develop
						Cocoa, Coconuts, Noni exports
					</p>
				</view>

				<!-- 返回按钮 -->
				<button type="primary" @tap="fanHui">返回</button>
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
			show: false,
			yyy: false,
			refuse: true,
			can: false,
			qx: false,
			confirm: true,
			js: true
		};
	},

	onLoad: function(option) {
		this.getId(option);
	},

	methods: {
		getId(option) {
			if (option.id == 1) {
				this.qx = true;
				this.yyy = true;
				this.confirm = false;
				this.js = false;
			}
		},

		define() {
			this.show = false;
		},

		cancel() {
			this.show = false;
		},

		fanHui() {
			uni.navigateTo({
				url: '../sub/sub'
			});
		},

		jieShou() {
			uni.showToast({
				title: '已接受'
			});
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
		},

		jj() {
			this.show = true;
			this.refuse = true;
			this.can = false;
		},

		quXiao() {
			this.show = true;
			this.can = true;
			this.refuse = false;
		}
	}
};
</script>

<style lang="scss">
.qyjs {
	p {
		display: inline-block;
		text-align: justify;
	}
}

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
	animation: go_out 2s;
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

.con {
	font-size: 24upx;
	color: #9d9d9d;

	> button {
		margin: 50upx 0;
		height: 82upx;
		line-height: 82upx;
	}

	.lxfs {
		background: #fff;
		padding: 10upx 20upx;
		margin: 20upx 0;

		view:last-child {
			p {
				margin: 15upx 0;
			}
		}
	}

	.yyzt {
		background: #fff;
		padding: 10upx 20upx;
		margin: 20upx 0;

		.zt {
			display: flex;
			align-items: center;

			view:first-child {
				display: flex;
				align-items: center;
				p {
					width: 126upx;
					height: 52upx;
					border: 1px dashed #007aff;
					color: #007aff;
					font-size: 28upx;
					text-align: center;
					line-height: 52upx;
				}
			}

			view:last-child {
				display: flex;
				align-items: center;

				button:last-child {
					background: rgb(255, 152, 0);
					margin-left: 30upx;
					color: #fff;
				}

				p {
					margin-left: 60upx;
				}
			}
		}
	}

	.left {
		display: flex;
		align-items: center;
		// margin: 30upx 0 10upx;
		line-height: 60upx;

		p {
			width: 5px;
			height: 24px;
			margin-right: 15upx;
			background-color: #007aff;
		}
		h5 {
			font-weight: 500;
			font-size: 28upx;
			color: #777777;
		}
	}

	.jbxx {
		background: #fff;
		padding: 10upx 20upx;

		p {
			font-size: 24upx;
			color: #5e5e5e;
		}
	}
}

.qyjs {
	background: #fff;
	padding: 10upx 20upx;
	margin: 20upx 0;
}

.main {
	// padding: 30upx;
	.head {
		border-bottom: 2px dashed rgb(187, 187, 187);
		margin: 10px 0 0;
		background: #fff;
		line-height: 70upx;

		p {
			text-align: center;
			font-size: 36upx;
		}
	}
}

.ly {
	background: #fff;
	padding: 10upx 20upx;
	margin: 20upx 0;
}

.wz {
	display: flex;
	font-size: 24upx;
	color: #999;
	background: #fff;
	height: 30upx;
	padding: 40upx 20upx;
	border-bottom: 1px solid rgb(236, 236, 236);
}
</style>
