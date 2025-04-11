import {
	apis
} from '@/utils/http';
import {
	signTableMapper, 
	signDetailMapper, 
	studyTableMapper, 
	studyDetailMapper,
	warningTableMapper,
	warningDetailMapper,
	adviseTableMapper,
	adviseDetailMapper,
	evaluatingTableMapper,
	evaluatingDetailMapper,
	leaveTableMapper,
	leaveDetailMapper
} from '@/utils/tableMappers';

export const queryTypeMapper = {
	sign: {
		table: signTableMapper,
		detail: signDetailMapper,
		title: '签到记录',
		api: apis.recordSign
	},
	study: {
		table: studyTableMapper,
		detail: studyDetailMapper,
		title: '学习记录',
		api: apis.recordStudy
	},
	warning: {
		table: warningTableMapper,
		detail: warningDetailMapper,
		title: '警告记录',
		api: apis.recordWarning
	},
	advise: {
		table: adviseTableMapper,
		detail: adviseDetailMapper,
		title: '训诫记录',
		api: apis.recordAdvise
	},
	evaluating: {
		table: evaluatingTableMapper,
		detail: evaluatingDetailMapper,
		title: '心理测评报告',
		api: apis.recordEvaluating
	},
	leave: {
		table: leaveTableMapper,
		detail: leaveDetailMapper,
		title: '外出记录',
		api: apis.getLeaveList,
		detailPage: '/pages/leave/detail'
	}
}
