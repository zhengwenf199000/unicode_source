<template>
	<view class="content study-video_content" @click="capture">
		<content-bg></content-bg>

		<view class="content-nav">
			<image class="content-nav-home" src="@/static/imgs/Home.png" mode="widthFix" @click="homeClick"></image>
		</view>

		<view class="content-c">
			<breadcrumb title="自助学习" actionTitle="视频学习"></breadcrumb>
			<view class="study-video_types">
				<uni-data-select v-model="studyCode" :localdata="studyCodeMap" placeholder="选择学习资源类型"
					@click="getStudyCodeMap()">
				</uni-data-select>
			</view>
			<view class="video-box">
				<empty-view v-if="videoList.length < 1"></empty-view>
				<uni-grid v-else :column="4" :square="false" :showBorder="false">
					<uni-grid-item style="height: auto;" v-for="(v, idx) in videoList" :key="idx">
						<view class="video_content-video__item">
							<view class="video_content-video__video">
								<image :src="getImagePath(v)" mode="aspectFill">
								</image>
								<view class="video_content-video__cover" @click="play(v)">
									<uni-icons :type="getPlayIcon(v)" size="60" color="rgba(0, 0, 0, 0.5)">
									</uni-icons>
								</view>
							</view>
							<text class="video_content-video__title">{{ v.title }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>

			<view class="study-video_content-backbtns">
				<button class="study-video_content-backbtns-btn" type="primary" @click="backClick">返回</button>
			</view>
		</view>

	</view>
</template>

<script setup lang="ts">
	import { computed, ref, watch } from 'vue';
	import { useStore } from 'vuex';
	import { apiUrl, apis, requestApiGet } from '../../utils/http';

	const store = useStore()
	const aioCode = computed(() => {
		return store.state.index.deviceMac
	})
	const videoList = ref([])

	const studyCode = ref('0')
	const studyCodeMap = ref([])
	const getStudyCodeMap = async () => {
		try {
			if (studyCodeMap.value.length > 0) return
			const r : any = await requestApiGet(apis.getCodeBook, {
				aioCode: aioCode.value,
				parentId: 0,
				dictCode: 'YTJJZDXXXZYLX'
			}, null)
			studyCodeMap.value = r.map(v => ({ ...v, text: v.label }))
		} catch (e) {

		}
	}

	watch(studyCode, async (val) => {
		try {
			const r : any = await requestApiGet(apis.learningResource, {
				aioCode: aioCode.value,
				code: val
			}, null)
			videoList.value = r || []
		} catch (e) {
			uni.showModal({
				title: e.message || e as unknown as string,
				showCancel: false
			})
		}
	}, { immediate: true })

	const getImagePath = (v) => {
		return `${apiUrl}${v?.file?.[0]?.path}`
	}
	
	const getPlayIcon = (v) => {
		return v?.coverFile?.[0]?.path?.endsWith('.mp4') ? 'videocam-filled' : 'list'
	}

	const backClick = () => {
		uni.navigateBack()
	}

	const play = (v) => {
		let filePath = v?.coverFile?.[0]?.path
		if (!filePath) {
			uni.showModal({
				title: '文件为空，请联系管理人员',
				showCancel: false
			})
			return
		}
		filePath = `${apiUrl}${filePath}`
		if (filePath.endsWith('.mp4')) {
			// 视频
			
			return
		}
		uni.openDocument({
			filePath
		})
	}
</script>

<style lang="scss">
	view {
		display: flex;
		flex-direction: column;
	}

	.study-video_content {
		position: relative;
		width: 100vw;
		height: 100vh;

		.content-c {
			position: relative;
		}

		.study-video_types {
			position: absolute;
			top: 10px;
			right: 20px;
			width: 250px;
		}

		.video-box {
			flex: 1;
			overflow: hidden scroll;

			.video_content-video__item {
				height: 100%;
				padding: 5px 8px;
				display: flex;
				flex-direction: column;

				.video_content-video__video {
					position: relative;
					width: 100%;

					image {
						width: 100%;
						height: 180px;
						background-color: lightgray;
					}

					.video_content-video__cover {
						position: absolute;
						width: 100%;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}

				.video_content-video__title {
					margin-top: 5px;
					color: #999;
					font-size: 16px;
					line-height: 20px;
				}
			}
		}

		.study-video_content-backbtns {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;

			& .study-video_content-backbtns-btn {
				width: 100px;
				background-color: $theme-dark-color;
				margin: 10px 0;
			}
		}
	}
</style>