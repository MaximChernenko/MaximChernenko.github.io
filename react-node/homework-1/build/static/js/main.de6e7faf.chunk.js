(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t(34)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),l=t.n(i),m=(t(17),t(1)),c=t(3),s=t(4),d=t(6),o=t(5),u=t(7),p=(t(19),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("a",{className:"header__logo",href:"google.com"},"Logo"),r.a.createElement("nav",null,r.a.createElement("ul",{className:"header__list"},r.a.createElement("li",{className:"header__item"},r.a.createElement("a",{className:"header__link",href:"google.com"},"Item1")),r.a.createElement("li",{className:"header__item"},r.a.createElement("a",{className:"header__link",href:"google.com"},"Item2")),r.a.createElement("li",{className:"header__item"},r.a.createElement("a",{className:"header__link",href:"google.com"},"Item3")),r.a.createElement("li",{className:"header__item"},r.a.createElement("a",{className:"header__link",href:"google.com"},"Item4")))),r.a.createElement("div",{className:"user"},r.a.createElement("p",{className:"user__text"},"Bob Kelly")))}),h=(t(21),function(e){var a=e.data;return r.a.createElement("table",{className:"table"},r.a.createElement("caption",{className:"table__caption"},"Order history"),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Delivery address"),r.a.createElement("th",null,"Rating")),a.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.address),r.a.createElement("td",null,e.rating))})))}),g=(t(23),function(e){var a=e.name,t=e.description,n=e.imageSrc,i=e.price,l=e.ingredients;return r.a.createElement("div",{className:"dish"},r.a.createElement("p",{className:"dish__name"},a),r.a.createElement("img",{className:"dish__img",src:n,alt:"img"}),r.a.createElement("p",null,t),r.a.createElement("p",null,i),r.a.createElement("p",null,r.a.createElement("b",null,"Ingredients:")),r.a.createElement("ul",null,l.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.name))})))}),E=t(11),f=t(2),v=(t(25),function(e){var a=e.rate,t=e.text;return r.a.createElement("div",{className:"comment"},r.a.createElement("p",{className:"comment__rate"},r.a.createElement("u",null,"Rate"),": ",a),r.a.createElement("p",{className:"comment__text"},t))}),_=(t(27),{text:"",rate:""}),b=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state=Object(f.a)({comments:[]},_),t.id=0,t.addComment=function(e){t.setState(function(a){return{comments:[e].concat(Object(E.a)(a.comments))}})},t.handleInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(m.a)({},n,r))},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.text,r=a.rate,i=t.id;t.addComment({id:i,text:n,rate:r}),t.id+=1,t.reset()},t.reset=function(){t.setState(Object(f.a)({},_))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.rate,t=e.text,n=e.comments;return r.a.createElement("div",{className:"comment-area"},r.a.createElement("ul",null,n.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(v,{rate:e.rate,text:e.text}))})),r.a.createElement("form",{className:"comment-form",onSubmit:this.handleSubmit},r.a.createElement("textarea",{className:"comment-form__textarea",name:"text",value:t,onChange:this.handleInputChange}),r.a.createElement("select",{className:"comment-form__select",name:"rate",value:a,onChange:this.handleInputChange},r.a.createElement("option",{value:"",disabled:!0},"..."),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10")),r.a.createElement("button",{type:"submit",className:"comment-form__btn"},"Add Comment")))}}]),a}(n.Component),N=(t(29),function(e){var a=e.data;return r.a.createElement("ul",{className:"dish-menu"},a.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(g,{name:e.name,description:e.description,imageSrc:e.image,price:e.price,ingredients:e.ingredients}),r.a.createElement(b,null))}))}),O=(t(31),function(e){var a=e.value,t=e.onFilter;return r.a.createElement("div",{className:"filter"},r.a.createElement("label",{className:"filter__label",htmlFor:"filter-input"},"Filter: "),r.a.createElement("input",{name:"filter",className:"filter__input",value:a,onChange:t,id:"filter-input"}))}),C=(t(9),{email:"",password:""}),j=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state=Object(f.a)({},C),t.handlerInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(m.a)({},n,r))},t.handlerSubmitForm=function(e){e.preventDefault(),console.log(t.state),t.reset()},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"reset",value:function(){this.setState(Object(f.a)({},C))}},{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return r.a.createElement("form",{className:"form",onSubmit:this.handlerSubmitForm},r.a.createElement("input",{className:"form__input",name:"email",value:a,onChange:this.handlerInputChange,type:"email",placeholder:"Email"}),r.a.createElement("input",{className:"form__input",name:"password",value:t,onChange:this.handlerInputChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{className:"form__btn",type:"submit"},"Sign In"))}}]),a}(n.Component),y={name:"",email:"",phone:"",password:""},S=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state=Object(f.a)({},y),t.handlerInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(m.a)({},n,r))},t.handlerSubmitForm=function(e){e.preventDefault(),console.log(t.state),t.reset()},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"reset",value:function(){this.setState(Object(f.a)({},y))}},{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,n=e.name,i=e.phone;return r.a.createElement("form",{className:"form",onSubmit:this.handlerSubmitForm},r.a.createElement("input",{className:"form__input",name:"name",value:n,onChange:this.handlerInputChange,type:"text",placeholder:"Name"}),r.a.createElement("input",{className:"form__input",name:"email",value:a,onChange:this.handlerInputChange,type:"email",placeholder:"Email"}),r.a.createElement("input",{className:"form__input",name:"phone",value:i,onChange:this.handlerInputChange,type:"tel",placeholder:"Phone"}),r.a.createElement("input",{className:"form__input",name:"password",value:t,onChange:this.handlerInputChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{className:"form__btn",type:"submit"},"Sign Up"))}}]),a}(n.Component),w=[{id:0,date:"6/22/2018",price:"290.00",address:"108 Quinn Plains",rating:10},{id:1,date:"5/15/2018",price:"159.00",address:"262 Jovan Roads",rating:4},{id:2,date:"10/1/2018",price:"710.00",address:"331 Mills Mountains",rating:9},{id:3,date:"5/12/2018",price:"567.00",address:"47330 Boyle Road",rating:8},{id:4,date:"9/22/2018",price:"703.00",address:"0700 Furman Trail",rating:6},{id:5,date:"6/14/2018",price:"887.00",address:"24880 Margaret Harbors",rating:2},{id:6,date:"7/28/2018",price:"48.00",address:"377 Muller Parkway",rating:1},{id:7,date:"12/29/2017",price:"375.00",address:"455 Judy Isle",rating:7},{id:8,date:"3/22/2018",price:"806.00",address:"67303 Garth Haven",rating:8},{id:9,date:"8/11/2018",price:"143.00",address:"28386 Crooks Ramp",rating:1},{id:10,date:"7/22/2018",price:"746.00",address:"351 Schamberger Shore",rating:4},{id:11,date:"6/10/2018",price:"603.00",address:"221 Izaiah Ranch",rating:7},{id:12,date:"12/29/2017",price:"190.00",address:"57337 Yost Drive",rating:6},{id:13,date:"2/19/2018",price:"606.00",address:"42978 Hugh Mill",rating:7},{id:14,date:"12/6/2017",price:"330.00",address:"58209 Bradford Views",rating:3}],I=[{id:1,name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c, \u0437\u0430\u043f\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u0432 \u043c\u0443\u043d\u0434\u0438\u0440\u0435",description:"\u0410\u0440\u043e\u043c\u0430\u0442\u043d\u044b\u0439, \u0441\u044b\u0442\u043d\u044b\u0439, \u0448\u0438\u043f\u044f\u0449\u0438\u0439 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0439 \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c, \u0444\u0430\u0440\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043c\u0435\u0442\u0430\u043d\u043d\u043e-\u0431\u0435\u043a\u043e\u043d\u043d\u043e\u0439 \u043d\u0430\u0447\u0438\u043d\u043a\u043e\u0439.",image:"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg",price:100,ingredients:[{id:0,name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c"},{id:1,name:"\u0427\u0435\u0441\u043d\u043e\u043a"},{id:2,name:"\u0421\u043c\u0435\u0442\u0430\u043d\u0430"},{id:3,name:"\u0411\u0435\u043a\u043e\u043d"},{id:4,name:"\u0422\u0432\u0435\u0440\u0434\u044b\u0439 \u0441\u044b\u0440"},{id:5,name:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439 \u043b\u0443\u043a"}]},{id:2,name:"\u0422\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u043c\u0430\u0433\u0440\u0438\u0431\u0441\u043a\u0438\u0439 \u0441\u0443\u043f",description:"\u0422\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u043c\u0430\u0433\u0440\u0438\u0431\u0441\u043a\u0438\u0439 \u0441\u0443\u043f \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d \u0432 \u041c\u0430\u0440\u043e\u043a\u043a\u043e \u0438 \u0422\u0443\u043d\u0438\u0441\u0435. \u041e\u043d \u0432\u0435\u0441\u044c\u043c\u0430 \u043f\u0440\u043e\u0441\u0442 \u0432 \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0438 \u0441\u0430\u043c \u043f\u043e \u0441\u0435\u0431\u0435 \u043b\u0435\u0433\u043a\u0438\u0439 \u2014 \u0432 \u043e\u0441\u043d\u043e\u0432\u0435 \u0442\u043e\u043c\u0430\u0442\u044b \u0438 \u043a\u0443\u0440\u0438\u043d\u044b\u0439 \u0431\u0443\u043b\u044c\u043e\u043d. \u041a\u0440\u043e\u043c\u0435 \u043d\u0438\u0445 \u0432 \u0441\u0443\u043f\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0441\u043f\u0435\u0446\u0438\u0438, \u043c\u0435\u0434 \u0438 \u043b\u0438\u043c\u043e\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0441\u0435 \u0432\u043c\u0435\u0441\u0442\u0435 \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442 \u0442\u043e\u0442 \u0441\u0430\u043c\u044b\u0439 \u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439 \u043a\u043e\u043b\u043e\u0440\u0438\u0442. \u0412\u043a\u0443\u0441 \u0441\u0443\u043f\u0430 \u0432\u0441\u0435\u0446\u0435\u043b\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0442\u043e\u043c\u0430\u0442\u043e\u0432.",image:"https://s2.eda.ru/StaticContent/Photos/150601195903/151007183344/p_O.jpg",price:150,ingredients:[{id:0,name:"\u041f\u043e\u043c\u0438\u0434\u043e\u0440\u044b"},{id:1,name:"\u041a\u0443\u0440\u0438\u043d\u044b\u0439 \u0431\u0443\u043b\u044c\u043e\u043d"},{id:2,name:"\u041c\u0435\u0434"},{id:3,name:"\u041f\u0435\u0442\u0440\u0443\u0448\u043a\u0430"},{id:4,name:"\u041a\u0438\u043d\u0437\u0430"},{id:5,name:"\u041f\u0430\u043f\u0440\u0438\u043a\u0430"}]},{id:3,name:"\u041a\u0440\u0435\u043c-\u0441\u0443\u043f \u0438\u0437 \u0442\u044b\u043a\u0432\u044b",description:"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u044d\u0442\u043e\u0439 \u043e\u0440\u0430\u043d\u0436\u0435\u0432\u043e\u0439 \u043f\u043e\u0445\u043b\u0435\u0431\u043a\u0438 \u0443\u043a\u0440\u0430\u0448\u0430\u0435\u0442 \u043e\u0431\u043b\u043e\u0436\u043a\u0443 \u043a\u043d\u0438\u0433\u0438 \xabLa Cuisine du March\xe9\xbb \u041f\u043e\u043b\u044f \u0411\u043e\u043a\u044e\u0437\u0430. \u0411\u043e\u043a\u044e\u0437, \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u0432\u0448\u0438\u0439 \u0442\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u0443\u044e \u043d\u043e\u0432\u0443\u044e \u043a\u0443\u0445\u043d\u044e, \u0441\u0447\u0438\u0442\u0430\u043b \u0442\u044b\u043a\u0432\u0443 \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u043e\u0441\u043d\u043e\u0432 \u044d\u0442\u043e\u0433\u043e \u043c\u0438\u0440\u043e\u043f\u043e\u0440\u044f\u0434\u043a\u0430, \u0430 \u0442\u044b\u043a\u0432\u0435\u043d\u043d\u044b\u0439 \u0441\u0443\u043f \u2014 \u044d\u0434\u0430\u043a\u043e\u0439 \u043e\u043a\u043e\u043b\u043e\u043f\u043b\u043e\u0434\u043d\u043e\u0439 \u0432\u043e\u0434\u043e\u0439 \u0433\u0430\u0441\u0442\u0440\u043e\u043d\u043e\u043c\u0438\u0438.",image:"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png",price:100,ingredients:[{id:0,name:"\u0422\u044b\u043a\u0432\u0430"},{id:1,name:"\u041f\u0435\u0442\u0440\u0443\u0448\u043a\u0430"},{id:2,name:"\u0421\u043b\u0438\u0432\u043a\u0438"},{id:3,name:"\u0411\u0440\u0435\u043d\u0434\u0438"},{id:4,name:"\u041a\u0443\u0440\u0438\u043d\u044b\u0439 \u0431\u0443\u043b\u044c\u043e\u043d"}]},{id:4,name:"\u0421\u0430\u043b\u0430\u0442 \u0438\u0437 \u043a\u0440\u0430\u0441\u043d\u043e\u0439 \u0444\u0430\u0441\u043e\u043b\u0438 \u0441 \u0442\u0432\u043e\u0440\u043e\u0436\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c",description:"\u0422\u043e\u0441\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u0441\u0430\u043b\u0430\u0442, \u0432\u044b\u0434\u0435\u0440\u0436\u0430\u043d\u043d\u044b\u0439 \u0432 \u043a\u043e\u043b\u043e\u0440\u0438\u0441\u0442\u0438\u043a\u0435 \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u043e\u0433\u043e \u0444\u043b\u0430\u0433\u0430. \u0411\u0443\u043a\u0432\u0430\u043b\u044c\u043d\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043b\u043e\u0436\u0435\u043a \u0445\u0432\u0430\u0442\u0430\u0435\u0442, \u0447\u0442\u043e\u0431\u044b \u0432 \u0436\u0435\u043b\u0443\u0434\u043a\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043b\u0430\u0441\u044c \u043f\u0440\u0438\u044f\u0442\u043d\u0430\u044f \u0442\u044f\u0436\u0435\u0441\u0442\u044c. \u041e\u0447\u0435\u043d\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u0430\u044f \u0448\u0442\u0443\u043a\u0430 \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0443\u0442\u0440\u0430, \u043a\u043e\u0433\u0434\u0430 \u0442\u0440\u0443\u0434\u043d\u043e \u0437\u0430\u043f\u0438\u0445\u043d\u0443\u0442\u044c \u0432 \u0441\u0435\u0431\u044f \u043a\u0440\u0443\u043f\u043d\u044b\u0435 \u0434\u043e\u0437\u044b \u0431\u0438\u043e\u043c\u0430\u0441\u0441\u044b, \u0430 \u0435\u0441\u0442\u044c \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0445\u043e\u0447\u0435\u0442\u0441\u044f. \u041a\u0440\u043e\u043c\u0435 \u0440\u0443\u043a\u043a\u043e\u043b\u044b \u0432 \u044d\u0442\u043e\u043c \u0441\u0430\u043b\u0430\u0442\u0435 \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u0435\u0431\u044f \u043b\u0438\u0441\u0442\u044c\u044f \u043a\u043e\u0440\u043d-\u0441\u0430\u043b\u0430\u0442\u0430 \u0438 \u0449\u0430\u0432\u0435\u043b\u044f, \u043d\u043e \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u0432\u0435\u0434\u0435\u0442 \u0441\u0435\u0431\u044f \u0437\u0435\u043b\u0435\u043d\u0430\u044f \u0447\u0435\u0440\u0435\u043c\u0448\u0430.",image:"https://s1.eda.ru/StaticContent/Photos/130410124428/130421123421/p_O.jpg",price:150,ingredients:[{id:0,name:"\u041a\u043e\u043d\u0441\u0435\u0440\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0444\u0430\u0441\u043e\u043b\u044c"},{id:1,name:"\u0421\u043e\u043b\u044c"},{id:2,name:"\u0427\u0435\u0441\u043d\u043e\u043a"},{id:3,name:"\u041e\u043b\u0438\u0432\u043a\u043e\u0432\u043e\u0435 \u043c\u0430\u0441\u043b\u043e"},{id:4,name:"\u0422\u0432\u043e\u0440\u043e\u0436\u043d\u044b\u0439 \u0441\u044b\u0440"},{id:5,name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043b\u0443\u043a"}]},{id:5,name:"\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0430\u043b\u0430\u0442 ",description:"\u042d\u0442\u043e \u0440\u0435\u0446\u0435\u043f\u0442 \u0438\u0437 \u0441\u0442\u0430\u0440\u043e\u0439, \u043f\u0440\u0438\u0432\u0435\u0437\u0435\u043d\u043d\u043e\u0439 \u0438\u0437 \u0413\u0440\u0435\u0446\u0438\u0438, \u043a\u0443\u043b\u0438\u043d\u0430\u0440\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0438. \u0421\u0435\u043a\u0440\u0435\u0442 \u0441\u0430\u043b\u0430\u0442\u0430 \u2014 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0438\u0435 \u043e\u0432\u043e\u0449\u0438 \u0438 \u0445\u043e\u0440\u043e\u0448\u0430\u044f \u0444\u0435\u0442\u0430. ",image:"https://s1.eda.ru/StaticContent/Photos/120214131925/120214132229/p_O.jpg",price:350,ingredients:[{id:0,name:"\u041e\u043b\u0438\u0432\u043a\u043e\u0432\u043e\u0435 \u043c\u0430\u0441\u043b\u043e extra virgin"},{id:1,name:"\u041b\u0438\u043c\u043e\u043d\u043d\u044b\u0439 \u0441\u043e\u043a"},{id:2,name:"\u0427\u0435\u0441\u043d\u043e\u043a"},{id:3,name:"\u041f\u043e\u043c\u0438\u0434\u043e\u0440\u044b"},{id:4,name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043b\u0443\u043a"},{id:5,name:"\u0421\u044b\u0440 \u0444\u0435\u0442\u0430"},{id:6,name:"\u041c\u0430\u0441\u043b\u0438\u043d\u044b \u0431\u0435\u0437 \u043a\u043e\u0441\u0442\u043e\u0447\u0435\u043a"}]},{id:6,name:"\u041c\u0430\u0444\u0444\u0438\u043d\u044b \u0441 \u0433\u043e\u043b\u0443\u0431\u0438\u043a\u043e\u0439 \u0438 \u043c\u0443\u0441\u043a\u0430\u0442\u043d\u044b\u043c \u043e\u0440\u0435\u0445\u043e\u043c",description:"\u041a\u0443\u043b\u044c\u0442\u043e\u0432\u0430\u044f \u044f\u0433\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0430\u0443\u0447\u0438\u043b\u0438\u0441\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c \u043a\u0440\u0443\u0433\u043b\u044b\u0439 \u0433\u043e\u0434, \u0432 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0438 \u0441 \u0440\u044b\u0445\u043b\u044b\u043c \u0442\u0435\u0441\u0442\u043e\u043c \u2014 \u044d\u0442\u043e \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0431\u0435\u0441\u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0448\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442. \u041c\u0430\u0444\u0444\u0438\u043d\u044b \u0441 \u0433\u043e\u043b\u0443\u0431\u0438\u043a\u043e\u0439 \u0441\u0442\u0430\u043b\u0438 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u043c \u0434\u0435\u0441\u0435\u0440\u0442\u043e\u043c \u0432 \u0410\u043d\u0433\u043b\u0438\u0438 \u0438 \u0410\u043c\u0435\u0440\u0438\u043a\u0435, \u0445\u043e\u0442\u044f \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0438\u0445 \u0444\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u043e\u0435. \u0414\u0430 \u0438 \u0432\u043e\u043e\u0431\u0449\u0435 \u044d\u0442\u0438 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0435 \u0441\u043b\u0430\u0434\u043a\u0438\u0435 \u043a\u0435\u043a\u0441\u044b, \u043a\u0430\u043a\u0438\u043c\u0438 \u043c\u044b \u0438\u0445 \u0437\u043d\u0430\u0435\u043c \u0441\u0435\u0439\u0447\u0430\u0441, \u0437\u0430\u0434\u0443\u043c\u044b\u0432\u0430\u043b\u0438\u0441\u044c \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0445\u043b\u0435\u0431 \u0438 \u043d\u0430 \u0432\u043a\u0443\u0441 \u0431\u044b\u043b\u0438 \u043d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u044b.",image:"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg",price:170,ingredients:[{id:0,name:"\u0421\u043b\u0438\u0432\u043e\u0447\u043d\u043e\u0435 \u043c\u0430\u0441\u043b\u043e"},{id:1,name:"\u041f\u0448\u0435\u043d\u0438\u0447\u043d\u0430\u044f \u043c\u0443\u043a\u0430"},{id:2,name:"\u0413\u043e\u043b\u0443\u0431\u0438\u043a\u0430"},{id:3,name:"\u0412\u0430\u043d\u0438\u043b\u044c\u043d\u044b\u0439 \u044d\u043a\u0441\u0442\u0440\u0430\u043a\u0442"},{id:4,name:"\u041c\u0443\u0441\u043a\u0430\u0442\u043d\u044b\u0439 \u043e\u0440\u0435\u0445"}]},{id:7,name:"\u0410\u0437\u0443 \u043f\u043e\u2011\u0442\u0430\u0442\u0430\u0440\u0441\u043a\u0438",description:"\u041e\u0434\u043d\u043e \u0438\u0437 \u043d\u0435\u043c\u043d\u043e\u0433\u0438\u0445 \u0431\u043b\u044e\u0434, \u0443\u0434\u043e\u0441\u0442\u043e\u0438\u0432\u0448\u0438\u0445\u0441\u044f \u0432 \u0441\u043e\u0432\u0435\u0442\u0441\u043a\u043e\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u043e\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0438 \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u0441 \u0438\u043c\u0435\u043d\u043d\u043e\u0439 \u043d\u0430\u0440\u0435\u0437\u043a\u043e\u0439. \u0418 \u0434\u043e \u0441\u0438\u0445 \u043f\u043e\u0440 \u0432 \u043a\u0443\u043b\u0438\u043d\u0430\u0440\u0438\u044f\u0445 \u0438 \u0441\u0443\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442\u0430\u0445 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u0443, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0440\u0435\u0436\u0443\u0442 \u0441\u043e\u043b\u043e\u043c\u043a\u043e\u0439 \u0438 \u043f\u0440\u043e\u0434\u0430\u044e\u0442 \u043a\u0430\u043a \u0430\u0437\u0443. \u041d\u0430\u0441\u0447\u0435\u0442 \u0441\u0430\u043c\u043e\u0433\u043e \u0431\u043b\u044e\u0434\u0430 \u0434\u043e \u0441\u0438\u0445 \u043f\u043e\u0440 \u0438\u0434\u0443\u0442 \u0441\u043f\u043e\u0440\u044b, \u043a\u0430\u043a \u0438 \u0441 \u0447\u0435\u043c \u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c: \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u0443 \u0438\u043b\u0438 \u0431\u0430\u0440\u0430\u043d\u0438\u043d\u0443, \u0442\u043e\u043f\u043b\u0435\u043d\u043e\u0435 \u0438\u043b\u0438 \u043e\u0431\u044b\u0447\u043d\u043e\u0435 \u043c\u0430\u0441\u043b\u043e, \u0442\u0443\u0448\u0438\u0442\u044c \u0432 \u043a\u0430\u0437\u0430\u043d\u0435 \u0438\u043b\u0438 \u0441\u043e\u0442\u0435\u0439\u043d\u0438\u043a\u0435 \u0441 \u0442\u043e\u043b\u0441\u0442\u044b\u043c \u0434\u043d\u043e\u043c. \u0420\u0435\u0434\u0430\u043a\u0446\u0438\u0439 \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u044e\u0434\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u043d\u043e\u0433\u043e, \u043d\u043e \u043e\u0441\u043d\u043e\u0432\u0430 \u0435\u0433\u043e \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0435\u0438\u0437\u043c\u0435\u043d\u043d\u0430 \u2014 \u044d\u0442\u043e \u043d\u0430\u0440\u0435\u0437\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u043b\u043e\u043c\u043a\u043e\u0439 \u043c\u044f\u0441\u043e, \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c \u0438 \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u043e\u0443\u0441.",image:"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg",price:270,ingredients:[{id:0,name:"\u0413\u043e\u0432\u044f\u0434\u0438\u043d\u0430"},{id:1,name:"\u0421\u043e\u043b\u0435\u043d\u044b\u0435 \u043e\u0433\u0443\u0440\u0446\u044b"},{id:2,name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c"},{id:3,name:"\u041c\u044f\u0441\u043d\u043e\u0439 \u0431\u0443\u043b\u044c\u043e\u043d"},{id:4,name:"\u0427\u0435\u0441\u043d\u043e\u043a"}]},{id:8,name:"\u0416\u0430\u0440\u0435\u043d\u044b\u0439 \u0440\u0438\u0441 \u0441 \u044f\u0439\u0446\u043e\u043c \u043f\u043e\u2011\u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438",description:"\u0416\u0430\u0440\u0435\u043d\u044b\u0439 \u0440\u0438\u0441 \u2014 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442 \u0431\u043b\u044e\u0434 \u0432\u043e\u0441\u0442\u043e\u0447\u043d\u043e\u0430\u0437\u0438\u0430\u0442\u0441\u043a\u043e\u0439 \u043a\u0443\u0445\u043d\u0438 \u2014 \u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c, \u0432 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438, \u043c\u043e\u0436\u043d\u043e \u0438\u0437 \u043e\u0441\u0442\u0430\u0442\u043a\u043e\u0432 \u0432\u0447\u0435\u0440\u0430\u0448\u043d\u0435\u0433\u043e \u0443\u0436\u0438\u043d\u0430. \u0422\u043e\u043b\u044c\u043a\u043e \u0445\u043e\u0440\u043e\u0448\u043e \u043e\u0441\u0442\u044b\u0432\u0448\u0438\u0439, \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0441\u0432\u0430\u0440\u0435\u043d\u043d\u044b\u0439 \u0440\u0438\u0441, \u0432 \u0438\u0434\u0435\u0430\u043b\u0435 \u043f\u0440\u043e\u0441\u0442\u043e\u044f\u0432\u0448\u0438\u0439 \u0432\u0441\u044e \u043d\u043e\u0447\u044c \u0432 \u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a\u0435, \u043f\u0440\u0438 \u043f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u0438 \u0432 \u0440\u0430\u0441\u043a\u0430\u043b\u0435\u043d\u043d\u044b\u0439 \u0432\u043e\u043a \u043d\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u0437\u0435\u0442\u0441\u044f \u0434\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043a\u0430\u0448\u0438 \u0438 \u043d\u0435 \u043f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0441\u043a\u043e\u0432\u043e\u0440\u043e\u0434\u043a\u0438 \u0432 \u043d\u0435\u043f\u043e\u0432\u043e\u0440\u043e\u0442\u043b\u0438\u0432\u044b\u0439 \u0431\u0435\u0441\u0444\u043e\u0440\u043c\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043c.",image:"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg",price:240,ingredients:[{id:0,name:"\u041a\u0440\u0443\u0433\u043b\u044b\u0439 \u0440\u0438\u0441"},{id:1,name:"\u041c\u0438\u043d\u0438 \u0446\u0443\u043a\u0438\u043d\u0438"},{id:2,name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0441\u0442\u0440\u0443\u0447\u043a\u043e\u0432\u044b\u0439 \u043f\u0435\u0440\u0435\u0446"},{id:3,name:"\u0422\u0435\u0440\u0442\u044b\u0439 \u0438\u043c\u0431\u0438\u0440\u044c"},{id:4,name:"\u0413\u0440\u0438\u0431\u044b \u0448\u0438\u0438\u0442\u0430\u043a\u0435"},{id:5,name:"\u041b\u0435\u0433\u043a\u0438\u0439 \u0441\u043e\u0435\u0432\u044b\u0439 \u0441\u043e\u0443\u0441"},{id:6,name:"\u041a\u0443\u043d\u0436\u0443\u0442\u043d\u043e\u0435 \u043c\u0430\u0441\u043b\u043e"}]}],k=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={filter:""},t.handlerInputChange=function(e){var a=e.target,n=a.value,r=a.name;t.setState(Object(m.a)({},r,n))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.filter,a=function(e,a){return e.filter(function(e){return e.name.includes(a)})}(I,e);return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(h,{data:w}),r.a.createElement(O,{value:e,onFilter:this.handlerInputChange}),r.a.createElement(N,{data:a}),r.a.createElement(j,null),r.a.createElement(S,null))}}]),a}(n.Component);l.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[12,2,1]]]);
//# sourceMappingURL=main.de6e7faf.chunk.js.map