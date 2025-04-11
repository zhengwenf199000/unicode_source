<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(options) {
			this.idnum = options.idnum
			this.target = options.target
		},
		onReady() {
			uni.redirectTo({
				url: this.target + '?idnum=' + this.idnum
				// url: '/pages/leave/add?idnum=' + this.idnum
				// url: '/pages/register/print?idnum=' + this.idnum
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
