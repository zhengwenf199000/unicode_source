const benefitTableMapper = [
  {
    // 用于header显示
    name: "活动名称",
    // 用于body取值
    valueKey: "title",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "活动地点",
    // 用于body取值
    valueKey: "laborAddress",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "开始时间",
    // 用于body取值
    valueKey: "startDate",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "结束时间",
    // 用于body取值
    valueKey: "endDate",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "状态",
    // 用于body取值
    valueKey: "",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "未开始",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "查看",
    // 用于body取值
    valueKey: "",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: true
  }
];
const educationTableMapper = [
  {
    // 用于header显示
    name: "活动名称",
    // 用于body取值
    valueKey: "title",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "活动地点",
    // 用于body取值
    valueKey: "studyAddress",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "开始时间",
    // 用于body取值
    valueKey: "startDate",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "结束时间",
    // 用于body取值
    valueKey: "endDate",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "状态",
    // 用于body取值
    valueKey: "",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "未开始",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "查看",
    // 用于body取值
    valueKey: "",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: true
  }
];
const benefitDetailMapper = [
  [
    { name: "活动名称", valueKey: "title" },
    { name: "状态", fixedValue: "未开始" }
  ],
  [
    { name: "活动类型", fixedValue: "公益活动" },
    { name: "活动日期", fixedValue: "-" }
  ],
  [
    { name: "活动地点", valueKey: "laborAddress" },
    { name: "开始时间", valueKey: "startDate" }
  ],
  [
    { name: "参与人数", fixedValue: "-" },
    { name: "结束时间", valueKey: "endDate" }
  ],
  [
    { name: "允许提前签到", fixedValue: "-" },
    { name: "允许延迟签退", fixedValue: "-" }
  ],
  [
    { name: "活动内容", valueKey: "laborContent" }
  ]
];
const educationDetailMapper = [
  [
    { name: "教育名称", valueKey: "title" },
    { name: "状态", fixedValue: "未开始" }
  ],
  [
    { name: "教育类型", fixedValue: "教育学习" },
    { name: "活动日期", fixedValue: "-" }
  ],
  [
    { name: "教育地点", valueKey: "studyAddress" },
    { name: "开始时间", valueKey: "startDate" }
  ],
  [
    { name: "参与人数", fixedValue: "-" },
    { name: "结束时间", valueKey: "endDate" }
  ],
  [
    { name: "允许提前签到", fixedValue: "-" },
    { name: "允许延迟签退", fixedValue: "-" }
  ],
  [
    { name: "教育内容", valueKey: "studyContent" }
  ]
];
const applyChangeTableMapper = [
  {
    // 用于header显示
    name: "矫正对象",
    // 用于body取值
    valueKey: "criminalName",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "申请时间",
    // 用于body取值
    valueKey: "time",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "迁入地",
    // 用于body取值
    valueKey: "address",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "类型",
    // 用于body取值
    valueKey: "type",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "状态",
    // 用于body取值
    valueKey: "lczt",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: false
  },
  {
    // 用于header显示
    name: "查看",
    // 用于body取值
    valueKey: "",
    // 固定的值，如果有固定的值就不通过valueKey取值
    fixedValue: "",
    // 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
    isView: true
  }
];
const applyChangeDetailMapper = [
  [
    { name: "矫正对象", valueKey: "criminalName" },
    { name: "状态", valueKey: "lczt" }
  ],
  [
    { name: "类型", valueKey: "type" },
    { name: "申请时间", valueKey: "time" }
  ],
  [
    { name: "迁入地", valueKey: "address" },
    { name: "编号", valueKey: "id" }
  ],
  [
    { name: "变动理由", valueKey: "reason" }
  ]
];
const leaveTableMapper = [
  {
    name: "外出类型",
    valueKey: "status"
  },
  {
    name: "目的地",
    valueKey: "address"
  },
  {
    name: "外出时间",
    valueKey: "time"
  },
  {
    name: "流程状态",
    valueKey: "processInfo"
  },
  {
    name: "申请时间",
    valueKey: "applyTime"
  },
  {
    name: "查看",
    isView: true
  }
];
const leaveDetailMapper = [
  [
    { name: "申请日期", valueKey: "applyTime" },
    { name: "状态", valueKey: "status" }
  ],
  [
    { name: "目的地", valueKey: "outAddressDetail", normal: true }
  ],
  [
    { name: "活动区域", valueKey: "city" },
    { name: "外出时间", valueKey: "starTime" }
  ],
  [
    { name: "开始日期", valueKey: "starTime" },
    { name: "结束日期", valueKey: "endTime" }
  ],
  [
    { name: "外出理由", valueKey: "reason", normal: true }
  ]
  // [
  // 	{ name: '外出联系人', fixedValue: '-' },
  // 	{ name: '关系', fixedValue: '-' }
  // ],
  // [
  // 	{ name: '联系方式', fixedValue: '-' },
  // 	{ name: '工作单位', fixedValue: '-' }
  // ],
  // [
  // 	{ name: '家庭住址', fixedValue: '-' },
  // ]
];
const fileDetailMapper = [
  [
    { name: "姓名", valueKey: "name" },
    { name: "矫正单位", valueKey: "dept_id" }
  ],
  [
    { name: "身份证号", valueKey: "id_num" },
    { name: "人员编号", valueKey: "rybh" }
  ],
  [
    { name: "手机号码", valueKey: "phone_no" },
    // { name: '监管级别', valueKey: 'jgjb' },
    { name: "人员状态", valueKey: "status" }
  ],
  [
    { name: "教育程度", valueKey: "edu_bg" },
    { name: "矫正开始", valueKey: "outside_start" }
  ],
  [
    { name: "婚姻状况", valueKey: "affiance" },
    { name: "矫正结束", valueKey: "outside_end" }
  ],
  [
    { name: "矫正期限", valueKey: "outside_limit" },
    { name: "录入时间", valueKey: "insert_date" }
  ],
  [
    { name: "健康状况", valueKey: "health" }
  ]
];
const _signHander = function(mapper) {
  return function(val) {
    return mapper[val];
  };
};
const _signStatusHander = _signHander({ 1: "成功", 2: "失败", 3: "虚拟定位", 4: "未打卡" });
const _signTypeHander = _signHander({ 1: "教育学习", 2: "公益活动", 4: "人机分离", 5: "签到", 6: "在线学习" });
const _signRecTypeHander = _signHander({ 1: "人证比对", 2: "人脸比对", 3: "终端比对", 4: "依图比对" });
const signTableMapper = [
  {
    name: "考勤状态",
    valueKey: "TYPE2",
    valueHandler: _signStatusHander
  },
  {
    name: "考勤类型",
    valueKey: "KQFLAG",
    valueHandler: _signTypeHander
  },
  {
    name: "签到单位",
    valueKey: "DEPTNAME"
  },
  {
    name: "识别类型",
    valueKey: "RECTYPE",
    valueHandler: _signRecTypeHander
  },
  {
    name: "签到时间",
    valueKey: "ATTTIME"
  },
  {
    name: "操作",
    isView: true
  }
];
const signDetailMapper = [
  [
    { name: "签到人", valueKey: "NAME" },
    { name: "身份证号", valueKey: "ID_NUM" }
  ],
  [
    { name: "考勤状态", valueKey: "TYPE2", valueHandler: _signStatusHander },
    { name: "考勤类型", valueKey: "KQFLAG", valueHandler: _signTypeHander }
  ],
  [
    { name: "签到单位", valueKey: "DEPTNAME" },
    { name: "识别类型", valueKey: "RECTYPE", valueHandler: _signRecTypeHander }
  ],
  [
    { name: "签到时间", valueKey: "ATTTIME", normal: true }
  ],
  [
    { name: "签到照片", valueKey: "PICPATH", isImage: true }
  ]
];
const studyTableMapper = [
  {
    name: "学习日期",
    valueKey: "STUDYMONTH"
  },
  {
    name: "学习时间",
    valueKey: "STUDYTIME"
  },
  {
    name: "学习内容",
    valueKey: "STUDYTITLE"
  },
  {
    name: "学习时长（h）",
    valueKey: "ONLINETIME"
  },
  {
    name: "学习地点",
    valueKey: "DEPTNAME"
  },
  {
    name: "操作",
    isView: true
  }
];
const studyDetailMapper = [
  [
    { name: "学习对象", valueKey: "CRIMINALNAME" },
    { name: "记录日期", valueKey: "INSERTDATE" }
  ],
  [
    { name: "学习日期", valueKey: "STUDYMONTH" },
    { name: "学习时间", valueKey: "STUDYTIME" }
  ],
  [
    { name: "学习地点", valueKey: "DEPTNAME" },
    { name: "学习时长", valueKey: "ONLINETIME" }
  ],
  [
    { name: "学习内容", valueKey: "STUDYTITLE" }
  ]
];
const _sexValueHandler = _signHander({ 1: "男", 2: "女" });
const warningTableMapper = [
  {
    name: "矫正对象",
    valueKey: "criminalName"
  },
  {
    name: "性别",
    valueKey: "sex",
    valueHandler: _sexValueHandler
  },
  {
    name: "警告依据",
    valueKey: "fact"
  },
  {
    name: "流程",
    valueKey: "orderName"
  },
  {
    name: "警告时间",
    valueKey: "insertDate"
  },
  {
    name: "操作",
    isView: true
  }
];
const warningDetailMapper = [
  [
    { name: "矫正对象", valueKey: "criminalName" },
    { name: "性别", valueKey: "sex", valueHandler: _sexValueHandler }
  ],
  [
    { name: "警告时间", valueKey: "insertDate" },
    { name: "流程节点", valueKey: "orderName" }
  ],
  [
    { name: "警告依据", valueKey: "fact" }
  ]
];
const adviseTableMapper = [
  {
    name: "矫正对象",
    valueKey: "CRIMINALNAME"
  },
  {
    name: "性别",
    valueKey: "SEX",
    valueHandler: _sexValueHandler
  },
  {
    name: "训诫理由",
    valueKey: "TQLY"
  },
  {
    name: "流程节点",
    valueKey: "ORDERNAME"
  },
  {
    name: "训诫时间",
    valueKey: "INSERTDATE"
  },
  {
    name: "操作",
    isView: true
  }
];
const adviseDetailMapper = [
  [
    { name: "矫正对象", valueKey: "CRIMINALNAME" },
    { name: "性别", valueKey: "SEX", valueHandler: _sexValueHandler }
  ],
  [
    { name: "训诫时间", valueKey: "INSERTDATE" },
    { name: "流程节点", valueKey: "ORDERNAME" }
  ],
  [
    { name: "训诫理由", valueKey: "TQLY" }
  ]
];
const evaluatingTableMapper = [
  {
    name: "矫正对象",
    valueKey: "CRIMINALNAME"
  },
  {
    name: "所属机构",
    valueKey: "DEPTNAME"
  },
  {
    name: "报告时间",
    valueKey: "INSERTDATE"
  },
  {
    name: "基础心理",
    valueKey: "EXAMGUNAME"
  },
  {
    name: "结果",
    valueKey: "RISKEXPLAIN"
  },
  {
    name: "操作",
    isView: true
  }
];
const evaluatingDetailMapper = [
  [
    { name: "矫正对象", valueKey: "CRIMINALNAME" },
    { name: "所属机构", valueKey: "DEPTNAME" }
  ],
  [
    { name: "报告时间", valueKey: "INSERTDATE" },
    { name: "基础心理", valueKey: "EXAMGUNAME" }
  ],
  [
    { name: "结果", valueKey: "RISKEXPLAIN" }
  ]
];
export {
  benefitDetailMapper as a,
  benefitTableMapper as b,
  applyChangeTableMapper as c,
  applyChangeDetailMapper as d,
  leaveDetailMapper as e,
  fileDetailMapper as f,
  educationTableMapper as g,
  educationDetailMapper as h,
  signDetailMapper as i,
  studyTableMapper as j,
  studyDetailMapper as k,
  leaveTableMapper as l,
  warningDetailMapper as m,
  adviseTableMapper as n,
  adviseDetailMapper as o,
  evaluatingTableMapper as p,
  evaluatingDetailMapper as q,
  signTableMapper as s,
  warningTableMapper as w
};
