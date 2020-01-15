<template>
	<view class="tips" :class="{'active':load}" :style="{animationDuration:time+'s',height:Height+'rpx'}">
		<view class="tips-text" :style="{'background':BckgroundColor,'color':Color,FontsSize:FontsSize+'rpx'}">
			{{Tipstext}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"Tips",
		props: {
			Tipstext: { //查询到数据的条数
				type: String,
				default: "这是一段提示文字"
			},
			BckgroundColor:{ //背景色
				type:String,
				default:"#3F5AFC"
			},
			Color:{ //文字颜色
				type:String,
				default:"#fff"
			},
			time:{ //显示的时长 单位s
				type: [Number, String],
				default: 3
			},
			Height:{ //提示框高度 单位rpx
				type: [Number, String],
				default: 60
			},
			FontsSize:{ //提示文字大小 单位rpx
				type: [Number, String],
				default: 30
			}
		},
		data() {
			return {
				load:false
			}
		},
		methods: {
			animation(){
					
			},
			show(){
				this.load = false;
				var _this = this;
				setTimeout(function(){
					_this.load = true;
				},10)
			}
		}
	}
</script>

<style scoped lang="less">
	.tips{
		/* #ifndef H5 */
		position: fixed;
		/* #endif */
		/* #ifdef H5 */
		position: absolute;
		/* #endif */
		width: 100%;
		display: flex;
		justify-content: center;
		z-index: 9999;
		top:0;
		transform: translateY(-100%);
		.tips-text{
			text-align: center;
			background-color: #3F5AFC;
			color: #fff;
			font-size: 30rpx;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.tips.active{
		animation-name: tipsShow
	}
	@keyframes tipsShow{
		0%{
			transform: translateY(-100%)
		}
		20%{
			transform: translateY(0)
		}
		80%{
			transform: translateY(0)
		}
		100%{
			transform: translateY(-100%)
		}
	}
</style>
