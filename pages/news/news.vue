<template>
	<view>
		<view class="header">
			<image
				src="../../static/images/fanHui.png"
				@tap="fanHui"
				mode="widthFix"
			></image>
		</view>
		<uni-segmented-control
			:current="current"
			:values="items"
			@clickItem="onClickItem"
			style-type="text"
			active-color="#2375ff"
			style="margin-top: -116rpx;padding-top: 20rpx;width: 50%;height: 116rpx;"
		></uni-segmented-control>

		<view class="content">
			<view v-show="current === 0">
				<view class="main">
					<view v-for="(item, i) in xx" :key="i" @tap="notice">
						<view class="gz">
							<text style="color: #757575;font-size: 28rpx;">{{ item.gz }}</text>
							<view>
								<p>
									@Artepharm Co., Ltd., China您好。你关注的第二届中日第三方市场合作论坛
								</p>
								<p>{{ item.p }}</p>
							</view>
						</view>
					</view>
				</view>
				</view>
			</view>
			<view v-show="current === 1">
				<view class="cz">
					<image src="../../static/images/tongZhi.png"></image>
					<p>暂无通知</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniSegmentedControl from '../../components/uni-segmented-control/uni-segmented-control.vue';
export default {
	components: { uniSegmentedControl },
	data() {
		return {
			items: ['消息', '通知'],
			current: 0,
			index: 0,
			main: true,
			tz: false,
			xx: [
				{
					gz: 'Baidu',
					p: '2019-11-15 12:12:50'
				},
				{
					gz: 'Baidu',
					p: '2019-11-15 12:12:50'
				},
				{
					gz: 'Baidu',
					p: '2019-11-15 12:12:50'
				}
			],
			xt: ['消息', '通知']
		};
	},
	methods: {
		onClickItem(index) {
			if (this.current !== index) {
				this.current = index;
			}
		},

		xiaoXi(i) {
			if (i == 0) {
				this.main = true;
				this.index = i;
				this.tz = false;
			} else {
				this.main = false;
				this.index = i;
				this.tz = true;
			}
		},
		fanHui() {
			uni.navigateTo({
				url: '../index/index'
			});
		},
		
		notice() {
			uni.navigateTo({
				url: '../notice/notice'
			});
		}
	}
};
</script>

<style lang="scss">
.cz > p {
	font-size: 28upx;
	margin-top: 20upx;
}
.cz {
	width: 200upx;
	text-align: center;
	margin: 200upx auto 0;
}

.cz > image {
	width: 200upx;
	height: 200upx;
}

.main {
	color: rgb(94, 94, 94);
	> view {
		font-size: 14px;
		border-bottom: 1px solid #eee;
		background: #fff;
		padding: 20px 10px 10px;
		// display: flex;
		// align-items: center;
		// justify-content: space-around;

		.gz {
			view {
				display: flex;
				align-items: center;
				justify-content: space-between;

				p {
					overflow: hidden;
					text-overflow: ellipsis;
					width: 340upx;
					white-space: nowrap;
				}
			}
		}

		image {
			width: 100upx;
			height: 100upx !important;
			border-radius: 50%;
		}

		text {
			color: rgb(35, 117, 255);
		}
	}
	p {
		font-size: 24upx;
		text-align: right;
		margin-top: 20upx;
	}
}

.p2 {
	font-size: 28upx;
	margin: 0 50upx;
}

.p1 {
	font-size: 28upx;
	margin: 0 50upx;
	text-align: center;
	width: 80upx;
	height: 40upx;
	color: rgba(35, 117, 255, 1);
	border-bottom: 4px solid rgb(35, 117, 255);
}

.header > .xt {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}

.header {
	padding: 20upx 40upx;
	display: flex;
	align-items: center;
	background: #fff;
}

.header > image {
	width: 40upx;
	height: 40upx;
}
</style>
