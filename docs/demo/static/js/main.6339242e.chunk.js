(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){e.exports=t(39)},22:function(e,n,t){},31:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(15),r=t.n(l),i=(t(22),t(4)),c=t(5),s=t(7),h=t(6),d=t(8),u=t(1),p=t(16),m=t.n(p),g=(t(31),t(32),t(33),t(38),function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(h.a)(n).call(this,e))).content=o.a.createRef(),t.handleScroll=t.handleScroll.bind(Object(u.a)(Object(u.a)(t))),t}return Object(d.a)(n,e),Object(c.a)(n,[{key:"handleScroll",value:function(){this.props.onScroll(this.content.current.editor.session.getScrollTop())}},{key:"componentDidUpdate",value:function(){this.content.current.editor.session.setScrollTop(this.props.scrollTop)}},{key:"render",value:function(){return o.a.createElement(m.a,{ref:this.content,value:this.props.value,onChange:this.props.onChange,readOnly:this.props.readOnly,onScroll:this.handleScroll,mode:this.props.mode,theme:"github",fontSize:18,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,editorProps:{$blockScrolling:1/0},setOptions:{showLineNumbers:!0,tabSize:4}})}}]),n}(a.Component)),b=function(e){function n(e){var t;Object(i.a)(this,n),(t=Object(s.a)(this,Object(h.a)(n).call(this,e))).state={scrollTop:0,display:"Loading...",source:"def search(n, a):\n    low = 0\n    high = len(a) - 1\n    while low <= high:\n        mid = low + high // 2\n        v = a[mid]\n        if n == v:\n            return mid\n        if n < v:\n            high=mid - 1\n        else:\n            low=mid + 1\n    return -1\n\ni = search(1, [1, 2, 4])\n"},t.handleChange=t.handleChange.bind(Object(u.a)(Object(u.a)(t))),t.handleScroll=t.handleScroll.bind(Object(u.a)(Object(u.a)(t)));var a=Object(u.a)(Object(u.a)(t));return void 0===window.languagePluginLoader?t.state.display="Pyodide is not loaded.":window.languagePluginLoader.then(function(){fetch("code_tracer.py").then(function(e){return e.text()}).then(function(e){window.pyodide.runPython(e),a.handleChange()})}),t}return Object(d.a)(n,e),Object(c.a)(n,[{key:"handleChange",value:function(e){void 0===e&&(e=this.state.source);var n=window.analyze(e);this.setState({source:e,display:n})}},{key:"handleScroll",value:function(e){console.log(e),this.setState({scrollTop:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("p",null,o.a.createElement("a",{href:".."},"Home")),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement("label",{htmlFor:"source"},"Type Some Python")),o.a.createElement("th",null,o.a.createElement("label",{htmlFor:"display"},"See Inside"))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(g,{value:this.state.source,scrollTop:this.state.scrollTop,onChange:this.handleChange,onScroll:this.handleScroll,mode:"python"})),o.a.createElement("td",null,o.a.createElement(g,{value:this.state.display,scrollTop:this.state.scrollTop,readOnly:!0,onChange:this.handleChange,onScroll:this.handleScroll,mode:"markdown"}))))),o.a.createElement("p",null,"Change the code, and see the changes inside. Try to find the bug in the example code. (Hint: try searching for different numbers.) Paste your own code to see how it works."))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.6339242e.chunk.js.map