(function(rifCoreExtendedElements){
	"use strict";

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