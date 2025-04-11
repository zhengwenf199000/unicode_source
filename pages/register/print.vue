<template>
	<view class="content print-content" @click="capture" @touchmove="capture">
		<content-bg></content-bg>
		<view class="content-nav">
			<image class="content-nav-home" src="@/static/imgs/Home.png" mode="widthFix" @click="homeClick"></image>
			<!-- <image class="content-nav-home" :src="gettedPicPath" mode="widthFix" @click="homeClick"></image> -->
		</view>

		<view class="content-c">
			<view class="print-tables" scroll-x="true" scroll-y="true">
				<!-- <text class="print-tables_title">社区矫正对象基本信息表</text> -->
				<view class="print-tables_table" id="print-tables_table">
					<text class="print-tables_title">社区矫正对象基本信息表</text>
					<view class="print-tables_head">
						<text>单位：县（市、区）社区矫正机构（公章）</text>
						<text class="print-tables_head__inputm">编号：</text>
						<text class="print-tables_head__input">填表日期：{{ dateTime2Date(criminalInfo.insert_date) }}</text>
					</view>
					<table align="center">
						<tr>
							<td>姓名</td>
							<td class="print-tables_table__width80">{{ criminalInfo.name }}</td>
							<td class="print-tables_table__width80">曾用名</td>
							<td>{{ criminalInfo.alias }}</td>
							<td>身份证<br>号码</td>
							<td colspan="3">{{ criminalInfo.id_num }}</td>
							<td rowspan="3" colspan="2" class="pic">
								<image v-if="criminalInfo.pic_path" class="print-tables_table__icon" :src="criminalInfo.pic_path"></image>
								<text v-else>一寸免冠照片</text>
							</td>
						</tr>
						<tr>
							<td>性别</td>
							<td>{{ criminalInfo.sex }}</td>
							<td>民族</td>
							<td>{{ criminalInfo.nation }}</td>
							<td>出生<br>年月日</td>
							<td colspan="3">{{ birthday }}</td>
						</tr>

						<tr>
							<td>文化<br>程度</td>
							<td>{{ criminalInfo.edu_bg }}</td>
							<td>健康<br>状况</td>
							<td>{{ criminalInfo.health }}</td>
							<td>原政治<br>面貌</td>
							<td>{{ criminalInfo.political_status }}</td>
							<td>婚姻<br>状况</td>
							<td>{{ criminalInfo.affiance }}</td>
						</tr>

						<tr>
							<td colspan="2">户籍地</td>
							<td colspan="8" class="print-tables_table__longtd">{{ criminalInfo.hjszd }}</td>
						</tr>
						<tr>
							<td colspan="2">居住地</td>
							<td colspan="8" class="print-tables_table__longtd">{{ criminalInfo.gdjzd }}</td>
						</tr>
						<tr>
							<td colspan="2">执行地</td>
							<td colspan="8" class="print-tables_table__longtd">{{ executePlace }}</td>
						</tr>
						<tr>
							<td colspan="2">现工作单位<br>（学校）</td>
							<td colspan="4" class="print-tables_table__longtd">{{ criminalInfo.xgzdw }}</td>
							<td colspan="1">联系<br>电话</td>
							<td colspan="3">{{ criminalInfo.phone_no }}</td>
						</tr>
						<tr>
							<td colspan="2">个人联系电话</td>
							<td colspan="8">{{ criminalInfo.private_phone }}</td>
						</tr>
						<tr>
							<td colspan="1">罪名</td>
							<td colspan="2"></td>
							<td colspan="1">刑种</td>
							<td colspan="2"></td>
							<td colspan="1">原判<br>刑期</td>
							<td colspan="2"></td>
						</tr>
						<tr>
							<td colspan="1">社区矫正<br>决定机关</td>
							<td colspan="4">{{ criminalInfo.sqjzjdjgmc }}</td>
							<td colspan="2">原羁押场所</td>
							<td colspan="2">{{ criminalInfo.prison_dept }}</td>
						</tr>
						<tr>
							<td colspan="1">禁止令<br>内容</td>
							<td colspan="4"></td>
							<td colspan="2">禁止期限<br>起止日</td>
							<td colspan="3"></td>
						</tr>
						<tr class="print-tables_height">
							<td colspan="1">附加刑<br>判项内容</td>
							<td colspan="8"></td>
						</tr>
						<tr>
							<td colspan="1">矫正类别</td>
							<td colspan="2">{{ criminalInfo.outside_type }}</td>
							<td colspan="1">矫正期限</td>
							<td colspan="2">{{ criminalInfo.outside_limit }}</td>
							<td colspan="1">起止日</td>
							<td colspan="2">{{ dateTime2Date(criminalInfo.outside_start) }}{{ criminalInfo.outside_start ? '至' : '' }}{{ dateTime2Date(criminalInfo.outside_end) }}</td>
						</tr>
						<tr>
							<td colspan="1">法律文书收到时间及种类</td>
							<td colspan="5"></td>
							<td colspan="1">接收方式及报到时间</td>
							<td colspan="2"></td>
						</tr>
						<tr>
							<td colspan="1">在规定时间内报到</td>
							<td colspan="2"></td>
							<td colspan="1">超出规定时限报到</td>
							<td colspan="2"></td>
							<td colspan="1">未报到且下落不明</td>
							<td colspan="2"></td>
						</tr>
					</table>
					<view style="margin-top: 40px"></view>
					<table>
						<tr class="print-tables_heightest">
							<td colspan="1">主要犯罪事实</td>
							<td colspan="8">{{ criminalInfo.corpus_delicti }}</td>
						</tr>
						<tr class="print-tables_heightest">
							<td colspan="1">本次犯罪前的违法犯罪记录</td>
							<td colspan="8"></td>
						</tr>
						<tr>
							<td colspan="1" :rowspan="resumesRow">个人简历</td>
							<td colspan="3">起止时间</td>
							<td colspan="4">所在单位</td>
							<td colspan="2">职务</td>
						</tr>
						<tr v-for="(item, i) in resumeInfos" :key="i">
							<td colspan="3">{{ dateTime2Date(item.start_date) }} 至 {{ dateTime2Date(item.end_date) }}</td>
							<td colspan="4">{{ item.organization }}</td>
							<td colspan="2">{{ item.duty }}</td>
						</tr>
						<tr v-for="(id, i) of resumesRowLeft" :key="id">
							<td colspan="3"></td>
							<td colspan="4"></td>
							<td colspan="2"></td>
						</tr>
						<tr>
							<td colspan="1" :rowspan="relationshipsRow">家庭成员及主要社会关系</td>
							<td colspan="1">姓名</td>
							<td colspan="2">关系</td>
							<td colspan="4">工作单位或家庭地址</td>
							<td colspan="2">联系电话</td>
						</tr>
						<tr v-for="(item, i) in relationshipInfos" :key="i">
							<td colspan="1">{{ item.name }}</td>
							<td colspan="2">{{ item.relation }}</td>
							<td colspan="4">{{ item.address }}</td>
							<td colspan="2">{{ item.phone_no }}</td>
						</tr>
						<tr v-for="(id, i) of relationshipsRowLeft" :key="id">
							<td colspan="1"></td>
							<td colspan="2"></td>
							<td colspan="4"></td>
							<td colspan="2"></td>
						</tr>

						<tr class="print-tables_height">
							<td colspan="1">备注</td>
							<td colspan="8"></td>
						</tr>
					</table>
					<text class="print-tables_foot">注：办理接收手续（执行地变更）后，此表抄报执行地公安（分）局。</text>
				</view>
			</view>

			<view class="print-content-backbtns">
				<button ref="h2c" :prop="triggerType" :change:prop="h2c.create" class="print-content-backbtns-btn"
					type="primary" @click="printClick">打印</button>
				<button class="print-content-backbtns-btn" type="primary" @click="backClick">返回</button>
			</view>
		</view>
	</view>
