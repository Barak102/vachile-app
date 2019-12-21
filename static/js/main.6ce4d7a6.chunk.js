(this["webpackJsonpvachile-app"]=this["webpackJsonpvachile-app"]||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),s=t.n(i),c=(t(14),t(1)),l=t(2),m=t(4),o=t(3),u=t(5),d=(t(15),t(16),t(17),t(8)),p=(t(18),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).handleYearChange=function(e){var a=e.target,n=t.state.selectedMinYear,r=t.state.selectedMaxYear;"min"===a.name?n=a.value:r=a.value,n>r&&(r=n),t.setState({selectedMinYear:n,selectedMaxYear:r},(function(){t.setMaxYearsRange(n),t.props.YearChanged(t.state.selectedMinYear,t.state.selectedMaxYear)}))},t.state={minYears:[],maxYears:[],selectedMinYear:t.props.minimumYear,selectedMaxYear:t.props.minimumYear},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){for(var e=this.props.minimumYear;e<=this.props.maximumYear;e++)this.state.minYears.push(e);this.setMaxYearsRange(this.state.selectedMinYear)}},{key:"setMaxYearsRange",value:function(e){this.setState({maxYears:Object(d.a)(this.state.minYears).filter((function(a){return a>=e}))})}},{key:"printYears",value:function(e){return e.map((function(e){return r.a.createElement("option",{key:e,id:e.toString()},e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"dateRangeWrapper"},r.a.createElement("div",{className:"title"},this.props.title),r.a.createElement("div",{className:"fields"},r.a.createElement("div",{className:"field-item"},r.a.createElement("div",{className:"title"},this.props.minTitle),r.a.createElement("div",null,r.a.createElement("select",{name:"min",className:"field",onChange:this.handleYearChange},this.printYears(this.state.minYears))),r.a.createElement("div",{className:"field-item"},r.a.createElement("div",{className:"title"},this.props.maxTitle),r.a.createElement("div",null,r.a.createElement("select",{name:"max",className:"field",onChange:this.handleYearChange},this.printYears(this.state.maxYears)))))))}}]),a}(n.Component)),h=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={},t.rangeYearChangedHandler=function(e,a){console.log("minimum year:",e),console.log("maximum year:",a)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar-wrapper"},r.a.createElement("div",{className:"sidebar-title"},r.a.createElement("h2",null,"\u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea \u05d7\u05d9\u05e4\u05d5\u05e9")),r.a.createElement("div",{className:"dateRange"},r.a.createElement(p,{title:"\u05e9\u05e0\u05d5\u05ea \u05e9\u05d9\u05d5\u05d5\u05e7",minimumYear:1900,maximumYear:2019,minTitle:"\u05de\u05e9\u05e0\u05d4",maxTitle:"\u05e2\u05d3 \u05e9\u05e0\u05d4",YearChanged:this.rangeYearChangedHandler}),r.a.createElement(p,{title:"\u05e9\u05e0\u05d5\u05ea \u05d9\u05d9\u05e6\u05d5\u05e8",minimumYear:1900,maximumYear:2019,minTitle:"\u05de\u05e9\u05e0\u05d4",maxTitle:"\u05e2\u05d3 \u05e9\u05e0\u05d4",YearChanged:this.rangeYearChangedHandler})))}}]),a}(n.Component),v=function e(){Object(c.a)(this,e)};v.cars=[{id:1,manufacturer:"Volvo",model:"240",type:"private",year:1984,color:"brown",gear:"auto",engineVolume:2e3,marketingYears:{from:1975,to:1993},image:"assets/volvo240.jpg"},{id:2,manufacturer:"Fiat",model:"1500 Cabriolet",type:"private",year:1966,color:"red",gear:"manual",engineVolume:1500,marketingYears:{from:1959,to:1966},image:"assets/fiat500cabriolet.jpg"},{id:3,manufacturer:"Subaru",model:"Leone",type:"Wagon",year:1990,color:"White",gear:"Auto",engineVolume:1600,marketingYears:{from:1985,to:1993},image:"assets/SubaruLeoneWagon.jpg"}],v.getCars=function(){return v.cars};t(19);var f=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.car;return r.a.createElement("div",{className:"car-item"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:e.image,className:"img-dim",alt:e.manufacturer})),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"detail"},r.a.createElement("span",{className:"key"},"\u05d9\u05e6\u05e8\u05df:"),e.manufacturer),r.a.createElement("div",{className:"detail"},r.a.createElement("span",{className:"key"},"\u05d3\u05d2\u05dd:"),e.model),r.a.createElement("div",{className:"detail"},r.a.createElement("span",{className:"key"},"\u05e9\u05e0\u05d4: "),e.year),r.a.createElement("div",{className:"detail"},r.a.createElement("span",{className:"key"},"\u05e6\u05d1\u05e2: "),e.color),r.a.createElement("div",{className:"detail"},r.a.createElement("span",{className:"key"},"\u05d2\u05d9\u05e8: "),e.gear),r.a.createElement("div",{className:"detail"},r.a.createElement("span",{className:"key"},"\u05e0\u05e4\u05d7 \u05de\u05e0\u05d5\u05e2: "),e.engineVolume),r.a.createElement("div",{className:"detail"},r.a.createElement("span",{className:"key"},"\u05e9\u05e0\u05d5\u05ea \u05e9\u05d9\u05d5\u05d5\u05e7: "),e.marketingYears.from,"-",e.marketingYears.to)))}}]),a}(n.Component),g=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).printCars=function(){return t.state.cars.map((function(e){return r.a.createElement(f,{key:e.id,car:e})}))},t.state={cars:[]},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"sidebar"},r.a.createElement(h,null)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,this.props.title)),r.a.createElement("div",{className:"main-content"},this.printCars())))}},{key:"componentDidMount",value:function(){this.setState({cars:v.getCars()})}}]),a}(n.Component),E=(t(20),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={menuItems:[]},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"flexCenter navbar-wrapper"},r.a.createElement("ul",null,this.props.menuItems.map((function(e){return r.a.createElement("li",{key:e.id,className:"inline-item"},e.title)}))))}}]),a}(n.Component)),Y=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={title:"\u05d7\u05d9\u05e4\u05d5\u05e9 \u05e8\u05db\u05d1\u05d9 \u05d0\u05e1\u05e4\u05e0\u05d5\u05ea",menus:[{id:1,name:"create",title:"\u05d4\u05d5\u05e1\u05e4\u05d4"},{id:2,name:"search",title:"\u05d7\u05d9\u05e4\u05d5\u05e9"}]},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{menuItems:this.state.menus}),r.a.createElement(g,{title:this.state.title}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.6ce4d7a6.chunk.js.map