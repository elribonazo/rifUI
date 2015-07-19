(function(riframework){
	"use strict";

	riframework.element = function element(name,params,attributesList){
		var attributes = ['class','hidden','id','style','title','role'];
		if(Array.isArray(attributesList)){
			attributes.concat(attributesList);
		}
		this.content = [];
		this.content.push('<' + name);
		if(Array.isArray(attributes) && typeof params === "object"){
			for(var i = 0; i < attributes.length; i++){
				if(params.hasOwnProperty(attributes[i])){
					this.content.push(new attribute(attributes[i],params[attributes[i]]));
				}
			}
		}
		if(params !== undefined && typeof params === "object" && params.data !== undefined && Array.isArray(params.data)){
			for(var j = 0; j < params.data.length; j++){
				if(typeof params.data[j] === "object"){
					this.content.push(new attribute('data-' + params.data[j].name,params.data[j].value));
				}
			}
		}
		if(params !== undefined && typeof params === "object" && params.child !== undefined){
			this.content.push('>');
			this.content.push(params.child);
			this.content.push('</' + name + '>');
		}else{
			this.content.push('/>');
		}
	}

	riframework.attribute = function attribute(variable,value){
		this.content = [];
		this.content.push(' ' + variable + '="' + value + '"');
	}
	
	riframework.events = function events(){
		this.events = [];
	}

	riframework.core = function core(){
		this.events = [];
		this.globals = new rifGlobals();
	}

	riframework.template = function template(core){
		this.core = core;
		this.content = "";	
	}

	riframework.template.prototype.load = function(content,callback){
		this.create(content);
		return callback(this.content);
	}

	riframework.template.prototype.create = function(childs){
		if(Array.isArray(childs)){
			for(var i = 0; i < childs.length; i++){
				this.create(childs[i]);	
			}
		}else if(typeof childs === "object"){
			this.create(childs.content);
		}else if(typeof childs === "string" || typeof childs === "number"){
			this.content += childs;
		}
	}

	riframework.events.prototype.addEvent = function(params){
		var element = null;
		if(params['id'] !== undefined){
			element = document.getElementById(params.id);
			if(params.event !== undefined && params.callback !== undefined){
				element.addEventListener(params.event,params.callback);
				this.events.push(params);
			}
		}else if(params['class'] !== undefined){
			element = document.getElementsByClassName(params['class']);
			if(element.length>0 && Array.isArray(element)){
				for(var i = 0; i < element.length; i++){
					if(params.event !== undefined && params.callback !== undefined){
						element[i].addEventListener(params.event,params.callback);
						this.events.push(params);
					}	
				}
			}
		}
		
	}
	
	riframework.core.prototype.load = function(content,callback,callback2){
		new template(this.core).load(content, function(content){
			if(content === false){
				alert("Page not found");
			}else{
				if(callback !== undefined && callback2 === undefined && typeof callback === "function"){
					var mainContainer = document.getElementById("mainContainer");
					if(mainContainer!==null){
						mainContainer.innerHTML = content;
					}
					return callback();
				}else if(callback !== undefined && callback2 !== undefined && typeof callback === "string" && typeof callback2 === "function"){
					var mainContainer = document.getElementById(callback);
					if(mainContainer!==null){
						mainContainer.innerHTML = content;
					}
					return callback2();
				}else{
					var mainContainer = document.getElementById("mainContainer");
					if(mainContainer!==null){
						mainContainer.innerHTML = content;
					}
				}
			}
		});
	}
	
}(this));
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
(function(rifCoreExtendedElements){
	"use strict";

	rifCoreExtendedElements.navbar = function navbar(params){
		this.content = [];
		var navbar = {};
		if(params['class'] !== undefined){
			navbar['class'] = params['class'];
		}else{
			if(params['type'] !== undefined){
				navbar['class'] = 'navbar navbar-' + params['type'];
			}
		}
		if(params['id']){
			navbar['id'] = params['id'];
		}
		navbar['childs'] = [];
		if(params['header']){
			navbar['childs'].push(new div({
				'class':'navbar-header',
				'childs':[
					new button({
						'type':"button",
						'class':params['header']['class'],
						'attributes':[
							{
								'data-togle':'collapse',
								'data-target':"#"+params['header']['target']
							}
						],
						'childs':[
							new span('<span class="sr-only">Toggle navigation</span>'),
							new span('<span class="icon-bar"></span>'),
							new span('<span class="icon-bar"></span>'),
							new span('<span class="icon-bar"></span>')
						]
					}),
					new a({
						'class':'navbar-brand',
						'href':params['header']['brand']['link'],
						'childs':params['header']['brand']['childs']
					})
				]
			}));
		}
		if(params.collapse !== undefined){
			navbar['childs'].push(new div({
				'class':'collapse navbar-collapse',
				'id':params['header']['target'],
				'childs':[
					new ul({
						'class':'nav navbar-nav',
						'childs':params['collapse']['childs']
					})
				]
			}));
		}
		this.content.push(navbar);
	}

	rifCoreExtendedElements.pills = function pills(params){
		this.content = [];
		var elements = {"class":"nav nav-pills"};
		if(params['class'] !== undefined){
			elements['class'] += " " + params['class'];
		}
		if(params['id'] !== undefined){
			elements['id'] = params['id'];
		}
		if(params['childs'] !== undefined){
			elements['childs'] = params['childs'];
		}
		this.content.push(new ul(elements));
	}

	rifCoreExtendedElements.nav_stacked = function nav_stacked(params){
		this.content = [];
		var elements = {"class":"nav nav-pills nav-stacked"};
		if(params['class'] !== undefined){
			elements['class'] += " " + params['class'];
		}
		if(params['id'] !== undefined){
			elements['id'] = params['id'];
		}
		if(params['childs'] !== undefined){
			elements['childs'] = params['childs'];
		}
		this.content.push(new ul(elements));
	}

	rifCoreExtendedElements.tabs = function tabs(params){
		this.content = [];
		var elements = {"class":"nav nav-tabs"};
		if(params['class'] !== undefined){
			elements['class'] += " " + params['class'];
		}
		if(params['id'] !== undefined){
			elements['id'] = params['id'];
		}
		if(params['childs'] !== undefined){
			elements['childs'] = params['childs'];
		}
		this.content.push(new ul(elements));
	}

	rifCoreExtendedElements.glyph = function glyph(params){
		this.content = [];
		var glyph = {};
		if(params['icon'] !== undefined){
			glyph['class'] = "glyphicon glyphicon-" + params['icon'];
		}
		if(params['childs'] !== undefined){
			glyph['childs'] = params['childs'];
		}
		this.content.push(new span(glyph));
	}

	rifCoreExtendedElements.jumbotron = function jumbotron(childs){
		this.content = [];
		var divObj = {
			'class':'jumbotron'
		};
		if(childs !== undefined && Array.isArray(childs)){
			divObj['childs'] = [];
			for(var i = 0; i < childs.length; i++){
				divObj['childs'].push(childs[i]);
			}
		}
		this.content.push(new div(divObj));
	}

	rifCoreExtendedElements.alert = function alert(type,hidden,message){
		this.content = [];
		this.content.push(new div({
			'class':'alert alert-' + ((type !== undefined) ? type : "danger") 
			+ ((hidden !== undefined && hidden === true) ? " hidden" : ""),
			child:(message !== undefined) ? message : ""
		}));
	}
	rifCoreExtendedElements.column = function column(params){
		this.content = [];
		this.content.push(new div(params));
	}
	rifCoreExtendedElements.row = function row(columns,params){
		this.content = [];
		if(params === undefined) params = {};
		if(params['class'] === undefined){
			params['class'] = "row";
		}
		params.child = [];
		if(columns !== undefined && Array.isArray(columns)){
			for(var i = 0; i < columns.length; i++){
				params.child.push(columns[i]);
			}
		}
		this.content.push(new div(params));
	}
	rifCoreExtendedElements.container = function container(child,params){
		this.content = [];
		if(params === undefined) params = {};
		if(params['class'] === undefined){
			params['class'] = "container";
		}
		if(child !== undefined && Array.isArray(child)){
			params.child = [];
			for(var i = 0; i < child.length; i++){
				params.child.push(child[i]);
			}
		}
		this.content.push(new div(params));
	}
}(this));