<template>
	<view>
		<view class="header">
			<view>
				<image src="../../static/images/logo.png" mode="widthFix"></image>
				<view>
					<image
						src="../../static/images/yongHu.png"
						@tap="yongHu"
						mode="widthFix"
						style="width: 40upx;"
					></image>

					<!-- 小红点 -->
					<view class="hongDian"></view>

					<image
						src="../../static/images/youXiang.png"
						mode="widthFix"
						@tap="xiaoXi"
						style="width: 44upx;"
					></image>
				</view>
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
		xiaoXi() {
			uni.navigateTo({
				url: '../news/news'
			});
		},

		yongHu(i) {
			uni.navigateTo({
				url: '../geRenzx/geRenzx'
			});
		}
	}
};
</script>

<style>
.hongDian {
	width: 14upx;
	height: 14upx;
	text-align: center;
	position: absolute;
	top: 34upx;
	border-radius: 100%;
	right: 20upx;
	z-index: 999;
	line-height: 40upx;
	background-color: rgb(255, 2, 2);
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
	align-items: center;
}

.header > view {
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
	position: relative;
}
</style>
