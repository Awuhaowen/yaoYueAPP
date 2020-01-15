<template>
	<view>
		<my-header></my-header>
		<image style="width: 100%;" src="../../static/images/h1.png" mode="widthFix"></image>
		<!-- 活动专题 -->
		<view class="head">
			<p></p>
			<view>
				<h4>活动专题</h4>
				<p>为落实中日两国领导人重要共识，经双方商定，经双方商定</p>
				<h5>2019-09-22 18:30</h5>
			</view>
		</view>

		<view class="main" v-for="(item, i) in m" :key="i">
			<view class="ms">
				<view class="mt">
					<image src="../../static/logo.png" mode="widthFix"></image>
					<view @tap="yy">
						<h4>{{ item.sc }}</h4>
						<p>{{ item.diDian }}</p>
					</view>
					<p>{{ item.rm }}</p>
				</view>

				<view class="mc">
					<p>{{ item.fy }}</p>
				</view>

				<view class="pf">
					<view class="join">
						<view>
							<image src="../../static/images/xing.png" mode="widthFix"></image>
							<text>{{ item.fs }}</text>
						</view>
						<p>{{ item.cj }}</p>
					</view>

					<p @tap="yy">详情>></p>
				</view>
			</view>

			<view class="mb">
				<view>
					<p @tap="join">{{ item.cjyy }}</p>
					<text>{{ item.time }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			m: [
				{
					sc: '第二届中日第三方市场B 第二届中日第三方市场A',
					diDian: '会议地点 第八会议室',
					rm: '热门',
					fy: '主论坛拟由双方主办单位负责人作主旨发言，经济团体及企业代表发言',
					fs: '4.8',
					cj: '426参加',
					cjyy: '参加邀约',
					time: '2019-11-15 18:30'
				},
				{
					sc: '第二届中日第三方市场A 第二届中日第三方市场A',
					diDian: '会议地点 第六会议室',
					rm: '热门',
					fy: '主论坛拟由双方主办单位负责人作主旨发言，经济团体及企业代表发言',
					fs: '5.0',
					cj: '500参加',
					cjyy: '参加邀约',
					time: '2019-11-15 18:30'
				}
			]
		};
	},

	methods: {
		xiaoXi() {
			uni.navigateTo({
				url: '../news/news'
			});
		},

		join() {
			uni.showModal({
				title: '是否参加邀约',
				content:
					'● 参加邀约后会以短信或者邮件的方式提醒组办方。 \n ● 参加邀约后您在个人中心的状态也会改变',
				cancelText: '否',
				cancelColor: '#007aff',
				confirmText: '是',
				confirmColor: '#007aff',
				success(res) {
					if (res.confirm == true) {
						uni.showToast({
							title: '参加会议成功'
						});
					}
				}
			});
		},

		yy() {
			uni.navigateTo({
				url: '../activity/activity'
			});
		},

		yongHu(i) {
			console.log(i);
			uni.navigateTo({
				url: '../yuYue/yuYue'
			});
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

.main {
	.mb {
		margin-bottom: 95upx;

		view {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 24upx;
			background: #fff;
			margin: -18upx 20upx;
			padding: 20upx;
			border-top-right-radius: 15px;
			border-top-left-radius: 15px;
			p {
				color: rgba(35, 117, 255, 1);
				width: 130upx;
				height: 44upx;
				border: 1px dashed rgb(35, 117, 255);
				border-radius: 30upx;
				text-align: center;
				line-height: 44upx;
			}

			text {
				font-size: 24upx;
				color: #999;
			}
		}
	}

	.ms {
		background: #fff;
		margin: 20upx;
		padding: 30upx;
		border-bottom-right-radius: 30upx;
		border-bottom-left-radius: 30upx;

		.pf {
			display: flex;
			align-items: center;
			justify-content: space-between;

			> view {
				display: flex;
				align-items: center;
			}

			> p {
				font-size: 24upx;
				color: #007aff;
			}

			.join {
				> p {
					font-size: 24upx;
					color: #8c8c8c;
					margin-top: 10upx;
					margin-left: 30upx;
				}
				view {
					image {
						width: 20upx;
						height: 20upx;
					}

					text {
						font-size: 24upx;
						color: #ff9800;
					}
				}
			}
		}

		.mc {
			p {
				font-size: 28upx;
				color: #484848;
				margin: 20upx 0;
			}
		}

		.mt {
			display: flex;
			justify-content: space-around;

			> p {
				font-size: 24upx;
				color: #fff;
				background: rgb(58, 131, 255);
				width: 108upx;
				height: 46upx;
				text-align: center;
				line-height: 46upx;
				border-radius: 6upx;
			}

			image {
				border-radius: 100%;
				width: 70upx;
				height: 70upx;
			}

			view {
				h4 {
					font-weight: 400;
					font-size: 32upx;
					width: 400upx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				p {
					color: #ccc;
					font-size: 24upx;
				}
			}
		}
	}
}

.head {
	background: #ffffff;
	margin-top: -10upx;
	display: flex;
	view {
		padding: 15upx 30upx;
	}

	p:first-child {
		width: 3upx;
		height: 200upx;
		background-color: rgb(58, 131, 255);
	}

	h4 {
		font-weight: 400;
		font-size: 36upx;
		margin-bottom: 20upx;
	}

	p {
		color: #999999;
		font-size: 24upx;
	}

	h5 {
		font-size: 28upx;
		color: #999;
		text-align: right;
		font-weight: 400;
		font-size: 24upx;
		margin: 20upx 0;
	}
}

page {
	background: rgba(240, 240, 240, 0.7);
}

.header {
	height: 60upx;
	padding: 20upx;
	background: #fff;
}

.header > view > view {
	width: 120upx;
	display: flex;
	justify-content: space-between;
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
	height: 96upx;
}

.header > view > view > image {
	width: 40upx;
	height: 40upx;
}
</style>
