(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t){e.exports={dateFormat:e=>{let t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),s=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[s,a,n].join("-")},timeFormat:e=>{return new Date(1e3*e).toLocaleTimeString()},sunHours:e=>{const t=new Date(1e3*e);return t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}}},,,,,,,function(e,t,a){e.exports=a(29)},,,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),c=a.n(r);const o=Object(n.createContext)();const i={en:{loading_Weather_Info_title:"Loading Weather Information",loading_Weather_Info_p:"Please allow access to the browser location",feels_like:"feels like",humidity:"Humity",wind:"Wind",updated:"Updated at",sunrise:"Sunrise",sunset:"Sunset",sunHours:"{0} hr of sun"},es:{loading_Weather_Info_title:"Cargando informacion del Tiempo",loading_Weather_Info_p:"Por favor, permita el acceso de la ubicacion en el navegador",feels_like:"sensacion de",humidity:"Humedad",wind:"Viento",updated:"Actualizado a las",sunrise:"Salida",sunset:"Puesta",sunHours:"{0} hrs de sol"}};var l={openWeatherUrl:"https://api.openweathermap.org/data/2.5/",openWeatherApiKey:"7289e9613cb8f800099af227a5133275"},m=a(3),d=a.n(m),u=a(4);var h=function(){var e=Object(u.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.geolocation){e.next=4;break}return e.abrupt("return",new Promise((e,t)=>navigator.geolocation.getCurrentPosition(e,t)));case 4:return e.abrupt("return",new Promise(e=>e({})));case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();var p=function(){var e=Object(u.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),g=a(5),v=a(2);var E=e=>{const t=e.map(e=>({date:Object(v.dateFormat)(e.dt_txt.replace(/-/g,"/")),temp:e.main.temp})).reduce((e,t)=>{const a=e[t.date]||{date:e[t.date],temps:[]};return a.date=t.date,a.temps.push(t.temp),e[t.date]=a,e},{});return Object.keys(t).map(e=>({date:e,temps:t[e].temps})).map(e=>e.temps.reduce((t,a)=>(t.date=e.date,t.min=void 0===t.min||a<t.min?a:t.min,t.max=void 0===t.max||a>t.max?a:t.max,t),{}))};var f=e=>{const t=Object(g.a)(e,2),a=t[0],n=t[1],s=a.main,r=s.temp,c=s.feels_like,o=s.temp_max,i=s.temp_min,l=s.humidity,m=Object(g.a)(a.weather,1)[0],d=m.description,u=m.id,h=a.wind.speed,p=a.sys,f=p.country,b=p.sunrise,w=p.sunset,_=a.dt,x=a.name,N=a.coord,y=N.lat,k=N.lon,W=n.list;return{currentWeather:{temperature:r,feels_like:c,temp_max:o,temp_min:i,humidity:l,description:d,icon:u,wiSpeed:h,dt:Object(v.timeFormat)(_)},forecast:{list:E(W)},system:{country:f,city:x,sunHours:{sunrise:Object(v.timeFormat)(b),sunset:Object(v.timeFormat)(w),sunHours:Object(v.sunHours)(w-b)},geo:{lat:y,lon:k}}}};a(15);var b=()=>{const e=Object(n.useContext)(o).translatedText;return s.a.createElement("div",null,s.a.createElement("h1",null,e.loading_Weather_Info_title),s.a.createElement("p",null,e.loading_Weather_Info_p))},w=a(8),_=a.n(w);a(16);var x=e=>{const t=Object(n.useContext)(o).translatedText,a=e.temperature,r=e.feels_like,c=e.humidity,i=e.description,l=e.icon,m=e.wiSpeed,d=e.city,u=e.country,h=e.dt,p=e.sunHours,g=e.settings,v=e.refresh,E="metric"===g?"m/s":"mi/h",f=p.sunHours;return s.a.createElement("div",{className:"Current"},s.a.createElement("div",{className:"Country_City"},s.a.createElement("div",null,"".concat(d,", ").concat(u)),s.a.createElement("button",{onClick:v},"\u27f3")),s.a.createElement("div",{className:"Weather"},s.a.createElement("div",{className:"Temp"},s.a.createElement("div",{className:"Temp__Current"},a,"\xba"),s.a.createElement("div",{className:"Temp__Feels"},t.feels_like,": ",r,"\xba")),s.a.createElement("div",{className:"Icon"},s.a.createElement("div",{className:"Icon_Image"},s.a.createElement("i",{className:"owf owf-".concat(l," owf-8x")})),s.a.createElement("div",{className:"Description"},i))),s.a.createElement("div",{className:"Details"},s.a.createElement("div",{className:"Humidity"},t.humidity,": ",c,"%"),s.a.createElement("div",{className:"Wind"},t.wind,": ",m," ",E),s.a.createElement("div",{className:"Update"},t.updated,": ",h),s.a.createElement("div",{className:"SunHours"},s.a.createElement("div",{className:"extra__sun"},s.a.createElement("div",{className:"extra__sunrise"},t.sunrise,": ",p.sunrise),s.a.createElement("div",{className:"extra__sunset"},t.sunset,": ",p.sunset)),s.a.createElement("div",null,_()(t.sunHours,[f])))))},N=a(1),y=a.n(N);a(18),a(19),a(20),a(21),a(22),a(23),a(24),a(25);const k="rgba(245, 87, 66, 1)",W="rgba(255, 130, 20, 1)",j="rgba(240, 216, 0, 1)",C="rgba(62, 179, 62, 1)",O="rgba(0, 255, 244, 1)",F="rgba(0, 164, 255, 1)",D=(e,t)=>{const a="metric"===t?40:104,n="metric"===t?30:86,s="metric"===t?20:68,r="metric"===t?10:50,c="metric"===t?0:32;return e>=a?k:n<=e&&e<a?W:s<=e&&e<n?j:r<=e&&e<s?C:c<=e&&e<r?O:e<c?F:void 0};var H=e=>{const t=e.list,a=e.settings,r=Object(n.useContext)(o).lang;return y.a.locale(r),s.a.createElement("div",{className:"Forecast"},s.a.createElement("div",{className:"graphic"},((e,t)=>{const a=e.map(e=>e.max).reduce((e,t)=>Math.max(e,t));return e.map(e=>{const n=e.max/a*80;return s.a.createElement("div",{key:e.date,className:"row"},s.a.createElement("h6",null,y()(e.date).format("ddd, Do")),s.a.createElement("div",{className:"dayForecast"},s.a.createElement("span",{className:"min"},e.min),s.a.createElement("span",{className:"max",style:{width:"".concat(n,"%"),background:"linear-gradient(90deg, ".concat(D(-2,t)," 0%, ").concat(D(4,t)," 15%, ").concat(D(e.max,t)," 100%)")}},e.max)))})})(t,a)))};a(26);var T=({isF:e,handleToggle:t})=>s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:"mesureLabel"},"C"),s.a.createElement("input",{checked:e,onChange:t,className:"react-switch-checkbox",id:"react-switch-new",type:"checkbox"}),s.a.createElement("label",{className:"react-switch-label",htmlFor:"react-switch-new"},s.a.createElement("span",{className:"react-switch-button"})),s.a.createElement("span",{className:"mesureLabel"},"F"));a(27);var S=class extends n.Component{constructor(...e){super(...e),this.state={isExpanded:!1},this.handleOpen=(()=>{const e=this.state.isExpanded;this.setState({isExpanded:!e})})}render(){const e=this.state.isExpanded,t=this.props,a=t.handleToggleChange,n=t.isF;return s.a.createElement("nav",{className:"Nav"},s.a.createElement("div",{className:"navbar-home"},s.a.createElement("button",{className:"toggle",onClick:this.handleOpen},"\u2630")),s.a.createElement("ul",{className:"navbar-links "+(e?"opened":"")},s.a.createElement("li",{className:"navbar-link"},s.a.createElement(T,{isF:n,handleToggle:a}))))}};a(28);const I=navigator.language?navigator.language.slice(0,2):"en",P={lang:I,translatedText:i[I]};class U extends s.a.Component{constructor(...e){super(...e),this.state={loading:!0,settings:"metric",weatherData:{currentWeather:[],forecast:[],system:[]}},this.handleToggle=(e=>{const t=e.target.checked;this.setState({settings:!0===t?"imperial":"metric"})}),this.handleRefresh=(()=>{const e=this.state,t=e.weatherData.system.geo,a=t.lat,n=t.lon,s=e.settings,r="".concat(l.openWeatherUrl,"weather?lat=").concat(a,"&lon=").concat(n,"&units=").concat(s,"&lang=").concat(I,"&appid=").concat(l.openWeatherApiKey),c="".concat(l.openWeatherUrl,"forecast?lat=").concat(a,"&lon=").concat(n,"&units=").concat(s,"&lang=").concat(I,"&appid=").concat(l.openWeatherApiKey);try{Promise.all([p(r),p(c)]).then(e=>f(e)).then(e=>{this.setState({weatherData:e,loading:!1})})}catch(o){console.log(o)}})}componentDidMount(){const e=this.state.settings;h().then(e=>({lat:e.coords.latitude,long:e.coords.longitude})).then(t=>{const a="".concat(l.openWeatherUrl,"weather?lat=").concat(t.lat,"&lon=").concat(t.long,"&units=").concat(e,"&lang=").concat(I,"&appid=").concat(l.openWeatherApiKey),n="".concat(l.openWeatherUrl,"forecast?lat=").concat(t.lat,"&lon=").concat(t.long,"&units=").concat(e,"&lang=").concat(I,"&appid=").concat(l.openWeatherApiKey);return Promise.all([p(a),p(n)])}).then(e=>f(e)).then(e=>{this.setState({weatherData:e,loading:!1})}).catch(e=>console.log("there was an error: ".concat(e.code," ; ").concat(e.message)))}componentDidUpdate(e,t){t.settings!==this.state.settings&&this.handleRefresh()}render(){const e=this.state,t=e.loading,a=e.settings,n=e.weatherData,r=n.currentWeather,c=n.system,i=n.forecast,l="metric"!==a;return t?s.a.createElement(o.Provider,{value:P},s.a.createElement(b,null)):s.a.createElement(o.Provider,{value:P},s.a.createElement("div",{className:"background"},s.a.createElement("div",{className:"grid-container"},s.a.createElement(S,{isF:l,handleToggleChange:this.handleToggle}),s.a.createElement(x,Object.assign({},r,c,{settings:a,refresh:this.handleRefresh})),s.a.createElement(H,Object.assign({},i,{settings:a})))))}}const A=document.getElementById("root");c.a.render(s.a.createElement(U,null),A)}],[[9,1,2]]]);
//# sourceMappingURL=main.67b95516.chunk.js.map