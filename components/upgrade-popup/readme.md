
### 导入项目
拷贝upgrade-popup到componets

### 使用说明
>1、配置upgrade.js文件内常量remoteResource为项目的远程路径，需要保证调用remoteResource + 'info.json'能够获取到版本配置文件；

>2、添加upgrade-popup组件到template，通过新包信息来控制是否显示
```
<template>
	<view>
		<!-- ...其他组件 -->
		<upgrade-popup v-if="packageInfo" :localPackageInfo="packageInfo" @close="packageInfo = null"></upgrade-popup>
	</view>
</template>
```
>3、引入upgrade.js，在合适实际调用checkVersion，如果有新版本会通过回调传入新版本更新信息
```
import plugins from '@/components/upgrade-popup/upgrade';
export default {
	data() {
		return {
			packageInfo: null
		}
	},
	onLoad() {
		plugins.checkVersion((packageInfo) => {
			this.packageInfo = packageInfo;
		})
	}
」
```
### 配置文件说明
```
const infoJson = {
	<!-- apk新版本版本号 -->
	"apkVersion": "1.1",
	<!-- apk新版本包名，包含.apk后缀，需要保证remoteResource + '该包名'可以下载该文件 -->
	"apkPackageName": "app1_0.apk",
	<!-- 内核新版本版本号 -->
	"wgtVersion": "1.1.0",
	<!-- 内核新版本包名，包含.wgt后缀，需要保证remoteResource + '该包名'可以下载该文件 -->
	"wgtPackageName": "wgt1_1_0.wgt",
	<!-- 是否强制更新，true的话弹窗无法关闭 -->
	"forceUpdate": false,
	"updateInfo": "1、调整细节\n2、流程优化"
}
```