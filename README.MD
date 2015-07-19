rifUI
===================
RifUI is a pure javascript library to generate html content easily. It is also possible to assign events and create bootstrap elements.

NO JQUERY REQUIRED but the library also works perfectly on jQuery.

----------
##What is it?
RifUI is 100% free and opensource and it is available on our public CDN.

> **Note:**
> - Faster minimized version for production environments
> - [//cdn1.jribo.kiwi/rifUI.js](http://cdn1.jribo.kiwi/rifUI.js)
> - [//cdn2.jribo.kiwi/rifUI.js](http://cdn2.jribo.kiwi/rifUI.js)
> - [//cdn3.jribo.kiwi/rifUI.js](http://cdn3.jribo.kiwi/rifUI.js)
> - Normal version for testing or extended development
> - [//cdn1.jribo.kiwi/all.js](http://cdn1.jribo.kiwi/all.js)
> - Separate version for testing or extended development
> - [//cdn1.jribo.kiwi/rifCoreBootstrapElements.js](http://cdn1.jribo.kiwi/rifCoreBootstrapElements.js)
> - [//cdn1.jribo.kiwi/rifCoreElements.js](http://cdn1.jribo.kiwi/rifCoreElements.js)
> - [//cdn1.jribo.kiwi/rifCore.js](http://cdn1.jribo.kiwi/rifCore.js)

----------
##  Start a project
To start using rifUI on your framework you must include the script as the following:

```
<script type="text/javascript" src="//cdn1.jribo.kiwi/rifUI.js"></script>
```
----------
#Specification
The UI javascript framework is able to generate the following html tags :

**a, form, h1, h2, h3, h4, h5, h6, pre, hr, span, section, progress, iframe, header, footer, fieldset, code, canvas, br, strong, caption, mark, address, article, aside, tbody, thead, tfoot, td, th, title, tr, label, table, ul, ol, main, li, video, audio, img, input, textarea, select, option, p, div, nav, button.**

##Creating new elements
Follow this steps to create an object in any place.
```
Object initialization:
new a({
	'title':"title demo link",
	'href': "http://google.es",
	'child':'link name'
});
String initialization:
new a('<a href="#">Demo link</a>');
```
##Full example
Full example below
On this example, we load some Bootstrap elements. A 2 column layout with 2 rows and a button in one of its columns.
```
var page = [];

page.push(new container([
	new row([
		new column({
			'class':"col-xs-6",
			'id':"container2",
			'child':"hola1"
		}),
		new column({
			'class':"col-xs-6",
			'child':"hola2"
		}),
		new column({
			'class':"col-xs-6",
			'child':"hola3"
		}),
		new column({
			'class':"col-xs-6",
			'child':new button({
				'class':"btn btn-default",
				'child':"submit",
				'id':"eliminarBtn"
			})
		})
	])
]));
var rifCore = new core();
rifCore.load(page, function(){
	console.log("pageLoaded");
});
```
##Events
To add an event you must specify an ID, the event which you want to listen and the callback function that you want to run once the event is called.
```
var e = new events();
e.addEvent({
	'id':"eliminarBtn",
	'event':"click",
	'callback':function(){
		console.log("Event executed on the element",this);
	}
});
```

----------
> **Notes:**

> - "child" parameter can be a text or an array of N elements.
> - Each html element has its own parameters, data attributes like in the HTML5 Specification.
> - It is also possible to pass a text to the element constructor, and the element will print the text introduced instead of creating the element with the object parameters.

##Content generation Flow
![Alt text](http://jribo.kiwi/contents.png )

##Event listener generation Flow
![Alt text](http://jribo.kiwi/events.png )

#Credits
Francisco Javier Ribó Labrador, info@jribo.kiwi
> - [http://jribo.kiwi](Francisco Javier Ribó Labrador, info@jribo.kiwi)
