(function(rifCoreElements){
	"use strict";

	rifCoreElements.a = function a(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("a",[
			'href','download','media','name','id','target','role','title','style'
		],elementParams);
	}
	rifCoreElements.form = function form(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("form",elementParams,[
			'accept','accept-charset','action','autocomplete',
			'enctype','method','name','novalidate','target'
		]);
	}
	rifCoreElements.h1 = function h1(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("h1",elementParams);
	}
	rifCoreElements.h2 = function h2(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("h2",elementParams);
	}
	rifCoreElements.h3 = function h3(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("h3",elementParams);
	}
	rifCoreElements.h4 = function h4(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("h4",elementParams);
	}
	rifCoreElements.h5 = function h5(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("h5",elementParams);
	}
	rifCoreElements.h6 = function h6(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("h6",elementParams);
	}
	rifCoreElements.pre = function pre(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("pre",elementParams);
	}
	rifCoreElements.hr = function hr(){
		this.content = new element("hr");
	}
	rifCoreElements.span = function span(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("span",elementParams);
	}
	rifCoreElements.section = function section(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("section",elementParams);
	}
	rifCoreElements.progress = function progress(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("progress",elementParams,['max','value']);
	}
	rifCoreElements.iframe = function iframe(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("iframe",elementParams,[
			'align','frameborder','height','longdesc',
			'marginheight','marginwidth','name','sandbox',
			'scrolling','seamless','src','srcdoc','width'
		]);
	}
	rifCoreElements.header = function header(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("header",elementParams);
	}
	rifCoreElements.footer = function footer(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("footer",elementParams);
	}
	rifCoreElements.fieldset = function fieldset(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("fieldset",elementParams);
	}
	rifCoreElements.code = function code(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("code",elementParams);
	}
	rifCoreElements.canvas = function canvas(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("canvas",elementParams,['height','width']);
	}
	rifCoreElements.br = function br(){
		this.content = new element("br");
	}
	rifCoreElements.strong = function strong(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("strong",elementParams);
	}
	rifCoreElements.caption = function caption(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("caption",elementParams);
	}
	rifCoreElements.mark = function mark(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("mark",elementParams);
	}
	rifCoreElements.address = function address(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("address",elementParams);
	}
	rifCoreElements.article = function article(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("article",elementParams);
	}
	rifCoreElements.aside = function aside(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("aside",elementParams);
	}


	rifCoreElements.tbody = function tbody(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("tbody",elementParams);
	}

	rifCoreElements.thead = function thead(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("thead",elementParams);
	}

	rifCoreElements.tfoot = function tfoot(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("tfoot",elementParams);
	}

	rifCoreElements.td = function td(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("td",elementParams,[
			'colspan','header_id','rowspan'
		]);
	}

	rifCoreElements.th = function th(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("td",elementParams,[
			'abbr','colspan','headers','rowspan','scope','sorted'
		]);
	}

	rifCoreElements.title = function title(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("title",elementParams);
	}

	rifCoreElements.tr = function tr(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("tr",elementParams);
	}

	rifCoreElements.label = function label(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("label",elementParams,[
			'for','form'
		]);
	}
	rifCoreElements.table = function table(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("table",elementParams,[
			'sortable'
		]);
	}
	rifCoreElements.ul = function ul(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("ul",elementParams);
	}
	rifCoreElements.ol = function ol(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("ol",elementParams,['reversed','start','type']);
	}
	rifCoreElements.main = function main(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("main",elementParams);
	}
	rifCoreElements.li = function li(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("li",elementParams);
	}
	rifCoreElements.video = function video(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("audio",elementParams,[
			'autoplay','controls','height','loop','muted','poster','preload','src','width'
		]);
	}
	rifCoreElements.audio = function audio(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("audio",elementParams,[
			'autoplay','controls','loop','muted','preload','src'
		]);
	}
	rifCoreElements.img = function img(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("img",elementParams,[
			'align','alt','border','height','hspace','src','width'
		]);
	}
	rifCoreElements.input = function input(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("input",elementParams,[
			'accept','align','alt','autocomplete','autofocus',
			'checked','disabled','form','formAction','formenctype',
			'formmethod','formnovalidate','formtarget','height','list',
			'max','maxlength','min','multiple','name','id','pattern','placeholder',
			'readonly','required','size','src','type','value','width','title','style'
		]);
	}
	rifCoreElements.textarea = function textarea(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("textarea",elementParams,[
			'autofocus','cols','disabled','form','maxlength','placeholder',
			'readonly','required','rows','wrap'
		]);
	}
	rifCoreElements.select = function select(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("select",elementParams,[
			'autofocus','disabled','form','multiple','name','required','size'
		]);
	}
	rifCoreElements.option = function option(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("option",elementParams,[
			'value','selected','disabled','label'
		]);
	}
	rifCoreElements.p = function p(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("p",elementParams);
	}
	rifCoreElements.div = function div(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("div",elementParams);
	}
	rifCoreElements.nav = function nav(params){
		this.content = new element("nav",[
			'class','hidden','id','style','title','role'
		],elementParams);
	}
	rifCoreElements.button = function button(params){
		var elementParams = {};
		if(typeof params === "string"){
			elementParams.child = params;
		}else{
			elementParams = params;
		}
		this.content = new element("button",elementParams);
	}
}(this));