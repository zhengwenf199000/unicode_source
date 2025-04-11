<template>
	<view class="content print-content" @click="capture" @touchmove="capture">
		<content-bg></content-bg>
		<view class="content-nav">
			<image class="content-nav-home" src="@/static/imgs/Home.png" mode="widthFix" @click="homeClick"></image>
		</view>

		<view class="content-c">
			<view v-if="type === 'talk'" class="print-tables">
				
				<!-- <image style="width: 100%;" mode="widthFix" :src="picPath"></image> -->
				<!-- <view class="a4_size_px">
					<rich-text :nodes="nodes"></rich-text>
				</view> -->
				<!-- <iframe :src="filePath" frameborder="0"></iframe> -->
				<view class="print-tables_table">
					<view class="a4_size_px">
						<text class="a4_title">{{ title }}</text>
						<view class="a4_content">
							<view class="a4_row">
								<text style="width: 50%;">时间<text class="a4_underline_3"></text>年<text class="a4_underline_6"></text>月<text class="a4_underline_6"></text>日</text>
								<text>地点<text class="a4_underline_1"></text></text>
							</view>
							<view class="a4_row">
								<text>谈话人<text class="a4_underline_2"></text></text>
								<text>工作单位<text class="a4_underline_0"></text></text>
							</view>
							<view class="a4_row">
								<text>社区矫正对象姓名<text class="a4_underline_2">{{ name }}</text></text>
								<text style="width: 20%;">性别<text class="a4_underline_6">{{ sex }}</text></text>
								<text>出生日期<text class="a4_underline_1">{{ birthday }}</text></text>
							</view>
							<view class="a4_row">
								<text>居住地址:<text class="a4_underline_full">{{ gdjzd }}</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:我们是<text class="a4_underline_2"></text>社区矫正机构工作人员，依法与你谈话，向你了解相关情况，告知你在社区矫正期间应遵守的有关规定。现向你宣读<text class="a4_bold">《社区矫正对象告知书》</text>中的有关规定，你对应当遵守的各项规定是否清楚？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<!-- 

							<text class="a4_underline_3"></text>年<text class="a4_underline_6"></text>月<text class="a4_underline_6"></text>日

							 -->
							<view class="a4_column">
								<text class="a4_indent">
									问:你因犯
									<text class="a4_underline_0"></text>罪于
									<text class="a4_underline_3"></text>年
									<text class="a4_underline_6"></text>月
									<text class="a4_underline_6"></text>日被
									<text class="a4_underline_0"></text>人民法院判处有期徒刑(拘役、管制)
									<text class="a4_underline_3"></text>，缓刑
									<text class="a4_underline_1"></text>，依据
									<text class="a4_underline_0"></text>人民法院
									<text class="a4_underline_0"></text>号□刑事判决书 □刑事裁定书 □暂予监外执行决定书， □管制 □缓刑 □假释 □暂予监外执行期间，依法对你实行社区矫正，矫正期限自
									<text class="a4_underline_3"></text>年
									<text class="a4_underline_6"></text>月
									<text class="a4_underline_6"></text>日至
									<text class="a4_underline_3"></text>年
									<text class="a4_underline_6"></text>月
									<text class="a4_underline_6"></text>日，社区矫正期间，你由
									<text class="a4_underline_1"></text>司法局
									<text class="a4_underline_1"></text>司法所实施矫正，自今日起，三日内到该司法所报到，逾期不报到将承担相应的法律责任，是否清楚?
								</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:你在社区矫正期间是否能自觉遵守法律法规，服从社区矫正机构的监督管理和教育帮助?</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:你在社区矫正期间是否能定期向司法所报告遵纪守法、接受监督管理、参加教育学习、社区服务和社会活动的情况？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:发生居所变化、工作变动、家庭重大变故以及接触对其矫正产生不利影响人员的，是否能及时向司法所报告?</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:你在社区矫正期间，未经批准不得离开居住地，因就医、就学、参与诉讼、处理家庭或者工作重要事务等原因，确需离开所居住地的，在七日以内的，应当报经司法所批准；超过七日的，应当由司法所签署意见后报经社区矫正机构批准。获准后方可外出。返回居住地时，应当立即向司法所报告。社区矫正对象离开所居住市、县不得超过一个月。在矫正期间，你是不能够出境的(含港澳台地区)。你是否清楚？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<text class="a4_foot">社区矫正对象签名(捺印):</text>
						</view>
					</view>
					<view class="a4_size_px">
						<view class="a4_content a4_margin_top">
							<view class="a4_column">
								<text class="a4_indent">问:你在社区矫正期间，未经批准不得变更居住地。因居所变化确需变更居住地的，应当提前一个月提出书面申请，由司法所签署意见后报经县级司法行政机关审批。你是否清楚？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:你在社区矫正期间，我们将对你进行分级管理。你应当按照管理等级报到，积极参加社区矫正机构、司法所组织的教育学习、公益活动，目的是增强你的法制观念、道德素质和悔罪自新意识，培养你的社会责任感、集体观念和纪律意识。你是否清楚？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:社区矫正对象具有下列情形之一的，执行地县级社区矫正机构应当给予训诫:(一)不按规定时间报到或者接受社区矫正期间脱离监管，未超过十日的；(二)违反关于报告、会客、外出、迁居等规定，情节轻微的；(三)不按规定参加教育学习等活动，经教育仍不改正的；(四)其他违反监督管理规定，情节轻微的。你是否清楚？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:社区矫正对象具有下列情形之一的，社区矫正机构应当给予警告:(一)违反人民法院禁止令，情节轻微的；(二)不按规定时间报到或者接受社区矫正期间脱离监管，超过十日的；(三)违反关于报告、会客、外出、迁居等规定，情节较重的；(四)保外就医的社区矫正对象无正当理由不按时提交病情复查情况，经教育仍不改正的；(五)受到社区矫正机构两次训诫，仍不改正的；(六)其他违反监督管理规定，情节较重的。你是否清楚？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:社区矫正对象违反监督管理规定或者人民法院禁止令，依法应予治安管理处罚的，社区矫正机构应当及时提请同级公安机关依法给予处罚，你是否清楚？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:社区矫正对象在缓刑考验期内，有下列情形之一的，由社区矫正机构提出撤销缓刑建议:(一)违反禁止令，情节严重的；(二)无正当理由不按规定时间报到或者接受社区矫正期间脱离监管，超过一个月的；(三)因违反监督管理规定受到治安管理处罚，仍不改正的；(四)受到社区矫正机构两次警告，仍不改正的；(五)其他违反有关法律、行政法规和监督管理规定，情节严重的情形。你是否清楚？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<text class="a4_foot">社区矫正对象签名(捺印):</text>
						</view>
					</view>
					<view class="a4_size_px">
						<view class="a4_content a4_margin_top">
							<view class="a4_column">
								<text class="a4_indent">问:社区矫正对象在假释考验期内，有下列情形之一的，由社区矫正机构提出撤销假释建议:(一)无正当理由不按规定时间报到或者接受社区矫正期间脱离监管，超过一个月的；(二)受到社区矫正机构两次警告，仍不改正的；(三)其他违反有关法律、行政法规和监督管理规定，尚未构成新的犯罪的。你是否清楚？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:暂予监外执行的社区矫正对象有下列情形之一的，由社区矫正机构提出收监执行建议:(一)不符合暂予监外执行条件的；(二)未经社区矫正机构批准擅自离开居住的市、县，经警告拒不改正，或者拒不报告行踪，脱离监管的；(三)因违反监督管理规定受到治安管理处罚，仍不改正的；(四)受到社区矫正机构两次警告的；(五)保外就医期间不按规定提交病情复查情况，经警告拒不改正的；(六)暂予监外执行的情形消失后，刑期未满的；(七)保证人丧失保证条件或者因不履行义务被取消保证人资格，不能在规定期限内提出新的保证人的；(八)其他违反有关法律、行政法规和监督管理规定，情节严重的情形。你是否清楚？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:你作为一名社区矫正对象，是否明确自己的身份？能否认罪服法，积极改造，争取宽大？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:你目前的家庭经济情况和生活来源是否稳定？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:你目前有没有工作？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:在社区矫正期间有无其他困难或还需要说明的？</text>
								<text class="a4_indent">答:<text class="a4_underline_0"></text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:请你在接到通知后，携带身份证，由直系亲属和村居委员各一名陪同，到社区矫正机构(司法所)参加入矫宣告仪式。</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<view class="a4_column">
								<text class="a4_indent">问:以上回答是否属实？</text>
								<text class="a4_indent">答:<text class="a4_underline_5">是□</text><text class="a4_underline_5">否□</text></text>
							</view>
							<text class="a4_foot">社区矫正对象签名(捺印):</text>
						</view>		
					</view>
				</view>
			</view>
			<!-- report:对象告知书 -->
			<view v-else-if="type === 'report'" class="print-tables">
				<view class="print-tables_table">
					<view v-for="(id, i) of 3" :key="id" class="a4_size_px">
						<text class="a4_title">社区矫正对象告知书</text>
						<view class="a4_content a4_content_font14">
							<text><text class="a4_underline_3">{{ name }}</text>:</text>
							<text class="a4_indent a4_bold">
								你因
								<text class="a4_underline_1"></text>罪，被
								<text class="a4_underline_2"></text>人民法院(监狱管理局、公安局)判处(裁定、决定)
								<text class="a4_underline_3"></text>，在社区矫正期间应遵守以下规定:
							</text>
							<text class="a4_indent">1、依法接受社区矫正，服从监督管理。</text>
							<text class="a4_indent">2、自执行地社区矫正机构报到后三日内到指定司法所报到，按规定提供本人实名制手机号码。</text>
							<text class="a4_indent">3、定期到司法所报到，提交书面报告情况，按要求参加教育学习和公益活动。管理级别分严管和普管，自入矫之日起至第三个月月底为严管期。</text>
							<text class="a4_indent">4、离开执行地，应当报经社区矫正机构批准。<text class="a4_bold">(社区矫正对象外出的正当理由是指就医、就学、参与诉讼、处理家庭或者工作重要事务等)。</text></text>
							<text class="a4_indent">5、未经批准不得接触犯罪案件中被害人、控告人、举报人，不得接触同案犯等可能诱发再犯罪的人。</text>
							<text class="a4_indent">6、未经批准不得变更执行地，确需办理的，本人需提出书面申请，由司法所提请社区矫正机构审核、批准。在社区矫正期间不得出境(含港澳台地区)。</text>
							<text class="a4_indent">7、严格遵守人民法院禁止令。</text>
							<text class="a4_indent">8、暂予监外执行的社区矫正对象应当每个月报告本人身体情况，保外就医的，每三个月提交病情复查情况。</text>
							<text class="a4_indent a4_bold">9、违反法律法规或者监督管理规定的，将视情节依法给予训诫、警告、提请公安机关予以治安管理处罚，或者依法提请收监执行。社区矫正机构可以依法使用电子定位装置。</text>
							<text class="a4_indent a4_bold">本人已认真阅读以上内容，工作人员已将相关规定告知我，本人承诺严格遵守上述各项要求。</text>
						
							<view class="a4_sep a4_margin_top"></view>
							<text class="a4_align_right a4_margin_right">社区矫正对象签名(按手印):</text>
							<text class="a4_align_right a4_margin_right100">
								年<text class="a4_space"></text>月<text class="a4_space"></text>日
							</text>
							
							<text class="a4_indent a4_eg a4_margin_top20">(注:本告知书一式三份，一份交由社区矫正对象，一份由社区矫正机构存档，一份由社区矫正对象到司法所报到时交给司法所存档。)</text>

						</view>
					</view>
				</view>
			</view>
			
			
			<!-- notify:报到通知书 -->
			<view v-else-if="type === 'notify'" class="print-tables">
				<view class="print-tables_table">
					<view class="a4_size_px">
						<text class="a4_title">社区矫正对象报到通知书</text>
						<view class="a4_caption">
							<text class="a4_hidden">
								<text class="a4_underline_5"></text>字
								(<text class="a4_space"></text>)
								第<text class="a4_space"></text>号
							</text>
							<text>(存根)</text>
							<text>
								<text class="a4_underline_5"></text>字
								(<text class="a4_space"></text>)
								第<text class="a4_space"></text>号
							</text>
						</view>
						<view class="a4_content">
							<text>报到单位:<text class="a4_underline_0"></text>司法所</text>
							<view class="a4_row">
								<text>社区矫正对象:<text class="a4_underline_5">{{ name }}</text></text>
								<text>性别:<text class="a4_underline_7">{{ sex }}</text></text>
								<text>民族:<text class="a4_underline_4">{{ nation }}</text></text>
								<text>原政治面貌:<text class="a4_underline_3">{{ political_status }}</text>.</text>
							</view>
							<view class="a4_row">
								<text>身份证号码:<text class="a4_underline_1">{{ id_num }}</text></text>
								<text>学历:<text class="a4_underline_3">{{ edu_bg }}</text></text>
								<text>罪名:<text class="a4_underline_3">&nbsp;</text></text>
							</view>
							<view class="a4_row">
								<text>原判法院:<text class="a4_underline_0"></text></text>
								<text>原判刑期:<text class="a4_underline_0"></text></text>
							</view>
							<view class="a4_row">
								<text>矫正期限:<text class="a4_underline_6"></text>.自<text class="a4_underline_6"></text>年<text class="a4_underline_7"></text>月<text class="a4_underline_7"></text>日至<text class="a4_underline_6"></text>年<text class="a4_underline_7"></text>月<text class="a4_underline_7"></text>日</text>
								<text>报到时限:<text class="a4_underline_6"></text>日内</text>
							</view>
							<view class="a4_row">
								<text>家庭住址:<text class="a4_underline_0"></text></text>
								<text>有无护照和港澳通行证:<text class="a4_underline_2"></text></text>
							</view>
							<view class="a4_row">
								<text>社区矫正对象签名:<text class="a4_underline_2"></text></text>
								<text>电话:<text class="a4_underline_2"></text></text>
							</view>
							<text class="a4_align_right">年<text class="a4_space">月</text><text class="a4_space">日</text></text>
							
							<view class="a4_sep"></view>
						</view>
						<!-- 第二页 -->
						<text class="a4_title">社区矫正对象报到通知书</text>
						<view class="a4_caption">
							<text class="a4_hidden">
								<text class="a4_underline_5"></text>字
								(<text class="a4_space"></text>)
								第<text class="a4_space"></text>号
							</text>
							<text>(司法所留存)</text>
							<text>
								<text class="a4_underline_5"></text>字
								(<text class="a4_space"></text>)
								第<text class="a4_space"></text>号
							</text>
						</view>
						<view class="a4_content">
							<text><text class="a4_underline_0"></text>司法所</text>
							<text class="a4_indent">
								根据《山东省社区矫正实施细则》规定，
								<text class="a4_underline_3"></text>在
								<text class="a4_underline_6"></text>日内持相关法律文书到你所报到，接受社区矫正。
							</text>
							<text>
								矫正期限:自
								<text class="a4_underline_3"></text>年<text class="a4_underline_6"></text>月<text class="a4_underline_6"></text>日
								至
								<text class="a4_underline_3"></text>年<text class="a4_underline_6"></text>月<text class="a4_underline_6"></text>日
							</text>
							<text>
								社区矫正对象签名:
								<text class="a4_underline_3"></text>
							</text>
							<text class="a4_align_right">(社区矫正机构盖章)</text>
							<text class="a4_align_right">年<text class="a4_space">月</text><text class="a4_space">日</text></text>
							
							<view class="a4_sep"></view>
						</view>
						<!-- 第三章 -->
						<text class="a4_title">社区矫正对象报到通知书</text>
						<view class="a4_content">
							<text><text class="a4_underline_2"></text>社区矫正机构:</text>
							
							<text class="a4_indent">
								<text class="a4_underline_3"></text>
								于
								<text class="a4_underline_6"></text>年<text class="a4_underline_7"></text>月<text class="a4_underline_7"></text>日
								至
								<text class="a4_underline_6"></text>年<text class="a4_underline_7"></text>月<text class="a4_underline_7"></text>日
								持社区矫正相关法律文书到我所报到，接受社区矫正。已按规定提供实名制手机。
							</text>
							<text>
								接收人签名:
								<text class="a4_underline_3"></text>
							</text>
							<text class="a4_align_right"><text class="a4_underline_4"></text>司法所(公章)</text>						
						</view>
					</view>
				</view>
				
			</view>

			<view class="print-content-backbtns">
				<button class="print-content-backbtns-btn" type="primary" @click="h2c.create">打印</button>
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
						const shareContent = document.querySelector('.print-tables_table');
						const width = shareContent.scrollWidth
						const height = shareContent.scrollHeight
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
						// const pdfBase64 = pdf.output('dataurl');
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
		requestApi,
		upload,
		apis,
	} from '@/utils/http'
	import userInactiveMixin from '@/mixins/userInactiveMixin';
	import filePicker from '@/utils/filePicker';
	const PrintTablesShowMapper = {
		'talk': {
			htmlPath: '_www/static/data/talk.docx',
			docPath: '_www/static/data/talk.docx',
			picPath: '../../static/data/talk.png',
			title: '社区矫正对象首次谈话笔录'
		},
		'report': {
			docPath: '_www/static/data/report.docx',
			picPath: '../../static/data/report.png',
			title: '社区矫正对象报到通知书'
		},
		'notify': {
			docPath: '_www/static/data/notify.docx',
			picPath: '../../static/data/notify.png',
			title: '社区矫正对象告知书'
		},
	}
	const PrintTablesMapper = {
		talk: {
			'{{name}}': 'name',
			'{{sex}}': 'sex',
			'{{birthday}}': (info) => {
				if (!info) {
					return ''
				}
				return info.birthday.split(' ')[0]
			},
			'{{address}}': 'gdjzd'
		},
		report: {
			'{{name}}': 'name',
			'{{sex}}': 'sex',
			'{{nt}}': 'nation',
			'{{zzmm}}': 'political_status',
			'{{sfzhm}}': 'id_num',
			'{{xueli}}': 'edu_bg'
		},
		notify: {
			'{{name}}': 'name',
		}
	}

	export default {
		mixins: [ userInactiveMixin ],
		data() {
			return {
				show: true,
				type: 'talk',
				idnum: '',
				info: null,
				picPath: '',
				nodes: '',
				filePath: '',
				// name: '测试人员',
				// gdjzd: '山东省济南市李中区非紧急覅大数据街道189号',
				// birthday: '1999-09-09',
				// sex: '男',
				// nation: '汉莎克族',
				// political_status: '中共党员',
				// id_num: '420984199008144419',
				// edu_bg: '大学本科',
				name: '',
				gdjzd: '',
				birthday: '',
				sex: '',
				nation: '',
				political_status: '',
				id_num: '',
				edu_bg: ''
			}
		},
		computed: {
			htmlPath() {
				return `_www/static/data/${ this.type }.html`
			},
			title() {
				return PrintTablesShowMapper[this.type].title
			}
		},
		watch: {
			info(newV) {
				if (newV) {
					const {
						criminalInfo
					} = newV
					if (criminalInfo) {
						this.name = criminalInfo.name
						this.gdjzd = criminalInfo.gdjzd
						this.sex = criminalInfo.sex
						this.nation = criminalInfo.nation
						this.political_status = criminalInfo.political_status
						this.id_num = criminalInfo.id_num
						this.edu_bg = criminalInfo.edu_bg
						this.birthday = criminalInfo.birthday.split(' ')[0]
					}
				}
			}
		},
		onLoad(options) {
			this.type = options.type;
			this.idnum = options.idnum
			this.picPath = PrintTablesShowMapper[this.type].picPath
			this.request()
		},
		onReady() {
			// this.printClick()
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
					this.fillDataToDoc()
				}).catch(err => {
					uni.showToast({
						title: err,
						icon: 'none'
					})
				})
			},
			replaceKeysWithData(data) {
				if (!data) return
				const keyvk = PrintTablesMapper[this.type]
				let output = data
				console.log(this.info);
				const { criminalInfo } = this.info
				Object.keys(keyvk).forEach((key, i) => {
					const vKey = keyvk[key]
					console.log(typeof vKey, key);
					output = output.replace(key, typeof vKey === 'function' ? vKey(criminalInfo) : criminalInfo[vKey])
				})
				return output
			},
			fillDataToDoc() {
				console.log('fillDataToDoc', this.htmlPath);
				// #ifdef APP-PLUS
				plus.io.resolveLocalFileSystemURL(this.htmlPath, (dirEntry) => {
					dirEntry.file((file) => {
						const reader = new plus.io.FileReader()
						reader.onloadend = (e) => {
							console.log(e);
							const result = e.target.result
							// const output = result.replace('{{name}}', '测试姓名')
							const output = this.replaceKeysWithData(result)
							// console.log(output);
							// uni.showLoading({
							// 	title: '正在生成文件...'
							// })
							filePicker.writerToFile(output).then(path => {
								// uni.hideLoading()
								this.filePath = path
								
								// uni.openDocument({
								// 	filePath: path
								// })
							}).catch((err) => {
								// uni.showToast({
								// 	title: err.message,
								// 	icon: 'none'
								// })
							})
						}
						reader.readAsText(file)
					})
				}, (err) => {
					console.log(err);
				});
				// #endif
			},
			renderFinish: async function({ base64 }) {
				this.showLoading({
					title: '正在打印...'
				})
				// console.log(base64);
				// this.filePath = base64
				// this.printClick()
				filePicker.writerToFile(base64, 'pdf', true).then(path => {
					uni.hideLoading()
					this.filePath = path
					this.printClick()
				}).catch((err) => {
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
			showLoading() {
				uni.showLoading({
					title: '正在打印...'
				})
			},
			hideLoading() {
				uni.hideLoading()
			},
			printClick() {
				// #ifdef APP-PLUS
				uni.openDocument({
					filePath: this.filePath
				})
				// #endif
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
			}
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
		flex-direction: column;
	}

	.print-content {
		width: 100vw;
		height: 100vh;
	}

	.print-tables {
		display: block;
		width: 100%;
		flex: 1;
		// align-items: center;
		margin-top: 10px;
		align-self: center;
		background-color: #fff;
		border-radius: 8px;
		overflow: scroll;

		.print-tables_title {
			text-align: center;
			color: #333;
			font-size: 20px;
			font-weight: bold;
		}
	}
	
	.print-tables_table {
		width: 595px;
		margin: 0 auto;
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

	.a4_size_px {
		box-sizing: border-box;
		padding: 20px 30px;
		width: 595px;
		height: 842px;
		// background-color: antiquewhite;
		
		
		text {
			// display: inline-block;
		}
	}

	.a4_title {
		color: #000;
		font-size: 16px;
		font-weight: bold;
		text-align: center;
	}
	
	.a4_caption {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		text {
			// line-height: 30px;
			font-size: 12px;
			color: #333;
			min-height: 18px;
		}
	}
	
	.a4_content {
		margin-top: 10px;
		text {
			// line-height: 30px;
			font-size: 12px;
			color: #333;
			min-height: 18px;
		}
	}
	
	.a4_content_font14 {
		text {
			font-size: 14px;
		}
	}
	
	.a4_hidden {
		opacity: 0;
	}
	
	.a4_row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.a4_column {
		display: flex;
		flex-direction: column;
		// justify-content: space-between;
	}
	
	.a4_sep {
		margin: 20px 0;
		height: 0.5px;
		background-color: #666;
	}
	
	.a4_space {
		margin-left: 20px;
	}
	
	.a4_align_right {
		text-align: right;
	}
	
	.a4_margin_top {
		margin-top: 50px;
	}
	
	.a4_margin_top20 {
		margin-top: 20px;
	}
	
	.a4_margin_right {
		margin-right: 50px;
	}
	
	.a4_margin_right100 {
		margin-right: 100px;
	}
	
	.a4_indent {
		text-indent: 2em;
	}
	
	.a4_eg {
		font-size: 12px !important;
	}
	
	.a4_foot {
		margin-right: 100px;
		text-align: right;
		font-size: 16px !important;
		font-weight: bold;
	}
	
	.a4_bold {
		// display: inline;
		font-weight: bold;
		color: #000;
	}
	
	.a4_underline {
		height: 18px;
		border-bottom: #333 1px solid;
		text-align: center;
		display: inline-block;
		vertical-align: middle;
	}
	
	.a4_underline_full {
		@extend .a4_underline;
		width: 400px;
		text-align: left;
	}
	
	.a4_underline_0 {
		@extend .a4_underline;
		width: 200px;
	}
	
	.a4_underline_1 {
		@extend .a4_underline;
		width: 140px;
	}
	
	.a4_underline_2 {
		@extend .a4_underline;
		width: 120px;
	}
	
	.a4_underline_3 {
		@extend .a4_underline;
		width: 100px;
	}
	
	.a4_underline_4 {
		@extend .a4_underline;
		width: 80px;
	}
	
	.a4_underline_5 {
		@extend .a4_underline;
		width: 60px;
		text-align: left;
	}
	
	.a4_underline_6 {
		@extend .a4_underline;
		width: 40px;
	}
	
	.a4_underline_7 {
		@extend .a4_underline;
		width: 20px;
	}
	
</style>
