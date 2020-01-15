<template>
	<view class="search-box">
		<input type="text" value="" @input="searchInput" class="u-search-input" />
		<view v-for="(item,index) in searchArr" :key="index" class="u-search-list" @click="selectIndex( searchKey ? item[searchKey] : item)">
			{{ searchKey ? item[searchKey] : item}}
		</view>
	</view>
</template>

<script>
	export default {
		name: 'uSearch',
		computed: {
			searchArr (){
				var that = this;
				var newArr = []
				var len = that.dictArr.length
				if(!that.searchKey){
					for (var i=0;i<len;i++) {
						if(that.dictArr[i].indexOf(that.searchModel)>-1){
							newArr.push(that.dictArr[i])
						}
					}
				}else{
					for (var i=0;i<len;i++) {
						if(that.dictArr[i][that.searchKey].indexOf(that.searchModel)>-1){
							newArr.push(that.dictArr[i])
						}
					}	
				}
				return newArr
			}
		},
		props: {
			"dictArr": {
				type: Array,
				default () {
					return []
				}
			},
			"searchKey": {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				searchModel: ''
			}
		},
		created(){
			
		},
		mounted() {
			
		},
		methods: {
			searchInput(e){
				this.searchModel = e.detail.value
			},
			getSearchInputValue(){
				return this.searchModel
			},
			selectIndex(val){
				this.$emit('selectIndexValue', val);
			}
		}
	}
</script>

<style>
	.u-search-input{
		margin: 20rpx 30rpx 0 30rpx;
		padding: 20rpx 20rpx;
		height: 60rpx;
		border-radius: 24rpx;
		border: 1px solid #CCCCCC;
	}
	.u-search-list{
		margin: 20rpx 30rpx;
		padding: 11px 20rpx;
		border-radius: 10rpx;
		background: #FFFFFF;
		box-shadow:0px 5px 5px 0px rgba(0, 0, 0, 0.05);
	}
</style>