</template>

<script module="h2c" lang="renderjs">
	import html2canvas from 'html2canvas';
	import jsPDF from 'jspdf/dist/jspdf.umd';

	export default {
		methods: {
			async create(type) {
				if (!type) {
					return
				}
				try {
					this.$ownerInstance.callMethod('showLoading');
					const timeout = setTimeout(async () => {
						const shareContent = document.querySelector('#print-tables_table');
						// console.log('start !');

						const width = shareContent.scrollWidth
						// const height = width * 297 / 210.0
						const height = shareContent.scrollHeight
						// const width = 595 * 1
						// const height = 842 * 1
						const canvas = await html2canvas(shareContent, {
							scale: 3,
							dpi: 300,
							width, //设置canvas尺寸与所截图尺寸相同，防止白边
							height, //防止白边
							logging: true,
							useCORS: true
						});
						// this.$ownerInstance.callMethod('hideLoading');
						// const base64 = canvas.toDataURL('image/jpeg', 1);
						// this.$ownerInstance.callMethod('renderFinish', {
						// 	base64,
						// 	type
						// });
						// return;
						// 以下为生成pdf方案
						
						var contentWidth = canvas.width;
						var contentHeight = canvas.height;

						//一页pdf显示html页面生成的canvas高度;
						var pageHeight = contentWidth / 592.28 * 841.89;
						//未生成pdf的html页面高度
						var leftHeight = contentHeight;
						//页面偏移
						var position = 0;
						//a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
						var imgWidth = 595.28;
						var imgHeight = 592.28 / contentWidth * contentHeight;

						var pageData = canvas.toDataURL('image/jpeg', 1.0);
						
						// this.$ownerInstance.callMethod('renderPDF', { pageData, contentWidth, contentHeight })
						// return;
						
						var pdf = new jsPDF('', 'pt', 'a4');

						//有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
						//当内容未超过pdf一页显示的范围，无需分页
						if (leftHeight < pageHeight) {
							pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
						} else {
							while (leftHeight > 0) {
								pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
								leftHeight -= pageHeight;
								position -= 841.89;
								//避免添加空白页
								if (leftHeight > 0) {
									pdf.addPage();
								}
							}
						}
						// #ifndef APP-PLUS
						pdf.save('content.pdf');
						// #endif
						const pdfBase64 = pdf.output('dataurlstring');
						// console.log(pdfBase64);
						this.$ownerInstance.callMethod('hideLoading');
						this.$ownerInstance.callMethod('renderFinish', {
							base64: pdfBase64,
							type
						});
						// console.log('over !');
						clearTimeout(timeout);
					}, 500);
				} catch (error) {
					console.log(error)
				}
			}
		}
	}
