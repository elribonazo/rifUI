rifUI
===================
RifUI is a pure javascript library to generate html content easily. It is also possible to assign events and create bootstrap elements.

[TOC]

----------
##What is it?
RifUI is 100% free and opensource and it is available on our public CDN.

> **Note:**

> - [//cdn1.jribo.kiwi/rifUI.js](http://cdn1.jribo.kiwi/rifUI.js)
> -  [//cdn2.jribo.kiwi/rifUI.js](http://cdn2.jribo.kiwi/rifUI.js)
> -  [//cdn3.jribo.kiwi/rifUI.js](http://cdn3.jribo.kiwi/rifUI.js).

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

All the elements can be initialized like below:
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
----------
> **Notes:**

> - "child" parameter can be a text or an array of N elements.
> - Each html element has its own parameters, data attributes like in the HTML5 Specification.
> - It is also possible to pass a text to the element constructor, and the element will print the text introduced instead of creating the element with the object parameters.

##Content generation Flow

```sequence
app->rifCore:load(page)
rifCore->template:load(content)
template->elements:loadElements(elements)
elements->element:create(element)
element->elements:html
elements->template:html
template->rifCore:html
rifCore->app:html
```

##Event listener generation Flow
```sequence
app->rifCore:Foreach event addEvent(event)
rifCore->events:loadEvents(events)
events->event:loadEvent(event)
event->browser:addEventListener
```