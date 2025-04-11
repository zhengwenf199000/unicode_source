<template>
	<view class="content">
		<view class="print-tables_table">123</view>
		<!-- #ifdef APP-PLUS || H5 -->
		<view @click="ech.onClick" :prop="option" :change:prop="ech.updateEcharts" id="echart_s" class="echart"></view>
		<button @click="changeOption">更新数据</button>
		<!-- #endif -->
		<!-- #ifndef APP-PLUS || H5 -->
		<view>非 APP、H5 环境不支持</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				option: this.createOptions()
			}
		},
		onLoad() {

		},
		methods: {
			createOptions() {
				return {
					title: {
						text: 'ECharts 入门示例'
					},
					tooltip: {},
					legend: {
						data: ['销量']
					},
					xAxis: {
						data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: Array.from(new Array(6)).map(v => Math.random() * 40)
					}]
				}
			},
			changeOption() {
				// 随机更新示例数据
				this.option = this.createOptions()
			},
			onViewClick(options) {
				console.log(options)
				uni.showModal({
					title: options.test
				})
			}
		}
	}
</script>

<script module="ech" lang="renderjs">
	// import html2canvas from "html2canvas";
	// let myChart;
	export default {
		mounted() {
			// if (typeof window.echarts === 'function') {
			// 	this.initEcharts();
			// } else {
			// 	// 动态引入较大类库避免影响页面展示
			// 	const script = document.createElement('script');
			// 	// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
			// 	script.src = 'static/echarts.js';
			// 	script.onload = this.initEcharts.bind(this);
			// 	document.head.appendChild(script);
			// }
		},
		methods: {
			initEcharts() {
				// const node = document.getElementById('echart_s');
				// myChart = echarts.init(node);
				// // 观测更新的数据在 view 层可以直接访问到
				// myChart.setOption(this.option);
				// console.log('initEcharts end!');
			},
			async updateEcharts(newValue, oldValue, ownerInstance, instance) {
				console.log('updateEcharts!');
				this.$ownerInstance.callMethod('onViewClick', {
					test: 'updateEcharts'
				});
				// 监听 service 层数据变更
				// myChart.setOption(newValue)
				
				// const shareContent = document.querySelector('.print-tables_table');
				// const width = shareContent.scrollWidth;
				// const height = shareContent.scrollHeight;
				// const canvas = await html2canvas(shareContent, {
				// 	scale: 3,
				// 	dpi: 300,
				// 	width, //设置canvas尺寸与所截图尺寸相同，防止白边
				// 	height, //防止白边
				// 	logging: true,
				// 	useCORS: true
				// });
			},
			onClick(event, ownerInstance) {
				// 调用 service 层的方法
				ownerInstance.callMethod('onViewClick', {
					test: 'test'
				});
			}
		}
	}
</script>

<style>
	.content {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.echart {
		margin-top: 100px;
		width: 100%;
		height: 300px;
		background-color: aliceblue;
	}
</style>
