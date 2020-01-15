<template>
	<view class="content">
		<!-- 头部 -->
		<my-header></my-header>
		<image
			style="width: 100%;"
			src="../../static/images/h1.png"
			mode="widthFix"
		></image>
		<!-- 内容 -->
		<view class="main">
			<view class="mt">
				<view>
					<h5>活动专题：第二届中日第三方市场合作论坛</h5>
					<view class="cjcg">
						<p>2019-09-25 888人参与</p>
						<text v-show="cg">参加成功</text>
					</view>
				</view>
			</view>

			<view class="mm">
				<view class="hdzx">
					<p>【会议地点】</p>
					<view><p>● 第八会议室</p></view>
				</view>

				<view class="hdzx">
					<p>【活动中心】</p>
					<view>
						<p>● 论坛拟于2020年4月上旬（暂定）在日本东京举行</p>
						<p>● 论坛由主论坛和分论坛两部分组成。</p>
					</view>
				</view>

				<view class="hdnr">
					<p>【活动内容】</p>
					<view>
						<p>
							主论坛拟由双方主办单位负责人作主旨发言，经济团体及企业代表发言，相关政府部门、经济团体、金融机构和企业代表参会。配套举行成果展示，以展板形式展示中日第三方市场合作重点项目。
						</p>
						<p>
							分论坛拟在主论坛前日举行，包括交通物流、能源环保、产业升级和金融支持、地区开发4个专题暂定,分论坛，采取主题发言和研讨相结合的形式，探讨合作思路和模式。会间或会后配套举行商务洽谈和对接活动。
						</p>
					</view>
				</view>

				<view v-show="yy" @tap="cj" class="cjyy"><p>参加邀约</p></view>
			</view>
		</view>

		<!-- 底部 -->
		<!-- 		<view class="footer">
			<view class="fs">
				<text></text>
				<p @tap="zt">为落实中日两国领导人重要共识，经双方商定，经双方商定</p>
				<button type="primary" size="mini">专题</button>
			</view>

			<view class="fx">
				<p>
					主论坛拟由双方主办单位负责人作主旨发言，经济团体及企业代
					表发言，相关政府部门、经济团体.....
				</p>
			</view>
		</view> -->

		<view class="btn">
			<button
				type="primary"
				style="height: 6.5vh; line-height: 6.5vh; font-size: 32upx;"
				@tap="shouYe"
			>
				返回首页
			</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cg: false,
			yy: true
		};
	},

	onLoad() {},

	methods: {
		shouYe() {
			uni.navigateTo({
				url: '../index/index'
			});
		},

		zt() {
			uni.navigateTo({
				url: '../zhuanTi/zhuanTi'
			});
		},

		cj() {
			var that = this;
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
						// that.onLoad();
						uni.showToast({
							title: '参加会议成功'
						});
						that.cg = true;
						that.yy = false;
					}
				}
			});
		}
	}
};
</script>

<style>
.content > .btn {
	flex: 1;
	width: 580upx;
	margin: 20upx auto 50upx;
}

.footer > .fx > p {
	font-size: 24upx;
	color: rgb(204, 204, 204);
	margin-top: 20upx;
}
.footer {
	background: #fff;
	margin: 20upx 0 40upx;
	padding: 0 50upx 50upx;
}

.footer > .fs > p {
	font-size: 24upx;
	width: 400upx;
	color: rgb(72, 72, 72);
	margin: 0 20upx;
}

.footer > .fs > text {
	width: 80upx;
	/* margin-right: 20upx; */
	height: 80upx;
	background-color: rgb(236, 236, 236);
	border-radius: 160upx;
}

.footer > .fs {
	display: flex;
	height: 120upx;
	align-items: center;
	border-bottom: 1upx dashed rgb(187, 187, 187);
	justify-content: space-around;
}

.main > .mm > .cjyy {
	width: 458upx;
	margin: 50upx auto;
}

.main > .mm > .cjyy > p {
	color: #007aff;
	text-align: center;
	padding: 18upx 0upx;
	font-size: 32upx;
	border: 1px dashed #007aff;
	border-radius: 10upx;
}

.main > .mm > .hdnr > view {
	margin-top: 28upx;
}

.main > .mm > .hdnr > view > p {
	color: rgb(84, 84, 84);
	font-size: 28upx;
	text-indent: 2em;
	line-height: 50upx;
}

.main > .mm > .hdnr > p {
	color: rgba(108, 108, 108, 1);
	font-size: 28upx;
}

.main > .mm > .hdzx > view {
	margin: 28upx 0;
	padding-left: 8upx;
}

.main > .mm > .hdzx > view > p {
	color: rgb(84, 84, 84);
	font-size: 28upx;
}

.main > .mm > .hdzx > p {
	color: rgba(108, 108, 108, 1);
	font-size: 28upx;
}

.main > .mm {
	background: #fff;
	padding: 40upx;
	margin-top: 20upx;
}

.main > .mt > view > view {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.main > .mt > view > view > p {
	color: rgb(185, 185, 185);
	font-size: 24upx;
}

.main > .mt > view > view > text {
	background: #007aff;
	color: #ffffff;
	font-size: 28upx;
	padding: 6upx 30upx;
	border-radius: 10upx;
}

.main > .mt > view > p {
}

.main > .mt > view > h5 {
	color: #524f4f;
	margin-bottom: 20upx;
}

.main > .mt > view {
	padding: 25upx;
	background: #fff;
}

page {
	background-color: #ededed;
}
</style>
