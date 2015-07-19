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