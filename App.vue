<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */

image {
	will-change: transform;
}

/* 弹出框内容 */
page {
	background: #ededed;
	/* 	max-width: 650px;
	margin: auto; */
}

/* 弹出框内容 */
uni-modal .uni-modal__title {
	font-size: 30upx;
	line-height: 50upx;
}

uni-modal .uni-modal__hd,
uni-modal .uni-modal__bd {
	white-space: pre-wrap;
	text-align: left;
}

/* 弹出框按钮 */
uni-modal .uni-modal__btn {
	font-size: 24upx !important;
	background: #007aff;
	color: #fff !important;
	border-radius: 10upx;
	/* width: 320upx; */
	text-align: center;
	margin-top: 20upx;
	margin-bottom: 20upx;
	margin-left: 280upx;
}

/* 弹出框按钮方向 */
uni-modal .uni-modal__ft {
	position: relative;
	line-height: 60upx;
	font-size: 24upx;
	display: inline;
	right: 50upx;
	text-align: left;
}

uni-modal .uni-modal__hd,
uni-modal .uni-modal__bd {
	white-space: pre-wrap;
	text-align: left;
}

/* 弹出框按钮 */
uni-modal .uni-modal__btn {
	font-size: 28upx;
}
</style>
