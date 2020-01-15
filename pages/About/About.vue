<template>
	<view>
		<my-header></my-header>

		<view class="wz">
			<p>您的位置：</p>
			<navigator style="color: rgba(35, 117, 255, 1);" url="../index/index">
				首页
			</navigator>
			<text style="margin: 0 10upx;">></text>
			<navigator style="color: rgba(35, 117, 255, 1);" url="../geRenzx/geRenzx">
				个人中心
			</navigator>
			<text style="margin: 0 10upx;">></text>
			<p>关于我们</p>
		</view>

		<view class="gywm">
			<p></p>
			<h5>关于我们</h5>
		</view>

		<view class="main">
			<view class="logo">
				<image src="../../static/images/bd_logo.png" mode="widthFix"></image>
			</view>

			<view class="nr">
				<!-- <h4>百度</h4> -->
				<p>
					“百度——全球最大的中文搜索引擎及最大的中文网站,全球领先的人工智能公司。2000年1月1日创立于中关村公司创始人李彦宏拥有“超链分析”技术专利,使中国成为美国罗斯、韩国之外,全球仅有的四个拥有独立搜索引擎核心技术的国家之一。基于对人工智能的多年布局与长期积累,百度在深度学习领域领先世界,并在2016年被《财富》杂志称为全球AI四巨头之一。每天,百度响应来自百余个国家和地区的数十亿次搜索请求。百度以“用科技让复杂的世界更简单”为使命,不断坚持技创新,致力于提供更懂用户的产品及服务。百度移动应用月活跃设备数超过11亿。百度以技术为信仰,在技术研发、人才引进等方面坚持长期持续的投入。根据中国专利保护协会2018年统计,百度以2368件申请量成为中国人工智能专利领头羊。
					在“夯实移动基础,决胜AI时代”的战略指导...”
				</p>
				<button type="primary" @tap="yongHu">返回</button>
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

		yongHu() {
			uni.navigateTo({
				url: '../geRenzx/geRenzx'
			});
		}
	}
};
</script>

<style lang="scss">
.main {
	// margin: 20upx 0;
	.logo {
		> image {
			width: 100%;
		}
	}

	.nr {
		background: #fff;
		padding: 20upx;
		margin-top: -10upx;

		h4 {
			text-align: center;
			color: #6c6c6c;
			font-size: 40upx;
			margin-bottom: 20upx;
		}

		p {
			color: #333333;
			font-size: 28upx;
			line-height: 40upx;
		}

		button {
			width: 90%;
			height: 80upx;
			font-size: 32rpx;
			line-height: 80upx;
			margin: 80upx auto 20upx;
		}
	}
}

.gywm {
	background: #fff;
	display: flex;
	align-items: center;
	padding: 30upx 20upx;
	p {
		width: 5px;
		height: 20px;
		margin-right: 10upx;
		background-color: rgb(35, 117, 255);
	}
}

.wz {
	display: flex;
	font-size: 24upx;
	color: #999;
	background: #fff;
	padding: 40upx 20upx 20upx;
	height: 30upx;
	border-bottom: 1px solid rgb(236, 236, 236);
}

page {
	background-color: #ededed;
}
</style>
