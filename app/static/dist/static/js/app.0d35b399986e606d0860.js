webpackJsonp([1],{"/ug4":function(t,a){},BR9o:function(t,a){},Cz8s:function(t,a,s){"use strict";var e={data:function(){return{isShow:!1}},props:["name"],methods:{showBar:function(){this.isShow=!this.isShow},logout:function(){window.localStorage.removeItem("name"),window.localStorage.removeItem("id"),this.$router.push({path:"login"})}}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("router-link",{staticClass:"left setting",attrs:{to:"/index"}},[s("i",{staticClass:"fa fa-th-large"})]),t._v(" "),s("div",{staticClass:"right"},[s("a",{staticClass:"login",on:{click:t.showBar}},[t._v(t._s(t.name))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"mine_bar"},[s("ul",{staticClass:"mine_bar_list"},[s("li",[s("router-link",{attrs:{to:"/authorize"}},[s("i",{staticClass:"fa fa-tasks"}),t._v("   Authorize")])],1),t._v(" "),s("li",[s("a",{on:{click:t.logout}},[s("i",{staticClass:"fa fa-sign-out"}),t._v("   Log out")])])])])],1)},staticRenderFns:[]};var n=s("VU/8")(e,i,!1,function(t){s("ismA")},"data-v-19a6d008",null);a.a=n.exports},Eun7:function(t,a){},"J+ji":function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},i,!1,function(t){s("BR9o")},null,null).exports,o=s("/ocq"),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"login_box"},[a("div",{staticClass:"login_header"},[this._v("Login")]),this._v(" "),a("a",{staticClass:"login",attrs:{href:"/login/facebook"}},[this._v(" Login with Facebook"),a("a",{staticClass:"facebook_logo"},[a("i",{staticClass:"fa fa-facebook-square"})])])])}]};var r=s("VU/8")({data:function(){return{}},methods:{}},c,!1,function(t){s("u4MB")},"data-v-f7b660e0",null).exports,l=s("Cz8s"),d={name:"index",data:function(){return{name:"",id:"",activeTab:"day",tweets:0,mentions:0,posts:0,daily:{},dailyMoods:[],periodMoods:[],signDays:null,event:1,events:[{events:1},{events:""},{events:""},{events:""},{events:""},{events:""},{events:""}],maxTemp:[{temp:"23℃"},{temp:""},{temp:"21℃"},{temp:""},{temp:"18℃"},{temp:"19℃"},{temp:""}],minTemp:[{temp:"13℃"},{temp:""},{temp:"11℃"},{temp:""},{temp:"8℃"},{temp:"9℃"},{temp:""}],Precip:[{precip:"0.01"},{precip:""},{precip:"0.005"},{precip:""},{precip:"0.0"},{precip:""},{precip:"0.0"}],press:[{press:"1.016"},{press:"1.028"},{press:""},{press:"1.020"},{press:""},{press:"1.017"},{press:""}],cloud:[{cloud:"13%"},{cloud:""},{cloud:"3%"},{cloud:"5%"},{cloud:"20%"},{cloud:"1.017"},{cloud:""}],humid:[{humid:"49%"},{humid:""},{humid:"43%"},{humid:"57%"},{humid:""},{humid:"60%"},{humid:"40%"}],wind:[{wind:"0.8"},{wind:"0.3"},{wind:"1.1"},{wind:""},{wind:"1.9"},{wind:"0.6"},{wind:""}],dayLength:[{day_length:"10:28"},{day_length:"10:18"},{day_length:""},{day_length:"09:50"},{day_length:"09:45"},{day_length:""},{day_length:"09:38"}],longitude:"",latitude:""}},mounted:function(){this.name=this.$route.query.name||window.localStorage.getItem("name"),this.id=this.$route.query.id||window.localStorage.getItem("id"),window.localStorage.setItem("name",this.name),window.localStorage.setItem("id",this.id),this.changeTab("day")},methods:{changeTab:function(t){this.activeTab=t;var a=this.formatTime(new Date);this.getTwitter(a,t),this.getFacebook(a,t),this.getWeather(),this.getMood(a,t)},getTwitter:function(t,a){var s=this;this.$axios.get(this.api+"/user/"+this.id+"/twitter/summary",{params:{datetime:t,period:a}}).then(function(t){200==t.status&&(s.tweets=t.data.tweets,s.mentions=t.data.mentions)})},getFacebook:function(t,a){var s=this;this.$axios.get(this.api+"/user/"+this.id+"/facebook/summary",{params:{datetime:t,period:a}}).then(function(t){200==t.status&&(s.posts=t.data.posts)})},getLocation:function(t,a){var s=new google.maps.LatLng(t,a),e={zoom:16,center:s,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!0},i=new google.maps.Map(document.getElementById("map"),e);new google.maps.Marker({position:s,map:i})},getWeather:function(){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(a){var s=a.coords.longitude,e=a.coords.latitude;console.log(e+"--"+s),t.getLocation(e,s),t.$axios.post(t.api+"/user/"+t.id+"/location_and_weather/create",{longitude:s,latitude:e}).then(function(a){200==a.status&&(t.daily=a.data.data[0],t.daily.dailyLength=t.dailyLength(t.daily.sunsetTime,t.daily.sunriseTime))})},function(a){t.$toast({message:"Error : "+a.message,duration:5e3})}):t.$toast("Sorry Browser not support!")},getMood:function(t,a){"day"==a?this.getDayMood(t):this.getPeriodMood(t,a)},getDayMood:function(t){var a=this;this.$axios.get(this.api+"/user/"+this.id+"/mood/list",{params:{datetime:t}}).then(function(t){a.dailyMoods=t.data})},getPeriodMood:function(t,a){var s=this;if("month"==a)var e=new Date,i=(e.getDate(),e.getMonth()+1),n=e.getFullYear();var o=a;this.$axios.get(this.api+"/user/"+this.id+"/mood/average/list",{params:{datetime:t,period:a}}).then(function(t){if(s.periodMoods=t.data,"week"==o){for(var a=[],e=0;e<7;e++){a[e]={};for(var c=0;c<s.periodMoods.length;c++)s.periodMoods[c].day!=e+1||(a[e]=s.periodMoods[c])}s.periodMoods=a}else"month"==o&&s.buildCal(n,i,s.periodMoods,[])})},formatTime:function(t){var a=t.getFullYear(),s=t.getMonth()+1,e=t.getDate(),i=t.getHours(),n=t.getMinutes(),o=t.getSeconds();return[a,s,e].map(this.formatNumber).join("-")+" "+[i,n,o].map(this.formatNumber).join(":")+String(t).slice(String(t).indexOf("GMT")+3,String(t).indexOf("GMT")+8)},formatNumber:function(t){return(t=t.toString())[1]?t:"0"+t},dailyLength:function(t,a){return parseInt((t-a)/3600)+":"+parseInt((t-a)%3600/60)+":"+(t-a)%3600%60},buildCal:function(t,a,s,e){var i=new Array;i[0]=new Array(7),i[1]=new Array(7),i[2]=new Array(7),i[3]=new Array(7),i[4]=new Array(7),i[5]=new Array(7);var n,o,c=new Date(t,a-1,1),r=c.getDay(),l=new Date(c.getFullYear(),c.getMonth()+1,0).getDate(),d=t,_=1;for(n=r-1;n<7;n++){i[0][n]={moodday:!1,normalday:_};for(var v=0;v<s.length;v++){s[v].day!=_||(i[0][n]={moodday:s[v].score,normalday:_})}_++}for(o=1;o<6;o++)for(n=0;n<7;n++)if(_<=d){i[o][n]={moodday:!1,normalday:_};for(v=0;v<s.length;v++){s[v].day!=_||(i[o][n]={moodday:s[v].score,normalday:_})}if(_==l)return this.signDays=i,i;_++}},updateData:function(t){"facebook"==t&&this.updateFacebook()},updateFacebook:function(){var t=this;this.$indicator.open({spinnerType:"fading-circle"}),this.$axios.get(this.api+"/user/"+this.id+"/facebook/posts/update").then(function(a){t.$indicator.close(),200==a.status&&"success"==a.data.msg?t.$toast({message:"Update success",duration:5e3}):t.$toast({message:"Update failed",duration:5e3})}).catch(function(a){t.$indicator.close(),t.$toast({message:"Server error",duration:5e3})})}},components:{navHeader:l.a}},_={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav-header",{attrs:{name:t.name}}),t._v(" "),s("div",{staticClass:"tabs"},[s("div",{staticClass:"tab",class:"day"==t.activeTab?"active":"",on:{click:function(a){t.changeTab("day")}}},[t._v("Day")]),t._v(" "),s("div",{staticClass:"tab",class:"week"==t.activeTab?"active":"",on:{click:function(a){t.changeTab("week")}}},[t._v("Week")]),t._v(" "),s("div",{staticClass:"tab",class:"month"==t.activeTab?"active":"",on:{click:function(a){t.changeTab("month")}}},[t._v("Month")])]),t._v(" "),s("div",{staticClass:"content index_content"},[s("transition",{attrs:{name:"fade",mode:"in-out"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:"day"==t.activeTab,expression:"activeTab=='day'"}]},[s("div",{staticClass:"content_box"},[s("h4",[t._v("FaceBook")]),t._v(" "),s("div",{staticClass:"content_box_inner"},[s("div",{staticClass:"line clearfix"},[s("div",{staticClass:"left left_table"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("td",{staticClass:"left",attrs:{valign:"bottom"}},[s("b",[t._v(t._s(t.posts))]),t._v(" FB posts")]),t._v(" "),s("td",{staticClass:"right",attrs:{valign:"bottom"}})]),t._v(" "),s("tr",[s("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[s("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#4E7CA0"}})])])])])]),t._v(" "),s("div",{staticClass:"right right_icon"},[s("i",{staticClass:"fa fa-facebook-square FB"})])]),t._v(" "),s("div",{staticClass:"connector"},[s("i",{staticClass:"fa fa-exchange"}),t._v("\n              FaceBook\n              "),s("a",{staticClass:"authorize",on:{click:function(a){t.updateData("facebook")}}},[t._v("\n               Update data\n              ")])]),t._v(" "),s("div",{staticClass:"chart"})])]),t._v(" "),s("div",{staticClass:"content_box"},[s("h4",[t._v("Twitter")]),t._v(" "),s("div",{staticClass:"content_box_inner"},[s("div",{staticClass:"line clearfix"},[s("div",{staticClass:"left left_table"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("td",{staticClass:"left",attrs:{valign:"bottom"}},[s("b",[t._v(t._s(t.tweets))]),t._v(" tweets")])]),t._v(" "),s("tr",[s("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[s("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#55acee"}})])])])]),t._v(" "),s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("td",{staticClass:"left",attrs:{valign:"bottom"}},[s("b",[t._v(t._s(t.mentions))]),t._v(" mentions")])]),t._v(" "),s("tr",[s("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[s("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#55acee"}})])])])])]),t._v(" "),s("div",{staticClass:"right right_icon"},[s("i",{staticClass:"fa fa-twitter-square"})])]),t._v(" "),s("div",{staticClass:"connector"},[s("i",{staticClass:"fa fa-exchange"}),t._v("\n              Twitter\n              ")]),t._v(" "),s("div",{staticClass:"chart"})])]),t._v(" "),s("div",{staticClass:"content_box"},[s("h4",[t._v("Mood")]),t._v(" "),s("div",{staticClass:"content_box_inner"},[0==t.dailyMoods.length?s("div",{staticClass:"mood clearfix"},[s("div",{staticClass:"mood_number"}),t._v(" "),s("div",{staticClass:"mood_content"},[s("p",[t._v("No note")])])]):t._e(),t._v(" "),t._l(t.dailyMoods,function(a,e){return s("div",{key:e,staticClass:"mood clearfix"},[s("div",{staticClass:"mood_number",class:"mood_"+a.score},[t._v(t._s(a.score))]),t._v(" "),s("div",{staticClass:"mood_content"},[s("h3",[t._v(t._s(t.formatTime(new Date(a.datetime)).slice(0,-5)))]),t._v(" "),s("p",[t._v(t._s(a.detail?a.detail:"No note"))])])])}),t._v(" "),s("router-link",{staticClass:"edit_mood",attrs:{to:"/edit_mood"}},[s("i",{staticClass:"fa fa-pencil"}),t._v("\n              Rate day\n            ")]),t._v(" "),s("div",{staticClass:"chart"})],2)]),t._v(" "),s("div",{staticClass:"content_box"},[s("h4",[t._v("Location")]),t._v(" "),s("div",{staticClass:"content_box_inner"},[s("div",{staticStyle:{display:"block",height:"3rem",width:"100%"},attrs:{id:"map"}}),t._v(" "),s("div",{staticClass:"chart"})])]),t._v(" "),s("div",{staticClass:"content_box"},[s("h4",[t._v("Weather")]),t._v(" "),s("div",{staticClass:"content_box_inner"},[s("div",{staticClass:"line clearfix"},[s("div",{staticClass:"left left_table"},[s("div",{staticClass:"temp"},[s("span",{staticClass:"min_temp"},[t._v(t._s(t.daily.temperatureMin))]),t._v(" / "),s("span",{staticClass:"max_temp"},[t._v(t._s(t.daily.temperatureMax))]),t._v(" ℃")]),t._v(" "),s("ul",{staticClass:"weather_tab clearfix"},[s("li",[t._v("Precipitation "),s("span",{staticClass:"weather_num"},[t._v(t._s(t.daily.precipIntensity))])]),t._v(" "),s("li",[t._v("Air pressure "),s("span",{staticClass:"weather_num"},[t._v(t._s(t.daily.pressure))])]),t._v(" "),s("li",[t._v("Cloud cover "),s("span",{staticClass:"weather_num"},[t._v(t._s(t.daily.cloudCover))])]),t._v(" "),s("li",[t._v("Humidity "),s("span",{staticClass:"weather_num"},[t._v(t._s(t.daily.humidity))])]),t._v(" "),s("li",[t._v("Wind speed "),s("span",{staticClass:"weather_num"},[t._v(t._s(t.daily.windSpeed))])]),t._v(" "),s("li",[t._v("Day length "),s("span",{staticClass:"weather_num"},[t._v(t._s(t.daily.dailyLength))])])]),t._v(" "),s("p",{staticClass:"weather_summary"},[t._v(t._s(t.daily.summary))])]),t._v(" "),s("div",{staticClass:"right right_icon"},[s("i",{staticClass:"fa fa-sun-o weather"})])]),t._v(" "),s("div",{staticClass:"connector"},[s("i",{staticClass:"fa fa-exchange"}),t._v("\n              Dark Sky\n            ")]),t._v(" "),s("div",{staticClass:"chart"})])])])]),t._v(" "),s("transition",{attrs:{name:"fade",mode:"in-out"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:"week"==t.activeTab,expression:"activeTab=='week'"}]},[s("div",{staticClass:"content_box"},[s("h4",[t._v("Posts for this week")]),t._v(" "),s("div",{staticClass:"content_box_inner"},[s("div",{staticClass:"line clearfix"},[s("div",{staticClass:"left left_table"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("td",{staticClass:"left",attrs:{valign:"bottom"}},[s("b",[t._v(t._s(t.posts))]),t._v(" FB posts")]),t._v(" "),s("td",{staticClass:"right",attrs:{valign:"bottom"}})]),t._v(" "),s("tr",[s("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[s("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#4E7CA0"}})])])])])]),t._v(" "),s("div",{staticClass:"right right_icon"},[s("i",{staticClass:"fa fa-facebook-square FB"})])])])]),t._v(" "),s("div",{staticClass:"content_box"},[s("h4",[t._v("Tweets and  mentions for this week")]),t._v(" "),s("div",{staticClass:"content_box_inner"},[s("div",{staticClass:"line clearfix"},[s("div",{staticClass:"left left_table"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("td",{staticClass:"left",attrs:{valign:"bottom"}},[s("b",[t._v(t._s(t.tweets))]),t._v(" tweets")])]),t._v(" "),s("tr",[s("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[s("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#55acee"}})])])])]),t._v(" "),s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("td",{staticClass:"left",attrs:{valign:"bottom"}},[s("b",[t._v(t._s(t.mentions))]),t._v(" mentions")])]),t._v(" "),s("tr",[s("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[s("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#55acee"}})])])])])]),t._v(" "),s("div",{staticClass:"right right_icon"},[s("i",{staticClass:"fa fa-twitter-square"})])])])]),t._v(" "),s("div",{staticClass:"content_box"},[s("h4",[t._v("Others for this week")]),t._v(" "),s("div",{staticClass:"content_box_inner"},[s("div",{staticClass:"calendar_wrapper"},[s("div",{staticClass:"week_day"},[s("div",{staticClass:"weeklist"},[t._v("MON")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("TUE")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("WED")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("THU")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("FRI")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("SAT")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("SUN")])])]),t._v(" "),s("div",{staticClass:"line"},[s("h3",{staticClass:"chart_header"},[t._v("Mood")]),t._v(" "),s("div",{staticClass:"calendar_wrapper"},[s("div",{staticClass:"week_day border-bottom"},t._l(t.periodMoods,function(a,e){return s("div",{key:e,staticClass:"weeklist"},[s("a",{staticClass:" chart_number mood_number",class:a.day?"mood-"+a.score:""},[t._v(t._s(a.day?a.score:""))])])}))])]),t._v(" "),s("div",{staticClass:"line"},[s("h3",{staticClass:"chart_header"},[s("i",{staticClass:"fa fa-sun-o weather_icon"}),t._v("Weather")]),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Max temp")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.maxTemp,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.temp?"max_temp_active":""},[t._v(t._s(null==a?"":a.temp)+"\n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Min temp")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.minTemp,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.temp?"min_temp_active":""},[t._v(t._s(null==a?"":a.temp)+" \n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Precipitation")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.Precip,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.precip?"precip_active":""},[t._v(t._s(null==a?"":a.precip)+"\n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Air pressure")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.press,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.press?"press_active":""},[t._v(t._s(null==a?"":a.press)+"\n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Cloud cover")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.cloud,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.cloud?"cloud_active":""},[t._v(t._s(null==a?"":a.cloud)+"\n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Humidity")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.humid,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.humid?"humid_active":""},[t._v(t._s(null==a?"":a.humid)+"\n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Wind speed")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.wind,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.wind?"wind_active":""},[t._v(t._s(null==a?"":a.wind)+"\n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Day length")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.dayLength,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.day_length?"day_length_active":""},[t._v(t._s(null==a?"":a.day_length)+"\n                ")])}))])])])])]),t._v(" "),s("transition",{attrs:{name:"fade",mode:"in-out"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:"month"==t.activeTab,expression:"activeTab=='month'"}]},[s("div",{staticClass:"content_box"},[s("h4",[t._v("Posts for this month")]),t._v(" "),s("div",{staticClass:"content_box_inner"},[s("div",{staticClass:"line clearfix"},[s("div",{staticClass:"left left_table"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("td",{staticClass:"left",attrs:{valign:"bottom"}},[s("b",[t._v(t._s(t.posts))]),t._v(" FB posts")]),t._v(" "),s("td",{staticClass:"right",attrs:{valign:"bottom"}})]),t._v(" "),s("tr",[s("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[s("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#4E7CA0"}})])])])])]),t._v(" "),s("div",{staticClass:"right right_icon"},[s("i",{staticClass:"fa fa-facebook-square FB"})])])])]),t._v(" "),s("div",{staticClass:"content_box"},[s("h4",[t._v("Tweets and mentions for this month")]),t._v(" "),s("div",{staticClass:"content_box_inner"},[s("div",{staticClass:"line clearfix"},[s("div",{staticClass:"left left_table"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("td",{staticClass:"left",attrs:{valign:"bottom"}},[s("b",[t._v(t._s(t.tweets))]),t._v(" tweets")])]),t._v(" "),s("tr",[s("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[s("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#55acee"}})])])])]),t._v(" "),s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("td",{staticClass:"left",attrs:{valign:"bottom"}},[s("b",[t._v(t._s(t.mentions))]),t._v(" mentions")])]),t._v(" "),s("tr",[s("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[s("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#55acee"}})])])])])]),t._v(" "),s("div",{staticClass:"right right_icon"},[s("i",{staticClass:"fa fa-twitter-square"})])])])]),t._v(" "),s("div",{staticClass:"content_box"},[s("h4",[t._v("Moods for this month")]),t._v(" "),s("div",{staticClass:"content_box_inner"},[s("div",{staticClass:"calendar_wrapper"},[s("div",{staticClass:"week_day"},[s("div",{staticClass:"weeklist"},[t._v("MON")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("TUE")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("WED")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("THU")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("FRI")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("SAT")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("SUN")])]),t._v(" "),t._l(t.signDays,function(a,e){return s("div",{key:e,staticClass:"month_day"},t._l(a,function(a,e){return s("div",{key:e,staticClass:"day_list"},[null!=a&&a.normalday?s("a",{staticClass:"mood_a",class:a.moodday?"mood-"+a.moodday:""},[t._v(t._s(null==a?"":a.normalday))]):t._e()])}))})],2)])]),t._v(" "),s("div",{staticClass:"content_box"},[s("h4",[t._v("Weather for this month")]),t._v(" "),s("div",{staticClass:"content_box_inner"},[s("div",{staticClass:"calendar_wrapper"},[s("div",{staticClass:"week_day"},[s("div",{staticClass:"weeklist"},[t._v("MON")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("TUE")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("WED")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("THU")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("FRI")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("SAT")]),t._v(" "),s("div",{staticClass:"weeklist"},[t._v("SUN")])])]),t._v(" "),s("div",{staticClass:"line"},[s("h3",{staticClass:"chart_header"},[s("i",{staticClass:"fa fa-sun-o weather_icon"}),t._v("Weather")]),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Max temp")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.maxTemp,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.temp?"max_temp_active":""},[t._v(t._s(null==a?"":a.temp)+"\n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Min temp")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.minTemp,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.temp?"min_temp_active":""},[t._v(t._s(null==a?"":a.temp)+" \n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Precipitation")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.Precip,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.precip?"precip_active":""},[t._v(t._s(null==a?"":a.precip)+"\n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Air pressure")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.press,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.press?"press_active":""},[t._v(t._s(null==a?"":a.press)+"\n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Cloud cover")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.cloud,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.cloud?"cloud_active":""},[t._v(t._s(null==a?"":a.cloud)+"\n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Humidity")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.humid,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.humid?"humid_active":""},[t._v(t._s(null==a?"":a.humid)+"\n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Wind speed")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.wind,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.wind?"wind_active":""},[t._v(t._s(null==a?"":a.wind)+"\n                ")])})),t._v(" "),s("p",{staticClass:"chart_totals"},[t._v("Day length")]),t._v(" "),s("div",{staticClass:"month_day"},t._l(t.dayLength,function(a,e){return s("div",{key:e,staticClass:"day_list chart_number",class:a.day_length?"day_length_active":""},[t._v(t._s(null==a?"":a.day_length)+"\n                ")])}))])])])])])],1)],1)},staticRenderFns:[]};var v=s("VU/8")(d,_,!1,function(t){s("/ug4")},"data-v-078d9e31",null).exports,u={name:"index",data:function(){return{name:"",id:"",facebook_auth:!1,twitter_auth:!1}},mounted:function(){this.name=window.localStorage.getItem("name"),this.id=window.localStorage.getItem("id"),this.getAuthorize()},methods:{getAuthorize:function(){var t=this;this.$indicator.open({spinnerType:"fading-circle"}),this.$axios.get(this.api+"/user/"+this.id+"/authorized").then(function(a){t.$indicator.close(),200==a.status&&(t.facebook_auth=a.data.facebook_auth,t.twitter_auth=a.data.twitter_auth)}).catch(function(a){t.$indicator.close(),t.$toast({message:"Server error",duration:5e3})})},updateData:function(t){"facebook"==t?this.updateFacebook():"twitter"==t&&this.updateTweets()},updateFacebook:function(){var t=this;this.$indicator.open({spinnerType:"fading-circle"}),this.$axios.get(this.api+"/user/"+this.id+"/facebook/posts/update").then(function(a){t.$indicator.close(),200==a.status&&"success"==a.data.msg?t.$toast({message:"Update success",duration:5e3}):t.$toast({message:"Update failed",duration:5e3})}).catch(function(a){t.$indicator.close(),t.$toast({message:"Server error",duration:5e3})})},updateTweets:function(){var t=this;this.$indicator.open({spinnerType:"fading-circle"}),this.$axios.get(this.api+"/user/"+this.id+"/twitter/user_timeline/update").then(function(a){t.$indicator.close(),200==a.status&&"success"==a.data.msg?t.$toast({message:"Update success",duration:5e3}):t.$toast({message:"Update failed",duration:5e3})}).catch(function(a){t.$indicator.close(),t.$toast({message:"Server error",duration:5e3})})},updateMetions:function(){var t=this;this.$indicator.open({spinnerType:"fading-circle"}),this.$axios.get(this.api+"/user/"+this.id+"/twitter/mentions_timeline/update").then(function(a){t.$indicator.close(),200==a.status&&"success"==a.data.msg?t.$toast({message:"Update success",duration:5e3}):t.$toast({message:"Update failed",duration:5e3})}).catch(function(a){t.$indicator.close(),t.$toast({message:"Server error",duration:5e3})})}},components:{navHeader:l.a}},h={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav-header",{attrs:{name:t.name}}),t._v(" "),s("div",{staticClass:"content"},[s("h3",{staticClass:"connect_authorize"},[t._v("CONNECT AUTHORIZE")]),t._v(" "),s("div",{staticClass:"authorize_box"},[s("div",{staticClass:"authorize_meta facebook"},[t._v("\n      facebook ")]),t._v(" "),t._m(0),t._v(" "),t.facebook_auth?t._e():s("a",{staticClass:"authorize_connect"},[s("i",{staticClass:"fa fa-plus"}),t._v(" \n      Authorize\n    ")]),t._v(" "),t.facebook_auth?s("a",{staticClass:"authorize_connect"},[t._v("\n      Authorized\n    ")]):t._e()]),t._v(" "),s("div",{staticClass:"authorize_box"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t.twitter_auth?t._e():s("a",{staticClass:"authorize_connect",attrs:{href:"/login/twitter"}},[s("i",{staticClass:"fa fa-plus"}),t._v(" \n      Authorize\n    ")]),t._v(" "),t.twitter_auth?s("a",{staticClass:"authorize_connect"},[t._v("\n      Authorized\n    ")]):t._e()])])],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("TRACKS")]),s("strong",[t._v("Posts, comments, reactions")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("REQUIRES")]),s("strong",[t._v("Facebook account")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("PROVIDING")]),s("strong",[t._v("Facebook posts")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"authorize_meta"},[this._v("\n      Twitter   "),a("i",{staticClass:"fa fa-twitter twitter_logo"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("TRACKS")]),s("strong",[t._v("Tweets,metions")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("REQUIRES")]),s("strong",[t._v("Twitter account")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("PROVIDING")]),s("strong",[t._v("Tweets")])])])}]};var m=s("VU/8")(u,h,!1,function(t){s("Eun7")},"data-v-0678be58",null).exports,p=s("PEHT"),f={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav-header",{attrs:{name:t.name}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"content_box"},[s("h4",[t._v(t._s(t.date))]),t._v(" "),s("div",{staticClass:"content_box_inner"},[s("div",{staticClass:"basic"},[s("b",[t._v("Mood:")]),t._v(" "),s("ul",{staticClass:"mood_rate clearfix",attrs:{id:"mood_select"}},[s("li",{staticClass:"mood-1",on:{click:function(a){t.selected(a,1)}}},[t._v("1")]),t._v(" "),s("li",{staticClass:"mood-2",on:{click:function(a){t.selected(a,2)}}},[t._v("2")]),t._v(" "),s("li",{staticClass:"mood-3",on:{click:function(a){t.selected(a,3)}}},[t._v("3")]),t._v(" "),s("li",{staticClass:"mood-4",on:{click:function(a){t.selected(a,4)}}},[t._v("4")]),t._v(" "),s("li",{staticClass:"mood-5",on:{click:function(a){t.selected(a,5)}}},[t._v("5")])]),t._v(" "),s("div",{staticClass:"form-group"},[s("b",[t._v("Note:")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],staticClass:"form-control",attrs:{rows:"4",name:"note",maxlength:"240"},domProps:{value:t.note},on:{input:function(a){a.target.composing||(t.note=a.target.value)}}})]),t._v(" "),s("p",[s("button",{staticClass:"save",attrs:{type:"submit",name:"submit"},on:{click:t.save}},[s("i",{staticClass:"fa fa-check"}),t._v(" Save\n            ")]),t._v("\n            or "),s("a",{staticClass:"cancel",on:{click:t.cancel}},[t._v("Cancel")])])])])])])],1)},staticRenderFns:[]};var C=function(t){s("J+ji")},g=s("VU/8")(p.a,f,!1,C,"data-v-755cf696",null).exports;e.default.use(o.a);var b=new o.a({routes:[{path:"/",name:"login",component:r},{path:"/login",name:"login",component:r},{path:"/index",name:"index",component:v},{path:"/authorize",name:"authorize",component:m},{path:"/edit_mood",name:"edit_mood",component:g}]}),y=s("mtWM"),w=s.n(y),k=s("Au9i"),x=s.n(k);s("d8/S"),s("UBJh");e.default.prototype.$axios=w.a,e.default.use(x.a),e.default.config.productionTip=!1,e.default.prototype.api="",new e.default({el:"#app",router:b,components:{App:n},template:"<App/>"})},PEHT:function(t,a,s){"use strict";(function(t){var e=s("Cz8s");a.a={name:"index",data:function(){return{name:"",id:"",date:"",score:"",note:""}},mounted:function(){this.name=window.localStorage.getItem("name"),this.id=window.localStorage.getItem("id"),this.date=this.formatDate(new Date)},methods:{selected:function(a,s){this.score=s;var e=a.target;t(e).removeClass("noselected").addClass("selected").siblings().removeClass("selected").addClass("noselected")},save:function(){var t=this;this.score?this.$axios.post(this.api+"/user/"+this.id+"/mood/create",{detail:this.note,score:this.score}).then(function(a){200==a.status&&"success"===a.data.msg?(t.$toast("Save success!"),t.$router.push({path:"/index"})):t.$toast("error: save failed! Please try again!")}).catch(function(a){t.$toast("Server error: save failed! Please try again!")}):this.$toast("Mood cannot be empty")},cancel:function(){t("#mood_select").children("li").removeClass("selected"),t("#mood_select").children("li").removeClass("noselected"),this.score="",this.note=""},formatDate:function(t){var a=t.getFullYear(),s=t.getMonth()+1,e=t.getDate();t.getDay();return[a,s,e].map(this.formatNumber).join("-")},formatNumber:function(t){return(t=t.toString())[1]?t:"0"+t}},components:{navHeader:e.a}}}).call(a,s("7t+N"))},UBJh:function(t,a){},"d8/S":function(t,a){},ismA:function(t,a){},u4MB:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.0d35b399986e606d0860.js.map