<template>
	<view>
		<view class="head">
			<image
				src="../../static/images/fanHui.png"
				@tap="fanHui"
				mode="widthFix"
			></image>
			<p>information</p>
		</view>

		<view class="main">
			<h2>@Artepharm Co., Ltd., China您好。</h2>
			<view>
				您关注的
				<text>第二届中日第三方市场合作论坛</text>
				有更新：您的邀约已通过，感谢您的参加。
				<p>2019-11-15 12:12:50</p>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},

	methods: {
		fanHui() {
			uni.navigateTo({
				url: '../news/news'
			});
		}
	}
};
</script>

<style lang="scss">
.main {
	color: #999;
	padding: 15% 25px 0;

	h2 {
		font-size: 36upx;
		line-height: 80upx;
		font-weight: 500;
		color: #666;
	}

	view {
		font-size: 14px;
		display: inherit;
		background: #fff;
		padding: 0px 10px 10px;

		text {
			color: #007aff;
		}
	}
	p {
		font-size: 24upx;
		line-height: 100upx;
		text-align: right;
	}
}

.head {
	background: #fff;
	padding: 20upx;
	display: flex;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.16) 1px 1px 1px 0px;
	margin-bottom: 1px;

	p {
		margin-left: 230upx;
	}

	image {
		width: 32upx;
		height: 32upx;
	}
}

page {
	background: #fff;
}
</style>
