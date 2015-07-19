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