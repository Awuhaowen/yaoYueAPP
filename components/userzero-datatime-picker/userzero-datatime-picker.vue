<template>
	<picker mode="multiSelector" @change="MultiPickerChange" @columnchange="MultiPickerColumnChange" :value="multiIndex" :range="multiArray" range-key="alias">
		<text class="text-grey" v-text="time ? time : defaultTime "></text>
	</picker>
</template>

<script>
	export default {
		name: 'uDataTimePicker',
		props: {
			defaultTime: {
				type: String,
				default: '选择时间'
			}
		},
		data() {
			return {
				time: '',
				multiArray: [],
				multiIndex: [0, 0, 0, 0, 0],
				choose_year: '',
				date: new Date(),
				years: [],
				months: [],
				days: [],
				hours: [],
				minutes: []
			};
		},
		created() {
			//获取年
			for (let i = 2019; i <= this.date.getFullYear() + 5; i++) {
			  this.years.push({
				  "y": "" + i,
				  "alias": "" + i + '年'
			  });
			}
			//获取月份
			for (let i = 1; i <= 12; i++) {
			  if (i < 10) {
			    i = "0" + i;
			  }
			  this.months.push({
				  "m": "" + i,
				  "alias": "" + i + "月"
			  });
			}
			//获取日期
			for (let i = 1; i <= 31; i++) {
			  if (i < 10) {
			    i = "0" + i;
			  }
			  this.days.push({
				  "d": "" + i,
				  "alias": "" + i + "日"
			  });
			}
			//获取小时
			for (let i = 0; i < 24; i++) {
			  if (i < 10) {
			    i = "0" + i;
			  }
			  this.hours.push({
				  "h": "" + i,
				  "alias": "" + i + "时"
			  });
			}
			//获取分钟
			for (let i = 0; i < 60; i++) {
			  if (i < 10) {
			    i = "0" + i;
			  }
			  this.minutes.push({
				  "mm": "" + i,
				  "alias": "" + i + "分"
			  });
			}
			this.multiArray = [this.years, this.months, this.days, this.hours, this.minutes];
		},
		methods: {
			//获取时间日期
			MultiPickerChange: function(e) {
			    this.multiIndex = e.detail.value
			    this.index = this.multiIndex;
			    this.year = this.multiArray[0][this.index[0]];
			    this.month = this.multiArray[1][this.index[1]];
			    this.day = this.multiArray[2][this.index[2]];
			    this.hour = this.multiArray[3][this.index[3]];
			    this.minute = this.multiArray[4][this.index[4]];
			    this.time= this.year.y + '-' + this.month.m + '-' + this.day.d + ' ' + this.hour.h + ':' + this.minute.mm
			  },
			  //监听picker的滚动事件
			MultiPickerColumnChange: function(e) {
			    //获取年份
			    if (e.detail.column == 0) {
			      let choose_year = this.multiArray[e.detail.column][e.detail.value].y;
			      this.choose_year = choose_year
			    }
			    if (e.detail.column == 1) {
			      let num = parseInt(this.multiArray[e.detail.column][e.detail.value].m);
			      let temp = [];
			      if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) { //判断31天的月份
			        for (let i = 1; i <= 31; i++) {
			          if (i < 10) {
			            i = "0" + i;
			          }
			          temp.push({
						"d": "" + i,
						"alias": "" + i + "日"
					  });
			        }
					this.$set(this.multiArray, 2 , temp);
			      } else if (num == 4 || num == 6 || num == 9 || num == 11) { //判断30天的月份
			        for (let i = 1; i <= 30; i++) {
			          if (i < 10) {
			            i = "0" + i;
			          }
			          temp.push({
			          	"d": "" + i,
			          	"alias": "" + i + "日"
			          });
			        }
			        this.$set(this.multiArray, 2 , temp);
			      } else if (num == 2) { //判断2月份天数
			        let year = parseInt(this.choose_year);
			        if (((year % 400 == 0) || (year % 100 != 0)) && (year % 4 == 0)) {
			          for (let i = 1; i <= 29; i++) {
			            if (i < 10) {
			              i = "0" + i;
			            }
			            temp.push({
			            	"d": "" + i,
			            	"alias": "" + i + "日"
			            });
			          }
			          this.$set(this.multiArray, 2 , temp);
			        } else {
			          for (let i = 1; i <= 28; i++) {
			            if (i < 10) {
			              i = "0" + i;
			            }
			            temp.push({
			            	"d": "" + i,
			            	"alias": "" + i + "日"
			            });
			          }
			          this.$set(this.multiArray, 2 , temp);
			        }
			      }
			    }
			    var data = {
			      multiArray: this.multiArray,
			      multiIndex: this.multiIndex
			    };
			    data.multiIndex[e.detail.column] = e.detail.value;
				this.multiArray = data.multiArray
				this.multiIndex = data.multiIndex
			}
		}
	}
</script>

<style>

</style>
