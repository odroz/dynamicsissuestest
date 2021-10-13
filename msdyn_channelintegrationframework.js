!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var n in i)("object"==typeof exports?exports:e)[n]=i[n]}}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.e?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=30)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e[e.Unspecified=0]="Unspecified",e[e.String=1]="String",e[e.Int64=2]="Int64",e[e.Double=3]="Double",e[e.Boolean=4]="Boolean",e[e.Date=5]="Date"}(t.AWTPropertyType||(t.AWTPropertyType={}));!function(e){e[e.NotSet=0]="NotSet",e[e.DistinguishedName=1]="DistinguishedName",e[e.GenericData=2]="GenericData",e[e.IPV4Address=3]="IPV4Address",e[e.IPv6Address=4]="IPv6Address",e[e.MailSubject=5]="MailSubject",e[e.PhoneNumber=6]="PhoneNumber",e[e.QueryString=7]="QueryString",e[e.SipAddress=8]="SipAddress",e[e.SmtpAddress=9]="SmtpAddress",e[e.Identity=10]="Identity",e[e.Uri=11]="Uri",e[e.Fqdn=12]="Fqdn",e[e.IPV4AddressLegacy=13]="IPV4AddressLegacy"}(t.AWTPiiKind||(t.AWTPiiKind={}));!function(e){e[e.NotSet=0]="NotSet",e[e.GenericContent=1]="GenericContent"}(t.AWTCustomerContentKind||(t.AWTCustomerContentKind={}));!function(e){e[e.Low=1]="Low",e[e.Normal=2]="Normal",e[e.High=3]="High",e[e.Immediate_sync=5]="Immediate_sync"}(t.AWTEventPriority||(t.AWTEventPriority={}));!function(e){e[e.NonRetryableStatus=1]="NonRetryableStatus",e[e.QueueFull=3]="QueueFull"}(t.AWTEventsDroppedReason||(t.AWTEventsDroppedReason={}));!function(e){e[e.InvalidEvent=1]="InvalidEvent",e[e.SizeLimitExceeded=2]="SizeLimitExceeded",e[e.KillSwitch=3]="KillSwitch"}(t.AWTEventsRejectedReason||(t.AWTEventsRejectedReason={}))},function(e,t,i){"use strict";function n(e){var t=new B.Int64("0");return t.low=4294967295&e,t.high=Math.floor(e/4294967296),t}function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(C,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}function o(e){return"string"==typeof e}function s(e){return"number"==typeof e}function a(e){return"boolean"==typeof e}function u(e){return e instanceof Date}function d(e){return(e+b)*R}function c(e){var t=e.indexOf("-");return t>-1?e.substring(0,t):""}function _(){return O===D&&(O="undefined"!=typeof navigator&&Boolean(navigator.sendBeacon)),O}function l(){return N===D&&(N="undefined"!=typeof Uint8Array&&!W()&&!y()),N}function p(e){return!(!s(e)||!(e>=1&&e<=3||5===e))}function f(e,i){return!t.PropertyNameRegex.test(e)||P(i)?D:(P(i.value)&&(i={value:i,type:w.AWTPropertyType.Unspecified}),i.type=m(i.value,i.type),i.type?(u(i.value)&&(i.value=d(i.value.getTime())),i.pii>0&&i.cc>0?D:i.pii?A(i.pii)?i:D:i.cc?I(i.cc)?i:D:i):D)}function h(e){return e.getUTCFullYear()+"-"+T(e.getUTCMonth()+1)+"-"+T(e.getUTCDate())+"T"+T(e.getUTCHours())+":"+T(e.getUTCMinutes())+":"+T(e.getUTCSeconds())+"."+g(e.getUTCMilliseconds())+"Z"}function v(){if(M===D){var e=new XMLHttpRequest;M=void 0===e.withCredentials&&"undefined"!=typeof XDomainRequest}return M}function y(){return!("undefined"==typeof navigator||!navigator.product)&&"ReactNative"===navigator.product}function T(e){return e<10?"0"+e:e.toString()}function g(e){return e<10?"00"+e:e<100?"0"+e:e.toString()}function m(e,t){switch(t=E(t)?t:w.AWTPropertyType.Unspecified){case w.AWTPropertyType.Unspecified:return S(e);case w.AWTPropertyType.String:return o(e)?t:D;case w.AWTPropertyType.Boolean:return a(e)?t:D;case w.AWTPropertyType.Date:return u(e)&&NaN!==e.getTime()?t:D;case w.AWTPropertyType.Int64:return s(e)&&e%1==0?t:D;case w.AWTPropertyType.Double:return s(e)?t:D}return D}function S(e){switch(typeof e){case"string":return w.AWTPropertyType.String;case"boolean":return w.AWTPropertyType.Boolean;case"number":return w.AWTPropertyType.Double;case"object":return u(e)?w.AWTPropertyType.Date:D}return D}function A(e){return!!(s(e)&&e>=0&&e<=13)}function I(e){return!!(s(e)&&e>=0&&e<=1)}function E(e){return!!(s(e)&&e>=0&&e<=4)}function W(){if("undefined"!=typeof navigator&&navigator.userAgent){var e=navigator.userAgent.toLowerCase();if((e.indexOf("safari")>=0||e.indexOf("firefox")>=0)&&e.indexOf("chrome")<0)return!0}return!1}function P(e){return void 0===e||e===D||""===e}Object.defineProperty(t,"__esModule",{value:!0});var B=i(4),w=i(0),C=/[xy]/g,b=621355968e5,R=1e4,D=null;t.EventNameAndTypeRegex=/^[a-zA-Z]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/,t.EventNameDotRegex=/\./g,t.PropertyNameRegex=/^[a-zA-Z](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/,t.StatsApiKey="a387cfcf60114a43a7699f9fbb49289e-9bceb9fe-1c06-460f-96c5-6a0b247358bc-7238";var O=D,N=D,M=D;t.numberToBondInt64=n,t.newGuid=r,t.isString=o,t.isNumber=s,t.isBoolean=a,t.isDate=u,t.msToTicks=d,t.getTenantId=c,t.isBeaconsSupported=_,t.isUint8ArrayAvailable=l,t.isPriority=p,t.sanitizeProperty=f,t.getISOString=h,t.useXDomainRequest=v,t.isReactNative=y},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.addNotificationListener=function(e){this.listeners.push(e)},e.removeNotificationListener=function(e){for(var t=this.listeners.indexOf(e);t>-1;)this.listeners.splice(t,1),t=this.listeners.indexOf(e)},e.eventsSent=function(e){for(var t=this,i=this,n=0;n<this.listeners.length;++n)!function(n){i.listeners[n].eventsSent&&setTimeout(function(){return t.listeners[n].eventsSent(e)},0)}(n)},e.eventsDropped=function(e,t){for(var i=this,n=this,r=0;r<this.listeners.length;++r)!function(r){n.listeners[r].eventsDropped&&setTimeout(function(){return i.listeners[r].eventsDropped(e,t)},0)}(r)},e.eventsRetrying=function(e){for(var t=this,i=this,n=0;n<this.listeners.length;++n)!function(n){i.listeners[n].eventsRetrying&&setTimeout(function(){return t.listeners[n].eventsRetrying(e)},0)}(n)},e.eventsRejected=function(e,t){for(var i=this,n=this,r=0;r<this.listeners.length;++r)!function(r){n.listeners[r].eventsRejected&&setTimeout(function(){return i.listeners[r].eventsRejected(e,t)},0)}(r)},e.listeners=[],e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(14),r=i(0),o=i(28),s=i(10),a=i(5),u=i(11),d=i(1),c=function(){function e(){}return e.setEventsHandler=function(e){this.t=e},e.getEventsHandler=function(){return this.t},e.scheduleTimer=function(){var e=this,t=this.r[this.a][2];this.u<0&&t>=0&&!this._&&(this.t.hasEvents()?(0===t&&this.f>0&&(t=1),this.u=setTimeout(function(){return e.h()},t*(1<<this.f)*1e3)):this.v=0)},e.initialize=function(e){var t=this;this.y=!0,this.T=e,this.t=new o.default(e.collectorUri,e.cacheMemorySizeLimitInNumberOfEvents,e.httpXHROverride,e.clockSkewRefreshDurationInMins),this.g(),s.default.initialize(function(e,i){if(t.T.canSendStatEvent("awt_stats")){var n=new a.default("awt_stats");n.setEventPriority(r.AWTEventPriority.High),n.setProperty("TenantId",i);for(var o in e)e.hasOwnProperty(o)&&n.setProperty(o,e[o].toString());u.default.getLogger(d.StatsApiKey).logEvent(n)}})},e.setTransmitProfile=function(e){this.a!==e&&void 0!==this.r[e]&&(this.clearTimeout(),this.a=e,this.scheduleTimer())},e.loadTransmitProfiles=function(e){this.S();for(var t in e)if(e.hasOwnProperty(t)){if(3!==e[t].length)continue;for(var i=2;i>=0;--i)if(e[t][i]<0){for(var n=i;n>=0;--n)e[t][n]=-1;break}for(var i=2;i>0;--i)if(e[t][i]>0&&e[t][i-1]>0){var r=e[t][i-1]/e[t][i];e[t][i-1]=Math.ceil(r)*e[t][i]}this.r[t]=e[t]}},e.sendEvent=function(e){this.y&&(this.f>0&&e.priority===r.AWTEventPriority.Immediate_sync&&(e.priority=r.AWTEventPriority.High),this.t.addEvent(e),this.scheduleTimer())},e.flush=function(e){var t=(new Date).getTime();!this._&&this.A+3e4<t&&(this.A=t,this.u>-1&&(clearTimeout(this.u),this.u=-1),this.t.uploadNow(e))},e.pauseTransmission=function(){this._||(this.clearTimeout(),this.t.pauseTransmission(),this._=!0)},e.resumeTransmision=function(){this._&&(this._=!1,this.t.resumeTransmission(),this.scheduleTimer())},e.flushAndTeardown=function(){s.default.teardown(),this.y=!1,this.clearTimeout(),this.t.teardown()},e.backOffTransmission=function(){this.f<4&&(this.f++,this.clearTimeout(),this.scheduleTimer())},e.clearBackOff=function(){this.f>0&&(this.f=0,this.clearTimeout(),this.scheduleTimer())},e.S=function(){this.clearTimeout(),this.g(),this.a=n.AWT_REAL_TIME,this.scheduleTimer()},e.clearTimeout=function(){this.u>0&&(clearTimeout(this.u),this.u=-1,this.v=0)},e.h=function(){var e=r.AWTEventPriority.High;this.v++,this.v*this.r[this.a][2]===this.r[this.a][0]?(e=r.AWTEventPriority.Low,this.v=0):this.v*this.r[this.a][2]===this.r[this.a][1]&&(e=r.AWTEventPriority.Normal),this.t.sendEventsForPriorityAndAbove(e),this.u=-1,this.scheduleTimer()},e.g=function(){this.r={},this.r[n.AWT_REAL_TIME]=[4,2,1],this.r[n.AWT_NEAR_REAL_TIME]=[12,6,3],this.r[n.AWT_BEST_EFFORT]=[36,18,9]},e.y=!1,e.a=n.AWT_REAL_TIME,e.u=-1,e.f=0,e._=!1,e.v=0,e.A=0,e}();t.default=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.low=0,this.high=0,this.low=parseInt(e,10),this.low<0&&(this.high=-1)}return e.prototype.I=function(t){var i=new e(t);return this.low===i.low&&this.high===i.high},e}();t.Int64=n;var r=function(){function e(e){this.low=0,this.high=0,this.low=parseInt(e,10)}return e.prototype.I=function(t){var i=new e(t);return this.low===i.low&&this.high===i.high},e}();t.UInt64=r;var o=function(){function e(){}return e.W=function(e){return this.P(e)},e.P=function(e){return 255&e},e.B=function(e){return 2147483647&e|2147483648&e},e.w=function(e){return 4294967295&e},e}();t.Number=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=function(){function e(e){this.C={name:"",properties:{}},e&&this.setName(e)}return e.prototype.setName=function(e){this.C.name=e},e.prototype.getName=function(){return this.C.name},e.prototype.setType=function(e){this.C.type=e},e.prototype.getType=function(){return this.C.type},e.prototype.setTimestamp=function(e){this.C.timestamp=e},e.prototype.getTimestamp=function(){return this.C.timestamp},e.prototype.setEventPriority=function(e){this.C.priority=e},e.prototype.getEventPriority=function(){return this.C.priority},e.prototype.setProperty=function(e,t,i){void 0===i&&(i=r.AWTPropertyType.Unspecified);var o={value:t,type:i,pii:r.AWTPiiKind.NotSet,cc:r.AWTCustomerContentKind.NotSet};if(null===(o=n.sanitizeProperty(e,o)))return void delete this.C.properties[e];this.C.properties[e]=o},e.prototype.setPropertyWithPii=function(e,t,i,o){void 0===o&&(o=r.AWTPropertyType.Unspecified);var s={value:t,type:o,pii:i,cc:r.AWTCustomerContentKind.NotSet};if(null===(s=n.sanitizeProperty(e,s)))return void delete this.C.properties[e];this.C.properties[e]=s},e.prototype.setPropertyWithCustomerContent=function(e,t,i,o){void 0===o&&(o=r.AWTPropertyType.Unspecified);var s={value:t,type:o,pii:r.AWTPiiKind.NotSet,cc:i};if(null===(s=n.sanitizeProperty(e,s)))return void delete this.C.properties[e];this.C.properties[e]=s},e.prototype.getPropertyMap=function(){return this.C.properties},e.prototype.getEvent=function(){return this.C},e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e[e.Unknown=0]="Unknown",e[e.MSACID=1]="MSACID",e[e.MSAPUID=2]="MSAPUID",e[e.ANID=3]="ANID",e[e.OrgIdCID=4]="OrgIdCID",e[e.OrgIdPUID=5]="OrgIdPUID",e[e.UserObjectId=6]="UserObjectId",e[e.Skype=7]="Skype",e[e.Yammer=8]="Yammer",e[e.EmailAddress=9]="EmailAddress",e[e.PhoneNumber=10]="PhoneNumber",e[e.SipAddress=11]="SipAddress",e[e.MUID=12]="MUID"}(t.AWTUserIdType||(t.AWTUserIdType={}));!function(e){e[e.Started=0]="Started",e[e.Ended=1]="Ended"}(t.AWTSessionState||(t.AWTSessionState={}))},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r="MicrosoftApplicationsTelemetryDeviceId",o="MicrosoftApplicationsTelemetryFirstLaunchTime",s={MSIE:"MSIE",CHROME:"Chrome",FIREFOX:"Firefox",SAFARI:"Safari",EDGE:"Edge",ELECTRON:"Electron",SKYPE_SHELL:"SkypeShell",PHANTOMJS:"PhantomJS",OPERA:"Opera"},a={WINDOWS:"Windows",MACOSX:"Mac OS X",WINDOWS_PHONE:"Windows Phone",WINDOWS_RT:"Windows RT",IOS:"iOS",ANDROID:"Android",LINUX:"Linux",CROS:"Chrome OS",UNKNOWN:"Unknown"},u={WIN:/(windows|win32)/i,WINRT:/ arm;/i,WINPHONE:/windows\sphone\s\d+\.\d+/i,OSX:/(macintosh|mac os x)/i,IOS:/(iPad|iPhone|iPod)(?=.*like Mac OS X)/i,LINUX:/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,ANDROID:/android/i,CROS:/CrOS/i},d={5.1:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1","10.0":"10"},c=function(){function e(){}return e.addPropertyStorageOverride=function(e){return!!e&&(this.b=e,!0)},e.autoCollect=function(e,t,i){if(this.R=e,this.D=t,this.O(),i||"undefined"==typeof navigator||(i=navigator.userAgent||""),this.N(i),this.D&&!this.b)return this.M(r),void this.M(o);(this.b||this.k&&!this.D)&&this.U()},e.checkAndSaveDeviceId=function(e){if(e){var t=this.x(r),i=this.x(o);t!==e&&(i=n.getISOString(new Date)),this.L(r,e),this.L(o,i),this.F(i)}},e.U=function(){var e=this.x(r);e||(e=n.newGuid()),this.R.setDeviceId(e)},e.O=function(){"undefined"!=typeof document&&document.documentElement&&this.R.setAppLanguage(document.documentElement.lang),"undefined"!=typeof navigator&&this.R.setUserLanguage(navigator.userLanguage||navigator.language);var e=(new Date).getTimezoneOffset(),t=e%60,i=(e-t)/60,n="+";i>0&&(n="-"),i=Math.abs(i),t=Math.abs(t),this.R.setUserTimeZone(n+(i<10?"0"+i:i.toString())+":"+(t<10?"0"+t:t.toString()))},e.N=function(e){if(e){var t=this.q(e);this.R.setDeviceBrowserName(t),this.R.setDeviceBrowserVersion(this.H(e,t));var i=this.Q(e);this.R.setDeviceOsName(i),this.R.setDeviceOsVersion(this.j(e,i))}},e.q=function(e){return this.z("OPR/",e)?s.OPERA:this.z(s.PHANTOMJS,e)?s.PHANTOMJS:this.z(s.EDGE,e)?s.EDGE:this.z(s.ELECTRON,e)?s.ELECTRON:this.z(s.CHROME,e)?s.CHROME:this.z("Trident",e)?s.MSIE:this.z(s.FIREFOX,e)?s.FIREFOX:this.z(s.SAFARI,e)?s.SAFARI:this.z(s.SKYPE_SHELL,e)?s.SKYPE_SHELL:"Unknown"},e.F=function(e){if(!isNaN(e)){var t=new Date;t.setTime(parseInt(e,10)),e=n.getISOString(t)}this.firstLaunchTime=e},e.z=function(e,t){return t.indexOf(e)>-1},e.H=function(e,t){return t===s.MSIE?this.K(e):this.G(t,e)},e.K=function(e){var t=e.match(new RegExp(s.MSIE+" ([\\d,.]+)"));if(t)return t[1];var i=e.match(new RegExp("rv:([\\d,.]+)"));return i?i[1]:void 0},e.G=function(e,t){e===s.SAFARI&&(e="Version");var i=t.match(new RegExp(e+"/([\\d,.]+)"));return i?i[1]:"Unknown"},e.Q=function(e){return e.match(u.WINPHONE)?a.WINDOWS_PHONE:e.match(u.WINRT)?a.WINDOWS_RT:e.match(u.IOS)?a.IOS:e.match(u.ANDROID)?a.ANDROID:e.match(u.LINUX)?a.LINUX:e.match(u.OSX)?a.MACOSX:e.match(u.WIN)?a.WINDOWS:e.match(u.CROS)?a.CROS:"Unknown"},e.j=function(e,t){return t===a.WINDOWS?this.V(e,"Windows NT"):t===a.ANDROID?this.V(e,t):t===a.MACOSX?this.X(e):"Unknown"},e.V=function(e,t){var i=e.match(new RegExp(t+" ([\\d,.]+)"));return i?d[i[1]]?d[i[1]]:i[1]:"Unknown"},e.X=function(e){var t=e.match(new RegExp(a.MACOSX+" ([\\d,_,.]+)"));if(t){var i=t[1].replace(/_/g,".");if(i){var n=this.Z(i);if(n){return i.split(n)[0]}return i}}return"Unknown"},e.Z=function(e){return e.indexOf(".")>-1?".":e.indexOf("_")>-1?"_":null},e.L=function(e,t){if(this.b)this.b.setProperty(e,t);else if(this.k){var i=new Date;i.setTime(i.getTime()+31536e6);var n="expires="+i.toUTCString();document.cookie=e+"="+t+"; "+n}},e.x=function(e){if(this.b)return this.b.getProperty(e)||"";if(this.k){e+="=";for(var t=document.cookie.split(";"),i=0;i<t.length;i++){for(var n=t[i],r=0;" "===n.charAt(r);)r++;if(n=n.substring(r),0===n.indexOf(e))return n.substring(e.length,n.length)}}return""},e.M=function(e){this.k&&(document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;")},e.D=!1,e.k="undefined"!=typeof document&&void 0!==document.cookie,e}();t.default=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(7),r=i(0),o=i(6),s=function(){function e(e,t){this.J=e,this.Y=t}return e.prototype.setAppId=function(e){this.$("AppInfo.Id",e)},e.prototype.setAppVersion=function(e){this.$("AppInfo.Version",e)},e.prototype.setAppLanguage=function(e){this.$("AppInfo.Language",e)},e.prototype.setDeviceId=function(e){this.J&&(n.default.checkAndSaveDeviceId(e),this.$("DeviceInfo.Id",e))},e.prototype.setDeviceOsName=function(e){this.J&&this.$("DeviceInfo.OsName",e)},e.prototype.setDeviceOsVersion=function(e){this.J&&this.$("DeviceInfo.OsVersion",e)},e.prototype.setDeviceBrowserName=function(e){this.J&&this.$("DeviceInfo.BrowserName",e)},e.prototype.setDeviceBrowserVersion=function(e){this.J&&this.$("DeviceInfo.BrowserVersion",e)},e.prototype.setDeviceMake=function(e){this.J&&this.$("DeviceInfo.Make",e)},e.prototype.setDeviceModel=function(e){this.J&&this.$("DeviceInfo.Model",e)},e.prototype.setUserId=function(e,t,i){if(!isNaN(i)&&null!==i&&i>=0&&i<=12)this.$("UserInfo.IdType",i.toString());else{var n=void 0;switch(t){case r.AWTPiiKind.SipAddress:n=o.AWTUserIdType.SipAddress;break;case r.AWTPiiKind.PhoneNumber:n=o.AWTUserIdType.PhoneNumber;break;case r.AWTPiiKind.SmtpAddress:n=o.AWTUserIdType.EmailAddress;break;default:n=o.AWTUserIdType.Unknown}this.$("UserInfo.IdType",n.toString())}if(isNaN(t)||null===t||t===r.AWTPiiKind.NotSet||t>13)switch(i){case o.AWTUserIdType.Skype:t=r.AWTPiiKind.Identity;break;case o.AWTUserIdType.EmailAddress:t=r.AWTPiiKind.SmtpAddress;break;case o.AWTUserIdType.PhoneNumber:t=r.AWTPiiKind.PhoneNumber;break;case o.AWTUserIdType.SipAddress:t=r.AWTPiiKind.SipAddress;break;default:t=r.AWTPiiKind.NotSet}this.ee("UserInfo.Id",e,t)},e.prototype.setUserAdvertisingId=function(e){this.$("UserInfo.AdvertisingId",e)},e.prototype.setUserTimeZone=function(e){this.$("UserInfo.TimeZone",e)},e.prototype.setUserLanguage=function(e){this.$("UserInfo.Language",e)},e.prototype.$=function(e,t){"string"==typeof t&&this.Y.setProperty(e,t)},e.prototype.ee=function(e,t,i){"string"==typeof t&&this.Y.setPropertyWithPii(e,t,i)},e}();t.default=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(21),r=i(0),o=i(2),s=i(1),a=function(){function e(){}return e.getPayloadBlob=function(e,t){var i,a=!1,u=new n.IO.MemoryStream,d=new n.CompactBinaryProtocolWriter(u);d.te(n.ne.ie,3,null),d.re(t,n.ne.oe,n.ne.se);for(var c in e)if(a)i||(i={}),i[c]=e[c],delete e[c];else if(e.hasOwnProperty(c)){d.ae(c);var _=e[c];d.ue(1,n.ne.de),d.te(n.ne.oe,2,null),d.ae("act_default_source"),d.te(n.ne.oe,5,null),d.ae(s.newGuid()),d.te(n.ne.ce,6,null),d._e(s.numberToBondInt64(Date.now())),d.te(n.ne.se,8,null);var l=u.le().length+1;d.ue(e[c].length,n.ne.de);for(var p=u.le().length-l,f=0;f<_.length;++f){var h=u.le().length;if(this.writeEvent(_[f],d),u.le().length-h>2936012)o.default.eventsRejected([_[f]],r.AWTEventsRejectedReason.SizeLimitExceeded),_.splice(f--,1),u.le().splice(h),this.pe(_.length,u,p,l);else if(u.le().length>2936012){u.le().splice(h),i||(i={}),e[c]=_.splice(0,f),i[c]=_,this.pe(e[c].length,u,p,l),a=!0;break}}d.fe(!1)}return d.fe(!1),{payloadBlob:u.le(),remainingRequest:i}},e.pe=function(e,t,i,r){for(var o=n.ve.he(n.Number.w(e)),s=0;s<i;++s){if(!(s<o.length)){t.le().slice(r+s,i-s);break}t.le()[r+s]=o[s]}},e.writeEvent=function(e,t){t.te(n.ne.oe,1,null),t.ae(e.id),t.te(n.ne.ce,3,null),t._e(s.numberToBondInt64(e.timestamp)),t.te(n.ne.oe,5,null),t.ae(e.type),t.te(n.ne.oe,6,null),t.ae(e.name);var i={},o=0,a={},u=0,d={},c=0,_={},l=0,p={},f=0,h={},v=0,y={},T=0;for(var g in e.properties)if(e.properties.hasOwnProperty(g)){var m=e.properties[g];if(m.cc>0)y[g]=m,T++;else if(m.pii>0)h[g]=m,v++;else switch(m.type){case r.AWTPropertyType.String:i[g]=m.value,o++;break;case r.AWTPropertyType.Int64:a[g]=m.value,u++;break;case r.AWTPropertyType.Double:d[g]=m.value,c++;break;case r.AWTPropertyType.Boolean:_[g]=m.value,l++;break;case r.AWTPropertyType.Date:p[g]=m.value,f++}}if(o){t.te(n.ne.ie,13,null),t.re(o,n.ne.oe,n.ne.oe);for(var g in i)if(i.hasOwnProperty(g)){var S=i[g];t.ae(g),t.ae(S.toString())}}if(v){t.te(n.ne.ie,30,null),t.re(v,n.ne.oe,n.ne.de);for(var g in h)if(h.hasOwnProperty(g)){var m=h[g];t.ae(g),t.te(n.ne.ye,1,null),t.Te(1),t.te(n.ne.ye,2,null),t.Te(m.pii),t.te(n.ne.oe,3,null),t.ae(m.value.toString()),t.fe(!1)}}if(l){t.te(n.ne.ie,31,null),t.re(l,n.ne.oe,n.ne.ge);for(var g in _)if(_.hasOwnProperty(g)){var S=_[g];t.ae(g),t.me(S)}}if(f){t.te(n.ne.ie,32,null),t.re(f,n.ne.oe,n.ne.ce);for(var g in p)if(p.hasOwnProperty(g)){var S=p[g];t.ae(g),t._e(s.numberToBondInt64(S))}}if(u){t.te(n.ne.ie,33,null),t.re(u,n.ne.oe,n.ne.ce);for(var g in a)if(a.hasOwnProperty(g)){var S=a[g];t.ae(g),t._e(s.numberToBondInt64(S))}}if(c){t.te(n.ne.ie,34,null),t.re(c,n.ne.oe,n.ne.Se);for(var g in d)if(d.hasOwnProperty(g)){var S=d[g];t.ae(g),t.Ae(S)}}if(T){t.te(n.ne.ie,36,null),t.re(T,n.ne.oe,n.ne.de);for(var g in y)if(y.hasOwnProperty(g)){var m=y[g];t.ae(g),t.te(n.ne.ye,1,null),t.Te(m.cc),t.te(n.ne.oe,2,null),t.ae(m.value.toString()),t.fe(!1)}}t.fe(!1)},e.base64Encode=function(e){return n.ve.Ie(e)},e}();t.default=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(2),o=i(0),s=function(){function e(){}return e.initialize=function(e){var t=this;this.Ee=e,this.We=!0,r.default.addNotificationListener({eventsSent:function(e){t.Pe("records_sent_count",e.length,e[0].apiKey)},eventsDropped:function(e,i){switch(i){case o.AWTEventsDroppedReason.NonRetryableStatus:t.Pe("d_send_fail",e.length,e[0].apiKey),t.Pe("records_dropped_count",e.length,e[0].apiKey);break;case o.AWTEventsDroppedReason.QueueFull:t.Pe("d_queue_full",e.length,e[0].apiKey)}},eventsRejected:function(e,i){switch(i){case o.AWTEventsRejectedReason.InvalidEvent:t.Pe("r_inv",e.length,e[0].apiKey);break;case o.AWTEventsRejectedReason.KillSwitch:t.Pe("r_kl",e.length,e[0].apiKey);break;case o.AWTEventsRejectedReason.SizeLimitExceeded:t.Pe("r_size",e.length,e[0].apiKey)}t.Pe("r_count",e.length,e[0].apiKey)},eventsRetrying:null}),setTimeout(function(){return t.flush()},6e4)},e.teardown=function(){this.We&&(this.flush(),this.We=!1)},e.eventReceived=function(t){e.Pe("records_received_count",1,t)},e.flush=function(){var e=this;if(this.We){for(var t in this.Be)this.Be.hasOwnProperty(t)&&this.Ee(this.Be[t],t);this.Be={},setTimeout(function(){return e.flush()},6e4)}},e.Pe=function(e,t,i){if(this.We&&i!==n.StatsApiKey){var r=n.getTenantId(i);this.Be[r]||(this.Be[r]={}),this.Be[r][e]?this.Be[r][e]=this.Be[r][e]+t:this.Be[r][e]=t}},e.We=!1,e.Be={},e}();t.default=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=i(6),o=i(12),s=i(13),a=i(3),u=i(2),d=i(7),c=function(){function e(){}return e.initialize=function(e,t){if(void 0===t&&(t={}),!this.we)return this.we=!0,o.default.defaultTenantToken=e,this.Ce(t),this.T.disableCookiesUsage&&!this.T.propertyStorageOverride&&(o.default.sessionEnabled=!1),d.default.addPropertyStorageOverride(this.T.propertyStorageOverride),d.default.autoCollect(o.default.semanticContext,this.T.disableCookiesUsage,this.T.userAgent),a.default.initialize(this.T),o.default.loggingEnabled=!0,this.T.enableAutoUserSession&&(this.getLogger().logSession(r.AWTSessionState.Started),window.addEventListener("beforeunload",this.flushAndTeardown)),this.getLogger()},e.getSemanticContext=function(){return o.default.semanticContext},e.flush=function(e){this.we&&!this.be&&a.default.flush(e)},e.flushAndTeardown=function(){this.we&&!this.be&&(this.T.enableAutoUserSession&&this.getLogger().logSession(r.AWTSessionState.Ended),a.default.flushAndTeardown(),o.default.loggingEnabled=!1,this.be=!0)},e.pauseTransmission=function(){this.we&&!this.be&&a.default.pauseTransmission()},e.resumeTransmision=function(){this.we&&!this.be&&a.default.resumeTransmision()},e.setTransmitProfile=function(e){this.we&&!this.be&&a.default.setTransmitProfile(e)},e.loadTransmitProfiles=function(e){this.we&&!this.be&&a.default.loadTransmitProfiles(e)},e.setContext=function(e,t,i){void 0===i&&(i=n.AWTPropertyType.Unspecified),o.default.logManagerContext.setProperty(e,t,i)},e.setContextWithPii=function(e,t,i,r){void 0===r&&(r=n.AWTPropertyType.Unspecified),o.default.logManagerContext.setPropertyWithPii(e,t,i,r)},e.setContextWithCustomerContent=function(e,t,i,r){void 0===r&&(r=n.AWTPropertyType.Unspecified),o.default.logManagerContext.setPropertyWithCustomerContent(e,t,i,r)},e.getLogger=function(e){var t=e;return t&&t!==o.default.defaultTenantToken||(t=""),this.Re[t]||(this.Re[t]=new s.default(t)),this.Re[t]},e.addNotificationListener=function(e){u.default.addNotificationListener(e)},e.removeNotificationListener=function(e){u.default.removeNotificationListener(e)},e.Ce=function(e){e.collectorUri&&(this.T.collectorUri=e.collectorUri),e.cacheMemorySizeLimitInNumberOfEvents>0&&(this.T.cacheMemorySizeLimitInNumberOfEvents=e.cacheMemorySizeLimitInNumberOfEvents),e.httpXHROverride&&e.httpXHROverride.sendPOST&&(this.T.httpXHROverride=e.httpXHROverride),e.propertyStorageOverride&&e.propertyStorageOverride.getProperty&&e.propertyStorageOverride.setProperty&&(this.T.propertyStorageOverride=e.propertyStorageOverride),e.userAgent&&(this.T.userAgent=e.userAgent),e.disableCookiesUsage&&(this.T.disableCookiesUsage=e.disableCookiesUsage),e.canSendStatEvent&&(this.T.canSendStatEvent=e.canSendStatEvent),e.enableAutoUserSession&&"undefined"!=typeof window&&window.addEventListener&&(this.T.enableAutoUserSession=e.enableAutoUserSession),e.clockSkewRefreshDurationInMins>0&&(this.T.clockSkewRefreshDurationInMins=e.clockSkewRefreshDurationInMins)},e.Re={},e.we=!1,e.be=!1,e.T={collectorUri:"https://browser.pipe.aria.microsoft.com/Collector/3.0/",cacheMemorySizeLimitInNumberOfEvents:1e4,disableCookiesUsage:!1,canSendStatEvent:function(e){return!0},clockSkewRefreshDurationInMins:0},e}();t.default=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(5),r=i(8),o=function(){function e(){}return e.logManagerContext=new n.default,e.sessionEnabled=!0,e.loggingEnabled=!1,e.defaultTenantToken="",e.semanticContext=new r.default(!0,e.logManagerContext),e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=i(6),o=i(5),s=i(1),a=i(10),u=i(2),d=i(3),c=i(12),_=i(15),l=i(8),p=i(7),f=function(){function e(e){this.De=e,this.Oe=new o.default,this.R=new l.default(!1,this.Oe),this.Ne=0,this.Me()}return e.prototype.setContext=function(e,t,i){void 0===i&&(i=n.AWTPropertyType.Unspecified),this.Oe.setProperty(e,t,i)},e.prototype.setContextWithPii=function(e,t,i,r){void 0===r&&(r=n.AWTPropertyType.Unspecified),this.Oe.setPropertyWithPii(e,t,i,r)},e.prototype.setContextWithCustomerContent=function(e,t,i,r){void 0===r&&(r=n.AWTPropertyType.Unspecified),this.Oe.setPropertyWithCustomerContent(e,t,i,r)},e.prototype.getSemanticContext=function(){return this.R},e.prototype.logEvent=function(t){if(c.default.loggingEnabled){this.De||(this.De=c.default.defaultTenantToken,this.Me());var i=!0;s.isString(t)?t={name:t}:t instanceof o.default&&(t=t.getEvent(),i=!1),a.default.eventReceived(this.De),e.ke(e.Ue(t,this.De,i),this.Oe)}},e.prototype.logSession=function(t,i){if(c.default.sessionEnabled){var o={name:"session",type:"session",properties:{}};if(e.xe(o,i),o.priority=n.AWTEventPriority.High,t===r.AWTSessionState.Started){if(this.Ne>0)return;this.Ne=(new Date).getTime(),this.Le=s.newGuid(),this.setContext("Session.Id",this.Le),o.properties["Session.State"]="Started"}else{if(t!==r.AWTSessionState.Ended)return;if(0===this.Ne)return;var a=Math.floor(((new Date).getTime()-this.Ne)/1e3);o.properties["Session.Id"]=this.Le,o.properties["Session.State"]="Ended",o.properties["Session.Duration"]=a.toString(),o.properties["Session.DurationBucket"]=e.Fe(a),this.Ne=0,this.setContext("Session.Id",null),this.Le=void 0}o.properties["Session.FirstLaunchTime"]=p.default.firstLaunchTime,this.logEvent(o)}},e.prototype.getSessionId=function(){return this.Le},e.prototype.logFailure=function(t,i,r,o,s){if(t&&i){var a={name:"failure",type:"failure",properties:{}};e.xe(a,s),a.properties["Failure.Signature"]=t,a.properties["Failure.Detail"]=i,r&&(a.properties["Failure.Category"]=r),o&&(a.properties["Failure.Id"]=o),a.priority=n.AWTEventPriority.High,this.logEvent(a)}},e.prototype.logPageView=function(t,i,n,r,o,s){if(t&&i){var a={name:"pageview",type:"pageview",properties:{}};e.xe(a,s),a.properties["PageView.Id"]=t,a.properties["PageView.Name"]=i,n&&(a.properties["PageView.Category"]=n),r&&(a.properties["PageView.Uri"]=r),o&&(a.properties["PageView.ReferrerUri"]=o),this.logEvent(a)}},e.prototype.Me=function(){!e.qe[this.De]&&this.De&&(e.qe[this.De]=s.newGuid())},e.xe=function(e,t){if(t){t instanceof o.default&&(t=t.getEvent()),t.name&&(e.name=t.name),t.priority&&(e.priority=t.priority);for(var i in t.properties)t.properties.hasOwnProperty(i)&&(e.properties[i]=t.properties[i])}},e.Fe=function(e){return e<0?"Undefined":e<=3?"UpTo3Sec":e<=10?"UpTo10Sec":e<=30?"UpTo30Sec":e<=60?"UpTo60Sec":e<=180?"UpTo3Min":e<=600?"UpTo10Min":e<=1800?"UpTo30Min":"Above30Min"},e.ke=function(e,t){return e.name&&s.isString(e.name)?(e.name=e.name.toLowerCase(),e.name=e.name.replace(s.EventNameDotRegex,"_"),e.type&&s.isString(e.type)?e.type=e.type.toLowerCase():e.type="custom",s.EventNameAndTypeRegex.test(e.name)&&s.EventNameAndTypeRegex.test(e.type)?((!s.isNumber(e.timestamp)||e.timestamp<0)&&(e.timestamp=(new Date).getTime()),e.properties||(e.properties={}),this.He(e,t.getPropertyMap()),this.He(e,c.default.logManagerContext.getPropertyMap()),this.Qe(e,"EventInfo.InitId",this.je(e.apiKey)),this.Qe(e,"EventInfo.Sequence",this.ze(e.apiKey)),this.Qe(e,"EventInfo.SdkVersion",_.FullVersionString),this.Qe(e,"EventInfo.Name",e.name),this.Qe(e,"EventInfo.Time",new Date(e.timestamp).toISOString()),s.isPriority(e.priority)||(e.priority=n.AWTEventPriority.Normal),void this.Ke(e)):void u.default.eventsRejected([e],n.AWTEventsRejectedReason.InvalidEvent)):void u.default.eventsRejected([e],n.AWTEventsRejectedReason.InvalidEvent)},e.He=function(e,t){if(t)for(var i in t)t.hasOwnProperty(i)&&(e.properties[i]||(e.properties[i]=t[i]))},e.Qe=function(e,t,i){e.properties[t]={value:i,pii:n.AWTPiiKind.NotSet,type:n.AWTPropertyType.String}},e.Ke=function(e){d.default.sendEvent(e)},e.Ue=function(e,t,i){if(e.properties=e.properties||{},i)for(var n in e.properties)e.properties.hasOwnProperty(n)&&(e.properties[n]=s.sanitizeProperty(n,e.properties[n]),null===e.properties[n]&&delete e.properties[n]);var r=e;return r.id=s.newGuid(),r.apiKey=t,r},e.je=function(t){return e.qe[t]},e.ze=function(t){return void 0===e.Ge[t]&&(e.Ge[t]=0),(++e.Ge[t]).toString()},e.Ge={},e.qe={},e}();t.default=f},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AWT_REAL_TIME="REAL_TIME",t.AWT_NEAR_REAL_TIME="NEAR_REAL_TIME",t.AWT_BEST_EFFORT="BEST_EFFORT"},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Version="1.8.3",t.FullVersionString="AWT-Web-JS-"+t.Version},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.AWTPropertyType=n.AWTPropertyType,t.AWTPiiKind=n.AWTPiiKind,t.AWTEventPriority=n.AWTEventPriority,t.AWTEventsDroppedReason=n.AWTEventsDroppedReason,t.AWTEventsRejectedReason=n.AWTEventsRejectedReason,t.AWTCustomerContentKind=n.AWTCustomerContentKind;var r=i(6);t.AWTUserIdType=r.AWTUserIdType,t.AWTSessionState=r.AWTSessionState;var o=i(14);t.AWT_BEST_EFFORT=o.AWT_BEST_EFFORT,t.AWT_NEAR_REAL_TIME=o.AWT_NEAR_REAL_TIME,t.AWT_REAL_TIME=o.AWT_REAL_TIME;var s=i(5);t.AWTEventProperties=s.default;var a=i(13);t.AWTLogger=a.default;var u=i(11);t.AWTLogManager=u.default;var d=i(29);t.AWTTransmissionManager=d.default;var c=i(9);t.AWTSerializer=c.default;var _=i(8);t.AWTSemanticContext=_.default,t.AWT_COLLECTOR_URL_UNITED_STATES="https://us.pipe.aria.microsoft.com/Collector/3.0/",t.AWT_COLLECTOR_URL_GERMANY="https://de.pipe.aria.microsoft.com/Collector/3.0/",t.AWT_COLLECTOR_URL_JAPAN="https://jp.pipe.aria.microsoft.com/Collector/3.0/",t.AWT_COLLECTOR_URL_AUSTRALIA="https://au.pipe.aria.microsoft.com/Collector/3.0/",t.AWT_COLLECTOR_URL_EUROPE="https://eu.pipe.aria.microsoft.com/Collector/3.0/",t.AWT_COLLECTOR_URL_USGOV_DOD="https://pf.pipe.aria.microsoft.com/Collector/3.0",t.AWT_COLLECTOR_URL_USGOV_DOJ="https://tb.pipe.aria.microsoft.com/Collector/3.0"},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e[e.Ve=0]="_BT_STOP",e[e.Xe=1]="_BT_STOP_BASE",e[e.ge=2]="_BT_BOOL",e[e.Se=8]="_BT_DOUBLE",e[e.oe=9]="_BT_STRING",e[e.de=10]="_BT_STRUCT",e[e.se=11]="_BT_LIST",e[e.ie=13]="_BT_MAP",e[e.ye=16]="_BT_INT32",e[e.ce=17]="_BT_INT64"}(t.ne||(t.ne={}))},function(e,t,i){"use strict";function n(e){for(var t=[],i=0;i<e.length;++i){var n=e.charCodeAt(i);n<128?t.push(n):n<2048?t.push(192|n>>6,128|63&n):n<55296||n>=57344?t.push(224|n>>12,128|n>>6&63,128|63&n):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++i)),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return t}function r(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=[],n=e.length%3,r=0,o=e.length-n;r<o;r+=3){var s=(e[r]<<16)+(e[r+1]<<8)+e[r+2];i.push(function(e){return[t.charAt(e>>18&63),t.charAt(e>>12&63),t.charAt(e>>6&63),t.charAt(63&e)].join("")}(s))}switch(n){case 1:var s=e[e.length-1];i.push(t.charAt(s>>2)),i.push(t.charAt(s<<4&63)),i.push("==");break;case 2:var a=(e[e.length-2]<<8)+e[e.length-1];i.push(t.charAt(a>>10)),i.push(t.charAt(a>>4&63)),i.push(t.charAt(a<<2&63)),i.push("=")}return i.join("")}function o(e){for(var t=[];4294967168&e;)t.push(127&e|128),e>>>=7;return t.push(127&e),t}function s(e){for(var t=e.low,i=e.high,n=[];i||4294967168&t;)n.push(127&t|128),t=(127&i)<<25|t>>>7,i>>>=7;return n.push(127&t),n}function a(e){if(l.BrowserChecker.Ze()){var t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e,!0);for(var i=[],n=0;n<8;++n)i.push(t.getUint8(n));return i}return _.FloatUtils.Je(e,!0)}function u(e){return(e=c.Number.B(e))<<1^e>>31}function d(e){var t=e.low,i=e.high,n=i<<1|t>>>31,r=t<<1;2147483648&i&&(n=~n,r=~r);var o=new c.UInt64("0");return o.low=r,o.high=n,o}Object.defineProperty(t,"__esModule",{value:!0});var c=i(4),_=i(19),l=i(22);t.Ye=n,t.Ie=r,t.he=o,t.$e=s,t.et=a,t.tt=u,t.it=d},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.Je=function(e,t){if(!e)return t?this.nt:this.rt;var i=t?11:8,n=t?52:23,r=(1<<i-1)-1,o=1-r,s=r,a=e<0?1:0;e=Math.abs(e);for(var u=Math.floor(e),d=e-u,c=2*(r+2)+n,_=new Array(c),l=0;l<c;)_[l++]=0;for(l=r+2;l&&u;)_[--l]=u%2,u=Math.floor(u/2);for(l=r+1;l<c-1&&d>0;)d*=2,d>=1?(_[++l]=1,--d):_[++l]=0;for(var p=0;p<c&&!_[p];)p++;var f=r+1-p,h=p+n;if(_[h+1]){for(l=h;l>p&&(_[l]=1-_[l],!_);--l);l===p&&++f}if(f>s||u)return a?t?this.ot:this.st:t?this.at:this.ut;if(f<o)return t?this.nt:this.rt;if(t){var v=0;for(l=0;l<20;++l)v=v<<1|_[++p];for(var y=0;l<52;++l)y=y<<1|_[++p];v|=f+r<<20,v=a<<31|2147483647&v;var T=[255&y,y>>8&255,y>>16&255,y>>>24,255&v,v>>8&255,v>>16&255,v>>>24];return T}var g=0;for(l=0;l<23;++l)g=g<<1|_[++p];g|=f+r<<23,g=a<<31|2147483647&g;var T=[255&g,g>>8&255,g>>16&255,g>>>24];return T},e.rt=[0,0,0,0],e.nt=[0,0,0,0,0,0,0,0],e.ut=[0,0,128,127],e.st=[0,0,128,255],e.at=[0,0,0,0,0,0,240,127],e.ot=[0,0,0,0,0,0,240,255],e}();t.FloatUtils=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4),r=function(){function e(){this.dt=[]}return e.prototype.ct=function(e){this.dt.push(n.Number.W(e))},e.prototype._t=function(e,t,i){for(;i--;)this.ct(e[t++])},e.prototype.le=function(){return this.dt},e}();t.MemoryStream=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(17);t.ne=n.ne;var r=i(18);t.ve=r;var o=i(20);t.IO=o;var s=i(4);t.Int64=s.Int64,t.UInt64=s.UInt64,t.Number=s.Number;var a=function(){function e(e){this.lt=e}return e.prototype.pt=function(e){this.lt._t(e,0,e.length)},e.prototype.me=function(e){this.lt.ct(e?1:0)},e.prototype.ue=function(e,t){this.ft(t),this.ht(e)},e.prototype.re=function(e,t,i){this.ft(t),this.ft(i),this.ht(e)},e.prototype.Ae=function(e){var t=r.et(e);this.lt._t(t,0,t.length)},e.prototype.te=function(e,t,i){t<=5?this.lt.ct(e|t<<5):t<=255?(this.lt.ct(192|e),this.lt.ct(t)):(this.lt.ct(224|e),this.lt.ct(t),this.lt.ct(t>>8))},e.prototype.Te=function(e){e=r.tt(e),this.ht(e)},e.prototype._e=function(e){this.vt(r.it(e))},e.prototype.ae=function(e){if(""===e)this.ht(0);else{var t=r.Ye(e);this.ht(t.length),this.lt._t(t,0,t.length)}},e.prototype.fe=function(e){this.ft(e?n.ne.Xe:n.ne.Ve)},e.prototype.ht=function(e){var t=r.he(s.Number.w(e));this.lt._t(t,0,t.length)},e.prototype.vt=function(e){var t=r.$e(e);this.lt._t(t,0,t.length)},e.prototype.ft=function(e){this.lt.ct(s.Number.P(e))},e}();t.CompactBinaryProtocolWriter=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.Ze=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},e}();t.BrowserChecker=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.clockSkewRefreshDurationInMins=e,this.yt()}return e.prototype.allowRequestSending=function(){return this.Tt&&!this.gt?(this.Tt=!1,this.mt=!1,!0):this.mt},e.prototype.shouldAddClockSkewHeaders=function(){return this.St},e.prototype.getClockSkewHeaderValue=function(){return this.At},e.prototype.setClockSkew=function(e){this.gt||(e?this.At=e:this.St=!1,this.gt=!0,this.mt=!0)},e.prototype.yt=function(){var e=this;this.Tt=!0,this.gt=!1,this.mt=!0,this.St=!0,this.At="use-collector-delta",this.clockSkewRefreshDurationInMins>0&&setTimeout(function(){return e.yt()},6e4*this.clockSkewRefreshDurationInMins)},e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.It={}}return e.prototype.setKillSwitchTenants=function(e,t){if(e&&t)try{var i=e.split(",");if("this-request-only"===t)return i;for(var n=1e3*parseInt(t,10),r=0;r<i.length;++r)this.It[i[r]]=Date.now()+n}catch(e){return[]}return[]},e.prototype.isTenantKilled=function(e){return void 0!==this.It[e]&&this.It[e]>Date.now()||(delete this.It[e],!1)},e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=function(){function e(e,t){this.Et=e,this.Wt=t,this.Pt={},this.Bt=0}return e.prototype.addEventToBatch=function(e){if(e.priority===n.AWTEventPriority.Immediate_sync){var t={};return t[e.apiKey]=[e],t}return this.Bt>=this.Wt&&this.flushBatch(),void 0===this.Pt[e.apiKey]&&(this.Pt[e.apiKey]=[]),this.Pt[e.apiKey].push(e),this.Bt++,null},e.prototype.flushBatch=function(){this.Bt>0&&(this.Et.push(this.Pt),this.Pt={},this.Bt=0)},e.prototype.hasBatch=function(){return this.Bt>0},e}();t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.shouldRetryForStatus=function(e){return!(e>=300&&e<500&&408!==e||501===e||505===e)},e.getMillisToBackoffForRetry=function(e){var t=0,i=Math.floor(1200*Math.random())+2400;return t=Math.pow(4,e)*i,Math.min(t,12e4)},e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=i(9),o=i(26),s=i(24),a=i(23),u=i(15),d=i(1),c=i(2),_=i(3),l="POST",p=function(){function e(e,t,i,n,r){var o=this;this.wt=e,this.Ct=i,this.bt=n,this.Rt="?qsp=true&content-type=application%2Fbond-compact-binary&client-id=NO_AUTH&sdk-version="+u.FullVersionString,this.Dt=new s.default,this._=!1,this.Ot=!1,this.Nt=0,this.Mt=new a.default(r),d.isUint8ArrayAvailable()||(this.Rt+="&content-encoding=base64"),this.Rt=t+this.Rt,this.bt||(this.Ot=!d.isReactNative(),this.bt={sendPOST:function(e,t,i,n,r,s){try{if(d.useXDomainRequest()){var a=new XDomainRequest;a.open(l,e),a.onload=function(){r(200,null)},a.onerror=function(){n(400,null)},a.ontimeout=function(){i(500,null)},a.send(t)}else if(d.isReactNative())fetch(e,{body:t,method:l}).then(function(e){var t={};e.headers&&e.headers.forEach(function(e,i){t[i]=e}),r(e.status,t)}).catch(function(e){n(0,{})});else{var u=new XMLHttpRequest;u.open(l,e,!s),u.onload=function(){r(u.status,o.kt(u.getAllResponseHeaders()))},u.onerror=function(){n(u.status,o.kt(u.getAllResponseHeaders()))},u.ontimeout=function(){i(u.status,o.kt(u.getAllResponseHeaders()))},u.send(t)}}catch(e){n(400,null)}}})}return e.prototype.hasIdleConnection=function(){return this.Nt<2},e.prototype.sendQueuedRequests=function(){for(;this.hasIdleConnection()&&!this._&&this.wt.length>0&&this.Mt.allowRequestSending();)this.Nt++,this.Ut(this.wt.shift(),0,!1);this.hasIdleConnection()&&_.default.scheduleTimer()},e.prototype.isCompletelyIdle=function(){return 0===this.Nt},e.prototype.teardown=function(){for(;this.wt.length>0;)this.Ut(this.wt.shift(),0,!0)},e.prototype.pause=function(){this._=!0},e.prototype.resume=function(){this._=!1,this.sendQueuedRequests()},e.prototype.removeQueuedRequests=function(){this.wt.length=0},e.prototype.sendSynchronousRequest=function(e,t){this._&&(e[t][0].priority=n.AWTEventPriority.High),this.Nt++,this.Ut(e,0,!1,!0)},e.prototype.Ut=function(e,t,i,o){var s=this;void 0===o&&(o=!1);try{if(this._)return this.Nt--,void this.Ct.addBackRequest(e);var a=0,u="";for(var _ in e)e.hasOwnProperty(_)&&(this.Dt.isTenantKilled(_)?(c.default.eventsRejected(e[_],n.AWTEventsRejectedReason.KillSwitch),delete e[_]):(u.length>0&&(u+=","),u+=_,a++));if(a>0){var l=r.default.getPayloadBlob(e,a);l.remainingRequest&&this.wt.push(l.remainingRequest);var p=this.Rt+"&x-apikey="+u+"&client-time-epoch-millis="+Date.now().toString();this.Mt.shouldAddClockSkewHeaders()&&(p=p+"&time-delta-to-apply-millis="+this.Mt.getClockSkewHeaderValue());var f=void 0;f=d.isUint8ArrayAvailable()?new Uint8Array(l.payloadBlob):r.default.base64Encode(l.payloadBlob);for(var _ in e)if(e.hasOwnProperty(_))for(var h=0;h<e[_].length;++h)e[_][h].sendAttempt>0?e[_][h].sendAttempt++:e[_][h].sendAttempt=1;if(this.Ot&&i&&d.isBeaconsSupported()&&navigator.sendBeacon(p,f))return;this.bt.sendPOST(p,f,function(n,r){s.xt(n,r,e,a,u,t,i,o)},function(n,r){s.xt(n,r,e,a,u,t,i,o)},function(n,r){s.xt(n,r,e,a,u,t,i,o)},i||o)}else i||this.Lt(!1,{},i,o)}catch(e){this.Lt(!1,{},i,o)}},e.prototype.xt=function(e,t,i,r,s,a,u,d){var l=this,p=!0;if(void 0!==e){if(t){var f=this.Dt.setKillSwitchTenants(t["kill-tokens"],t["kill-duration-seconds"]);this.Mt.setClockSkew(t["time-delta-millis"]);for(var h=0;h<f.length;++h)c.default.eventsRejected(i[f[h]],n.AWTEventsRejectedReason.KillSwitch),delete i[f[h]],r--}else this.Mt.setClockSkew(null);if(200===e)return void this.Lt(!0,i,u,d);(!o.default.shouldRetryForStatus(e)||r<=0)&&(p=!1)}if(p)if(d)this.Nt--,i[s][0].priority=n.AWTEventPriority.High,this.Ct.addBackRequest(i);else if(a<1){for(var v in i)i.hasOwnProperty(v)&&c.default.eventsRetrying(i[v]);setTimeout(function(){return l.Ut(i,a+1,!1)},o.default.getMillisToBackoffForRetry(a))}else this.Nt--,_.default.backOffTransmission(),this.Ct.addBackRequest(i);else this.Lt(!1,i,u,d)},e.prototype.Lt=function(e,t,i,r){e&&_.default.clearBackOff();for(var o in t)t.hasOwnProperty(o)&&(e?c.default.eventsSent(t[o]):c.default.eventsDropped(t[o],n.AWTEventsDroppedReason.NonRetryableStatus));this.Nt--,r||i||this.sendQueuedRequests()},e.prototype.kt=function(e){var t={};if(e)for(var i=e.split("\n"),n=0;n<i.length;++n){var r=i[n].split(": ");t[r[0]]=r[1]}return t},e}();t.default=p},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=i(27),o=i(3),s=i(25),a=i(2),u=i(1),d=500,c=function(){function e(e,t,i,o){this.Ft=t,this.qt=!1,this.Ht=[],this.Qt=!1,this._=!1,this.jt=0,this.Et=[],this.zt={},this.zt[n.AWTEventPriority.High]=[],this.zt[n.AWTEventPriority.Normal]=[],this.zt[n.AWTEventPriority.Low]=[],this.Kt(),this.Gt=new s.default(this.Et,d),this.Vt=new r.default(this.Et,e,this,i,o)}return e.prototype.addEvent=function(e){u.isPriority(e.priority)||(e.priority=n.AWTEventPriority.Normal),e.priority===n.AWTEventPriority.Immediate_sync?this.Vt.sendSynchronousRequest(this.Gt.addEventToBatch(e),e.apiKey):this.jt<this.Ft?this.Xt(e):this.Zt(e.priority)?this.Xt(e):a.default.eventsDropped([e],n.AWTEventsDroppedReason.QueueFull)},e.prototype.sendEventsForPriorityAndAbove=function(e){this.Jt(e),this.Vt.sendQueuedRequests()},e.prototype.hasEvents=function(){return(this.zt[n.AWTEventPriority.High][0].length>0||this.zt[n.AWTEventPriority.Normal][0].length>0||this.zt[n.AWTEventPriority.Low][0].length>0||this.Gt.hasBatch())&&this.Vt.hasIdleConnection()},e.prototype.addBackRequest=function(e){if(!this._||!this.Qt){for(var t in e)if(e.hasOwnProperty(t))for(var i=0;i<e[t].length;++i)e[t][i].sendAttempt<6?this.addEvent(e[t][i]):a.default.eventsDropped([e[t][i]],n.AWTEventsDroppedReason.NonRetryableStatus);o.default.scheduleTimer()}},e.prototype.teardown=function(){this._||(this.Jt(n.AWTEventPriority.Low),this.Vt.teardown())},e.prototype.uploadNow=function(e){var t=this;this.Kt(),this.qt?this.Ht.push(e):(this.qt=!0,setTimeout(function(){return t.Yt(e)},0))},e.prototype.pauseTransmission=function(){this._=!0,this.Vt.pause(),this.shouldDropEventsOnPause&&(this.jt-=this.zt[n.AWTEventPriority.High][0].length+this.zt[n.AWTEventPriority.Normal][0].length+this.zt[n.AWTEventPriority.Low][0].length,this.zt[n.AWTEventPriority.High][0]=[],this.zt[n.AWTEventPriority.Normal][0]=[],this.zt[n.AWTEventPriority.Low][0]=[],this.Vt.removeQueuedRequests())},e.prototype.resumeTransmission=function(){this._=!1,this.Vt.resume()},e.prototype.shouldDropEventsOnPause=function(e){this.Qt=e},e.prototype.$t=function(){this.zt[n.AWTEventPriority.High].shift(),this.zt[n.AWTEventPriority.Normal].shift(),this.zt[n.AWTEventPriority.Low].shift()},e.prototype.Kt=function(){this.zt[n.AWTEventPriority.High].push([]),this.zt[n.AWTEventPriority.Normal].push([]),this.zt[n.AWTEventPriority.Low].push([])},e.prototype.Xt=function(e){this._&&this.Qt||(this.jt++,this.zt[e.priority][this.zt[e.priority].length-1].push(e))},e.prototype.Zt=function(e){for(var t=n.AWTEventPriority.Low;t<=e;){if(this.zt[t][this.zt[t].length-1].length>0)return a.default.eventsDropped([this.zt[t][this.zt[t].length-1].shift()],n.AWTEventsDroppedReason.QueueFull),!0;t++}return!1},e.prototype.Jt=function(e){for(var t=n.AWTEventPriority.High;t>=e;){for(;this.zt[t][0].length>0;){var i=this.zt[t][0].pop();this.jt--,this.Gt.addEventToBatch(i)}t--}this.Gt.flushBatch()},e.prototype.Yt=function(e){var t=this;this.hasEvents()&&this.sendEventsForPriorityAndAbove(n.AWTEventPriority.Low),this.ei(function(){t.$t(),null!==e&&void 0!==e&&e(),t.Ht.length>0?setTimeout(function(){return t.Yt(t.Ht.shift())},0):(t.qt=!1,t.hasEvents()&&o.default.scheduleTimer())})},e.prototype.ei=function(e){var t=this;this.Vt.isCompletelyIdle()?e():setTimeout(function(){return t.ei(e)},250)},e}();t.default=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(3),r=function(){function e(){}return e.setEventsHandler=function(e){n.default.setEventsHandler(e)},e.getEventsHandler=function(){return n.default.getEventsHandler()},e.scheduleTimer=function(){n.default.scheduleTimer()},e}();t.default=r},function(e,t,i){e.exports=i(16)}])});
//# sourceMappingURL=aria-webjs-sdk-1.8.3.min.js.map 
 
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Analytics;
        (function (Analytics) {
            class InitData {
            }
            Analytics.InitData = InitData;
            class Conversation {
            }
            Analytics.Conversation = Conversation;
            class CustomDataEntity {
            }
            Analytics.CustomDataEntity = CustomDataEntity;
            class Session {
            }
            Analytics.Session = Session;
            class ParticipantsEntity {
            }
            Analytics.ParticipantsEntity = ParticipantsEntity;
            class EventData {
            }
            Analytics.EventData = EventData;
            class EventEntity {
            }
            Analytics.EventEntity = EventEntity;
        })(Analytics = CIFramework.Analytics || (CIFramework.Analytics = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/**
 * Constants for CIFramework.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var postMessageNamespace;
        (function (postMessageNamespace) {
            /**
             * retry count for post message function
             */
            postMessageNamespace.retryCount = 3;
            /**
             * wait time for receiving a response from the listener window, before we reject the promise
             */
            postMessageNamespace.promiseTimeOut = 10000; // in milliseconds
            /**
             * String for correlationId to be used as a key.
             */
            postMessageNamespace.messageCorrelationId = 'messageCorrelationId';
            /**
             * String to represent a successful result.
             */
            postMessageNamespace.messageSuccess = 'success';
            postMessageNamespace.messageFailure = 'failure';
            /**
             * String to represent a web-socket message.
             */
            postMessageNamespace.messageConstant = 'message';
            postMessageNamespace.originURL = 'originURL';
            postMessageNamespace.message = 'message';
            /**
            * utility func to create a promise and reject it with the passed error message
            */
            function rejectWithErrorMessage(errorMessage) {
                return Promise.reject(JSON.stringify(Microsoft.CIFramework.Utility.buildEntity(Microsoft.CIFramework.Utility.createErrorMap(errorMessage))));
            }
            postMessageNamespace.rejectWithErrorMessage = rejectWithErrorMessage;
        })(postMessageNamespace = CIFramework.postMessageNamespace || (CIFramework.postMessageNamespace = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
// export { };
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/**
 * Constants for CIFramework.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Utility;
        (function (Utility) {
            const webresourceName = "Localization/CIF_CEC_Strings";
            const resourceStringDict = new Map([["ADD_NOTE_TEXT", "Add note"],
                ["CLOSE_BUTTON_TEXT", "Close"],
                ["START_NOTES_TOOLTIP_TEXT", "Start adding notes"],
                ["NOTES_TOOLTIP_TEXT", "Take Notes"],
                ["CANCEL_BUTTON_TEXT", "Cancel"],
                ["NOTIFICATION_DETAIL_WAIT_TIME_TEXT", "Wait time"],
                ["PRESENCE_AWAY_TEXT", "Away"],
                ["LAUNCH_PRESENCE_DIALOG_TOOLTIP", "Launch presence dialog"],
                ["PRESENCE_AVAILABLE_TEXT", "Available"],
                ["PRESENCE_OFFLINE_TEXT", "Offline"],
                ["PRESENCE_BUSY_TEXT", "Busy"],
                ["PRESENCE_DO_NOT_DISTURB_TEXT", "Do Not Disturb"],
                ["PRESENCE_FAILED_TEXT", "Presence loading failed"],
                ["PRESENCE_BUTTON_TEXT", "Presence"],
                ["PRESENCE_UNKOWN_TEXT", "Unknown"],
                ["DIAGNOSTIC_TEXT_COPY_FAILURE", "Something went wrong. Please try copying your report again."],
                ["DIAGNOSTIC_TEXT", "Your diagnostic report was copied to your clipboard."],
                ["AGENT_IMAGE_ALT_TEXT", "Agent Image"],
                ["THIRD_PARTY_COOKIE_BLOCKED_NOTIFICATION", "Third party cookies are blocked. Please unblock cookies for Omnichannel to work."]
            ]);
            function getResourceString(key) {
                let value = key;
                if (Xrm && Xrm.Utility && Xrm.Utility.getResourceString) {
                    try {
                        value = Xrm.Utility.getResourceString(webresourceName, key);
                        if (value === undefined || value === null) {
                            value = key;
                        }
                    }
                    catch (error) {
                        value = getResourceStringValue(key);
                    }
                }
                return value;
            }
            Utility.getResourceString = getResourceString;
            function getResourceStringValue(key) {
                if (resourceStringDict.has(key))
                    return resourceStringDict.get(key);
                else
                    return key;
            }
            /**
             * utility func to create a error map with the error message and optional error code
            */
            function createErrorMap(errorMessage, apiName) {
                return new Map().set(CIFramework.Constants.message, errorMessage).set(CIFramework.Constants.nameParameter, apiName);
            }
            Utility.createErrorMap = createErrorMap;
            /**
             * utility func to check whether argument passed if of type Error Object
             * @param arg Object to check whether it is Error or not.
            */
            function isError(arg) {
                return (arg.message !== undefined);
            }
            Utility.isError = isError;
            function launchSearchPage(searchQuery, entityName) {
                try {
                    const searchPageInput = {
                        pageType: "search",
                        searchText: Microsoft.CIFramework.Utility.extractSearchText(searchQuery),
                        searchType: 1,
                        EntityNames: [entityName],
                        EntityGroupName: "",
                    };
                    const xrmInstance = (window.top.getCurrentXrm()) || Xrm;
                    xrmInstance.Navigation.navigateTo(searchPageInput);
                }
                catch (error) {
                    //
                }
            }
            Utility.launchSearchPage = launchSearchPage;
            /**
             * Given a key-value object, this func returns an equivalent Map object for it.
             * @param dict Object to build the map for.
             */
            function buildMap(dict) {
                if (isError(dict)) {
                    return createErrorMap(dict.message);
                }
                else {
                    const map = new Map();
                    Object.keys(dict).forEach((key) => {
                        map.set(key, dict[key]);
                    });
                    return map;
                }
            }
            Utility.buildMap = buildMap;
            /**
             * Generic method to convert map data into string
             * @param map
             */
            function mapToString(map, exclusionList = []) {
                let result = "";
                if (!map) {
                    return "";
                }
                map.forEach((value, key) => {
                    if (exclusionList.indexOf(key) === -1) {
                        result += key + " : " + value + ", ";
                    }
                });
                return result;
            }
            Utility.mapToString = mapToString;
            /**
             * This funtion checks for Item Collections in the input object, If found, removes the _collection key and collection items in the parent property.
             * Otherwise, leaves the property as it as. So it is flattening the collection property only.
             * @param obj Entity metadata object from Xrm
             * @returns Object with flattened _collection property
             */
            function flattenMetadata(obj) {
                const ret = {};
                if (Object.getPrototypeOf(obj) == null || Object.getPrototypeOf(obj) === "undefined") {
                    return obj;
                }
                const propNames = Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).filter(n => n !== 'constructor');
                for (const pi in propNames) {
                    const prop = propNames[pi];
                    ret[prop] = (typeof (obj[prop]) === "object" && obj[prop].hasOwnProperty("_collection"))
                        ? this.flattenCollection(obj[prop]["_collection"])
                        : ret[prop] = obj[prop];
                }
                return ret;
            }
            Utility.flattenMetadata = flattenMetadata;
            /**
             * Flattens the records of collection
             * @param collection Item Collection from Xrm
             */
            function flattenCollection(collection) {
                const result = {};
                if (typeof collection === "object" && Object.keys(collection).length) {
                    for (const key in collection) {
                        result[key] = this.flattenMetadata(collection[key]);
                    }
                }
                return result;
            }
            Utility.flattenCollection = flattenCollection;
            /**
             * Given a map, this func returns an equivalent XrmClientApi.WebApi.Entity object for it.
             * @param map Object to build the entity for.
             */
            function buildEntity(map) {
                const entity = {};
                map.forEach((value, key) => {
                    entity[key] = value;
                });
                return entity;
            }
            Utility.buildEntity = buildEntity;
            function extractParameter(queryString, parameterName) {
                const params = {};
                if (queryString) {
                    const queryStringArray = queryString.substr(1).split("&");
                    queryStringArray.forEach((query) => {
                        const queryPair = query.split("=");
                        const queryKey = decodeURIComponent(queryPair.shift());
                        const queryValue = decodeURIComponent(queryPair.join("="));
                        params[queryKey] = queryValue;
                    });
                }
                if (params.hasOwnProperty(parameterName))
                    return params[parameterName];
                else
                    return "";
            }
            Utility.extractParameter = extractParameter;
            function extractSearchText(queryString) {
                const emptyString = "";
                if (queryString) {
                    const query = queryString.split("=");
                    return (query[1] != null && query[1] !== "") ? query[1] : emptyString;
                }
                return emptyString;
            }
            Utility.extractSearchText = extractSearchText;
            function splitQueryForSearch(queryString) {
                let splitQuery = [];
                if (queryString) {
                    splitQuery = queryString.split("&");
                }
                const splitSearchQuery = ["", ""];
                splitQuery.forEach((query) => {
                    if (!query.startsWith("$search") && !query.startsWith("?$search")) {
                        splitSearchQuery[0] === "" ? splitSearchQuery[0] += query : splitSearchQuery[0] += "&" + query;
                    }
                    else {
                        splitSearchQuery[1] = query;
                    }
                });
                if (!splitSearchQuery[0].startsWith("?")) {
                    splitSearchQuery[0] = "?" + splitSearchQuery[0];
                }
                if (splitSearchQuery[1].startsWith("?")) {
                    splitSearchQuery[1] = splitSearchQuery[1].substr(1);
                }
                return splitSearchQuery;
            }
            Utility.splitQueryForSearch = splitQueryForSearch;
            /**
             * Converts given rgb value to hex value
             */
            function rgb2hex(value) {
                const rgb = value.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
                return (rgb && rgb.length === 4) ? "#" +
                    ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2).toUpperCase() +
                    ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2).toUpperCase() +
                    ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2).toUpperCase() : value;
            }
            Utility.rgb2hex = rgb2hex;
            /**
             * Utility to get element by id from iframe
             */
            function getElementFromIframe(iFrameObject, id) {
                return iFrameObject.contentWindow.document.getElementById(id);
            }
            Utility.getElementFromIframe = getElementFromIframe;
            /**
             * Utility to get elements by classname from iframe
             */
            function getElementsByClassName(iFrameObject, className) {
                return iFrameObject.contentWindow.document.getElementsByClassName(className);
            }
            Utility.getElementsByClassName = getElementsByClassName;
            function blinkBrowserTab(iFrameObject) {
                if (iFrameObject.contentWindow.document.hasFocus() || window.top.titleAnimation === true) {
                    return;
                }
                const originalTitle = window.top.document.title; // save original title
                const animatedTitle = "New notification";
                const timer = setInterval(startAnimation, 800);
                window.top.titleAnimation = true;
                function startAnimation() {
                    // animate between the original and the new title
                    window.top.document.title = window.top.document.title === animatedTitle ? originalTitle : animatedTitle;
                }
                const restoreTitleFunction = function restoreTitle() {
                    clearInterval(timer);
                    window.top.document.title = originalTitle; // restore original title
                    window.top.titleAnimation = false;
                    iFrameObject.contentWindow.removeEventListener("focus", restoreTitleFunction);
                };
                // Change page title back on focus
                iFrameObject.contentWindow.addEventListener("focus", restoreTitleFunction);
            }
            Utility.blinkBrowserTab = blinkBrowserTab;
            /**
             * Utility to compare crm versions. Returns true if version1 >= version2, false if version1 < version2
             */
            function compareVersion(version1, version2) {
                const version1parts = version1.split('.');
                const version2parts = version2.split('.');
                if (version1parts.length !== version2parts.length) {
                    return false;
                }
                for (let i = 0; i < version1parts.length; ++i) {
                    const v1 = parseInt(version1parts[i], 10);
                    const v2 = parseInt(version2parts[i], 10);
                    if (v1 > v2) {
                        return true;
                    }
                    else if (v1 < v2) {
                        return false;
                    }
                }
                return true;
            }
            Utility.compareVersion = compareVersion;
            function onFormSaveHandler(context) {
                const sessionId = window.top.Microsoft.AppRuntime.Sessions.getFocusedSession().sessionId;
                const tabId = window.top.Microsoft.AppRuntime.Sessions.getFocusedSession().getFocusedTab().tabId;
                const preNavigateHandler = (event) => {
                    window.top.Xrm.Navigation.removeOnPreNavigation(preNavigateHandler);
                    window.top.Microsoft.AppRuntime.Sessions.getSession(sessionId).getTab(tabId).close();
                };
                const intervalFunction = setInterval(() => {
                    try {
                        const formContext = context.getFormContext();
                        const entityId = formContext.data.entity.getId();
                        if (entityId !== "") {
                            clearInterval(intervalFunction);
                            window.top.dispatchEvent(new CustomEvent("entityRecordSaved", {
                                detail: {
                                    entityLogicalName: formContext.data.entity.getEntityName(),
                                    entityId
                                }
                            }));
                            if (context.getEventArgs().getSaveMode() === 2) { // save and close
                                window.top.Xrm.Navigation.addOnPreNavigation(preNavigateHandler);
                            }
                        }
                    }
                    catch (error) {
                        clearInterval(intervalFunction);
                        // tslint:disable-next-line:no-console
                        console.log("Error in onFormSaveHandler. " + error);
                    }
                }, 100);
                window.top.Xrm.Page.data.entity.removeOnSave(Microsoft.CIFramework.Utility.onFormSaveHandler);
            }
            Utility.onFormSaveHandler = onFormSaveHandler;
            function newGuid() {
                const guidRegex = /[xy]/g;
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(guidRegex, (c) => {
                    // tslint:disable-next-line:no-bitwise
                    const r = (Math.random() * 16 | 0);
                    // tslint:disable-next-line:no-bitwise
                    const v = (c === 'x' ? r : r & 0x3 | 0x8);
                    return v.toString(16);
                });
            }
            Utility.newGuid = newGuid;
            function loadScript(url) {
                return new Promise((resolve, reject) => {
                    try {
                        const script = document.createElement("script");
                        script.src = url;
                        script.type = 'text/javascript';
                        script.addEventListener('load', () => resolve(script), false);
                        script.addEventListener('error', () => reject(script), false);
                        window.top.document.getElementsByTagName("head")[0].appendChild(script);
                    }
                    catch (error) {
                        reject(`Could not load script ${url}, Error:${error}`);
                    }
                });
            }
            Utility.loadScript = loadScript;
            class StringHelper {
                /**
                * @remarks Limited functionality implemented
                * @returns a formatted string, similar to string. Format in C#.
                */
                static Format(format, ...args) {
                    let returnValue = format;
                    for (let i = 1; i < arguments.length; i++) {
                        const actualValue = typeof (arguments[i]) === "undefined" || arguments[i] == null ? "" : arguments[i].toString();
                        returnValue = returnValue.replace(new RegExp("\\{" + (i - 1) + "\\}", 'g'), actualValue);
                    }
                    return returnValue;
                }
            }
            Utility.StringHelper = StringHelper;
            class TemplateResolverUtility {
                /**
             * Given the input bag for templates, the function gives the templatename after execueting function mentioned in templateNameResolver property.
             * Else it returns input.templateName
             * @param input The input bag for APIs like createSession
             */
                static resolveTemplateName(templateNameResolver, templateName) {
                    const promise = new Promise((resolve, reject) => {
                        try {
                            if (templateNameResolver == null || typeof templateNameResolver === "undefined") {
                                resolve(new TemplateNameResolverResult(templateName, false));
                            }
                            else {
                                Xrm.Utility.executeFunction(templateNameResolver.webresourceName, templateNameResolver.functionName, templateNameResolver.parameters).then((response) => {
                                    resolve(new TemplateNameResolverResult(response, true));
                                }, (error) => {
                                    resolve(new TemplateNameResolverResult(templateName, false));
                                });
                            }
                        }
                        catch (error) {
                            resolve(new TemplateNameResolverResult(templateName, false));
                        }
                    });
                    return promise;
                }
            }
            Utility.TemplateResolverUtility = TemplateResolverUtility;
            class TemplateNameResolverResult {
                constructor(templateName, isFoundByResolver) {
                    this.templateName = templateName;
                    this.isFoundByResolver = isFoundByResolver;
                }
            }
            Utility.TemplateNameResolverResult = TemplateNameResolverResult;
        })(Utility = CIFramework.Utility || (CIFramework.Utility = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
    * @license Copyright (c) Microsoft Corporation. All rights reserved.
    */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        /**
            * All the message types/ APIs that are exposed to the widget
        */
        let MessageType = /** @class */ (() => {
            class MessageType {
            }
            MessageType.setClickToAct = "setclicktoact";
            MessageType.getClickToAct = "getclicktoact";
            MessageType.searchAndOpenRecords = "searchandopenrecords";
            MessageType.openForm = "openform";
            MessageType.refreshForm = "refreshform";
            MessageType.createRecord = "createrecord";
            MessageType.deleteRecord = "deleterecord";
            MessageType.retrieveRecord = "retrieverecord";
            MessageType.updateRecord = "updaterecord";
            MessageType.search = "search";
            MessageType.setMode = "setmode";
            MessageType.setWidth = "setwidth";
            MessageType.getMode = "getmode";
            MessageType.getEnvironment = "getenvironment";
            MessageType.getWidth = "getwidth";
            MessageType.onClickToAct = "onclicktoact";
            MessageType.onModeChanged = "onmodechanged";
            MessageType.onSizeChanged = "onsizechanged";
            MessageType.onPageNavigate = "onpagenavigate";
            MessageType.onSendKBArticle = "onsendkbarticle";
            MessageType.onSetPresence = "onSetPresence";
            MessageType.onSessionSwitched = "onSessionSwitched";
            MessageType.onSessionIdle = "onSessionIdle";
            MessageType.onUserActivity = "onUserActivity";
            MessageType.onSessionCreated = "onSessionCreated";
            MessageType.onBeforeSessionClosed = "onBeforeSessionClosed";
            MessageType.onSessionClosed = "onSessionClosed";
            MessageType.getEntityMetadata = "getEntityMetadata";
            MessageType.notifyEvent = "notifyEvent";
            MessageType.softNotification = "softNotification";
            MessageType.broadCast = "broadCast";
            MessageType.internalCommunication = "internalCommunication";
            MessageType.notification = "notification";
            MessageType.transfer = "transfer";
            MessageType.escalation = "escalation";
            MessageType.renderSearchPage = "renderSearchPage";
            MessageType.requestFocusSession = "requestFocusSession";
            MessageType.getAllSessions = "getAllSessions";
            MessageType.getFocusedSession = "getFocusedSession";
            MessageType.getSession = "getSession";
            MessageType.canCreateSession = "canCreateSession";
            MessageType.createSession = "createSession";
            MessageType.getFocusedTab = "getFocusedTab";
            MessageType.getTabsByTagOrName = "getTabsByTagOrName";
            MessageType.refreshTab = "refreshTab";
            MessageType.setSessionTitle = "setSessionTitle";
            MessageType.setTabTitle = "setTabTitle";
            MessageType.createTab = "createTab";
            MessageType.focusTab = "focusTab";
            MessageType.onMaxSessionsReached = "onMaxSessionsReached";
            MessageType.setAgentPresence = "setAgentPresence";
            MessageType.initializeAgentPresenceList = "initializeAgentPresenceList";
            MessageType.insertNotes = "insertNotes";
            MessageType.openKBSearchControl = "openkbsearchcontrol";
            MessageType.onSetPresenceEvent = "setPresenceEvent";
            MessageType.hardNotification = "hardNotification";
            MessageType.removeGenericHandler = "removeGenericHandler";
            MessageType.addGenericHandler = "addGenericHandler";
            MessageType.setPosition = "setPosition";
            MessageType.isConsoleApp = "isConsoleApp";
            MessageType.getPosition = "getPosition";
            MessageType.doSearch = "doSearch";
            MessageType.initializeCI = "initializeCI";
            MessageType.loadProvider = "loadProvider";
            MessageType.openDialog = "openDialog";
            MessageType.logErrorsAndReject = "logErrorsAndReject";
            MessageType.initLogAnalytics = "initLogAnalytics";
            MessageType.logAnalyticsEvent = "logAnalyticsEvent";
            MessageType.updateContext = "updateContext";
            MessageType.notifyKpiBreach = "notifyKpiBreach";
            MessageType.notifyNewActivity = "notifyNewActivity";
            MessageType.updateConversation = "updateConversation";
            MessageType.setOCInstallStatus = "setOCInstallStatus";
            MessageType.onKeyDownEvent = "keydown";
            MessageType.fetchDebugData = "fetchDebugData";
            MessageType.debugInformationEvent = "debugInformationEvent";
            MessageType.showGlobalNotification = "showGlobalNotification";
            MessageType.clearGlobalNotification = "clearGlobalNotification";
            MessageType.onResetPresenceEvent = "resetPresenceEvent";
            MessageType.showTimeoutGlobalNotification = "showTimeoutGlobalNotification";
            MessageType.onGlobalNotificationActionClick = "onGlobalNotificationActionClick";
            MessageType.executeFetchQuery = "executeFetchQuery";
            MessageType.onNotificationDisplayEvent = "notificationDisplayEvent";
            MessageType.showProgressIndicator = "showProgressIndicator";
            MessageType.closeProgressIndicator = "closeProgressIndicator";
            MessageType.onWindowFocusEvent = "windowFocusEvent";
            return MessageType;
        })();
        CIFramework.MessageType = MessageType;
        let ScenarioState = /** @class */ (() => {
            class ScenarioState {
            }
            ScenarioState.Started = "Started";
            ScenarioState.Completed = "Completed";
            return ScenarioState;
        })();
        CIFramework.ScenarioState = ScenarioState;
        let ScenarioStatus = /** @class */ (() => {
            class ScenarioStatus {
            }
            ScenarioStatus.Success = "Success";
            ScenarioStatus.Failure = "Failure";
            return ScenarioStatus;
        })();
        CIFramework.ScenarioStatus = ScenarioStatus;
        let ScenarioEvent = /** @class */ (() => {
            class ScenarioEvent {
            }
            ScenarioEvent.NotificationReceived = "NotificationReceived";
            ScenarioEvent.InitAgentPresenceList = "InitAgentPresenceList";
            ScenarioEvent.SetAgentPresence = "SetAgentPresence";
            ScenarioEvent.InitCIF = "InitCIF";
            ScenarioEvent.CheckThirdPartyCookieAndShowNotification = "CheckThirdPartyCookieAndShowNotification";
            return ScenarioEvent;
        })();
        CIFramework.ScenarioEvent = ScenarioEvent;
        let OpenAppTabType = /** @class */ (() => {
            class OpenAppTabType {
            }
            OpenAppTabType.data = "data";
            OpenAppTabType.url = "url";
            OpenAppTabType.relationship = "relationship";
            OpenAppTabType.createFromEntity = "createfromentity";
            OpenAppTabType.searchType = "searchtype";
            OpenAppTabType.CustomControlInputString = "customcontrol";
            OpenAppTabType.ThirdPartyWebsiteInputString = "websiteurl";
            OpenAppTabType.ThirdPartyWebsiteInputString1 = "thirdpartywebsite";
            OpenAppTabType.EntityViewInputString = "entityview";
            OpenAppTabType.DashboardInputString = "dashboard";
            OpenAppTabType.EntityRecordInputString = "entityrecord";
            OpenAppTabType.EntitySearchInputString = "entitysearch";
            OpenAppTabType.WebResourceInputString = "webresource";
            OpenAppTabType.control = "control";
            OpenAppTabType.dashboard = "dashboard";
            OpenAppTabType.entitylist = "entitylist";
            OpenAppTabType.entityrecord = "entityrecord";
            OpenAppTabType.search = "search";
            OpenAppTabType.webresource = "webresource";
            // keeping thirthpartyWebsite as weresource as currently we are not able to access
            // CIF public API and we are consuming Microsoft.CIFramework.External.CIFExternalUtilityImpl() to create tab
            OpenAppTabType.thirdPartyWebsite = "webresource"; // ThirdPartyWebsite
            return OpenAppTabType;
        })();
        CIFramework.OpenAppTabType = OpenAppTabType;
        /**
            * All constants for widget side logic should be placed here
        */
        let Constants = /** @class */ (() => {
            class Constants {
            }
            Constants.notificationId = "notificationId";
            Constants.value = "value";
            Constants.entityName = "entityName";
            Constants.entityId = "entityId";
            Constants.queryParameters = "queryParameters";
            Constants.options = "options";
            Constants.message = "message";
            Constants.searchOnly = "searchOnly";
            Constants.entityFormOptions = "entityFormOptions";
            Constants.entityFormParameters = "entityFormParameters";
            Constants.Save = "save";
            Constants.ScriptIdAttributeName = "data-cifid";
            Constants.ScriptIdAttributeValue = "CIFMainLibrary";
            Constants.ScriptCRMUrlAttributeName = "data-crmurl";
            Constants.nameParameter = "msdyn_name";
            Constants.originURL = "originURL";
            Constants.CIClickToAct = "CIClickToAct";
            Constants.CISendKBArticle = "KMClickToSend";
            Constants.SetPresenceEvent = "setPresenceEvent";
            Constants.widgetIframeId = "SidePanelIFrame";
            Constants.clickToActAttribute = "msdyn_enableoutbound";
            Constants.enableAnalyticsAttributeName = "msdyn_enableanalytics";
            Constants.systemUserLogicalName = "systemuser";
            Constants.templateTag = "templateTag";
            Constants.sortOrderFieldName = "msdyn_sortorder";
            Constants.providerOdataQuery = "?$select=fullname&$expand=msdyn_ciprovider_systemuser_membership($filter=statecode eq 0;$orderby=msdyn_sortorder asc,createdon asc;$top={0})";
            Constants.providerNavigationProperty = "msdyn_ciprovider_systemuser_membership";
            Constants.label = "msdyn_label";
            Constants.cifProviderLogicalName = "msdyn_channelprovider";
            Constants.widgetHeight = "msdyn_widgetheight";
            Constants.widgetWidth = "msdyn_widgetwidth";
            Constants.SizeChangeHandler = "sizeChangeHandler";
            Constants.ModeChangeHandler = "modeChangedHandler";
            Constants.NavigationHandler = "NavigationHandler";
            Constants.AppName = "appName";
            Constants.ClientUrl = "clientUrl";
            Constants.AppUrl = "appUrl";
            Constants.Theme = "themeName";
            Constants.darkTheme = "dark";
            Constants.lightTheme = "light";
            Constants.OrgLcid = "orgLcid";
            Constants.OrgUniqueName = "orgUniqueName";
            Constants.UserId = "userId";
            Constants.UserLcid = "userLcid";
            Constants.UserName = "username";
            Constants.UserRoles = "userRoles";
            Constants.DefaultCountryCode = "defaultCountryCode";
            Constants.MinimizedHeight = 34;
            Constants.DefaultFullWidth = 100;
            Constants.APIVersion = "msdyn_apiversion";
            Constants.SortOrder = "msdyn_sortorder";
            Constants.crmVersion = "crmVersion";
            Constants.cifVersion = "cifVersion";
            Constants.CIFInitEvent = "CIFInitDone";
            Constants.Attributes = "attributes";
            Constants.UciLib = "ucilib";
            Constants.OrgId = "orgId";
            Constants.TenantId = "tenantId";
            Constants.trustedDomain = "msdyn_trusteddomain";
            Constants.customParams = "msdyn_customparams";
            Constants.customParamsKey = "customParams";
            Constants.eventType = "eventType";
            Constants.headerDataCIF = "headerDataCIF";
            Constants.bodyDataCIF = "bodyDataCIF";
            Constants.notificationUXObject = "notificationUXObject";
            Constants.actionDisplayText = "actionDisplayText";
            Constants.actionReturnValue = "actionReturnValue";
            Constants.actionsCIF = "actions";
            Constants.actionName = "actionName";
            Constants.responseReason = "responseReason";
            Constants.CIFNotificationIcon = "CIFNotificationIcon";
            Constants.actionColor = "actionColor";
            Constants.actionImage = "actionImage";
            Constants.Timeout = "Timeout";
            Constants.Accept = "Accept";
            Constants.Reject = "Reject";
            Constants.actionType = "actionType";
            Constants.notificationType = "notificationType";
            Constants.Timer = "Timer";
            Constants.NoOfNotifications = "NoOfNotifications";
            Constants.SMS = "sms";
            Constants.Chat = "chat";
            Constants.Facebook = "facebook";
            Constants.Twitter = "twitter";
            Constants.Custom = "custom";
            Constants.Call = "call";
            Constants.Informational = "informational";
            Constants.Failure = "failure";
            Constants.Case = "case";
            Constants.SearchString = "searchString";
            Constants.input = "input";
            Constants.context = "context";
            Constants.customerName = "customerName";
            Constants.sessionId = "sessionId";
            Constants.tabId = "tabId";
            Constants.messagesCount = "messagesCount";
            Constants.shouldReset = "shouldReset";
            Constants.MaxSessions = 5;
            Constants.sessionColors = ["#2A757D", "#70278B", "#FF8C00", "#427825", "#B4009E", "#B4A0FF"];
            Constants.sessionPanel = "sessionPanel";
            Constants.DEFAULT_WIDGET_WIDTH = 378;
            Constants.DEFAULT_SIDEPANEL_WIDTH = 34;
            Constants.DEFAULT_SIDEPANEL_WIDTH_WITH_BORDER = 36;
            Constants.presenceInfo = "presenceInfo";
            Constants.presenceList = "presenceList";
            Constants.activityType = "activityType";
            Constants.sessionDetails = "sessionDetails";
            Constants.activityId = "activityId";
            Constants.Id = "id";
            Constants.notetext = "notetext";
            Constants.annotation = "annotation";
            Constants.entitySetName = "entitySetName";
            Constants.annotationId = "annotationid";
            Constants.secRemaining = "secs remaining";
            Constants.CollapseFlapHandler = "collapseFlapHandler";
            Constants.newSessionId = "newSessionId";
            Constants.previousSessionId = "previousSessionId";
            Constants.left = 1;
            Constants.right = 2;
            Constants.GLOBAL_PRESENCE_LIST = "GlobalToolBar_PresenceList";
            Constants.presenceText = "presenceText";
            Constants.presenceSelectControl = "presence_id";
            Constants.OK_BUTTON_ID = "ok_id";
            Constants.CANCEL_BUTTON_ID = "cancel_id";
            Constants.LAST_BUTTON_CLICKED = "param_lastButtonClicked";
            Constants.SET_PRESENCE_MDD = "SetAgentPresenceMDD";
            Constants.PRESENCE_SELECTED_VALUE = "param_selectedValue";
            Constants.CURRENT_PRESENCE_INFO = "GlobalToolBar_CurrentPresenceInfo";
            Constants.PRESENCE_BUTTON_DATA_ID = "[data-id='Microsoft.Dynamics.Service.CIFramework.Presence.Dialog']";
            Constants.PRESENCE_LIST_ID = "[id*='|NoRelationship||Microsoft.Dynamics.Service.CIFramework.Presence.DialogCommand']";
            Constants.sidePanelCollapsedState = 0;
            Constants.sidePanelExpandedState = 1;
            Constants.sidePanelHiddenState = 2;
            Constants.sessionNotValidErrorMessage = "Focused session is neither the default session nor it belongs to the provider";
            Constants.cifSolVersion = "msdyn_cifsolversion";
            Constants.correlationId = "correlationId";
            Constants.cancellationToken = "cancellationToken";
            Constants.providerSessionId = "providerSessionId";
            Constants.errorMessage = "errorMsg";
            Constants.dialogStrings = "dialogStrings";
            Constants.dialogOptions = "dialogOptions";
            Constants.functionName = "functName";
            Constants.ErrorCode = "errorCode";
            Constants.notificationTemplateIconAttribute = "msdyn_icon";
            Constants.notificationTemplateIconDefaultValue = "/webresources/msdyn_chat_icon_zfp.svg";
            Constants.notificationTemplateTimeoutAttribute = "msdyn_timeout";
            Constants.templateName = "templateName";
            Constants.notificationTemplate = "notificationTemplate";
            Constants.templateParameters = "templateParameters";
            Constants.notificationTemplateTimeoutDefaultValue = 120;
            Constants.templateNameResolver = "templateNameResolver";
            Constants.notificationResponse = "NotificationResponse";
            Constants.isDelete = "isDelete";
            Constants.isDirty = "isDirty";
            Constants.onHiddenTimerEvent = "onHiddenTimerEvent";
            Constants.resetKpiBreach = "resetKpiBreach";
            Constants.kpiBreachDetails = "kpiBreachDetails";
            Constants.liveWorkItemEntity = "msdyn_ocliveworkitem";
            Constants.skipLwiCreation = "skipLwiCreation";
            Constants.idleTimeThreshold = "idleTimeThreshold";
            Constants.entityStateCode = "statecode";
            Constants.stateCodeClose = 1;
            Constants.entityStatusCode = "statuscode";
            Constants.statusCodeClose = 4;
            Constants.defaultSessionId = "session-id-0";
            Constants.OnKeyDownEvent = "keydown";
            Constants.defaultOmnichannelLabel = "omnichannel";
            Constants.defaultOmnichannelProviderId = "7E74C210-F8FF-4C16-84AF-5AE454A5514A";
            Constants.confirmButton = "confirmButton";
            Constants.result = "result";
            Constants.homeSession = "session-id-0";
            Constants.collection = "_collection";
            Constants.notificationOptions = "notificationOptions";
            Constants.globalMissedNotificationMessageBarId = "globalMissedNotificationMessageBarId";
            Constants.presenceCanUserSet = "canUserSet";
            Constants.inactivePresenceId = "a89ee9cf-453a-4b52-8d7a-ad647feecd5d";
            Constants.NotificationDisplayEvent = "notificationDisplayEvent";
            Constants.notificationAction = "notificationAction";
            Constants.WindowFocusEvent = "windowFocusEvent";
            Constants.idle = "idle";
            Constants.progressIndicatorMessage = "progressIndicatorMessage";
            Constants.OmnichannelAgentSdkWebresourceUrl = "/WebResources/msdyn_OmnichannelAgentSDk.js";
            Constants.Notification3PcTextPlaceholder = "THIRD_PARTY_COOKIE_BLOCKED_NOTIFICATION";
            Constants.LearnMoreTextPlaceholder = "LEARN_MORE";
            Constants.MsdynOCProviderName = "msdyn_omnichannel";
            Constants.ODataParameterForCDN = "/api/data/v9.0/serviceendpoints(38bd8b51-de34-4c45-bf43-5a913aeec49f)?$select=path";
            Constants.CookieCheckHTMLFile = "/convcontrol/thirdPartyCookiesCheck.htm";
            return Constants;
        })();
        CIFramework.Constants = Constants;
        let QueryDataConstants = /** @class */ (() => {
            class QueryDataConstants {
            }
            QueryDataConstants.SelectOperator = "?$select=";
            QueryDataConstants.FilterOperator = "$filter=";
            return QueryDataConstants;
        })();
        CIFramework.QueryDataConstants = QueryDataConstants;
        let ProductivityPaneConfigConstants = /** @class */ (() => {
            class ProductivityPaneConfigConstants {
            }
            ProductivityPaneConfigConstants.productivityPaneControlName = "MscrmControls.ProductivityToolPanel.ProductivityPanelControl";
            // Entity constants
            ProductivityPaneConfigConstants.entityName = "msdyn_productivitypaneconfiguration";
            // Attributes
            ProductivityPaneConfigConstants.productivityPaneState = "msdyn_productivitypanestate";
            ProductivityPaneConfigConstants.productivityPaneMode = "msdyn_productivitypanemode";
            ProductivityPaneConfigConstants.applicationName = "msdyn_applicationname";
            // tslint:disable-next-line:variable-name
            ProductivityPaneConfigConstants.msdyn_name = "msdyn_name";
            return ProductivityPaneConfigConstants;
        })();
        CIFramework.ProductivityPaneConfigConstants = ProductivityPaneConfigConstants;
        let AnalyticsConstants = /** @class */ (() => {
            class AnalyticsConstants {
            }
            AnalyticsConstants.notificationResponseAction = "notificationResponseAction";
            AnalyticsConstants.acceptNotificationResponse = "accepted";
            AnalyticsConstants.rejectNotificationResponse = "rejected";
            AnalyticsConstants.channelProviderName = "providerName";
            AnalyticsConstants.channelProviderId = "providerId";
            AnalyticsConstants.telemetryApiName = "telemetryAPIName";
            AnalyticsConstants.telemetryInitApiName = "InitCIFAnalytics";
            AnalyticsConstants.telemetryLogCustomEventApiName = "LogCustomEvent";
            AnalyticsConstants.telemetryLogSystemEventApiName = "LogSystemEvent";
            AnalyticsConstants.analyticsdata = "analyticsData";
            AnalyticsConstants.initLogAnalyticsEventName = "initAnalytics";
            AnalyticsConstants.analyticsEventType = "analyticsEventtype";
            AnalyticsConstants.analyticsEventName = "analyticsEventname";
            AnalyticsConstants.initAnalyticsPlatformEventName = "initCIFAnalytics";
            AnalyticsConstants.logAnalyticsPlatformEventName = "logCIFAnalytics";
            AnalyticsConstants.focussedSession = "focussedSession";
            AnalyticsConstants.clientSessionId = "clientSessionId";
            AnalyticsConstants.enableAnalytics = "enableAnalytics";
            AnalyticsConstants.telemetryUpdateConversationName = "updateConversation";
            AnalyticsConstants.updateConversationsPlatformEventName = "updateConversation";
            AnalyticsConstants.sessionUniqueId = "sessionUniqueId";
            AnalyticsConstants.correlationId = "correlationId";
            AnalyticsConstants.conversationId = "conversationId";
            AnalyticsConstants.providerSessionId = "providerSessionId";
            AnalyticsConstants.sessionStarted = "SessionStarted";
            AnalyticsConstants.SessionFocusIn = "SessionFocusIn";
            AnalyticsConstants.SessionFocusOut = "SessionFocusOut";
            AnalyticsConstants.sessionClosed = "SessionClosed";
            AnalyticsConstants.cifSessionStart = "cifSessionStart";
            AnalyticsConstants.cifSessionEnd = "cifSessionEnd";
            AnalyticsConstants.notificationReceived = "NotificationReceived";
            AnalyticsConstants.notificationAccepted = "NotificationAccepted";
            AnalyticsConstants.notificationRejected = "NotificationRejected";
            AnalyticsConstants.notificationTimedOut = "NotificationTimedOut";
            return AnalyticsConstants;
        })();
        CIFramework.AnalyticsConstants = AnalyticsConstants;
        let ResponseReason = /** @class */ (() => {
            class ResponseReason {
            }
            ResponseReason.Accept = "Accept";
            ResponseReason.AutoAcceptOnTimeout = "AutoAcceptOnTimeout";
            ResponseReason.AutoAccept = "AutoAccept";
            ResponseReason.DeclinedByAgent = "DeclinedByAgent";
            ResponseReason.DisplayTimeout = "DisplayTimeout";
            ResponseReason.NotificationQueueLimitExceeded = "NotificationQueueLimitExceeded";
            ResponseReason.NotificationQueueTimeLimitExceeded = "NotificationQueueTimeLimitExceeded";
            ResponseReason.NotificationTemplateNotFoundError = "NotificationTemplateNotFoundError";
            ResponseReason.NotificationTemplateResolverNotFoundError = "NotificationTemplateResolverNotFoundError";
            ResponseReason.RejectAfterTimeoutNonPlatformTimer = "RejectAfterTimeoutNonPlatformTimer";
            return ResponseReason;
        })();
        CIFramework.ResponseReason = ResponseReason;
        let ErrorCode;
        (function (ErrorCode) {
            ErrorCode[ErrorCode["Notes_Flap_Already_Expanded"] = 101] = "Notes_Flap_Already_Expanded"; // Notes flap is already expanded.
        })(ErrorCode = CIFramework.ErrorCode || (CIFramework.ErrorCode = {}));
        let EventType;
        (function (EventType) {
            EventType[EventType["SystemEvent"] = 0] = "SystemEvent";
            EventType[EventType["CustomEvent"] = 1] = "CustomEvent";
        })(EventType = CIFramework.EventType || (CIFramework.EventType = {}));
        let ShowTimeoutOption;
        (function (ShowTimeoutOption) {
            ShowTimeoutOption[ShowTimeoutOption["Yes"] = 100000000] = "Yes";
            ShowTimeoutOption[ShowTimeoutOption["No"] = 100000001] = "No";
        })(ShowTimeoutOption = CIFramework.ShowTimeoutOption || (CIFramework.ShowTimeoutOption = {}));
        let InternalEventName;
        (function (InternalEventName) {
            InternalEventName[InternalEventName["NotificationReceived"] = 0] = "NotificationReceived";
            InternalEventName[InternalEventName["NotificationAccepted"] = 1] = "NotificationAccepted";
            InternalEventName[InternalEventName["NotificationAutoAccepted"] = 2] = "NotificationAutoAccepted";
            InternalEventName[InternalEventName["NotificationRejected"] = 3] = "NotificationRejected";
            InternalEventName[InternalEventName["NotificationTimedOut"] = 4] = "NotificationTimedOut";
            InternalEventName[InternalEventName["SessionStarted"] = 5] = "SessionStarted";
            InternalEventName[InternalEventName["SessionFocusIn"] = 6] = "SessionFocusIn";
            InternalEventName[InternalEventName["SessionFocusOut"] = 7] = "SessionFocusOut";
            InternalEventName[InternalEventName["SessionClosed"] = 8] = "SessionClosed";
            InternalEventName[InternalEventName["NewTabOpened"] = 9] = "NewTabOpened";
            InternalEventName[InternalEventName["CifSessionStart"] = 10] = "CifSessionStart";
            InternalEventName[InternalEventName["CifSessionEnd"] = 11] = "CifSessionEnd";
        })(InternalEventName = CIFramework.InternalEventName || (CIFramework.InternalEventName = {}));
        let DesktopNotificationConstants = /** @class */ (() => {
            class DesktopNotificationConstants {
            }
            DesktopNotificationConstants.Granted = "granted";
            DesktopNotificationConstants.Denied = "denied";
            DesktopNotificationConstants.Default = "default";
            DesktopNotificationConstants.Accept = "accept";
            DesktopNotificationConstants.Reject = "reject";
            DesktopNotificationConstants.Never = 100000002;
            DesktopNotificationConstants.OnlyWhenPageNotInFocus = 100000003;
            DesktopNotificationConstants.InstalledEvent = "install";
            DesktopNotificationConstants.ActivateEvent = "activate";
            DesktopNotificationConstants.NotificationClickEvent = "notificationclick";
            DesktopNotificationConstants.MessageEvent = "message";
            DesktopNotificationConstants.BroadcastChannel = "BroadcastChannel";
            DesktopNotificationConstants.ServiceWorker = "serviceWorker";
            DesktopNotificationConstants.Error = "Error";
            DesktopNotificationConstants.timeoutBuffer = 5000;
            DesktopNotificationConstants.browserPrefixes = ['moz', 'ms', 'o', 'webkit'];
            return DesktopNotificationConstants;
        })();
        CIFramework.DesktopNotificationConstants = DesktopNotificationConstants;
        let MissedNotificationsConstants = /** @class */ (() => {
            class MissedNotificationsConstants {
            }
            MissedNotificationsConstants.MessageType = 2; // global message bar type
            MissedNotificationsConstants.Level = 3; // warning
            MissedNotificationsConstants.Title = ""; // warning
            MissedNotificationsConstants.ActionResourceKey = "RESET_PRESENCE_ACTION";
            MissedNotificationsConstants.MessageResourceKey = "MISSED_NOTIFICATION_MESSAGE_BAR_TEXT";
            MissedNotificationsConstants.PresencePlaceholderResourceKey = "MISSED_NOTIFICATION_PRESENCE_PLACEHOLDER";
            return MissedNotificationsConstants;
        })();
        CIFramework.MissedNotificationsConstants = MissedNotificationsConstants;
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/**
 * Wrapper for postMessage. This wrapper will be loaded on both widget and CI domains,
 * and will be the common messaging layer between these two. Without this layer,
 * postMessage acts as a common messaging API between the widget and CI.
 * This wrapper just wraps postMessage with more useful functionality of promises.

   Exposes a function postMsg that accepts a target window, a message and an origin
 */
/**
 * Creates a new type for mapping an open promise representing a postMessage call, against a correlation Id sent to the message receiver.
 */
/// <reference path="CIFrameworkConstants.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var postMessageNamespace;
        (function (postMessageNamespace) {
            // tslint:disable-next-line:class-name
            class postMsgWrapper {
                /**
                 * Creates and loads an instance of the wrapper on the CI or widget domain, wherever it is loaded
                 */
                constructor(listenerWindow, domains, handlers, responseTargetWindow) {
                    /**
                     * Collection for promises created on the caller (widget/CI), that represent open requests on the receiver (CI/widget)
                     */
                    this.pendingPromises = new Map();
                    this.messageHandlers = new Map();
                    this.responseTargetWindow = null;
                    // todo - ensure that there is always one listener for message event from CI side. For now: always removing previous one, if any, so that we only have one listener at a time.
                    if (listenerWindow) {
                        listenerWindow.removeEventListener(postMessageNamespace.messageConstant, this.processMessage.bind(this));
                        listenerWindow.addEventListener(postMessageNamespace.messageConstant, this.processMessage.bind(this));
                    }
                    // TO-DO, initialization of whitelisted domains may need to take a different path in future
                    this.listWhitelistedDomains = domains;
                    if (handlers) {
                        this.messageHandlers = handlers;
                    }
                    this.responseTargetWindow = responseTargetWindow;
                }
                /**
                 * Function for add handlers separate from the constructor
                 */
                addHandler(messageType, handler) {
                    if (this.messageHandlers.has(messageType)) {
                        this.messageHandlers.get(messageType).add(handler);
                    }
                    else {
                        this.messageHandlers.set(messageType, new Set().add(handler));
                    }
                }
                /**
                 * Function for getting handlers registered for an event
                 */
                getHandlers(messageType) {
                    if (this.messageHandlers.has(messageType)) {
                        return this.messageHandlers.get(messageType);
                    }
                    return null;
                }
                /**
                 * Function for remove a particular handler
                 */
                removeHandler(messageType, handler) {
                    if (!this.messageHandlers.has(messageType)) {
                        return;
                    }
                    this.messageHandlers.get(messageType).delete(handler);
                }
                /**
                 * Create a new correlation Id to map a promise against it, on the caller side (widget/CI)
                 */
                getCorrelationId() {
                    return (Math.random() + 1).toString(36).substring(7);
                }
                createDeferred(noTimeout) {
                    const deferred = {
                        promise: null,
                        resolve: null,
                        reject: null,
                        timerId: null,
                    };
                    const actualpromise = new Promise((resolve, reject) => {
                        deferred.resolve = resolve;
                        deferred.reject = reject;
                    });
                    const promises = [actualpromise];
                    if (!noTimeout) {
                        const timeout = new Promise((resolve, reject) => {
                            deferred.timerId = setTimeout(() => {
                                reject(Microsoft.CIFramework.Utility.createErrorMap("Timeout occurred as no response was received from listener window"));
                            }, postMessageNamespace.promiseTimeOut);
                        });
                        promises.push(timeout);
                    }
                    deferred.promise = Promise.race(promises).then((result) => {
                        if (deferred.timerId) {
                            clearTimeout(deferred.timerId);
                        }
                        this.removePromise(deferred);
                        return result;
                    }).catch((result) => {
                        if (deferred.timerId) {
                            clearTimeout(deferred.timerId);
                        }
                        this.removePromise(deferred);
                        throw result;
                    });
                    // TODO - if timed out, handle the deletion of orphaned actualPromise and scenario when actualpromise is resolved/rejected later on.
                    return deferred;
                }
                /**
                 * removes the entry from pendingPromises, given the value for that entry.
                 * @param deferred deferred object based on which entry should be deleted.
                 */
                removePromise(deferred) {
                    let keyToDelete = null;
                    for (const [key, value] of this.pendingPromises) {
                        if (value === deferred) {
                            keyToDelete = key;
                            break;
                        }
                    }
                    if (keyToDelete) {
                        this.pendingPromises.delete(keyToDelete);
                    }
                }
                /**
                 * Function on caller (widget/CI) to add a new correlation Id to a message, map a new promise against it and post the message to the receiver (CI/widget)
                 */
                // TO-DO in V2, check if the user should have resolve and reject exposed to send in their custom implementation
                postMsg(receivingWindow, message, targetOrigin, isEventFlag, noTimeout) {
                    if ((receivingWindow) && (targetOrigin !== "*")) {
                        const deferred = this.createDeferred(noTimeout);
                        const trackingCorrelationId = this.getCorrelationId();
                        const messageInternal = message;
                        messageInternal[postMessageNamespace.messageCorrelationId] = trackingCorrelationId;
                        this.pendingPromises.set(trackingCorrelationId, deferred);
                        return this.postMsgInternal(receivingWindow, messageInternal, targetOrigin, deferred);
                    }
                    else {
                        return postMessageNamespace.rejectWithErrorMessage("Receiving window or targetOrigin cannot be unspecified");
                    }
                }
                /**
                 * Internal function that post messages to the window with retry logic
                 * @param receivingWindow window to post message to
                 * @param message message to post
                 * @param targetOrigin target url
                 * @param deferred deferred object related with this message
                 */
                postMsgInternal(receivingWindow, message, targetOrigin, deferred) {
                    let retries = 0;
                    while (true) {
                        try {
                            receivingWindow.postMessage(message, targetOrigin);
                            if (deferred) {
                                return deferred.promise;
                            }
                            return;
                        }
                        catch (error) {
                            // todo - log the error and retries number.
                            if (++retries === postMessageNamespace.retryCount) {
                                return postMessageNamespace.rejectWithErrorMessage("Not able to post the request to receiving window after multiple tries.");
                            }
                        }
                    }
                }
                /**
                 * Function on receiver (widget/CI) to send back a response against an open request to the caller (CI/widget)
                 */
                sendResponseMsg(receivingWindow, message, targetOrigin) {
                    if ((receivingWindow) && (targetOrigin !== "*")) {
                        receivingWindow.postMessage(message, targetOrigin);
                    }
                }
                /**
                 * Common function on caller and receiver to process requests and responses
                 */
                processMessage(event) {
                    try {
                        const responseTargetWindow = this.responseTargetWindow || event.source;
                        const whiteListedOrigin = this.listWhitelistedDomains.find((whiteListedDomain) => {
                            // TODO - Replace URL with some other supported object if IE support becomes mandatory. URL is not supported by IE11
                            const domainUrl = new URL(event.origin);
                            const domainHostName = decodeURIComponent(domainUrl.hostname);
                            let whiteListedDomainUrl;
                            let whiteListedDomainHostName = "";
                            if (whiteListedDomain != null) {
                                whiteListedDomainUrl = new URL(whiteListedDomain);
                                whiteListedDomainHostName = decodeURIComponent(whiteListedDomainUrl.hostname);
                            }
                            if (whiteListedDomainHostName !== "" && whiteListedDomainHostName === domainHostName)
                                return true;
                            else if (whiteListedDomain != null && whiteListedDomainHostName.startsWith("*"))
                                return (domainHostName.endsWith(whiteListedDomainHostName.substr(2)));
                            return false;
                        });
                        const trackingCorrelationId = event.data[postMessageNamespace.messageCorrelationId];
                        let msg;
                        let messageData = null;
                        if (!event.origin || event.origin === "*" || !event.source) {
                            messageData = Microsoft.CIFramework.Utility.createErrorMap("Origin/Source of the message cant be null or all");
                        }
                        if (!whiteListedOrigin) {
                            messageData = Microsoft.CIFramework.Utility.createErrorMap("Sender domain is not a recognised or is invalid and hence the message cant be processed");
                        }
                        if (!trackingCorrelationId) {
                            if (messageData) {
                                // log message recieved has no correlation id, with origin & msg details
                                // tslint:disable-next-line:no-console
                                console.trace("Ignoring message from unknown event source: " + event.origin);
                                return;
                            }
                        }
                        else {
                            // correlation id exists, but the domain was not whitelisted. Return an error response
                            if (messageData) {
                                msg = {
                                    messageOutcome: postMessageNamespace.messageFailure,
                                    messageData,
                                    messageCorrelationId: trackingCorrelationId,
                                    messageType: 'CIF_Response'
                                };
                                return this.sendResponseMsg(responseTargetWindow, msg, event.origin);
                            }
                        }
                        let pendingPromise;
                        if (trackingCorrelationId && this.pendingPromises) {
                            pendingPromise = this.pendingPromises.get(trackingCorrelationId);
                        }
                        /**
                         * If an open promise against this message's correlation Id does not exist,
                         * then invoke registered message handlers and send their result back
                         */
                        if (!pendingPromise) {
                            const data = event.data;
                            if(data.messageType === 'CIF_Response')
                                return;
                            if (typeof (data.messageData) !== "string")
                                data.messageData.set(postMessageNamespace.originURL, whiteListedOrigin);
                            /**
                             * Iterate through the handler list and invoke them all nd handle if there are no handlers
                             */
                            if (!this.messageHandlers.get(data.messageType)) {
                                if (trackingCorrelationId) {
                                    msg = {
                                        messageOutcome: postMessageNamespace.messageSuccess,
                                        messageData: Microsoft.CIFramework.Utility.createErrorMap("No handlers found to process the request."),
                                        messageCorrelationId: trackingCorrelationId,
                                        messageType: 'CIF_Response'
                                    };
                                    this.sendResponseMsg(responseTargetWindow, msg, event.origin);
                                }
                                // todo - log that no handler was found alongwith message & origin details, and if we are sending back a response or silently ignoring.
                                return;
                            }
                            this.messageHandlers.get(data.messageType).forEach((handlerFunction) => {
                                try {
                                    handlerFunction(data.messageData).then(function (result) {
                                        if (trackingCorrelationId) {
                                            msg = {
                                                messageOutcome: postMessageNamespace.messageSuccess,
                                                messageData: result,
                                                messageCorrelationId: trackingCorrelationId,
                                                messageType: 'CIF_Response'
                                            };
                                            this.sendResponseMsg(responseTargetWindow, msg, event.origin);
                                        }
                                    }.bind(this), function (error) {
                                        if (trackingCorrelationId) {
                                            msg = {
                                                messageOutcome: postMessageNamespace.messageFailure,
                                                messageData: error,
                                                messageCorrelationId: trackingCorrelationId,
                                                messageType: 'CIF_Response'
                                            };
                                            this.sendResponseMsg(responseTargetWindow, msg, event.origin);
                                        }
                                    }.bind(this));
                                }
                                catch (error) {
                                    if (trackingCorrelationId) {
                                        msg = {
                                            messageOutcome: postMessageNamespace.messageFailure,
                                            messageData: Microsoft.CIFramework.Utility.buildMap(error),
                                            messageCorrelationId: trackingCorrelationId,
                                            messageType: 'CIF_Response'
                                        };
                                        this.sendResponseMsg(responseTargetWindow, msg, event.origin);
                                    }
                                }
                            });
                        }
                        /**
                         * If an open promise against this message's correlation Id does exist,
                         * then process response as success/failure of an earlier request
                         * and delete the open promise from pendingPromises collection
                         */
                        else {
                            const data = event.data;
                            if (data.messageOutcome === postMessageNamespace.messageSuccess) {
                                pendingPromise.resolve(data.messageData);
                            }
                            else {
                                pendingPromise.reject(data.messageData);
                            }
                        }
                    }
                    catch (e) {
                        // tslint:disable-next-line:no-console
                        console.error("Error in PostMsgWrapper - processMessage. " + e);
                    }
                }
            }
            postMessageNamespace.postMsgWrapper = postMsgWrapper;
        })(postMessageNamespace = CIFramework.postMessageNamespace || (CIFramework.postMessageNamespace = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
//# sourceMappingURL=CIFRuntimeCommon.js.map 
 
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            class SessionInfo {
                constructor(provider, config, templateParams, correlationId, sessionUniqueId, providerSessionId, conversationId) {
                    this._associatedProvider = null;
                    this._associatedProvider = provider;
                    this._tabsByTag = new Map();
                    this._tabsByName = new Map();
                    this._tabConfigs = new Map();
                    this._sessionConfig = config;
                    this._templateParams = templateParams || null;
                    this._correlationId = correlationId || null;
                    this._providerSessionId = providerSessionId || null;
                    this._conversationId = conversationId || null;
                    this._sessionUniqueId = sessionUniqueId || null;
                }
                get templateParams() {
                    return this._templateParams;
                }
                get sessionConfig() {
                    return this._sessionConfig;
                }
                get associatedProvider() {
                    return this._associatedProvider;
                }
                get providerSessionId() {
                    return this._providerSessionId;
                }
                get conversationId() {
                    return this._conversationId;
                }
                setTemplateParams(input) {
                    // tslint:disable-next-line:forin
                    for (const key in input) {
                        this._templateParams[key] = input[key];
                    }
                }
                get correlationId() {
                    return this._correlationId;
                }
                get sessionUniqueId() {
                    return this._sessionUniqueId;
                }
                setTab(tabConfig, tabid, name, tags) {
                    if (!this._tabsByName.has(name)) {
                        this._tabsByName.set(name, []);
                    }
                    this._tabsByName.get(name).push(tabid);
                    this._tabConfigs.set(tabid, tabConfig);
                    tags.forEach(function (tag) {
                        if (!this._tabsByTag.has(tag)) {
                            this._tabsByTag.set(tag, []);
                        }
                        this._tabsByTag.get(tag).push(tabid);
                    }.bind(this));
                }
                removeTab(tabid) {
                    this._tabsByName.forEach((vals) => {
                        const index = vals.indexOf(tabid);
                        if (index > -1) {
                            vals.splice(index, 1);
                        }
                    });
                    this._tabConfigs.delete(tabid);
                    // tslint:disable-next-line:only-arrow-functions
                    this._tabsByTag.forEach(function (vals) {
                        const index = vals.indexOf(tabid);
                        if (index > -1) {
                            vals.splice(index, 1);
                        }
                    }.bind(this));
                }
                getTabsByTag(tag) {
                    return this._tabsByTag.get(tag);
                }
                getTabsByName(name) {
                    return this._tabsByName.get(name);
                }
                getPanelState() {
                    return this._sessionConfig.panelState;
                }
            }
            Internal.SessionInfo = SessionInfo;
            class SessionManager {
                constructor() {
                    this.sessions = new Map();
                }
                getProvider(sessionId) {
                    if (this.sessions.has(sessionId)) {
                        return this.sessions.get(sessionId).associatedProvider;
                    }
                    else {
                        return null;
                    }
                }
                associateTabWithSession(sessionId, tabId, tabConfig, name, tags) {
                    if (this.sessions.has(sessionId)) {
                        this.sessions.get(sessionId).setTab(tabConfig, tabId, name, tags);
                    }
                }
                disassociateTab(sessionId, tabId) {
                    if (this.sessions.has(sessionId)) {
                        this.sessions.get(sessionId).removeTab(tabId);
                    }
                }
                getTabsByTagOrName(sessionId, name, tag) {
                    const self = this;
                    return new Promise((resolve, reject) => {
                        try {
                            if (self.sessions.has(sessionId)) {
                                if (Internal.isNullOrUndefined(name) && Internal.isNullOrUndefined(tag)) {
                                    const currentlyOpenTabs = Microsoft.AppRuntime.Sessions.getSession(sessionId).getAllTabs();
                                    resolve(currentlyOpenTabs);
                                    return;
                                }
                                if (!Internal.isNullOrUndefined(name)) {
                                    Microsoft.AppRuntime.Sessions.getSession(sessionId).getAllTabsForTemplate(name).then((tabs) => {
                                        resolve(tabs);
                                        return;
                                    }, (error) => { reject(error); });
                                }
                            }
                            else {
                                reject();
                                return;
                            }
                        }
                        catch (err) {
                            const error = {};
                            error.reportTime = new Date().toUTCString();
                            error.errorMsg = err;
                            error.errorType = Internal.errorTypes.GenericError;
                            error.sourceFunc = CIFramework.MessageType.getTabsByTagOrName;
                            throw error;
                        }
                    });
                }
                getPanelState(sessionId) {
                    if (this.sessions.has(sessionId)) {
                        return this.sessions.get(sessionId).getPanelState();
                    }
                    return 1;
                }
                getTabsByName(sessionId, name) {
                    if (this.sessions.has(sessionId)) {
                        return this.sessions.get(sessionId).getTabsByName(name);
                    }
                    return null;
                }
                setSessionTitle(sessionId, input) {
                    if (!this.sessions.has(sessionId)) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "Session Id " + sessionId + " not found";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = this.setSessionTitle.name;
                        return Promise.reject(error);
                    }
                    // tslint:disable-next-line:only-arrow-functions
                    return new Promise(function (resolve, reject) {
                        Microsoft.AppRuntime.Internal.getSessionTemplate(sessionId).then((sessionTemplate) => {
                            Microsoft.AppRuntime.Utility.resolveSlug(sessionTemplate.title, Microsoft.CIFramework.Utility.buildMap(input), sessionTemplate.name).then((title) => {
                                Microsoft.AppRuntime.Sessions.getSession(sessionId).setTitleAndInitials(title);
                                return Promise.resolve(title);
                            }, (error) => {
                                return Promise.reject(error);
                            });
                        });
                    }.bind(this));
                }
                setTabTitle(sessionId, tabId, input) {
                    if (!this.sessions.has(sessionId)) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "Session Id " + sessionId + " not found";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = this.setSessionTitle.name;
                        return Promise.reject(error);
                    }
                    return Microsoft.AppRuntime.Utility.resolveSlug(input.title, input, input.name).then((title) => {
                        Microsoft.AppRuntime.Sessions.getSession(sessionId).getTab(tabId).title = title;
                        return Promise.resolve(title);
                    }, (error) => {
                        return Promise.reject(error);
                    });
                }
                updateTabContextInCurrentSession(input, sessionId) {
                    const cifExt = new Microsoft.CIFramework.External.CIFExternalUtilityImpl();
                    try {
                        cifExt.setSessionTemplateParams(input, sessionId);
                    }
                    catch (error) {
                        //
                    }
                }
            }
            Internal.SessionManager = SessionManager;
            function GetSessionManager(clientType) {
                switch (clientType) {
                    case Internal.ClientType.UnifiedClient:
                        if (Internal.isConsoleAppInternal() === true)
                            return new Internal.ConsoleAppSessionManager();
                        else
                            return new Internal.SessionPanel();
                    default:
                        return new Internal.ConsoleAppSessionManager();
                }
            }
            Internal.GetSessionManager = GetSessionManager;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            let UCIApplicationType = /** @class */ (() => {
                class UCIApplicationType {
                    constructor(name, order) {
                        this._name = name;
                        this._order = order;
                    }
                    get name() {
                        return this._name;
                    }
                    get order() {
                        return this._order;
                    }
                }
                UCIApplicationType.ThirdPartyWebSite = "ThirdPartyWebsite";
                UCIApplicationType.webresource = "webresource";
                return UCIApplicationType;
            })();
            let UCIApplicationTabTemplate = /** @class */ (() => {
                class UCIApplicationTabTemplate {
                    constructor(templateId, name, title, icon, pinned, appType, templateParameters, tags) {
                        this._name = name;
                        this._uciAppType = appType;
                        this._template = JSON.parse(templateParameters);
                        this._templateId = templateId;
                        this._title = title; // TODO: temporary - need to add title attribute to the entity
                        this._isPinned = pinned; // TODO: need to add pinned attribute to the entity
                        this._icon = icon;
                        this._tags = tags;
                    }
                    get templateId() {
                        return this._templateId;
                    }
                    get name() {
                        return this._name;
                    }
                    get title() {
                        return this._title;
                    }
                    get template() {
                        return this._template;
                    }
                    get isPinned() {
                        return this._isPinned;
                    }
                    get pageType() {
                        return this._uciAppType.name;
                    }
                    get order() {
                        return this._uciAppType.order;
                    }
                    get icon() {
                        return this._icon;
                    }
                    get tags() {
                        return this._tags;
                    }
                }
                UCIApplicationTabTemplate.appId = top.location.search.split('appid=')[1].split('&')[0];
                UCIApplicationTabTemplate._appTemplates = new Map();
                UCIApplicationTabTemplate._UCIPageTypes = new Map();
                return UCIApplicationTabTemplate;
            })();
            Internal.UCIApplicationTabTemplate = UCIApplicationTabTemplate;
            let UCISessionTemplate = /** @class */ (() => {
                class UCISessionTemplate {
                    constructor(templateId, name, title, icon, panelState, pinned, anchorTab, appTabs) {
                        this._name = name;
                        this._templateId = templateId;
                        this._title = title;
                        this._panelState = UCISessionTemplate._panelOptionToState.get(panelState);
                        this._icon = icon;
                        this._pinned = pinned;
                        this._anchorTabName = anchorTab;
                        const apps = [];
                    }
                    get templateId() {
                        return this._templateId;
                    }
                    get name() {
                        return this._name;
                    }
                    get title() {
                        return this._title;
                    }
                    get panelState() {
                        return this._panelState;
                    }
                    get icon() {
                        return this._icon;
                    }
                    get canBeClosed() {
                        return !this._pinned;
                    }
                    get anchorTabName() {
                        return this._anchorTabName;
                    }
                    get appTabs() {
                        return this._appTabs;
                    }
                }
                UCISessionTemplate._sessionTemplates = new Map();
                UCISessionTemplate._templateBytag = new Map();
                UCISessionTemplate.appId = top.location.search.split('appid=')[1].split('&')[0];
                UCISessionTemplate._panelOptionToState = new Map([
                    [100000000, 1],
                    [100000001, 0],
                    [100000002, 2] // Hidden
                ]);
                return UCISessionTemplate;
            })();
            Internal.UCISessionTemplate = UCISessionTemplate;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../packages/Crm.ClientApiTypings.1.4.596-master/clientapi/XrmClientApi.d.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            const oCTabVisibilityEventsRegistered = false;
            ;
            let UCINotificationTemplate = /** @class */ (() => {
                class UCINotificationTemplate {
                    constructor() {
                    }
                    static getAppTemplateById(templateId) {
                        return new Promise((resolve, reject) => {
                            //
                        });
                    }
                    static getTemplateByTag(tag, correlationId) {
                        return new Promise((resolve, reject) => {
                            //
                        });
                    }
                    static getTemplate(name) {
                        return new Promise((resolve, reject) => {
                            //
                        });
                    }
                    instantiateTemplate(templateParams, acceptHandler, rejectHandler, timeoutHandler, correlationId) {
                        return new Promise(function (resolve, reject) {
                            try { // TODO: Parameterized apptab title
                                const ret = {
                                    title: this.title,
                                    acceptAction: {
                                        eventHandler: acceptHandler,
                                        actionLabel: this.actionButtons[UCINotificationTemplate.AcceptAction] || CIFramework.Utility.getResourceString("ACCEPT_BUTTON_TEXT")
                                    },
                                    declineAction: {
                                        eventHandler: rejectHandler,
                                        actionLabel: this.actionButtons[UCINotificationTemplate.RejectAction] || CIFramework.Utility.getResourceString("REJECT_BUTTON_TEXT")
                                    },
                                    imageUrl: this.icon,
                                    details: {},
                                    type: Internal.isNullOrUndefined(this.actionButtons[UCINotificationTemplate.RejectAction]) ? 1 /* AcceptOnly */ : 0 /* AcceptDecline */,
                                    entityLookUpValue: null,
                                    desktopNotificationSettings: this.desktopNotificationSettings,
                                    buttonCount: this.buttonCount,
                                    themeType: this.theme
                                };
                                if (!Internal.isNullOrUndefined(this.timeout) && this.timeout > 0 && this.showTimeout === CIFramework.ShowTimeoutOption.Yes) {
                                    const timeoutAction = {
                                        eventHandler: timeoutHandler,
                                        actionLabel: CIFramework.Utility.getResourceString("NOTIFICATION_DETAIL_WAIT_TIME_TEXT"),
                                        timeout: this.timeout
                                    };
                                    ret.timeoutAction = timeoutAction;
                                }
                                else {
                                    // tslint:disable-next-line:no-console
                                    console.log("Timeout action not added for addpopupnotification ");
                                }
                                const stringResolvers = [];
                                // stringResolvers.push(TemplatesUtility.resolveTemplateString(this.title, templateParams, this.name).then(
                                // 	function (result: string) {
                                // 		ret.title = result;
                                // 		return Promise.resolve(result);
                                // 	},
                                // 	function (error: Error) {
                                // 		ret.title = this.title;
                                // 		console.log(error);
                                // 		return Promise.reject(error);
                                // 	}));
                                // stringResolvers.push(TemplatesUtility.resolveTemplateString(this.icon, templateParams, this.name).then(
                                // 	function (result: string) {
                                // 		ret.imageUrl = result;
                                // 		return Promise.resolve(result);
                                // 	},
                                // 	function (error: Error) {
                                // 		ret.imageUrl = this.icon;
                                // 		console.log(error);
                                // 		return Promise.reject(error);
                                // 	}));
                                if (this.infoFields.length > 0) {
                                    // Sort the fields as per priority for evaluation
                                    const notificationFieldList = [];
                                    // tslint:disable-next-line:forin
                                    for (const i in this.infoFields) {
                                        notificationFieldList.push(new NotificationField(this.infoFields[i].msdyn_lineheader, this.infoFields[i].msdyn_value, this.infoFields[i].msdyn_priority));
                                    }
                                    notificationFieldList.sort(this.compareInfoFields);
                                    const noOfNecessaryFields = (notificationFieldList.length > Internal.NotificationConstants.NoOfFieldsAllowedInNotification) ? Internal.NotificationConstants.NoOfFieldsAllowedInNotification : notificationFieldList.length;
                                    const availableFields = 0;
                                    const fieldsWithValues = [];
                                    const promise = new Promise(
                                    // tslint:disable-next-line:no-shadowed-variable
                                    function (resolve, reject) {
                                        this.resolveFields(notificationFieldList, 0, noOfNecessaryFields, templateParams, this.name, fieldsWithValues, availableFields, noOfNecessaryFields).then(function (response) {
                                            this.updatePopupItemDetailswithOrderedFields(ret, fieldsWithValues);
                                            return resolve(fieldsWithValues);
                                        }.bind(this), function (error) {
                                            // tslint:disable-next-line:no-console
                                            console.log(error);
                                            this.updatePopupItemDetailswithOrderedFields(ret, fieldsWithValues); // even on error, we wanted fields to be filled with whatever we have and proceed with notification with the available fields.
                                            return resolve(fieldsWithValues);
                                        }.bind(this));
                                    }.bind(this));
                                    stringResolvers.push(promise);
                                }
                                Promise.all(stringResolvers).then(
                                // tslint:disable-next-line:only-arrow-functions
                                function (result) {
                                    return resolve(ret);
                                }.bind(this), 
                                // tslint:disable-next-line:only-arrow-functions
                                function (error) {
                                    // TODO: log telemetry
                                    return resolve(ret);
                                }.bind(this));
                            }
                            catch (error) {
                                return reject(error);
                            }
                        }.bind(this));
                    }
                    /**
                     * Resolved the notification fields ordered by priority field
                     * @param notificationFieldList The list of notification field ordered by priority
                     * @param start The start index from where we need to resolve fields.
                     * @param end The end index till where we need to resolve it together
                     * @param templateParams The template parameters
                     * @param name The notification template name
                     * @param results The result list of notification fields with actual values if resolved.
                     * @param noOfResolvedFields The number of fields which got resolved successfully
                     * @param noOfNecessaryFields The number of necessary fields.
                     */
                    resolveFields(notificationFieldList, start, end, templateParams, name, results, noOfResolvedFields, noOfNecessaryFields) {
                        return new Promise(function (resolve, reject) {
                            try {
                                const stringResolversFields = [];
                                for (let i = start; i < end && i < notificationFieldList.length; i++) {
                                    const obj = { index: i };
                                    // stringResolversFields.push(TemplatesUtility.resolveTemplateString(notificationFieldList[i].value, templateParams, name).then(function (indexObj: any, result: any) {
                                    // 	if (!isNullOrUndefined(result) && result != "") {
                                    // 		results.push(new NotificationField(notificationFieldList[indexObj.index].lineheader, result, notificationFieldList[indexObj.index].priority));
                                    // 		noOfResolvedFields++;
                                    // 	}
                                    // 	return Promise.resolve("Success");
                                    // }.bind(this, obj), function (error: any) {
                                    // 	return Promise.resolve("Error");
                                    // }.bind(this)));
                                }
                                Promise.all(stringResolversFields).then(function (response) {
                                    if (end >= notificationFieldList.length || noOfResolvedFields >= noOfNecessaryFields) { // If we have got necessary no of fields or have completed the evaluation of the full list, resolve with whatever we have.
                                        return resolve(noOfResolvedFields);
                                    }
                                    if (noOfResolvedFields < noOfNecessaryFields) { // if there are  fields for evaluations further, call the same function with start and end index updated.
                                        // tslint:disable-next-line:only-arrow-functions
                                        this.resolveFields(notificationFieldList, end, end + 1, templateParams, name, results, noOfResolvedFields, noOfNecessaryFields).then(function (_response) {
                                            return resolve(_response);
                                        }.bind(this));
                                    }
                                    // tslint:disable-next-line:only-arrow-functions
                                }.bind(this), function (error) {
                                    return resolve(noOfResolvedFields);
                                }.bind(this));
                            }
                            catch (error) {
                                return resolve(noOfResolvedFields);
                            }
                        }.bind(this));
                    }
                    /// Updates popupItem. details with the notification fields in the order of priority
                    updatePopupItemDetailswithOrderedFields(popupItem, fieldsWithValues) {
                        fieldsWithValues.sort(this.compareInfoFields);
                        let avaialableFields = 0;
                        for (const field of fieldsWithValues) {
                            popupItem.details[field.lineheader] = field.value;
                            avaialableFields++;
                            if (avaialableFields === Internal.NotificationConstants.NoOfFieldsAllowedInNotification) {
                                return popupItem;
                            }
                        }
                        return popupItem;
                    }
                    // compare function for notification fields.
                    compareInfoFields(field1, field2) {
                        if (field1.priority === field2.priority) {
                            return Internal.ComparisonResult.EQUAL;
                        }
                        // Null checks are for pushing null values to the end of the list on sorting
                        if (Internal.isNullOrUndefined(field1.priority)) {
                            return Internal.ComparisonResult.GREATER;
                        }
                        if (Internal.isNullOrUndefined(field2.priority)) {
                            return Internal.ComparisonResult.LESSER;
                        }
                        return field1.priority > field2.priority ? Internal.ComparisonResult.GREATER : Internal.ComparisonResult.LESSER;
                    }
                    get templateId() {
                        return this._templateId;
                    }
                    set templateId(id) {
                        this._templateId = id;
                    }
                    get name() {
                        return this._name;
                    }
                    set name(name) {
                        this._name = name;
                    }
                    get isAutoAcceptNotification() {
                        return this._isAutoAcceptNotification;
                    }
                    set isAutoAcceptNotification(isAutoAcceptNotification) {
                        this._isAutoAcceptNotification = isAutoAcceptNotification;
                    }
                    get title() {
                        return this._title;
                    }
                    set title(title) {
                        this._title = title;
                    }
                    get actionButtons() {
                        return this._actionButtons;
                    }
                    set actionButtons(pair) {
                        this._actionButtons = pair;
                    }
                    get icon() {
                        return this._icon;
                    }
                    set icon(icon) {
                        this._icon = icon;
                    }
                    get timeout() {
                        return this._timeout;
                    }
                    set timeout(timeout) {
                        this._timeout = timeout;
                    }
                    get showTimeout() {
                        return this._showTimeout;
                    }
                    set showTimeout(option) {
                        this._showTimeout = Internal.isNullOrUndefined(option) ? CIFramework.ShowTimeoutOption.Yes : option;
                    }
                    get theme() {
                        return this._theme;
                    }
                    set theme(theme) {
                        this._theme = Internal.isNullOrUndefined(theme) ? CIFramework.Constants.darkTheme : (theme === 100000001 /* Light */) ? CIFramework.Constants.lightTheme : CIFramework.Constants.darkTheme;
                    }
                    get infoFields() {
                        return this._infoField;
                    }
                    set infoFields(info) {
                        this._infoField = info;
                    }
                    get desktopNotificationSettings() {
                        return this._desktopNotificationSettings;
                    }
                    set desktopNotificationSettings(setting) {
                        this._desktopNotificationSettings = setting;
                    }
                    get buttonCount() {
                        return this._buttonCount;
                    }
                    set buttonCount(count) {
                        this._buttonCount = count;
                    }
                }
                UCINotificationTemplate._notificationTemplates = new Map();
                UCINotificationTemplate._templateBytag = new Map();
                UCINotificationTemplate.AcceptAction = "100000000";
                UCINotificationTemplate.RejectAction = "100000001";
                return UCINotificationTemplate;
            })();
            Internal.UCINotificationTemplate = UCINotificationTemplate;
            /**
             * Class for holding notification field related properites.
             */
            class NotificationField {
                constructor(lineheader, value, priority) {
                    this.lineheader = lineheader;
                    this.value = value;
                    this.priority = priority;
                }
            }
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="SessionTemplatesInfra.ts" />
/// <reference path="NotificationTemplatesInfra.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            let ConsoleAppSessionManager = /** @class */ (() => {
                class ConsoleAppSessionManager extends Internal.SessionManager {
                    constructor() {
                        super();
                        this.sessionSwitchHandlerID = Microsoft.AppRuntime.Sessions.addOnAfterSessionSwitch(this.onSessionSwitched.bind(this));
                        this.sessionCloseHandlerID = Microsoft.AppRuntime.Sessions.addOnAfterSessionClose(this.onSessionClosed.bind(this));
                        this.sessionCreateHandlerID = Microsoft.AppRuntime.Sessions.addOnAfterSessionCreate(this.onSessionCreated.bind(this));
                        this.sessionToActivityCountMap = new Map();
                        this.notificationDisplayHandlerID = Microsoft.AppRuntime.Notification.addOnNotificationStateChangeHandler(Internal.onNotificationDisplay.bind(this));
                        this.appVisibilityHandlerID = Microsoft.AppRuntime.Internal.addOnWindowVisibilityStateChangeHandler(Internal.onWindowFocusChange.bind(this));
                    }
                    /**
                    * The handler called by the client for SessionSwitched event. The client is expected
                    * to pass a SessionEventArguments object with details of the event. This handler will pass the
                    * sessionSwitch message to the widget as an event resulting in the registered widget-side
                    * handler, if any, being invoked
                    * @param event event detail will be set to a map {"oldSessionId": oldSessionId, "newSessionId": newSessionId} where
                    * 'oldSessionId is the ID of the Session which is currently focussed and the newSessionId is the ID of the Session
                    * which is to be focussed now
                    */
                    onSessionSwitched(event) {
                        const eventMap = Microsoft.CIFramework.Utility.buildMap(event.getEventArgs().getInputArguments());
                        let originUrl = null;
                        const previousSessionId = eventMap.get(CIFramework.Constants.previousSessionId);
                        const newSessionId = eventMap.get(CIFramework.Constants.newSessionId);
                        const previousProvider = Internal.state.sessionManager.getProvider(previousSessionId);
                        const newProvider = Internal.state.sessionManager.getProvider(newSessionId);
                        if (previousProvider != null) {
                            originUrl = previousProvider.landingUrl;
                        }
                        if (newProvider != null) {
                            originUrl = newProvider.landingUrl;
                        }
                        if (Internal.state.isAnalyticsEnabledForAnyProvider) {
                            Internal.raiseSystemAnalyticsEvent(CIFramework.InternalEventName.SessionFocusOut, eventMap, new Map().set(CIFramework.Constants.originURL, originUrl));
                            Internal.raiseSystemAnalyticsEvent(CIFramework.InternalEventName.SessionFocusIn, eventMap, new Map().set(CIFramework.Constants.originURL, originUrl));
                        }
                        let switchProvider = false;
                        const sessionInfo = Internal.state.sessionManager.sessions.get(newSessionId);
                        if (!Internal.isNullOrUndefined(sessionInfo)) {
                            this.resetActivityIndicator(newSessionId);
                        }
                        if (previousProvider != null) {
                            // Persist and close the Notes flap before switching the session, only if the previous session was a provider session
                            Internal.state.client.collapseFlap(previousSessionId);
                            if (previousProvider !== newProvider) {
                                switchProvider = true;
                            }
                            previousProvider.setUnfocusedSession(previousSessionId, switchProvider);
                        }
                        if (newProvider != null) {
                            newProvider.setFocusedSession(newSessionId, switchProvider);
                            Internal.state.client.setPanelMode("setPanelMode", Internal.state.sessionManager.getPanelState(newSessionId));
                            Internal.state.client.setProviderVisibility(Internal.state.providerManager.ciProviders, newProvider.providerId);
                        }
                        else {
                            Internal.state.client.setPanelMode("setPanelMode", CIFramework.Constants.sidePanelHiddenState);
                        }
                    }
                    /**
                     * The handler called by the client for SessionClosed event. The client is expected
                    * to pass a SessionEventArguments object with details of the event. This handler will pass the
                    * sessionClosed message to the widget as an event resulting in the registered widget-side
                    * handler, if any, being invoked.
                     * @param event event detail will be set to a map {"sessionId": sessionId} where sessionId is the ID
                     * of the session which is being closed
                     */
                    onSessionClosed(event) {
                        const eventMap = Microsoft.CIFramework.Utility.buildMap(event.getEventArgs().getInputArguments());
                        let originUrl = null;
                        const sessionId = eventMap.get(CIFramework.Constants.sessionId);
                        const provider = Internal.state.sessionManager.getProvider(sessionId);
                        if (provider != null) {
                            originUrl = provider.landingUrl;
                        }
                        Internal.raiseSystemAnalyticsEvent(CIFramework.InternalEventName.SessionClosed, eventMap, new Map().set(CIFramework.Constants.originURL, originUrl));
                        // Persist and close the Notes flap before closing the session
                        Internal.state.client.collapseFlap(sessionId);
                        const sessionInfo = Internal.state.sessionManager.sessions.get(sessionId);
                        if (provider != null) {
                            if (this.isLiveWorkItemCreationEnabledForProvider(provider) && !Internal.isNullOrUndefined(sessionInfo)) {
                                const valueMap = new Map().set(CIFramework.Constants.entityStateCode, CIFramework.Constants.stateCodeClose).set(CIFramework.Constants.entityStatusCode, CIFramework.Constants.statusCodeClose);
                                const updateMap = new Map().set(CIFramework.Constants.entityName, CIFramework.Constants.liveWorkItemEntity).set(CIFramework.Constants.entityId, sessionInfo.conversationId).set(CIFramework.Constants.value, valueMap).set(CIFramework.Constants.originURL, originUrl);
                                Internal.updateConversation(updateMap);
                            }
                            provider.closeSession(sessionId);
                        }
                    }
                    /**
                     * The handler called by the client for SessionCreated event. The client is expected
                    * to pass a SessionEventArguments object with details of the event. This handler will collapse
                    * the SidePanel which will be expanded on createSession for provider based sessions.
                     * @param event event detail will be set to a map {"sessionId": sessionId} where sessionId is the ID
                     * of the session which was created
                     */
                    onSessionCreated(event) {
                        // state.client.setPanelMode("setPanelMode", Constants.sidePanelHiddenState);
                        const eventMap = Microsoft.CIFramework.Utility.buildMap(event.getEventArgs().getInputArguments());
                        const newSessionId = eventMap.get(CIFramework.Constants.newSessionId);
                        const newProvider = Internal.state.sessionManager.getProvider(newSessionId);
                        if (newProvider != null) {
                            Internal.state.client.setPanelMode("setPanelMode", Internal.state.sessionManager.getPanelState(newSessionId));
                        }
                        else {
                            Internal.state.client.setPanelMode("setPanelMode", CIFramework.Constants.sidePanelHiddenState);
                        }
                    }
                    getFocusedSession(telemetryData) {
                        const startTime = new Date();
                        const apiName = "Microsoft.AppRuntime.Sessions.getFocusedSession";
                        const res = Microsoft.AppRuntime.Sessions.getFocusedSession().sessionId;
                        Internal.logApiData(telemetryData, startTime, Date.now() - startTime.getTime(), apiName);
                        return res;
                    }
                    isDefaultSession(sessionId, telemetryData) {
                        const startTime = new Date();
                        const apiName = "Microsoft.AppRuntime.Sessions.getSession";
                        const res = Microsoft.AppRuntime.Sessions.getSession(sessionId).isDefault;
                        Internal.logApiData(telemetryData, startTime, Date.now() - startTime.getTime(), apiName);
                        return res;
                    }
                    canCreateSession(telemetryData) {
                        const startTime = new Date();
                        const apiName = "Microsoft.AppRuntime.Sessions.canCreateSession";
                        const res = Microsoft.AppRuntime.Sessions.canCreateSession();
                        Internal.logApiData(telemetryData, startTime, Date.now() - startTime.getTime(), apiName);
                        return res;
                    }
                    setSessionTitle(sessionId, input) {
                        if (!this.sessions.has(sessionId)) {
                            const error = {};
                            error.reportTime = new Date().toUTCString();
                            error.errorMsg = "Session Id " + sessionId + " not found";
                            error.errorType = Internal.errorTypes.GenericError;
                            error.sourceFunc = this.setSessionTitle.name;
                            return Promise.reject(error);
                        }
                        // tslint:disable-next-line:only-arrow-functions
                        return new Promise(function (resolve, reject) {
                            Microsoft.AppRuntime.Internal.getSessionTemplate(sessionId).then((sessionTemplate) => {
                                Microsoft.AppRuntime.Utility.resolveSlug(sessionTemplate.title, Microsoft.CIFramework.Utility.buildMap(input), sessionTemplate.name).then((title) => {
                                    if (!(Internal.isNullOrEmpty(sessionTemplate.title) && Internal.isNullOrEmpty(title))) {
                                        Microsoft.AppRuntime.Sessions.getSession(sessionId).setTitleAndInitials(title);
                                    }
                                    return Promise.resolve(title);
                                }, (error) => {
                                    return Promise.reject(error);
                                });
                            });
                        }.bind(this));
                    }
                    createSession(provider, input, context, customerName, telemetryData, appId, cifVersion, correlationId, providerSessionId) {
                        // Before we create the new session, we persist the current notes if any and close the flap
                        const currentSessionId = Internal.state.sessionManager.getFocusedSession();
                        Internal.state.client.collapseFlap(currentSessionId);
                        Internal.logAPIInternalInfo(appId, false, null, CIFramework.MessageType.createSession + "ConsoleAppSessionManager - Processing createSession", cifVersion, "", provider.name, "", correlationId);
                        return new Promise(function (resolve, reject) {
                            Internal.logAPIInternalInfo(appId, false, null, CIFramework.MessageType.createSession + "ConsoleAppSessionManager - Resolving session template name", cifVersion, "", provider.name, "", correlationId);
                            Internal.TemplateManager.resolveTemplateUniqueName(provider, "Session" /* Session */, input.templateName).then(function (templateName) {
                                Internal.logAPIInternalInfo(appId, false, null, CIFramework.MessageType.createSession + "ConsoleAppSessionManager - Resolved session template name", cifVersion, "", provider.name, "", correlationId);
                                const sessionInput = {
                                    templateName,
                                    sessionContext: Microsoft.CIFramework.Utility.buildMap(input.templateParameters)
                                };
                                const startTime = new Date();
                                const resultMap = new Map();
                                const apiName = "Microsoft.AppRuntime.Sessions.create";
                                let conversationId = null;
                                Internal.logAPIInternalInfo(appId, false, null, CIFramework.MessageType.createSession + "ConsoleAppSessionManager - Invoking Microsoft.AppRuntime.Sessions.create", cifVersion, "", provider.name, "", correlationId);
                                Microsoft.AppRuntime.Sessions.create(sessionInput).then(function (sessionId) {
                                    Internal.logAPIInternalInfo(appId, false, null, CIFramework.MessageType.createSession + "ConsoleAppSessionManager - Processed Microsoft.AppRuntime.Sessions.create", cifVersion, "", provider.name, "", correlationId);
                                    Internal.logApiData(telemetryData, startTime, Date.now() - startTime.getTime(), apiName);
                                    if (this.isLiveWorkItemCreationEnabledForProvider(provider)) {
                                        conversationId = Microsoft.CIFramework.Utility.newGuid();
                                        this.createLiveworkitem(provider, conversationId, cifVersion, correlationId);
                                    }
                                    else {
                                        conversationId = correlationId;
                                    }
                                    // Get Tab Context here
                                    const session = Microsoft.AppRuntime.Sessions.getSession(sessionId);
                                    Internal.logAPIInternalInfo(appId, false, null, CIFramework.MessageType.createSession + "ConsoleAppSessionManager - Invoking Microsoft.AppRuntime.Internal.getSessionTemplate", cifVersion, "", provider.name, "", correlationId);
                                    Microsoft.AppRuntime.Internal.getSessionTemplate(sessionId).then((sessionTemplate) => {
                                        Internal.logAPIInternalInfo(appId, false, null, CIFramework.MessageType.createSession + "ConsoleAppSessionManager - Processed Microsoft.AppRuntime.Internal.getSessionTemplate", cifVersion, "", provider.name, "", correlationId);
                                        const sessionConfig = {
                                            panelState: this.getSessionTemplatePanelState(sessionTemplate)
                                        };
                                        Internal.logAPIInternalInfo(appId, false, null, CIFramework.MessageType.createSession + "ConsoleAppSessionManager - Invoking session.getContextConsoleAppSessionManager", cifVersion, "", provider.name, "", correlationId);
                                        session.getContext().then((res) => {
                                            Internal.logAPIInternalInfo(appId, false, null, CIFramework.MessageType.createSession + "ConsoleAppSessionManager - Processed session.getContextConsoleAppSessionManager", cifVersion, "", provider.name, "", correlationId);
                                            this.sessions.set(sessionId, new Internal.SessionInfo(provider, sessionConfig, input.templateParameters, correlationId, Microsoft.CIFramework.Utility.newGuid(), providerSessionId, conversationId));
                                            Internal.state.client.setPanelMode("setPanelMode", sessionConfig.panelState);
                                            Internal.state.client.setProviderVisibility(Internal.state.providerManager.ciProviders, provider.providerId);
                                            const tabContext = res.getTabContext("anchor");
                                            this.updateTabContextInCurrentSession(tabContext, sessionId);
                                            window.setTimeout(provider.setFocusedSession.bind(provider), 0, sessionId, true);
                                            Internal.logAPIInternalInfo(appId, false, null, CIFramework.MessageType.createSession + "ConsoleAppSessionManager - Invoking associate tab with session", cifVersion, "", provider.name, "", correlationId);
                                            this.associateTabWithSession(sessionId, "anchor", tabContext, "", []);
                                            Internal.logAPIInternalInfo(appId, false, null, CIFramework.MessageType.createSession + "ConsoleAppSessionManager - Processed associated tab with session", cifVersion, "", provider.name, "", correlationId);
                                        });
                                    });
                                    resultMap.set("sessionId", sessionId);
                                    resultMap.set("conversationId", conversationId);
                                    resolve(resultMap); // Tell the caller the anchor tab is ready; other tabs loaded in the background
                                }.bind(this), 
                                // tslint:disable-next-line:only-arrow-functions
                                function (errorMessage) {
                                    const error = {};
                                    error.message = errorMessage;
                                    error.name = "createSession";
                                    const errorData = Internal.generateErrorObject(error, "ConsoleAppSessionManager - Microsoft.AppRuntime.Sessions.create", Internal.errorTypes.XrmApiError);
                                    Internal.logAPIFailure(appId, true, errorData, "ConsoleAppSessionManager", cifVersion, "", "", "", correlationId);
                                    reject(errorMessage);
                                }.bind(this));
                            }.bind(this), (errorMessage) => {
                                const error = {};
                                error.message = errorMessage;
                                error.name = "createSession";
                                const errorData = Internal.generateErrorObject(error, "ConsoleAppSessionManager - resolveTemplateUniqueName", Internal.errorTypes.XrmApiError);
                                Internal.logAPIFailure(appId, true, errorData, "ConsoleAppSessionManager", cifVersion, "", "", "", correlationId);
                                reject(errorMessage);
                            });
                        }.bind(this));
                    }
                    getSessionTemplatePanelState(sessionTemplate) {
                        if (!Internal.isNullOrUndefined(sessionTemplate) && !Internal.isNullOrUndefined(sessionTemplate.panelState)) {
                            // tslint:disable-next-line:radix
                            const panelStateOptionValue = parseInt(sessionTemplate.panelState);
                            return ConsoleAppSessionManager.panelOptionToState.get(panelStateOptionValue);
                        }
                        return CIFramework.Constants.sidePanelHiddenState;
                    }
                    resetActivityIndicator(sessionId) {
                        Microsoft.AppRuntime.Sessions.getSession(sessionId).resetActivityIndicator();
                    }
                    createLiveworkitem(provider, liveworkitemId, cifVersion, correlationId) {
                        const entity = {};
                        entity[Internal.LiveWorkItemEntity.ocLiveWorkItemId] = liveworkitemId;
                        entity[Internal.LiveWorkItemEntity.subject] = "Visitor : " + provider.name;
                        entity[Internal.LiveWorkItemEntity.title] = "Visitor : " + provider.name;
                        entity[Internal.LiveWorkItemEntity.activityId] = liveworkitemId;
                        entity[Internal.LiveWorkItemEntity.providerName] = liveworkitemId;
                        entity[Internal.LiveWorkItemEntity.isThirdPartyConversation] = true;
                        Xrm.WebApi.createRecord(Internal.LiveWorkItemEntity.entityName, entity).then(function success(result) {
                            // tslint:disable-next-line:no-console
                            console.log("Conversation Data record created with ID: " + result.id);
                        }, (error) => {
                            const errorData = Internal.generateErrorObject(error, "ConsoleAppSessionManager - CreateSession.createLiveworkitem/Tag", Internal.errorTypes.XrmApiError);
                            Internal.logAPIFailure(Internal.appId, true, errorData, "ConsoleAppSessionManager", cifVersion, "", "", "", correlationId);
                        });
                    }
                    requestFocusSession(sessionId, messagesCount, telemetryData) {
                        const startTime = new Date();
                        const apiName = "Microsoft.AppRuntime.Sessions.getSession(sessionId).requestFocus";
                        Microsoft.AppRuntime.Sessions.getSession(sessionId).requestFocus();
                        Internal.logApiData(telemetryData, startTime, Date.now() - startTime.getTime(), apiName);
                        return Promise.resolve();
                    }
                    notifyKpiBreach(sessionId, resetKpiBreach, kpiBreachDetails, telemetryData) {
                        const startTime = new Date();
                        const apiName = "Microsoft.AppRuntime.Sessions.getSession(sessionId).notifyKpiBreach";
                        Microsoft.AppRuntime.Sessions.getSession(sessionId).notifyKpiBreach(this.sessionToActivityCountMap.get(sessionId), resetKpiBreach);
                        Internal.logApiData(telemetryData, startTime, Date.now() - startTime.getTime(), apiName);
                        return Promise.resolve();
                    }
                    notifyNewActivity(sessionId, messagesCount, shouldReset, telemetryData) {
                        if (isNaN(messagesCount) || messagesCount < 0) {
                            return Promise.resolve();
                        }
                        const focusedSession = Microsoft.AppRuntime.Sessions.getFocusedSession();
                        if (focusedSession != null && focusedSession.sessionId === sessionId) {
                            return Promise.resolve();
                        }
                        this.sessionToActivityCountMap.set(sessionId, messagesCount);
                        if ((shouldReset || messagesCount == null) && this.sessionToActivityCountMap.has(sessionId)) {
                            this.sessionToActivityCountMap.delete(sessionId);
                        }
                        const startTime = new Date();
                        const apiName = "Microsoft.AppRuntime.Sessions.getSession(sessionId).notifyNewActivity";
                        Microsoft.AppRuntime.Sessions.getSession(sessionId).notifyNewActivity(messagesCount);
                        Internal.logApiData(telemetryData, startTime, Date.now() - startTime.getTime(), apiName);
                        return Promise.resolve();
                    }
                    focusSession(sessionId) {
                        Microsoft.AppRuntime.Sessions.getSession(sessionId).focus();
                        return Promise.resolve();
                    }
                    closeSession(sessionId) {
                        return new Promise(function (resolve, reject) {
                            Microsoft.AppRuntime.Sessions.getSession(sessionId).close().then(function (closeStatus) {
                                this.sessions.delete(sessionId);
                                if (this.sessionToActivityCountMap.has(sessionId)) {
                                    this.sessionToActivityCountMap.delete(sessionId);
                                }
                                resolve(closeStatus);
                            }.bind(this), (errorMessage) => {
                                reject(errorMessage);
                            });
                        }.bind(this));
                    }
                    getFocusedTab(sessionId, telemetryData) {
                        const startTime = new Date();
                        const apiName = "Microsoft.AppRuntime.Sessions.getSession(sessionId).getFocusedTab";
                        const res = Microsoft.AppRuntime.Sessions.getSession(sessionId).getFocusedTab().tabId;
                        Internal.logApiData(telemetryData, startTime, Date.now() - startTime.getTime(), apiName);
                        return res;
                    }
                    createTab(provider, sessionId, input, telemetryData, appId, cifVersion, correlationId) {
                        return new Promise(function (resolve, reject) {
                            Internal.TemplateManager.resolveTemplateUniqueName(provider, "ApplicationTab" /* ApplicationTab */, input.templateName).then(function (templateName) {
                                const appTabInput = {
                                    templateName,
                                    appContext: input.templateParameters ? Microsoft.CIFramework.Utility.buildMap(input.templateParameters) : new Map(),
                                    isFocused: input.isFocused ? input.isFocused : false
                                };
                                Microsoft.AppRuntime.Sessions.getSession(sessionId).createTab(appTabInput).then(function (tabId) {
                                    // Get Tab Context here
                                    const context = Microsoft.AppRuntime.Sessions.getSession(sessionId).getContext();
                                    context.then(res => {
                                        const tabContext = res.getTabContext(tabId);
                                        this.associateTabWithSession(sessionId, tabId, tabContext, "", []);
                                    });
                                    if (input.injectOnSave) {
                                        window.top.Xrm.Page.data.entity.addOnSave(Microsoft.CIFramework.Utility.onFormSaveHandler);
                                    }
                                    return resolve(tabId);
                                }.bind(this), 
                                // tslint:disable-next-line:only-arrow-functions
                                function (error) {
                                    const errorData = Internal.generateErrorObject(error, "ConsoleAppSessionManager - tab.createTab", Internal.errorTypes.XrmApiError);
                                    Internal.logAPIFailure(appId, true, errorData, "ConsoleAppSessionManager", cifVersion, "", "", "", correlationId);
                                    return reject(error);
                                }.bind(this));
                            }.bind(this), (error) => {
                                const errorData = Internal.generateErrorObject(error, "ConsoleAppSessionManager - resolveTemplateUniqueName", Internal.errorTypes.XrmApiError);
                                Internal.logAPIFailure(appId, true, errorData, "ConsoleAppSessionManager", cifVersion, "", "", "", correlationId);
                                return reject(error);
                            });
                        }.bind(this));
                    }
                    createTabInternal(provider, sessionId, input, telemetryData) {
                        const startTime = new Date();
                        const apiName = "Microsoft.AppRuntime.Sessions.getSession(sessionId).createTab";
                        // tslint:disable-next-line:only-arrow-functions
                        return new Promise(function (resolve, reject) {
                            Internal.TemplateManager.resolveTemplateUniqueName(provider, "ApplicationTab" /* ApplicationTab */, input.templateName).then(function (templateName) {
                                const appTabInput = {
                                    templateName,
                                    appContext: input.templateParameters ? Microsoft.CIFramework.Utility.buildMap(input.templateParameters) : new Map()
                                };
                                Microsoft.AppRuntime.Sessions.getSession(sessionId).createTab(appTabInput).then(function (tabId) {
                                    const additionalData = {};
                                    additionalData.applicationType = input.pageInput.pageType;
                                    Internal.logApiData(telemetryData, startTime, Date.now() - startTime.getTime(), apiName, additionalData);
                                    const inputObject = {};
                                    inputObject[tabId] = { "pageType": input.pageInput.pageType, "entityName": input.pageInput.entityName, "entityId": input.pageInput.entityId };
                                    this.updateTabContextInCurrentSession(inputObject, sessionId);
                                    resolve(tabId);
                                }.bind(this), 
                                // tslint:disable-next-line:only-arrow-functions
                                function (error) {
                                    return reject(error);
                                }.bind(this));
                            }, (error) => {
                                return reject(error);
                            });
                        }.bind(this));
                    }
                    focusTab(sessionId, tabId, telemetryData) {
                        const startTime = new Date();
                        const apiName = "Microsoft.AppRuntime.Sessions.getSession(sessionId).getTab(tabId).focus";
                        Microsoft.AppRuntime.Sessions.getSession(sessionId).getTab(tabId).focus();
                        Internal.logApiData(telemetryData, startTime, Date.now() - startTime.getTime(), apiName);
                        return Promise.resolve();
                    }
                    closeTab(sessionId, tabId) {
                        return new Promise((resolve, reject) => {
                            Microsoft.AppRuntime.Sessions.getSession(sessionId).getTab(tabId).close().then((closeStatus) => {
                                resolve(closeStatus);
                            }, (errorMessage) => {
                                reject(errorMessage);
                            });
                        });
                    }
                    refreshTab(sessionId, tabId) {
                        return new Promise((resolve, reject) => {
                            Microsoft.AppRuntime.Sessions.getSession(sessionId).getTab(tabId).refresh().then(() => {
                                resolve(true);
                            }, (errorMessage) => {
                                reject(errorMessage);
                            });
                        });
                    }
                    isLiveWorkItemCreationEnabledForProvider(provider) {
                        return (provider && provider.name !== Internal.ChannelProvider.Omnichannel_UniqueName && provider.enableAnalytics === true && provider.isThirdPartyLWICreationOverridden === false && Internal.state.isOmnichannelInstalled);
                    }
                }
                ConsoleAppSessionManager.panelOptionToState = new Map([
                    [162450000, CIFramework.Constants.sidePanelCollapsedState],
                    [162450001, CIFramework.Constants.sidePanelHiddenState],
                    [162450002, CIFramework.Constants.sidePanelExpandedState] // Dock
                ]);
                return ConsoleAppSessionManager;
            })();
            Internal.ConsoleAppSessionManager = ConsoleAppSessionManager;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
    * @license Copyright (c) Microsoft Corporation. All rights reserved.
    */
/// <reference path="SessionManager.ts" />
/// <reference path="ConsoleAppSessionManager.ts" />
var Internal = Microsoft.CIFramework.Internal;
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var External;
        (function (External) {
            class CIFExternalUtilityImpl {
                getTemplateForSession(sessionId) {
                    try {
                        let sessionIdVal;
                        if (sessionId) {
                            sessionIdVal = sessionId;
                        }
                        else {
                            sessionIdVal = CIFramework.Internal.state.sessionManager.getFocusedSession();
                        }
                        let sessionConfig;
                        if (CIFramework.Internal.state.sessionManager.sessions.has(sessionIdVal)) {
                            sessionConfig = CIFramework.Internal.state.sessionManager.sessions.get(sessionIdVal).sessionConfig;
                        }
                        else {
                            logErrors("Please provide valid session id", "CIFExternalUtility.getSessionTemplateId");
                            throw new Error("Invalid session Id");
                        }
                        return sessionConfig.templateId;
                    }
                    catch (error) {
                        logErrors("Error retrieving sessionTemplateId : " + error, "CIFExternalUtility.getTemplateForSession");
                        throw error;
                    }
                }
                getSessionTemplateParams(sessionId) {
                    try {
                        let sessionIdVal;
                        if (sessionId) {
                            sessionIdVal = sessionId;
                        }
                        else {
                            sessionIdVal = CIFramework.Internal.state.sessionManager.getFocusedSession();
                        }
                        if (CIFramework.Internal.state.sessionManager.sessions.has(sessionIdVal)) {
                            return CIFramework.Internal.state.sessionManager.sessions.get(sessionIdVal).templateParams;
                        }
                        else {
                            logErrors("Please provide valid session id", "CIFExternalUtility.getSessionTemplateParams");
                            throw new Error("Invalid session Id");
                        }
                    }
                    catch (error) {
                        logErrors("Error retrieving sessionTemplateParams : " + error, "CIFExternalUtility.getSessionTemplateParams");
                        throw error;
                    }
                }
                /**
                * API to set key/value pairs in templateparams dictionary
                * @param input set of key/value pairs
                * returns an Object Promise: The returned Object has the same structure as the underlying Xrm.Navigation.openForm() API
                */
                setSessionTemplateParams(input, sessionId) {
                    try {
                        if (!CIFramework.Internal.isNullOrUndefined(input)) {
                            let sessionIdVal;
                            if (sessionId) {
                                sessionIdVal = sessionId;
                            }
                            else {
                                sessionIdVal = CIFramework.Internal.state.sessionManager.getFocusedSession();
                            }
                            if (CIFramework.Internal.state.sessionManager.sessions.has(sessionIdVal)) {
                                CIFramework.Internal.state.sessionManager.sessions.get(sessionIdVal).setTemplateParams(input);
                                return CIFramework.Internal.state.sessionManager.sessions.get(sessionIdVal).templateParams;
                            }
                            else {
                                logErrors("Please provide valid session id", "CIFExternalUtility.setSessionTemplateParams");
                                throw new Error("Invalid session Id");
                            }
                        }
                        else {
                            logErrors("Parameter input is required", "CIFExternalUtility.setSessionTemplateParams");
                            throw new Error("Parameter required");
                        }
                    }
                    catch (error) {
                        logErrors("Error setting sessionTemplateParams : " + error, "CIFExternalUtility.setSessionTemplateParams");
                        throw error;
                    }
                }
                resolveTemplateString(input, templateParams, scope) {
                    return Microsoft.AppRuntime.Utility.resolveSlug(input, templateParams, scope);
                }
                createTab(input) {
                    // return Internal.state.sessionManager.createTabInternal(Internal.state.sessionManager.getFocusedSession(), input);
                    throw new Error(("method not implemented."));
                }
                focusTab(tabId, sessionId) {
                    try {
                        return new Promise((resolve, reject) => {
                            let sessionIdVal;
                            if (sessionId) {
                                sessionIdVal = sessionId;
                            }
                            else {
                                sessionIdVal = CIFramework.Internal.state.sessionManager.getFocusedSession();
                            }
                            CIFramework.Internal.state.sessionManager.focusTab(sessionIdVal, tabId).then((success) => {
                                resolve(success);
                            }, (error) => {
                                reject(error);
                            });
                        });
                    }
                    catch (error) {
                        logErrors("Error in focusTab : " + error, "CIFExternalUtility.focusTab");
                        Promise.reject(error);
                    }
                }
                getCurrentTab(sessionId) {
                    try {
                        let sessionIdVal;
                        if (sessionId) {
                            sessionIdVal = sessionId;
                        }
                        else {
                            sessionIdVal = CIFramework.Internal.state.sessionManager.getFocusedSession();
                        }
                        return CIFramework.Internal.state.sessionManager.getFocusedTab(sessionIdVal);
                    }
                    catch (error) {
                        logErrors("Error getCurrentTab : " + error, "CIFExternalUtility.getCurrentTab");
                        throw error;
                    }
                }
                refreshTab(tabId, sessionId) {
                    try {
                        return new Promise((resolve, reject) => {
                            let sessionIdVal;
                            if (sessionId) {
                                sessionIdVal = sessionId;
                            }
                            else {
                                sessionIdVal = CIFramework.Internal.state.sessionManager.getFocusedSession();
                            }
                            CIFramework.Internal.state.sessionManager.refreshTab(sessionIdVal, tabId).then((success) => {
                                resolve(success);
                            }, (error) => {
                                reject(error);
                            });
                        });
                    }
                    catch (error) {
                        logErrors("Error in refreshTab : " + error, "CIFExternalUtility.refreshTab");
                        Promise.reject(error);
                    }
                }
            }
            External.CIFExternalUtilityImpl = CIFExternalUtilityImpl;
            function logErrors(errorMessage, functionName) {
                // tslint:disable-next-line:no-console
                console.log(errorMessage);
                const error = {};
                error.reportTime = new Date().toUTCString();
                error.errorMsg = errorMessage;
                error.errorType = CIFramework.Internal.errorTypes.InvalidParams;
                error.sourceFunc = functionName;
                CIFramework.Internal.logAPIInternalInfo(CIFramework.Internal.appId, true, error, CIFramework.MessageType.logErrorsAndReject, CIFramework.Internal.cifVersion);
            }
        })(External = CIFramework.External || (CIFramework.External = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            /**
             * Enum defining the different client types available for CI
            */
            let ClientType = /** @class */ (() => {
                class ClientType {
                }
                ClientType.UnifiedClient = "4";
                return ClientType;
            })();
            Internal.ClientType = ClientType;
            /**
             * Enum defining the different session types available for CI
            */
            let SessionType = /** @class */ (() => {
                class SessionType {
                }
                SessionType.SingleSession = "0";
                SessionType.MultiSession = "1";
                return SessionType;
            })();
            Internal.SessionType = SessionType;
            let NotificationConstants = /** @class */ (() => {
                class NotificationConstants {
                }
                NotificationConstants.NoOfFieldsAllowedInNotification = 4;
                return NotificationConstants;
            })();
            Internal.NotificationConstants = NotificationConstants;
            let SessionTemplateConstants = /** @class */ (() => {
                class SessionTemplateConstants {
                }
                SessionTemplateConstants.sessionTemplateEntity = "msdyn_sessiontemplate";
                SessionTemplateConstants.uniqueNameAttribute = "msdyn_uniquename";
                SessionTemplateConstants.panelStateAttribute = "msdyn_panelstate";
                return SessionTemplateConstants;
            })();
            Internal.SessionTemplateConstants = SessionTemplateConstants;
            let ComparisonResult;
            (function (ComparisonResult) {
                ComparisonResult[ComparisonResult["EQUAL"] = 0] = "EQUAL";
                ComparisonResult[ComparisonResult["GREATER"] = 1] = "GREATER";
                ComparisonResult[ComparisonResult["LESSER"] = -1] = "LESSER";
            })(ComparisonResult = Internal.ComparisonResult || (Internal.ComparisonResult = {}));
            let SlugPrefix = /** @class */ (() => {
                class SlugPrefix {
                }
                SlugPrefix.CHANNEL_PROVIDER = "ChannelProvider";
                SlugPrefix.SESSION = "Session";
                SlugPrefix.CURRENT_TAB = "CurrentTab";
                SlugPrefix.ANCHOR_TAB = "AnchorTab";
                SlugPrefix.SPLIT_BY_DOT = ".";
                return SlugPrefix;
            })();
            Internal.SlugPrefix = SlugPrefix;
            /**
             * For Desktop Notifications
             */
            class NotificationParams {
            }
            Internal.NotificationParams = NotificationParams;
            class NotificationTelemetryParams {
            }
            Internal.NotificationTelemetryParams = NotificationTelemetryParams;
            let LiveWorkItemEntity = /** @class */ (() => {
                class LiveWorkItemEntity {
                }
                LiveWorkItemEntity.entityName = "msdyn_ocliveworkitem";
                LiveWorkItemEntity.title = "msdyn_title";
                LiveWorkItemEntity.subject = "subject";
                LiveWorkItemEntity.activityId = "activityid";
                LiveWorkItemEntity.ocLiveWorkItemId = "msdyn_ocliveworkitemid";
                LiveWorkItemEntity.providerName = "msdyn_channelproviderName";
                LiveWorkItemEntity.isThirdPartyConversation = "msdyn_thirdpartyconversation";
                return LiveWorkItemEntity;
            })();
            Internal.LiveWorkItemEntity = LiveWorkItemEntity;
            let ChannelProvider = /** @class */ (() => {
                class ChannelProvider {
                }
                ChannelProvider.Omnichannel = "omnichannel";
                // tslint:disable-next-line:variable-name
                ChannelProvider.Omnichannel_UniqueName = "msdyn_omnichannel";
                return ChannelProvider;
            })();
            Internal.ChannelProvider = ChannelProvider;
            let GlobalNotificationType;
            (function (GlobalNotificationType) {
                /**
                * Toast notification type.
                */
                GlobalNotificationType[GlobalNotificationType["TOAST"] = 1] = "TOAST";
                /**
                 * Persistent Message Bar notification type.
                 */
                GlobalNotificationType[GlobalNotificationType["MESSAGE_BAR"] = 2] = "MESSAGE_BAR";
            })(GlobalNotificationType = Internal.GlobalNotificationType || (Internal.GlobalNotificationType = {}));
            let DeprecatedEntityNames = /** @class */ (() => {
                class DeprecatedEntityNames {
                }
                DeprecatedEntityNames.NotificationTemplate = "msdyn_consoleapplicationnotificationtemplate";
                DeprecatedEntityNames.SessionTemplate = "msdyn_consoleapplicationsessiontemplate";
                DeprecatedEntityNames.ApplicationTabTemplate = "msdyn_consoleapplicationtemplate";
                return DeprecatedEntityNames;
            })();
            Internal.DeprecatedEntityNames = DeprecatedEntityNames;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            class WidgetIFrameWrapper {
                constructor(hostIFrame) {
                    this.hostIFrame = hostIFrame;
                    this.provider = null;
                    this.visibility = true;
                    this.preservedHeight = 0;
                }
                setVisibility(visibility) {
                    this.visibility = visibility;
                    return true;
                }
                setHeight(height) {
                    if (!this.hostIFrame) {
                        return false;
                    }
                    // this.preservedHeight = height;
                    if (this.visibility) {
                        this.hostIFrame.height = (height > 0 ? height.toString() : "calc(100% - 10px)");
                    }
                    else {
                        this.hostIFrame.height = "0";
                    }
                    return true;
                }
                static getDefaultWidth() {
                    return CIFramework.Constants.DEFAULT_WIDGET_WIDTH.toString();
                }
                setWidth(width) {
                    if (!this.hostIFrame) {
                        return false;
                    }
                    this.preservedWidth = width;
                    if (this.visibility) {
                        this.hostIFrame.width = (width > 0 ? width.toString() : WidgetIFrameWrapper.getDefaultWidth());
                    }
                    else {
                        this.hostIFrame.width = "0";
                    }
                    return true;
                }
                getContentWindow() {
                    if (!this.hostIFrame) {
                        return null;
                    }
                    return this.hostIFrame.contentWindow;
                }
                setProvider(provider) {
                    this.provider = provider;
                }
            }
            Internal.WidgetIFrameWrapper = WidgetIFrameWrapper;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            /**
             * All Constants related to Telemetry should go here
            */
            let TelemetryConstants;
            (function (TelemetryConstants) {
                TelemetryConstants.apiVersion = "API_Version";
                TelemetryConstants.appId = "App_ID";
                TelemetryConstants.channelOrder = "Channel_Order";
                TelemetryConstants.clientType = "Client_Type";
                TelemetryConstants.crmVersion = "CRM_Version";
                TelemetryConstants.orgId = "Organization_ID";
                TelemetryConstants.orgName = "Organization_Name";
                TelemetryConstants.providerId = "Provider_ID";
                TelemetryConstants.providerName = "Provider_Name";
                TelemetryConstants.startTime = "Start_Time";
                TelemetryConstants.timeTaken = "Time_Taken";
                TelemetryConstants.apiName = "API_Name";
                TelemetryConstants.eventName = "Event_Name";
                TelemetryConstants.telemetryData = "API_Perf_Markers";
                TelemetryConstants.isError = "Is_Error";
                TelemetryConstants.errorMessage = "Error_Message";
                TelemetryConstants.errorType = "Error_Type";
                TelemetryConstants.errorReportTime = "Error_Report_Time";
                TelemetryConstants.errorFunction = "Error_Function";
                TelemetryConstants.perfTable = "D365_CIF_Perf";
                TelemetryConstants.usageTable = "D365_CIF_Usage";
                TelemetryConstants.apiUsageTable = "D365_CIF_APIUsage";
                TelemetryConstants.analyticsUsageTable = "D365_CIFAnalytics_Usage";
                TelemetryConstants.scenarioMarkerTable = "D365_CIF_ScenarioMarker";
                TelemetryConstants.userId = "User_ID";
                TelemetryConstants.CIFVersion = "CIF_Version";
                TelemetryConstants.customParameters = "customParameters";
                TelemetryConstants.navigationType = "Nav_Type";
                TelemetryConstants.multiSession = "Multi Session";
                TelemetryConstants.singleSession = "Single Session";
                TelemetryConstants.correlationId = "correlationId";
                TelemetryConstants.cifPatchVersion = "cifPatchVersion";
                TelemetryConstants.scenarioState = "scenarioState";
                TelemetryConstants.scenarioStatus = "scenarioStatus";
                TelemetryConstants.clientSessionId = "clientSessionId";
            })(TelemetryConstants = Internal.TelemetryConstants || (Internal.TelemetryConstants = {}));
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            let errorTypes;
            (function (errorTypes) {
                errorTypes[errorTypes["InvalidParams"] = 0] = "InvalidParams";
                errorTypes[errorTypes["TimeOut"] = 1] = "TimeOut";
                errorTypes[errorTypes["XrmApiError"] = 2] = "XrmApiError";
                errorTypes[errorTypes["GenericError"] = 3] = "GenericError";
            })(errorTypes = Internal.errorTypes || (Internal.errorTypes = {}));
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="TelemetryConstants.ts" />
/// <reference path="CRMClients/State.ts" />
/// <reference path="Typings/aria-webjs-sdk-1.8.3.d.ts" />
/// <reference path="CRMClients/IErrorHandler.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            const prodIngestionKey = "0cd345da5c484bff8b75c696a3ac2159-3a768593-5759-4630-a59e-a75af2a7bf20-6631";
            const devIngestionKey = "39f156fe0f00465288756928db675fe0-fef5dc1c-14bd-4361-9259-5f10f8ef5040-7209";
            const GERMANY_ENDPOINT = "https://de.pipe.aria.microsoft.com/Collector/3.0/";
            const GCCH_ENDPOINT = "https://tb.pipe.aria.microsoft.com/Collector/3.0/";
            const DOD_ENDPOINT = "https://pf.pipe.aria.microsoft.com/Collector/3.0";
            const EUROPE_ENDPOINT = "https://eu.pipe.aria.microsoft.com/Collector/3.0/";
            const MOONCAKE_ENDPOINT = ""; // Add MoonCake ARIA Endpoint whenever available
            let telemetryChannel;
            function initializeTelemetry() {
                const domain = getDomain();
                const logConfig = getConfiguration(domain);
                if (domain === "Dev") {
                    defaultLogger = AWTLogManager.initialize(devIngestionKey, logConfig);
                }
                else {
                    defaultLogger = AWTLogManager.initialize(prodIngestionKey, logConfig);
                }
                AWTLogManager.addNotificationListener({
                    eventsSent: (events) => {
                        // tslint:disable-next-line:no-console
                        console.log("CIF Telemetry - Number of Events Sent: " + events.length);
                    },
                    eventsDropped: (events, reason) => {
                        // tslint:disable-next-line:no-console
                        console.log("CIF Telemetry - Number of Events Dropped: " + events.length);
                    }
                });
                if (CIFramework.DesktopNotificationConstants.BroadcastChannel in self) {
                    telemetryChannel = new BroadcastChannel('desktop_notification_telemetry');
                    registerTelemetryListener();
                }
            }
            Internal.initializeTelemetry = initializeTelemetry;
            // Returns the Host Name
            function getHost() {
                let hostValue = window.location.host;
                if (!hostValue) {
                    hostValue = window.parent.location.host;
                }
                return hostValue;
            }
            // Returns the Domain of the Org
            function getDomain() {
                const hostValue = getHost();
                // Need to add checks for MoonCake(China) and Europe Orgs, if needed
                if (hostValue.endsWith("dod-crm.microsoftdynamics.us"))
                    return "DoD";
                else if (hostValue.endsWith("crm9.dynamics.com") || hostValue.endsWith("crm.microsoftdynamics.us"))
                    return "GCCHigh";
                else if (hostValue.endsWith("crm.microsoftdynamics.de"))
                    return "BlackForest";
                else if (hostValue.endsWith("crm.dynamics.cn"))
                    return "MoonCake";
                else if (hostValue.endsWith("crm4.dynamics.com"))
                    return "Europe";
                else if (hostValue.endsWith("extest.microsoft.com") || hostValue.endsWith("crm10.dynamics.com") || hostValue.endsWith("crm.crmlivetie.com")
                    || hostValue.endsWith("crm2.crmlivetie.com") || hostValue.endsWith("contoso.com:444") || hostValue.endsWith("microsoft.com")
                    || hostValue.endsWith("msmecrm.com") || hostValue.endsWith("crm.crmlivetoday.com") || hostValue.endsWith("crm.1boxtest.com")
                    || hostValue.endsWith("crm.crmifd.com") || hostValue.endsWith("msmecrm.com:444") || hostValue.search("localhost") === 0)
                    return "Dev";
                else
                    return "Public";
            }
            // Returns the ARIA configuration for the environment type
            function getConfiguration(domain) {
                const logConfiguration = {};
                // Disables the logging of Device ID
                logConfiguration.disableCookiesUsage = true;
                switch (domain) {
                    case "GCCHigh":
                        logConfiguration.collectorUri = GCCH_ENDPOINT;
                        break;
                    case "DoD":
                        logConfiguration.collectorUri = DOD_ENDPOINT;
                        break;
                    case "BlackForest":
                        logConfiguration.collectorUri = GERMANY_ENDPOINT;
                        break;
                    case "Europe":
                        logConfiguration.collectorUri = EUROPE_ENDPOINT;
                        break;
                    // case "MoonCake":
                    // 	logConfiguration.collectorUri = MOONCAKE_ENDPOINT;
                    // 	break;
                }
                return logConfiguration;
            }
            function getNavigationType() {
                if (Microsoft.CIFramework.Internal.isConsoleAppInternal())
                    return Internal.TelemetryConstants.multiSession;
                else
                    return Internal.TelemetryConstants.singleSession;
            }
            Internal.getNavigationType = getNavigationType;
            // Generates the IErrorHandler for logging purpose
            function generateErrorObject(error, sourceFunction, errorType) {
                const errorData = {};
                try {
                    errorData.errorMsg = error.get("message");
                }
                catch (e) {
                    errorData.errorMsg = error.message;
                }
                errorData.sourceFunc = sourceFunction;
                errorData.errorType = errorType;
                errorData.reportTime = new Date().toUTCString();
                return errorData;
            }
            Internal.generateErrorObject = generateErrorObject;
            // Logs Markers to the d365_cif_marker table
            function logTelemetryMarker(correlationId, eventName, scenarioState, customParameters, clientSessionId, scenarioStatus, telemetryContext, error) {
                const markerData = new ScenarioMarkerTelemetryData(correlationId, eventName, scenarioState, customParameters, clientSessionId, scenarioStatus, telemetryContext, error);
                setScenarioMarkerData(markerData);
            }
            Internal.logTelemetryMarker = logTelemetryMarker;
            // Logs Failure Events to the d365_cif_usage table
            function logFailure(appId, isError, error, apiName, cifVersion, providerID, providerName, customParameters, correlationId) {
                const usageData = new UsageTelemetryData(providerID ? providerID : "", providerName ? providerName : "", null, apiName, null, appId ? appId : "", cifVersion, isError ? isError : false, error ? error : null, customParameters ? customParameters : "", correlationId);
                setUsageData(usageData);
                return Promise.reject(Microsoft.CIFramework.Utility.createErrorMap(error.errorMsg, apiName));
            }
            Internal.logFailure = logFailure;
            // Logs Failure Events to the d365_cif_apiusage table
            function logAPIFailure(appId, isError, error, apiName, cifVersion, providerID, providerName, customParameters, correlationId) {
                const usageData = new APIUsageTelemetry(providerID ? providerID : "", providerName ? providerName : "", null, apiName, null, appId ? appId : "", cifVersion, isError ? isError : false, error ? error : null, customParameters ? customParameters : "", correlationId);
                setAPIUsageTelemetry(usageData);
                return Promise.reject(Microsoft.CIFramework.Utility.createErrorMap(error.errorMsg, apiName));
            }
            Internal.logAPIFailure = logAPIFailure;
            // Logs Failure API internal error/informational Events to the d365_cif_apiusage table without rejecting the promise
            function logAPIInternalInfo(appId, isError, error, apiName, cifVersion, providerID, providerName, customParameters, correlationId) {
                const usageData = new APIUsageTelemetry(providerID ? providerID : "", providerName ? providerName : "", null, apiName, null, appId ? appId : "", cifVersion, isError ? isError : false, error ? error : null, customParameters ? customParameters : "", correlationId);
                setAPIUsageTelemetry(usageData);
            }
            Internal.logAPIInternalInfo = logAPIInternalInfo;
            // Function to populate the Marker Data Telemetry
            function setScenarioMarkerData(data) {
                const ScenarioMarkerTelemetry = new AWTEventProperties();
                ScenarioMarkerTelemetry.setName(Internal.TelemetryConstants.scenarioMarkerTable);
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.correlationId, data.correlationId);
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.scenarioState, data.scenarioState);
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.scenarioStatus, data.scenarioStatus);
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.eventName, data.eventName);
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.clientSessionId, data.clientSessionId);
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.customParameters, JSON.stringify(data.customParameters));
                if (data.customParameters && data.customParameters.telemetryContext && typeof (data.customParameters.telemetryContext) === "object") {
                    Object.keys(data.customParameters.telemetryContext).forEach(k => ScenarioMarkerTelemetry.setProperty(k, data.customParameters.telemetryContext[k]));
                }
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.isError, data.error ? "True" : "False");
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.errorMessage, typeof (data.error) === "string" ? data.error : JSON.stringify(data.error));
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.clientType, Xrm.Utility.getGlobalContext().client.getClient());
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.crmVersion, Xrm.Utility.getGlobalContext().getVersion());
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.orgId, Xrm.Utility.getGlobalContext().organizationSettings.organizationId);
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.orgName, Xrm.Utility.getGlobalContext().organizationSettings.uniqueName);
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.userId, Xrm.Utility.getGlobalContext().userSettings.userId);
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.navigationType, getNavigationType());
                ScenarioMarkerTelemetry.setProperty(Internal.TelemetryConstants.cifPatchVersion, Internal.cifPatchVersion);
                defaultLogger.logEvent(ScenarioMarkerTelemetry.getEvent());
            }
            Internal.setScenarioMarkerData = setScenarioMarkerData;
            // Function to populate the Usage Data Telemetry
            function setUsageData(data) {
                const UsageTelemetry = new AWTEventProperties();
                UsageTelemetry.setName(Internal.TelemetryConstants.usageTable);
                UsageTelemetry.setProperty(Internal.TelemetryConstants.apiVersion, data.apiVersion ? data.apiVersion : "");
                UsageTelemetry.setProperty(Internal.TelemetryConstants.appId, data.appId ? data.appId : "");
                UsageTelemetry.setProperty(Internal.TelemetryConstants.channelOrder, data.sortOrder ? data.sortOrder : "");
                UsageTelemetry.setProperty(Internal.TelemetryConstants.clientType, Xrm.Utility.getGlobalContext().client.getClient());
                UsageTelemetry.setProperty(Internal.TelemetryConstants.crmVersion, Xrm.Utility.getGlobalContext().getVersion());
                UsageTelemetry.setProperty(Internal.TelemetryConstants.orgId, Xrm.Utility.getGlobalContext().organizationSettings.organizationId);
                UsageTelemetry.setProperty(Internal.TelemetryConstants.orgName, Xrm.Utility.getGlobalContext().organizationSettings.uniqueName);
                UsageTelemetry.setProperty(Internal.TelemetryConstants.providerId, data.providerId ? data.providerId : "");
                UsageTelemetry.setProperty(Internal.TelemetryConstants.providerName, data.providerName ? data.providerName : "");
                UsageTelemetry.setProperty(Internal.TelemetryConstants.isError, data.isError ? data.isError : false);
                UsageTelemetry.setProperty(Internal.TelemetryConstants.errorMessage, data.errorObject ? data.errorObject.errorMsg : "");
                UsageTelemetry.setProperty(Internal.TelemetryConstants.errorType, data.errorObject ? Internal.errorTypes[data.errorObject.errorType] : "");
                UsageTelemetry.setProperty(Internal.TelemetryConstants.errorReportTime, data.errorObject ? data.errorObject.reportTime : "");
                UsageTelemetry.setProperty(Internal.TelemetryConstants.errorFunction, data.errorObject ? data.errorObject.sourceFunc : "");
                UsageTelemetry.setProperty(Internal.TelemetryConstants.userId, Xrm.Utility.getGlobalContext().userSettings.userId);
                UsageTelemetry.setProperty(Internal.TelemetryConstants.apiName, data.apiName ? data.apiName : "");
                UsageTelemetry.setProperty(Internal.TelemetryConstants.CIFVersion, data.cifVersion);
                UsageTelemetry.setProperty(Internal.TelemetryConstants.customParameters, data.customParameters ? JSON.stringify(data.customParameters) : "");
                UsageTelemetry.setProperty(Internal.TelemetryConstants.navigationType, getNavigationType());
                UsageTelemetry.setProperty(Internal.TelemetryConstants.correlationId, data.correlationId ? data.correlationId : "");
                UsageTelemetry.setProperty(Internal.TelemetryConstants.cifPatchVersion, Internal.cifPatchVersion);
                defaultLogger.logEvent(UsageTelemetry.getEvent());
            }
            Internal.setUsageData = setUsageData;
            function logApiData(telemetryData, startTime, timetaken, apiName, additionalData) {
                const ApiData = new Object();
                ApiData.StartTime = startTime.toUTCString();
                ApiData.TimeTaken = timetaken;
                if (additionalData) {
                    ApiData.AdditionalDetails = additionalData;
                }
                if (telemetryData) {
                    telemetryData[apiName] = ApiData;
                }
            }
            Internal.logApiData = logApiData;
            function logParameterData(telemetryParameter, apiName, parameters) {
                const parameterData = new Object();
                parameterData.apiName = apiName;
                parameterData.parameters = parameters;
                if (telemetryParameter) {
                    telemetryParameter[apiName] = parameterData;
                }
            }
            Internal.logParameterData = logParameterData;
            // Function to populate the Performance Data Telemetry
            function setPerfData(data) {
                const PerfTelemetry = new AWTEventProperties();
                PerfTelemetry.setName(Internal.TelemetryConstants.perfTable);
                PerfTelemetry.setProperty(Internal.TelemetryConstants.providerId, data.providerData.providerId ? data.providerData.providerId : "");
                PerfTelemetry.setProperty(Internal.TelemetryConstants.providerName, data.providerData.name ? data.providerData.name : "");
                PerfTelemetry.setProperty(Internal.TelemetryConstants.crmVersion, data.providerData.crmVersion ? data.providerData.crmVersion : "");
                PerfTelemetry.setProperty(Internal.TelemetryConstants.appId, data.providerData.appId ? data.providerData.appId : "");
                PerfTelemetry.setProperty(Internal.TelemetryConstants.apiVersion, data.providerData.apiVersion ? data.providerData.apiVersion : "");
                PerfTelemetry.setProperty(Internal.TelemetryConstants.orgId, Xrm.Utility.getGlobalContext().organizationSettings.organizationId);
                PerfTelemetry.setProperty(Internal.TelemetryConstants.orgName, data.providerData.orgName ? data.providerData.orgName : "");
                PerfTelemetry.setProperty(Internal.TelemetryConstants.startTime, data.startTime ? data.startTime.toUTCString() : "");
                PerfTelemetry.setProperty(Internal.TelemetryConstants.timeTaken, data.timeTaken ? data.timeTaken : 0);
                PerfTelemetry.setProperty(Internal.TelemetryConstants.apiName, data.apiName ? data.apiName : "");
                PerfTelemetry.setProperty(Internal.TelemetryConstants.telemetryData, data.telemetryData ? JSON.stringify(data.telemetryData) : "");
                PerfTelemetry.setProperty(Internal.TelemetryConstants.CIFVersion, data.cifVersion);
                PerfTelemetry.setProperty(Internal.TelemetryConstants.navigationType, getNavigationType());
                PerfTelemetry.setProperty(Internal.TelemetryConstants.correlationId, data.correlationId ? data.correlationId : "");
                PerfTelemetry.setProperty(Internal.TelemetryConstants.cifPatchVersion, Internal.cifPatchVersion);
                defaultLogger.logEvent(PerfTelemetry.getEvent());
            }
            Internal.setPerfData = setPerfData;
            // Function to populate the Parameter Data Telemetry
            function setAnalyticsAPIUsageTelemetry(data) {
                const ParamTelemetry = new AWTEventProperties();
                ParamTelemetry.setName(Internal.TelemetryConstants.analyticsUsageTable);
                ParamTelemetry.setProperty(Internal.TelemetryConstants.apiVersion, data.apiVersion ? data.apiVersion : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.appId, data.appId ? data.appId : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.channelOrder, data.sortOrder ? data.sortOrder : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.clientType, Xrm.Utility.getGlobalContext().client.getClient());
                ParamTelemetry.setProperty(Internal.TelemetryConstants.crmVersion, Xrm.Utility.getGlobalContext().getVersion());
                ParamTelemetry.setProperty(Internal.TelemetryConstants.orgId, Xrm.Utility.getGlobalContext().organizationSettings.organizationId);
                ParamTelemetry.setProperty(Internal.TelemetryConstants.orgName, Xrm.Utility.getGlobalContext().organizationSettings.uniqueName);
                ParamTelemetry.setProperty(Internal.TelemetryConstants.providerId, data.providerId ? data.providerId : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.providerName, data.providerName ? data.providerName : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.isError, data.isError ? data.isError : false);
                ParamTelemetry.setProperty(Internal.TelemetryConstants.errorMessage, data.errorObject ? data.errorObject.errorMsg : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.errorType, data.errorObject ? Internal.errorTypes[data.errorObject.errorType] : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.errorReportTime, data.errorObject ? data.errorObject.reportTime : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.errorFunction, data.errorObject ? data.errorObject.sourceFunc : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.userId, Xrm.Utility.getGlobalContext().userSettings.userId);
                ParamTelemetry.setProperty(Internal.TelemetryConstants.apiName, data.apiName ? data.apiName : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.eventName, data.eventName ? data.eventName : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.CIFVersion, data.cifVersion);
                ParamTelemetry.setProperty(Internal.TelemetryConstants.customParameters, data.customParameters ? JSON.stringify(data.customParameters) : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.navigationType, getNavigationType());
                ParamTelemetry.setProperty(Internal.TelemetryConstants.correlationId, data.correlationId ? data.correlationId : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.cifPatchVersion, Internal.cifPatchVersion);
                defaultLogger.logEvent(ParamTelemetry.getEvent());
            }
            Internal.setAnalyticsAPIUsageTelemetry = setAnalyticsAPIUsageTelemetry;
            function setAPIUsageTelemetry(data) {
                const ParamTelemetry = new AWTEventProperties();
                ParamTelemetry.setName(Internal.TelemetryConstants.apiUsageTable);
                ParamTelemetry.setProperty(Internal.TelemetryConstants.apiVersion, data.apiVersion ? data.apiVersion : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.appId, data.appId ? data.appId : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.channelOrder, data.sortOrder ? data.sortOrder : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.clientType, Xrm.Utility.getGlobalContext().client.getClient());
                ParamTelemetry.setProperty(Internal.TelemetryConstants.crmVersion, Xrm.Utility.getGlobalContext().getVersion());
                ParamTelemetry.setProperty(Internal.TelemetryConstants.orgId, Xrm.Utility.getGlobalContext().organizationSettings.organizationId);
                ParamTelemetry.setProperty(Internal.TelemetryConstants.orgName, Xrm.Utility.getGlobalContext().organizationSettings.uniqueName);
                ParamTelemetry.setProperty(Internal.TelemetryConstants.providerId, data.providerId ? data.providerId : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.providerName, data.providerName ? data.providerName : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.isError, data.isError ? data.isError : false);
                ParamTelemetry.setProperty(Internal.TelemetryConstants.errorMessage, data.errorObject ? data.errorObject.errorMsg : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.errorType, data.errorObject ? Internal.errorTypes[data.errorObject.errorType] : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.errorReportTime, data.errorObject ? data.errorObject.reportTime : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.errorFunction, data.errorObject ? data.errorObject.sourceFunc : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.userId, Xrm.Utility.getGlobalContext().userSettings.userId);
                ParamTelemetry.setProperty(Internal.TelemetryConstants.apiName, data.apiName ? data.apiName : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.CIFVersion, data.cifVersion);
                ParamTelemetry.setProperty(Internal.TelemetryConstants.customParameters, data.customParameters ? JSON.stringify(data.customParameters) : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.navigationType, getNavigationType());
                ParamTelemetry.setProperty(Internal.TelemetryConstants.correlationId, data.correlationId ? data.correlationId : "");
                ParamTelemetry.setProperty(Internal.TelemetryConstants.cifPatchVersion, Internal.cifPatchVersion);
                defaultLogger.logEvent(ParamTelemetry.getEvent());
            }
            Internal.setAPIUsageTelemetry = setAPIUsageTelemetry;
            class UsageTelemetryData {
                constructor(providerId, providerName, apiVersion, apiName, sortOrder, appId, cifVersion, isError, errorObject, customParameters, correlationId) {
                    this.providerId = providerId ? providerId : "";
                    this.providerName = providerName ? providerName : "";
                    this.apiVersion = apiVersion ? apiVersion : "";
                    this.apiName = apiName ? apiName : "";
                    this.sortOrder = sortOrder ? sortOrder : "";
                    this.appId = appId ? appId : "";
                    this.isError = isError ? isError : false;
                    this.errorObject = errorObject ? errorObject : null;
                    this.cifVersion = cifVersion ? cifVersion : "";
                    this.customParameters = customParameters ? customParameters : "";
                    this.correlationId = correlationId ? correlationId : "";
                }
            }
            Internal.UsageTelemetryData = UsageTelemetryData;
            class ScenarioMarkerTelemetryData {
                constructor(correlationId, eventName, scenarioState, customParameters, clientSessionId, scenarioStatus, telemetryContext, error) {
                    this.correlationId = correlationId;
                    this.scenarioState = scenarioState;
                    this.eventName = eventName;
                    this.clientSessionId = clientSessionId ? clientSessionId : "";
                    this.customParameters = customParameters ? JSON.stringify(customParameters) : "";
                    this.scenarioStatus = scenarioStatus ? scenarioStatus : "";
                    this.telemetryContext = telemetryContext;
                    this.error = JSON.stringify(error);
                }
            }
            Internal.ScenarioMarkerTelemetryData = ScenarioMarkerTelemetryData;
            class PerfTelemetryData {
                constructor(providerData, startTime, timeTaken, apiName, cifVersion, telemetryData, correlationId) {
                    this.providerData = providerData ? providerData : null;
                    this.startTime = startTime ? startTime : "";
                    this.timeTaken = timeTaken ? timeTaken : 0;
                    this.apiName = apiName ? apiName : "";
                    this.telemetryData = telemetryData ? telemetryData : null;
                    this.cifVersion = cifVersion ? cifVersion : "";
                    this.correlationId = correlationId ? correlationId : "";
                }
            }
            Internal.PerfTelemetryData = PerfTelemetryData;
            class APIUsageTelemetry {
                constructor(providerId, providerName, apiVersion, apiName, sortOrder, appId, cifVersion, isError, errorObject, customParameters, correlationId) {
                    this.providerId = providerId ? providerId : "";
                    this.providerName = providerName ? providerName : "";
                    this.apiVersion = apiVersion ? apiVersion : "";
                    this.apiName = apiName ? apiName : "";
                    this.sortOrder = sortOrder ? sortOrder : "";
                    this.appId = appId ? appId : "";
                    this.isError = isError ? isError : false;
                    this.errorObject = errorObject ? errorObject : null;
                    this.cifVersion = cifVersion ? cifVersion : "";
                    this.customParameters = customParameters ? customParameters : "";
                    this.correlationId = correlationId ? correlationId : "";
                }
            }
            Internal.APIUsageTelemetry = APIUsageTelemetry;
            class AnalyticsAPIUsageTelemetry {
                constructor(providerId, providerName, apiVersion, apiName, eventName, sortOrder, appId, cifVersion, isError, errorObject, customParameters, correlationId) {
                    this.providerId = providerId ? providerId : "";
                    this.providerName = providerName ? providerName : "";
                    this.apiVersion = apiVersion ? apiVersion : "";
                    this.apiName = apiName ? apiName : "";
                    this.eventName = eventName ? eventName : "";
                    this.sortOrder = sortOrder ? sortOrder : "";
                    this.appId = appId ? appId : "";
                    this.isError = isError ? isError : false;
                    this.errorObject = errorObject ? errorObject : null;
                    this.cifVersion = cifVersion ? cifVersion : "";
                    this.customParameters = customParameters ? customParameters : "";
                    this.correlationId = correlationId ? correlationId : "";
                }
            }
            Internal.AnalyticsAPIUsageTelemetry = AnalyticsAPIUsageTelemetry;
            function registerTelemetryListener() {
                telemetryChannel.addEventListener('message', event => {
                    logAPIInternalInfo(Internal.appId, false, null, CIFramework.MessageType.notifyEvent + "-" + event.data.notificationTelemetry.message, Internal.cifVersion, "", "", "", event.data.notificationTelemetry.correlationId);
                });
            }
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="Client.ts" />
/// <reference path="Constants.ts" />
/// <reference path="WidgetIFrame.ts" />
/// <reference path="InternalMainLibrary.ts" />
/// <reference path="../TelemetryHelper.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            /**
             * Actual implementation of IClient for web client
            */
            function unifiedClient() {
                const client = {};
                client.registerHandler = (eventName, handler) => {
                    if (!this.eventHandlers) {
                        this.eventHandlers = new Map();
                    }
                    if (handler) {
                        this.eventHandlers.set(eventName, handler);
                    }
                    return true;
                };
                client.removeHandler = (eventName) => {
                    if (!this.eventHandlers) {
                        return null;
                    }
                    const ret = this.eventHandlers.get(eventName);
                    this.eventHandlers.delete(eventName);
                    return ret;
                };
                client.createRecord = (entityName, entityId, telemetryData, valuesToUpdate) => {
                    if (!valuesToUpdate) {
                        const errorData = {};
                        errorData.errorMsg = "Need values to create for createRecord";
                        errorData.errorType = Internal.errorTypes.InvalidParams;
                        errorData.reportTime = new Date().toUTCString();
                        errorData.sourceFunc = "client.createRecord";
                        return Promise.reject(errorData);
                    }
                    let data = null;
                    if (typeof (valuesToUpdate) === "string") {
                        data = JSON.parse(valuesToUpdate);
                    }
                    else {
                        data = valuesToUpdate;
                    }
                    return new Promise((resolve, reject) => {
                        const startTime = new Date();
                        return Xrm.WebApi.createRecord(entityName, Microsoft.CIFramework.Utility.buildEntity(data)).then((result) => {
                            const timeTaken = Date.now() - startTime.getTime();
                            const apiName = "Xrm.WebApi.createRecord";
                            Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                            return resolve(Microsoft.CIFramework.Utility.buildMap(result));
                        }, (error) => {
                            const errorData = Internal.generateErrorObject(error, "client.createRecord - Xrm.WebApi.createRecord", Internal.errorTypes.XrmApiError);
                            return reject(errorData);
                        });
                    });
                };
                client.updateRecord = (entityName, entityId, telemetryData, valuesToUpdate) => {
                    if (!valuesToUpdate) {
                        const errorData = {};
                        errorData.errorMsg = "Need values to Update for updateRecord";
                        errorData.errorType = Internal.errorTypes.InvalidParams;
                        errorData.reportTime = new Date().toUTCString();
                        errorData.sourceFunc = "client.updateRecord";
                        return Promise.reject(errorData);
                    }
                    let data = null;
                    if (typeof (valuesToUpdate) === "string") {
                        data = JSON.parse(valuesToUpdate);
                    }
                    else {
                        data = valuesToUpdate;
                    }
                    return new Promise((resolve, reject) => {
                        const startTime = new Date();
                        return Xrm.WebApi.updateRecord(entityName, entityId, Microsoft.CIFramework.Utility.buildEntity(data)).then((result) => {
                            const timeTaken = Date.now() - startTime.getTime();
                            const apiName = "Xrm.WebApi.updateRecord";
                            Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                            return resolve(Microsoft.CIFramework.Utility.buildMap(result));
                        }, (error) => {
                            const errorData = Internal.generateErrorObject(error, "client.updateRecord - Xrm.WebApi.updateRecord", Internal.errorTypes.XrmApiError);
                            return reject(errorData);
                        });
                    });
                };
                client.retrieveRecord = (entityName, entityId, telemetryData, query) => {
                    return new Promise((resolve, reject) => {
                        const startTime = new Date();
                        return Xrm.WebApi.retrieveRecord(entityName, entityId, query).then((result) => {
                            const timeTaken = Date.now() - startTime.getTime();
                            const apiName = "Xrm.WebApi.retrieveRecord";
                            Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                            return resolve(Microsoft.CIFramework.Utility.buildMap(result));
                        }, (error) => {
                            const errorData = Internal.generateErrorObject(error, "client.retrieveRecord - Xrm.WebApi.retrieveRecord", Internal.errorTypes.XrmApiError);
                            return reject(errorData);
                        });
                    });
                };
                client.getEntityMetadata = (entityName, attributes) => {
                    const attrs = attributes ? attributes : null;
                    return new Promise((resolve, reject) => {
                        return Xrm.Utility.getEntityMetadata(entityName, attrs).then((result) => {
                            return resolve(JSON.stringify(Microsoft.CIFramework.Utility.flattenMetadata(result)));
                        }, (error) => {
                            const errorData = Internal.generateErrorObject(error, "client.getEntityMetadata - Xrm.Utility.getEntityMetadata", Internal.errorTypes.XrmApiError);
                            return reject(errorData);
                        });
                    });
                };
                client.deleteRecord = (entityName, entityId, telemetryData, valuesToUpdate) => {
                    return new Promise((resolve, reject) => {
                        const startTime = new Date();
                        return Xrm.WebApi.deleteRecord(entityName, entityId).then((result) => {
                            const timeTaken = Date.now() - startTime.getTime();
                            const apiName = "Xrm.WebApi.deleteRecord";
                            Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                            return resolve(Microsoft.CIFramework.Utility.buildMap(result));
                        }, (error) => {
                            const errorData = Internal.generateErrorObject(error, "client.deleteRecord - Xrm.WebApi.deleteRecord", Internal.errorTypes.XrmApiError);
                            return reject(errorData);
                        });
                    });
                };
                client.sizeChanged = (context) => {
                    if (!this.eventHandlers) {
                        this.eventHandlers = new Map();
                    }
                    const handler = this.eventHandlers.get(CIFramework.Constants.SizeChangeHandler);
                    if (handler) {
                        const data = new Map().set(CIFramework.Constants.value, client.getWidgetWidth());
                        const event = new CustomEvent(CIFramework.Constants.SizeChangeHandler, { detail: data });
                        handler(event);
                    }
                };
                client.modeChanged = (context) => {
                    if (!this.eventHandlers) {
                        this.eventHandlers = new Map();
                    }
                    const handler = this.eventHandlers.get(CIFramework.Constants.ModeChangeHandler);
                    if (handler) {
                        const data = new Map().set(CIFramework.Constants.value, Xrm.Panel.state);
                        const event = new CustomEvent(CIFramework.Constants.ModeChangeHandler, { detail: data });
                        handler(event);
                    }
                };
                client.navigationHandler = (context) => {
                    if (!this.eventHandlers) {
                        this.eventHandlers = new Map();
                    }
                    const handler = this.eventHandlers.get(CIFramework.Constants.NavigationHandler);
                    if (handler) {
                        let pageURL = "";
                        try {
                            const args = context.getEventArgs(); // Navigation events is internal API
                            pageURL = args.pageUrl;
                        }
                        catch (error) {
                            //
                        }
                        const data = new Map().set(CIFramework.Constants.value, pageURL);
                        const event = new CustomEvent(CIFramework.Constants.ModeChangeHandler, { detail: data });
                        handler(event);
                    }
                };
                client.getUserID = () => {
                    return Xrm.Utility.getGlobalContext().userSettings.userId;
                };
                client.getClientSessionId = () => {
                    if (!this.clientSessionId) {
                        this.clientSessionId = CIFramework.Utility.newGuid();
                    }
                    return this.clientSessionId;
                };
                client.loadPanel = (options) => {
                    const _xrmApp = Xrm.App;
                    return _xrmApp.panels.loadPanel({
                        pageInput: {
                            pageType: "control",
                            controlName: CIFramework.ProductivityPaneConfigConstants.productivityPaneControlName,
                        },
                        // =True: If already have sidepanel with pageInput at target position, will auto replace with new content.
                        // =false: will create new sidepanel at position, event have another sidepanel alredy
                        replaceIfExisted: true,
                        width: 340,
                        position: 2,
                        state: 2,
                        showTitle: false,
                        canBeClosed: false,
                        canBeCollapsed: true,
                        defaultCollapsedBehavior: false,
                        isTitleStatic: true,
                    });
                };
                client.loadWidgets = (ciProviders) => {
                    const self = this;
                    let panelTitle = "";
                    if (ciProviders.size > 0) {
                        const provider = ciProviders.entries().next();
                        panelTitle = (provider.value[1].name !== Internal.ChannelProvider.Omnichannel_UniqueName) ? provider.value[1].label : "";
                    }
                    const options = {
                        position: Internal.isConsoleAppInternal() ? CIFramework.Constants.left : CIFramework.Constants.right,
                        defaultCollapsedBehavior: false,
                        url: "/webresources/cec_widgets_container.html",
                        title: panelTitle,
                    };
                    if (Internal.isConsoleAppInternal()) {
                        options.state = CIFramework.Constants.sidePanelHiddenState;
                    }
                    return new Promise((resolve, reject) => {
                        return Xrm.Panel.loadPanel(options).then(() => {
                            Xrm.Panel.addOnSizeChange(client.sizeChanged);
                            Xrm.Panel.addOnStateChange(client.modeChanged);
                            Xrm.Navigation.addOnPreNavigation(client.navigationHandler);
                            const widgetIFrame = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                            const targetWindow = window.parent;
                            const status = new Map();
                            const fracHeightForActiveWidget = 0.9;
                            const minimizedHeight = (widgetIFrame.clientHeight * (1 - fracHeightForActiveWidget)) / ciProviders.size; // TODO: Figure out correct units to use
                            widgetIFrame.onload = () => {
                                widgetIFrame.contentWindow.document.body.dir = window.parent.document.body.dir;
                                const doc = widgetIFrame.contentDocument ? widgetIFrame.contentDocument : widgetIFrame.contentWindow.document;
                                const visible = (ciProviders.size === 1);
                                for (const [key, value] of ciProviders) {
                                    // TODO: parallelize these loads; add allow attributes for chrome. Also figure out how to set sizes on these
                                    const displayStyleAttr = visible ? "display:block" : "display:none";
                                    const containerDiv = document.createElement("div");
                                    containerDiv.setAttribute("id", value.providerId);
                                    containerDiv.setAttribute("tabindex", "-1"); // Needed to receive the focus event
                                    containerDiv.setAttribute("role", "tabpanel");
                                    containerDiv.setAttribute("style", "height: 100%;" + displayStyleAttr);
                                    const iFrame = document.createElement("iframe");
                                    iFrame.allowFullscreen = true;
                                    iFrame.setAttribute("allowfullscreen", "true");
                                    iFrame.setAttribute("webkitallowfullscreen", "true");
                                    iFrame.setAttribute("mozallowfullscreen", "true");
                                    iFrame.setAttribute("allow", "microphone; camera; geolocation"); // TODO - should we make these configurable?
                                    iFrame.setAttribute("sandbox", "allow-forms allow-popups allow-scripts allow-same-origin allow-modals allow-downloads"); // TODO: make configurable?
                                    widgetIFrame.setAttribute("style", "border-top: 1px solid;border-color: #F5F5F5;");
                                    iFrame.height = "100%";
                                    iFrame.width = "100%";
                                    iFrame.src = key + (value.name === Internal.ChannelProvider.Omnichannel_UniqueName ? "&clientSessionId=" + self.clientSessionId : "");
                                    iFrame.title = value.label; // TODO: We may need to figure out where to put this title based on UX
                                    value.setContainer(new Internal.WidgetIFrameWrapper(iFrame), minimizedHeight);
                                    containerDiv.appendChild(iFrame);
                                    doc.getElementById("widgetControlDiv").appendChild(containerDiv);
                                    status.set(value.name, true); // TODO: The status should be set once iFrame.src is loaded
                                    // tslint:disable-line:no-any
                                    if (value.name === Internal.ChannelProvider.Omnichannel_UniqueName) {
                                        const url = Xrm.Utility.getGlobalContext().getClientUrl() + CIFramework.Constants.OmnichannelAgentSdkWebresourceUrl;
                                        CIFramework.Utility.loadScript(url).then(() => {
                                            // tslint:disable-next-line:no-console
                                            console.log(`Successfully loaded ${url}.`);
                                        }, (error) => {
                                            const errorData = Internal.generateErrorObject(new Error(`Could not load script ${url}`), "loadWidgets - load OmnichannelAgentSDK", Internal.errorTypes.GenericError);
                                            Internal.logFailure(Internal.appId, true, errorData, CIFramework.MessageType.loadProvider, Internal.cifVersion);
                                        });
                                    }
                                }
                            };
                            return resolve(status);
                        }, (error) => {
                            reject(error);
                        });
                    });
                };
                client.openKBSearchControl = (searchString, telemetryData) => {
                    try {
                        // eval("window.top.Xrm.Page.getControl('KBSearchcontrol').setSearchQuery(+searchString+); use once serachstring is passed
                        const xrmInstance = (window.top.getCurrentXrm()) || Xrm;
                        xrmInstance.Page.getControl('KBSearchcontrol').setFocus();
                        return true;
                    }
                    catch (error) {
                        return false;
                    }
                };
                client.openForm = (provider, entityFormOptions, entityFormParameters) => {
                    const fo = JSON.parse(entityFormOptions);
                    const fp = (entityFormParameters ? JSON.parse(entityFormParameters) : null);
                    if (Internal.isConsoleAppInternal()) {
                        const tabInput = {
                            pageInput: { pageType: "entityrecord" },
                            options: { isFocused: true }
                        };
                        return new Promise((resolve, reject) => {
                            Microsoft.AppRuntime.Internal.createTab(tabInput).then(() => {
                                return Xrm.Navigation.openForm(fo, fp).then((res) => {
                                    return resolve(new Map().set(CIFramework.Constants.value, res));
                                }, (error) => {
                                    const errorData = Internal.generateErrorObject(error, "client.openForm - Xrm.Navigation.openForm", Internal.errorTypes.XrmApiError);
                                    return reject(errorData);
                                });
                            }, (error) => {
                                const errorData = Internal.generateErrorObject(error, "client.openForm - Xrm.Navigation.openForm", Internal.errorTypes.XrmApiError);
                                Promise.reject(errorData);
                            });
                        });
                    }
                    else {
                        return new Promise((resolve, reject) => {
                            const xrmInstance = (window.top.getCurrentXrm()) || Xrm;
                            return xrmInstance.Navigation.openForm(fo, fp).then((res) => {
                                return resolve(new Map().set(CIFramework.Constants.value, res));
                            }, (error) => {
                                const errorData = Internal.generateErrorObject(error, "client.openForm - Xrm.Navigation.openForm", Internal.errorTypes.XrmApiError);
                                return reject(errorData);
                            });
                        });
                    }
                };
                client.openDialog = (dialogStrings, dialogOptions) => {
                    const dialogStringObj = JSON.parse(dialogStrings);
                    const dialogOptionsObj = (dialogOptions ? JSON.parse(dialogOptions) : null);
                    return new Promise((resolve, reject) => {
                        const xrmInstance = (window.top.getCurrentXrm()) || Xrm;
                        return xrmInstance.Navigation.openConfirmDialog(dialogStringObj, dialogOptionsObj).then((result) => {
                            return resolve(new Map().set(CIFramework.Constants.value, result));
                        }, (error) => {
                            const errorData = Internal.generateErrorObject(error, "client.openDialog - Xrm.Navigation.openConfirmDialog", Internal.errorTypes.XrmApiError);
                            return reject(errorData);
                        });
                    });
                };
                client.showGlobalNotification = (notificationOptions, telemetryData) => {
                    const startTime = new Date();
                    return new Promise((resolve, reject) => {
                        const notificationObj = {
                            type: Internal.GlobalNotificationType.MESSAGE_BAR,
                            level: notificationOptions.level,
                            message: notificationOptions.message,
                            showCloseButton: Internal.isNullOrUndefined(notificationOptions.showCloseButton) ? false : notificationOptions.showCloseButton // since showClose button is false if not specified according to XRM documentation.
                        };
                        if (!Internal.isNullOrUndefined(notificationOptions.action) && !Internal.isNullOrUndefined(notificationOptions.action.eventHandler)) {
                            notificationObj.action = notificationOptions.action;
                            notificationObj.action.eventHandler = () => {
                                const notificationData = { notificationId: notificationObj.id };
                                Internal.sendMessage(Microsoft.CIFramework.Utility.buildMap(notificationData), CIFramework.MessageType.onGlobalNotificationActionClick, null, true);
                            };
                        }
                        else if (notificationOptions.actionLink && notificationOptions.actionLabel) {
                            const buttonAction = {
                                actionLabel: notificationOptions.actionLabel,
                                eventHandler() {
                                    Xrm.Navigation.openUrl(notificationOptions.actionLink);
                                }
                            };
                            notificationObj.action = buttonAction;
                        }
                        const _xrmApp = Xrm.App;
                        return _xrmApp.addGlobalNotification(notificationObj).then((result) => {
                            const timeTaken = Date.now() - startTime.getTime();
                            const apiName = "Xrm.App.addGlobalNotification";
                            Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                            notificationObj.id = result;
                            return resolve(new Map().set(CIFramework.Constants.value, result));
                        }, (error) => {
                            // tslint:disable-next-line:no-console
                            console.log(error.message);
                            const errorData = Internal.generateErrorObject(error, "client.addGlobalNotification - Xrm.App.addGlobalNotification", Internal.errorTypes.XrmApiError);
                            return reject(errorData);
                        });
                    });
                };
                client.clearGlobalNotification = (notificationId, telemetryData) => {
                    const startTime = new Date();
                    return new Promise((resolve, reject) => {
                        if (notificationId !== "") {
                            return Xrm.App.clearGlobalNotification(notificationId).then(() => {
                                const timeTaken = Date.now() - startTime.getTime();
                                const apiName = "Xrm.App.clearGlobalNotification";
                                Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                                return resolve();
                            }, (error) => {
                                const errorData = Internal.generateErrorObject(error, "client.clearGlobalNotification - Xrm.App.clearGlobalNotification", Internal.errorTypes.XrmApiError);
                                return reject(errorData);
                            });
                        }
                    });
                };
                client.showProgressIndicator = (message, telemetryData) => {
                    return new Promise((resolve, reject) => {
                        const xrmInstance = (window.top.getCurrentXrm()) || Xrm;
                        const startTime = new Date();
                        xrmInstance.Utility.showProgressIndicator(message);
                        const timeTaken = Date.now() - startTime.getTime();
                        Internal.logApiData(telemetryData, startTime, timeTaken, "Xrm.Utility.showProgressIndicator");
                        resolve(new Map().set(CIFramework.Constants.progressIndicatorMessage, message));
                    });
                };
                client.closeProgressIndicator = (telemetryData) => {
                    return new Promise((resolve, reject) => {
                        const xrmInstance = (window.top.getCurrentXrm()) || Xrm;
                        const startTime = new Date();
                        xrmInstance.Utility.closeProgressIndicator();
                        const timeTaken = Date.now() - startTime.getTime();
                        Internal.logApiData(telemetryData, startTime, timeTaken, "Xrm.Utility.closeProgressIndicator");
                        resolve(new Map());
                    });
                };
                client.refreshForm = (save) => {
                    return new Promise((resolve, reject) => {
                        try {
                            const xrmInstance = (window.top.getCurrentXrm()) || Xrm;
                            const val = xrmInstance.Page.data.refresh(save);
                            return val.then((res) => {
                                return resolve(res);
                            }, (error) => {
                                const errorData = Internal.generateErrorObject(error, "client.openForm - Xrm.Navigation.openForm", Internal.errorTypes.XrmApiError);
                                return reject(errorData);
                            });
                        }
                        catch (error) {
                            return reject(error);
                        }
                    });
                };
                client.retrieveMultipleAndOpenRecords = (provider, entityName, queryParmeters, searchOnly, telemetryData) => {
                    return new Promise((resolve, reject) => {
                        const retrieveMultipleStartTime = new Date();
                        const splitQuery = Microsoft.CIFramework.Utility.splitQueryForSearch(queryParmeters);
                        if (splitQuery[0].length <= 1) {
                            if (searchOnly) {
                                const errorData = {};
                                errorData.errorMsg = "Error. Either the seach query is empty or searchOnly is true for search query";
                                errorData.errorType = Internal.errorTypes.InvalidParams;
                                errorData.reportTime = new Date().toUTCString();
                                errorData.sourceFunc = "client.retrieveMultipleAndOpenRecords";
                                return reject(Microsoft.CIFramework.Utility.createErrorMap(errorData.errorMsg, CIFramework.MessageType.searchAndOpenRecords));
                            }
                            else {
                                if (Internal.isConsoleAppInternal()) {
                                    const tabInput = {
                                        pageInput: { pageType: "search", searchText: Microsoft.CIFramework.Utility.extractSearchText(splitQuery[1]), searchType: 1, EntityNames: [entityName] },
                                        options: { isFocused: true }
                                    };
                                    Microsoft.CIFramework.Internal.state.sessionManager.createTabInternal(provider, Microsoft.CIFramework.Internal.state.sessionManager.getFocusedSession(), tabInput);
                                }
                                else {
                                    Microsoft.CIFramework.Utility.launchSearchPage(splitQuery[1], entityName);
                                }
                                return resolve(new Map().set(CIFramework.Constants.value, []));
                            }
                        }
                        Xrm.WebApi.retrieveMultipleRecords(entityName, splitQuery[0]).then((result) => {
                            if (result.entities.length === 1) {
                                const resultItem = result.entities[0];
                                if (searchOnly === false) {
                                    Xrm.Utility.getEntityMetadata(entityName, null).then((response) => {
                                        const fo = { entityName, entityId: resultItem[response.PrimaryIdAttribute] };
                                        if (Internal.isConsoleAppInternal()) {
                                            const tabInput = {
                                                pageInput: { pageType: "entityrecord", entityName, entityId: resultItem[response.PrimaryIdAttribute] },
                                                options: { isFocused: true }
                                            };
                                            Microsoft.AppRuntime.Internal.createTab(tabInput);
                                        }
                                        else {
                                            const xrmInstance = (window.top.getCurrentXrm()) || Xrm;
                                            xrmInstance.Navigation.openForm(fo);
                                        }
                                    }, (error) => {
                                        const errorData = Internal.generateErrorObject(error, "client.retrieveMultipleAndOpenRecords - Xrm.WebApi.retrieveMultipleRecords", Internal.errorTypes.XrmApiError);
                                        return reject(Microsoft.CIFramework.Utility.createErrorMap(errorData.errorMsg, CIFramework.MessageType.searchAndOpenRecords));
                                    });
                                }
                            }
                            else if (searchOnly === false) {
                                if (Internal.isConsoleAppInternal()) {
                                    const tabInput = {
                                        pageInput: { pageType: "search", searchText: Microsoft.CIFramework.Utility.extractSearchText(splitQuery[1]), searchType: 1, EntityNames: [entityName] },
                                        options: { isFocused: true }
                                    };
                                    Microsoft.AppRuntime.Internal.createTab(tabInput);
                                }
                                else {
                                    // Open the Search Page with the Search String from the OData Parameters if the records != 1. Opens blank search page if the $search parameter has no value
                                    Microsoft.CIFramework.Utility.launchSearchPage(splitQuery[1], entityName);
                                }
                            }
                            const retrieveMultipleTimeTaken = Date.now() - retrieveMultipleStartTime.getTime();
                            const retrieveMultipleApiName = "Xrm.WebApi.retrieveMultipleRecords";
                            Internal.logApiData(telemetryData, retrieveMultipleStartTime, retrieveMultipleTimeTaken, retrieveMultipleApiName);
                            return resolve(new Map().set(CIFramework.Constants.value, result.entities));
                        }, (error) => {
                            const errorData = Internal.generateErrorObject(error, "client.retrieveMultipleAndOpenRecords - Xrm.WebApi.retrieveMultipleRecords", Internal.errorTypes.XrmApiError);
                            if (searchOnly === false) {
                                if (Internal.isConsoleAppInternal()) {
                                    const tabInput = {
                                        pageInput: {
                                            pageType: "search",
                                            searchText: Microsoft.CIFramework.Utility.extractSearchText(splitQuery[1]),
                                            searchType: 1,
                                            EntityNames: [entityName]
                                        },
                                        options: { isFocused: true }
                                    };
                                    Microsoft.AppRuntime.Internal.createTab(tabInput);
                                }
                                else {
                                    Microsoft.CIFramework.Utility.launchSearchPage(splitQuery[1], entityName);
                                }
                            }
                            return reject(Microsoft.CIFramework.Utility.createErrorMap(errorData.errorMsg, CIFramework.MessageType.searchAndOpenRecords));
                        });
                    });
                };
                client.setProviderVisibility = (ciProviders, providerId, telemetryData) => {
                    const widgetIFrame = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    const doc = widgetIFrame.contentDocument ? widgetIFrame.contentDocument : widgetIFrame.contentWindow.document;
                    for (const [key, value] of ciProviders) {
                        const ele = doc.getElementById(value.providerId);
                        if (value.providerId === providerId) {
                            ele.style.display = "block";
                        }
                        else {
                            ele.style.display = "none";
                        }
                    }
                };
                client.setPanelMode = (name, mode, telemetryData) => {
                    const startTime = new Date();
                    if (mode === CIFramework.Constants.sidePanelHiddenState && !Internal.isConsoleAppInternal()) {
                        mode = CIFramework.Constants.sidePanelCollapsedState;
                    }
                    Xrm.Panel.state = mode;
                    const timeTaken = Date.now() - startTime.getTime();
                    const apiName = "Xrm.Panel.setState";
                    Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                    return mode;
                };
                client.setPanelPosition = (name, position, telemetryData) => {
                    const startTime = new Date();
                    Xrm.Panel.position = position;
                    const timeTaken = Date.now() - startTime.getTime();
                    const apiName = "Xrm.Panel.setPosition";
                    Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                    return position;
                };
                client.getPanelPosition = (telemetryData) => {
                    const startTime = new Date();
                    const position = Xrm.Panel.position;
                    const timeTaken = Date.now() - startTime.getTime();
                    const apiName = "Xrm.Panel.getPosition";
                    Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                    return position;
                };
                client.setWidgetWidth = (name, width, telemetryData) => {
                    const widgetIFrame = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    const sessionPanelArea = widgetIFrame.contentDocument.getElementById("sessionPanel");
                    client.setPanelWidth("setPanelWidth", width + sessionPanelArea.clientWidth);
                    return width;
                };
                client.setPanelWidth = (name, width, telemetryData) => {
                    const startTime = new Date();
                    Xrm.Panel.width = width;
                    const timeTaken = Date.now() - startTime.getTime();
                    const apiName = "Xrm.Panel.setWidth";
                    Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                };
                client.getWidgetMode = (telemetryData) => {
                    const startTime = new Date();
                    const state = Xrm.Panel.state;
                    const timeTaken = Date.now() - startTime.getTime();
                    const apiName = "Xrm.Panel.getState";
                    Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                    return state;
                };
                client.getEnvironment = (provider, telemetryData) => {
                    // Xrm.Page is deprecated hence definition not available in .d.ts
                    // Using eval(...) to avoid compiler error
                    const data = new Map();
                    const xrmInstance = (window.top.getCurrentXrm()) || Xrm;
                    if (Internal.isConsoleAppInternal() && !Internal.isNullOrUndefined(provider) &&
                        Array.from(provider.getAllSessions()).indexOf(Microsoft.CIFramework.Internal.state.sessionManager.getFocusedSession()) === -1) {
                        // Do not add page information
                    }
                    else {
                        try {
                            const startTime1 = new Date();
                            const pageUrl = new URL(xrmInstance.Page.getUrl());
                            const timeTaken1 = Date.now() - startTime1.getTime();
                            const apiName1 = "Xrm.Page.getUrl";
                            Internal.logApiData(telemetryData, startTime1, timeTaken1, apiName1);
                            for (const entry of pageUrl.searchParams.entries()) {
                                data.set(entry[0], entry[1]);
                            }
                        }
                        catch (error) {
                            // geturl not available on this page
                        }
                    }
                    const startTime = new Date();
                    const context = Xrm.Utility.getGlobalContext();
                    const timeTaken = Date.now() - startTime.getTime();
                    const apiName = "Xrm.Utility.getGlobalContext";
                    let isDirtyValue = null;
                    const pageData = xrmInstance.Page.data;
                    if (pageData != null) {
                        const entityData = xrmInstance.Page.data.entity;
                        if (entityData != null) {
                            isDirtyValue = xrmInstance.Page.data.entity.getIsDirty();
                        }
                    }
                    Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                    data.set(CIFramework.Constants.ClientUrl, context.getClientUrl());
                    data.set(CIFramework.Constants.AppUrl, context.getCurrentAppUrl());
                    data.set(CIFramework.Constants.OrgLcid, context.organizationSettings.languageId);
                    data.set(CIFramework.Constants.OrgUniqueName, context.organizationSettings.uniqueName);
                    data.set(CIFramework.Constants.OrgId, context.organizationSettings.organizationId);
                    data.set(CIFramework.Constants.TenantId, context.organizationSettings.organizationTenant); // organizationTenant is not available in clientAPI d.ts file
                    data.set(CIFramework.Constants.UserId, context.userSettings.userId);
                    data.set(CIFramework.Constants.UserLcid, context.userSettings.languageId);
                    data.set(CIFramework.Constants.UserName, context.userSettings.userName);
                    data.set(CIFramework.Constants.UserRoles, context.userSettings.securityRoles);
                    data.set(CIFramework.Constants.crmVersion, context.getVersion());
                    data.set(CIFramework.Constants.cifVersion, Internal.cifPatchVersion);
                    data.set(CIFramework.Constants.isDirty, isDirtyValue);
                    return data;
                };
                client.getWidgetWidth = (telemetryData) => {
                    const startTime = new Date();
                    // let width = Xrm.Panel.width;
                    const widgetIFrame = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    const widgetArea = widgetIFrame.contentDocument.getElementById("widgetArea");
                    if (widgetArea === undefined || widgetArea === null) {
                        return 0;
                    }
                    else {
                        return widgetArea.clientWidth;
                    }
                    /*if (this.flapExpanded) {
                        width = this.origWidth + Constants.DEFAULT_SIDEPANEL_WIDTH_WITH_BORDER;
                    }
                    else {
                        width = widgetIFrame.clientWidth;   //TODO: temporary fix until plaform fixes the Panel.width getter
                    }
                    let timeTaken = Date.now() - startTime.getTime();
                    let apiName = "Xrm.Panel.getWidth";
                    //logApiData(telemetryData, startTime, timeTaken, apiName);
                    return width - Constants.DEFAULT_SIDEPANEL_WIDTH_WITH_BORDER;*/
                };
                client.checkCIFCapability = () => {
                    try {
                        if (window.top.Xrm.Utility.getGlobalContext().client.getClient() === "UnifiedServiceDesk") {
                            return false;
                        }
                        if (window.top.document.getElementById(CIFramework.Constants.widgetIframeId)) {
                            // The side panel already exists. Don't load another
                            return false;
                        }
                    }
                    catch (error) {
                        // We couldn't access the top level window. Don't load the side-panel
                        return false;
                    }
                    return true;
                };
                client.renderSearchPage = (provider, entityName, searchString, telemetryData) => {
                    let startTime;
                    return new Promise((resolve, reject) => {
                        try {
                            const searchPageInput = {
                                pageType: "search",
                                searchText: searchString,
                                searchType: 1,
                                EntityNames: [entityName],
                                EntityGroupName: "",
                            };
                            if (Internal.isConsoleAppInternal()) {
                                const tabInput = {
                                    pageInput: searchPageInput,
                                    options: { isFocused: true }
                                };
                                Microsoft.AppRuntime.Internal.createTab(tabInput);
                            }
                            else {
                                startTime = new Date();
                                const xrmInstance = (window.top.getCurrentXrm()) || Xrm;
                                xrmInstance.Navigation.navigateTo(searchPageInput);
                                const timeTaken = Date.now() - startTime.getTime();
                                const apiName = "Xrm.Navigation.navigateTo";
                                Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                            }
                            return resolve();
                        }
                        catch (error) {
                            const errorData = Internal.generateErrorObject(error, "client.renderSearchPage - Xrm.Navigation.navigateTo", Internal.errorTypes.XrmApiError);
                            return reject(errorData);
                        }
                    });
                };
                client.createSession = (id, initials, sessionColor, providerId, customerName) => {
                    const sidePanelIFrame = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    const sessionPanel = CIFramework.Utility.getElementFromIframe(sidePanelIFrame, CIFramework.Constants.sessionPanel);
                    if (sessionPanel == null)
                        return;
                    const sessionElementHtml = '<div class="session flexJustify" role="tab" tabindex="-1" aria-controls="' + providerId + '" aria-label="' + initials + '" id="' + id + '"><div class="flexJustify" id="' + id + 'UiSessionIcon"><div class="iconCircle" id="' + id + 'IconCircle" title="' + customerName + '" style="background-color: ' + sessionColor + ';"><span class="initials">' + initials + '</span></div><span class="uiSessionNotification" id="' + id + '_UiSessionNotification" style="display:none"></span></div><div id="' + id + 'CrossIcon" class="flexJustify" title="' + customerName + '" style="display:none"><span class="symbolFont Cancel-symbol crossIconFont"></span></div></div>';
                    const parser = new DOMParser();
                    const el = parser.parseFromString(sessionElementHtml, "text/html");
                    const sessionElement = el.getElementById(id);
                    sessionElement.onclick = (event) => {
                        if (id === Microsoft.CIFramework.Internal.state.sessionManager.getFocusedSession()) {
                            Microsoft.CIFramework.Internal.state.sessionManager.closeSession(event.currentTarget.id.replace('CrossIcon', ''));
                        }
                        else {
                            Microsoft.CIFramework.Internal.state.sessionManager.focusSession(event.currentTarget.id);
                        }
                    };
                    sessionElement.onkeydown = (event) => {
                        if (event.keyCode === 13) {
                            if (id === Microsoft.CIFramework.Internal.state.sessionManager.getFocusedSession()) {
                                Microsoft.CIFramework.Internal.state.sessionManager.closeSession(event.currentTarget.id.replace('CrossIcon', ''));
                            }
                            else {
                                Microsoft.CIFramework.Internal.state.sessionManager.focusSession(event.currentTarget.id);
                            }
                        }
                        else if (event.keyCode === 37) {
                            if (sessionElement.previousElementSibling != null) {
                                sessionElement.previousElementSibling.focus();
                            }
                            else {
                                const allSessions = CIFramework.Utility.getElementsByClassName(sidePanelIFrame, "session");
                                allSessions[allSessions.length - 1].focus();
                            }
                        }
                        else if (event.keyCode === 39) {
                            if (sessionElement.nextElementSibling != null && sessionElement.nextElementSibling.className.indexOf("session") !== -1) {
                                sessionElement.nextElementSibling.focus();
                            }
                            else {
                                const allSessions = CIFramework.Utility.getElementsByClassName(sidePanelIFrame, "session");
                                allSessions[0].focus();
                            }
                        }
                    };
                    sessionElement.onkeyup = (e) => {
                        if (e.altKey && e.keyCode === 88) {
                            if (id === Microsoft.CIFramework.Internal.state.sessionManager.getFocusedSession()) {
                                Microsoft.CIFramework.Internal.state.sessionManager.closeSession(event.currentTarget.id.replace('CrossIcon', ''));
                            }
                        }
                    };
                    const sessions = CIFramework.Utility.getElementFromIframe(sidePanelIFrame, "sessions");
                    sessions.appendChild(sessionElement);
                    CIFramework.Utility.blinkBrowserTab(sidePanelIFrame);
                };
                client.closeSession = (id) => {
                    const sidePanelIFrame = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    const sessionElement = CIFramework.Utility.getElementFromIframe(sidePanelIFrame, id);
                    if (sessionElement == null)
                        return;
                    sessionElement.parentNode.removeChild(sessionElement);
                };
                client.getSessionColor = (id) => {
                    const sidePanelIFrame = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    const sessionElementCircle = CIFramework.Utility.getElementFromIframe(sidePanelIFrame, id + "IconCircle");
                    if (sessionElementCircle == null)
                        return "";
                    return CIFramework.Utility.rgb2hex(sessionElementCircle.style.backgroundColor);
                };
                client.updateSession = (id, focused) => {
                    const sidePanelIFrame = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    const sessionElement = CIFramework.Utility.getElementFromIframe(sidePanelIFrame, id);
                    if (sessionElement == null)
                        return;
                    const providerId = sessionElement.getAttribute("aria-controls");
                    const providerElement = CIFramework.Utility.getElementFromIframe(sidePanelIFrame, providerId);
                    const sessionIcon = CIFramework.Utility.getElementFromIframe(sidePanelIFrame, id + "UiSessionIcon");
                    const sessionNotification = CIFramework.Utility.getElementFromIframe(sidePanelIFrame, id + "_UiSessionNotification");
                    const crossIcon = CIFramework.Utility.getElementFromIframe(sidePanelIFrame, id + "CrossIcon");
                    if (focused) {
                        sessionElement.style.backgroundColor = "#FFFFFF";
                        sessionElement.style.boxShadow = "8px 4px 10px rgba(102, 102, 102, 0.2)";
                        sessionElement.setAttribute("tabindex", 0);
                        providerElement.setAttribute("aria-labelledby", id);
                        sessionNotification.style.display = "none";
                        sessionNotification.innerText = "";
                        sessionElement.focus();
                    }
                    else {
                        sessionElement.style.backgroundColor = "transparent";
                        sessionElement.style.boxShadow = "none";
                        sessionElement.setAttribute("tabindex", -1);
                        providerElement.setAttribute("aria-labelledby", "");
                    }
                    const sessionOnMouseOverHandler = () => {
                        if (focused) {
                            sessionElement.style.boxShadow = "0px 4px 8px rgba(102, 102, 102, 0.2)";
                            sessionIcon.style.display = "none";
                            crossIcon.style.display = "flex";
                        }
                    };
                    const sessionOnMouseOutHandler = () => {
                        if (focused) {
                            sessionElement.style.boxShadow = "none";
                            sessionIcon.style.display = "flex";
                            crossIcon.style.display = "none";
                        }
                    };
                    if (focused) {
                        sessionElement.onmouseover = sessionOnMouseOverHandler;
                        sessionElement.onmouseout = sessionOnMouseOutHandler;
                    }
                    else {
                        sessionElement.onmouseover = null;
                        sessionElement.onmouseout = null;
                    }
                    sessionElement.setAttribute("aria-selected", focused);
                };
                client.notifySession = (id, messagesCount) => {
                    const sidePanelIFrame = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    const sessionNotification = CIFramework.Utility.getElementFromIframe(sidePanelIFrame, id + "_UiSessionNotification");
                    if (messagesCount != null) {
                        if (messagesCount > 99) {
                            messagesCount = 99;
                        }
                        sessionNotification.innerText = messagesCount;
                    }
                    sessionNotification.style.display = "block";
                    CIFramework.Utility.blinkBrowserTab(sidePanelIFrame);
                };
                client.expandFlap = (handler) => {
                    if (this.flapExpanded) {
                        return 0;
                    }
                    const widgetIFrame = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    const sessionPanelArea = widgetIFrame.contentDocument.getElementById("sessionPanel");
                    const widgetWidth = client.getWidgetWidth();
                    this.origWidth = widgetWidth + sessionPanelArea.clientWidth;
                    this.flapExpanded = true;
                    client.registerHandler(CIFramework.Constants.CollapseFlapHandler, handler);
                    client.setPanelWidth("setPanelWidth", (2 * this.origWidth - sessionPanelArea.clientWidth));
                    widgetIFrame.contentDocument.documentElement.style.setProperty('--flapAreaWidth', widgetWidth.toString() + "px");
                    return this.origWidth;
                };
                client.collapseFlap = (sessionId) => {
                    if (!this.flapExpanded) {
                        return 0;
                    }
                    const handler = this.eventHandlers.get(CIFramework.Constants.CollapseFlapHandler);
                    if (handler != null && handler !== "undefined") {
                        if (Internal.isNullOrUndefined(sessionId)) {
                            handler();
                        }
                        else {
                            handler(new CustomEvent(CIFramework.Constants.CollapseFlapHandler, { detail: { sessionId } }));
                        }
                    }
                    client.setPanelWidth("setPanelWidth", this.origWidth);
                    const widgetIFrame = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    widgetIFrame.contentDocument.documentElement.style.setProperty('--flapAreaWidth', "0px");
                    this.flapExpanded = false;
                    return this.origWidth;
                };
                client.flapInUse = () => {
                    return this.flapExpanded === true;
                };
                return client;
            }
            Internal.unifiedClient = unifiedClient;
            function UCIPresenceManager() {
                const presence = {};
                presence.setAgentPresence = (presenceInfo, telemetryData) => {
                    const startTime = new Date();
                    const agentPresence = Microsoft.CIFramework.Internal.PresenceControl.Instance.setAgentPresence(presenceInfo);
                    const timeTaken = Date.now() - startTime.getTime();
                    const apiName = "PresenceControl.setAgentPresence";
                    Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                    const widgetIFrame = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    const agentPresenceParent = widgetIFrame.contentWindow.document.getElementById("CurrentStatus");
                    if (agentPresenceParent != null) {
                        const currentPresenceId = agentPresenceParent.firstElementChild.id;
                        if (currentPresenceId !== presenceInfo.presenceId) {
                            agentPresenceParent.innerHTML = "";
                            agentPresenceParent.appendChild(agentPresence);
                        }
                        return true;
                    }
                    return false;
                };
                presence.initializeAgentPresenceList = (presenceList, telemetryData) => {
                    const startTime = new Date();
                    const presenceListDiv = Microsoft.CIFramework.Internal.PresenceControl.Instance.setAllPresences(presenceList);
                    const timeTaken = Date.now() - startTime.getTime();
                    const apiName = "PresenceControl.initializeAgentPresenceList";
                    Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                    const widgetIFrame = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    const presenceListParent = widgetIFrame.contentWindow.document.getElementById("PresenceList");
                    if (presenceListParent != null) {
                        presenceListParent.innerHTML = "";
                        presenceListParent.appendChild(presenceListDiv);
                        return true;
                    }
                    return false;
                };
                return presence;
            }
            Internal.UCIPresenceManager = UCIPresenceManager;
            function UCIConsoleAppManager() {
                const presence = {};
                presence.setAgentPresence = (presenceInfo, telemetryData) => {
                    const startTime = new Date();
                    // let agentPresence = Microsoft.CIFramework.Internal.PresenceControl.Instance.setAgentPresence(presenceInfo);
                    const timeTaken = Date.now() - startTime.getTime();
                    const apiName = "PresenceControl.setAgentPresence";
                    Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                    const presenceButton = window.top.document.querySelector(CIFramework.Constants.PRESENCE_BUTTON_DATA_ID);
                    const presenceList = window.top.document.querySelector(CIFramework.Constants.PRESENCE_LIST_ID);
                    const presenceStatus = presenceInfo.basePresenceStatus;
                    window.localStorage[CIFramework.Constants.CURRENT_PRESENCE_INFO] = JSON.stringify(presenceInfo);
                    if (presenceButton) {
                        if (presenceButton.parentElement) {
                            presenceButton.parentElement.removeAttribute("aria-disabled");
                        }
                        switch (presenceStatus) {
                            case "AWAY":
                                const awayPresence = presenceButton.getElementsByTagName("img");
                                awayPresence[0].src = "/WebResources/msdyn_cec_Away.svg";
                                awayPresence[0].title = CIFramework.Utility.getResourceString("PRESENCE_AWAY_TEXT");
                                presenceList.title = CIFramework.Utility.getResourceString("PRESENCE_AWAY_TEXT") + "\n\n" + CIFramework.Utility.getResourceString("LAUNCH_PRESENCE_DIALOG_TOOLTIP");
                                break;
                            case "AVAILABLE":
                                const availablePresence = presenceButton.getElementsByTagName("img");
                                availablePresence[0].src = "/WebResources/msdyn_cec_Available.svg";
                                availablePresence[0].title = CIFramework.Utility.getResourceString("PRESENCE_AVAILABLE_TEXT");
                                presenceList.title = CIFramework.Utility.getResourceString("PRESENCE_AVAILABLE_TEXT") + "\n\n" + CIFramework.Utility.getResourceString("LAUNCH_PRESENCE_DIALOG_TOOLTIP");
                                break;
                            case "OFFLINE":
                                const offlinePresence = presenceButton.getElementsByTagName("img");
                                offlinePresence[0].src = "/WebResources/msdyn_cec_Offline.svg";
                                offlinePresence[0].title = CIFramework.Utility.getResourceString("PRESENCE_OFFLINE_TEXT");
                                presenceList.title = CIFramework.Utility.getResourceString("PRESENCE_OFFLINE_TEXT") + "\n\n" + CIFramework.Utility.getResourceString("LAUNCH_PRESENCE_DIALOG_TOOLTIP");
                                break;
                            case "BUSY":
                                const busyPresence = presenceButton.getElementsByTagName("img");
                                busyPresence[0].src = "/WebResources/msdyn_cec_BusyIcon.svg";
                                busyPresence[0].title = CIFramework.Utility.getResourceString("PRESENCE_BUSY_TEXT");
                                presenceList.title = CIFramework.Utility.getResourceString("PRESENCE_BUSY_TEXT") + "\n\n" + CIFramework.Utility.getResourceString("LAUNCH_PRESENCE_DIALOG_TOOLTIP");
                                break;
                            case "BUSY_DO_NOT_DISTURB":
                                const dndPresence = presenceButton.getElementsByTagName("img");
                                dndPresence[0].src = "/WebResources/msdyn_cec_BusyDND.svg";
                                dndPresence[0].title = CIFramework.Utility.getResourceString("PRESENCE_DO_NOT_DISTURB_TEXT");
                                presenceList.title = CIFramework.Utility.getResourceString("PRESENCE_DO_NOT_DISTURB_TEXT") + "\n\n" + CIFramework.Utility.getResourceString("LAUNCH_PRESENCE_DIALOG_TOOLTIP");
                                break;
                            case "FAILED":
                                const failedPresence = presenceButton.getElementsByTagName("img");
                                failedPresence[0].src = "/WebResources/msdyn_Failed.svg";
                                failedPresence[0].title = CIFramework.Utility.getResourceString("PRESENCE_FAILED_TEXT");
                                presenceList.title = CIFramework.Utility.getResourceString("PRESENCE_FAILED_TEXT") + "\n\n" + CIFramework.Utility.getResourceString("LAUNCH_PRESENCE_DIALOG_TOOLTIP");
                                break;
                            default:
                                const defaultPresence = presenceButton.getElementsByTagName("img");
                                defaultPresence[0].title = CIFramework.Utility.getResourceString("PRESENCE_BUTTON_TEXT");
                                presenceList.title = CIFramework.Utility.getResourceString("PRESENCE_UNKOWN_TEXT");
                        }
                        return true;
                    }
                    return false;
                };
                presence.initializeAgentPresenceList = (presenceList, telemetryData) => {
                    const startTime = new Date();
                    // let presenceListDiv = Microsoft.CIFramework.Internal.PresenceControl.Instance.setAllPresences(presenceList);
                    const timeTaken = Date.now() - startTime.getTime();
                    const apiName = "PresenceControl.initializeAgentPresenceList";
                    Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                    window.localStorage[CIFramework.Constants.GLOBAL_PRESENCE_LIST] = JSON.stringify(presenceList);
                    /*let widgetIFrame = (<HTMLIFrameElement>window.parent.document.getElementById(Constants.widgetIframeId));
                    let presenceListParent = widgetIFrame.contentWindow.document.getElementById("PresenceList");
                    if (presenceListParent != null) {
                        presenceListParent.innerHTML = "";
                        presenceListParent.appendChild(presenceListDiv);
                        return true;
                    }
                    return false;*/
                    return true;
                };
                return presence;
            }
            Internal.UCIConsoleAppManager = UCIConsoleAppManager;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="Constants.ts" />
/// <reference path="UnifiedClient.ts" />
/// <reference path="WidgetIFrame.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            class ProviderManager {
                constructor(client, defaultProviderUrl, defaultProvider) {
                    this._client = client;
                    this.ciProviders = new Map();
                    this.ciProviders.set(defaultProviderUrl, defaultProvider);
                    this._defaultProvider = defaultProvider;
                }
                addProvider(url, provider) {
                    this.ciProviders.set(url, provider);
                    this._activeProvider = provider; // provider loaded in last will be the active provider
                }
                setActiveProvider(provider) {
                    this._activeProvider = provider;
                }
                getActiveProvider() {
                    return this._activeProvider || this._defaultProvider;
                }
            }
            Internal.ProviderManager = ProviderManager;
            /*Class to store CI providers information locally*/
            class CIProvider {
                constructor(x, state, environmentInfo) {
                    this._state = state;
                    this.name = x.name;
                    this.providerId = x.id;
                    this.label = x.label;
                    this.landingUrl = x.channelUrl;
                    this.clickToAct = x.enableOutBound;
                    this._widgetContainer = null;
                    this.sortOrder = x.sortOrder;
                    this.apiVersion = x.apiVersion;
                    this.trustedDomain = x.trustedDomain;
                    this.customParams = x.customParams;
                    this.orgId = environmentInfo.orgId;
                    this.orgName = environmentInfo.orgName;
                    this.crmVersion = environmentInfo.crmVersion;
                    this.appId = environmentInfo.appId;
                    this.sessions = new Map();
                    this.enableAnalytics = x.enableAnalytics;
                }
                raiseEvent(data, messageType, noTimeout) {
                    const payload = {
                        messageType,
                        messageData: JSON.stringify(Microsoft.CIFramework.Utility.buildEntity(data))
                    };
                    switch (messageType) {
                        case CIFramework.MessageType.onClickToAct:
                            if (!this.clickToAct) {
                                return Promise.resolve(new Map().set(CIFramework.Constants.value, false));
                            }
                    }
                    if (!this.getContainer()) {
                        return Promise.resolve(new Map().set(CIFramework.Constants.value, false));
                    }
                    return this._state.messageLibrary.postMsg(this.getContainer().getContentWindow(), payload, this.trustedDomain || this.landingUrl, true, noTimeout);
                }
                getContainer() {
                    return this._widgetContainer;
                }
                setContainer(container, minimizedHeight) {
                    this._widgetContainer = container;
                    this._minimizedHeight = minimizedHeight;
                }
                getAllSessions() {
                    return Array.from(this.sessions.keys());
                }
                getFocusedSession(telemetryData) {
                    const sessionId = this._state.sessionManager.getFocusedSession(telemetryData);
                    if (Array.from(this.sessions.keys()).indexOf(sessionId) === -1 && !this._state.sessionManager.isDefaultSession(sessionId, telemetryData)) {
                        return null;
                    }
                    return sessionId;
                }
                getSession(sessionId, telemetryData) {
                    if (!this.sessions.has(sessionId)) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "Session with ID:" + sessionId + " does not exist";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = CIFramework.MessageType.getSession;
                        return Promise.reject(error);
                    }
                    const session = this.sessions.get(sessionId);
                    return Promise.resolve(new Map().set("sessionId", sessionId).set("focused", session.focused).set("context", session.context).set("conversationId", session.conversationId));
                }
                canCreateSession(telemetryData) {
                    return this._state.sessionManager.canCreateSession(telemetryData);
                }
                createSession(input, context, customerName, telemetryData, appId, cifVersion, correlationId, providerSessionId) {
                    const notesInformation = {
                        notesDetails: new Map(),
                        resolve: null,
                        reject: null,
                    };
                    return new Promise(function (resolve, reject) {
                        this._state.sessionManager.createSession(this, input, context, customerName, telemetryData, appId, cifVersion, correlationId).then(function (resultMap) {
                            const session = {
                                sessionId: resultMap.get("sessionId"),
                                input,
                                context,
                                customerName,
                                notesInfo: notesInformation,
                                focused: true,
                                conversationId: resultMap.get("conversationId")
                            };
                            this.sessions.set(resultMap.get("sessionId"), session);
                            resolve(resultMap.get("sessionId"));
                        }.bind(this), (errorMessage) => {
                            const error = {};
                            error.reportTime = new Date().toUTCString();
                            error.errorMsg = errorMessage;
                            error.errorType = Internal.errorTypes.GenericError;
                            error.sourceFunc = CIFramework.MessageType.createSession;
                            reject(error);
                        });
                    }.bind(this));
                }
                requestFocusSession(sessionId, messagesCount, telemetryData) {
                    if (!this.sessions.has(sessionId)) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "Session with ID:" + sessionId + " does not exist";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = CIFramework.MessageType.requestFocusSession;
                        return Promise.reject(error);
                    }
                    return new Promise(function (resolve, reject) {
                        this._state.sessionManager.requestFocusSession(sessionId, messagesCount, telemetryData).then(() => {
                            resolve();
                        }, (errorMessage) => {
                            const error = {};
                            error.reportTime = new Date().toUTCString();
                            error.errorMsg = errorMessage;
                            error.errorType = Internal.errorTypes.GenericError;
                            error.sourceFunc = CIFramework.MessageType.requestFocusSession;
                            reject(error);
                        });
                    }.bind(this));
                }
                notifyKpiBreach(sessionId, resetKpiBreach, kpiBreachDetails, telemetryData) {
                    if (!this.sessions.has(sessionId)) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "Session with ID:" + sessionId + " does not exist";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = CIFramework.MessageType.notifyKpiBreach;
                        return Promise.reject(error);
                    }
                    return new Promise(function (resolve, reject) {
                        this._state.sessionManager.notifyKpiBreach(sessionId, resetKpiBreach, kpiBreachDetails, telemetryData).then(() => {
                            resolve();
                        }, (errorMessage) => {
                            const error = {};
                            error.reportTime = new Date().toUTCString();
                            error.errorMsg = errorMessage;
                            error.errorType = Internal.errorTypes.GenericError;
                            error.sourceFunc = CIFramework.MessageType.notifyKpiBreach;
                            reject(error);
                        });
                    }.bind(this));
                }
                notifyNewActivity(sessionId, messagesCount, shouldReset, telemetryData) {
                    if (!this.sessions.has(sessionId)) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "Session with ID:" + sessionId + " does not exist";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = CIFramework.MessageType.notifyNewActivity;
                        return Promise.reject(error);
                    }
                    return new Promise(function (resolve, reject) {
                        this._state.sessionManager.notifyNewActivity(sessionId, messagesCount, shouldReset, telemetryData).then(() => {
                            resolve();
                        }, (errorMessage) => {
                            const error = {};
                            error.reportTime = new Date().toUTCString();
                            error.errorMsg = errorMessage;
                            error.errorType = Internal.errorTypes.GenericError;
                            error.sourceFunc = CIFramework.MessageType.notifyNewActivity;
                            reject(error);
                        });
                    }.bind(this));
                }
                setFocusedSession(sessionId, showWidget) {
                    this.sessions.get(sessionId).focused = true;
                    this.raiseEvent(new Map().set("sessionId", sessionId).set("focused", true).set("context", this.sessions.get(sessionId).context), CIFramework.MessageType.onSessionSwitched);
                    if (showWidget) {
                        this._state.providerManager.setActiveProvider(this);
                        // update iframe visibility
                    }
                    // update panel title on session switch on the basis of active provider.
                    const activeProvider = this._state.providerManager.getActiveProvider();
                    if (!Internal.isNullOrUndefined(activeProvider) && activeProvider.name !== Internal.ChannelProvider.Omnichannel_UniqueName) {
                        Xrm.Panel.title = activeProvider.label;
                    }
                    else {
                        Xrm.Panel.title = "";
                    }
                }
                setUnfocusedSession(sessionId, hideWidget) {
                    this.sessions.get(sessionId).focused = false;
                    this.raiseEvent(new Map().set("sessionId", sessionId).set("focused", false).set("context", this.sessions.get(sessionId).context), CIFramework.MessageType.onSessionSwitched);
                    if (hideWidget) {
                        this._state.providerManager.setActiveProvider(null);
                        // update iframe visibility
                    }
                }
                closeSession(sessionId, telemetryData) {
                    this.raiseEvent(new Map().set("sessionId", sessionId).set("context", this.sessions.get(sessionId).context), CIFramework.MessageType.onSessionClosed);
                    this.sessions.delete(sessionId);
                }
                getFocusedTab(telemetryData) {
                    const focusedSessionId = this.getFocusedSession();
                    if (focusedSessionId == null) {
                        return null;
                    }
                    return this._state.sessionManager.getFocusedTab(focusedSessionId, telemetryData);
                }
                getTabsByTagOrName(name, tag) {
                    const focusedSessionId = this.getFocusedSession();
                    if (focusedSessionId == null) {
                        return Promise.reject("Session not in focus");
                    }
                    try {
                        return this._state.sessionManager.getTabsByTagOrName(focusedSessionId, name, tag);
                    }
                    catch (err) {
                        return Promise.reject(err);
                    }
                }
                refreshTab(tabId) {
                    const focusedSessionId = this.getFocusedSession();
                    if (focusedSessionId == null) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = CIFramework.Constants.sessionNotValidErrorMessage;
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = CIFramework.MessageType.refreshTab;
                        return Promise.reject(error);
                    }
                    return new Promise(function (resolve, reject) {
                        this._state.sessionManager.refreshTab(focusedSessionId, tabId).then((result) => {
                            resolve(result);
                        }, (errorMsg) => {
                            const error = {};
                            error.reportTime = new Date().toUTCString();
                            error.errorMsg = errorMsg;
                            error.errorType = Internal.errorTypes.GenericError;
                            error.sourceFunc = CIFramework.MessageType.refreshTab;
                            reject(error);
                        });
                    }.bind(this));
                }
                setSessionTitle(input) {
                    // if a sessionId was passed, use it, else use the current focused session
                    const focusedSessionId = input.sessionId && input.sessionId || this.getFocusedSession();
                    if (focusedSessionId == null) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = CIFramework.Constants.sessionNotValidErrorMessage;
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = CIFramework.MessageType.setSessionTitle;
                        return Promise.reject(error);
                    }
                    if (!this.sessions.has(focusedSessionId)) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "Session with ID:" + focusedSessionId + " does not exist";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = CIFramework.MessageType.setSessionTitle;
                        return Promise.reject(error);
                    }
                    return new Promise(function (resolve, reject) {
                        this._state.sessionManager.setSessionTitle(focusedSessionId, input).then((result) => {
                            resolve(result);
                        }, (errorMsg) => {
                            const error = {};
                            error.reportTime = new Date().toUTCString();
                            error.errorMsg = errorMsg;
                            error.errorType = Internal.errorTypes.GenericError;
                            error.sourceFunc = CIFramework.MessageType.setSessionTitle;
                            reject(error);
                        });
                    }.bind(this));
                }
                setTabTitle(tabId, input) {
                    const focusedSessionId = this.getFocusedSession();
                    if (focusedSessionId == null) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = CIFramework.Constants.sessionNotValidErrorMessage;
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = CIFramework.MessageType.setSessionTitle;
                        return Promise.reject(error);
                    }
                    return new Promise(function (resolve, reject) {
                        this._state.sessionManager.setTabTitle(focusedSessionId, tabId, input).then((result) => {
                            resolve(result);
                        }, (errorMsg) => {
                            const error = {};
                            error.reportTime = new Date().toUTCString();
                            error.errorMsg = errorMsg;
                            error.errorType = Internal.errorTypes.GenericError;
                            error.sourceFunc = CIFramework.MessageType.setSessionTitle;
                            reject(error);
                        });
                    }.bind(this));
                }
                createTab(input, telemetryData, appId, cifVersion, correlationId) {
                    const focusedSessionId = this.getFocusedSession();
                    if (focusedSessionId == null) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = CIFramework.Constants.sessionNotValidErrorMessage;
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = CIFramework.MessageType.createTab;
                        return Promise.reject(error);
                    }
                    return new Promise(function (resolve, reject) {
                        this._state.sessionManager.createTab(this, focusedSessionId, input, telemetryData, appId, cifVersion, correlationId).then((tabId) => {
                            resolve(tabId);
                        }, (errorMsg) => {
                            const error = {};
                            error.reportTime = new Date().toUTCString();
                            error.errorMsg = errorMsg;
                            error.errorType = Internal.errorTypes.GenericError;
                            error.sourceFunc = CIFramework.MessageType.createTab;
                            reject(error);
                        });
                    }.bind(this));
                }
                focusTab(tabId, telemetryData) {
                    const focusedSessionId = this.getFocusedSession();
                    if (focusedSessionId == null) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = CIFramework.Constants.sessionNotValidErrorMessage;
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = CIFramework.MessageType.focusTab;
                        return Promise.reject(error);
                    }
                    return new Promise(function (resolve, reject) {
                        this._state.sessionManager.focusTab(focusedSessionId, tabId, telemetryData).then(() => {
                            resolve();
                        }, (errorMsg) => {
                            const error = {};
                            error.reportTime = new Date().toUTCString();
                            error.errorMsg = errorMsg;
                            error.errorType = Internal.errorTypes.GenericError;
                            error.sourceFunc = CIFramework.MessageType.focusTab;
                            reject(error);
                        });
                    }.bind(this));
                }
            }
            Internal.CIProvider = CIProvider;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/**
 * Queue class.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        class Queue {
            constructor(queue) {
                this._queue = queue || [];
            }
            enqueue(item) {
                this._queue.push(item);
            }
            dequeue() {
                return this._queue.shift();
            }
            clearImmediate() {
                this._queue = [];
            }
            removeItem(index) {
                this._queue.splice(index, 1);
            }
            getItemAtIndex(index) {
                return this._queue[index];
            }
            get count() {
                return this._queue.length;
            }
        }
        CIFramework.Queue = Queue;
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="Client.ts" />
/// <reference path="Constants.ts" />
/// <reference path="State.ts" />
/// <reference path="../TelemetryHelper.ts" />
/// <reference path="../Typings/aria-webjs-sdk-1.8.3.d.ts" />
/// <reference path="../Typings/mscrm.d.ts" />
/// <reference path="../Queue.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            Internal.queue = new Microsoft.CIFramework.Queue();
            Internal.closeId = "";
            const Constants = Microsoft.CIFramework.Constants;
            Internal.noOfNotifications = 0;
            Internal.maxNotificationCount = 10;
            Internal.queuedNotificationExpirtyTime = 30000;
            Internal.displayDelayTimeMs = 2000;
            Internal.globalMissedNotificationMessageBarId = "";
            function showGlobalToastNotification(notificationLevel, title, message) {
                const toastMessage = title + ". " + message;
                Xrm.UI.addGlobalNotification(1, notificationLevel, toastMessage, null, null, null).then((response) => {
                    // success
                }, (error) => {
                    // tslint:disable-next-line:no-console
                    console.error("Failed to show notification");
                });
            }
            Internal.showGlobalToastNotification = showGlobalToastNotification;
            function logInfoToTelemetry(information, correlationId) {
                Internal.logAPIInternalInfo(Internal.appId, false, null, CIFramework.MessageType.notifyEvent + "-" + information, Internal.cifVersion, "", "", "", correlationId);
            }
            Internal.logInfoToTelemetry = logInfoToTelemetry;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="Client.ts" />
/// <reference path="Constants.ts" />
/// <reference path="State.ts" />
/// <reference path="../TelemetryHelper.ts" />
/// <reference path="../Typings/aria-webjs-sdk-1.8.3.d.ts" />
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            const Constants = Microsoft.CIFramework.Constants;
            const listenerWindow = window.parent;
            function toggleNotesVisibility() {
                const widgetIFrame = listenerWindow.document.getElementById(Constants.widgetIframeId);
                const notesDiv = widgetIFrame.contentWindow.document.getElementById("notesDiv");
                if (notesDiv.style.visibility === "hidden") {
                    notesDiv.style.visibility = "visible";
                    notesDiv.tabIndex = 0;
                }
                else {
                    notesDiv.style.visibility = "hidden";
                    notesDiv.tabIndex = -1;
                }
            }
            Internal.toggleNotesVisibility = toggleNotesVisibility;
            function insertNotesClient(notesDetails /*, width: number*/) {
                let entityName;
                let originURL;
                let entityId;
                let entitySetName;
                const widgetIFrame = listenerWindow.document.getElementById(Constants.widgetIframeId);
                const notesDiv = widgetIFrame.contentWindow.document.getElementById("notesDiv");
                const childDivs = notesDiv.getElementsByTagName('div');
                if (childDivs != null && childDivs.length > 0) {
                    return CIFramework.postMessageNamespace.rejectWithErrorMessage("This conversation already has a note opened.");
                }
                for (const [key, value] of notesDetails) {
                    if (key.search(Constants.entityName) !== -1) {
                        entityName = value;
                    }
                    else if (key.search(Constants.originURL) !== -1) {
                        originURL = value;
                    }
                    else if (key.search(Constants.entityId) !== -1) {
                        entityId = value;
                    }
                    else if (key.search(Constants.entitySetName) !== -1) {
                        entitySetName = value;
                    }
                }
                // notesDetails.set(Constants.value, width);
                return new Promise((resolve, reject) => {
                    // expandFlap(width,state);
                    // widgetIFrame.contentWindow.document.getElementsByTagName("iframe")[0].setAttribute('style','position: absolute;right: 0px;');
                    const htmlString = '<div id= "notesHeaderIdCIF" class="notesHeader"><div class="notesHeaderSpan_CIF" aria-label="' + CIFramework.Utility.getResourceString("ADD_NOTE_TEXT") + '">' + CIFramework.Utility.getResourceString("ADD_NOTE_TEXT") + '</div><div class="notesCloseSpanDiv"></div></div><div class="notesbodyDivider_CIF"></div><div style="height: 14px;"></div>';
                    notesDiv.insertAdjacentHTML('beforeend', htmlString);
                    notesDiv.classList.add("notesDivCIF");
                    notesDiv.getElementsByClassName("notesHeader")[0].classList.add("notesHeaderCIF");
                    const availNotesHeight = widgetIFrame.clientHeight - 26;
                    widgetIFrame.contentWindow.document.getElementById("notesHeaderIdCIF").style.height = "49px";
                    const span = document.createElement("span");
                    span.classList.add("closeNotes_CIF");
                    span.classList.add("FontIcons-closeSoftNotification_CIF");
                    span.setAttribute("aria-label", CIFramework.Utility.getResourceString("CLOSE_BUTTON_TEXT"));
                    span.setAttribute("tabindex", "0");
                    span.setAttribute("role", "button");
                    notesDiv.getElementsByClassName("notesCloseSpanDiv")[0].appendChild(span);
                    const newTextArea = document.createElement('TextArea');
                    const notesElement = notesDiv;
                    notesElement.appendChild(newTextArea);
                    newTextArea.setAttribute('placeholder', CIFramework.Utility.getResourceString("START_NOTES_TOOLTIP_TEXT"));
                    newTextArea.setAttribute("aria-label", CIFramework.Utility.getResourceString("NOTES_TOOLTIP_TEXT"));
                    newTextArea.classList.add("newTextAreaCIF");
                    const textAreaWidth = "calc(100% - 40px)"; // width - width/8 - 15;
                    newTextArea.id = "notesTextAreaCIF";
                    newTextArea.style.width = textAreaWidth;
                    newTextArea.style.height = "calc(100% - 120px)";
                    const saveBtn = document.createElement("BUTTON");
                    saveBtn.classList.add("notesSaveButtonCIF");
                    saveBtn.innerText = CIFramework.Utility.getResourceString("ADD_NOTE_TEXT");
                    saveBtn.tabIndex = 0;
                    saveBtn.setAttribute("aria-label", CIFramework.Utility.getResourceString("ADD_NOTE_TEXT"));
                    const cancelBtn = document.createElement("BUTTON");
                    cancelBtn.classList.add("notesCancelButtonCIF");
                    cancelBtn.innerText = CIFramework.Utility.getResourceString("CANCEL_BUTTON_TEXT");
                    cancelBtn.tabIndex = 0;
                    cancelBtn.setAttribute("aria-label", CIFramework.Utility.getResourceString("CANCEL_BUTTON_TEXT"));
                    const addCancelButtonContainer = document.createElement("DIV");
                    addCancelButtonContainer.classList.add("addCancelButtonContainer");
                    addCancelButtonContainer.appendChild(saveBtn);
                    addCancelButtonContainer.appendChild(cancelBtn);
                    notesElement.appendChild(addCancelButtonContainer);
                    if (Internal.isConsoleAppInternal() === true) {
                        const widgetAreaDiv = widgetIFrame.contentWindow.document.getElementById("widgetArea");
                        const flapAreaDiv = widgetIFrame.contentWindow.document.getElementById("flapArea");
                        widgetAreaDiv.classList.remove("widgetArea");
                        widgetAreaDiv.classList.add("widgetAreaZFP");
                        flapAreaDiv.classList.add("flapAreaZFP");
                    }
                    // Saving notes info locally
                    const sessionId = Internal.state.sessionManager.getFocusedSession();
                    const session = Internal.state.providerManager.getActiveProvider().sessions.get(sessionId);
                    session.notesInfo.notesDetails = notesDetails;
                    session.notesInfo.resolve = resolve;
                    session.notesInfo.reject = reject;
                    saveBtn.addEventListener("click", function clickListener() {
                        saveNotes(notesDetails, newTextArea).then((retval) => {
                            cancelNotes();
                            // state.setWidgetWidth("setWidgetWidth", width);
                            return resolve(new Map().set(Constants.value, retval));
                        }, (error) => {
                            return CIFramework.postMessageNamespace.rejectWithErrorMessage("Failed in saving notes.");
                        });
                    });
                    cancelBtn.addEventListener("click", function clickListener() {
                        cancelNotes();
                        // state.setWidgetWidth("setWidgetWidth", width);
                        return resolve(new Map().set(Constants.value, new Map().set(Constants.value, "")));
                    });
                    span.addEventListener("click", function clickListener() {
                        cancelNotes();
                        // state.setWidgetWidth("setWidgetWidth", width);
                        return resolve(new Map().set(Constants.value, new Map().set(Constants.value, "")));
                    });
                    span.addEventListener("keydown", function clickListener(event) {
                        if (event.keyCode === 32 || event.keyCode === 13) {
                            cancelNotes();
                            return resolve(new Map().set(Constants.value, new Map().set(Constants.value, "")));
                        }
                    });
                });
            }
            Internal.insertNotesClient = insertNotesClient;
            function saveNotes(notesDetails, newTextArea) {
                let entityName;
                let originURL;
                let entityId;
                let entitySetName;
                let annotationId;
                for (const [key, value] of notesDetails) {
                    if (key.search(Constants.entityName) !== -1) {
                        entityName = value;
                    }
                    else if (key.search(Constants.originURL) !== -1) {
                        originURL = value;
                    }
                    else if (key.search(Constants.entityId) !== -1) {
                        entityId = value;
                    }
                    else if (key.search(Constants.entitySetName) !== -1) {
                        entitySetName = value;
                    }
                    else if (key.search(Constants.annotationId) !== -1) {
                        annotationId = value;
                    }
                }
                const textAreaValue = newTextArea.value;
                const map = new Map().set(Constants.notetext, textAreaValue);
                let noteText = "";
                const createMap = new Map().set(Constants.entityName, Constants.annotation).set(Constants.value, map).set(Constants.originURL, originURL);
                return new Promise((resolve) => {
                    if (!annotationId) {
                        Internal.createRecord(createMap).then((returnValue) => {
                            for (const [key, value] of returnValue) {
                                if (key.search(Constants.value) !== -1) {
                                    for (const [key1, value1] of value) {
                                        if (key1.search(Constants.Id) !== -1) {
                                            annotationId = value1;
                                        }
                                    }
                                }
                            }
                            let returnUpdateValue = new Map();
                            const odataBind = entitySetName + "(" + entityId + ")";
                            const odataBindPropertyName = "objectid_" + entityName + "@odata.bind";
                            const notesMap = new Map().set(odataBindPropertyName, odataBind);
                            const updateMap = new Map().set(Constants.entityName, Constants.annotation).set(Constants.entityId, annotationId).set(Constants.value, notesMap).set(Constants.originURL, originURL);
                            Internal.updateRecord(updateMap).then((updatedAnnotation) => {
                                for (const [key, value] of updatedAnnotation) {
                                    if (key.search(Constants.value) !== -1) {
                                        returnUpdateValue = value;
                                    }
                                }
                                const mapReturn = new Map().set(Constants.value, annotationId);
                                resolve(mapReturn);
                            });
                        });
                    }
                    else {
                        const searchQuery = "?$select=notetext&$filter=_objectid_value eq " + entityId;
                        const searchMap = new Map().set(Constants.entityName, Constants.annotation).set(Constants.queryParameters, searchQuery).set(Constants.originURL, originURL);
                        Internal.search(searchMap).then((returnSearchResult) => {
                            for (const [key, value] of returnSearchResult) {
                                if (key.search(Constants.value) !== -1) {
                                    for (let i = 0; i < value.length; i++) {
                                        if (value[i].annotationid !== annotationId)
                                            continue;
                                        for (const key1 in value[i]) {
                                            if (key1.search(Constants.notetext) !== -1) {
                                                noteText = value[i][key1];
                                            }
                                        }
                                    }
                                }
                            }
                            const notesMap = new Map().set(Constants.notetext, noteText + " " + textAreaValue);
                            const updateMap = new Map().set(Constants.entityName, Constants.annotation).set(Constants.entityId, annotationId).set(Constants.value, notesMap).set(Constants.originURL, originURL);
                            Internal.updateRecord(updateMap).then((returnValue) => {
                                for (const [key, value] of returnValue) {
                                    if (key.search(Constants.value) !== -1) {
                                        for (const [key1, value1] of value) {
                                            if (key1.search(Constants.Id) !== -1) {
                                                annotationId = value1;
                                            }
                                        }
                                    }
                                }
                                const mapReturn = new Map().set(Constants.value, annotationId);
                                resolve(mapReturn);
                            });
                        });
                    }
                });
            }
            Internal.saveNotes = saveNotes;
            function cancelNotes() {
                const widgetIFrame = listenerWindow.document.getElementById(Constants.widgetIframeId);
                const notesDiv = widgetIFrame.contentWindow.document.getElementById("notesDiv");
                if (!Internal.isNullOrUndefined(notesDiv)) {
                    notesDiv.innerHTML = '';
                }
                Internal.state.client.removeHandler(Constants.CollapseFlapHandler);
            }
            Internal.cancelNotes = cancelNotes;
            function intermediateSaveNotes(event) {
                const widgetIFrame = window.parent.document.getElementById(Constants.widgetIframeId);
                const newTextArea = widgetIFrame.contentWindow.document.getElementById("notesTextAreaCIF");
                let sessionId = '';
                // Take the sessionId if present in event args, otherwise take the current focused session
                if (!Internal.isNullOrUndefined(event) && !Internal.isNullOrUndefined(event.detail.sessionId)) {
                    sessionId = event.detail.sessionId;
                }
                else {
                    sessionId = Internal.state.sessionManager.getFocusedSession();
                }
                const provider = Internal.state.sessionManager.getProvider(sessionId);
                if (Internal.isNullOrUndefined(provider)) {
                    cancelNotes();
                    return; // We persist only if the session was a provider session, otherwise we ignore
                }
                const session = provider.sessions.get(sessionId);
                const resolve = session.notesInfo.resolve;
                const reject = session.notesInfo.reject;
                saveNotes(session.notesInfo.notesDetails, newTextArea).then((retval) => {
                    cancelNotes();
                    return resolve(new Map().set(Constants.value, retval));
                }, (error) => {
                    return reject(new Map().set(Constants.value, "Failed in saving notes."));
                });
            }
            Internal.intermediateSaveNotes = intermediateSaveNotes;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="Constants.ts" />
/// <reference path="NotificationInfra.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            const Constants = Microsoft.CIFramework.Constants;
            class ToastNotificationManager {
                /** @internal */
                static getKeyFromObject(objectArg) {
                    return Object.keys(objectArg[0])[0];
                }
                /** @internal */
                static getNotificationDetails(body, eventType, notificationType) {
                    let key = "";
                    if (eventType.search(Constants.Informational) !== -1 && this.isInformationChatSoftNotification(notificationType)) {
                        key = this.getKeyFromObject(body);
                        return body[0][key];
                    }
                    else if (eventType.search(Constants.Informational) !== -1 && (this.isInformationalNotification(notificationType) || this.isFailureInformationNotification(notificationType))) {
                        return body;
                    }
                    return "";
                }
                /** @internal */
                static isInformationChatSoftNotification(notificationType) {
                    return (notificationType.length === 2 && notificationType[0].search(CIFramework.MessageType.softNotification) !== -1 && notificationType[1].search(Constants.Chat) !== -1);
                }
                /** @internal */
                static isInformationalNotification(notificationType) {
                    return (notificationType.length === 2 && notificationType[1].search(Constants.Informational) !== -1);
                }
                /** @internal */
                static isFailureInformationNotification(notificationType) {
                    return (notificationType.length === 2 && notificationType[1].search(Constants.Failure) !== -1);
                }
                /**
                 * utility func to launch toast notifications
                 */
                /** @internal */
                static showToastNotification(notificationUX) {
                    let eventType;
                    let header = "";
                    let body = "";
                    let notificationType = "";
                    let correlationId = "";
                    for (const [key, value] of notificationUX) {
                        if (key.search(Constants.eventType) !== -1) {
                            // tslint:disable-next-line:no-console
                            console.log(value);
                            eventType = value;
                        }
                        if (key.search(Constants.notificationUXObject) !== -1) {
                            for (const [key1, value1] of value) {
                                if (key1.search(Constants.headerDataCIF) !== -1) {
                                    header = value1;
                                }
                                else if (key1.search(Constants.bodyDataCIF) !== -1) {
                                    body = value1;
                                }
                                else if (key1.search(Constants.notificationType) !== -1) {
                                    notificationType = value1;
                                }
                            }
                        }
                        if (key.search(Constants.correlationId) !== -1) {
                            correlationId = value;
                        }
                    }
                    const details = ToastNotificationManager.getNotificationDetails(body, eventType, notificationType);
                    if (header[0] == null || header[0] === "undefined") {
                        return CIFramework.postMessageNamespace.rejectWithErrorMessage("The header value is blank. Provide a value to the parameter.");
                    }
                    if (notificationType[0].search(CIFramework.MessageType.softNotification) !== -1) { // For Soft notification
                        if (body == null || body === "undefined") {
                            return CIFramework.postMessageNamespace.rejectWithErrorMessage("The body value is blank. Provide a value to the parameter.");
                        }
                    }
                    if (notificationType == null || notificationType === "undefined" || notificationType.length <= 0) {
                        return CIFramework.postMessageNamespace.rejectWithErrorMessage("The notificationType value is blank. Provide a value to the parameter.");
                    }
                    if (eventType.search(Constants.Informational) !== -1 && ToastNotificationManager.isInformationalNotification(notificationType)) {
                        Microsoft.CIFramework.Internal.showGlobalToastNotification(1 /* success */, header[0], details);
                        const mapReturn = new Map().set(Microsoft.CIFramework.Constants.value, new Map().set(Microsoft.CIFramework.Constants.actionName, Microsoft.CIFramework.Constants.Accept));
                        return Promise.resolve(mapReturn);
                    }
                    else if (eventType.search(Constants.Informational) !== -1 && ToastNotificationManager.isFailureInformationNotification(notificationType)) {
                        Microsoft.CIFramework.Internal.showGlobalToastNotification(2 /* error */, header[0], details);
                        const mapReturn = new Map().set(Microsoft.CIFramework.Constants.value, new Map().set(Microsoft.CIFramework.Constants.actionName, Microsoft.CIFramework.Constants.Accept));
                        return Promise.resolve(mapReturn);
                    }
                    else if (eventType.search(Constants.Informational) !== -1 && ToastNotificationManager.isInformationChatSoftNotification(notificationType)) {
                        Microsoft.CIFramework.Internal.showGlobalToastNotification(4 /* information */, header[0], details);
                        const mapReturn = new Map().set(Microsoft.CIFramework.Constants.value, new Map().set(Microsoft.CIFramework.Constants.actionName, Microsoft.CIFramework.Constants.Accept));
                        return Promise.resolve(mapReturn);
                    }
                }
            }
            Internal.ToastNotificationManager = ToastNotificationManager;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            class SessionPanel extends Internal.SessionManager {
                constructor() {
                    super(...arguments);
                    this.counter = 0;
                }
                focusSession(sessionId) {
                    let switchProvider = true;
                    let oldProvider;
                    const newProvider = this.getProvider(sessionId);
                    if (Internal.isNullOrUndefined(newProvider)) {
                        return Promise.reject("Session Id is wrong");
                    }
                    if (this.focusedSession === sessionId) {
                        return Promise.resolve();
                    }
                    Internal.state.client.collapseFlap();
                    if (!Internal.isNullOrUndefined(this.focusedSession)) {
                        oldProvider = this.getProvider(this.focusedSession);
                        if (oldProvider != null) {
                            if (oldProvider === newProvider) {
                                switchProvider = false;
                            }
                            oldProvider.setUnfocusedSession(this.focusedSession, switchProvider);
                            Internal.state.client.updateSession(this.focusedSession, false);
                        }
                    }
                    this.focusedSession = sessionId;
                    newProvider.setFocusedSession(this.focusedSession, switchProvider);
                    Internal.state.client.updateSession(this.focusedSession, true);
                    return Promise.resolve();
                }
                getFocusedSession() {
                    return this.focusedSession;
                }
                isDefaultSession(sessionId) {
                    return false;
                }
                canCreateSession() {
                    if (this.sessions.size < CIFramework.Constants.MaxSessions) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                createSession(provider, input, context, customerName) {
                    if (!this.canCreateSession()) {
                        return Promise.reject("Cannot add the Session. Maximum sessions limit reached. Limit: " + CIFramework.Constants.MaxSessions);
                    }
                    const sessionId = Internal.state.messageLibrary.getCorrelationId();
                    this.sessions.set(sessionId, new Internal.SessionInfo(provider));
                    const sessionColor = CIFramework.Constants.sessionColors[this.counter++ % CIFramework.Constants.sessionColors.length];
                    let initials = "";
                    const splittedName = customerName.split(" ");
                    if (splittedName.length === 1) {
                        initials = splittedName[0][0] + splittedName[0][1];
                    }
                    else {
                        initials = splittedName[0][0] + splittedName[splittedName.length - 1][0];
                    }
                    Internal.state.client.createSession(sessionId, initials, sessionColor, provider.providerId, customerName);
                    window.setTimeout(this.focusSession.bind(this), 0, sessionId);
                    provider.raiseEvent(new Map().set("sessionId", sessionId).set("focused", this.focusedSession === sessionId).set("context", context), CIFramework.MessageType.onSessionCreated, true);
                    return Promise.resolve(new Map().set("sessionId", sessionId));
                }
                requestFocusSession(sessionId, messagesCount) {
                    const provider = this.getProvider(sessionId);
                    if (Internal.isNullOrUndefined(provider)) {
                        return Promise.reject("Session Id is wrong");
                    }
                    if (this.focusedSession !== sessionId) {
                        Internal.state.client.notifySession(sessionId, messagesCount);
                    }
                    return Promise.resolve();
                }
                closeSession(sessionId) {
                    const provider = this.getProvider(sessionId);
                    if (Internal.isNullOrUndefined(provider)) {
                        return Promise.reject("Session Id is wrong");
                    }
                    return new Promise(function (resolve, reject) {
                        provider.raiseEvent(new Map().set("sessionId", sessionId).set("focused", this.focusedSession === sessionId).set("context", provider.sessions.get(sessionId).context), CIFramework.MessageType.onBeforeSessionClosed, true)
                            .then(function () {
                            this.sessions.delete(sessionId);
                            Internal.state.client.closeSession(sessionId);
                            if (this.focusedSession === sessionId) {
                                this.focusedSession = null;
                                if (this.sessions.size > 0) {
                                    // setting last in the Map as focused
                                    this.focusSession(Array.from(this.sessions.keys()).pop());
                                }
                            }
                            provider.closeSession(sessionId);
                            resolve(true);
                        }.bind(this, provider), () => {
                            reject("Session not closed");
                        });
                    }.bind(this));
                }
                getFocusedTab(sessionId) {
                    return null;
                }
                createTab(provider, sessionId, input) {
                    return Promise.reject("Not implemented");
                }
                createTabInternal(provier, sessionId, input) {
                    return Promise.reject("Not implemented");
                }
                focusTab(sessionId, tabId) {
                    return Promise.reject("Not implemented");
                }
                closeTab(sessionId, tabId) {
                    return Promise.reject("Not implemented");
                }
                refreshTab(sessionId, tabId) {
                    return Promise.reject("Not implemented");
                }
                setSessionTitle(sessionId, input) {
                    return Promise.reject("Not implemented");
                }
                setTabTitle(sessionId, tabId, input) {
                    return Promise.reject("Not implemented");
                }
            }
            Internal.SessionPanel = SessionPanel;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            let IdleTimeManager = /** @class */ (() => {
                class IdleTimeManager {
                    static startTimer(thresHold, enabled) {
                        if (!this.isInitialized) {
                            this.lastUsedTime = new Date();
                            this.isIdle = false;
                            this.isEnabled = enabled;
                            if (Internal.isNullOrUndefined(thresHold) || isNaN(thresHold) || thresHold === 0) {
                                this.isEnabled = false;
                            }
                            else {
                                window.top.removeEventListener("click", this.updateTime.bind(this));
                                window.top.removeEventListener("mousemove", this.updateTime.bind(this));
                                window.top.removeEventListener("touchstart", this.updateTime.bind(this));
                                window.top.addEventListener("click", this.updateTime.bind(this));
                                window.top.addEventListener("mousemove", this.updateTime.bind(this));
                                window.top.addEventListener("touchstart", this.updateTime.bind(this));
                                this.threshold = thresHold * 1000;
                                this.timerID = setInterval(this.checkStatus.bind(this), this.threshold);
                            }
                            this.isInitialized = true;
                        }
                    }
                    static checkStatus() {
                        if ((new Date().getTime() - this.lastUsedTime.getTime()) >= this.threshold && this.isIdle === false && this.isEnabled) {
                            const sessionId = Internal.state.sessionManager.getFocusedSession();
                            const session = Internal.state.sessionManager.sessions.get(sessionId);
                            let context = "";
                            // Don't send events for home session
                            if (!Internal.isNullOrUndefined(session)) {
                                context = session.associatedProvider.sessions.get(sessionId).context;
                                this.isIdle = true;
                                Internal.sendMessage(new Map().set(CIFramework.Constants.sessionId, sessionId).set(CIFramework.Constants.idle, true).set(CIFramework.Constants.context, context), CIFramework.MessageType.onSessionIdle);
                                Internal.logAPIInternalInfo(Internal.appId, false, null, CIFramework.MessageType.onSessionIdle, Internal.cifVersion, "", "", "SessionId: " + sessionId + ", Context: " + context + ", IsIdle: " + this.isIdle);
                            }
                        }
                    }
                    static updateTime() {
                        this.lastUsedTime = new Date();
                        if (this.isIdle && this.isEnabled) {
                            const sessionId = Internal.state.sessionManager.getFocusedSession();
                            const session = Internal.state.sessionManager.sessions.get(sessionId);
                            let context = "";
                            // Don't send events for home session
                            if (!Internal.isNullOrUndefined(session)) {
                                context = session.associatedProvider.sessions.get(sessionId).context;
                                this.isIdle = false;
                                Internal.sendMessage(new Map().set(CIFramework.Constants.sessionId, sessionId).set(CIFramework.Constants.idle, false).set(CIFramework.Constants.context, context), CIFramework.MessageType.onSessionIdle);
                                Internal.logAPIInternalInfo(Internal.appId, false, null, CIFramework.MessageType.onSessionIdle, Internal.cifVersion, "", "", "SessionId: " + sessionId + ", Context: " + context + ", IsIdle: " + this.isIdle);
                            }
                        }
                        else if (this.isEnabled && !Internal.isNullOrUndefined(this.timerID)) {
                            clearInterval(this.timerID);
                            this.timerID = setInterval(this.checkStatus.bind(this), this.threshold);
                        }
                    }
                }
                IdleTimeManager.lastUsedTime = new Date();
                IdleTimeManager.isIdle = false;
                IdleTimeManager.threshold = 60000;
                IdleTimeManager.isEnabled = false;
                IdleTimeManager.isInitialized = false;
                return IdleTimeManager;
            })();
            Internal.IdleTimeManager = IdleTimeManager;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            class DebugInformationManager {
                /**
            * Utility to copy debug data to clipboard
            */
                static copyToClipboardAndShowNotification(debugData) {
                    const startTime = new Date();
                    const apiName = "DebugInformationManager.copyToClipboardAndShowNotification";
                    const timeTaken = Date.now() - startTime.getTime();
                    const telemetryData = new Object();
                    telemetryData.DebugData = debugData;
                    Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                    const el = document.createElement('textarea');
                    el.value = debugData;
                    el.setAttribute('readonly', '');
                    el.setAttribute('role', 'presentation');
                    el.setAttribute('tabindex', '-1');
                    el.style.setProperty("position", 'absolute');
                    el.style.setProperty("left", "-9999px");
                    document.body.appendChild(el);
                    setTimeout(() => {
                        el.select();
                        setTimeout(() => {
                            try {
                                const copyStatus = document.execCommand('copy');
                                if (!copyStatus) {
                                    // tslint:disable-next-line:no-console
                                    console.error("copyDebugDataToClipboard: Cannot copy text");
                                    Microsoft.CIFramework.Internal.showGlobalToastNotification(4 /* information */, Microsoft.CIFramework.Utility.getResourceString("DIAGNOSTIC_TEXT_COPY_FAILURE"), "");
                                }
                                else {
                                    // tslint:disable-next-line:no-console
                                    console.log("copyDebugDataToClipboard: The text is now on the clipboard");
                                    Microsoft.CIFramework.Internal.showGlobalToastNotification(4 /* information */, Microsoft.CIFramework.Utility.getResourceString("DIAGNOSTIC_TEXT"), "");
                                }
                            }
                            catch (err) {
                                // tslint:disable-next-line:no-console
                                console.log("Error : copyDebugDataToClipboard- Unable to copy." + err);
                                const errorData = Internal.generateErrorObject(err, "copyToClipboardAndShowNotification - Unable to copy", Internal.errorTypes.GenericError);
                                Internal.logFailure(Internal.appId, true, errorData, CIFramework.MessageType.fetchDebugData, Internal.cifVersion);
                            }
                            document.body.removeChild(el);
                        }, 500);
                    }, 500);
                }
                static gatherDebugData() {
                    const telemetryData = new Object();
                    const debugInformationData = {};
                    try {
                        debugInformationData.timestamp = new Date().toUTCString();
                        const activeProvider = Internal.state.providerManager.getActiveProvider();
                        debugInformationData.activeProviderName = Internal.isNullOrUndefined(activeProvider) ? "No active provider" : activeProvider.name;
                        const envData = Internal.state.client.getEnvironment(activeProvider, telemetryData);
                        debugInformationData.environmentDetails = "ClientUrl: " + envData.get(CIFramework.Constants.ClientUrl) + " AppUrl: " + envData.get(CIFramework.Constants.AppUrl) +
                            " OrgLcid: " + envData.get(CIFramework.Constants.OrgLcid) + " OrgUniqueName: " + envData.get(CIFramework.Constants.OrgUniqueName) + " OrgId: " + envData.get(CIFramework.Constants.OrgId) +
                            +" UserId: " + envData.get(CIFramework.Constants.UserId) + " UserLcid: " + envData.get(CIFramework.Constants.UserLcid) + " UserRoles: " + envData.get(CIFramework.Constants.UserRoles) +
                            " crmVersion: " + envData.get(CIFramework.Constants.crmVersion) + " TenantId: " + envData.get(CIFramework.Constants.TenantId) + " isDirty: " + envData.get(CIFramework.Constants.isDirty);
                        if (Internal.isNullOrUndefined(activeProvider)) {
                            // tslint:disable-next-line:no-console
                            console.log("No active provider: onFetchDebugInfoFromProvider Event will not be raised on the provider");
                            DebugInformationManager.copyToClipboardAndShowNotification(JSON.stringify(debugInformationData));
                        }
                        else {
                            // tslint:disable-next-line:no-console
                            console.log("Active provider exists: onFetchDebugInfoFromProvider Event raised on the provider - " + activeProvider.name);
                            Microsoft.CIFramework.Internal.onFetchDebugInfoFromProvider(activeProvider).then((response) => {
                                debugInformationData.activeProviderInfo = response;
                                DebugInformationManager.copyToClipboardAndShowNotification(JSON.stringify(debugInformationData));
                            }, (error) => {
                                debugInformationData.activeProviderInfo = error;
                                DebugInformationManager.copyToClipboardAndShowNotification(JSON.stringify(debugInformationData));
                            });
                        }
                    }
                    catch (Error) {
                        // tslint:disable-next-line:no-console
                        console.log("Error: Debug event- gatherDebugData ");
                        const errorData = Internal.generateErrorObject(Error, "Error - gatherDebugData", Internal.errorTypes.GenericError);
                        Internal.logFailure(Internal.appId, true, errorData, CIFramework.MessageType.fetchDebugData, Internal.cifVersion);
                        Microsoft.CIFramework.Internal.showGlobalToastNotification(4 /* information */, Microsoft.CIFramework.Utility.getResourceString("DIAGNOSTIC_TEXT_COPY_FAILURE"), "");
                    }
                }
            }
            Internal.DebugInformationManager = DebugInformationManager;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="Client.ts" />
/// <reference path="Constants.ts" />
/// <reference path="NotificationInfra.ts" />
/// <reference path="NotesInfra.ts" />
/// <reference path="SessionManager.ts" />
/// <reference path="ToastNotificationManager.ts" />
/// <reference path="ConsoleAppSessionManager.ts" />
/// <reference path="SessionPanel.ts" />
/// <reference path="State.ts" />
/// <reference path="IdleTimeManager.ts" />
/// <reference path="../TelemetryHelper.ts" />
/// <reference path="../Typings/aria-webjs-sdk-1.8.3.d.ts" />
/// <reference path="DebugInformationManager.ts" />
/// <reference path="IClickToAct.ts" />
/// <reference path="../../lib/AppRuntimeClientSdk.d.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            const Constants = Microsoft.CIFramework.Constants;
            const DesktopNotificationConstants = Microsoft.CIFramework.DesktopNotificationConstants;
            /**
             * mapping of handlers for each API needed by postMessageWrapper
             */
            const apiHandlers = new Map([
                ["setclicktoact", [setClickToAct]],
                ["getclicktoact", [getClickToAct]],
                ["getEntityMetadata", [getEntityMetadata]],
                ["getenvironment", [getEnvironment]],
                ["createrecord", [createRecord]],
                ["retrieverecord", [retrieveRecord]],
                ["updaterecord", [updateRecord]],
                ["deleterecord", [deleteRecord]],
                ["openform", [openForm]],
                ["refreshform", [refreshForm]],
                ["setmode", [setMode]],
                ["setPosition", [setPosition]],
                ["getmode", [getMode]],
                ["setwidth", [setWidth]],
                ["isConsoleApp", [isConsoleApp]],
                ["getwidth", [getWidth]],
                ["addGenericHandler", [addGenericHandler]],
                ["removeGenericHandler", [removeGenericHandler]],
                ["setAgentPresence", [setAgentPresence]],
                ["initializeAgentPresenceList", [initializeAgentPresenceList]],
                ["search", [search]],
                ["searchandopenrecords", [searchAndOpenRecords]],
                ["renderSearchPage", [renderSearchPage]],
                ['getAllSessions', [getAllSessions]],
                ['getFocusedSession', [getFocusedSession]],
                ['getSession', [getSession]],
                ["canCreateSession", [canCreateSession]],
                ["createSession", [createSession]],
                ["requestFocusSession", [requestFocusSession]],
                ["getFocusedTab", [getFocusedTab]],
                ["getTabsByTagOrName", [getTabsByTagOrName]],
                ["refreshTab", [refreshTab]],
                ["setSessionTitle", [setSessionTitle]],
                ["setTabTitle", [setTabTitle]],
                ["createTab", [createTab]],
                ["focusTab", [focusTab]],
                ["openkbsearchcontrol", [openKBSearchControl]],
                ["notifyEvent", [notifyEvent]],
                ["insertNotes", [insertNotes]],
                ["logErrorsAndReject", [logErrorsAndReject]],
                ["initLogAnalytics", [raiseInitAnalyticsEvent]],
                ["logAnalyticsEvent", [raiseCustomAnalyticsEvent]],
                ["updateContext", [updateContext]],
                ["openDialog", [openDialog]],
                ["notifyKpiBreach", [notifyKpiBreach]],
                ["notifyNewActivity", [notifyNewActivity]],
                ["updateConversation", [updateConversation]],
                ["debugInformationEvent", [debugInformationEvent]],
                ["onUserActivity", [onUserActivity]],
                ["showGlobalNotification", [showGlobalNotification]],
                ["clearGlobalNotification", [clearGlobalNotification]],
                ["executeFetchQuery", [executeFetchQuery]],
                ["showProgressIndicator", [showProgressIndicator]],
                ["closeProgressIndicator", [closeProgressIndicator]]
            ]);
            const genericEventRegistrations = new Map();
            /**
             * Variable that will store all the info needed for library. There should be no other global variables in the library. Any info that needs to be stored should go into this.
             */
            Internal.state = {};
            let presence = {};
            const listenerWindow = window.parent;
            Internal.cifVersion = "";
            navigationType = "";
            Internal.crmVersion = "";
            Internal.IsPlatformNotificationTimeoutInfra = false;
            Internal.cifPatchVersion = "";
            /**
             * utility func to check whether an object is null or undefined
             */
            /** @internal */
            function isNullOrUndefined(obj) {
                return (obj == null || typeof obj === "undefined");
            }
            Internal.isNullOrUndefined = isNullOrUndefined;
            /**
             * utility func to check whether an object is null or undefined
             */
            /** @internal */
            function isNullOrEmpty(obj) {
                return (obj == null || obj === "");
            }
            Internal.isNullOrEmpty = isNullOrEmpty;
            /**
             * utility func to get provider based on a provider name and message type
             */
            /** @internal */
            function getProviderFromProviderName(providerName, messageType) {
                const providersForMessage = genericEventRegistrations.has(messageType) ? genericEventRegistrations.get(messageType) : [];
                for (const provider of providersForMessage) {
                    if (provider.name === providerName) {
                        return provider;
                    }
                }
                return null;
            }
            /**
             * This method will starting point for CI library and perform setup operations. retrieve the providers from CRM and initialize the Panels, if needed.
             * returns false to disable the button visibility
             */
            function initializeCI(clientType, navigationTypeValue) {
                Internal.initializeTelemetry();
                // set the client implementation.
                Internal.state.client = Internal.setClient(clientType);
                const clientSessionId = Internal.state.client.getClientSessionId().toString();
                Internal.logTelemetryMarker(clientSessionId, CIFramework.ScenarioEvent.InitCIF, CIFramework.ScenarioState.Started, { "error": "checkCIFCapability returned false" }, clientSessionId, CIFramework.ScenarioStatus.Failure);
                if (!Internal.state.client.checkCIFCapability()) {
                    Internal.logTelemetryMarker(clientSessionId, CIFramework.ScenarioEvent.InitCIF, CIFramework.ScenarioState.Completed, null, clientSessionId, CIFramework.ScenarioStatus.Success);
                    return false;
                }
                const flags = CIFramework.Utility.extractParameter(window.top.location.search, "flags");
                if (flags) {
                    const lflags = flags.toLowerCase();
                    if (lflags.includes("navigationtype=multisession")) {
                        navigationType = Internal.SessionType.MultiSession;
                    }
                    else if (lflags.includes("navigationtype=singlesession")) {
                        navigationType = Internal.SessionType.SingleSession;
                    }
                    else {
                        navigationType = navigationTypeValue;
                    }
                }
                else {
                    navigationType = navigationTypeValue;
                }
                Internal.state.sessionManager = Internal.GetSessionManager(clientType);
                let CIFRuntimeInitPromises = Internal.state.sessionManager.initPromises;
                if (!CIFRuntimeInitPromises) {
                    CIFRuntimeInitPromises = [];
                }
                presence = Internal.GetPresenceManager(clientType);
                // Todo - User story - 1083257 - Get the no. of widgets to load based on client & listener window and accordingly set the values.
                Internal.appId = top.location.search.split('appid=')[1].split('&')[0];
                try {
                    const cifAnalyticsLibScript = document.createElement("script");
                    cifAnalyticsLibScript.onload = () => { cifSessionStart(); };
                    cifAnalyticsLibScript.src = Xrm.Page.context.getClientUrl() + "/" + "/WebResources/CRMClients/msdyn_CIFAnalytics_internal_library.js";
                    window.addEventListener("beforeunload", () => {
                        if (Internal.state.isAnalyticsEnabledForAnyProvider) {
                            const mapReturn = new Map().set(Microsoft.CIFramework.Constants.value, new Map().set(Microsoft.CIFramework.Constants.actionName, CIFramework.InternalEventName.CifSessionEnd));
                            raiseSystemAnalyticsEvent(CIFramework.InternalEventName.CifSessionEnd, mapReturn);
                        }
                    });
                    document.getElementsByTagName("body")[0].appendChild(cifAnalyticsLibScript);
                }
                catch (error) {
                    // tslint:disable-next-line:no-console
                    console.log("Failed to load msdyn_CIFAnalytics_internal_library.js");
                }
                setOmnichannelInstallStatus();
                setNotificationTimeoutVersion();
                getCIFVersionInstalled();
                CIFRuntimeInitPromises.push(loadProvider());
                Promise.all(CIFRuntimeInitPromises).then(() => {
                    if (Internal.state.providerManager.getActiveProvider().name === Constants.MsdynOCProviderName) {
                        show3PCDisabledNotification();
                    }
                    Internal.logTelemetryMarker(clientSessionId, CIFramework.ScenarioEvent.InitCIF, CIFramework.ScenarioState.Completed, null, clientSessionId, CIFramework.ScenarioStatus.Success);
                }, (error) => {
                    Internal.logTelemetryMarker(clientSessionId, CIFramework.ScenarioEvent.InitCIF, CIFramework.ScenarioState.Completed, error, clientSessionId, CIFramework.ScenarioStatus.Failure);
                });
                return false;
            }
            Internal.initializeCI = initializeCI;
            function show3PCDisabledNotification() {
                const clientSessionId = Internal.state.client.getClientSessionId().toString();
                checkThirdPartyCookies().then((thirdPartyCookieEnabled) => {
                    let messageText = CIFramework.Utility.getResourceString(Constants.Notification3PcTextPlaceholder);
                    let actionLabel = CIFramework.Utility.getResourceString(Constants.LearnMoreTextPlaceholder);
                    if (!thirdPartyCookieEnabled) {
                        let notificationRequest = {
                            message: messageText,
                            level: 3,
                            type: Internal.GlobalNotificationType.MESSAGE_BAR,
                            showCloseButton: true,
                            actionLabel: actionLabel,
                            actionLink: "https://docs.microsoft.com/en-us/dynamics365/customer-service/system-requirements-omnichannel#system-and-hardware-requirements-of-omnichannel-for-customer-service-with-web-experience"
                        };
                        const telemetryData = new Object();
                        const telemetryParameter = new Object();
                        const startTime = new Date();
                        Internal.state.client.showGlobalNotification(notificationRequest).then((result) => {
                            console.log("Successfully shown notification: " + messageText);
                            Internal.logTelemetryMarker(clientSessionId, CIFramework.ScenarioEvent.CheckThirdPartyCookieAndShowNotification, CIFramework.ScenarioState.Completed, { "Success": "Successfully shown notification" }, clientSessionId, CIFramework.ScenarioStatus.Success);
                        }).catch((error) => {
                            Internal.logTelemetryMarker(clientSessionId, CIFramework.ScenarioEvent.CheckThirdPartyCookieAndShowNotification, CIFramework.ScenarioState.Completed, null, clientSessionId, CIFramework.ScenarioStatus.Failure, null, error);
                        });
                        Internal.logParameterData(telemetryParameter, CIFramework.MessageType.showGlobalNotification, { "notificationOptions": notificationRequest });
                    }
                    else {
                        Internal.logTelemetryMarker(clientSessionId, CIFramework.ScenarioEvent.CheckThirdPartyCookieAndShowNotification, CIFramework.ScenarioState.Completed, { "Success": "Third party cookies are enabled" }, clientSessionId, CIFramework.ScenarioStatus.Success);
                    }
                }).catch((error) => {
                    Internal.logTelemetryMarker(clientSessionId, CIFramework.ScenarioEvent.CheckThirdPartyCookieAndShowNotification, CIFramework.ScenarioState.Completed, null, clientSessionId, CIFramework.ScenarioStatus.Failure, null, error);
                });
            }
            function checkThirdPartyCookies() {
                return new Promise((resolve, reject) => {
                    const url = Xrm.Utility.getGlobalContext().getClientUrl() + Constants.ODataParameterForCDN;
                    fetch(url).then((response) => {
                        return response.json();
                    }).then((data) => {
                        return data.path + Constants.CookieCheckHTMLFile; //html file hosted with conversation control;
                    }).then((urlPath) => {
                        const iframe3pc = document.createElement('iframe');
                        iframe3pc.style.display = 'none';
                        iframe3pc.id = '3pciframe';
                        iframe3pc.src = urlPath;
                        let areThirdPartyCookiesEnabled = false;
                        document.body.appendChild(iframe3pc);
                        window.addEventListener('message', evt => {
                            const messageData = evt.data;
                            if (messageData.eventName === "THIRD_PARTY_COOKIE_CHECK") {
                                areThirdPartyCookiesEnabled = messageData.isEnabled;
                                if (areThirdPartyCookiesEnabled) {
                                    resolve(1);
                                }
                                else {
                                    resolve(0);
                                }
                                document.body.removeChild(iframe3pc);
                            }
                            else {
                                throw 'Received invalid message : ' + JSON.stringify(messageData);
                            }
                        });
                    });
                });
            }
            function setOmnichannelInstallStatus() {
                Xrm.Utility.getEntityMetadata(Constants.liveWorkItemEntity, null).then((result) => {
                    Internal.state.isOmnichannelInstalled = !isNullOrUndefined(result);
                }, (error) => {
                    Internal.state.isOmnichannelInstalled = false;
                    const errorData = Internal.generateErrorObject(error, "setOCInstallStatus - Xrm.Utility.getEntityMetadata - msdyn_ocliveworkitem", Internal.errorTypes.XrmApiError);
                    Internal.logFailure(Internal.appId, true, errorData, CIFramework.MessageType.setOCInstallStatus, Internal.cifVersion);
                });
            }
            function getCIFVersionInstalled() {
                Xrm.WebApi.retrieveMultipleRecords("solution", "?$filter=uniquename eq 'ChannelIntegrationFrameworkV2'").then(function success(result) {
                    Internal.cifVersion = (result && result.entities) ? result.entities[0].version : "";
                    Internal.cifPatchVersion = Internal.cifVersion;
                    // tslint:disable-next-line:no-console
                    console.log("CIF version Installed: " + Internal.cifVersion);
                }, (error) => {
                    // tslint:disable-next-line:no-console
                    console.log("getCIFVersionInstalled: " + error.message);
                    // handle error conditions
                });
            }
            function setNotificationTimeoutVersion() {
                Internal.crmVersion = Xrm.Utility.getGlobalContext().getVersion();
                if (IsNotificationTimeoutInfraPresent()) {
                    Internal.IsPlatformNotificationTimeoutInfra = true;
                }
            }
            function IsNotificationTimeoutInfraPresent() {
                return CIFramework.Utility.compareVersion(Internal.crmVersion, "9.1.0000.5911");
            }
            function loadProvider() {
                const trustedDomains = [];
                const retrieveRecordsPromise = new Promise((resolve, reject) => {
                    Microsoft.AppRuntime.Internal.getChannelProviders().then((result) => {
                        if (result) {
                            // sort channel providers
                            result.sort((a, b) => (Number(a.sortOrder) > Number(b.sortOrder)) ? 1 : -1);
                            // event listener for the onCliCkToAct event
                            listenerWindow.removeEventListener(Constants.CIClickToAct, onClickToAct);
                            listenerWindow.addEventListener(Constants.CIClickToAct, onClickToAct);
                            listenerWindow.removeEventListener(Constants.CISendKBArticle, onSendKBArticle);
                            listenerWindow.addEventListener(Constants.CISendKBArticle, onSendKBArticle);
                            window.top.removeEventListener(Constants.OnKeyDownEvent, onKeyDownEvent);
                            window.top.addEventListener(Constants.OnKeyDownEvent, onKeyDownEvent);
                            window.top.removeEventListener("click", onUserActivityEvent);
                            window.top.removeEventListener("touchstart", onUserActivityEvent);
                            window.top.removeEventListener("mousemove", onUserActivityEvent);
                            window.top.addEventListener("click", onUserActivityEvent);
                            window.top.addEventListener("touchstart", onUserActivityEvent);
                            window.top.addEventListener("mousemove", onUserActivityEvent);
                            Internal.state.client.registerHandler(Constants.ModeChangeHandler, onModeChanged);
                            Internal.state.client.registerHandler(Constants.SizeChangeHandler, onSizeChanged);
                            Internal.state.client.registerHandler(Constants.NavigationHandler, onPageNavigation);
                            Xrm.Navigation.addOnOpenUrl(onOpenUrl);
                            // let telemetryData: any = new Object();
                            // var defaultMode = state.client.getWidgetMode(telemetryData) as number;
                            let first = true;
                            const environmentInfo = [];
                            environmentInfo.orgId = Xrm.Utility.getGlobalContext().organizationSettings.organizationId;
                            environmentInfo.orgName = Xrm.Utility.getGlobalContext().organizationSettings.uniqueName;
                            environmentInfo.crmVersion = Xrm.Utility.getGlobalContext().getVersion();
                            environmentInfo.appId = Internal.appId;
                            for (const channel of result) {
                                trustedDomains.push(channel.channelUrl);
                                if (channel.trustedDomain !== "")
                                    trustedDomains.push(channel.trustedDomain);
                                var provider = new Internal.CIProvider(channel, Internal.state, environmentInfo);
                                provider.isThirdPartyLWICreationOverridden = (CIFramework.Utility.extractParameter((new URL(provider.landingUrl)).search, Constants.skipLwiCreation) === "true");
                                if (first) {
                                    // initialize the session manager
                                    Internal.state.providerManager = new Internal.ProviderManager(Internal.state.client, channel.channelUrl, provider);
                                    first = false;
                                }
                                else {
                                    Internal.state.providerManager.addProvider(channel.channelUrl, provider);
                                }
                                Internal.state.isAnalyticsEnabledForAnyProvider = Internal.state.isAnalyticsEnabledForAnyProvider || channel.enableAnalytics;
                                const usageData = new Internal.UsageTelemetryData(channel.id, channel.name, channel.apiVersion, "loadProvider", channel.sortOrder, Internal.appId, Internal.cifVersion, false, null);
                                Internal.setUsageData(usageData);
                            }
                            const threshold = CIFramework.Utility.extractParameter((Internal.state.providerManager.getActiveProvider().landingUrl), Constants.idleTimeThreshold);
                            if (!isNullOrEmpty(threshold)) {
                                Internal.IdleTimeManager.startTimer(Number(threshold), true);
                            }
                            // initialize and set post message wrapper.
                            Internal.state.messageLibrary = new CIFramework.postMessageNamespace.postMsgWrapper(listenerWindow, Array.from(trustedDomains), apiHandlers);
                            // load the widgets onto client.
                            Internal.state.client.loadWidgets(Internal.state.providerManager.ciProviders).then((widgetLoadStatus) => {
                                const usageData = new Internal.UsageTelemetryData(provider.providerId, provider.name, provider.apiVersion, "loadProvider - loadWidgets", provider.sortOrder, Internal.appId, Internal.cifVersion, false, null);
                                Internal.setUsageData(usageData);
                                resolve();
                            }, (error) => {
                                reject(error);
                            });
                        }
                    }, (error) => {
                        const errorData = Internal.generateErrorObject(error, "loadProvider - Xrm.WebApi.retrieveMultipleRecords - providerRecords", Internal.errorTypes.XrmApiError);
                        Internal.logFailure(Internal.appId, true, errorData, CIFramework.MessageType.loadProvider, Internal.cifVersion);
                    });
                });
                return retrieveRecordsPromise;
            }
            function cifSessionStart() {
                if (Internal.state.isAnalyticsEnabledForAnyProvider) {
                    const mapReturn = new Map().set(Microsoft.CIFramework.Constants.value, new Map().set(Microsoft.CIFramework.Constants.actionName, CIFramework.InternalEventName.CifSessionStart));
                    raiseSystemAnalyticsEvent(CIFramework.InternalEventName.CifSessionStart, mapReturn);
                }
            }
            /**
             * IsConsoleApp API's client side handler that post message library will invoke.
            */
            function isConsoleAppInternal() {
                return navigationType === Internal.SessionType.MultiSession;
            }
            Internal.isConsoleAppInternal = isConsoleAppInternal;
            /**
             * IsConsoleApp API's client side handler that post message library will invoke.
            */
            function isConsoleApp(parameters) {
                let ret;
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.SearchString]);
                if (provider) {
                    ret = isConsoleAppInternal();
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.isConsoleApp, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.isConsoleApp, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return Promise.resolve(new Map().set(Constants.value, ret));
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.isConsoleApp, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.isConsoleApp = isConsoleApp;
            /**
             * setPosition API's client side handler that post message library will invoke.
            */
            function setPosition(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.value]);
                if (provider) {
                    const ret = Internal.state.client.setPanelPosition("setPanelPosition", parameters.get(Constants.value), telemetryData);
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.setPosition, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.setPosition, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return Promise.resolve(new Map().set(Constants.value, ret));
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.setPosition, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.setPosition = setPosition;
            /**
             * getPosition API's client side handler that post message library will invoke.
            */
            function getPosition(provider) {
                const telemetryData = new Object();
                const startTime = new Date();
                const ret = Internal.state.client.getPanelPosition(telemetryData);
                // TODO: pass telemetry correlationId once this API is exposed
                const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.getPosition, telemetryData);
                Internal.setPerfData(perfData);
                return ret;
            }
            Internal.getPosition = getPosition;
            /* Utility function to raise events registered for the framework and get back the response */
            function sendMessage(parameters, messageType, provider, broadcastMessage) {
                const providersList = new Array();
                if (broadcastMessage === false) {
                    if (isNullOrUndefined(provider)) {
                        provider = Internal.state.providerManager.getActiveProvider();
                    }
                    providersList.push(provider);
                }
                else {
                    Internal.state.providerManager.ciProviders.forEach((value, key) => {
                        providersList.push(value);
                    });
                }
                if (providersList.length === 0) {
                    const error = Internal.generateErrorObject(new Map().set("message", "No active provider found"), "sendGenericMessage", Internal.errorTypes.GenericError);
                    return Internal.logAPIFailure(Internal.appId, true, error, messageType + " - sendGenericMessage", Internal.cifVersion, "", "");
                }
                const results = [];
                for (const value of providersList) {
                    const providerPromise = new Promise((resolve, reject) => {
                        value.raiseEvent(parameters, messageType).then((result) => {
                            // tslint:disable-next-line:no-console
                            console.log("AppId: " + Internal.appId + " API: - sendMessage successful " + "CIFVersion: " + Internal.cifVersion +
                                " ProviderId: " + value.providerId + " ProviderName:" + value.name);
                            resolve(result);
                        }, (error) => {
                            const errorData = Internal.generateErrorObject(error, messageType + " - sendMessage", Internal.errorTypes.GenericError);
                            Internal.logAPIFailure(Internal.appId, true, errorData, messageType + " - sendMessage", Internal.cifVersion, value.providerId, value.name);
                            reject(error);
                        });
                    });
                    results.push(providerPromise);
                }
                return Promise.all(results);
            }
            Internal.sendMessage = sendMessage;
            /* Utility function to get the Provider out of the parameters */
            function getProvider(parameters, reqParams) {
                if (!parameters) {
                    const error = {};
                    error.reportTime = new Date().toUTCString();
                    error.errorMsg = "Parameter list cannot be empty";
                    error.errorType = Internal.errorTypes.InvalidParams;
                    error.sourceFunc = "getProvider";
                    return [null, error];
                }
                if (!parameters.get(Constants.originURL)) {
                    const error = {};
                    error.reportTime = new Date().toUTCString();
                    error.errorMsg = "Paramter:url cannot be empty";
                    error.errorType = Internal.errorTypes.InvalidParams;
                    error.sourceFunc = "getProvider";
                    return [null, error];
                }
                if (reqParams) {
                    reqParams.forEach((param) => {
                        if (isNullOrUndefined(parameters.get(param))) {
                            const error = {};
                            error.reportTime = new Date().toUTCString();
                            error.errorMsg = "Parameter: " + param + " cannot be empty";
                            error.errorType = Internal.errorTypes.InvalidParams;
                            error.sourceFunc = "getProvider";
                            return [null, error];
                        }
                    });
                }
                const provider = Internal.state.providerManager.ciProviders.get(parameters.get(Constants.originURL));
                if (provider && provider.providerId) {
                    return [provider, null];
                }
                else {
                    const error = {};
                    error.reportTime = new Date().toUTCString();
                    error.errorMsg = "Associated Provider record not found";
                    error.errorType = Internal.errorTypes.InvalidParams;
                    error.sourceFunc = "getProvider";
                    return [null, error];
                }
            }
            /**
             * getEnvironment API's client side handler that post message library will invoke.
            */
            function getEnvironment(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters); // if there are multiple widgets then we need this to get the value of particular widget
                if (provider) {
                    const data = Internal.state.client.getEnvironment(provider, telemetryData);
                    data.set(Constants.customParams, provider.customParams);
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.getEnvironment, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.getEnvironment, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return Promise.resolve(new Map().set(Constants.value, data));
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.getEnvironment, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.getEnvironment = getEnvironment;
            function isPredefinedMessageType(messageType) {
                return Object.keys(CIFramework.MessageType).indexOf(messageType) >= 0;
            }
            function addGenericHandler(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    const messageType = parameters.get(Constants.eventType);
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.addGenericHandler, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    Internal.logParameterData(telemetryParameter, CIFramework.MessageType.addGenericHandler, { "eventType": parameters.get(Constants.eventType) });
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.addGenericHandler, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    if (!isPredefinedMessageType(messageType)) {
                        if (genericEventRegistrations.has(messageType) && genericEventRegistrations.get(messageType).length > 0) {
                            genericEventRegistrations.get(messageType).push(provider);
                        }
                        else {
                            const list = new Array();
                            list[0] = provider;
                            genericEventRegistrations.set(messageType, list);
                            listenerWindow.addEventListener(messageType, onGenericEvent);
                        }
                    }
                    return Promise.resolve(new Map().set(Constants.value, true));
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.addGenericHandler, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.addGenericHandler = addGenericHandler;
            function removeGenericHandler(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.eventType]);
                if (provider) {
                    const messageType = parameters.get(Constants.eventType);
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.removeGenericHandler, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    Internal.logParameterData(telemetryParameter, CIFramework.MessageType.removeGenericHandler, { "eventType": parameters.get(Constants.eventType) });
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.removeGenericHandler, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    if (!isPredefinedMessageType(messageType)) {
                        if (genericEventRegistrations.has(messageType)) {
                            for (let i = 0; i < genericEventRegistrations.get(messageType).length; i++) {
                                if (genericEventRegistrations.get(messageType)[i] === provider)
                                    genericEventRegistrations.get(messageType).splice(i, 1);
                            }
                        }
                        if (genericEventRegistrations.get(messageType).length === 0) {
                            listenerWindow.removeEventListener(messageType, onGenericEvent); // remove after all providers are removed
                        }
                    }
                    return Promise.resolve(new Map().set(Constants.value, true));
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.removeGenericHandler, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.removeGenericHandler = removeGenericHandler;
            /**
            * The handler will be called for generic event
            * @param event. event.detail will be the event detail containing provider name
            */
            function onGenericEvent(event) {
                onPreGenericEvent(event);
                if (genericEventRegistrations.has(event.type)) {
                    for (let i = 0; i < genericEventRegistrations.get(event.type).length; i++) {
                        sendGenericMessage(Microsoft.CIFramework.Utility.buildMap(event.detail), event.type);
                    }
                }
            }
            /**
             * The handler called by the client for a size-changed event. The client is
             * expected to pass a CustomEvent event object with details of the event
             * This handler will pass the sizeChanged message to the widget as an event
             * resulting in the registered widget-side handler, if any, being invoked
             *
             * @param event. event.detail will be set to a map {"value": width} where 'width'
             * is a number representing the new panel width as passed by the client
             */
            function onSizeChanged(event) {
                if (!Internal.state.client.flapInUse()) {
                    sendMessage(event.detail, CIFramework.MessageType.onSizeChanged, Internal.state.providerManager.getActiveProvider());
                }
            }
            /**
             * The handler called by the client for a mode-changed event. The client is expected
             * to pass a CustomEvent object with details of the event. This handler will pass the
             * modeChanged message to the widget as an event resulting in the registered widget-side
             * handler, if any, being invoked
             *
             * @param event. event.detail will be set to a map {"value": mode} where 'mode'
             * is the numeric value of the current mode as passed by the client
             */
            function onModeChanged(event) {
                sendMessage(event.detail, CIFramework.MessageType.onModeChanged);
            }
            /**
             * The handler called by the client for a page navigation event. The client is expected
             * to pass a CustomEvent object with details of the event. This handler will pass the
             * PageNavigation message to the widget as an event resulting in the registered widget-side
             * handler, if any, being invoked
             *
             * @param event. event.detail will be set to a map {"value": pageURL} where 'pageURL'
             * is the URL of the page being navigated to
             */
            function onPageNavigation(event) {
                sendMessage(event.detail, CIFramework.MessageType.onPageNavigate);
            }
            /** subscriber of OpenUrl event
            * The handler called by the client for a OpenUrl event. The client is expected
            * to pass a eventContext object with details of the event. This handler will pass the
            * OpenUrl message to the widget as an event resulting in the registered widget-side
            * handler, if any, being invoked
            *
           */
            function onOpenUrl(eventContext) {
                if (checkEventContextForNull(eventContext)) {
                    const eventArg = eventContext.getEventArgs();
                    const eventSource = eventContext.getEventSource();
                    const attributes = eventContext.getFormContext().data.entity.attributes;
                    const url = eventArg.url.substr(eventArg.url.search(":") + 1);
                    const eventLogicalName = eventSource.getEntityReference().etn;
                    const attributeName = eventSource.getName();
                    const entityId = eventSource.getEntityReference().id.guid;
                    const recordTitle = eventContext.getFormContext().data.entity.getPrimaryAttributeValue();
                    const format = attributes.getByName(attributeName) ? attributes.getByName(attributeName).getAttrDescriptor().Format : "";
                    var provider = getProviderForOutbound();
                    if (provider != null) {
                        eventArg.preventDefault();
                        const eventDetail = {
                            value: url,
                            name: attributeName,
                            format,
                            entityLogicalName: eventLogicalName,
                            entityId,
                            recordTitle
                        };
                        sendMessage(Microsoft.CIFramework.Utility.buildMap(eventDetail), CIFramework.MessageType.onClickToAct, provider, false);
                    }
                }
                else {
                    // tslint:disable-next-line:no-console
                    console.log("eventContext or one of it's parameter for onOpenUrl event is null.");
                    const error = {};
                    error.reportTime = new Date().toUTCString();
                    error.errorMsg = "eventContext or one of it's parameter for onOpenUrl event is null.";
                    error.errorType = Internal.errorTypes.InvalidParams;
                    Internal.logFailure(Internal.appId, true, error, "onOpenUrl", Internal.cifVersion);
                }
            }
            Internal.onOpenUrl = onOpenUrl;
            function checkEventContextForNull(eventContext) {
                if (!isNullOrUndefined(eventContext)
                    && !isNullOrUndefined(eventContext.getEventArgs())
                    && !isNullOrUndefined(eventContext.getEventArgs().url)
                    && !isNullOrUndefined(eventContext.getEventSource())
                    && !isNullOrUndefined(eventContext.getEventSource().getEntityReference())
                    && !isNullOrUndefined(eventContext.getEventSource().getEntityReference().id)
                    && !isNullOrUndefined(eventContext.getFormContext())
                    && !isNullOrUndefined(eventContext.getFormContext().data)
                    && !isNullOrUndefined(eventContext.getFormContext().data.entity)) {
                    return true;
                }
                return false;
            }
            function getProviderForOutbound() {
                if (!Internal.state.providerManager) {
                    return null;
                }
                var activeProvider = Internal.state.providerManager.getActiveProvider();
                if (activeProvider && activeProvider.clickToAct) {
                    return activeProvider;
                }
                var provider = null;
                var allProviders = new Map([...Internal.state.providerManager.ciProviders.entries()].reverse());
                for (const [key, value] of allProviders.entries()) {
                    if (value.clickToAct) {
                        provider = value;
                        break;
                    }
                }
                return provider;
            }
            /**
            * subscriber of debugInformationEvent event
            */
            function onFetchDebugInfoFromProvider(activeProvider) {
                // tslint:disable-next-line:no-console
                console.log("Debug event : Raise event on active provider to fetch diagnostic data");
                let providerInfo = "";
                return new Promise((resolve, reject) => {
                    sendMessage(Microsoft.CIFramework.Utility.buildMap(event), CIFramework.MessageType.fetchDebugData, activeProvider).then((result) => {
                        providerInfo = isNullOrUndefined(result) ? "No data fetched from provider" : (result);
                        resolve(providerInfo);
                    }, (error) => {
                        reject(JSON.stringify(error));
                    });
                });
            }
            Internal.onFetchDebugInfoFromProvider = onFetchDebugInfoFromProvider;
            /**
        * subscriber of debugInformationEvent event
        */
            function debugInformationEvent() {
                const startTime = new Date();
                const apiName = "debugInformationEvent.FetchDebugInformationEvent";
                Internal.DebugInformationManager.gatherDebugData();
                const timeTaken = Date.now() - startTime.getTime();
                const telemetryData = new Object();
                Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
            }
            Internal.debugInformationEvent = debugInformationEvent;
            function onKeyDownEvent(event) {
                const startTime = new Date();
                const apiName = "onKeyDownEvent.FetchDebugInformationEvent";
                if ((event.shiftKey && event.altKey && event.ctrlKey) && (event.keyCode === 68)) {
                    Internal.DebugInformationManager.gatherDebugData();
                    const timeTaken = Date.now() - startTime.getTime();
                    const telemetryData = new Object();
                    Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                }
                onUserActivityEvent();
            }
            Internal.onKeyDownEvent = onKeyDownEvent;
            /**
             * subscriber of onClickToAct event
            */
            function onClickToAct(event) {
                sendMessage(Microsoft.CIFramework.Utility.buildMap(event.detail), CIFramework.MessageType.onClickToAct, Internal.state.providerManager.getActiveProvider(), false);
            }
            Internal.onClickToAct = onClickToAct;
            /**
             * subscriber of onSendKBArticle event
            */
            function onSendKBArticle(event) {
                sendMessage(Microsoft.CIFramework.Utility.buildMap(event.detail), CIFramework.MessageType.onSendKBArticle, Internal.state.providerManager.getActiveProvider());
            }
            Internal.onSendKBArticle = onSendKBArticle;
            /**
             * method to send a generic message
             */
            function sendGenericMessage(parameters, messageType, broadcastMessage = undefined) {
                let provider;
                // Take the provider name if present in event.detail arg, otherwise take the current active provider
                if (!isNullOrUndefined(parameters) && !isNullOrUndefined(parameters.get("providerName"))) {
                    provider = getProviderFromProviderName(parameters.get("providerName"), messageType);
                }
                else {
                    provider = Internal.state.providerManager.getActiveProvider();
                }
                if (isNullOrUndefined(provider)) {
                    const error = Internal.generateErrorObject(new Map().set("message", 'No active provider found'), "sendGenericMessage", Internal.errorTypes.InvalidParams);
                    return Internal.logAPIFailure(Internal.appId, true, error, messageType + " - sendGenericMessage", Internal.cifVersion, "", parameters.get("providerName"));
                }
                const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, messageType, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                Internal.setAPIUsageTelemetry(paramData);
                return sendMessage(parameters, messageType, provider, broadcastMessage);
            }
            Internal.sendGenericMessage = sendGenericMessage;
            /**
             * subscriber of onSetPresence event
             */
            function onSetPresence(event) {
                const eventMap = Microsoft.CIFramework.Utility.buildMap(event.detail);
                presence.setAgentPresence(eventMap.get("presenceInfo"));
                sendMessage(eventMap, CIFramework.MessageType.onSetPresenceEvent, null, true);
            }
            Internal.onSetPresence = onSetPresence;
            function onUserActivityEvent() {
                Internal.IdleTimeManager.updateTime();
            }
            Internal.onUserActivityEvent = onUserActivityEvent;
            /**
            * subscriber of OnuserActivity event
            */
            function onUserActivity(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.value]);
                if (provider) {
                    Internal.IdleTimeManager.updateTime();
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.onUserActivity, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.onUserActivity, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return Promise.resolve(new Map().set(Constants.value, true));
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.onUserActivity, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.onUserActivity = onUserActivity;
            /**
             * setClickToAct API's client side handler that post message library will invoke.
            */
            function setClickToAct(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.value]);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        return Internal.state.client.updateRecord(Constants.cifProviderLogicalName, provider.providerId, telemetryData, new Map([[Constants.clickToActAttribute, parameters.get(Constants.value)]])).then((result) => {
                            provider.clickToAct = parameters.get(Constants.value);
                            Internal.state.providerManager.ciProviders.set(parameters.get(Constants.originURL), provider);
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.setClickToAct, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.setClickToAct, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(result);
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.setClickToAct, Internal.cifVersion, provider.providerId, provider.name, "", parameters.get(Constants.correlationId));
                            return reject(new Map().set(Constants.value, error));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.setClickToAct, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.setClickToAct = setClickToAct;
            /**
            * API to check ClickToAct is enabled or not
            */
            function getClickToAct(parameters) {
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.getClickToAct, Internal.cifVersion, null, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.getClickToAct, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return Promise.resolve(new Map().set(Constants.value, provider.clickToAct));
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.getClickToAct, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.getClickToAct = getClickToAct;
            /**
             * setMode API's client side handler that post message library will invoke.
            */
            function setMode(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.value]);
                if (provider) {
                    if (isConsoleAppInternal() && provider !== Internal.state.providerManager.getActiveProvider()) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "This operation can be performed from the active provider";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = "setMode";
                        return Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.setMode, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                    }
                    else {
                        Internal.state.client.collapseFlap();
                        const mode = parameters.get(Constants.value);
                        const ret = Internal.state.client.setPanelMode("setPanelMode", mode, telemetryData);
                        const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.setMode, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                        Internal.setPerfData(perfData);
                        Internal.logParameterData(telemetryParameter, CIFramework.MessageType.setMode, { "value": parameters.get(Constants.value) });
                        const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.setMode, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                        Internal.setAPIUsageTelemetry(paramData);
                        return Promise.resolve(new Map().set(Constants.value, ret));
                    }
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.setMode, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.setMode = setMode;
            /**
             * getMode API's client side handler that post message library will invoke.
            */
            function getMode(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters); // if there are multiple widgets then we need this to get the value of particular widget
                if (provider) {
                    // let mode = state.client.getWidgetMode(telemetryData);
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.getMode, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.getMode, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return Promise.resolve(new Map().set(Constants.value, Internal.state.client.getWidgetMode()));
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.getMode, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.getMode = getMode;
            /**
             * setWidth API's client side handler that post message library will invoke.
            */
            function setWidth(parameters) {
                // TODO: if the new width is greater than panel width, what do we do?
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.value]);
                if (provider) {
                    if (isConsoleAppInternal() && provider !== Internal.state.providerManager.getActiveProvider()) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "This operation can be performed from the active provider";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = "setWidth";
                        return Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.setWidth, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                    }
                    else {
                        const ret = Internal.state.client.setWidgetWidth("setWidgetWidth", parameters.get(Constants.value), telemetryData);
                        const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.setWidth, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                        Internal.setPerfData(perfData);
                        Internal.logParameterData(telemetryParameter, CIFramework.MessageType.setWidth, { "value": parameters.get(Constants.value) });
                        const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.setWidth, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                        Internal.setAPIUsageTelemetry(paramData);
                        return Promise.resolve(new Map().set(Constants.value, ret));
                    }
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.setWidth, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.setWidth = setWidth;
            /**
             * getWidth API's client side handler that post message library will invoke.
            */
            function getWidth(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    // let width = state.client.getWidgetWidth(telemetryData);
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.getWidth, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.getWidth, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return Promise.resolve(new Map().set(Constants.value, Number(Internal.state.client.getWidgetWidth())));
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.getWidth, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.getWidth = getWidth;
            /**
             * openKBSearchControl API's client side handler that post message library will invoke.
            */
            function openKBSearchControl(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.SearchString]);
                if (provider) {
                    if (isConsoleAppInternal() && provider !== Internal.state.providerManager.getActiveProvider()) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "This operation can be performed from the active provider";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = "openKBSearchControl";
                        return Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.openKBSearchControl, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                    }
                    else {
                        const ret = Internal.state.client.openKBSearchControl(parameters.get(Constants.SearchString), telemetryData);
                        const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.openKBSearchControl, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                        Internal.setPerfData(perfData);
                        const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.openKBSearchControl, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                        Internal.setAPIUsageTelemetry(paramData);
                        return Promise.resolve(new Map().set(Constants.value, ret));
                    }
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.openKBSearchControl, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.openKBSearchControl = openKBSearchControl;
            function searchAndOpenRecords(parameters) {
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    return doSearch(parameters, false, CIFramework.MessageType.searchAndOpenRecords);
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.searchAndOpenRecords, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.searchAndOpenRecords = searchAndOpenRecords;
            function doSearch(parameters, searchOnly, callerName) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.entityName, Constants.queryParameters]);
                if (provider) {
                    if (isConsoleAppInternal() && provider !== Internal.state.providerManager.getActiveProvider() && searchOnly !== true) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "This operation can be performed from the active provider";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = "doSearch";
                        return Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.doSearch, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                    }
                    else {
                        const searchResult = Internal.state.client.retrieveMultipleAndOpenRecords(provider, parameters.get(Constants.entityName), parameters.get(Constants.queryParameters), searchOnly, telemetryData);
                        const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), callerName ? callerName : CIFramework.MessageType.doSearch, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                        Internal.setPerfData(perfData);
                        Internal.logParameterData(telemetryParameter, CIFramework.MessageType.doSearch, { "searchOnly": searchOnly });
                        const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, callerName ? callerName : CIFramework.MessageType.doSearch, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                        Internal.setAPIUsageTelemetry(paramData);
                        return searchResult;
                    }
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, callerName ? callerName : CIFramework.MessageType.doSearch, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            function search(parameters) {
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    return doSearch(parameters, true, CIFramework.MessageType.search);
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.search, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.search = search;
            function renderSearchPage(parameters, entityName, searchString) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.entityName]);
                if (provider) {
                    if (isConsoleAppInternal() && provider !== Internal.state.providerManager.getActiveProvider()) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "This operation can be performed from the active provider";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = "renderSearchPage";
                        return Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.renderSearchPage, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                    }
                    else {
                        return new Promise((resolve, reject) => {
                            Internal.state.client.renderSearchPage(provider, parameters.get(Constants.entityName), parameters.get(Constants.SearchString)).then((res) => {
                                const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.renderSearchPage, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                                Internal.setPerfData(perfData);
                                Internal.logParameterData(telemetryParameter, CIFramework.MessageType.renderSearchPage, { "entityName": parameters.get(Constants.entityName) });
                                const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.renderSearchPage, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                                Internal.setAPIUsageTelemetry(paramData);
                                return resolve(new Map().set(Constants.value, res));
                            }, (error) => {
                                Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.renderSearchPage, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.correlationId));
                                return reject(new Map().set(Constants.value, error));
                            });
                        });
                    }
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.renderSearchPage, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.renderSearchPage = renderSearchPage;
            function createRecord(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.entityName, Constants.value]);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        Internal.state.client.createRecord(parameters.get(Constants.entityName), null, telemetryData, parameters.get(Constants.value)).then((res) => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.createRecord, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            Internal.logParameterData(telemetryParameter, CIFramework.MessageType.createRecord, { "entityName": parameters.get(Constants.entityName) });
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.createRecord, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(new Map().set(Constants.value, res));
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.createRecord, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.correlationId));
                            return reject(new Map().set(Constants.value, error));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.createRecord, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.createRecord = createRecord;
            function retrieveRecord(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.entityName, Constants.entityId, Constants.queryParameters]);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        Internal.state.client.retrieveRecord(parameters.get(Constants.entityName), parameters.get(Constants.entityId), telemetryData, parameters.get(Constants.queryParameters)).then((res) => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.retrieveRecord, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            Internal.logParameterData(telemetryParameter, CIFramework.MessageType.retrieveRecord, { "entityName": parameters.get(Constants.entityName), "entityId": parameters.get(Constants.entityId) });
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.retrieveRecord, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(new Map().set(Constants.value, res));
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.retrieveRecord, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.correlationId));
                            return reject(new Map().set(Constants.value, error));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.retrieveRecord, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.retrieveRecord = retrieveRecord;
            function updateRecord(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.entityName, Constants.entityId, Constants.value]);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        Internal.state.client.updateRecord(parameters.get(Constants.entityName), parameters.get(Constants.entityId), telemetryData, parameters.get(Constants.value)).then((res) => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.updateRecord, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            Internal.logParameterData(telemetryParameter, CIFramework.MessageType.updateRecord, { "entityName": parameters.get(Constants.entityName), "entityId": parameters.get(Constants.entityId) });
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.updateRecord, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(new Map().set(Constants.value, res));
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.updateRecord, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.correlationId));
                            return reject(new Map().set(Constants.value, error));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.updateRecord, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.updateRecord = updateRecord;
            function updateConversation(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.entityName, Constants.entityId, Constants.value]);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        Internal.state.client.updateRecord(parameters.get(Constants.entityName), parameters.get(Constants.entityId), telemetryData, parameters.get(Constants.value)).then((res) => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.updateConversation, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            Internal.logParameterData(telemetryParameter, CIFramework.MessageType.updateConversation, { "entityName": parameters.get(Constants.entityName), "entityId": parameters.get(Constants.entityId) });
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.updateConversation, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(new Map().set(Constants.value, res));
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.updateConversation, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.correlationId));
                            return reject(new Map().set(Constants.value, error));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.updateConversation, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.updateConversation = updateConversation;
            function deleteRecord(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.entityName, Constants.entityId]);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        Internal.state.client.deleteRecord(parameters.get(Constants.entityName), parameters.get(Constants.entityId), telemetryData).then((res) => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.deleteRecord, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            Internal.logParameterData(telemetryParameter, CIFramework.MessageType.deleteRecord, { "entityName": parameters.get(Constants.entityName), "entityId": parameters.get(Constants.entityId) });
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.deleteRecord, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(new Map().set(Constants.value, res));
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.deleteRecord, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.correlationId));
                            return reject(new Map().set(Constants.value, error));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.deleteRecord, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.deleteRecord = deleteRecord;
            // Time taken by openForm is dependent on User Action. Hence, not logging this in Telemetry
            function openForm(parameters) {
                const [provider, errorData] = getProvider(parameters, [Constants.entityFormOptions, Constants.entityFormParameters]);
                const telemetryParameter = new Object();
                if (provider) {
                    if (isConsoleAppInternal() && provider !== Internal.state.providerManager.getActiveProvider()) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "This operation can be performed from the active provider";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = "openForm";
                        return Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.openForm, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                    }
                    else {
                        const res = Internal.state.client.openForm(provider, parameters.get(Constants.entityFormOptions), parameters.get(Constants.entityFormParameters));
                        Internal.logParameterData(telemetryParameter, CIFramework.MessageType.openForm, { "entityFormOptions": parameters.get(Constants.entityFormOptions) });
                        const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.openForm, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                        Internal.setAPIUsageTelemetry(paramData);
                        return res;
                    }
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.openForm, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.openForm = openForm;
            function openDialog(parameters) {
                const [provider, errorData] = getProvider(parameters, [Constants.dialogStrings, Constants.dialogOptions]);
                const telemetryParameter = new Object();
                if (provider) {
                    if (isConsoleAppInternal() && provider !== Internal.state.providerManager.getActiveProvider()) {
                        const error = {};
                        error.reportTime = new Date().toUTCString();
                        error.errorMsg = "This operation can be performed from the active provider";
                        error.errorType = Internal.errorTypes.GenericError;
                        error.sourceFunc = "openDialog";
                        return Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.openDialog, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                    }
                    else {
                        const res = Internal.state.client.openDialog(parameters.get(Constants.dialogStrings), parameters.get(Constants.dialogOptions));
                        Internal.logParameterData(telemetryParameter, CIFramework.MessageType.openDialog, { "dialogStrings": parameters.get(Constants.dialogStrings), "dialogOptions": parameters.get(Constants.dialogOptions) });
                        const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.openDialog, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                        Internal.setAPIUsageTelemetry(paramData);
                        return res;
                    }
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.openDialog, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.openDialog = openDialog;
            function showGlobalNotification(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    const notificationID = Internal.state.client.showGlobalNotification(parameters.get(Constants.notificationOptions));
                    Internal.logParameterData(telemetryParameter, CIFramework.MessageType.showGlobalNotification, { "notificationOptions": parameters.get(Constants.notificationOptions) });
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.showGlobalNotification, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return notificationID;
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.showGlobalNotification, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.showGlobalNotification = showGlobalNotification;
            function clearGlobalNotification(parameters) {
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        Internal.state.client.clearGlobalNotification(parameters.get(Constants.notificationId)).then((res) => {
                            return resolve(new Map().set(Constants.value, res));
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.clearGlobalNotification, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.notificationId));
                            return reject(new Map().set(Constants.value, error));
                        });
                    });
                }
                else {
                    return Internal.logFailure(Internal.appId, true, errorData, CIFramework.MessageType.clearGlobalNotification, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.clearGlobalNotification = clearGlobalNotification;
            function refreshForm(parameters) {
                const [provider, errorData] = getProvider(parameters, [Constants.Save]);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        Internal.state.client.refreshForm(parameters.get(Constants.Save)).then((res) => {
                            return resolve(new Map().set(Constants.value, res));
                        }, (error) => {
                            return reject(new Map().set(Constants.value, error));
                        });
                    });
                }
                else {
                    return Internal.logFailure(Internal.appId, true, errorData, CIFramework.MessageType.refreshForm, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.refreshForm = refreshForm;
            function getEntityMetadata(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.entityName]);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        Internal.state.client.getEntityMetadata(parameters.get(Constants.entityName), parameters.get(Constants.Attributes)).then((res) => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.getEntityMetadata, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            Internal.logParameterData(telemetryParameter, CIFramework.MessageType.getEntityMetadata, { "entityName": parameters.get(Constants.entityName), "Attributes": parameters.get(Constants.Attributes) });
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.getEntityMetadata, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(new Map().set(Constants.value, res));
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.getEntityMetadata, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.correlationId));
                            return reject(new Map().set(Constants.value, error));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.getEntityMetadata, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.getEntityMetadata = getEntityMetadata;
            /**
             * API to invoke toast popup widget
             *
             * @param value. It's a string which contains header,body of the popup
             *
            */
            function notifyEvent(notificationObject) {
                const correlationId = notificationObject.get(Constants.correlationId);
                const customParameters = notificationObject.get(Constants.customParamsKey); // customParameters include clientSessionId
                const telemetryData = new Object();
                const startTime = new Date();
                const clientSessionId = Internal.state.client.getClientSessionId().toString();
                Internal.logAPIInternalInfo(Internal.appId, false, null, CIFramework.MessageType.notifyEvent + "Invoking NotifyEvent", Internal.cifVersion, "", "", customParameters, correlationId);
                const telemetryContext = (customParameters && !isNullOrUndefined(customParameters.telemetryContext)) ? customParameters.telemetryContext : null;
                Internal.logTelemetryMarker(correlationId, CIFramework.ScenarioEvent.NotificationReceived, CIFramework.ScenarioState.Started, customParameters, clientSessionId, null, telemetryContext);
                const [provider, errorData] = getProvider(notificationObject, [Constants.value]);
                if (provider) {
                    Internal.logAPIInternalInfo(Internal.appId, false, null, CIFramework.MessageType.notifyEvent + "Processed getProvider", Internal.cifVersion, "", provider.name, customParameters, correlationId);
                    raiseSystemAnalyticsEvent(CIFramework.InternalEventName.NotificationReceived, notificationObject);
                    return new Promise((resolve, reject) => {
                        if (!isNullOrUndefined(notificationObject.get(Constants.templateParameters))) {
                            notificationObject.get(Constants.templateParameters).originURL = notificationObject.get(Constants.originURL);
                        }
                        Internal.logAPIInternalInfo(Internal.appId, false, null, CIFramework.MessageType.notifyEvent + "Invoking resolveTemplateUniqueName", Internal.cifVersion, "", provider.name, customParameters, correlationId);
                        // tslint:disable-next-line:only-arrow-functions
                        Internal.TemplateManager.resolveTemplateUniqueName(provider, "Notification" /* Notification */, notificationObject.get(Constants.templateName)).then(function (templateName) {
                            Internal.logAPIInternalInfo(Internal.appId, false, null, CIFramework.MessageType.notifyEvent + "Processed resolveTemplateUniqueName", Internal.cifVersion, "", provider.name, customParameters, correlationId);
                            const notificationInputs = {
                                "templateName": templateName,
                                "correlationId": notificationObject.get(Constants.correlationId),
                                "notificationContext": notificationObject.get(Constants.templateParameters) ? Microsoft.CIFramework.Utility.buildMap(notificationObject.get(Constants.templateParameters)) : null,
                                "cancellationToken": notificationObject.get(Constants.cancellationToken)
                            };
                            if (isNullOrUndefined(notificationInputs.templateName)) {
                                Internal.logAPIInternalInfo(Internal.appId, false, null, CIFramework.MessageType.notifyEvent + "Template Name Null, showing toast notification", Internal.cifVersion, "", provider.name, customParameters, correlationId);
                                return Internal.ToastNotificationManager.showToastNotification(notificationObject);
                            }
                            else {
                                Internal.logAPIInternalInfo(Internal.appId, false, null, CIFramework.MessageType.notifyEvent + "Invoking Microsoft.AppRuntime.Notification.showNotification", Internal.cifVersion, "", provider.name, customParameters, correlationId);
                                // let panelWidth = state.client.getWidgetWidth();
                                Microsoft.AppRuntime.Notification.showNotification(notificationInputs).then((res) => {
                                    Internal.logAPIInternalInfo(Internal.appId, false, null, CIFramework.MessageType.notifyEvent + "Processed Microsoft.AppRuntime.Notification.showNotification", Internal.cifVersion, "", provider.name, customParameters, correlationId);
                                    raiseAnalyticsEventForNotificationResponse(res, notificationObject);
                                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.notifyEvent, Internal.cifVersion, telemetryData, correlationId);
                                    Internal.setPerfData(perfData);
                                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.notifyEvent, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, customParameters, correlationId);
                                    Internal.setAPIUsageTelemetry(paramData);
                                    Internal.logTelemetryMarker(correlationId, CIFramework.ScenarioEvent.NotificationReceived, CIFramework.ScenarioState.Completed, customParameters, clientSessionId, CIFramework.ScenarioStatus.Success, telemetryContext);
                                    return resolve(new Map().set(Constants.value, Microsoft.CIFramework.Utility.buildMap(res)));
                                }, (error) => {
                                    Internal.logTelemetryMarker(correlationId, CIFramework.ScenarioEvent.NotificationReceived, CIFramework.ScenarioState.Completed, customParameters, clientSessionId, CIFramework.ScenarioStatus.Failure, telemetryContext, error);
                                    Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.notifyEvent, Internal.cifVersion, provider.providerId, provider.name, customParameters, correlationId);
                                    return reject(Microsoft.CIFramework.Utility.createErrorMap(error.errorMsg, CIFramework.MessageType.notifyEvent));
                                });
                            }
                        }.bind(this), (error) => {
                            Internal.logTelemetryMarker(correlationId, CIFramework.ScenarioEvent.NotificationReceived, CIFramework.ScenarioState.Completed, customParameters, clientSessionId, CIFramework.ScenarioStatus.Failure, telemetryContext, error);
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.notifyEvent, Internal.cifVersion, provider.providerId, provider.name, customParameters, correlationId);
                            return reject(Microsoft.CIFramework.Utility.createErrorMap(error.errorMsg, CIFramework.MessageType.notifyEvent));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.notifyEvent, Internal.cifVersion, "", "", "", correlationId);
                }
            }
            Internal.notifyEvent = notifyEvent;
            function insertNotes(notesDetails) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(notesDetails, [Constants.value]);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        const width = Internal.state.client.expandFlap(Internal.intermediateSaveNotes);
                        if (!width) {
                            return reject(new Map().set(Constants.value, "Flap already expanded").set(Constants.ErrorCode, CIFramework.ErrorCode.Notes_Flap_Already_Expanded));
                        }
                        Internal.insertNotesClient(notesDetails).then((res) => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.insertNotes, Internal.cifVersion, telemetryData, notesDetails.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.insertNotes, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", notesDetails.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            Internal.state.client.collapseFlap();
                            return resolve(res);
                        }, (error) => {
                            Internal.state.client.collapseFlap();
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.insertNotes, Internal.cifVersion, provider.providerId, provider.name, "", notesDetails.get(Constants.correlationId));
                            return reject(new Map().set(Constants.value, error));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.insertNotes, Internal.cifVersion, "", "", "", notesDetails.get(Constants.correlationId));
                }
            }
            Internal.insertNotes = insertNotes;
            function setAgentPresence(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const correlationId = parameters.get(Constants.correlationId);
                telemetryData.correlationId = correlationId;
                const presenceInfo = parameters.get(Constants.presenceInfo);
                const clientSessionId = Internal.state.client.getClientSessionId().toString();
                Internal.logTelemetryMarker(correlationId, CIFramework.ScenarioEvent.SetAgentPresence, CIFramework.ScenarioState.Started, { "presenceInfo": presenceInfo }, clientSessionId);
                const [provider, errorData] = getProvider(parameters, [Constants.entityName]);
                if (provider) {
                    const agentPresenceStatus = presence.setAgentPresence(JSON.parse(presenceInfo), telemetryData);
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.setAgentPresence, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    Internal.logParameterData(telemetryParameter, CIFramework.MessageType.setAgentPresence, { "presenceInfo": presenceInfo });
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.setAgentPresence, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    Internal.logTelemetryMarker(correlationId, CIFramework.ScenarioEvent.SetAgentPresence, CIFramework.ScenarioState.Completed, { "presenceInfo": presenceInfo, "agentPresenceStatus": agentPresenceStatus }, clientSessionId, CIFramework.ScenarioStatus.Success);
                    return Promise.resolve(new Map().set(Constants.value, agentPresenceStatus));
                }
                else {
                    Internal.logTelemetryMarker(correlationId, CIFramework.ScenarioEvent.SetAgentPresence, CIFramework.ScenarioState.Completed, { "presenceInfo": presenceInfo, "errorData": errorData }, clientSessionId, CIFramework.ScenarioStatus.Failure);
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.setAgentPresence, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.setAgentPresence = setAgentPresence;
            function initializeAgentPresenceList(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const correlationId = parameters.get(Constants.correlationId);
                telemetryData.correlationId = correlationId;
                const presenceList = parameters.get(Constants.presenceList);
                const clientSessionId = Internal.state.client.getClientSessionId().toString();
                Internal.logTelemetryMarker(correlationId, CIFramework.ScenarioEvent.InitAgentPresenceList, CIFramework.ScenarioState.Started, { "presenceList": presenceList }, clientSessionId);
                const [provider, errorData] = getProvider(parameters, [Constants.entityName]);
                if (provider) {
                    const presenceListDivStatus = presence.initializeAgentPresenceList(JSON.parse(presenceList), telemetryData);
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.initializeAgentPresenceList, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    Internal.logParameterData(telemetryParameter, CIFramework.MessageType.initializeAgentPresenceList, { "presenceList": presenceList });
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.initializeAgentPresenceList, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    Internal.logTelemetryMarker(correlationId, CIFramework.ScenarioEvent.InitAgentPresenceList, CIFramework.ScenarioState.Completed, { "presenceList": presenceList, "presenceListDivStatus": presenceListDivStatus }, clientSessionId, CIFramework.ScenarioStatus.Success);
                    return Promise.resolve(new Map().set(Constants.value, presenceListDivStatus));
                }
                else {
                    Internal.logTelemetryMarker(correlationId, CIFramework.ScenarioEvent.InitAgentPresenceList, CIFramework.ScenarioState.Completed, { "presenceList": presenceList, "errorData": errorData }, clientSessionId, CIFramework.ScenarioStatus.Failure);
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.initializeAgentPresenceList, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.initializeAgentPresenceList = initializeAgentPresenceList;
            function getAllSessions(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters, [Constants.entityName]);
                if (provider) {
                    const sessionIds = provider.getAllSessions();
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.getAllSessions, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.getAllSessions, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return Promise.resolve(new Map().set(Constants.value, sessionIds));
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.getAllSessions, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.getAllSessions = getAllSessions;
            function getFocusedSession(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    const sessionId = provider.getFocusedSession(telemetryData);
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.getFocusedSession, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.getFocusedSession, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return Promise.resolve(new Map().set(Constants.value, sessionId));
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.getFocusedSession, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.getFocusedSession = getFocusedSession;
            function getSession(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        provider.getSession(parameters.get(Constants.sessionId)).then((session) => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.getSession, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            Internal.logParameterData(telemetryParameter, CIFramework.MessageType.getSession, { "sessionId": parameters.get(Constants.sessionId) });
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.getSession, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(new Map().set(Constants.value, session));
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.getSession, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.correlationId));
                            return reject(Microsoft.CIFramework.Utility.createErrorMap(error.errorMsg, CIFramework.MessageType.getSession));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.getSession, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.getSession = getSession;
            function canCreateSession(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    Internal.logAPIInternalInfo(Internal.appId, false, null, CIFramework.MessageType.canCreateSession + "Processing canCreateSession", Internal.cifVersion, "", provider.name, "", parameters.get(Constants.correlationId));
                    const canCreate = provider.canCreateSession(telemetryData);
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.canCreateSession, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.canCreateSession, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return Promise.resolve(new Map().set(Constants.value, canCreate));
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.canCreateSession, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.canCreateSession = canCreateSession;
            function createSession(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    Internal.logAPIInternalInfo(Internal.appId, false, null, CIFramework.MessageType.createSession + "Processing createSession", Internal.cifVersion, "", provider.name, "", parameters.get(Constants.correlationId));
                    return new Promise((resolve, reject) => {
                        provider.createSession(parameters.get(Constants.input), parameters.get(Constants.context), parameters.get(Constants.customerName), telemetryData, Internal.appId, Internal.cifVersion, parameters.get(Constants.correlationId)).then((sessionId) => {
                            raiseSystemAnalyticsEvent(CIFramework.InternalEventName.SessionStarted, parameters, new Map().set(CIFramework.AnalyticsConstants.clientSessionId, sessionId));
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.createSession, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.createSession, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(new Map().set(Constants.value, sessionId));
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.createSession, Internal.cifVersion, provider.providerId, provider.name, "", parameters.get(Constants.correlationId));
                            return reject(Microsoft.CIFramework.Utility.createErrorMap(error.errorMsg, CIFramework.MessageType.createSession));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.createSession, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.createSession = createSession;
            function setSessionTitle(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        provider.setSessionTitle(parameters.get(Constants.input)).then((result) => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.setSessionTitle, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            const usageData = new Internal.UsageTelemetryData(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.setSessionTitle, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                            Internal.setUsageData(usageData);
                            return resolve(new Map().set(Constants.value, result));
                        }, (errorsData) => {
                            Internal.logFailure(Internal.appId, true, errorsData, CIFramework.MessageType.setSessionTitle, Internal.cifVersion, provider.providerId, provider.name, "", parameters.get(Constants.correlationId));
                            return reject(Microsoft.CIFramework.Utility.createErrorMap(errorsData.errorMsg, CIFramework.MessageType.setSessionTitle));
                        });
                    });
                }
                else {
                    return Internal.logFailure(Internal.appId, true, errorData, CIFramework.MessageType.setSessionTitle, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.setSessionTitle = setSessionTitle;
            function setTabTitle(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        provider.setTabTitle(parameters.get(Constants.tabId), parameters.get(Constants.input)).then((result) => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.setTabTitle, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            const usageData = new Internal.UsageTelemetryData(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.setTabTitle, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                            Internal.setUsageData(usageData);
                            return resolve(new Map().set(Constants.value, result));
                        }, (errorsData) => {
                            Internal.logFailure(Internal.appId, true, errorsData, CIFramework.MessageType.setTabTitle, Internal.cifVersion, provider.providerId, provider.name, "", parameters.get(Constants.correlationId));
                            return reject(Microsoft.CIFramework.Utility.createErrorMap(errorsData.errorMsg, CIFramework.MessageType.setTabTitle));
                        });
                    });
                }
                else {
                    return Internal.logFailure(Internal.appId, true, errorData, CIFramework.MessageType.setTabTitle, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.setTabTitle = setTabTitle;
            function requestFocusSession(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        provider.requestFocusSession(parameters.get(Constants.sessionId), parameters.get(Constants.messagesCount), telemetryData).then(() => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.requestFocusSession, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            Internal.logParameterData(telemetryParameter, CIFramework.MessageType.requestFocusSession, { "sessionId": parameters.get(Constants.sessionId) });
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.requestFocusSession, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(new Map());
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.requestFocusSession, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.correlationId));
                            return reject(Microsoft.CIFramework.Utility.createErrorMap(error.errorMsg, CIFramework.MessageType.requestFocusSession));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.requestFocusSession, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.requestFocusSession = requestFocusSession;
            function notifyKpiBreach(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        provider.notifyKpiBreach(parameters.get(Constants.sessionId), parameters.get(Constants.resetKpiBreach), parameters.get(Constants.kpiBreachDetails), telemetryData).then(() => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.notifyKpiBreach, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            Internal.logParameterData(telemetryParameter, CIFramework.MessageType.notifyKpiBreach, { "sessionId": parameters.get(Constants.sessionId) });
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.notifyKpiBreach, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(new Map());
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.notifyKpiBreach, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.correlationId));
                            return reject(Microsoft.CIFramework.Utility.createErrorMap(error.errorMsg, CIFramework.MessageType.notifyKpiBreach));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.notifyKpiBreach, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.notifyKpiBreach = notifyKpiBreach;
            function notifyNewActivity(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        provider.notifyNewActivity(parameters.get(Constants.sessionId), parameters.get(Constants.messagesCount), parameters.get(Constants.shouldReset), telemetryData).then(() => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.notifyNewActivity, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            Internal.logParameterData(telemetryParameter, CIFramework.MessageType.notifyNewActivity, { "sessionId": parameters.get(Constants.sessionId) });
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.notifyNewActivity, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(new Map());
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.notifyNewActivity, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.correlationId));
                            return reject(Microsoft.CIFramework.Utility.createErrorMap(error.errorMsg, CIFramework.MessageType.notifyNewActivity));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.notifyNewActivity, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.notifyNewActivity = notifyNewActivity;
            function getFocusedTab(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    const tabId = provider.getFocusedTab(telemetryData);
                    const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.getFocusedTab, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                    Internal.setPerfData(perfData);
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.getFocusedTab, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return Promise.resolve(new Map().set(Constants.value, tabId));
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.getFocusedTab, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.getFocusedTab = getFocusedTab;
            function getTabsByTagOrName(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        provider.getTabsByTagOrName(parameters.get(Constants.nameParameter), parameters.get(Constants.templateTag)).then((tabIds) => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.getTabsByTagOrName, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            Internal.logParameterData(telemetryParameter, CIFramework.MessageType.getTabsByTagOrName, { "input": parameters.get(Constants.templateTag) });
                            const usageData = new Internal.UsageTelemetryData(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.getTabsByTagOrName, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                            Internal.setUsageData(usageData);
                            return resolve(new Map().set(Constants.value, tabIds));
                        }, (errorsData) => {
                            Internal.logFailure(Internal.appId, true, errorsData, CIFramework.MessageType.getTabsByTagOrName, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.correlationId));
                            return reject(Microsoft.CIFramework.Utility.createErrorMap(errorsData.errorMsg, CIFramework.MessageType.getTabsByTagOrName));
                        });
                    });
                }
                else {
                    return Internal.logFailure(Internal.appId, true, errorData, CIFramework.MessageType.getTabsByTagOrName, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.getTabsByTagOrName = getTabsByTagOrName;
            function refreshTab(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        provider.refreshTab(parameters.get(Constants.tabId)).then(() => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.refreshTab, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            Internal.logParameterData(telemetryParameter, CIFramework.MessageType.refreshTab, { "tabId": parameters.get(Constants.tabId) });
                            const usageData = new Internal.UsageTelemetryData(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.refreshTab, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                            Internal.setUsageData(usageData);
                            return resolve(new Map());
                        }, (errorsData) => {
                            Internal.logFailure(Internal.appId, true, errorsData, CIFramework.MessageType.refreshTab, Internal.cifVersion, provider.providerId, provider.name, telemetryParameter, parameters.get(Constants.correlationId));
                            return reject(Microsoft.CIFramework.Utility.createErrorMap(errorsData.errorMsg, CIFramework.MessageType.refreshTab));
                        });
                    });
                }
                else {
                    return Internal.logFailure(Internal.appId, true, errorData, CIFramework.MessageType.refreshTab, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.refreshTab = refreshTab;
            function createTab(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        provider.createTab(parameters.get(Constants.input), telemetryData, Internal.appId, Internal.cifVersion, parameters.get(Constants.correlationId)).then((tabId) => {
                            raiseSystemAnalyticsEvent(CIFramework.InternalEventName.NewTabOpened, parameters, new Map().set(Constants.tabId, tabId));
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.createTab, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.createTab, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(new Map().set(Constants.value, tabId));
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.createTab, Internal.cifVersion, provider.providerId, provider.name, "", parameters.get(Constants.correlationId));
                            return reject(Microsoft.CIFramework.Utility.createErrorMap(error.errorMsg, CIFramework.MessageType.createTab));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.createTab, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.createTab = createTab;
            function focusTab(parameters) {
                const telemetryData = new Object();
                const startTime = new Date();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    return new Promise((resolve, reject) => {
                        provider.focusTab(parameters.get(Constants.tabId), telemetryData).then(() => {
                            const perfData = new Internal.PerfTelemetryData(provider, startTime, Date.now() - startTime.getTime(), CIFramework.MessageType.focusTab, Internal.cifVersion, telemetryData, parameters.get(Constants.correlationId));
                            Internal.setPerfData(perfData);
                            const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.focusTab, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                            Internal.setAPIUsageTelemetry(paramData);
                            return resolve(new Map());
                        }, (error) => {
                            Internal.logAPIFailure(Internal.appId, true, error, CIFramework.MessageType.focusTab, Internal.cifVersion, provider.providerId, provider.name, "", parameters.get(Constants.correlationId));
                            return reject(Microsoft.CIFramework.Utility.createErrorMap(error.errorMsg, CIFramework.MessageType.focusTab));
                        });
                    });
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.focusTab, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
            }
            Internal.focusTab = focusTab;
            function addToCECContext(input) {
                if (!isNullOrUndefined(input)) {
                    const contextPromise = Microsoft.AppRuntime.Sessions.getFocusedSession().getContext();
                    contextPromise.then(context => {
                        // tslint:disable-next-line:forin
                        for (const key in input) {
                            context.set(key, input[key]);
                        }
                    });
                }
            }
            function removeFromCECContext(input) {
                if (!isNullOrUndefined(input)) {
                    const contextPromise = Microsoft.AppRuntime.Sessions.getFocusedSession().getContext();
                    contextPromise.then(context => {
                        // tslint:disable-next-line:forin
                        for (const key in input) {
                            context.set(input[key], null); // set the values to null in Context (runtimeContext)
                        }
                    });
                }
            }
            function updateContext(parameters) {
                let sessionId;
                if (parameters.get(Constants.sessionId)) {
                    sessionId = parameters.get(Constants.sessionId);
                }
                else {
                    sessionId = Internal.state.sessionManager.getFocusedSession();
                }
                const [provider, errorData] = getProvider(parameters);
                if (provider && provider.sessions.has(sessionId)) {
                    return new Promise((resolve, reject) => {
                        if (Internal.state.sessionManager.sessions.has(sessionId)) {
                            if (parameters.get(Constants.isDelete)) {
                                removeFromCECContext(parameters.get(Constants.input));
                            }
                            else {
                                addToCECContext(parameters.get(Constants.input));
                            }
                            resolve(new Map().set(Constants.value, Internal.state.sessionManager.sessions.get(sessionId).templateParams));
                        }
                        else {
                            reject(Microsoft.CIFramework.Utility.createErrorMap("Please provide valid session id", CIFramework.MessageType.updateContext));
                        }
                    });
                }
                else {
                    return Promise.reject(Microsoft.CIFramework.Utility.createErrorMap("Please provide valid session id", CIFramework.MessageType.updateContext));
                }
            }
            Internal.updateContext = updateContext;
            function logErrorsAndReject(parameters) {
                const error = {};
                error.reportTime = new Date().toUTCString();
                error.errorMsg = parameters.get(Constants.errorMessage);
                error.errorType = Internal.errorTypes.InvalidParams;
                error.sourceFunc = parameters.get(Constants.functionName);
                Internal.logAPIInternalInfo(Internal.appId, true, error, CIFramework.MessageType.logErrorsAndReject, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                return Promise.resolve();
            }
            Internal.logErrorsAndReject = logErrorsAndReject;
            /**
             * InitLogAnalyticsEvent handler that post message library will invoke.
            */
            function raiseInitAnalyticsEvent(parameters) {
                parameters.set(CIFramework.AnalyticsConstants.telemetryApiName, CIFramework.AnalyticsConstants.telemetryInitApiName);
                return new Promise((resolve, reject) => {
                    if (raiseAnalyticsEventInternal(CIFramework.AnalyticsConstants.initAnalyticsPlatformEventName, parameters)) {
                        resolve(new Map().set(Constants.value, "Success"));
                    }
                    else {
                        reject(new Map().set(Constants.value, "Failure"));
                    }
                });
            }
            Internal.raiseInitAnalyticsEvent = raiseInitAnalyticsEvent;
            /**
             * LogAnalyticsEvent handler that post message library will invoke.
            */
            function raiseSystemAnalyticsEvent(eventName, parameters, additionalParams) {
                const correlationId = parameters.get(Constants.correlationId);
                Internal.logAPIInternalInfo(Internal.appId, false, null, eventName + "Processing raiseSystemAnalyticsEvent", Internal.cifVersion, "", "", "", correlationId);
                if (!isNullOrUndefined(additionalParams)) {
                    additionalParams.forEach((value, key) => parameters.set(key, value));
                }
                parameters.set(CIFramework.AnalyticsConstants.telemetryApiName, CIFramework.AnalyticsConstants.telemetryLogSystemEventApiName);
                if (parameters.get(CIFramework.AnalyticsConstants.analyticsEventType) !== CIFramework.EventType.CustomEvent) {
                    parameters.set(CIFramework.AnalyticsConstants.analyticsEventType, CIFramework.EventType.SystemEvent);
                }
                const sessionId = Internal.state.sessionManager.getFocusedSession();
                const eventNameStr = CIFramework.InternalEventName[eventName];
                parameters.set(CIFramework.AnalyticsConstants.analyticsEventName, eventNameStr).set(CIFramework.AnalyticsConstants.focussedSession, sessionId);
                const ret = raiseAnalyticsEventInternal(CIFramework.AnalyticsConstants.logAnalyticsPlatformEventName, parameters);
                Internal.logAPIInternalInfo(Internal.appId, false, null, eventName + "Processed raiseSystemAnalyticsEvent", Internal.cifVersion, "", "", "", correlationId);
                return Promise.resolve(new Map().set(Constants.value, ret));
            }
            Internal.raiseSystemAnalyticsEvent = raiseSystemAnalyticsEvent;
            /**
             * LogAnalyticsEvent handler that post message library will invoke.
            */
            function raiseCustomAnalyticsEvent(parameters) {
                const sessionId = Internal.state.sessionManager.getFocusedSession();
                parameters.set(CIFramework.AnalyticsConstants.focussedSession, sessionId);
                parameters.set(CIFramework.AnalyticsConstants.telemetryApiName, CIFramework.AnalyticsConstants.telemetryLogCustomEventApiName);
                return new Promise((resolve, reject) => {
                    if (raiseAnalyticsEventInternal(CIFramework.AnalyticsConstants.logAnalyticsPlatformEventName, parameters)) {
                        resolve(new Map().set(Constants.value, "Success"));
                    }
                    else {
                        reject(new Map().set(Constants.value, "Failure"));
                    }
                });
            }
            Internal.raiseCustomAnalyticsEvent = raiseCustomAnalyticsEvent;
            /**
             * get sessionid based on raised event.
             */
            function getEventBasedSessionId(parameters) {
                const sessionId = Internal.state.sessionManager.getFocusedSession();
                const eventName = parameters.get(CIFramework.AnalyticsConstants.analyticsEventName);
                switch (eventName) {
                    case CIFramework.AnalyticsConstants.sessionStarted:
                        return parameters.get(CIFramework.AnalyticsConstants.focussedSession);
                    case CIFramework.AnalyticsConstants.SessionFocusOut:
                        return parameters.get(Constants.previousSessionId);
                    case CIFramework.AnalyticsConstants.SessionFocusIn:
                        return parameters.get(Constants.newSessionId);
                    case CIFramework.AnalyticsConstants.sessionClosed:
                        return parameters.get(Constants.sessionId);
                    case CIFramework.AnalyticsConstants.cifSessionStart:
                    case CIFramework.AnalyticsConstants.cifSessionEnd:
                        return parameters.get(Constants.defaultSessionId);
                    case CIFramework.AnalyticsConstants.notificationReceived:
                    case CIFramework.AnalyticsConstants.notificationAccepted:
                    case CIFramework.AnalyticsConstants.notificationRejected:
                    case CIFramework.AnalyticsConstants.notificationTimedOut:
                        return sessionId;
                    default:
                        return sessionId;
                }
            }
            /**
                     * get correlationId based on notification event.
                    */
            function isNotificationEvent(parameters) {
                const eventName = parameters.get(CIFramework.AnalyticsConstants.analyticsEventName);
                switch (eventName) {
                    case CIFramework.AnalyticsConstants.notificationReceived:
                    case CIFramework.AnalyticsConstants.notificationAccepted:
                    case CIFramework.AnalyticsConstants.notificationRejected:
                    case CIFramework.AnalyticsConstants.notificationTimedOut:
                        return true;
                    default:
                        return false;
                }
            }
            /**
                     * raise analytics events for notification response.
                    */
            function raiseAnalyticsEventForNotificationResponse(response, notificationObject) {
                const originURL = notificationObject.get(Constants.originURL);
                const correlationId = notificationObject.get(Constants.correlationId);
                let mapReturn = null;
                const action = response ? response.actionName : "";
                switch (action) {
                    case Constants.Accept:
                        mapReturn = new Map().set(Microsoft.CIFramework.Constants.actionName, Microsoft.CIFramework.Constants.Accept)
                            .set(Microsoft.CIFramework.Constants.responseReason, CIFramework.ResponseReason.Accept).set(Constants.correlationId, correlationId)
                            .set(CIFramework.AnalyticsConstants.notificationResponseAction, CIFramework.AnalyticsConstants.acceptNotificationResponse).set(Constants.originURL, originURL);
                        raiseSystemAnalyticsEvent(CIFramework.InternalEventName.NotificationAccepted, mapReturn);
                        break;
                    case Constants.Reject:
                        mapReturn = new Map().set(Microsoft.CIFramework.Constants.actionName, Microsoft.CIFramework.Constants.Reject)
                            .set(Microsoft.CIFramework.Constants.responseReason, CIFramework.ResponseReason.DeclinedByAgent).set(Constants.correlationId, correlationId)
                            .set(CIFramework.AnalyticsConstants.notificationResponseAction, CIFramework.AnalyticsConstants.rejectNotificationResponse).set(Constants.originURL, originURL);
                        raiseSystemAnalyticsEvent(CIFramework.InternalEventName.NotificationRejected, mapReturn);
                        break;
                    case Constants.Timeout:
                        mapReturn = new Map().set(Microsoft.CIFramework.Constants.actionName, Microsoft.CIFramework.Constants.Timeout)
                            .set(Microsoft.CIFramework.Constants.responseReason, CIFramework.ResponseReason.DisplayTimeout)
                            .set(Constants.correlationId, correlationId).set(Constants.originURL, originURL);
                        raiseSystemAnalyticsEvent(CIFramework.InternalEventName.NotificationTimedOut, mapReturn);
                    default:
                        break;
                }
            }
            /**
            * Internal method to raise the lLogAnalyticsEvent to Analytics js
            */
            function raiseAnalyticsEventInternal(eventName, parameters) {
                let session = null;
                let correlationId = null;
                let sessionId = getEventBasedSessionId(parameters);
                if (isNullOrUndefined(sessionId)) {
                    sessionId = Internal.state.sessionManager.getFocusedSession();
                }
                if (sessionId !== Constants.defaultSessionId) {
                    session = Internal.state.sessionManager.sessions.get(sessionId);
                }
                if (isNotificationEvent(parameters)) {
                    correlationId = parameters.get(Constants.correlationId);
                }
                else {
                    correlationId = (session != null ? session.correlationId : null);
                }
                let providerName = "";
                let providerId = "";
                let apiVersion = "";
                let sortOrder = "";
                const [provider, errorData] = getProvider(parameters, [Constants.SearchString]);
                if (!isNullOrUndefined(provider)) {
                    providerName = provider.name;
                    providerId = provider.providerId;
                    apiVersion = provider.apiVersion;
                    sortOrder = provider.sortOrder;
                }
                Internal.logAPIInternalInfo(Internal.appId, false, null, eventName + "Processing raiseAnalyticsEventInternal", Internal.cifVersion, "", provider.name, "", correlationId);
                parameters.set(CIFramework.AnalyticsConstants.channelProviderName, provider != null ? provider.name : null);
                parameters.set(CIFramework.AnalyticsConstants.channelProviderId, provider != null ? provider.providerId : null);
                parameters.set(CIFramework.AnalyticsConstants.enableAnalytics, provider != null ? provider.enableAnalytics : null);
                parameters.set(CIFramework.AnalyticsConstants.clientSessionId, sessionId);
                parameters.set(CIFramework.AnalyticsConstants.sessionUniqueId, session != null ? session.sessionUniqueId : null);
                parameters.set(CIFramework.AnalyticsConstants.correlationId, correlationId);
                parameters.set(CIFramework.AnalyticsConstants.conversationId, session != null ? session.conversationId : null);
                parameters.set(CIFramework.AnalyticsConstants.providerSessionId, session != null ? session.providerSessionId : null);
                try {
                    Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.isConsoleApp, Internal.cifVersion, "", "", "", parameters.get(Constants.correlationId));
                }
                catch (error) {
                    // tslint:disable-next-line:no-console
                    console.log("Error in method logAPIFailure.");
                }
                const apiName = parameters.get(CIFramework.AnalyticsConstants.telemetryApiName);
                const paramData = new Internal.AnalyticsAPIUsageTelemetry(providerId, providerName, apiVersion, apiName, eventName, sortOrder, Internal.appId, Internal.cifVersion, false, null, "", parameters.get(Constants.correlationId));
                Internal.setAnalyticsAPIUsageTelemetry(paramData);
                const eventParams = { bubbles: false, cancelable: false, detail: parameters };
                const event = new CustomEvent(eventName, eventParams);
                Internal.logAPIInternalInfo(Internal.appId, false, null, eventName + "Processed raiseAnalyticsEventInternal", Internal.cifVersion, "", provider.name, "", correlationId);
                return window.dispatchEvent(event);
            }
            Internal.raiseAnalyticsEventInternal = raiseAnalyticsEventInternal;
            /**
             * subscriber of the play sound event
            */
            function onNotificationDisplay(eventInput) {
                const eventMap = Microsoft.CIFramework.Utility.buildMap(eventInput);
                sendMessage(eventMap, CIFramework.MessageType.onNotificationDisplayEvent, null, false);
            }
            Internal.onNotificationDisplay = onNotificationDisplay;
            /**
             * subscriber of the window focus change event
            */
            function onWindowFocusChange(eventInput) {
                const eventMap = Microsoft.CIFramework.Utility.buildMap(eventInput);
                sendMessage(eventMap, CIFramework.MessageType.onWindowFocusEvent, null, true);
            }
            Internal.onWindowFocusChange = onWindowFocusChange;
            /**
         * API to execute fetch query
         *
         * @param entityName Entity name - please provide the plural name
         * @param options
         *		Following formats can be used
                    https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-webapi/retrievemultiplerecords
                    https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-webapi/retrieverecord
                    To fetch file data
                        options = "/({recordID})/{fileAttributeName}"
        */
            function executeFetchQuery(parameters) {
                // To get the base URL - Xrm.Utility.getGlobalContext().getClientUrl()
                // Think about correlation id for fetching sound files - For telemetry
                return new Promise((resolve, reject) => {
                    const url = Xrm.Utility.getGlobalContext().getClientUrl() + '/api/data/v9.0/' + parameters.get(Constants.entityName) + parameters.get(Constants.options);
                    fetch(url).then((response) => {
                        return response.json();
                    }).then((data) => {
                        return resolve(new Map().set(Constants.value, data));
                    }).catch((errorResponse) => {
                        return reject(new Map().set(Constants.value, errorResponse));
                    });
                });
            }
            Internal.executeFetchQuery = executeFetchQuery;
            function showProgressIndicator(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    Internal.logParameterData(telemetryParameter, CIFramework.MessageType.showProgressIndicator, { "progressIndicatorMessage": parameters });
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.showProgressIndicator, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return Internal.state.client.showProgressIndicator(parameters.get(Constants.progressIndicatorMessage), telemetryData);
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.showProgressIndicator, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.showProgressIndicator = showProgressIndicator;
            function closeProgressIndicator(parameters) {
                const telemetryData = new Object();
                const telemetryParameter = new Object();
                const [provider, errorData] = getProvider(parameters);
                if (provider) {
                    Internal.logParameterData(telemetryParameter, CIFramework.MessageType.closeProgressIndicator, { "progressIndicatorMessage": parameters });
                    const paramData = new Internal.APIUsageTelemetry(provider.providerId, provider.name, provider.apiVersion, CIFramework.MessageType.closeProgressIndicator, provider.sortOrder, Internal.appId, Internal.cifVersion, false, null, telemetryParameter, parameters.get(Constants.correlationId));
                    Internal.setAPIUsageTelemetry(paramData);
                    return Internal.state.client.closeProgressIndicator(telemetryData);
                }
                else {
                    return Internal.logAPIFailure(Internal.appId, true, errorData, CIFramework.MessageType.closeProgressIndicator, Internal.cifVersion, "", "", telemetryParameter, parameters.get(Constants.correlationId));
                }
            }
            Internal.closeProgressIndicator = closeProgressIndicator;
            function onPreGenericEvent(event) {
                if (genericEventRegistrations.has(event.type)) {
                    switch (event.type) {
                        case Constants.SetPresenceEvent:
                            const eventMap = Microsoft.CIFramework.Utility.buildMap(event.detail);
                            presence.setAgentPresence(eventMap.get("presenceInfo"));
                            break;
                        default:
                            break;
                    }
                }
            }
            Internal.onPreGenericEvent = onPreGenericEvent;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/** @internal */
/// <reference path="InternalMainLibrary.ts" />
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            class PresenceControl {
                // Empty Constructor
                constructor() {
                    //
                }
                static get Instance() {
                    if (this.instance == null) {
                        this.instance = new PresenceControl();
                    }
                    return this.instance;
                }
                setAllPresences(presenceList) {
                    if (presenceList != null) {
                        const presenceListNode = document.createElement('div');
                        presenceListNode.classList.add("PresenceListInnerNode");
                        presenceListNode.setAttribute("role", "menu");
                        // Appends the Header to the List
                        const headerDiv = document.createElement('div');
                        headerDiv.classList.add("headerDiv");
                        headerDiv.innerText = "Set Presence";
                        presenceListNode.appendChild(headerDiv);
                        for (let i = 0; i < presenceList.length; i++) {
                            const presenceNode = document.createElement('div');
                            presenceNode.id = presenceList[i].presenceId;
                            presenceNode.classList.add("PresenceListItem");
                            presenceNode.tabIndex = 0;
                            presenceNode.setAttribute("role", "menuitem");
                            presenceNode.setAttribute("aria-label", presenceList[i].presenceText);
                            const presenceColorNode = document.createElement('div');
                            presenceColorNode.classList.add('ColorNode');
                            presenceColorNode.style.backgroundColor = presenceList[i].presenceColor;
                            presenceNode.appendChild(presenceColorNode);
                            const presenceTextNode = document.createElement('div');
                            presenceTextNode.classList.add('textNode');
                            presenceTextNode.innerText = presenceList[i].presenceText;
                            presenceNode.appendChild(presenceTextNode);
                            const lineBreakNode = document.createElement('br');
                            presenceNode.appendChild(lineBreakNode);
                            presenceListNode.appendChild(presenceNode);
                        }
                        presenceListNode.addEventListener("click", this.raiseSetPresence, false);
                        presenceListNode.addEventListener("keydown", this.keyboardPresenceHandler, false);
                        return presenceListNode;
                    }
                    else {
                        const presenceListNode = document.createElement('div');
                        return presenceListNode;
                    }
                }
                setAgentPresence(presenceInfo) {
                    // Creates the Main Div for Agent Presence
                    const updatedPresenceNode = document.createElement('div');
                    updatedPresenceNode.classList.add("agentPresenceDiv");
                    updatedPresenceNode.title = presenceInfo.presenceText;
                    updatedPresenceNode.tabIndex = 0;
                    updatedPresenceNode.setAttribute("role", "button");
                    updatedPresenceNode.setAttribute("aria-label", "set your presence status . current presence status is " + updatedPresenceNode.title);
                    updatedPresenceNode.addEventListener("click", this.toggleList, false);
                    updatedPresenceNode.addEventListener("keypress", this.keyboardToggleList, false);
                    const innerDiv = document.createElement('div');
                    innerDiv.classList.add("innerDiv");
                    if (!Internal.isConsoleAppInternal()) {
                        innerDiv.style.display = "flex";
                    }
                    const backgroundColorDiv = document.createElement('div');
                    backgroundColorDiv.classList.add('backgroundColorDiv');
                    // Creates the Image Element for the Agent Presence
                    const updatedPresenceImageNode = document.createElement('img');
                    updatedPresenceImageNode.classList.add('userImageNode');
                    updatedPresenceImageNode.src = "/_imgs/svg_2.svg";
                    updatedPresenceImageNode.alt = CIFramework.Utility.getResourceString("AGENT_IMAGE_ALT_TEXT");
                    backgroundColorDiv.appendChild(updatedPresenceImageNode);
                    innerDiv.appendChild(backgroundColorDiv);
                    // Creates the Color Div for Agent Presence
                    const updatedPresenceColorNode = document.createElement('div');
                    updatedPresenceColorNode.style.backgroundColor = presenceInfo.presenceColor;
                    updatedPresenceColorNode.innerText = " ";
                    updatedPresenceColorNode.classList.add('agentPresenceColorNode');
                    innerDiv.appendChild(updatedPresenceColorNode);
                    // Creates the Text Div for Agent Presence
                    const updatedPresenceTextNode = document.createElement('div');
                    updatedPresenceTextNode.innerText = presenceInfo.presenceText;
                    updatedPresenceTextNode.id = 'TextNode';
                    updatedPresenceTextNode.classList.add('textNode');
                    updatedPresenceNode.appendChild(innerDiv);
                    updatedPresenceNode.appendChild(updatedPresenceTextNode);
                    return updatedPresenceNode;
                }
                toggleList() {
                    const presenceList = (window.top.document.getElementById("SidePanelIFrame")).contentDocument.getElementById("PresenceList");
                    if (window.getComputedStyle(presenceList).display === "none") {
                        if (window.top.Xrm) {
                            if (!window.top.Xrm.Panel.state) {
                                window.top.Xrm.Panel.state = 1; // setting dock the panel mode before display list
                            }
                        }
                        presenceList.style.display = "block";
                        ((window.top.document.getElementById("SidePanelIFrame")).contentDocument.getElementsByClassName("PresenceListItem")[0]).focus();
                    }
                    else {
                        presenceList.style.display = "none";
                    }
                }
                // Toggles the visibility of the Presence List
                // Enter and Space KeyPress Handler for Presence List Menu Toggle
                keyboardToggleList(e) {
                    if (e.keyCode === 13 || e.keyCode === 32) {
                        Microsoft.CIFramework.Internal.PresenceControl.Instance.toggleList();
                    }
                    if (e.keyCode === 27) {
                        const presenceList = (window.top.document.getElementById("SidePanelIFrame")).contentDocument.getElementById("PresenceList");
                        if (presenceList)
                            presenceList.style.display = "none";
                    }
                }
                // Raises the Set Presence Event when click or keypress happens on Presence List Items
                raiseSetPresence(e) {
                    const presenceList = (window.top.document.getElementById("SidePanelIFrame")).contentDocument.getElementById("PresenceList");
                    presenceList.style.display = "none";
                    const updatedPresence = {};
                    const actualElement = e.target;
                    // Don't call setAgentPresence if click is on the Header or any area of the Parent Div
                    if (actualElement.className === "headerDiv" || actualElement.className === "PresenceListInnerNode")
                        return;
                    if (!Internal.isNullOrUndefined(actualElement.getAttribute("id")) && actualElement.getAttribute("id") !== "") {
                        updatedPresence.presenceId = actualElement.getAttribute("id");
                        updatedPresence.presenceText = actualElement.firstElementChild.nextSibling.innerText;
                        updatedPresence.presenceColor = actualElement.firstChild.style.backgroundColor;
                        updatedPresence.basePresenceStatus = actualElement.firstElementChild.nextSibling.innerText;
                    }
                    else {
                        updatedPresence.presenceId = actualElement.parentElement.getAttribute("id");
                        updatedPresence.presenceText = actualElement.parentElement.firstElementChild.nextSibling.innerText;
                        updatedPresence.presenceColor = actualElement.parentElement.firstChild.style.backgroundColor;
                        updatedPresence.basePresenceStatus = actualElement.parentElement.firstElementChild.nextSibling.innerText;
                    }
                    const setPresenceEvent = new CustomEvent('setPresenceEvent', {
                        detail: { "presenceId": updatedPresence.presenceId, "presenceInfo": updatedPresence }
                    });
                    window.parent.dispatchEvent(setPresenceEvent);
                }
                // Enter,Space,Escape,Up and Down Arrow KeyDown Handler for Presence List Items
                keyboardPresenceHandler(e) {
                    const activeElement = e.target;
                    const presenceListInnerNode = e.currentTarget;
                    if (e.keyCode === 13 || e.keyCode === 32) {
                        Microsoft.CIFramework.Internal.PresenceControl.Instance.raiseSetPresence(e);
                    }
                    if (e.keyCode === 27) {
                        const presenceList = (window.top.document.getElementById("SidePanelIFrame")).contentDocument.getElementById("PresenceList");
                        if (presenceList)
                            presenceList.style.display = "none";
                    }
                    if (e.keyCode === 38) {
                        if (activeElement.previousSibling != null) {
                            if (activeElement.previousSibling.classList.length > 0) {
                                if (activeElement.previousSibling.classList.contains("headerDiv")) {
                                    const presenceListItems = presenceListInnerNode.getElementsByClassName("PresenceListItem");
                                    presenceListItems[presenceListItems.length - 1].focus();
                                }
                                else {
                                    activeElement.previousSibling.focus();
                                }
                            }
                        }
                    }
                    if (e.keyCode === 40) {
                        if (activeElement.nextSibling == null) {
                            presenceListInnerNode.getElementsByClassName("PresenceListItem")[0].focus();
                        }
                        else {
                            activeElement.nextSibling.focus();
                        }
                    }
                }
            }
            Internal.PresenceControl = PresenceControl;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="Constants.ts" />
/// <reference path="PresenceControl.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            /**
             * Set the actual client implementation based on client type passed.
             * @param clientType type of client
             */
            function setClient(clientType) {
                switch (clientType) {
                    case Internal.ClientType.UnifiedClient:
                        return Internal.unifiedClient();
                    default:
                        // log error - not able to identify the client, falling back to webclient impl.
                        return Internal.unifiedClient();
                }
            }
            Internal.setClient = setClient;
            function GetPresenceManager(clientType) {
                switch (clientType) {
                    case Internal.ClientType.UnifiedClient:
                        if (Internal.isConsoleAppInternal())
                            return Internal.UCIConsoleAppManager();
                        else
                            return Internal.UCIPresenceManager();
                    default:
                        return Internal.UCIPresenceManager();
                }
            }
            Internal.GetPresenceManager = GetPresenceManager;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
(() => { Microsoft.CIFramework.Internal.initializeCI("4", "1"); })();
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../packages/Crm.ClientApiTypings.1.4.596-master/clientapi/XrmClientApi.d.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var CIFramework;
    (function (CIFramework) {
        var Internal;
        (function (Internal) {
            class TemplateManager {
                static isValidUniqueNameFormat(templateName) {
                    return ((templateName.indexOf('_') > -1) && (templateName.indexOf(' ') === -1)) ? true : false;
                }
                static resolveTemplateUniqueName(provider, templateType, templateName) {
                    return new Promise((resolve, reject) => {
                        try {
                            if (provider.name !== Internal.ChannelProvider.Omnichannel_UniqueName) {
                                if (!TemplateManager.isValidUniqueNameFormat(templateName)) {
                                    TemplateManager.resolveTemplateUniqueNameFromCDS(templateType, templateName).then((response) => {
                                        resolve(response);
                                    }, (error) => {
                                        reject(error);
                                    });
                                }
                                else {
                                    TemplateManager.isTemplateExists(templateType, templateName).then((isValid) => {
                                        if (isValid) {
                                            resolve(templateName);
                                        }
                                        else {
                                            // tslint:disable-next-line:no-shadowed-variable
                                            TemplateManager.resolveTemplateUniqueNameFromCDS(templateType, templateName).then((templateName) => {
                                                resolve(templateName);
                                            }, (error) => {
                                                reject(error);
                                            });
                                        }
                                    }, (error) => {
                                        reject(error);
                                    });
                                }
                            }
                            else {
                                resolve(templateName);
                            }
                        }
                        catch (error) {
                            reject(error);
                        }
                    });
                }
                static resolveTemplateUniqueNameFromCDS(templateType, templateName) {
                    switch (templateType) {
                        case "Session" /* Session */:
                            return TemplateManager.resolveSessionTemplateUniqueName(templateName);
                        case "ApplicationTab" /* ApplicationTab */:
                            return TemplateManager.resolveTabTemplateUniqueName(templateName);
                        case "Notification" /* Notification */:
                            return TemplateManager.resolveNotificationTemplateUniqueName(templateName);
                    }
                }
                static resolveNotificationTemplateUniqueName(templateDisplayName) {
                    return new Promise((resolve, reject) => {
                        Xrm.WebApi.retrieveMultipleRecords(Internal.DeprecatedEntityNames.NotificationTemplate, `?$filter=msdyn_name eq '${templateDisplayName}'`).then((result) => {
                            if (result && result.entities && result.entities.length > 0) {
                                resolve(TemplateManager.generateTemplateUniqueName(result.entities[0].msdyn_consoleapplicationnotificationtemplateid));
                            }
                            else {
                                reject(new Error(`Could not resolve unique name for notification template: ${templateDisplayName}`));
                            }
                        }, (error) => {
                            Internal.logFailure(Internal.appId, true, Internal.generateErrorObject(error, "resolveNotificationTemplateUniqueName", Internal.errorTypes.GenericError), "resolveNotificationTemplateUniqueName", Internal.cifVersion);
                            reject(error);
                        });
                    });
                }
                static resolveSessionTemplateUniqueName(templateDisplayName) {
                    return new Promise((resolve, reject) => {
                        Xrm.WebApi.retrieveMultipleRecords(Internal.DeprecatedEntityNames.SessionTemplate, `?$filter=msdyn_name eq '${templateDisplayName}'`).then((result) => {
                            if (result && result.entities && result.entities.length > 0) {
                                resolve(TemplateManager.generateTemplateUniqueName(result.entities[0].msdyn_consoleapplicationsessiontemplateid));
                            }
                            else {
                                reject(new Error(`Could not resolve unique name for session template: ${templateDisplayName}`));
                            }
                            ;
                        }, (error) => {
                            Internal.logFailure(Internal.appId, true, Internal.generateErrorObject(error, "resolveSessionTemplateUniqueName", Internal.errorTypes.GenericError), "resolveSessionTemplateUniqueName", Internal.cifVersion);
                            reject(error);
                        });
                    });
                }
                static resolveTabTemplateUniqueName(templateDisplayName) {
                    return new Promise((resolve, reject) => {
                        Xrm.WebApi.retrieveMultipleRecords(Internal.DeprecatedEntityNames.ApplicationTabTemplate, `?$filter=msdyn_name eq '${templateDisplayName}'`).then((result) => {
                            if (result && result.entities && result.entities.length > 0) {
                                resolve(TemplateManager.generateTemplateUniqueName(result.entities[0].msdyn_consoleapplicationtemplateid));
                            }
                            else {
                                reject(new Error(`Could not resolve unique name for application tab template: ${templateDisplayName}`));
                            }
                        }, (error) => {
                            Internal.logFailure(Internal.appId, true, Internal.generateErrorObject(error, "resolveTabTemplateUniqueName", Internal.errorTypes.GenericError), "resolveTabTemplateUniqueName", Internal.cifVersion);
                            reject(error);
                        });
                    });
                }
                static isTemplateExists(templateType, templateName) {
                    return new Promise((resolve, reject) => {
                        try {
                            Microsoft.AppRuntime.Internal.getTemplate(templateType, templateName)
                                .then((result) => {
                                resolve(!Internal.isNullOrUndefined(result) && !Internal.isNullOrUndefined(result.uniqueName));
                            }, (error) => {
                                Internal.logFailure(Internal.appId, true, Internal.generateErrorObject(error, "resolveTemplateUniqueName > isTemplateExists", Internal.errorTypes.GenericError), "resolveTemplateUniqueName > isTemplateExists", Internal.cifVersion);
                                resolve(false);
                            });
                        }
                        catch (error) {
                            Internal.logFailure(Internal.appId, true, Internal.generateErrorObject(error, "resolveTemplateUniqueName > isTemplateExists", Internal.errorTypes.GenericError), "resolveTemplateUniqueName > isTemplateExists", Internal.cifVersion);
                            resolve(false);
                        }
                    });
                }
                static generateTemplateUniqueName(guid) {
                    return "msdyn_" + guid.replace(/-/g, "");
                }
            }
            Internal.TemplateManager = TemplateManager;
        })(Internal = CIFramework.Internal || (CIFramework.Internal = {}));
    })(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}));
})(Microsoft || (Microsoft = {}));
//# sourceMappingURL=CIFRuntimeCore.js.map 
 
