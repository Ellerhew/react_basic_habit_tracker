(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{15:function(t,e,n){},19:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(9),r=n.n(s),i=(n(15),n(11)),o=n(6),u=n(2),l=n(3),b=n(5),h=n(4),j=(n(16),n(19),n(0)),d=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).handleIncrement=function(){t.props.onIncrement(t.props.habit)},t.handleDecrement=function(){t.props.onDecrement(t.props.habit)},t.handleDelete=function(){t.props.onDelete(t.props.habit)},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("habit mounnted")}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var t=this.props.habit,e=t.name,n=t.count;return Object(j.jsxs)("li",{className:"habit",children:[Object(j.jsx)("span",{className:"habit-name",children:e}),Object(j.jsx)("span",{className:"habit-count",children:n}),Object(j.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(j.jsx)("i",{className:"fas fa-plus-square"})}),Object(j.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(j.jsx)("i",{className:"fas fa-minus-square"})}),Object(j.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),p=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)("ul",{children:this.props.habits.map((function(e){return Object(j.jsx)(d,{habit:e,onIncrement:t.props.onIncrement,onDecrement:t.props.onDecrement,onDelete:t.props.onDelete},e.id)}))})}}]),n}(a.Component),m=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){console.log("yaya");var t=this.props.habitIng.length;return Object(j.jsxs)("nav",{className:"nav",children:[Object(j.jsx)("span",{className:"logo",children:Object(j.jsx)("i",{className:"fas fa-leaf"})}),Object(j.jsx)("span",{className:"title",children:"Habit Tracker"}),Object(j.jsx)("span",{className:"nav-count",children:t})]})}}]),n}(a.PureComponent),f=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).inputRef=c.a.createRef(),t.onSubmit=function(e){e.preventDefault();var n=t.inputRef.current.value;n&&t.props.onAdd(n),t.inputRef.current.value=""},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:"add-form",onSubmit:this.onSubmit,children:[Object(j.jsx)("input",{ref:this.inputRef,type:"text",className:"add-input",placeholder:"Habit"}),Object(j.jsx)("button",{className:"addBtn",children:"Add"})]})})}}]),n}(a.PureComponent),O=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},t.handleIncrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},e),{},{count:e.count+1}):t}));t.setState({habits:n})},t.handleDecrement=function(e){var n=t.state.habits.map((function(t){if(t.id===e.id){var n=e.count-1;return Object(o.a)(Object(o.a)({},e),{},{count:n<0?0:n})}return t}));t.setState({habits:n})},t.handleDelete=function(e){var n=t.state.habits.filter((function(t){return t.id!==e.id}));t.setState({habits:n})},t.handleAdd=function(e){var n=Object(i.a)(t.state.habits);n.push({id:Date.now(),name:e,count:0}),t.setState({habits:n}),console.log(n)},t.onReset=function(){var e=t.state.habits.map((function(t){return 0!==t.count?Object(o.a)(Object(o.a)({},t),{},{count:0}):t}));t.setState({habits:e})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{habitIng:this.state.habits.filter((function(t){return t.count>0}))}),Object(j.jsx)(f,{onAdd:this.handleAdd}),Object(j.jsx)(p,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete}),Object(j.jsx)("button",{className:"resetBtn",onClick:this.onReset,children:"Reset All"})]})}}]),n}(a.Component);n(21);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.9039a37d.chunk.js.map