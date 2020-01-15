<template>
	<view>
		<my-header></my-header>

		<view class="wz">
			<!-- <text></text> -->
			<p>您的位置：</p>
			<navigator style="color: #007AFF" url="../index/index">首页</navigator>
			<text style="margin: 0 10upx;">></text>
			<navigator style="color: #007AFF" url="../geRenzx/geRenzx">
				个人中心
			</navigator>
			<text style="margin: 0 10upx;">></text>
			<p>对接邀约</p>
		</view>

		<view class="main" v-for="(item, i) in main" :key="i">
			<view class="d1" @tap="sub">
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
	</view>
</template>

<script>
export default {
	data() {
		return {
			main: [
				{
					pic: '../../static/logo.png',
					h4: '第二届中日第三方市场合作A',
					p1: '2019-11-15',
					h6: '洽谈地址：第七会议室',
					p2: '主论坛拟由双方主办单位负责人作主旨发言经济团体及企代表发言'
				},
				{
					pic: '../../static/logo.png',
					h4: '第二届中日第三方市场合作A',
					p1: '2019-11-15',
					h6: '洽谈地址：第七会议室',
					p2: '主论坛拟由双方主办单位负责人作主旨发言经济团体及企代表发言'
				},
				{
					pic: '../../static/logo.png',
					h4: '第二届中日第三方市场合作A',
					p1: '2019-11-15',
					h6: '洽谈地址：第七会议室',
					p2: '主论坛拟由双方主办单位负责人作主旨发言经济团体及企代表发言'
				},
				{
					pic: '../../static/logo.png',
					h4: '第二届中日第三方市场合作A',
					p1: '2019-11-15',
					h6: '洽谈地址：第七会议室',
					p2: '主论坛拟由双方主办单位负责人作主旨发言经济团体及企代表发言'
				},
				{
					pic: '../../static/logo.png',
					h4: '第二届中日第三方市场合作A',
					p1: '2019-11-15',
					h6: '洽谈地址：第七会议室',
					p2: '主论坛拟由双方主办单位负责人作主旨发言经济团体及企代表发言'
				}
			]
		};
	},

	methods: {
		sub() {
			uni.navigateTo({
				url: '../sub/sub'
			});
		}
	}
};
</script>

<style lang="scss">
.main {
	background: #fff;
	padding: 20upx;
	margin: 10upx 0 20upx;
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

.wz {
	display: flex;
	font-size: 24upx;
	color: #999;
	box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 1px 0px;
	background: #fff;
	padding-left: 40upx;
	margin-bottom: 20rpx;
	line-height: 88upx;

	text:first-child {
		width: 2px;
		height: 88upx;
		margin-right: 20upx;
		background-color: rgb(35, 117, 255);
	}
}
</style>
