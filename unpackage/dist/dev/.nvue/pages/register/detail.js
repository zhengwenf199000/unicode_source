import { f as formatAppLog, r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, Fragment, renderList, normalizeClass, normalizeStyle, createCommentVNode, toDisplayString } from "vue";
import { u as upload, a as apis, r as requestApi } from "../../http.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _imports_1 } from "../../Finger.js";
import { _ as _imports_2 } from "../../Voice.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
function writerToFile(data, type = "docx", asBinary = false) {
  return new Promise((resolve, reject) => {
    if (typeof plus === "object") {
      var basePath = "_downloads";
      var dirPath = "sftemp";
      let fileName = "generated." + type;
      var filePath = basePath + "/" + dirPath + "/" + fileName;
      formatAppLog("log", "at utils/filePicker.ts:12", "64 to pdf::", filePath);
      if (plus.os.name === "Android") {
        plus.io.requestFileSystem(plus.io.PUBLIC_DOWNLOADS, function(success) {
          formatAppLog("log", "at utils/filePicker.ts:15", "requestFileSystem success:");
          success.root.getDirectory(dirPath, {
            create: true,
            exclusive: false
          }, function(entry) {
            formatAppLog("log", "at utils/filePicker.ts:20", "getDirectory success:");
            entry.getFile(fileName, {
              create: true,
              exclusive: false
            }, function(entry2) {
              formatAppLog("log", "at utils/filePicker.ts:25", "getFile success:");
              entry2.createWriter(function(writer) {
                formatAppLog("log", "at utils/filePicker.ts:27", "createWriter success:");
                writer.onwrite = function() {
                  resolve(filePath);
                };
                writer.onwritestart = function() {
                  formatAppLog("log", "at utils/filePicker.ts:32", "onwritestart");
                };
                writer.onwriteend = function(e) {
                  formatAppLog("log", "at utils/filePicker.ts:35", e);
                  reject(new Error("转化失败！"));
                };
                writer.onerror = reject;
                writer.seek(0);
                if (asBinary) {
                  writer.writeAsBinary(data.replace("data:application/pdf;filename=generated.pdf;base64,", ""));
                } else {
                  writer.write(data);
                }
              }, reject);
            }, reject);
          });
        }, reject);
        return;
      }
      formatAppLog("log", "at utils/filePicker.ts:57", "bbbbbbbbbbbb");
      var bitmap = new plus.nativeObj.Bitmap(fileName);
      bitmap.loadBase64Data(base64, function() {
        bitmap.save(filePath, {}, function() {
          bitmap.clear();
          resolve(filePath);
        }, function(error) {
          bitmap.clear();
          reject(error);
        });
      }, function(error) {
        bitmap.clear();
        reject(error);
      });
      return;
    } else {
      reject(new Error("导出文件失败！"));
    }
  });
}
function open(callback) {
  if (plus.os.name.toLowerCase() != "android") {
    uni.showModal({
      title: "提示",
      content: "仅支持Android平台",
      success: function(res) {
      }
    });
    return false;
  }
  let main = plus.android.runtimeMainActivity();
  let Intent = plus.android.importClass("android.content.Intent");
  let fileIntent = new Intent(Intent.ACTION_GET_CONTENT);
  fileIntent.setType("*/*");
  fileIntent.addCategory(Intent.CATEGORY_OPENABLE);
  main.startActivityForResult(fileIntent, 1);
  main.onActivityResult = function(requestCode, resultCode, data) {
    let Activity = plus.android.importClass("android.app.Activity");
    plus.android.importClass("android.content.ContentUris");
    plus.android.importClass("android.database.Cursor");
    plus.android.importClass("android.net.Uri");
    let Build = plus.android.importClass("android.os.Build");
    let Environment = plus.android.importClass("android.os.Environment");
    let DocumentsContract = plus.android.importClass("android.provider.DocumentsContract");
    let MediaStore = plus.android.importClass("android.provider.MediaStore");
    let contentResolver = main.getContentResolver();
    plus.android.importClass(contentResolver);
    let path = "";
    if (resultCode == Activity.RESULT_OK) {
      let uri = data.getData();
      if ("file" == uri.getScheme().toLowerCase()) {
        path = uri.getPath();
        return;
      }
      if (Build.VERSION.SDK_INT > Build.VERSION_CODES.KITKAT) {
        path = getPath(this, uri);
      } else {
        path = getRealPathFromURI(uri);
      }
      formatAppLog("log", "at utils/filePicker.ts:130", uri);
      callback(path);
    }
    function getPath(context, uri) {
      let isKitKat = Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT;
      let scheme = uri.getScheme().toLowerCase();
      if (isKitKat && DocumentsContract.isDocumentUri(context, uri)) {
        if (isExternalStorageDocument(uri)) {
          let docId = DocumentsContract.getDocumentId(uri);
          let split = docId.split(":");
          let type = split[0];
          if ("primary" == type.toLowerCase()) {
            return Environment.getExternalStorageDirectory() + "/" + split[1];
          } else {
            return "/storage/" + type + "/" + split[1];
          }
        } else if (isDownloadsDocument(uri)) {
          let id = DocumentsContract.getDocumentId(uri);
          let split = id.split(":");
          return split[1];
        } else if (isMediaDocument(uri)) {
          let docId = DocumentsContract.getDocumentId(uri);
          let split = docId.split(":");
          let type = split[0];
          let contentUri = null;
          if ("image" == type.toLowerCase()) {
            contentUri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
          } else if ("video" == type.toLowerCase()) {
            contentUri = MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
          } else if ("audio" == type.toLowerCase()) {
            contentUri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
          } else if ("document" == type.toLowerCase()) {
            contentUri = MediaStore.Files.getContentUri("external");
          }
          let selection = "_id=?";
          let selectionArgs = [split[1]];
          return getDataColumn(context, contentUri, selection, selectionArgs);
        }
      } else if ("content" == scheme) {
        return getDataColumn(context, uri, null, null);
      } else if ("file" == scheme) {
        return uri.getPath();
      }
    }
    function getRealPathFromURI(uri) {
      let res = null;
      let proj = [MediaStore.Images.Media.DATA];
      let cursor = contentResolver.query(uri, proj, null, null, null);
      if (null != cursor && cursor.moveToFirst()) {
        let column_index = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
        res = cursor.getString(column_index);
        cursor.close();
      }
      return res;
    }
    function getDataColumn(context, uri, selection, selectionArgs) {
      let cursor = null;
      let column = "_data";
      let projection = [column];
      cursor = contentResolver.query(uri, projection, selection, selectionArgs, null);
      if (cursor != null && cursor.moveToFirst()) {
        let column_index = cursor.getColumnIndexOrThrow(column);
        return cursor.getString(column_index);
      }
    }
    function isExternalStorageDocument(uri) {
      return "com.android.externalstorage.documents" == uri.getAuthority() ? true : false;
    }
    function isDownloadsDocument(uri) {
      return "com.android.providers.downloads.documents" == uri.getAuthority() ? true : false;
    }
    function isMediaDocument(uri) {
      return "com.android.providers.media.documents" == uri.getAuthority() ? true : false;
    }
  };
}
const filePicker = {
  open,
  writerToFile
};
const _style_0 = { "register_detail_content": { "": { "flex": 1 } }, "register_detail_content-breadcrumb": { ".register_detail_content ": { "flexDirection": "row", "marginTop": 10 } }, "register_detail_content-breadcrumb-item": { ".register_detail_content .register_detail_content-breadcrumb ": { "flex": 1 } }, "register_detail_content-breadcrumb-last": { ".register_detail_content .register_detail_content-breadcrumb ": { "flex": 0.92 } }, "register_detail_content-c": { ".register_detail_content ": { "flex": 1, "marginTop": 10, "marginRight": 0, "marginBottom": 10, "marginLeft": 0, "backgroundColor": "#ffffff", "overflow": "hidden" } }, "register_detail_content-c-step-status": { ".register_detail_content .register_detail_content-c ": { "color": "#006AEC", "fontSize": 20, "fontWeight": "bold", "textAlign": "center" } }, "register_detail_content-c-recognizeFace": { ".register_detail_content .register_detail_content-c ": { "flex": 1, "alignItems": "center", "justifyContent": "center" } }, "register_detail_content-c-recognizeFace-alive_detect": { ".register_detail_content .register_detail_content-c .register_detail_content-c-recognizeFace ": { "marginTop": 20, "width": 800, "height": 300, "backgroundColor": "#F5DEB3" } }, "register_detail_content-c-improveInfo-step1": { ".register_detail_content .register_detail_content-c .register_detail_content-c-recognizeFace ": { "justifyContent": "center" } }, "register_detail_content-c-improveInfo-step1-fingerprint": { ".register_detail_content .register_detail_content-c .register_detail_content-c-recognizeFace .register_detail_content-c-improveInfo-step1 ": { "position": "relative", "marginTop": 30, "width": 200, "height": 240 } }, "register_detail_content-c-improveInfo-step1-fingerprint_content": { ".register_detail_content .register_detail_content-c .register_detail_content-c-recognizeFace .register_detail_content-c-improveInfo-step1 ": { "position": "absolute", "top": 0, "left": 0, "width": 200, "height": 240 } }, "register_detail_content-c-improveInfo-step1-fingerprint_fp": { ".register_detail_content .register_detail_content-c .register_detail_content-c-recognizeFace .register_detail_content-c-improveInfo-step1 ": { "flex": 1 } }, "register_detail_content-c-improveInfo-step2": { ".register_detail_content .register_detail_content-c .register_detail_content-c-recognizeFace ": { "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20, "flex": 1, "alignItems": "center", "justifyContent": "center" } }, "register_detail_content-c-improveInfo-step2-audio": { ".register_detail_content .register_detail_content-c .register_detail_content-c-recognizeFace .register_detail_content-c-improveInfo-step2 ": { "width": 100, "height": 100 } }, "register_detail_content-c-improveInfo-step2-audio_status": { ".register_detail_content .register_detail_content-c .register_detail_content-c-recognizeFace .register_detail_content-c-improveInfo-step2 ": { "paddingTop": 10, "textAlign": "center", "color": "#006AEC" } }, "register_detail_content-c-improveInfo-step2-tint": { ".register_detail_content .register_detail_content-c .register_detail_content-c-recognizeFace .register_detail_content-c-improveInfo-step2 ": { "color": "#006AEC", "fontSize": 18, "fontWeight": "bold", "textAlign": "center" } }, "register_detail_content-c-improveInfo-step2-sample": { ".register_detail_content .register_detail_content-c .register_detail_content-c-recognizeFace .register_detail_content-c-improveInfo-step2 ": { "alignItems": "flex-start" } }, "register_detail_content-c-improveInfo-step2-tipb": { ".register_detail_content .register_detail_content-c .register_detail_content-c-recognizeFace .register_detail_content-c-improveInfo-step2 ": { "color": "#006AEC", "fontSize": 18, "fontWeight": "bold" } }, "register_detail_content-c-improveInfo-step2-tip": { ".register_detail_content .register_detail_content-c .register_detail_content-c-recognizeFace .register_detail_content-c-improveInfo-step2 ": { "color": "#006AEC", "fontSize": 16, "marginTop": 5 } }, "register_detail_content-c-uploadDoc": { ".register_detail_content .register_detail_content-c ": { "flex": 1, "flexDirection": "row", "overflow": "hidden" } }, "register_detail_content-c-uploadDoc-left": { ".register_detail_content .register_detail_content-c .register_detail_content-c-uploadDoc ": { "flex": 1 } }, "register_detail_content-c-uploadDoc-left-writ": { ".register_detail_content .register_detail_content-c .register_detail_content-c-uploadDoc .register_detail_content-c-uploadDoc-left ": { "backgroundColor": "#f8f9f9", "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#dddddd" } }, "register_detail_content-c-uploadDoc-left-writ-text": { ".register_detail_content .register_detail_content-c .register_detail_content-c-uploadDoc .register_detail_content-c-uploadDoc-left ": { "color": "#666666", "fontWeight": "bold", "fontSize": 18 } }, "register_detail_content-c-uploadDoc-left-writselected-text": { ".register_detail_content .register_detail_content-c .register_detail_content-c-uploadDoc .register_detail_content-c-uploadDoc-left ": { "color": "#ffffff" } }, "register_detail_content-c-uploadDoc-left-writselected": { ".register_detail_content .register_detail_content-c .register_detail_content-c-uploadDoc .register_detail_content-c-uploadDoc-left ": { "backgroundColor": "#006AEC" } }, "register_detail_content-c-uploadDoc-right": { ".register_detail_content .register_detail_content-c .register_detail_content-c-uploadDoc ": { "flex": 2, "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "backgroundColor": "#ffffff" } }, "register_detail_content-c-uploadDoc-right-add": { ".register_detail_content .register_detail_content-c .register_detail_content-c-uploadDoc .register_detail_content-c-uploadDoc-right ": { "width": 120, "height": 120 } } };
const recorderManager = uni.getRecorderManager();
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      isOfflineMode: false,
      idnum: "",
      codeCountdowning: false,
      countdownTime: 60,
      currentPathIndex: 2,
      // 3、完善信息 step 0:填写信息、1:录入指纹、2:录入声纹
      improveInfoStep: 0,
      // 生物特征录入 step 0: 指纹、1：声纹、2：人脸
      biosignatureStep: 0,
      // 本地路径
      gettedFacePath: "",
      gettedRecordPath: "",
      gettedFingerpath: "",
      // 远程路径
      facePath: "",
      fingerpath: "",
      recordFile: "",
      recording: false,
      // 4、上传文书，包含：法律文书、委托调查函、居住地审核函、社区矫正对象执行地变更函、起诉书、刑事判决书、执行通知书、罪犯执行告知书、罪犯结案登记表、刑事裁定书、刑事附带民事判决书
      writTypes: [
        "法律文书",
        "委托调查函",
        "居住地审核函",
        "社区矫正对象执行地变更函",
        "起诉书",
        "刑事判决书",
        "执行通知书",
        "罪犯执行告知书",
        "罪犯结案登记表",
        "刑事裁定书",
        "刑事附带民事判决书"
      ],
      writObjects: [],
      writIndex: 0,
      registerPaths: [
        {
          type: "readIdCard",
          selectedIcon: "../../static/register/detail/ReadIDCard.png"
        },
        {
          type: "improveInfo",
          icon: "../../static/register/detail/ImproveInformation1.png",
          selectedIcon: "../../static/register/detail/ImproveInformation.png"
        },
        // {
        // 	type: 'inputDoc',
        // 	icon: '../../static/register/detail/UploadDocuments1.png',
        // 	selectedIcon: '../../static/register/detail/UploadDocuments.png'
        // },
        {
          type: "recognizeFace",
          icon: "../../static/register/detail/FaceRecognition1.png",
          selectedIcon: "../../static/register/detail/FaceRecognition.png",
          notCommon: true
        }
      ]
    };
  },
  watch: {
    currentPath: {
      handler(newV, oldV) {
        this.currentPathChange(newV);
      },
      immediate: true
    },
    biosignatureStep(newV) {
      if (newV === 0) {
        this.startAliveDetecting();
      } else if (newV === 1) {
        this.startFingerprint();
      }
      this.capture();
    },
    codeCountdowning(newV) {
      if (newV) {
        if (!this.coutdownInterval) {
          this.coutdownInterval = setInterval(() => {
            if (this.codeCountdowning) {
              if (this.countdownTime <= 1) {
                this.countdownTime = 60;
                this.codeCountdowning = false;
                return;
              }
              this.countdownTime--;
            }
          }, 1e3);
        }
      }
    }
  },
  computed: {
    registerPathsSteps() {
      return this.registerPaths.map((p) => p.type);
    },
    currentPath() {
      return this.registerPathsSteps[this.currentPathIndex];
    },
    currentWritObj() {
      return this.writObjects[this.writIndex];
    }
  },
  onLoad(options) {
    this.idnum = options.idnum;
    this.name = options.name;
    this.isOfflineMode = options.mode == "offline";
    this.writObjects = this.writTypes.map((type, i) => ({
      index: i,
      name: type
    }));
    this.startVoiceRecording();
  },
  onReady() {
  },
  onUnload() {
    try {
      this.$refs.alive_detect && this.$refs.alive_detect.stopDetecting();
      this.$refs.fingerprint && this.$refs.fingerprint.closeFingerprint();
      this.coutdownInterval && clearInterval(this.codeCountdowning);
    } catch (e) {
      formatAppLog("error", "at pages/register/detail.nvue:228", e);
    }
  },
  methods: {
    currentPathChange(newV) {
      if (newV === "recognizeFace") {
        if (this.biosignatureStep === 0) {
          this.startAliveDetecting();
        } else if (this.biosignatureStep === 1) {
          this.startFingerprint();
        } else if (this.biosignatureStep === 2)
          ;
        return;
      }
      if (newV === "uploadDoc") {
        return;
      }
    },
    startAliveDetecting() {
      uni.$u.sleep(1e3).then(() => {
        this.$refs.alive_detect.startDetecting((path) => {
          formatAppLog("log", "at pages/register/detail.nvue:251", path);
          if (path) {
            try {
              this.$refs.alive_detect.stopDetecting();
            } catch (e) {
              formatAppLog("error", "at pages/register/detail.nvue:256", e);
            }
            this.gettedFacePath = path;
            if (this.isOfflineMode) {
              this.nextStep();
              return;
            }
            uni.showLoading({
              title: "上传中..."
            });
            this.upload(path, "renlian", (remote) => {
              this.facePath = remote;
              uni.showLoading({
                title: "正在保存人脸信息..."
              });
              this.saveBiosignature(remote, 1, () => {
                uni.showToast({
                  title: "保存成功！"
                });
                this.nextStep();
              });
            });
          }
        });
      });
    },
    startFingerprint() {
      uni.$u.sleep(500).then(() => {
        this.$refs.fingerprint.getFingerprintImage((path) => {
          if (path) {
            try {
              this.$refs.fingerprint.closeFingerprint();
            } catch (e) {
              formatAppLog("error", "at pages/register/detail.nvue:296", e);
            }
            formatAppLog("log", "at pages/register/detail.nvue:298", "获取到的指纹图片：", path);
            this.gettedFingerpath = path;
            if (this.isOfflineMode) {
              this.nextStep();
              return;
            }
            this.upload(path, "zhiwen", (remote) => {
              this.fingerpath = remote;
              uni.showLoading({
                title: "正在保存指纹信息..."
              });
              this.saveBiosignature(remote, 2, () => {
                uni.showToast({
                  title: "保存成功！"
                });
                this.nextStep();
              });
            });
          }
        });
      });
    },
    startVoiceRecording() {
      recorderManager.onStop((r) => {
        if (this.isOfflineMode) {
          uni.saveFile({
            tempFilePath: r.tempFilePath,
            complete: (r2) => {
              this.gettedRecordPath = r2.savedFilePath;
              this.nextStep();
            }
          });
          return;
        }
        this.upload(r.tempFilePath, "shenwen", (remote) => {
          this.recordFile = remote;
          uni.showLoading({
            title: "正在保存声纹信息..."
          });
          this.saveBiosignature(remote, 3, () => {
            this.nextStep();
          });
        });
      });
    },
    testSave() {
      {
        if (this.isOfflineMode) {
          this.$store.state.offline.instance.addFeature(this.idnum, this.gettedFacePath, this.gettedRecordPath, this.gettedFingerpath, this.name);
        }
      }
    },
    sendCode() {
      uni.showLoading({
        title: "正在发送..."
      });
      setTimeout(() => {
        this.codeCountdowning = true;
        uni.hideLoading();
      }, 500);
    },
    upload(path, type, successCallback) {
      uni.showLoading({
        title: "上传中..."
      });
      upload(path, type).then((remote) => {
        uni.hideLoading();
        successCallback(remote);
      }).catch((err) => {
        uni.showToast({
          title: err,
          icon: "none"
        });
      });
    },
    saveBiosignature(filePath, type, successCallback) {
      const api = `${apis.saveBiosignature}?id_num=${this.idnum}&tzlx=${type}&filePath=${filePath}`;
      uni.showLoading({
        title: "正在保存信息..."
      });
      requestApi(api, null, {
        token: this.$store.getters.token
      }).then((data) => {
        uni.hideLoading();
        successCallback();
      }).catch((err) => {
        uni.showToast({
          title: err,
          icon: "none"
        });
      });
    },
    homeClick() {
      if (this.isOfflineMode) {
        uni.navigateBack();
        return;
      }
      uni.reLaunch({
        url: "/pages/home/home"
      });
    },
    nextStep() {
      if (this.biosignatureStep >= 2) {
        uni.showToast({
          title: "已完成入矫！"
        });
        if (this.isOfflineMode) {
          this.$store.state.offline.instance.addFeature(this.idnum, this.gettedFacePath, this.gettedRecordPath, this.gettedFingerpath, this.name);
          uni.navigateBack();
          return;
        }
        uni.reLaunch({
          url: "/pages/home/home"
        });
        return;
      }
      this.biosignatureStep++;
      try {
        this.capture();
      } catch (e) {
        uni.showToast({
          title: e.message || e,
          icon: "none"
        });
      }
    },
    detectSuccess() {
      formatAppLog("log", "at pages/register/detail.nvue:440", "detectSuccess");
    },
    detectFailure() {
      formatAppLog("log", "at pages/register/detail.nvue:447", "detectFailure");
    },
    fingerprintFinish(e) {
      const path = e.detail.fingerpath;
      this.fingerpath = path;
      this.improveInfoStep++;
    },
    startOrStopRecording() {
      this.recording ? this.stopRecording() : this.startRecording();
      this.recording = !this.recording;
    },
    startRecording() {
      recorderManager.start({
        duration: 6e5
      });
    },
    stopRecording() {
      recorderManager.stop();
    },
    writSelected(i) {
      this.writIndex = i;
    },
    chooseFile() {
      filePicker.open((path) => {
        formatAppLog("log", "at pages/register/detail.nvue:490", path);
        this.upload(path, "", (remote) => {
          const writ = this.currentWritObj;
          writ.done = true;
          writ.path = remote;
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_content_bg = resolveEasycom(resolveDynamicComponent("content-bg"), __easycom_0);
  const _component_alive_detect = resolveComponent("alive-detect");
  const _component_finger_print = resolveComponent("finger-print");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", {
      class: "content register_detail_content",
      onClick: _cache[4] || (_cache[4] = (...args) => _ctx.capture && _ctx.capture(...args))
    }, [
      createVNode(_component_content_bg),
      createElementVNode("view", { class: "content-nav" }, [
        createElementVNode("u-image", {
          class: "content-nav-home",
          src: _imports_0,
          mode: "widthFix",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.homeClick && $options.homeClick(...args))
        })
      ]),
      createElementVNode("view", { class: "content-c" }, [
        createElementVNode("view", { class: "register_detail_content-breadcrumb" }, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.registerPaths, (path, i) => {
              return openBlock(), createElementBlock(
                "view",
                {
                  class: normalizeClass(["register_detail_content-breadcrumb-item", { "register_detail_content-breadcrumb-last": path.notCommon }]),
                  style: normalizeStyle({ opacity: path.hidden ? 0 : 1 }),
                  key: path.type,
                  onClick: _cache[1] || (_cache[1] = ($event) => $options.testSave())
                },
                [
                  $data.currentPathIndex < i ? (openBlock(), createElementBlock("u-image", {
                    key: 0,
                    class: "register_detail_content-breadcrumb-item-icon",
                    src: path.icon,
                    mode: "widthFix"
                  }, null, 8, ["src"])) : (openBlock(), createElementBlock("u-image", {
                    key: 1,
                    class: "register_detail_content-breadcrumb-item-icon",
                    src: path.selectedIcon,
                    mode: "widthFix"
                  }, null, 8, ["src"]))
                ],
                6
                /* CLASS, STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        createElementVNode("view", { class: "register_detail_content-c" }, [
          $options.currentPath === "recognizeFace" ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "register_detail_content-c-recognizeFace"
          }, [
            $data.biosignatureStep === 0 ? (openBlock(), createElementBlock("scroller", {
              key: 0,
              class: "register_detail_content-c-improveInfo-step1"
            }, [
              createElementVNode("u-text", { class: "register_detail_content-c-step-status" }, "正在检测人脸..."),
              createCommentVNode(' <image style="width: 100px; height: 100px" :src="facePath"></image> '),
              createVNode(_component_alive_detect, {
                ref: "alive_detect",
                class: "register_detail_content-c-recognizeFace-alive_detect",
                cameratype: "black",
                onOnDetectFailure: $options.detectFailure,
                onOnDetectSuccess: $options.detectSuccess
              }, null, 8, ["onOnDetectFailure", "onOnDetectSuccess"])
            ])) : createCommentVNode("v-if", true),
            createCommentVNode(" 识别指纹 "),
            $data.biosignatureStep === 1 ? (openBlock(), createElementBlock("scroller", {
              key: 1,
              class: "register_detail_content-c-improveInfo-step1"
            }, [
              createElementVNode("u-text", { class: "register_detail_content-c-step-status" }, "请按压指纹..."),
              createCommentVNode(' <image style="width: 100px; height: 100px" :src="gettedFingerpath"></image> '),
              createElementVNode("view", { class: "register_detail_content-c-improveInfo-step1-fingerprint" }, [
                !$data.gettedFingerpath ? (openBlock(), createElementBlock("u-image", {
                  key: 0,
                  class: "register_detail_content-c-improveInfo-step1-fingerprint_content",
                  src: _imports_1
                })) : createCommentVNode("v-if", true),
                createVNode(_component_finger_print, {
                  ref: "fingerprint",
                  class: "register_detail_content-c-improveInfo-step1-fingerprint_fp",
                  onFingerprintFinish: $options.fingerprintFinish
                }, null, 8, ["onFingerprintFinish"])
              ])
            ])) : createCommentVNode("v-if", true),
            createCommentVNode(" 识别声纹 "),
            $data.biosignatureStep === 2 ? (openBlock(), createElementBlock("scroller", {
              key: 2,
              class: "register_detail_content-c-improveInfo-step2"
            }, [
              createElementVNode("u-image", {
                class: "register_detail_content-c-improveInfo-step2-audio",
                src: _imports_2,
                onClick: _cache[2] || (_cache[2] = (...args) => $options.startOrStopRecording && $options.startOrStopRecording(...args))
              }),
              createElementVNode(
                "u-text",
                { class: "register_detail_content-c-improveInfo-step2-audio register_detail_content-c-improveInfo-step2-audio_status" },
                toDisplayString($data.recording ? "正在录音..." : ""),
                1
                /* TEXT */
              ),
              createElementVNode(
                "u-text",
                { class: "register_detail_content-c-improveInfo-step2-tint" },
                toDisplayString($data.recording ? "请点击录制按钮结束录制" : "请点击录制按钮，贴近麦克风开始录制"),
                1
                /* TEXT */
              ),
              createElementVNode("view", { class: "register_detail_content-c-improveInfo-step2-sample" }, [
                createElementVNode("u-text", { class: "register_detail_content-c-improveInfo-step2-tipb" }, "您可以朗读下面这段文字："),
                createElementVNode("u-text", { class: "register_detail_content-c-improveInfo-step2-tip" }, "我是***司法所的矫正对象***，近期我都有认真反思自己所犯的罪行，并充分认识到罪行的严重性，以后绝不再犯，我服从矫正机构的管理，接受司法机关的监督，我会按时参加矫正机构组织的教育学习、社区服务活动，主动签到上报位置，汇报思想、汇报个人活动情况，我服从矫正机构的安排，积极进取，力争早日成为一个合格的公民。汇报人：***")
              ])
            ])) : createCommentVNode("v-if", true),
            createCommentVNode(' <image style="height: 200; width: 200; background: red" :src="facePath"></image> ')
          ])) : createCommentVNode("v-if", true),
          $options.currentPath === "uploadDoc" ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: "register_detail_content-c-uploadDoc"
          }, [
            createElementVNode("scroller", { class: "register_detail_content-c-uploadDoc-left" }, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($data.writObjects, (writ, i) => {
                  return openBlock(), createElementBlock("view", {
                    class: normalizeClass(["register_detail_content-c-uploadDoc-left-writ", { "register_detail_content-c-uploadDoc-left-writselected": $data.writIndex === i }]),
                    key: i,
                    onClick: ($event) => $options.writSelected(i)
                  }, [
                    createElementVNode(
                      "u-text",
                      {
                        class: normalizeClass(["register_detail_content-c-uploadDoc-left-writ-text", { "register_detail_content-c-uploadDoc-left-writselected-text": $data.writIndex === i }])
                      },
                      toDisplayString(writ.name),
                      3
                      /* TEXT, CLASS */
                    )
                  ], 10, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            createElementVNode("view", { class: "register_detail_content-c-uploadDoc-right" }, [
              createElementVNode("u-image", {
                class: "register_detail_content-c-uploadDoc-right-add",
                src: $options.currentWritObj.done ? "../../static/imgs/filedone.png" : "../../static/imgs/add.png",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.chooseFile && $options.chooseFile(...args))
              }, null, 8, ["src"])
            ])
          ])) : createCommentVNode("v-if", true)
        ])
      ])
    ])
  ]);
}
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/register/detail.nvue"]]);
export {
  detail as default
};
