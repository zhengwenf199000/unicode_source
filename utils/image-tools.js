function getLocalFilePath(path) {
	if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf(
			'_downloads') === 0) {
		return path
	}
	if (path.indexOf('file://') === 0) {
		return path
	}
	if (path.indexOf('/storage/emulated/0/') === 0) {
		return path
	}
	if (path.indexOf('/') === 0) {
		var localFilePath = plus.io.convertAbsoluteFileSystem(path)
		if (localFilePath !== path) {
			return localFilePath
		} else {
			path = path.substr(1)
		}
	}
	return '_www/' + path
}

export function pathToBase64(path) {
	return new Promise(function(resolve, reject) {
		if (typeof window === 'object' && 'document' in window) {
			if (typeof FileReader === 'function') {
				var xhr = new XMLHttpRequest()
				xhr.open('GET', path, true)
				xhr.responseType = 'blob'
				xhr.onload = function() {
					if (this.status === 200) {
						let fileReader = new FileReader()
						fileReader.onload = function(e) {
							resolve(e.target.result)
						}
						fileReader.onerror = reject
						fileReader.readAsDataURL(this.response)
					}
				}
				xhr.onerror = reject
				xhr.send()
				return
			}
			var canvas = document.createElement('canvas')
			var c2x = canvas.getContext('2d')
			var img = new Image
			img.onload = function() {
				canvas.width = img.width
				canvas.height = img.height
				c2x.drawImage(img, 0, 0)
				resolve(canvas.toDataURL())
				canvas.height = canvas.width = 0
			}
			img.onerror = reject
			img.src = path
			return
		}
		if (typeof plus === 'object') {
			plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function(entry) {
				entry.file(function(file) {
					var fileReader = new plus.io.FileReader()
					fileReader.onload = function(data) {
						resolve(data.target.result)
					}
					fileReader.onerror = function(error) {
						reject(error)
					}
					fileReader.readAsDataURL(file)
				}, function(error) {
					console.log(error,555)
					reject(error)
				})
			}, function(error) {
				reject(error)
			})
			return
		}
		if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
			wx.getFileSystemManager().readFile({
				filePath: path,
				encoding: 'base64',
				success: function(res) {
					resolve('data:image/png;base64,' + res.data)
				},
				fail: function(error) {
					reject(error)
				}
			})
			return
		}
		reject(new Error('not support'))
	})
}

export function base64ToPath(base64, extName) {
	return new Promise(function(resolve, reject) {
		if (typeof window === 'object' && 'document' in window) {
			base64 = base64.split(',')
			var type = base64[0].match(/:(.*?);/)[1]
			var str = atob(base64[1])
			var n = str.length
			var array = new Uint8Array(n)
			while (n--) {
				array[n] = str.charCodeAt(n)
			}
			return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], {
				type: type
			})))
		}
		var fileName;
		if (!extName) {
			extName = base64.match(/data\:\S+\/(\S+);/)
			if (extName) {
				extName = extName[1]
			} else {
				reject(new Error('base64 error'))
			}
			fileName = Date.now() + '.' + extName;
		} else {
			fileName = Date.now() + extName;
		}
		if (typeof plus === 'object') {
			var bitmap = new plus.nativeObj.Bitmap('bitmap' + Date.now())
			bitmap.loadBase64Data(base64, function() {
				var filePath = '_doc/uniapp_temp/' + fileName
				bitmap.save(filePath, {}, function() {
					bitmap.clear()
					resolve(filePath)
				}, function(error) {
					bitmap.clear()
					reject(error)
				})
			}, function(error) {
				bitmap.clear()
				reject(error)
			})
			return
		}
		if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
			var filePath = wx.env.USER_DATA_PATH + '/' + fileName
			wx.getFileSystemManager().writeFile({
				filePath: filePath,
				data: base64.replace(/^data:\S+\/\S+;base64,/, ''),
				encoding: 'base64',
				success: function() {
					resolve(filePath)
				},
				fail: function(error) {
					reject(error)
				}
			})
			return
		}
		reject(new Error('not support'))
	})
}

/**  
 * base64字符串转成文件  
 * @param {String} base64Str // 允许包含前缀  
 * @param {String} fileName // 文件名称：1663061363470.xlsx  
 * @param {Object} callback  // 返回本地路径径URL，file:///xxx/doc/1663062980631.xlsx  
 */
