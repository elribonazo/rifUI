(function(rifCoreExtendedElements){
	"use strict";

	rifCoreExtendedElements.navBarForm = function navBarForm(params){
		this.content = [];
		var form = {};
		if(params['class'] !== undefined){
			form['class'] = params['class'];
		}else{
			form['class'] = "navbar-form navbar-left";
		}
		if(params['role'] !== undefined){
			form['role'] = params['role'];
		}
		form['child'] = [];
		if(params.fields !== undefined){
			for(var i = 0; i < params['fields'].length; i++){
				forms['child'].push(new div({
					'class':'form-group',
					'child':[params['fields'][i]]
				}));
			}
		}
	}

	rifCoreExtendedElements.pageHeader = function pageHeader(params){
		this.content = [];
		this.content.push(new div({
			'class':(params['class']!==undefined) ? params['class'] : 'page-header',
			'child':(params['child']!==undefined) ? params['child'] : []
		}));
	}

	rifCoreExtendedElements.badge = function badge(params){
		this.content = [];
		this.content.push(new span({
			'class':(params['class']!== undefined) ? params['class'] : 'badge',
			'child':(params['number']!==undefined) ? params['number'] : "0"
		}));
	}

	rifCoreExtendedElements.extLabel = function extLabel(params){
		this.content = [];
		this.content.push(new span({
			'class':(params['class']!== undefined) ? params['class'] : 'label label-default',
			'child':(params['child']!==undefined) ? params['child'] : []
		}));
	}

	rifCoreExtendedElements.pagination = function pagination(params){
		this.content = [];
		this.content.push(new nav({
			'child':[
				new ul({
					'class':(params['class']!==undefined) ? params['class']:'pagination',
					'child':(params['child']!==undefined)?params['child']:[]
				})
			]
		}))
	}

	rifCoreExtendedElements.breadcrumb = function breadcrumb(params){
		this.content = [];
		this.content.push(new ol({
			'class':'breadcrumb',
			'child':(params.child !== undefined) ? params.child : []
		}));
	}

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
		navbar['child'] = [];
		if(params['header']){
			navbar['child'].push(new div({
				'class':'navbar-header',
				'child':[
					new button({
						'type':"button",
						'class':params['header']['class'],
						'attributes':[
							{
								'data-togle':'collapse',
								'data-target':"#"+params['header']['target']
							}
						],
						'child':[
							new span('<span class="sr-only">Toggle navigation</span>'),
							new span('<span class="icon-bar"></span>'),
							new span('<span class="icon-bar"></span>'),
							new span('<span class="icon-bar"></span>')
						]
					}),
					new a({
						'class':'navbar-brand',
						'href':params['header']['brand']['link'],
						'child':params['header']['brand']['child']
					})
				]
			}));
		}
		if(params.collapse !== undefined){
			navbar['child'].push(new div({
				'class':'collapse navbar-collapse',
				'id':params['header']['target'],
				'child':[
					new ul({
						'class':'nav navbar-nav',
						'child':params['collapse']['child']
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
		if(params['child'] !== undefined){
			elements['child'] = params['child'];
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
		if(params['child'] !== undefined){
			elements['child'] = params['child'];
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
		if(params['child'] !== undefined){
			elements['child'] = params['child'];
		}
		this.content.push(new ul(elements));
	}

	rifCoreExtendedElements.glyph = function glyph(params){
		this.content = [];
		var glyph = {};
		if(params['icon'] !== undefined){
			glyph['class'] = "glyphicon glyphicon-" + params['icon'];
		}
		if(params['child'] !== undefined){
			glyph['child'] = params['child'];
		}
		this.content.push(new span(glyph));
	}

	rifCoreExtendedElements.jumbotron = function jumbotron(child){
		this.content = [];
		var divObj = {
			'class':'jumbotron'
		};
		if(child !== undefined && Array.isArray(child)){
			divObj['child'] = [];
			for(var i = 0; i < child.length; i++){
				divObj['child'].push(child[i]);
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