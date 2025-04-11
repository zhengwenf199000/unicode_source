<script>
	import {
		getPageAuthType
	} from '@/utils/own'

	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.addRouteGuard()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			addRouteGuard() {
				// 全局路由守卫
				uni.addInterceptor('navigateTo', {
					invoke: (args) => {
						const targetUrl = args.url
						// const url = new URLSearchParams(targetUrl)
						// console.log(url.get('idnum'));

						console.log(args, 'addInterceptor');
						const authType = getPageAuthType(targetUrl)
						if (authType) {
							// 如果没有登录先跳转登录 
							// this.setTargetUrl(targetUrl)
							args.url = `/pages/auth/auth?target=${ targetUrl }&type=${ authType }`
							console.log('转发url：', args.url);
						}
					}
				})
			},
		},
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './common/uni-nvue.css';
	@import './common/uni.css';

	@mixin flex($direction: column) {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: $direction;
	}

	body {
		background-color: $theme-dark-color;
	}

	.content {
		@include flex();
		flex: 1;
		background-color: $theme-dark-color;
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */

		.content-bg {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			/* #ifndef APP-NVUE */
			width: 100%;
			height: 100%;
			overflow: hidden;
			/* #endif */

			.content-bg_image {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				/* #ifndef APP-NVUE */
				width: 100%;
				height: 100%;
				/* #endif */
			}

			.content-bg_title {
				z-index: 1;
				flex: 1;
				display: flex;
				flex-direction: row;
				align-items: center;

				.content-bg_title__placeholder {
					flex: 1;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;

					&___logo {
						width: 100px;
					}
				}

				.content-bg_title__text {
					flex: 6;
					color: #fff;
					font-weight: bold;
					font-size: 60px;
				}
			}

			.content-bg_placeholder {
				flex: 4;
			}
		}

		.content-nav {
			z-index: 1;
			flex: 1;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
			padding-right: 50px;

			.content-nav-home {
				width: 80px;
			}
		}

		.content-c {
			z-index: 1;
			flex: 4;
			background-color: $theme-color;
			padding: 0 40px;
			overflow: hidden;
		}
	}
</style>