</script>

<script>
	import {
		base64ToPath,
		pathToBase64
	} from '@/utils/image-tools.js';
	import userInactiveMixin from '@/mixins/userInactiveMixin';
	import filePicker from "@/utils/filePicker";
	import {
		requestApi,
		upload,
		apis,
		getDeptBelongs
	} from '@/utils/http'

	export default {
		mixins: [ userInactiveMixin ],
		data() {
			return {
				info: null,
				gettedPicPath: '',
				triggerType: ''
			}
		},
		computed: {
			criminalInfo() {
				if (this.info) {
					return this.info.criminalInfo || {}
				}
				return {
					// name: '测试用户',
					// id_num: '420898199909091234',
					// insert_date: '2023-01-23',
					// birthday: '2009-12-12 00:00:00',
					// hjszd: '湖北省武汉市汉阳区',
					// gdjzd: '湖北省武汉市汉阳区'
				}
			},
			resumeInfos() {
				if (this.info) {
					return this.info.resumeInfos || []
				}
				return []
			},
			resumesRow() {
				return Math.max(this.resumeInfos.length + 1, 5)
			},
			resumesRowLeft() {
				return Math.max(this.resumesRow - this.resumeInfos.length - 1, 0)
			},
			relationshipInfos() {
				if (this.info) {
					return this.info.relationshipInfos || []
				}
				return []
			},
			relationshipsRow() {
				return Math.max(this.relationshipInfos.length + 1, 5)
			},
			relationshipsRowLeft() {
				return Math.max(this.relationshipsRow - this.relationshipInfos.length - 1, 0)
			},
			birthday() {
				let birthday = this.criminalInfo.birthday
				return this.dateTime2Date(birthday)
			},
			dateTime2Date() {
				return (dateTime) => {
					if (dateTime) {
						return dateTime.split(' ')[0]
					}
					return ''
				}
			},
			executePlace() {
				const belongs = getDeptBelongs()
				console.log('execute place:');
				return belongs
			}
		},
		onLoad(options) {
			this.idnum = options.idnum
			this.request()
		},
		methods: {
			request() {
				uni.showLoading({
					title: '正在加载...'
				})
				requestApi(apis.personInfo, {
					id_num: this.idnum
				}, {
					token: this.$store.getters.token
				}).then(data => {
					uni.hideLoading()
					console.log(data);
					this.info = data
				}).catch(err => {
					uni.showToast({
						title: err,
						icon: 'none'
					})
				})
			},
			printClick() {
				this.triggerType = 'triggerType'
			},
			backClick() {
				uni.navigateBack()
				// uni.reLaunch({
				// 	url: '/pages/print/print'
				// })
			},
			homeClick() {
				uni.reLaunch({
					url: '/pages/home/home'
				})
			},
			showLoading(obj) {
				uni.showLoading({
					title: obj.title || '正在打印...',
					mask: true
				})
			},
			hideLoading() {
				uni.hideLoading()
			},
			renderFinish: async function({
				base64,
				type
			}) {
				this.triggerType = ''
				// const path = await base64ToPath(base64, '.jpeg')
				// uni.openDocument({
				// 	filePath: path
				// })
				// return
				this.showLoading({
					title: '正在打印...'
				})
				// const path = 
				this.base64ToPdf(base64).then((path) => {
					this.hideLoading()
					this.gettedPicPath = path
					uni.openDocument({
						filePath: path
					})
				}).catch(err => {
					console.log(err);
					uni.showToast({
						title: err.message,
						icon: 'none'
					})
				})


				// uni.saveImageToPhotosAlbum({
				// 	filePath: path,
				// 	success: function(res) {
				// 		uni.showToast({
				// 			title: '保存成功'
				// 		})
				// 	}
				// });
			},
			// 直接转pdf到公共目录---速度较快
			base64ToPdf(base64) {
				return filePicker.writerToFile(base64, 'pdf', true)
			},
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
		flex-direction: column;
	}

	.print-content {
		// align-items: center;
		width: 100vw;
		height: 100vh;
	}

	.print-tables {
		align-self: center;
		z-index: 1;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin-top: 10px;
		// padding: 20px;
		background-color: #fff;
		border-radius: 8px;
		overflow: scroll;

		&_table {
			color: #333;
			box-sizing: border-box;
			padding: 20px;
			font-size: 12px;
			width: 595px;

			// width: 595px;
			// height: 842px;
			.print-tables_table__longtd {
				text-align: left;
				padding-left: 5px;
			}

			&__row {}
			

			&__icon {
				width: 90px;
				height: 120px;
			}

			&__width90 {
				width: 90px;
			}

			&__width80 {
				width: 80px;
			}

			&__width60 {
				width: 60px;
			}
		}

		table {
			// font-family: FangSong, '仿宋';
			// font: 12px '仿宋';
			border-collapse: collapse;
			width: 100%;
			border-top: #000 0.5px solid;
			border-left: #000 0.5px solid;
		}

		td {
			width: 50px;
			max-width: 140px;
			height: 40px;
			border-right: 0.5px solid black;
			border-bottom: 0.5px solid black;
			text-align: center;
		}

		&_height {
			height: 80px;
		}
		
		&_heighter {
			height: 100px	
		}

		&_heightest {
			height: 110px;
		}

		&_head {
			padding: 10px 0;
			min-height: 20px;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			text {
				font-size: 12px;
			}
			
			&__input {
				min-width: 22%;
			}
			&__inputm {
				min-width: 120px;
				// margin-right: 20px;
				// background-color: antiquewhite;
			}
		}

		&_title {
			text-align: center;
			color: #333;
			font-size: 20px;
			font-weight: bold;
		}

		&_foot {
			padding: 10px 0;
			color: #000;
			font-weight: bold;
		}
	}

	.print-content-backbtns {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		& .print-content-backbtns-btn {
			width: 100px;
			background-color: $theme-dark-color;
			margin: 10px 0;
		}
	}
</style>