export function base64ToFile(base64Str, fileName, callback = null) {
	return new Promise((resolve, reject) => {
		// #ifdef H5
		// 去除base64前缀  
		var index = base64Str.indexOf(',');
		base64Str = base64Str.slice(index + 1, base64Str.length);

		// 创建Blob对象  
		var blob = dataURItoBlob(base64Str);

		// 创建一个新的Blob URL  
		var blobUrl = window.URL.createObjectURL(blob);

		// // 创建一个新的a标签用于下载  
		// var a = document.createElement('a');  
		// a.href = blobUrl;  
		// a.download = fileName;  
		// document.body.appendChild(a);  

		// // 模拟点击a标签触发下载  
		// a.click();  

		// // 移除a标签和Blob URL  
		// document.body.removeChild(a);  
		// window.URL.revokeObjectURL(blobUrl);

		// 回调  
		callback && callback(blobUrl);
		resolve(blobUrl)

		// #endif  
		// #ifdef APP-PLUS  
		// 去除base64前缀  
		var index = base64Str.indexOf(',')
		var base64Str = base64Str.slice(index + 1, base64Str.length)

		plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
			fs.root.getFile(fileName, {
				create: true
			}, function(entry) {
				// 获得本地路径URL，file:///xxx/doc/1663062980631.xlsx  
				var fullPath = entry.fullPath;
				let platform = uni.getSystemInfoSync().platform;
				if (platform == 'android') {
					var FileOutputStream = plus.android.importClass("java.io.FileOutputStream");
					try {
						function base64ToByteArray(base64Str) {
							const binaryString = atob(base64Str);
							const uint8Array = new Uint8Array(binaryString.length);

							for (let i = 0; i < binaryString.length; i++) {
								uint8Array[i] = binaryString.charCodeAt(i);
							}
							let arr = []
							Array.from(uint8Array).map(num => {
								arr.push(num >= 128 ? (num - 256) : num)
							})
							return arr;
						}
						var out = new FileOutputStream(fullPath);
						let bytes = base64ToByteArray(base64Str);
						if (bytes == null || bytes.length == 0) {
							out.close();
							reject('获取文件失败')
							return
						} else {
							out.write(bytes);
							out.close();
							// 回调    
							callback && callback(entry.toLocalURL());
							resolve(entry.toLocalURL())
							return
						}
					} catch (e) {
						console.log(e.message);
						reject(e.message)
					}
				} else if (platform == 'ios') {
					var NSData = plus.ios.importClass('NSData');
					var nsData = new NSData();
					nsData = nsData.initWithBase64EncodedStringoptions(base64Str, 0);
					if (nsData) {
						nsData.plusCallMethod({
							writeToFile: fullPath,
							atomically: true
						});
						plus.ios.deleteObject(nsData);
					}
					// 回调    
					callback && callback(entry.toLocalURL());
					resolve(entry.toLocalURL())
				}
			})
		})
		// #endif
	})
}


// 将base64字符串转换为Blob对象  
function dataURItoBlob(dataURI) {
	var byteString = atob(dataURI);
	var arrayBuffer = new ArrayBuffer(byteString.length);
	var uint8Array = new Uint8Array(arrayBuffer);
	for (var i = 0; i < byteString.length; i++) {
		uint8Array[i] = byteString.charCodeAt(i);
	}
	return new Blob([uint8Array], {
		type: 'application/octet-stream'
	});
}
// type:'application/octet-stream'
export function bufferToFile(buffer, type = 'application/pdf') {
	return new Promise((resolve, reject) => {
		// #ifdef H5
		var blob = new Blob([buffer], { type })
		var blobUrl = window.URL.createObjectURL(blob);
		resolve(blobUrl)
		// #endif  
		// #ifdef APP-PLUS  
		const fileName = Date.now() + '.' + type.split('/')[1]
		plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
			fs.root.getFile(fileName, {
				create: true
			}, function(entry) {
				// 获得本地路径URL，file:///xxx/doc/1663062980631.xlsx  
				var fullPath = entry.fullPath;
				let platform = uni.getSystemInfoSync().platform;
				if (platform == 'android') {
					var FileOutputStream = plus.android.importClass("java.io.FileOutputStream");
					try {
						var out = new FileOutputStream(fullPath);
						// Array.from(uint8Array).map(num => {
						// 	arr.push(num >= 128 ? (num - 256) : num)
						// })
						const bytes = Array.from(buffer).map(num => num >= 128 ? (num - 256) : num);
						if (bytes == null || bytes.length == 0) {
							out.close();
							reject('获取文件失败')
							return
						} else {
							out.write(bytes);
							out.close();
							resolve(entry.toLocalURL())
							return
						}
					} catch (e) {
						console.log(e.message);
						reject(e.message)
					}
				} else if (platform == 'ios') {
					reject('不支持iOS')
				}
			})
		})
		// #endif
	})
}