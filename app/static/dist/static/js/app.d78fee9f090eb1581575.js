webpackJsonp([1],{BR9o:function(t,s){},Cz8s:function(t,s,a){"use strict";var e={data:function(){return{isShow:!1}},props:["name"],methods:{showBar:function(){this.isShow=!this.isShow},logout:function(){window.localStorage.removeItem("name"),window.localStorage.removeItem("id"),this.$router.push({path:"login"})}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",[a("router-link",{staticClass:"left setting",attrs:{to:"/index"}},[a("i",{staticClass:"fa fa-th-large"})]),t._v(" "),a("div",{staticClass:"right"},[a("a",{staticClass:"login",on:{click:t.showBar}},[t._v(t._s(t.name))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"mine_bar"},[a("ul",{staticClass:"mine_bar_list"},[a("li",[a("router-link",{attrs:{to:"/authorize"}},[a("i",{staticClass:"fa fa-tasks"}),t._v("   Authorize")])],1),t._v(" "),a("li",[a("a",{on:{click:t.logout}},[a("i",{staticClass:"fa fa-sign-out"}),t._v("   Log out")])])])])],1)},staticRenderFns:[]};var n=a("VU/8")(e,i,!1,function(t){a("ismA")},"data-v-19a6d008",null);s.a=n.exports},EWVC:function(t,s){},G2GB:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(t){a("BR9o")},null,null).exports,c=a("/ocq"),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"login_box"},[s("div",{staticClass:"login_header"},[this._v("Login")]),this._v(" "),s("a",{staticClass:"login",attrs:{href:"/login/facebook"}},[this._v(" Login with Facebook"),s("a",{staticClass:"facebook_logo"},[s("i",{staticClass:"fa fa-facebook-square"})])])])}]};var o=a("VU/8")({data:function(){return{}},methods:{}},l,!1,function(t){a("PpMJ")},"data-v-0f1b90bb",null).exports,r=a("Cz8s"),_={name:"index",data:function(){return{name:"",id:"",activeTab:"day",tweets:0,mentions:0,posts:0,signDays:null,moods:[{mood:5},{mood:2},{mood:""},{mood:4},{mood:""},{mood:1},{mood:""}],event:1,events:[{events:1},{events:""},{events:""},{events:""},{events:""},{events:""},{events:""}],maxTemp:[{temp:"23℃"},{temp:""},{temp:"21℃"},{temp:""},{temp:"18℃"},{temp:"19℃"},{temp:""}],minTemp:[{temp:"13℃"},{temp:""},{temp:"11℃"},{temp:""},{temp:"8℃"},{temp:"9℃"},{temp:""}],Precip:[{precip:"0.01"},{precip:""},{precip:"0.005"},{precip:""},{precip:"0.0"},{precip:""},{precip:"0.0"}],press:[{press:"1.016"},{press:"1.028"},{press:""},{press:"1.020"},{press:""},{press:"1.017"},{press:""}],cloud:[{cloud:"13%"},{cloud:""},{cloud:"3%"},{cloud:"5%"},{cloud:"20%"},{cloud:"1.017"},{cloud:""}],humid:[{humid:"49%"},{humid:""},{humid:"43%"},{humid:"57%"},{humid:""},{humid:"60%"},{humid:"40%"}],wind:[{wind:"0.8"},{wind:"0.3"},{wind:"1.1"},{wind:""},{wind:"1.9"},{wind:"0.6"},{wind:""}],dayLength:[{day_length:"10:28"},{day_length:"10:18"},{day_length:""},{day_length:"09:50"},{day_length:"09:45"},{day_length:""},{day_length:"09:38"}]}},mounted:function(){this.name=this.$route.query.name||window.localStorage.getItem("name"),this.id=this.$route.query.id||window.localStorage.getItem("id"),window.localStorage.setItem("name",this.name),window.localStorage.setItem("id",this.id),this.changeTab("day")},methods:{changeTab:function(t){this.activeTab=t;var s=this.formatTime(new Date);if(this.getTwitter(s,t),this.getFacebook(s,t),"month"==t){var a=new Date,e=(a.getDate(),a.getMonth()+1),i=a.getFullYear();this.buildCal(i,e,[1,4,7,13],[2,6,9,14])}},getTwitter:function(t,s){var a=this;this.$axios.get(this.api+"/twitter/"+this.id+"/summary",{params:{datetime:t,period:s}}).then(function(t){200==t.status&&(a.tweets=t.data.tweets,a.mentions=t.data.mentions)})},getFacebook:function(t,s){var a=this;this.$axios.get(this.api+"/facebook/"+this.id+"/summary",{params:{datetime:t,period:s}}).then(function(t){200==t.status&&(a.posts=t.data.posts)})},formatTime:function(t){var s=t.getFullYear(),a=t.getMonth()+1,e=t.getDate(),i=t.getHours(),n=t.getMinutes(),c=t.getSeconds();return[s,a,e].map(this.formatNumber).join("-")+" "+[i,n,c].map(this.formatNumber).join(":")+String(t).slice(String(t).indexOf("GMT")+3,String(t).indexOf("GMT")+8)},formatNumber:function(t){return(t=t.toString())[1]?t:"0"+t},buildCal:function(t,s,a,e){var i=new Array;i[0]=new Array(7),i[1]=new Array(7),i[2]=new Array(7),i[3]=new Array(7),i[4]=new Array(7),i[5]=new Array(7);var n,c,l=new Date(t,s-1,1),o=l.getDay(),r=new Date(l.getFullYear(),l.getMonth()+1,0).getDate(),_=t,v=1;for(n=o-1;n<7;n++)a.indexOf(v)>-1?i[0][n]={moodday:1,normalday:v}:i[0][n]={moodday:!1,normalday:v},e.indexOf(v)>-1?i[0][n].eventday=!0:i[0][n].eventday=!1,v++;for(c=1;c<6;c++)for(n=0;n<7;n++)if(v<=_){if(a.indexOf(v)>-1?i[c][n]={moodday:!0,normalday:v}:i[c][n]={moodday:!1,normalday:v},e.indexOf(v)>-1?i[c][n].eventday=!0:i[c][n].eventday=!1,v==r)return this.signDays=i,i;v++}}},components:{navHeader:r.a}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("nav-header",{attrs:{name:t.name}}),t._v(" "),a("div",{staticClass:"tabs"},[a("div",{staticClass:"tab",class:"day"==t.activeTab?"active":"",on:{click:function(s){t.changeTab("day")}}},[t._v("Day")]),t._v(" "),a("div",{staticClass:"tab",class:"week"==t.activeTab?"active":"",on:{click:function(s){t.changeTab("week")}}},[t._v("Week")]),t._v(" "),a("div",{staticClass:"tab",class:"month"==t.activeTab?"active":"",on:{click:function(s){t.changeTab("month")}}},[t._v("Month")])]),t._v(" "),a("div",{staticClass:"content index_content"},[a("transition",{attrs:{name:"fade",mode:"in-out"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"day"==t.activeTab,expression:"activeTab=='day'"}]},[a("div",{staticClass:"content_box"},[a("h4",[t._v("FaceBook")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("div",{staticClass:"line clearfix"},[a("div",{staticClass:"left left_table"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"left",attrs:{valign:"bottom"}},[a("b",[t._v(t._s(t.posts))]),t._v(" FB posts")]),t._v(" "),a("td",{staticClass:"right",attrs:{valign:"bottom"}})]),t._v(" "),a("tr",[a("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[a("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#4E7CA0"}})])])])])]),t._v(" "),a("div",{staticClass:"right right_icon"},[a("i",{staticClass:"fa fa-facebook-square FB"})])]),t._v(" "),a("div",{staticClass:"connector"},[a("i",{staticClass:"fa fa-exchange"}),t._v("\n              FaceBook\n            ")]),t._v(" "),a("div",{staticClass:"chart"})])]),t._v(" "),a("div",{staticClass:"content_box"},[a("h4",[t._v("Twitter")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("div",{staticClass:"line clearfix"},[a("div",{staticClass:"left left_table"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"left",attrs:{valign:"bottom"}},[a("b",[t._v(t._s(t.tweets))]),t._v(" tweets")])]),t._v(" "),a("tr",[a("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[a("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#55acee"}})])])])]),t._v(" "),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"left",attrs:{valign:"bottom"}},[a("b",[t._v(t._s(t.mentions))]),t._v(" mentions")])]),t._v(" "),a("tr",[a("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[a("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#55acee"}})])])])])]),t._v(" "),a("div",{staticClass:"right right_icon"},[a("i",{staticClass:"fa fa-twitter-square"})])]),t._v(" "),a("div",{staticClass:"connector"},[a("i",{staticClass:"fa fa-exchange"}),t._v("\n              Twitter\n              ")]),t._v(" "),a("div",{staticClass:"chart"})])]),t._v(" "),a("div",{staticClass:"content_box"},[a("h4",[t._v("Mood")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("div",{staticClass:"mood"},[a("div",{staticClass:"mood_number mood_active"},[t._v("5")])]),t._v(" "),a("router-link",{staticClass:"edit_mood",attrs:{to:"/edit_mood"}},[a("i",{staticClass:"fa fa-pencil"}),t._v("\n              Rate day\n            ")]),t._v(" "),a("div",{staticClass:"connector"},[a("i",{staticClass:"fa fa-exchange"}),t._v("\n              Android\n            ")]),t._v(" "),a("div",{staticClass:"chart"})],1)]),t._v(" "),a("div",{staticClass:"content_box"},[a("h4",[t._v("Events")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("div",{staticClass:"line clearfix"},[a("div",{staticClass:"left left_table"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"left",attrs:{valign:"bottom"}},[a("b",[t._v("0")]),t._v(" today")]),t._v(" "),a("td",{staticClass:"right",attrs:{valign:"bottom"}})]),t._v(" "),a("tr",[a("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[a("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#E1546C"}})])])])]),t._v(" "),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"left",attrs:{valign:"bottom"}},[a("b",[t._v("00:00")]),t._v(" in events")]),t._v(" "),a("td",{staticClass:"right",attrs:{valign:"bottom"}})]),t._v(" "),a("tr",[a("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[a("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#E1546C"}})])])])])]),t._v(" "),a("div",{staticClass:"right right_icon"},[a("i",{staticClass:"fa fa-file-text events"})])]),t._v(" "),a("div",{staticClass:"connector"},[a("i",{staticClass:"fa fa-exchange"}),t._v("\n              Events\n            ")]),t._v(" "),a("div",{staticClass:"chart"})])]),t._v(" "),a("div",{staticClass:"content_box"},[a("h4",[t._v("Location")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("a",{staticStyle:{display:"block",height:"100%"},attrs:{target:"_blank",href:"https://google.com/maps/@37.87,-122.26,16z"}},[a("img",{staticStyle:{width:"100%"},attrs:{src:"https://api.mapbox.com/styles/v1/joshsharp/cjmfw5rw71t0m2rrwsj8ywbi1/static/-122.26,37.87,12,0/360x160?access_token=pk.eyJ1Ijoiam9zaHNoYXJwIiwiYSI6ImNqbHJta2ozMjA2b20zc3RhNTFuMm4zZGEifQ.sN74U85oG02UI3juN-NZtA",alt:"Map"}})]),t._v(" "),a("div",{staticClass:"connector"},[a("i",{staticClass:"fa fa-exchange"}),t._v("\n              Android\n            ")]),t._v(" "),a("div",{staticClass:"chart"})])]),t._v(" "),a("div",{staticClass:"content_box"},[a("h4",[t._v("Weather")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("div",{staticClass:"line clearfix"},[a("div",{staticClass:"left left_table"},[a("div",{staticClass:"temp"},[a("span",{staticClass:"min_temp"},[t._v("11")]),t._v(" / "),a("span",{staticClass:"max_temp"},[t._v("21")]),t._v(" ℃")]),t._v(" "),a("ul",{staticClass:"weather_tab clearfix"},[a("li",[t._v("Precipitation "),a("span",{staticClass:"weather_num"},[t._v("0.0")])]),t._v(" "),a("li",[t._v("Air pressure "),a("span",{staticClass:"weather_num"},[t._v("1,016")])]),t._v(" "),a("li",[t._v("Cloud cover "),a("span",{staticClass:"weather_num"},[t._v("2%")])]),t._v(" "),a("li",[t._v("Humidity "),a("span",{staticClass:"weather_num"},[t._v("35%")])]),t._v(" "),a("li",[t._v("Wind speed "),a("span",{staticClass:"weather_num"},[t._v("0.9")])]),t._v(" "),a("li",[t._v("Day length "),a("span",{staticClass:"weather_num"},[t._v("10:23")])])]),t._v(" "),a("p",{staticClass:"weather_summary"},[t._v("Clear throughout the day.")])]),t._v(" "),a("div",{staticClass:"right right_icon"},[a("i",{staticClass:"fa fa-sun-o weather"})])]),t._v(" "),a("div",{staticClass:"connector"},[a("i",{staticClass:"fa fa-exchange"}),t._v("\n              Dark Sky\n            ")]),t._v(" "),a("div",{staticClass:"chart"})])])])]),t._v(" "),a("transition",{attrs:{name:"fade",mode:"in-out"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"week"==t.activeTab,expression:"activeTab=='week'"}]},[a("div",{staticClass:"content_box"},[a("h4",[t._v("Totals posts for this week")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("div",{staticClass:"line clearfix"},[a("div",{staticClass:"left left_table"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"left",attrs:{valign:"bottom"}},[a("b",[t._v(t._s(t.posts))]),t._v(" FB posts")]),t._v(" "),a("td",{staticClass:"right",attrs:{valign:"bottom"}})]),t._v(" "),a("tr",[a("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[a("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#4E7CA0"}})])])])])]),t._v(" "),a("div",{staticClass:"right right_icon"},[a("i",{staticClass:"fa fa-facebook-square FB"})])])])]),t._v(" "),a("div",{staticClass:"content_box"},[a("h4",[t._v("Totals tweets and mentions for this week")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("div",{staticClass:"line clearfix"},[a("div",{staticClass:"left left_table"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"left",attrs:{valign:"bottom"}},[a("b",[t._v(t._s(t.tweets))]),t._v(" tweets")])]),t._v(" "),a("tr",[a("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[a("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#55acee"}})])])])]),t._v(" "),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"left",attrs:{valign:"bottom"}},[a("b",[t._v(t._s(t.mentions))]),t._v(" mentions")])]),t._v(" "),a("tr",[a("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[a("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#55acee"}})])])])])]),t._v(" "),a("div",{staticClass:"right right_icon"},[a("i",{staticClass:"fa fa-twitter-square"})])])])]),t._v(" "),a("div",{staticClass:"content_box"},[a("h4",[t._v("Totals others for this week")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("div",{staticClass:"calendar_wrapper"},[a("div",{staticClass:"week_day"},[a("div",{staticClass:"weeklist"},[t._v("MON")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("TUE")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("WED")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("THU")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("FRI")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("SAT")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("SUN")])])]),t._v(" "),a("div",{staticClass:"line"},[a("h3",{staticClass:"chart_header"},[t._v("Mood")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.moods,function(s,e){return a("div",{key:e,staticClass:"day_list "},[a("a",{staticClass:" chart_number mood_number",class:"mood-"+s.mood},[t._v(t._s(""==s.mood?"no rate":""))])])}))]),t._v(" "),a("div",{staticClass:"line bottom_border"},[a("h3",{staticClass:"chart_header"},[a("i",{staticClass:"fa fa-file-text events_icon"}),t._v("Events")]),t._v(" "),a("p",{staticClass:"chart_totals"},[a("b",[t._v(t._s(t.event))]),t._v(" events")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.events,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.events?"events_active":""},[t._v(t._s(null==s?"":s.events)+"\n                ")])}))]),t._v(" "),a("div",{staticClass:"line"},[a("h3",{staticClass:"chart_header"},[a("i",{staticClass:"fa fa-sun-o weather_icon"}),t._v("Weather")]),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Max temp")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.maxTemp,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.temp?"max_temp_active":""},[t._v(t._s(null==s?"":s.temp)+"\n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Min temp")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.minTemp,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.temp?"min_temp_active":""},[t._v(t._s(null==s?"":s.temp)+" \n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Precipitation")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.Precip,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.precip?"precip_active":""},[t._v(t._s(null==s?"":s.precip)+"\n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Air pressure")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.press,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.press?"press_active":""},[t._v(t._s(null==s?"":s.press)+"\n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Cloud cover")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.cloud,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.cloud?"cloud_active":""},[t._v(t._s(null==s?"":s.cloud)+"\n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Humidity")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.humid,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.humid?"humid_active":""},[t._v(t._s(null==s?"":s.humid)+"\n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Wind speed")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.wind,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.wind?"wind_active":""},[t._v(t._s(null==s?"":s.wind)+"\n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Day length")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.dayLength,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.day_length?"day_length_active":""},[t._v(t._s(null==s?"":s.day_length)+"\n                ")])}))])])])])]),t._v(" "),a("transition",{attrs:{name:"fade",mode:"in-out"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"month"==t.activeTab,expression:"activeTab=='month'"}]},[a("div",{staticClass:"content_box"},[a("h4",[t._v("Totals posts for this month")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("div",{staticClass:"line clearfix"},[a("div",{staticClass:"left left_table"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"left",attrs:{valign:"bottom"}},[a("b",[t._v(t._s(t.posts))]),t._v(" FB posts")]),t._v(" "),a("td",{staticClass:"right",attrs:{valign:"bottom"}})]),t._v(" "),a("tr",[a("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[a("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#4E7CA0"}})])])])])]),t._v(" "),a("div",{staticClass:"right right_icon"},[a("i",{staticClass:"fa fa-facebook-square FB"})])])])]),t._v(" "),a("div",{staticClass:"content_box"},[a("h4",[t._v("Totals tweets and mentions for this month")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("div",{staticClass:"line clearfix"},[a("div",{staticClass:"left left_table"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"left",attrs:{valign:"bottom"}},[a("b",[t._v(t._s(t.tweets))]),t._v(" tweets")])]),t._v(" "),a("tr",[a("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[a("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#55acee"}})])])])]),t._v(" "),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"left",attrs:{valign:"bottom"}},[a("b",[t._v(t._s(t.mentions))]),t._v(" mentions")])]),t._v(" "),a("tr",[a("td",{staticClass:"percent-bg",attrs:{colspan:"2"}},[a("div",{staticClass:"percent-meter",staticStyle:{width:"0%","background-color":"#55acee"}})])])])])]),t._v(" "),a("div",{staticClass:"right right_icon"},[a("i",{staticClass:"fa fa-twitter-square"})])])])]),t._v(" "),a("div",{staticClass:"content_box"},[a("h4",[t._v("Totals moods and events for this month")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("div",{staticClass:"calendar_wrapper"},[a("div",{staticClass:"week_day"},[a("div",{staticClass:"weeklist"},[t._v("MON")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("TUE")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("WED")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("THU")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("FRI")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("SAT")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("SUN")])]),t._v(" "),t._l(t.signDays,function(s,e){return a("div",{key:e,staticClass:"month_day"},t._l(s,function(s,e){return a("div",{key:e,staticClass:"day_list"},[null!=s&&s.normalday?a("a",{staticClass:"mood_a",class:s.moodday?"mood-4":""},[t._v(t._s(null==s?"":s.normalday))]):t._e(),t._v(" "),null!=s&&s.normalday?a("p",{staticClass:"event_p",class:s.eventday?"events_active":""},[t._v(t._s(s.event))]):t._e()])}))})],2)])]),t._v(" "),a("div",{staticClass:"content_box"},[a("h4",[t._v("Totals weather for this month")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("div",{staticClass:"calendar_wrapper"},[a("div",{staticClass:"week_day"},[a("div",{staticClass:"weeklist"},[t._v("MON")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("TUE")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("WED")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("THU")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("FRI")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("SAT")]),t._v(" "),a("div",{staticClass:"weeklist"},[t._v("SUN")])])]),t._v(" "),a("div",{staticClass:"line"},[a("h3",{staticClass:"chart_header"},[a("i",{staticClass:"fa fa-sun-o weather_icon"}),t._v("Weather")]),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Max temp")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.maxTemp,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.temp?"max_temp_active":""},[t._v(t._s(null==s?"":s.temp)+"\n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Min temp")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.minTemp,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.temp?"min_temp_active":""},[t._v(t._s(null==s?"":s.temp)+" \n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Precipitation")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.Precip,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.precip?"precip_active":""},[t._v(t._s(null==s?"":s.precip)+"\n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Air pressure")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.press,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.press?"press_active":""},[t._v(t._s(null==s?"":s.press)+"\n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Cloud cover")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.cloud,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.cloud?"cloud_active":""},[t._v(t._s(null==s?"":s.cloud)+"\n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Humidity")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.humid,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.humid?"humid_active":""},[t._v(t._s(null==s?"":s.humid)+"\n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Wind speed")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.wind,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.wind?"wind_active":""},[t._v(t._s(null==s?"":s.wind)+"\n                ")])})),t._v(" "),a("p",{staticClass:"chart_totals"},[t._v("Day length")]),t._v(" "),a("div",{staticClass:"month_day"},t._l(t.dayLength,function(s,e){return a("div",{key:e,staticClass:"day_list chart_number",class:s.day_length?"day_length_active":""},[t._v(t._s(null==s?"":s.day_length)+"\n                ")])}))])])])])])],1)],1)},staticRenderFns:[]};var d=a("VU/8")(_,v,!1,function(t){a("G2GB")},"data-v-c3474d4c",null).exports,h={name:"index",data:function(){return{name:"",id:"",facebook_auth:!1,twitter_auth:!1}},mounted:function(){this.name=window.localStorage.getItem("name"),this.id=window.localStorage.getItem("id"),this.getAuthorize()},methods:{getAuthorize:function(){var t=this;this.$axios.get(this.api+"/user/"+this.id+"/authorized").then(function(s){200==s.status&&(t.facebook_auth=s.data.facebook_auth,t.twitter_auth=s.data.twitter_auth)})}},components:{navHeader:r.a}},m={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("nav-header",{attrs:{name:t.name}}),t._v(" "),a("div",{staticClass:"content"},[a("h3",{staticClass:"connect_authorize"},[t._v("CONNECT AUTHORIZE")]),t._v(" "),a("div",{staticClass:"authorize_box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.twitter_auth?t._e():a("a",{staticClass:"authorize_connect",attrs:{href:"/login/twitter"}},[a("i",{staticClass:"fa fa-plus"}),t._v(" \n      Authorize\n    ")]),t._v(" "),t.twitter_auth?a("a",{staticClass:"authorize_connect"},[t._v("\n      Authorized\n    ")]):t._e()]),t._v(" "),a("div",{staticClass:"authorize_box"},[a("div",{staticClass:"authorize_meta facebook"},[t._v("\n      facebook ")]),t._v(" "),t._m(2),t._v(" "),t.facebook_auth?t._e():a("a",{staticClass:"authorize_connect"},[a("i",{staticClass:"fa fa-plus"}),t._v(" \n      Authorize\n    ")]),t._v(" "),t.facebook_auth?a("a",{staticClass:"authorize_connect"},[t._v("\n      Authorized\n    ")]):t._e()])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"authorize_meta"},[this._v("\n      Twitter   "),s("i",{staticClass:"fa fa-twitter twitter_logo"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("TRACKS")]),a("strong",[t._v("Tweets,metions")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("REQUIRES")]),a("strong",[t._v("Twitter account")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("PROVIDING")]),a("strong",[t._v("Tweets")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("TRACKS")]),a("strong",[t._v("Posts, comments, reactions")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("REQUIRES")]),a("strong",[t._v("Facebook account")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("PROVIDING")]),a("strong",[t._v("Facebook posts")])])])}]};var u=a("VU/8")(h,m,!1,function(t){a("EWVC")},"data-v-b8e4469e",null).exports,C=a("PEHT"),p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("nav-header",{attrs:{name:t.name}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content_box"},[a("h4",[t._v("Review Sunday 04 Nov 2018")]),t._v(" "),a("div",{staticClass:"content_box_inner"},[a("form",{staticClass:"basic",attrs:{method:"post",action:""}},[a("b",[t._v("Mood:Great")]),t._v(" "),a("ul",{staticClass:"mood_rate clearfix",attrs:{id:"select"}},[a("li",{staticClass:"mood-1",on:{click:function(s){t.selected(s,1)}}},[t._v("1")]),t._v(" "),a("li",{staticClass:"mood-2",on:{click:function(s){t.selected(s,2)}}},[t._v("2")]),t._v(" "),a("li",{staticClass:"mood-3",on:{click:function(s){t.selected(s,3)}}},[t._v("3")]),t._v(" "),a("li",{staticClass:"mood-4",on:{click:function(s){t.selected(s,4)}}},[t._v("4")]),t._v(" "),a("li",{staticClass:"mood-5",on:{click:function(s){t.selected(s,5)}}},[t._v("5")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("b",[this._v("Note:")]),this._v(" "),s("textarea",{staticClass:"form-control",attrs:{rows:"4",name:"note",maxlength:"240"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("b",[this._v("Custom tags:")]),this._v(" "),s("div",{staticClass:"clearfix taggle_holder"},[s("input",{staticClass:"taggle_placeholder",staticStyle:{opacity:"1"},attrs:{placeholder:"Enter tags..."}})]),this._v(" "),s("div",{staticClass:"help-block"},[this._v("\n              Use a comma (,) to separate tags\n            ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("button",{staticClass:"save",attrs:{type:"submit",name:"submit"}},[s("i",{staticClass:"fa fa-check"}),this._v(" Save\n            ")]),this._v("\n            or "),s("a",[this._v("Cancel")])])}]};var f=function(t){a("bHbp")},b=a("VU/8")(C.a,p,!1,f,"data-v-016b82c7",null).exports;e.a.use(c.a);var g=new c.a({routes:[{path:"/",name:"login",component:o},{path:"/login",name:"login",component:o},{path:"/index",name:"index",component:d},{path:"/authorize",name:"authorize",component:u},{path:"/edit_mood",name:"edit_mood",component:b}]}),w=a("mtWM"),y=a.n(w);a("UBJh");e.a.prototype.$axios=y.a,e.a.config.productionTip=!1,e.a.prototype.api="",new e.a({el:"#app",router:g,components:{App:n},template:"<App/>"})},PEHT:function(t,s,a){"use strict";(function(t){var e=a("Cz8s");s.a={name:"index",data:function(){return{name:"",id:""}},mounted:function(){this.name=window.localStorage.getItem("name"),this.id=window.localStorage.getItem("id")},methods:{selected:function(s,a){var e=s.target;t(e).removeClass("noselected").addClass("selected").siblings().removeClass("selected").addClass("noselected")}},components:{navHeader:e.a}}}).call(s,a("7t+N"))},PpMJ:function(t,s){},UBJh:function(t,s){},bHbp:function(t,s){},ismA:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.d78fee9f090eb1581575.js.map