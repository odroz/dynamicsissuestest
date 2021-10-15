var Microsoft;
(function(e) {
    var t;
    (function(t) {
        var n;
        (function(t) {
            t.retryCount = 3,
            t.promiseTimeOut = 1e4,
            t.messageCorrelationId = "messageCorrelationId",
            t.messageSuccess = "success",
            t.messageFailure = "failure",
            t.messageConstant = "message",
            t.originURL = "originURL",
            t.message = "message",
            t.rejectWithErrorMessage = function(t) {
                return Promise.reject(JSON.stringify(e.CIFramework.Utility.buildEntity(e.CIFramework.Utility.createErrorMap(t))))
            }
        }
        )(n = t.postMessageNamespace || (t.postMessageNamespace = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(t) {
        var n;
        (function(n) {
            function i(e, n) {
                return new Map().set(t.Constants.message, e).set(t.Constants.name, n)
            }
            function r(e) {
                return e.message !== void 0
            }
            function a(e) {
                let t = {}
                  , n = Object.getOwnPropertyNames(Object.getPrototypeOf(e)).filter(e=>"constructor" != e);
                for (let i in n) {
                    let r = n[i];
                    t[r] = "object" == typeof e[r] ? a(e[r]) : e[r]
                }
                return t
            }
            n.createErrorMap = i,
            n.isError = r,
            n.launchSearchPage = function(t, n) {
                try {
                    const i = {
                        pageType: "search",
                        searchText: e.CIFramework.Utility.extractSearchText(t),
                        searchType: 1,
                        EntityNames: [n],
                        EntityGroupName: ""
                    };
                    Xrm.Navigation.navigateTo(i)
                } catch (e) {}
            }
            ,
            n.buildMap = function(e) {
                if (r(e))
                    return i(e.message);
                else {
                    let t = new Map;
                    return Object.keys(e).forEach(n=>{
                        t.set(n, e[n])
                    }
                    ),
                    t
                }
            }
            ,
            n.mapToString = function(e, t=[]) {
                let n = "";
                return e ? (e.forEach((e,i)=>{
                    -1 == t.indexOf(i) && (n += i + " : " + e + ", ")
                }
                ),
                n) : ""
            }
            ,
            n.flatten = a,
            n.buildEntity = function(e) {
                let t = {};
                return e.forEach((e,n)=>{
                    t[n] = e
                }
                ),
                t
            }
            ,
            n.extractParameter = function(e, t) {
                var n = {};
                if (e) {
                    var i = e.substr(1).split("&");
                    i.forEach(e=>{
                        var t = e.split("=")
                          , i = decodeURIComponent(t.shift())
                          , r = decodeURIComponent(t.join("="));
                        n[i] = r
                    }
                    )
                }
                return n.hasOwnProperty(t) ? n[t] : ""
            }
            ,
            n.extractSearchText = function(e) {
                if (e) {
                    let t = e.split("=");
                    return null != t[1] && "" != t[1] ? t[1] : ""
                }
                return ""
            }
            ,
            n.splitQueryForSearch = function(e) {
                var t = [];
                e && (t = e.split("&"));
                let n = ["", ""];
                return t.forEach(e=>{
                    e.startsWith("$search") || e.startsWith("?$search") ? n[1] = e : "" == n[0] ? n[0] += e : n[0] += "&" + e
                }
                ),
                n[0].startsWith("?") || (n[0] = "?" + n[0]),
                n[1].startsWith("?") && (n[1] = n[1].substr(1)),
                n
            }
            ,
            n.rgb2hex = function(e) {
                var t = e.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+)/i);
                return t && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2).toUpperCase() + ("0" + parseInt(t[2], 10).toString(16)).slice(-2).toUpperCase() + ("0" + parseInt(t[3], 10).toString(16)).slice(-2).toUpperCase() : e
            }
            ,
            n.getElementFromIframe = function(e, t) {
                return e.contentWindow.document.getElementById(t)
            }
            ,
            n.getElementsByClassName = function(e, t) {
                return e.contentWindow.document.getElementsByClassName(t)
            }
        }
        )(n = t.Utility || (t.Utility = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(e) {
        class t {
        }
        t.setClickToAct = "setclicktoact",
        t.getClickToAct = "getclicktoact",
        t.searchAndOpenRecords = "searchandopenrecords",
        t.openForm = "openform",
        t.createRecord = "createrecord",
        t.deleteRecord = "deleterecord",
        t.retrieveRecord = "retrieverecord",
        t.updateRecord = "updaterecord",
        t.search = "search",
        t.setMode = "setmode",
        t.setWidth = "setwidth",
        t.getMode = "getmode",
        t.getEnvironment = "getenvironment",
        t.getWidth = "getwidth",
        t.onClickToAct = "onclicktoact",
        t.onModeChanged = "onmodechanged",
        t.onSizeChanged = "onsizechanged",
        t.onPageNavigate = "onpagenavigate",
        t.onSendKBArticle = "onsendkbarticle",
        t.onSetPresence = "onSetPresence",
        t.onUISessionVisibilityChanged = "onUISessionVisibilityChanged",
        t.onUISessionStarted = "onUISessionStarted",
        t.onUISessionEnded = "onUISessionEnded",
        t.getEntityMetadata = "getEntityMetadata",
        t.notifyEvent = "notifyEvent",
        t.softNotification = "softNotification",
        t.broadCast = "broadCast",
        t.internalCommunication = "internalCommunication",
        t.notification = "notification",
        t.transfer = "transfer",
        t.escalation = "escalation",
        t.renderSearchPage = "renderSearchPage",
        t.startUISession = "startUISession",
        t.switchUISession = "switchUISession",
        t.endUISession = "endUISession",
        t.onMaxUISessionsReached = "onMaxUISessionsReached",
        t.setAgentPresence = "setAgentPresence",
        t.initializeAgentPresenceList = "initializeAgentPresenceList",
        t.insertNotes = "insertNotes",
        t.openKBSearchControl = "openkbsearchcontrol",
        t.onSetPresenceEvent = "setPresenceEvent",
        t.hardNotification = "hardNotification",
        t.removeGenericHandler = "removeGenericHandler",
        t.addGenericHandler = "addGenericHandler",
        e.MessageType = t;
        class n {
        }
        n.customParams = "msdyn_customparams",
        n.customParamsKey = "customParams",
        n.value = "value",
        n.entityName = "entityName",
        n.entityId = "entityId",
        n.queryParameters = "queryParameters",
        n.message = "message",
        n.searchOnly = "searchOnly",
        n.entityFormOptions = "entityFormOptions",
        n.entityFormParameters = "entityFormParameters",
        n.ScriptIdAttributeName = "data-cifid",
        n.ScriptIdAttributeValue = "CIFMainLibrary",
        n.ScriptCRMUrlAttributeName = "data-crmurl",
        n.name = "msdyn_name",
        n.originURL = "originURL",
        n.CIClickToAct = "CIClickToAct",
        n.CISendKBArticle = "KMClickToSend",
        n.SetPresenceEvent = "setPresenceEvent",
        n.widgetIframeId = "SidePanelIFrame",
        n.clickToActAttributeName = "msdyn_clicktoact",
        n.systemUserLogicalName = "systemuser",
        n.appSelectorFieldName = "msdyn_appselector",
        n.sortOrderFieldName = "msdyn_sortorder",
        n.roleSelectorFieldName = "msdyn_roleselector",
        n.providerOdataQuery = "?$select=fullname&$expand=msdyn_ciprovider_systemuser_membership($filter=statecode eq 0;$orderby=msdyn_sortorder asc,createdon asc;$top={0})",
        n.providerNavigationProperty = "msdyn_ciprovider_systemuser_membership",
        n.providerId = "msdyn_ciproviderid",
        n.landingUrl = "msdyn_landingurl",
        n.label = "msdyn_label",
        n.providerLogicalName = "msdyn_ciprovider",
        n.widgetHeight = "msdyn_widgetheight",
        n.widgetWidth = "msdyn_widgetwidth",
        n.SizeChangeHandler = "sizeChangeHandler",
        n.ModeChangeHandler = "modeChangedHandler",
        n.NavigationHandler = "NavigationHandler",
        n.AppName = "appName",
        n.ClientUrl = "clientUrl",
        n.AppUrl = "appUrl",
        n.Theme = "themeName",
        n.OrgLcid = "orgLcid",
        n.OrgUniqueName = "orgUniqueName",
        n.UserId = "userId",
        n.UserLcid = "userLcid",
        n.UserName = "username",
        n.DefaultCountryCode = "defaultCountryCode",
        n.MinimizedHeight = 34,
        n.DefaultFullWidth = 100,
        n.APIVersion = "msdyn_ciproviderapiversion",
        n.SortOrder = "msdyn_sortorder",
        n.crmVersion = "crmVersion",
        n.CIFInitEvent = "CIFInitDone",
        n.Attributes = "attributes",
        n.UciLib = "ucilib",
        n.OrgId = "orgId",
        n.trustedDomain = "msdyn_trusteddomain",
        n.eventType = "eventType",
        n.headerDataCIF = "headerDataCIF",
        n.bodyDataCIF = "bodyDataCIF",
        n.notificationUXObject = "notificationUXObject",
        n.actionDisplayText = "actionDisplayText",
        n.actionReturnValue = "actionReturnValue",
        n.actionsCIF = "actions",
        n.actionName = "actionName",
        n.CIFNotificationIcon = "CIFNotificationIcon",
        n.actionColor = "actionColor",
        n.actionImage = "actionImage",
        n.Timeout = "Timeout",
        n.Accept = "Accept",
        n.Reject = "Reject",
        n.actionType = "actionType",
        n.notificationType = "notificationType",
        n.Timer = "Timer",
        n.NoOfNotifications = "NoOfNotifications",
        n.SMS = "sms",
        n.Chat = "chat",
        n.Call = "call",
        n.Case = "case",
        n.SearchString = "searchString",
        n.context = "context",
        n.initials = "initials",
        n.sessionId = "sessionId",
        n.MaxUISessions = 5,
        n.sessionColors = ["#2A757D", "#70278B", "#FF8C00", "#427825", "#B4009E", "#B4A0FF"],
        n.sessionPanel = "sessionPanel",
        n.DEFAULT_WIDGET_WIDTH = 378,
        n.DEFAULT_SIDEPANEL_WIDTH = 34,
        n.DEFAULT_SIDEPANEL_WIDTH_WITH_BORDER = 36,
        n.presenceInfo = "presenceInfo",
        n.presenceList = "presenceList",
        n.activityType = "activityType",
        n.sessionDetails = "sessionDetails",
        n.activityId = "activityId",
        n.Id = "id",
        n.notetext = "notetext",
        n.annotation = "annotation",
        n.entitySetName = "entitySetName",
        n.annotationId = "annotationid",
        n.secRemaining = "secs remaining",
        n.Informational = "informational",
        n.Failure = "failure",
        n.cifSolVersion = "msdyn_cifsolversion",
        n.isDirty = "isDirty",
        e.Constants = n,
        e.isNullOrUndefined = function(e) {
            return null == e || "undefined" == typeof e
        }
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {})),
function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var n = t();
        for (var r in n)
            ("object" == typeof exports ? exports : e)[r] = n[r]
    }
}(this, function() {
    var e = Math.abs
      , t = Math.floor;
    return function(e) {
        function t(i) {
            if (n[i])
                return n[i].exports;
            var r = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(r.exports, r, r.exports, t),
            r.l = !0,
            r.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.i = function(e) {
            return e
        }
        ,
        t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }
        ,
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return t.d(n, "a", n),
            n
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 30)
    }([function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n;
        (function(e) {
            e[e.Unspecified = 0] = "Unspecified",
            e[e.String = 1] = "String",
            e[e.Int64 = 2] = "Int64",
            e[e.Double = 3] = "Double",
            e[e.Boolean = 4] = "Boolean",
            e[e.Date = 5] = "Date"
        }
        )(n = t.AWTPropertyType || (t.AWTPropertyType = {}));
        var i;
        (function(e) {
            e[e.NotSet = 0] = "NotSet",
            e[e.DistinguishedName = 1] = "DistinguishedName",
            e[e.GenericData = 2] = "GenericData",
            e[e.IPV4Address = 3] = "IPV4Address",
            e[e.IPv6Address = 4] = "IPv6Address",
            e[e.MailSubject = 5] = "MailSubject",
            e[e.PhoneNumber = 6] = "PhoneNumber",
            e[e.QueryString = 7] = "QueryString",
            e[e.SipAddress = 8] = "SipAddress",
            e[e.SmtpAddress = 9] = "SmtpAddress",
            e[e.Identity = 10] = "Identity",
            e[e.Uri = 11] = "Uri",
            e[e.Fqdn = 12] = "Fqdn",
            e[e.IPV4AddressLegacy = 13] = "IPV4AddressLegacy"
        }
        )(i = t.AWTPiiKind || (t.AWTPiiKind = {}));
        var r;
        (function(e) {
            e[e.NotSet = 0] = "NotSet",
            e[e.GenericContent = 1] = "GenericContent"
        }
        )(r = t.AWTCustomerContentKind || (t.AWTCustomerContentKind = {}));
        var a;
        (function(e) {
            e[e.Low = 1] = "Low",
            e[e.Normal = 2] = "Normal",
            e[e.High = 3] = "High",
            e[e.Immediate_sync = 5] = "Immediate_sync"
        }
        )(a = t.AWTEventPriority || (t.AWTEventPriority = {}));
        var s;
        (function(e) {
            e[e.NonRetryableStatus = 1] = "NonRetryableStatus",
            e[e.QueueFull = 3] = "QueueFull"
        }
        )(s = t.AWTEventsDroppedReason || (t.AWTEventsDroppedReason = {}));
        var o;
        (function(e) {
            e[e.InvalidEvent = 1] = "InvalidEvent",
            e[e.SizeLimitExceeded = 2] = "SizeLimitExceeded",
            e[e.KillSwitch = 3] = "KillSwitch"
        }
        )(o = t.AWTEventsRejectedReason || (t.AWTEventsRejectedReason = {}))
    }
    , function(e, n, i) {
        "use strict";
        function r(e) {
            return "string" == typeof e
        }
        function a(e) {
            return "number" == typeof e
        }
        function s(e) {
            return "boolean" == typeof e
        }
        function o(e) {
            return e instanceof Date
        }
        function d(e) {
            return (e + 62135596800000) * 10000
        }
        function l() {
            return A === b && (A = "undefined" != typeof navigator && !!navigator.sendBeacon),
            A
        }
        function c() {
            return P === b && (P = "undefined" != typeof Uint8Array && !C() && !m()),
            P
        }
        function p() {
            if (N === b) {
                var e = new XMLHttpRequest;
                N = !("undefined" != typeof e.withCredentials || "undefined" == typeof XDomainRequest)
            }
            return N
        }
        function m() {
            return !!("undefined" != typeof navigator && navigator.product) && "ReactNative" === navigator.product
        }
        function u(e) {
            return 10 > e ? "0" + e : e.toString()
        }
        function g(e) {
            if (10 > e)
                return "00" + e;
            return 100 > e ? "0" + e : e.toString()
        }
        function y(e, t) {
            return t = v(t) ? t : E.AWTPropertyType.Unspecified,
            t === E.AWTPropertyType.Unspecified ? _(e) : t === E.AWTPropertyType.String ? r(e) ? t : b : t === E.AWTPropertyType.Boolean ? s(e) ? t : b : t === E.AWTPropertyType.Date ? o(e) && e.getTime() !== NaN ? t : b : t === E.AWTPropertyType.Int64 ? a(e) && 0 == e % 1 ? t : b : t === E.AWTPropertyType.Double ? a(e) ? t : b : b
        }
        function _(e) {
            switch (typeof e) {
            case "string":
                return E.AWTPropertyType.String;
            case "boolean":
                return E.AWTPropertyType.Boolean;
            case "number":
                return E.AWTPropertyType.Double;
            case "object":
                return o(e) ? E.AWTPropertyType.Date : b;
            }
            return b
        }
        function I(e) {
            return !!(a(e) && 0 <= e && 13 >= e)
        }
        function T(e) {
            return !!(a(e) && 0 <= e && 1 >= e)
        }
        function v(e) {
            return !!(a(e) && 0 <= e && 4 >= e)
        }
        function C() {
            if ("undefined" != typeof navigator && navigator.userAgent) {
                var e = navigator.userAgent.toLowerCase();
                if ((0 <= e.indexOf("safari") || 0 <= e.indexOf("firefox")) && 0 > e.indexOf("chrome"))
                    return !0
            }
            return !1
        }
        function h(e) {
            return e === void 0 || e === b || "" === e
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var f = i(4)
          , E = i(0)
          , S = /[xy]/g
          , b = null;
        n.EventNameAndTypeRegex = /^[a-zA-Z]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/,
        n.EventNameDotRegex = /\./g,
        n.PropertyNameRegex = /^[a-zA-Z](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/,
        n.StatsApiKey = "a387cfcf60114a43a7699f9fbb49289e-9bceb9fe-1c06-460f-96c5-6a0b247358bc-7238";
        var A = b
          , P = b
          , N = b;
        n.numberToBondInt64 = function(e) {
            var n = new f.Int64("0");
            return n.low = 4294967295 & e,
            n.high = t(e / 4294967296),
            n
        }
        ,
        n.newGuid = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(S, function(e) {
                var t = 0 | 16 * Math.random()
                  , n = "x" === e ? t : 8 | 3 & t;
                return n.toString(16)
            })
        }
        ,
        n.isString = r,
        n.isNumber = a,
        n.isBoolean = s,
        n.isDate = o,
        n.msToTicks = d,
        n.getTenantId = function(e) {
            var t = e.indexOf("-");
            return -1 < t ? e.substring(0, t) : ""
        }
        ,
        n.isBeaconsSupported = l,
        n.isUint8ArrayAvailable = c,
        n.isPriority = function(e) {
            return !!(a(e) && (1 <= e && 3 >= e || 5 === e))
        }
        ,
        n.sanitizeProperty = function(e, t) {
            return !n.PropertyNameRegex.test(e) || h(t) ? b : (h(t.value) && (t = {
                value: t,
                type: E.AWTPropertyType.Unspecified
            }),
            t.type = y(t.value, t.type),
            !t.type) ? b : (o(t.value) && (t.value = d(t.value.getTime())),
            0 < t.pii && 0 < t.cc ? b : t.pii ? I(t.pii) ? t : b : t.cc ? T(t.cc) ? t : b : t)
        }
        ,
        n.getISOString = function(e) {
            return e.getUTCFullYear() + "-" + u(e.getUTCMonth() + 1) + "-" + u(e.getUTCDate()) + "T" + u(e.getUTCHours()) + ":" + u(e.getUTCMinutes()) + ":" + u(e.getUTCSeconds()) + "." + g(e.getUTCMilliseconds()) + "Z"
        }
        ,
        n.useXDomainRequest = p,
        n.isReactNative = m
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.addNotificationListener = function(e) {
                this.listeners.push(e)
            }
            ,
            e.removeNotificationListener = function(e) {
                for (var t = this.listeners.indexOf(e); -1 < t; )
                    this.listeners.splice(t, 1),
                    t = this.listeners.indexOf(e)
            }
            ,
            e.eventsSent = function(e) {
                for (var t = this, n = function(n) {
                    r.listeners[n].eventsSent && setTimeout(function() {
                        return t.listeners[n].eventsSent(e)
                    }, 0)
                }, r = this, a = 0; a < this.listeners.length; ++a)
                    n(a)
            }
            ,
            e.eventsDropped = function(e, t) {
                for (var n = this, r = function(r) {
                    a.listeners[r].eventsDropped && setTimeout(function() {
                        return n.listeners[r].eventsDropped(e, t)
                    }, 0)
                }, a = this, s = 0; s < this.listeners.length; ++s)
                    r(s)
            }
            ,
            e.eventsRetrying = function(e) {
                for (var t = this, n = function(n) {
                    r.listeners[n].eventsRetrying && setTimeout(function() {
                        return t.listeners[n].eventsRetrying(e)
                    }, 0)
                }, r = this, a = 0; a < this.listeners.length; ++a)
                    n(a)
            }
            ,
            e.eventsRejected = function(e, t) {
                for (var n = this, r = function(r) {
                    a.listeners[r].eventsRejected && setTimeout(function() {
                        return n.listeners[r].eventsRejected(e, t)
                    }, 0)
                }, a = this, s = 0; s < this.listeners.length; ++s)
                    r(s)
            }
            ,
            e.listeners = [],
            e
        }();
        t.default = n
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(14)
          , r = n(0)
          , a = n(28)
          , s = n(10)
          , o = n(5)
          , d = n(11)
          , l = n(1)
          , c = "awt_stats"
          , p = function() {
            function e() {}
            return e.setEventsHandler = function(e) {
                this._eventHandler = e
            }
            ,
            e.getEventsHandler = function() {
                return this._eventHandler
            }
            ,
            e.scheduleTimer = function() {
                var e = this
                  , t = this._profiles[this._currentProfile][2];
                0 > this._timeout && 0 <= t && !this._paused && (this._eventHandler.hasEvents() ? (0 === t && 0 < this._currentBackoffCount && (t = 1),
                this._timeout = setTimeout(function() {
                    return e._batchAndSendEvents()
                }, 1e3 * (t * (1 << this._currentBackoffCount)))) : this._timerCount = 0)
            }
            ,
            e.initialize = function(e) {
                var t = this;
                this._newEventsAllowed = !0,
                this._config = e,
                this._eventHandler = new a.default(e.collectorUri,e.cacheMemorySizeLimitInNumberOfEvents,e.httpXHROverride,e.clockSkewRefreshDurationInMins),
                this._initializeProfiles(),
                s.default.initialize(function(e, n) {
                    if (t._config.canSendStatEvent(c)) {
                        var i = new o.default(c);
                        for (var a in i.setEventPriority(r.AWTEventPriority.High),
                        i.setProperty("TenantId", n),
                        e)
                            e.hasOwnProperty(a) && i.setProperty(a, e[a].toString());
                        d.default.getLogger(l.StatsApiKey).logEvent(i)
                    }
                })
            }
            ,
            e.setTransmitProfile = function(e) {
                this._currentProfile !== e && void 0 !== this._profiles[e] && (this.clearTimeout(),
                this._currentProfile = e,
                this.scheduleTimer())
            }
            ,
            e.loadTransmitProfiles = function(e) {
                for (var t in this._resetTransmitProfiles(),
                e)
                    if (e.hasOwnProperty(t)) {
                        if (3 !== e[t].length)
                            continue;
                        for (var n = 2; 0 <= n; --n)
                            if (0 > e[t][n]) {
                                for (var r = n; 0 <= r; --r)
                                    e[t][r] = -1;
                                break
                            }
                        for (var n = 2; 0 < n; --n)
                            if (0 < e[t][n] && 0 < e[t][n - 1]) {
                                var a = e[t][n - 1] / e[t][n];
                                e[t][n - 1] = Math.ceil(a) * e[t][n]
                            }
                        this._profiles[t] = e[t]
                    }
            }
            ,
            e.sendEvent = function(e) {
                this._newEventsAllowed && (0 < this._currentBackoffCount && e.priority === r.AWTEventPriority.Immediate_sync && (e.priority = r.AWTEventPriority.High),
                this._eventHandler.addEvent(e),
                this.scheduleTimer())
            }
            ,
            e.flush = function(e) {
                var t = new Date().getTime();
                !this._paused && this._lastUploadNowCall + 3e4 < t && (this._lastUploadNowCall = t,
                -1 < this._timeout && (clearTimeout(this._timeout),
                this._timeout = -1),
                this._eventHandler.uploadNow(e))
            }
            ,
            e.pauseTransmission = function() {
                this._paused || (this.clearTimeout(),
                this._eventHandler.pauseTransmission(),
                this._paused = !0)
            }
            ,
            e.resumeTransmision = function() {
                this._paused && (this._paused = !1,
                this._eventHandler.resumeTransmission(),
                this.scheduleTimer())
            }
            ,
            e.flushAndTeardown = function() {
                s.default.teardown(),
                this._newEventsAllowed = !1,
                this.clearTimeout(),
                this._eventHandler.teardown()
            }
            ,
            e.backOffTransmission = function() {
                this._currentBackoffCount < 4 && (this._currentBackoffCount++,
                this.clearTimeout(),
                this.scheduleTimer())
            }
            ,
            e.clearBackOff = function() {
                0 < this._currentBackoffCount && (this._currentBackoffCount = 0,
                this.clearTimeout(),
                this.scheduleTimer())
            }
            ,
            e._resetTransmitProfiles = function() {
                this.clearTimeout(),
                this._initializeProfiles(),
                this._currentProfile = i.AWT_REAL_TIME,
                this.scheduleTimer()
            }
            ,
            e.clearTimeout = function() {
                0 < this._timeout && (clearTimeout(this._timeout),
                this._timeout = -1,
                this._timerCount = 0)
            }
            ,
            e._batchAndSendEvents = function() {
                var e = r.AWTEventPriority.High;
                this._timerCount++,
                this._timerCount * this._profiles[this._currentProfile][2] === this._profiles[this._currentProfile][0] ? (e = r.AWTEventPriority.Low,
                this._timerCount = 0) : this._timerCount * this._profiles[this._currentProfile][2] === this._profiles[this._currentProfile][1] && (e = r.AWTEventPriority.Normal),
                this._eventHandler.sendEventsForPriorityAndAbove(e),
                this._timeout = -1,
                this.scheduleTimer()
            }
            ,
            e._initializeProfiles = function() {
                this._profiles = {},
                this._profiles[i.AWT_REAL_TIME] = [4, 2, 1],
                this._profiles[i.AWT_NEAR_REAL_TIME] = [12, 6, 3],
                this._profiles[i.AWT_BEST_EFFORT] = [36, 18, 9]
            }
            ,
            e._newEventsAllowed = !1,
            e._currentProfile = i.AWT_REAL_TIME,
            e._timeout = -1,
            e._currentBackoffCount = 0,
            e._paused = !1,
            e._timerCount = 0,
            e._lastUploadNowCall = 0,
            e
        }();
        t.default = p
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e) {
                this.low = 0,
                this.high = 0,
                this.low = parseInt(e, 10),
                0 > this.low && (this.high = -1)
            }
            return e.prototype._Equals = function(t) {
                var n = new e(t);
                return this.low === n.low && this.high === n.high
            }
            ,
            e
        }();
        t.Int64 = n;
        var i = function() {
            function e(e) {
                this.low = 0,
                this.high = 0,
                this.low = parseInt(e, 10)
            }
            return e.prototype._Equals = function(t) {
                var n = new e(t);
                return this.low === n.low && this.high === n.high
            }
            ,
            e
        }();
        t.UInt64 = i;
        var r = function() {
            function e() {}
            return e._ToByte = function(e) {
                return this._ToUInt8(e)
            }
            ,
            e._ToUInt8 = function(e) {
                return 255 & e
            }
            ,
            e._ToInt32 = function(e) {
                return 2147483647 & e | 2147483648 & e
            }
            ,
            e._ToUInt32 = function(e) {
                return 4294967295 & e
            }
            ,
            e
        }();
        t.Number = r
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1)
          , r = n(0)
          , a = function() {
            function e(e) {
                this._event = {
                    name: "",
                    properties: {}
                },
                e && this.setName(e)
            }
            return e.prototype.setName = function(e) {
                this._event.name = e
            }
            ,
            e.prototype.getName = function() {
                return this._event.name
            }
            ,
            e.prototype.setType = function(e) {
                this._event.type = e
            }
            ,
            e.prototype.getType = function() {
                return this._event.type
            }
            ,
            e.prototype.setTimestamp = function(e) {
                this._event.timestamp = e
            }
            ,
            e.prototype.getTimestamp = function() {
                return this._event.timestamp
            }
            ,
            e.prototype.setEventPriority = function(e) {
                this._event.priority = e
            }
            ,
            e.prototype.getEventPriority = function() {
                return this._event.priority
            }
            ,
            e.prototype.setProperty = function(e, t, n) {
                void 0 === n && (n = r.AWTPropertyType.Unspecified);
                var a = {
                    value: t,
                    type: n,
                    pii: r.AWTPiiKind.NotSet,
                    cc: r.AWTCustomerContentKind.NotSet
                };
                return a = i.sanitizeProperty(e, a),
                null === a ? void delete this._event.properties[e] : void (this._event.properties[e] = a)
            }
            ,
            e.prototype.setPropertyWithPii = function(e, t, n, a) {
                void 0 === a && (a = r.AWTPropertyType.Unspecified);
                var s = {
                    value: t,
                    type: a,
                    pii: n,
                    cc: r.AWTCustomerContentKind.NotSet
                };
                return s = i.sanitizeProperty(e, s),
                null === s ? void delete this._event.properties[e] : void (this._event.properties[e] = s)
            }
            ,
            e.prototype.setPropertyWithCustomerContent = function(e, t, n, a) {
                void 0 === a && (a = r.AWTPropertyType.Unspecified);
                var s = {
                    value: t,
                    type: a,
                    pii: r.AWTPiiKind.NotSet,
                    cc: n
                };
                return s = i.sanitizeProperty(e, s),
                null === s ? void delete this._event.properties[e] : void (this._event.properties[e] = s)
            }
            ,
            e.prototype.getPropertyMap = function() {
                return this._event.properties
            }
            ,
            e.prototype.getEvent = function() {
                return this._event
            }
            ,
            e
        }();
        t.default = a
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n;
        (function(e) {
            e[e.Unknown = 0] = "Unknown",
            e[e.MSACID = 1] = "MSACID",
            e[e.MSAPUID = 2] = "MSAPUID",
            e[e.ANID = 3] = "ANID",
            e[e.OrgIdCID = 4] = "OrgIdCID",
            e[e.OrgIdPUID = 5] = "OrgIdPUID",
            e[e.UserObjectId = 6] = "UserObjectId",
            e[e.Skype = 7] = "Skype",
            e[e.Yammer = 8] = "Yammer",
            e[e.EmailAddress = 9] = "EmailAddress",
            e[e.PhoneNumber = 10] = "PhoneNumber",
            e[e.SipAddress = 11] = "SipAddress",
            e[e.MUID = 12] = "MUID"
        }
        )(n = t.AWTUserIdType || (t.AWTUserIdType = {}));
        var i;
        (function(e) {
            e[e.Started = 0] = "Started",
            e[e.Ended = 1] = "Ended"
        }
        )(i = t.AWTSessionState || (t.AWTSessionState = {}))
    }
    , function(t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = i(1)
          , a = "MicrosoftApplicationsTelemetryDeviceId"
          , s = "MicrosoftApplicationsTelemetryFirstLaunchTime"
          , o = {
            MSIE: "MSIE",
            CHROME: "Chrome",
            FIREFOX: "Firefox",
            SAFARI: "Safari",
            EDGE: "Edge",
            ELECTRON: "Electron",
            SKYPE_SHELL: "SkypeShell",
            PHANTOMJS: "PhantomJS",
            OPERA: "Opera"
        }
          , d = {
            WINDOWS: "Windows",
            MACOSX: "Mac OS X",
            WINDOWS_PHONE: "Windows Phone",
            WINDOWS_RT: "Windows RT",
            IOS: "iOS",
            ANDROID: "Android",
            LINUX: "Linux",
            CROS: "Chrome OS",
            UNKNOWN: "Unknown"
        }
          , l = {
            WIN: /(windows|win32)/i,
            WINRT: / arm;/i,
            WINPHONE: /windows\sphone\s\d+\.\d+/i,
            OSX: /(macintosh|mac os x)/i,
            IOS: /(iPad|iPhone|iPod)(?=.*like Mac OS X)/i,
            LINUX: /(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,
            ANDROID: /android/i,
            CROS: /CrOS/i
        }
          , c = {
            5.1: "XP",
            "6.0": "Vista",
            6.1: "7",
            6.2: "8",
            6.3: "8.1",
            "10.0": "10"
        }
          , p = "([\\d,.]+)"
          , m = "Unknown"
          , u = "undefined"
          , g = function() {
            function t() {}
            return t.addPropertyStorageOverride = function(e) {
                return !!e && (this._propertyStorage = e,
                !0)
            }
            ,
            t.autoCollect = function(e, t, n) {
                return this._semanticContext = e,
                this._disableCookies = t,
                this._autoCollect(),
                n || typeof navigator === u || (n = navigator.userAgent || ""),
                this._autoCollectFromUserAgent(n),
                this._disableCookies && !this._propertyStorage ? (this._deleteCookie(a),
                void this._deleteCookie(s)) : void ((this._propertyStorage || this._areCookiesAvailable && !this._disableCookies) && this._autoCollectDeviceId())
            }
            ,
            t.checkAndSaveDeviceId = function(e) {
                if (e) {
                    var t = this._getData(a)
                      , n = this._getData(s);
                    t !== e && (n = r.getISOString(new Date)),
                    this._saveData(a, e),
                    this._saveData(s, n),
                    this._setFirstLaunchTime(n)
                }
            }
            ,
            t._autoCollectDeviceId = function() {
                var e = this._getData(a);
                e || (e = r.newGuid()),
                this._semanticContext.setDeviceId(e)
            }
            ,
            t._autoCollect = function() {
                typeof document !== u && document.documentElement && this._semanticContext.setAppLanguage(document.documentElement.lang),
                typeof navigator !== u && this._semanticContext.setUserLanguage(navigator.userLanguage || navigator.language);
                var t = new Date().getTimezoneOffset()
                  , n = t % 60
                  , i = (t - n) / 60
                  , r = "+";
                0 < i && (r = "-"),
                i = e(i),
                n = e(n),
                this._semanticContext.setUserTimeZone(r + (10 > i ? "0" + i : i.toString()) + ":" + (10 > n ? "0" + n : n.toString()))
            }
            ,
            t._autoCollectFromUserAgent = function(e) {
                if (e) {
                    var t = this._getBrowserName(e);
                    this._semanticContext.setDeviceBrowserName(t),
                    this._semanticContext.setDeviceBrowserVersion(this._getBrowserVersion(e, t));
                    var n = this._getOsName(e);
                    this._semanticContext.setDeviceOsName(n),
                    this._semanticContext.setDeviceOsVersion(this._getOsVersion(e, n))
                }
            }
            ,
            t._getBrowserName = function(e) {
                return this._userAgentContainsString("OPR/", e) ? o.OPERA : this._userAgentContainsString(o.PHANTOMJS, e) ? o.PHANTOMJS : this._userAgentContainsString(o.EDGE, e) ? o.EDGE : this._userAgentContainsString(o.ELECTRON, e) ? o.ELECTRON : this._userAgentContainsString(o.CHROME, e) ? o.CHROME : this._userAgentContainsString("Trident", e) ? o.MSIE : this._userAgentContainsString(o.FIREFOX, e) ? o.FIREFOX : this._userAgentContainsString(o.SAFARI, e) ? o.SAFARI : this._userAgentContainsString(o.SKYPE_SHELL, e) ? o.SKYPE_SHELL : m
            }
            ,
            t._setFirstLaunchTime = function(e) {
                if (!isNaN(e)) {
                    var t = new Date;
                    t.setTime(parseInt(e, 10)),
                    e = r.getISOString(t)
                }
                this.firstLaunchTime = e
            }
            ,
            t._userAgentContainsString = function(e, t) {
                return -1 < t.indexOf(e)
            }
            ,
            t._getBrowserVersion = function(e, t) {
                return t === o.MSIE ? this._getIeVersion(e) : this._getOtherVersion(t, e)
            }
            ,
            t._getIeVersion = function(e) {
                var t = e.match(new RegExp(o.MSIE + " " + p));
                if (t)
                    return t[1];
                var n = e.match(new RegExp("rv:" + p));
                if (n)
                    return n[1]
            }
            ,
            t._getOtherVersion = function(e, t) {
                e === o.SAFARI && (e = "Version");
                var n = t.match(new RegExp(e + "/" + p));
                return n ? n[1] : m
            }
            ,
            t._getOsName = function(e) {
                return e.match(l.WINPHONE) ? d.WINDOWS_PHONE : e.match(l.WINRT) ? d.WINDOWS_RT : e.match(l.IOS) ? d.IOS : e.match(l.ANDROID) ? d.ANDROID : e.match(l.LINUX) ? d.LINUX : e.match(l.OSX) ? d.MACOSX : e.match(l.WIN) ? d.WINDOWS : e.match(l.CROS) ? d.CROS : m
            }
            ,
            t._getOsVersion = function(e, t) {
                return t === d.WINDOWS ? this._getGenericOsVersion(e, "Windows NT") : t === d.ANDROID ? this._getGenericOsVersion(e, t) : t === d.MACOSX ? this._getMacOsxVersion(e) : m
            }
            ,
            t._getGenericOsVersion = function(e, t) {
                var n = e.match(new RegExp(t + " " + p));
                return n ? c[n[1]] ? c[n[1]] : n[1] : m
            }
            ,
            t._getMacOsxVersion = function(e) {
                var t = e.match(new RegExp(d.MACOSX + " " + "([\\d,_,.]+)"));
                if (t) {
                    var n = t[1].replace(/_/g, ".");
                    if (n) {
                        var i = this._getDelimiter(n);
                        if (i) {
                            var r = n.split(i);
                            return r[0]
                        }
                        return n
                    }
                }
                return m
            }
            ,
            t._getDelimiter = function(e) {
                return -1 < e.indexOf(".") ? "." : -1 < e.indexOf("_") ? "_" : null
            }
            ,
            t._saveData = function(e, t) {
                if (this._propertyStorage)
                    this._propertyStorage.setProperty(e, t);
                else if (this._areCookiesAvailable) {
                    var n = new Date;
                    n.setTime(n.getTime() + 31536e6);
                    var i = "expires=" + n.toUTCString();
                    document.cookie = e + "=" + t + "; " + i
                }
            }
            ,
            t._getData = function(e) {
                if (this._propertyStorage)
                    return this._propertyStorage.getProperty(e) || "";
                if (this._areCookiesAvailable) {
                    e += "=";
                    for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                        for (var r = t[n], a = 0; " " === r.charAt(a); )
                            a++;
                        if (r = r.substring(a),
                        0 === r.indexOf(e))
                            return r.substring(e.length, r.length)
                    }
                }
                return ""
            }
            ,
            t._deleteCookie = function(e) {
                this._areCookiesAvailable && (document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;")
            }
            ,
            t._disableCookies = !1,
            t._areCookiesAvailable = typeof document !== u && typeof document.cookie !== u,
            t
        }();
        n.default = g
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(7)
          , r = n(0)
          , a = n(6)
          , s = "UserInfo.IdType"
          , o = function() {
            function e(e, t) {
                this._allowDeviceFields = e,
                this._properties = t
            }
            return e.prototype.setAppId = function(e) {
                this._addContext("AppInfo.Id", e)
            }
            ,
            e.prototype.setAppVersion = function(e) {
                this._addContext("AppInfo.Version", e)
            }
            ,
            e.prototype.setAppLanguage = function(e) {
                this._addContext("AppInfo.Language", e)
            }
            ,
            e.prototype.setDeviceId = function(e) {
                this._allowDeviceFields && (i.default.checkAndSaveDeviceId(e),
                this._addContext("DeviceInfo.Id", e))
            }
            ,
            e.prototype.setDeviceOsName = function(e) {
                this._allowDeviceFields && this._addContext("DeviceInfo.OsName", e)
            }
            ,
            e.prototype.setDeviceOsVersion = function(e) {
                this._allowDeviceFields && this._addContext("DeviceInfo.OsVersion", e)
            }
            ,
            e.prototype.setDeviceBrowserName = function(e) {
                this._allowDeviceFields && this._addContext("DeviceInfo.BrowserName", e)
            }
            ,
            e.prototype.setDeviceBrowserVersion = function(e) {
                this._allowDeviceFields && this._addContext("DeviceInfo.BrowserVersion", e)
            }
            ,
            e.prototype.setDeviceMake = function(e) {
                this._allowDeviceFields && this._addContext("DeviceInfo.Make", e)
            }
            ,
            e.prototype.setDeviceModel = function(e) {
                this._allowDeviceFields && this._addContext("DeviceInfo.Model", e)
            }
            ,
            e.prototype.setUserId = function(e, t, n) {
                if (!isNaN(n) && null !== n && 0 <= n && 12 >= n)
                    this._addContext(s, n.toString());
                else {
                    var i;
                    i = t === r.AWTPiiKind.SipAddress ? a.AWTUserIdType.SipAddress : t === r.AWTPiiKind.PhoneNumber ? a.AWTUserIdType.PhoneNumber : t === r.AWTPiiKind.SmtpAddress ? a.AWTUserIdType.EmailAddress : a.AWTUserIdType.Unknown,
                    this._addContext(s, i.toString())
                }
                (isNaN(t) || null === t || t === r.AWTPiiKind.NotSet || 13 < t) && (t = n === a.AWTUserIdType.Skype ? r.AWTPiiKind.Identity : n === a.AWTUserIdType.EmailAddress ? r.AWTPiiKind.SmtpAddress : n === a.AWTUserIdType.PhoneNumber ? r.AWTPiiKind.PhoneNumber : n === a.AWTUserIdType.SipAddress ? r.AWTPiiKind.SipAddress : r.AWTPiiKind.NotSet),
                this._addContextWithPii("UserInfo.Id", e, t)
            }
            ,
            e.prototype.setUserAdvertisingId = function(e) {
                this._addContext("UserInfo.AdvertisingId", e)
            }
            ,
            e.prototype.setUserTimeZone = function(e) {
                this._addContext("UserInfo.TimeZone", e)
            }
            ,
            e.prototype.setUserLanguage = function(e) {
                this._addContext("UserInfo.Language", e)
            }
            ,
            e.prototype._addContext = function(e, t) {
                "string" == typeof t && this._properties.setProperty(e, t)
            }
            ,
            e.prototype._addContextWithPii = function(e, t, n) {
                "string" == typeof t && this._properties.setPropertyWithPii(e, t, n)
            }
            ,
            e
        }();
        t.default = o
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(21)
          , a = n(0)
          , s = n(2)
          , o = n(1)
          , d = 2936012
          , i = function() {
            function e() {}
            return e.getPayloadBlob = function(e, t) {
                var n = !1, l = new r.IO.MemoryStream, c = new r.CompactBinaryProtocolWriter(l), p;
                for (var m in c._WriteFieldBegin(r._BondDataType._BT_MAP, 3, null),
                c._WriteMapContainerBegin(t, r._BondDataType._BT_STRING, r._BondDataType._BT_LIST),
                e)
                    if (!!n)
                        p || (p = {}),
                        p[m] = e[m],
                        delete e[m];
                    else if (e.hasOwnProperty(m)) {
                        c._WriteString(m);
                        var u = e[m];
                        c._WriteContainerBegin(1, r._BondDataType._BT_STRUCT),
                        c._WriteFieldBegin(r._BondDataType._BT_STRING, 2, null),
                        c._WriteString("act_default_source"),
                        c._WriteFieldBegin(r._BondDataType._BT_STRING, 5, null),
                        c._WriteString(o.newGuid()),
                        c._WriteFieldBegin(r._BondDataType._BT_INT64, 6, null),
                        c._WriteInt64(o.numberToBondInt64(Date.now())),
                        c._WriteFieldBegin(r._BondDataType._BT_LIST, 8, null);
                        var g = l._GetBuffer().length + 1;
                        c._WriteContainerBegin(e[m].length, r._BondDataType._BT_STRUCT);
                        for (var y = l._GetBuffer().length - g, _ = 0, I; _ < u.length; ++_) {
                            if (I = l._GetBuffer().length,
                            this.writeEvent(u[_], c),
                            l._GetBuffer().length - I > d) {
                                s.default.eventsRejected([u[_]], a.AWTEventsRejectedReason.SizeLimitExceeded),
                                u.splice(_--, 1),
                                l._GetBuffer().splice(I),
                                this._addNewDataPackageSize(u.length, l, y, g);
                                continue
                            }
                            if (l._GetBuffer().length > d) {
                                l._GetBuffer().splice(I),
                                p || (p = {}),
                                e[m] = u.splice(0, _),
                                p[m] = u,
                                this._addNewDataPackageSize(e[m].length, l, y, g),
                                n = !0;
                                break
                            }
                        }
                        c._WriteStructEnd(!1)
                    }
                return c._WriteStructEnd(!1),
                {
                    payloadBlob: l._GetBuffer(),
                    remainingRequest: p
                }
            }
            ,
            e._addNewDataPackageSize = function(e, t, n, i) {
                for (var a = r._Encoding._Varint_GetBytes(r.Number._ToUInt32(e)), s = 0; s < n; ++s)
                    if (s < a.length)
                        t._GetBuffer()[i + s] = a[s];
                    else {
                        t._GetBuffer().slice(i + s, n - s);
                        break
                    }
            }
            ,
            e.writeEvent = function(e, t) {
                t._WriteFieldBegin(r._BondDataType._BT_STRING, 1, null),
                t._WriteString(e.id),
                t._WriteFieldBegin(r._BondDataType._BT_INT64, 3, null),
                t._WriteInt64(o.numberToBondInt64(e.timestamp)),
                t._WriteFieldBegin(r._BondDataType._BT_STRING, 5, null),
                t._WriteString(e.type),
                t._WriteFieldBegin(r._BondDataType._BT_STRING, 6, null),
                t._WriteString(e.name);
                var n = {}
                  , i = 0
                  , s = {}
                  , d = 0
                  , l = {}
                  , c = 0
                  , p = {}
                  , m = 0
                  , u = {}
                  , g = 0
                  , y = {}
                  , _ = 0
                  , I = {}
                  , T = 0;
                for (var v in e.properties)
                    if (e.properties.hasOwnProperty(v)) {
                        var C = e.properties[v];
                        if (0 < C.cc)
                            I[v] = C,
                            T++;
                        else if (0 < C.pii)
                            y[v] = C,
                            _++;
                        else
                            switch (C.type) {
                            case a.AWTPropertyType.String:
                                n[v] = C.value,
                                i++;
                                break;
                            case a.AWTPropertyType.Int64:
                                s[v] = C.value,
                                d++;
                                break;
                            case a.AWTPropertyType.Double:
                                l[v] = C.value,
                                c++;
                                break;
                            case a.AWTPropertyType.Boolean:
                                p[v] = C.value,
                                m++;
                                break;
                            case a.AWTPropertyType.Date:
                                u[v] = C.value,
                                g++;
                            }
                    }
                if (i)
                    for (var v in t._WriteFieldBegin(r._BondDataType._BT_MAP, 13, null),
                    t._WriteMapContainerBegin(i, r._BondDataType._BT_STRING, r._BondDataType._BT_STRING),
                    n)
                        if (n.hasOwnProperty(v)) {
                            var h = n[v];
                            t._WriteString(v),
                            t._WriteString(h.toString())
                        }
                if (_)
                    for (var v in t._WriteFieldBegin(r._BondDataType._BT_MAP, 30, null),
                    t._WriteMapContainerBegin(_, r._BondDataType._BT_STRING, r._BondDataType._BT_STRUCT),
                    y)
                        if (y.hasOwnProperty(v)) {
                            var C = y[v];
                            t._WriteString(v),
                            t._WriteFieldBegin(r._BondDataType._BT_INT32, 1, null),
                            t._WriteInt32(1),
                            t._WriteFieldBegin(r._BondDataType._BT_INT32, 2, null),
                            t._WriteInt32(C.pii),
                            t._WriteFieldBegin(r._BondDataType._BT_STRING, 3, null),
                            t._WriteString(C.value.toString()),
                            t._WriteStructEnd(!1)
                        }
                if (m)
                    for (var v in t._WriteFieldBegin(r._BondDataType._BT_MAP, 31, null),
                    t._WriteMapContainerBegin(m, r._BondDataType._BT_STRING, r._BondDataType._BT_BOOL),
                    p)
                        if (p.hasOwnProperty(v)) {
                            var h = p[v];
                            t._WriteString(v),
                            t._WriteBool(h)
                        }
                if (g)
                    for (var v in t._WriteFieldBegin(r._BondDataType._BT_MAP, 32, null),
                    t._WriteMapContainerBegin(g, r._BondDataType._BT_STRING, r._BondDataType._BT_INT64),
                    u)
                        if (u.hasOwnProperty(v)) {
                            var h = u[v];
                            t._WriteString(v),
                            t._WriteInt64(o.numberToBondInt64(h))
                        }
                if (d)
                    for (var v in t._WriteFieldBegin(r._BondDataType._BT_MAP, 33, null),
                    t._WriteMapContainerBegin(d, r._BondDataType._BT_STRING, r._BondDataType._BT_INT64),
                    s)
                        if (s.hasOwnProperty(v)) {
                            var h = s[v];
                            t._WriteString(v),
                            t._WriteInt64(o.numberToBondInt64(h))
                        }
                if (c)
                    for (var v in t._WriteFieldBegin(r._BondDataType._BT_MAP, 34, null),
                    t._WriteMapContainerBegin(c, r._BondDataType._BT_STRING, r._BondDataType._BT_DOUBLE),
                    l)
                        if (l.hasOwnProperty(v)) {
                            var h = l[v];
                            t._WriteString(v),
                            t._WriteDouble(h)
                        }
                if (T)
                    for (var v in t._WriteFieldBegin(r._BondDataType._BT_MAP, 36, null),
                    t._WriteMapContainerBegin(T, r._BondDataType._BT_STRING, r._BondDataType._BT_STRUCT),
                    I)
                        if (I.hasOwnProperty(v)) {
                            var C = I[v];
                            t._WriteString(v),
                            t._WriteFieldBegin(r._BondDataType._BT_INT32, 1, null),
                            t._WriteInt32(C.cc),
                            t._WriteFieldBegin(r._BondDataType._BT_STRING, 2, null),
                            t._WriteString(C.value.toString()),
                            t._WriteStructEnd(!1)
                        }
                t._WriteStructEnd(!1)
            }
            ,
            e.base64Encode = function(e) {
                return r._Encoding._Base64_GetString(e)
            }
            ,
            e
        }();
        t.default = i
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1)
          , r = n(2)
          , a = n(0)
          , s = 6e4
          , o = function() {
            function e() {}
            return e.initialize = function(e) {
                var t = this;
                this._sendStats = e,
                this._isInitalized = !0,
                r.default.addNotificationListener({
                    eventsSent: function(e) {
                        t._addStat("records_sent_count", e.length, e[0].apiKey)
                    },
                    eventsDropped: function(e, n) {
                        n === a.AWTEventsDroppedReason.NonRetryableStatus ? (t._addStat("d_send_fail", e.length, e[0].apiKey),
                        t._addStat("records_dropped_count", e.length, e[0].apiKey)) : n === a.AWTEventsDroppedReason.QueueFull ? t._addStat("d_queue_full", e.length, e[0].apiKey) : void 0
                    },
                    eventsRejected: function(e, n) {
                        n === a.AWTEventsRejectedReason.InvalidEvent ? t._addStat("r_inv", e.length, e[0].apiKey) : n === a.AWTEventsRejectedReason.KillSwitch ? t._addStat("r_kl", e.length, e[0].apiKey) : n === a.AWTEventsRejectedReason.SizeLimitExceeded ? t._addStat("r_size", e.length, e[0].apiKey) : void 0,
                        t._addStat("r_count", e.length, e[0].apiKey)
                    },
                    eventsRetrying: null
                }),
                setTimeout(function() {
                    return t.flush()
                }, s)
            }
            ,
            e.teardown = function() {
                this._isInitalized && (this.flush(),
                this._isInitalized = !1)
            }
            ,
            e.eventReceived = function(t) {
                e._addStat("records_received_count", 1, t)
            }
            ,
            e.flush = function() {
                var e = this;
                if (this._isInitalized) {
                    for (var t in this._stats)
                        this._stats.hasOwnProperty(t) && this._sendStats(this._stats[t], t);
                    this._stats = {},
                    setTimeout(function() {
                        return e.flush()
                    }, s)
                }
            }
            ,
            e._addStat = function(e, t, n) {
                if (this._isInitalized && n !== i.StatsApiKey) {
                    var r = i.getTenantId(n);
                    this._stats[r] || (this._stats[r] = {}),
                    this._stats[r][e] ? this._stats[r][e] += t : this._stats[r][e] = t
                }
            }
            ,
            e._isInitalized = !1,
            e._stats = {},
            e
        }();
        t.default = o
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0)
          , r = n(6)
          , a = n(12)
          , s = n(13)
          , o = n(3)
          , d = n(2)
          , l = n(7)
          , c = function() {
            function e() {}
            return e.initialize = function(e, t) {
                if (void 0 === t && (t = {}),
                !this._isInitialized)
                    return this._isInitialized = !0,
                    a.default.defaultTenantToken = e,
                    this._overrideValuesFromConfig(t),
                    this._config.disableCookiesUsage && !this._config.propertyStorageOverride && (a.default.sessionEnabled = !1),
                    l.default.addPropertyStorageOverride(this._config.propertyStorageOverride),
                    l.default.autoCollect(a.default.semanticContext, this._config.disableCookiesUsage, this._config.userAgent),
                    o.default.initialize(this._config),
                    a.default.loggingEnabled = !0,
                    this._config.enableAutoUserSession && (this.getLogger().logSession(r.AWTSessionState.Started),
                    window.addEventListener("beforeunload", this.flushAndTeardown)),
                    this.getLogger()
            }
            ,
            e.getSemanticContext = function() {
                return a.default.semanticContext
            }
            ,
            e.flush = function(e) {
                this._isInitialized && !this._isDestroyed && o.default.flush(e)
            }
            ,
            e.flushAndTeardown = function() {
                this._isInitialized && !this._isDestroyed && (this._config.enableAutoUserSession && this.getLogger().logSession(r.AWTSessionState.Ended),
                o.default.flushAndTeardown(),
                a.default.loggingEnabled = !1,
                this._isDestroyed = !0)
            }
            ,
            e.pauseTransmission = function() {
                this._isInitialized && !this._isDestroyed && o.default.pauseTransmission()
            }
            ,
            e.resumeTransmision = function() {
                this._isInitialized && !this._isDestroyed && o.default.resumeTransmision()
            }
            ,
            e.setTransmitProfile = function(e) {
                this._isInitialized && !this._isDestroyed && o.default.setTransmitProfile(e)
            }
            ,
            e.loadTransmitProfiles = function(e) {
                this._isInitialized && !this._isDestroyed && o.default.loadTransmitProfiles(e)
            }
            ,
            e.setContext = function(e, t, n) {
                void 0 === n && (n = i.AWTPropertyType.Unspecified),
                a.default.logManagerContext.setProperty(e, t, n)
            }
            ,
            e.setContextWithPii = function(e, t, n, r) {
                void 0 === r && (r = i.AWTPropertyType.Unspecified),
                a.default.logManagerContext.setPropertyWithPii(e, t, n, r)
            }
            ,
            e.setContextWithCustomerContent = function(e, t, n, r) {
                void 0 === r && (r = i.AWTPropertyType.Unspecified),
                a.default.logManagerContext.setPropertyWithCustomerContent(e, t, n, r)
            }
            ,
            e.getLogger = function(e) {
                var t = e;
                return t && t !== a.default.defaultTenantToken || (t = ""),
                this._loggers[t] || (this._loggers[t] = new s.default(t)),
                this._loggers[t]
            }
            ,
            e.addNotificationListener = function(e) {
                d.default.addNotificationListener(e)
            }
            ,
            e.removeNotificationListener = function(e) {
                d.default.removeNotificationListener(e)
            }
            ,
            e._overrideValuesFromConfig = function(e) {
                e.collectorUri && (this._config.collectorUri = e.collectorUri),
                0 < e.cacheMemorySizeLimitInNumberOfEvents && (this._config.cacheMemorySizeLimitInNumberOfEvents = e.cacheMemorySizeLimitInNumberOfEvents),
                e.httpXHROverride && e.httpXHROverride.sendPOST && (this._config.httpXHROverride = e.httpXHROverride),
                e.propertyStorageOverride && e.propertyStorageOverride.getProperty && e.propertyStorageOverride.setProperty && (this._config.propertyStorageOverride = e.propertyStorageOverride),
                e.userAgent && (this._config.userAgent = e.userAgent),
                e.disableCookiesUsage && (this._config.disableCookiesUsage = e.disableCookiesUsage),
                e.canSendStatEvent && (this._config.canSendStatEvent = e.canSendStatEvent),
                e.enableAutoUserSession && "undefined" != typeof window && window.addEventListener && (this._config.enableAutoUserSession = e.enableAutoUserSession),
                0 < e.clockSkewRefreshDurationInMins && (this._config.clockSkewRefreshDurationInMins = e.clockSkewRefreshDurationInMins)
            }
            ,
            e._loggers = {},
            e._isInitialized = !1,
            e._isDestroyed = !1,
            e._config = {
                collectorUri: "https://browser.pipe.aria.microsoft.com/Collector/3.0/",
                cacheMemorySizeLimitInNumberOfEvents: 1e4,
                disableCookiesUsage: !1,
                canSendStatEvent: function() {
                    return !0
                },
                clockSkewRefreshDurationInMins: 0
            },
            e
        }();
        t.default = c
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(5)
          , r = n(8)
          , a = function() {
            function e() {}
            return e.logManagerContext = new i.default,
            e.sessionEnabled = !0,
            e.loggingEnabled = !1,
            e.defaultTenantToken = "",
            e.semanticContext = new r.default(!0,e.logManagerContext),
            e
        }();
        t.default = a
    }
    , function(e, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = i(0)
          , a = i(6)
          , s = i(5)
          , o = i(1)
          , d = i(10)
          , l = i(2)
          , c = i(3)
          , p = i(12)
          , m = i(15)
          , u = i(8)
          , g = i(7)
          , y = function() {
            function e(e) {
                this._apiKey = e,
                this._contextProperties = new s.default,
                this._semanticContext = new u.default(!1,this._contextProperties),
                this._sessionStartTime = 0,
                this._createInitId()
            }
            return e.prototype.setContext = function(e, t, n) {
                void 0 === n && (n = r.AWTPropertyType.Unspecified),
                this._contextProperties.setProperty(e, t, n)
            }
            ,
            e.prototype.setContextWithPii = function(e, t, n, i) {
                void 0 === i && (i = r.AWTPropertyType.Unspecified),
                this._contextProperties.setPropertyWithPii(e, t, n, i)
            }
            ,
            e.prototype.setContextWithCustomerContent = function(e, t, n, i) {
                void 0 === i && (i = r.AWTPropertyType.Unspecified),
                this._contextProperties.setPropertyWithCustomerContent(e, t, n, i)
            }
            ,
            e.prototype.getSemanticContext = function() {
                return this._semanticContext
            }
            ,
            e.prototype.logEvent = function(t) {
                if (p.default.loggingEnabled) {
                    this._apiKey || (this._apiKey = p.default.defaultTenantToken,
                    this._createInitId());
                    var n = !0;
                    o.isString(t) ? t = {
                        name: t
                    } : t instanceof s.default && (t = t.getEvent(),
                    n = !1),
                    d.default.eventReceived(this._apiKey),
                    e._logEvent(e._getInternalEvent(t, this._apiKey, n), this._contextProperties)
                }
            }
            ,
            e.prototype.logSession = function(n, i) {
                if (p.default.sessionEnabled) {
                    var s = {
                        name: "session",
                        type: "session",
                        properties: {}
                    };
                    if (e._addPropertiesToEvent(s, i),
                    s.priority = r.AWTEventPriority.High,
                    n === a.AWTSessionState.Started) {
                        if (0 < this._sessionStartTime)
                            return;
                        this._sessionStartTime = new Date().getTime(),
                        this._sessionId = o.newGuid(),
                        this.setContext("Session.Id", this._sessionId),
                        s.properties["Session.State"] = "Started"
                    } else if (n === a.AWTSessionState.Ended) {
                        if (0 === this._sessionStartTime)
                            return;
                        var d = t((new Date().getTime() - this._sessionStartTime) / 1e3);
                        s.properties["Session.Id"] = this._sessionId,
                        s.properties["Session.State"] = "Ended",
                        s.properties["Session.Duration"] = d.toString(),
                        s.properties["Session.DurationBucket"] = e._getSessionDurationFromTime(d),
                        this._sessionStartTime = 0,
                        this.setContext("Session.Id", null),
                        this._sessionId = void 0
                    } else
                        return;
                    s.properties["Session.FirstLaunchTime"] = g.default.firstLaunchTime,
                    this.logEvent(s)
                }
            }
            ,
            e.prototype.getSessionId = function() {
                return this._sessionId
            }
            ,
            e.prototype.logFailure = function(t, n, i, a, s) {
                if (t && n) {
                    var o = {
                        name: "failure",
                        type: "failure",
                        properties: {}
                    };
                    e._addPropertiesToEvent(o, s),
                    o.properties["Failure.Signature"] = t,
                    o.properties["Failure.Detail"] = n,
                    i && (o.properties["Failure.Category"] = i),
                    a && (o.properties["Failure.Id"] = a),
                    o.priority = r.AWTEventPriority.High,
                    this.logEvent(o)
                }
            }
            ,
            e.prototype.logPageView = function(t, n, i, r, a, s) {
                if (t && n) {
                    var o = {
                        name: "pageview",
                        type: "pageview",
                        properties: {}
                    };
                    e._addPropertiesToEvent(o, s),
                    o.properties["PageView.Id"] = t,
                    o.properties["PageView.Name"] = n,
                    i && (o.properties["PageView.Category"] = i),
                    r && (o.properties["PageView.Uri"] = r),
                    a && (o.properties["PageView.ReferrerUri"] = a),
                    this.logEvent(o)
                }
            }
            ,
            e.prototype._createInitId = function() {
                !e._initIdMap[this._apiKey] && this._apiKey && (e._initIdMap[this._apiKey] = o.newGuid())
            }
            ,
            e._addPropertiesToEvent = function(e, t) {
                if (t)
                    for (var n in t instanceof s.default && (t = t.getEvent()),
                    t.name && (e.name = t.name),
                    t.priority && (e.priority = t.priority),
                    t.properties)
                        t.properties.hasOwnProperty(n) && (e.properties[n] = t.properties[n])
            }
            ,
            e._getSessionDurationFromTime = function(e) {
                return 0 > e ? "Undefined" : 3 >= e ? "UpTo3Sec" : 10 >= e ? "UpTo10Sec" : 30 >= e ? "UpTo30Sec" : 60 >= e ? "UpTo60Sec" : 180 >= e ? "UpTo3Min" : 600 >= e ? "UpTo10Min" : 1800 >= e ? "UpTo30Min" : "Above30Min"
            }
            ,
            e._logEvent = function(e, t) {
                return e.name && o.isString(e.name) ? (e.name = e.name.toLowerCase(),
                e.name = e.name.replace(o.EventNameDotRegex, "_"),
                e.type = e.type && o.isString(e.type) ? e.type.toLowerCase() : "custom",
                o.EventNameAndTypeRegex.test(e.name) && o.EventNameAndTypeRegex.test(e.type) ? void ((!o.isNumber(e.timestamp) || 0 > e.timestamp) && (e.timestamp = new Date().getTime()),
                !e.properties && (e.properties = {}),
                this._addContextIfAbsent(e, t.getPropertyMap()),
                this._addContextIfAbsent(e, p.default.logManagerContext.getPropertyMap()),
                this._setDefaultProperty(e, "EventInfo.InitId", this._getInitId(e.apiKey)),
                this._setDefaultProperty(e, "EventInfo.Sequence", this._getSequenceId(e.apiKey)),
                this._setDefaultProperty(e, "EventInfo.SdkVersion", m.FullVersionString),
                this._setDefaultProperty(e, "EventInfo.Name", e.name),
                this._setDefaultProperty(e, "EventInfo.Time", new Date(e.timestamp).toISOString()),
                !o.isPriority(e.priority) && (e.priority = r.AWTEventPriority.Normal),
                this._sendEvent(e)) : void l.default.eventsRejected([e], r.AWTEventsRejectedReason.InvalidEvent)) : void l.default.eventsRejected([e], r.AWTEventsRejectedReason.InvalidEvent)
            }
            ,
            e._addContextIfAbsent = function(e, t) {
                if (t)
                    for (var n in t)
                        t.hasOwnProperty(n) && (e.properties[n] || (e.properties[n] = t[n]))
            }
            ,
            e._setDefaultProperty = function(e, t, n) {
                e.properties[t] = {
                    value: n,
                    pii: r.AWTPiiKind.NotSet,
                    type: r.AWTPropertyType.String
                }
            }
            ,
            e._sendEvent = function(e) {
                c.default.sendEvent(e)
            }
            ,
            e._getInternalEvent = function(e, t, n) {
                if (e.properties = e.properties || {},
                n)
                    for (var i in e.properties)
                        e.properties.hasOwnProperty(i) && (e.properties[i] = o.sanitizeProperty(i, e.properties[i]),
                        null === e.properties[i] && delete e.properties[i]);
                var r = e;
                return r.id = o.newGuid(),
                r.apiKey = t,
                r
            }
            ,
            e._getInitId = function(t) {
                return e._initIdMap[t]
            }
            ,
            e._getSequenceId = function(t) {
                return void 0 === e._sequenceIdMap[t] && (e._sequenceIdMap[t] = 0),
                (++e._sequenceIdMap[t]).toString()
            }
            ,
            e._sequenceIdMap = {},
            e._initIdMap = {},
            e
        }();
        n.default = y
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.AWT_REAL_TIME = "REAL_TIME",
        t.AWT_NEAR_REAL_TIME = "NEAR_REAL_TIME",
        t.AWT_BEST_EFFORT = "BEST_EFFORT"
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Version = "1.8.3",
        t.FullVersionString = "AWT-Web-JS-" + t.Version
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0);
        t.AWTPropertyType = i.AWTPropertyType,
        t.AWTPiiKind = i.AWTPiiKind,
        t.AWTEventPriority = i.AWTEventPriority,
        t.AWTEventsDroppedReason = i.AWTEventsDroppedReason,
        t.AWTEventsRejectedReason = i.AWTEventsRejectedReason,
        t.AWTCustomerContentKind = i.AWTCustomerContentKind;
        var r = n(6);
        t.AWTUserIdType = r.AWTUserIdType,
        t.AWTSessionState = r.AWTSessionState;
        var a = n(14);
        t.AWT_BEST_EFFORT = a.AWT_BEST_EFFORT,
        t.AWT_NEAR_REAL_TIME = a.AWT_NEAR_REAL_TIME,
        t.AWT_REAL_TIME = a.AWT_REAL_TIME;
        var s = n(5);
        t.AWTEventProperties = s.default;
        var o = n(13);
        t.AWTLogger = o.default;
        var d = n(11);
        t.AWTLogManager = d.default;
        var l = n(29);
        t.AWTTransmissionManager = l.default;
        var c = n(9);
        t.AWTSerializer = c.default;
        var p = n(8);
        t.AWTSemanticContext = p.default,
        t.AWT_COLLECTOR_URL_UNITED_STATES = "https://us.pipe.aria.microsoft.com/Collector/3.0/",
        t.AWT_COLLECTOR_URL_GERMANY = "https://de.pipe.aria.microsoft.com/Collector/3.0/",
        t.AWT_COLLECTOR_URL_JAPAN = "https://jp.pipe.aria.microsoft.com/Collector/3.0/",
        t.AWT_COLLECTOR_URL_AUSTRALIA = "https://au.pipe.aria.microsoft.com/Collector/3.0/",
        t.AWT_COLLECTOR_URL_EUROPE = "https://eu.pipe.aria.microsoft.com/Collector/3.0/",
        t.AWT_COLLECTOR_URL_USGOV_DOD = "https://pf.pipe.aria.microsoft.com/Collector/3.0",
        t.AWT_COLLECTOR_URL_USGOV_DOJ = "https://tb.pipe.aria.microsoft.com/Collector/3.0"
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n;
        (function(e) {
            e[e._BT_STOP = 0] = "_BT_STOP",
            e[e._BT_STOP_BASE = 1] = "_BT_STOP_BASE",
            e[e._BT_BOOL = 2] = "_BT_BOOL",
            e[e._BT_DOUBLE = 8] = "_BT_DOUBLE",
            e[e._BT_STRING = 9] = "_BT_STRING",
            e[e._BT_STRUCT = 10] = "_BT_STRUCT",
            e[e._BT_LIST = 11] = "_BT_LIST",
            e[e._BT_MAP = 13] = "_BT_MAP",
            e[e._BT_INT32 = 16] = "_BT_INT32",
            e[e._BT_INT64 = 17] = "_BT_INT64"
        }
        )(n = t._BondDataType || (t._BondDataType = {}))
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(4)
          , r = n(19)
          , a = n(22);
        t._Utf8_GetBytes = function(e) {
            for (var t = [], n = 0, r; n < e.length; ++n)
                r = e.charCodeAt(n),
                128 > r ? t.push(r) : 2048 > r ? t.push(192 | r >> 6, 128 | 63 & r) : 55296 > r || 57344 <= r ? t.push(224 | r >> 12, 128 | 63 & r >> 6, 128 | 63 & r) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++n)),
                t.push(240 | r >> 18, 128 | 63 & r >> 12, 128 | 63 & r >> 6, 128 | 63 & r));
            return t
        }
        ,
        t._Base64_GetString = function(e) {
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = [], r = e.length % 3, a = function(e) {
                return [t.charAt(63 & e >> 18), t.charAt(63 & e >> 12), t.charAt(63 & e >> 6), t.charAt(63 & e)].join("")
            }, s = 0, o = e.length - r, d; s < o; s += 3)
                d = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2],
                n.push(a(d));
            switch (r) {
            case 1:
                var d = e[e.length - 1];
                n.push(t.charAt(d >> 2)),
                n.push(t.charAt(63 & d << 4)),
                n.push("==");
                break;
            case 2:
                var l = (e[e.length - 2] << 8) + e[e.length - 1];
                n.push(t.charAt(l >> 10)),
                n.push(t.charAt(63 & l >> 4)),
                n.push(t.charAt(63 & l << 2)),
                n.push("=");
            }
            return n.join("")
        }
        ,
        t._Varint_GetBytes = function(e) {
            for (var t = []; 4294967168 & e; )
                t.push(128 | 127 & e),
                e >>>= 7;
            return t.push(127 & e),
            t
        }
        ,
        t._Varint64_GetBytes = function(e) {
            for (var t = e.low, n = e.high, i = []; n || 4294967168 & t; )
                i.push(128 | 127 & t),
                t = (127 & n) << 25 | t >>> 7,
                n >>>= 7;
            return i.push(127 & t),
            i
        }
        ,
        t._Double_GetBytes = function(e) {
            if (a.BrowserChecker._IsDataViewSupport()) {
                var t = new DataView(new ArrayBuffer(8));
                t.setFloat64(0, e, !0);
                for (var n = [], s = 0; 8 > s; ++s)
                    n.push(t.getUint8(s));
                return n
            }
            return r.FloatUtils._ConvertNumberToArray(e, !0)
        }
        ,
        t._Zigzag_EncodeZigzag32 = function(e) {
            return e = i.Number._ToInt32(e),
            e << 1 ^ e >> 31
        }
        ,
        t._Zigzag_EncodeZigzag64 = function(e) {
            var t = e.low
              , n = e.high
              , r = n << 1 | t >>> 31
              , a = t << 1;
            2147483648 & n && (r = ~r,
            a = ~a);
            var s = new i.UInt64("0");
            return s.low = a,
            s.high = r,
            s
        }
    }
    , function(n, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = function() {
            function n() {}
            return n._ConvertNumberToArray = function(n, r) {
                if (!n)
                    return r ? this._doubleZero : this._floatZero;
                var a = r ? 11 : 8
                  , s = r ? 52 : 23
                  , o = (1 << a - 1) - 1
                  , d = 0 > n ? 1 : 0;
                n = e(n);
                for (var l = t(n), c = n - l, p = 2 * (o + 2) + s, m = Array(p), u = 0; u < p; )
                    m[u++] = 0;
                for (u = o + 2; u && l; )
                    m[--u] = l % 2,
                    l = t(l / 2);
                for (u = o + 1; u < p - 1 && 0 < c; )
                    c *= 2,
                    1 <= c ? (m[++u] = 1,
                    --c) : m[++u] = 0;
                for (var g = 0; g < p && !m[g]; )
                    g++;
                var y = o + 1 - g
                  , _ = g + s;
                if (m[_ + 1]) {
                    for (u = _; u > g && (m[u] = 1 - m[u],
                    !m); --u)
                        ;
                    u === g && ++y
                }
                if (y > o || l)
                    return d ? r ? this._doubleNegInifinity : this._floatNegInifinity : r ? this._doubleInifinity : this._floatInifinity;
                if (y < 1 - o)
                    return r ? this._doubleZero : this._floatZero;
                if (r) {
                    var I = 0;
                    for (u = 0; 20 > u; ++u)
                        I = I << 1 | m[++g];
                    for (var T = 0; 52 > u; ++u)
                        T = T << 1 | m[++g];
                    I |= y + o << 20,
                    I = d << 31 | 2147483647 & I;
                    var v = [255 & T, 255 & T >> 8, 255 & T >> 16, T >>> 24, 255 & I, 255 & I >> 8, 255 & I >> 16, I >>> 24];
                    return v
                }
                var C = 0;
                for (u = 0; 23 > u; ++u)
                    C = C << 1 | m[++g];
                C |= y + o << 23,
                C = d << 31 | 2147483647 & C;
                var v = [255 & C, 255 & C >> 8, 255 & C >> 16, C >>> 24];
                return v
            }
            ,
            n._floatZero = [0, 0, 0, 0],
            n._doubleZero = [0, 0, 0, 0, 0, 0, 0, 0],
            n._floatInifinity = [0, 0, 128, 127],
            n._floatNegInifinity = [0, 0, 128, 255],
            n._doubleInifinity = [0, 0, 0, 0, 0, 0, 240, 127],
            n._doubleNegInifinity = [0, 0, 0, 0, 0, 0, 240, 255],
            n
        }();
        i.FloatUtils = r
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(4)
          , r = function() {
            function e() {
                this._buffer = []
            }
            return e.prototype._WriteByte = function(e) {
                this._buffer.push(i.Number._ToByte(e))
            }
            ,
            e.prototype._Write = function(e, t, n) {
                for (; n--; )
                    this._WriteByte(e[t++])
            }
            ,
            e.prototype._GetBuffer = function() {
                return this._buffer
            }
            ,
            e
        }();
        t.MemoryStream = r
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(17);
        t._BondDataType = i._BondDataType;
        var r = n(18);
        t._Encoding = r;
        var a = n(20);
        t.IO = a;
        var s = n(4);
        t.Int64 = s.Int64,
        t.UInt64 = s.UInt64,
        t.Number = s.Number;
        var o = function() {
            function e(e) {
                this._stream = e
            }
            return e.prototype._WriteBlob = function(e) {
                this._stream._Write(e, 0, e.length)
            }
            ,
            e.prototype._WriteBool = function(e) {
                this._stream._WriteByte(e ? 1 : 0)
            }
            ,
            e.prototype._WriteContainerBegin = function(e, t) {
                this._WriteUInt8(t),
                this._WriteUInt32(e)
            }
            ,
            e.prototype._WriteMapContainerBegin = function(e, t, n) {
                this._WriteUInt8(t),
                this._WriteUInt8(n),
                this._WriteUInt32(e)
            }
            ,
            e.prototype._WriteDouble = function(e) {
                var t = r._Double_GetBytes(e);
                this._stream._Write(t, 0, t.length)
            }
            ,
            e.prototype._WriteFieldBegin = function(e, t) {
                5 >= t ? this._stream._WriteByte(e | t << 5) : 255 >= t ? (this._stream._WriteByte(192 | e),
                this._stream._WriteByte(t)) : (this._stream._WriteByte(224 | e),
                this._stream._WriteByte(t),
                this._stream._WriteByte(t >> 8))
            }
            ,
            e.prototype._WriteInt32 = function(e) {
                e = r._Zigzag_EncodeZigzag32(e),
                this._WriteUInt32(e)
            }
            ,
            e.prototype._WriteInt64 = function(e) {
                this._WriteUInt64(r._Zigzag_EncodeZigzag64(e))
            }
            ,
            e.prototype._WriteString = function(e) {
                if ("" === e)
                    this._WriteUInt32(0);
                else {
                    var t = r._Utf8_GetBytes(e);
                    this._WriteUInt32(t.length),
                    this._stream._Write(t, 0, t.length)
                }
            }
            ,
            e.prototype._WriteStructEnd = function(e) {
                this._WriteUInt8(e ? i._BondDataType._BT_STOP_BASE : i._BondDataType._BT_STOP)
            }
            ,
            e.prototype._WriteUInt32 = function(e) {
                var t = r._Varint_GetBytes(s.Number._ToUInt32(e));
                this._stream._Write(t, 0, t.length)
            }
            ,
            e.prototype._WriteUInt64 = function(e) {
                var t = r._Varint64_GetBytes(e);
                this._stream._Write(t, 0, t.length)
            }
            ,
            e.prototype._WriteUInt8 = function(e) {
                this._stream._WriteByte(s.Number._ToUInt8(e))
            }
            ,
            e
        }();
        t.CompactBinaryProtocolWriter = o
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e._IsDataViewSupport = function() {
                return "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
            }
            ,
            e
        }();
        t.BrowserChecker = n
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e) {
                this.clockSkewRefreshDurationInMins = e,
                this._reset()
            }
            return e.prototype.allowRequestSending = function() {
                return this._isFirstRequest && !this._clockSkewSet ? (this._isFirstRequest = !1,
                this._allowRequestSending = !1,
                !0) : this._allowRequestSending
            }
            ,
            e.prototype.shouldAddClockSkewHeaders = function() {
                return this._shouldAddClockSkewHeaders
            }
            ,
            e.prototype.getClockSkewHeaderValue = function() {
                return this._clockSkewHeaderValue
            }
            ,
            e.prototype.setClockSkew = function(e) {
                this._clockSkewSet || (e ? this._clockSkewHeaderValue = e : this._shouldAddClockSkewHeaders = !1,
                this._clockSkewSet = !0,
                this._allowRequestSending = !0)
            }
            ,
            e.prototype._reset = function() {
                var e = this;
                this._isFirstRequest = !0,
                this._clockSkewSet = !1,
                this._allowRequestSending = !0,
                this._shouldAddClockSkewHeaders = !0,
                this._clockSkewHeaderValue = "use-collector-delta",
                0 < this.clockSkewRefreshDurationInMins && setTimeout(function() {
                    return e._reset()
                }, 6e4 * this.clockSkewRefreshDurationInMins)
            }
            ,
            e
        }();
        t.default = n
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this._killedTokenDictionary = {}
            }
            return e.prototype.setKillSwitchTenants = function(e, t) {
                if (e && t)
                    try {
                        var n = e.split(",");
                        if ("this-request-only" === t)
                            return n;
                        for (var r = 1000 * parseInt(t, 10), a = 0; a < n.length; ++a)
                            this._killedTokenDictionary[n[a]] = Date.now() + r
                    } catch (e) {
                        return []
                    }
                return []
            }
            ,
            e.prototype.isTenantKilled = function(e) {
                return !!(void 0 !== this._killedTokenDictionary[e] && this._killedTokenDictionary[e] > Date.now()) || (delete this._killedTokenDictionary[e],
                !1)
            }
            ,
            e
        }();
        t.default = n
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0)
          , r = function() {
            function e(e, t) {
                this._outboundQueue = e,
                this._maxNumberOfEvents = t,
                this._currentBatch = {},
                this._currentNumEventsInBatch = 0
            }
            return e.prototype.addEventToBatch = function(e) {
                if (e.priority === i.AWTEventPriority.Immediate_sync) {
                    var t = {};
                    return t[e.apiKey] = [e],
                    t
                }
                return this._currentNumEventsInBatch >= this._maxNumberOfEvents && this.flushBatch(),
                void 0 === this._currentBatch[e.apiKey] && (this._currentBatch[e.apiKey] = []),
                this._currentBatch[e.apiKey].push(e),
                this._currentNumEventsInBatch++,
                null
            }
            ,
            e.prototype.flushBatch = function() {
                0 < this._currentNumEventsInBatch && (this._outboundQueue.push(this._currentBatch),
                this._currentBatch = {},
                this._currentNumEventsInBatch = 0)
            }
            ,
            e.prototype.hasBatch = function() {
                return 0 < this._currentNumEventsInBatch
            }
            ,
            e
        }();
        t.default = r
    }
    , function(e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = 3e3
          , r = function() {
            function e() {}
            return e.shouldRetryForStatus = function(e) {
                return !(300 <= e && 500 > e && 408 !== e || 501 === e || 505 === e)
            }
            ,
            e.getMillisToBackoffForRetry = function(e) {
                var n = 0
                  , r = i * .8
                  , a = t(Math.random() * (i * 1.2 - r)) + r;
                return n = Math.pow(4, e) * a,
                Math.min(n, 12e4)
            }
            ,
            e
        }();
        n.default = r
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , a = n(9)
          , s = n(26)
          , i = n(24)
          , o = n(23)
          , d = n(15)
          , l = n(1)
          , c = n(2)
          , p = n(3)
          , m = "POST"
          , u = function() {
            function e(e, t, n, r, a) {
                var s = this;
                this._requestQueue = e,
                this._queueManager = n,
                this._httpInterface = r,
                this._urlString = "?qsp=true&content-type=application%2Fbond-compact-binary&client-id=NO_AUTH&sdk-version=" + d.FullVersionString,
                this._killSwitch = new i.default,
                this._paused = !1,
                this._useBeacons = !1,
                this._activeConnections = 0,
                this._clockSkewManager = new o.default(a),
                l.isUint8ArrayAvailable() || (this._urlString += "&content-encoding=base64"),
                this._urlString = t + this._urlString,
                this._httpInterface || (this._useBeacons = !l.isReactNative(),
                this._httpInterface = {
                    sendPOST: function(e, t, n, i, r, a) {
                        try {
                            if (l.useXDomainRequest()) {
                                var o = new XDomainRequest;
                                o.open(m, e),
                                o.onload = function() {
                                    r(200, null)
                                }
                                ,
                                o.onerror = function() {
                                    i(400, null)
                                }
                                ,
                                o.ontimeout = function() {
                                    n(500, null)
                                }
                                ,
                                o.send(t)
                            } else if (l.isReactNative())
                                fetch(e, {
                                    body: t,
                                    method: m
                                }).then(function(e) {
                                    var t = {};
                                    e.headers && e.headers.forEach(function(e, n) {
                                        t[n] = e
                                    }),
                                    r(e.status, t)
                                }).catch(function() {
                                    i(0, {})
                                });
                            else {
                                var d = new XMLHttpRequest;
                                d.open(m, e, !a),
                                d.onload = function() {
                                    r(d.status, s._convertAllHeadersToMap(d.getAllResponseHeaders()))
                                }
                                ,
                                d.onerror = function() {
                                    i(d.status, s._convertAllHeadersToMap(d.getAllResponseHeaders()))
                                }
                                ,
                                d.ontimeout = function() {
                                    n(d.status, s._convertAllHeadersToMap(d.getAllResponseHeaders()))
                                }
                                ,
                                d.send(t)
                            }
                        } catch (t) {
                            i(400, null)
                        }
                    }
                })
            }
            return e.prototype.hasIdleConnection = function() {
                return this._activeConnections < 2
            }
            ,
            e.prototype.sendQueuedRequests = function() {
                for (; this.hasIdleConnection() && !this._paused && 0 < this._requestQueue.length && this._clockSkewManager.allowRequestSending(); )
                    this._activeConnections++,
                    this._sendRequest(this._requestQueue.shift(), 0, !1);
                this.hasIdleConnection() && p.default.scheduleTimer()
            }
            ,
            e.prototype.isCompletelyIdle = function() {
                return 0 === this._activeConnections
            }
            ,
            e.prototype.teardown = function() {
                for (; 0 < this._requestQueue.length; )
                    this._sendRequest(this._requestQueue.shift(), 0, !0)
            }
            ,
            e.prototype.pause = function() {
                this._paused = !0
            }
            ,
            e.prototype.resume = function() {
                this._paused = !1,
                this.sendQueuedRequests()
            }
            ,
            e.prototype.removeQueuedRequests = function() {
                this._requestQueue.length = 0
            }
            ,
            e.prototype.sendSynchronousRequest = function(e, t) {
                this._paused && (e[t][0].priority = r.AWTEventPriority.High),
                this._activeConnections++,
                this._sendRequest(e, 0, !1, !0)
            }
            ,
            e.prototype._sendRequest = function(e, t, n, s) {
                var o = this;
                void 0 === s && (s = !1);
                try {
                    if (this._paused)
                        return this._activeConnections--,
                        void this._queueManager.addBackRequest(e);
                    var d = 0
                      , p = "";
                    for (var m in e)
                        e.hasOwnProperty(m) && (this._killSwitch.isTenantKilled(m) ? (c.default.eventsRejected(e[m], r.AWTEventsRejectedReason.KillSwitch),
                        delete e[m]) : (0 < p.length && (p += ","),
                        p += m,
                        d++));
                    if (0 < d) {
                        var u = a.default.getPayloadBlob(e, d);
                        u.remainingRequest && this._requestQueue.push(u.remainingRequest);
                        var g = this._urlString + "&x-apikey=" + p + "&client-time-epoch-millis=" + Date.now().toString();
                        this._clockSkewManager.shouldAddClockSkewHeaders() && (g = g + "&time-delta-to-apply-millis=" + this._clockSkewManager.getClockSkewHeaderValue());
                        var y;
                        for (var m in y = l.isUint8ArrayAvailable() ? new Uint8Array(u.payloadBlob) : a.default.base64Encode(u.payloadBlob),
                        e)
                            if (e.hasOwnProperty(m))
                                for (var _ = 0; _ < e[m].length; ++_)
                                    0 < e[m][_].sendAttempt ? e[m][_].sendAttempt++ : e[m][_].sendAttempt = 1;
                        if (this._useBeacons && n && l.isBeaconsSupported() && navigator.sendBeacon(g, y))
                            return;
                        this._httpInterface.sendPOST(g, y, function(i, r) {
                            o._retryRequestIfNeeded(i, r, e, d, p, t, n, s)
                        }, function(i, r) {
                            o._retryRequestIfNeeded(i, r, e, d, p, t, n, s)
                        }, function(i, r) {
                            o._retryRequestIfNeeded(i, r, e, d, p, t, n, s)
                        }, n || s)
                    } else
                        n || this._handleRequestFinished(!1, {}, n, s)
                } catch (t) {
                    this._handleRequestFinished(!1, {}, n, s)
                }
            }
            ,
            e.prototype._retryRequestIfNeeded = function(e, t, n, a, o, d, l, m) {
                var u = this
                  , g = !0;
                if ("undefined" != typeof e) {
                    if (t) {
                        var y = this._killSwitch.setKillSwitchTenants(t["kill-tokens"], t["kill-duration-seconds"]);
                        this._clockSkewManager.setClockSkew(t["time-delta-millis"]);
                        for (var _ = 0; _ < y.length; ++_)
                            c.default.eventsRejected(n[y[_]], r.AWTEventsRejectedReason.KillSwitch),
                            delete n[y[_]],
                            a--
                    } else
                        this._clockSkewManager.setClockSkew(null);
                    if (200 === e)
                        return void this._handleRequestFinished(!0, n, l, m);
                    (!s.default.shouldRetryForStatus(e) || 0 >= a) && (g = !1)
                }
                if (!g)
                    this._handleRequestFinished(!1, n, l, m);
                else if (m)
                    this._activeConnections--,
                    n[o][0].priority = r.AWTEventPriority.High,
                    this._queueManager.addBackRequest(n);
                else if (d < 1) {
                    for (var I in n)
                        n.hasOwnProperty(I) && c.default.eventsRetrying(n[I]);
                    setTimeout(function() {
                        return u._sendRequest(n, d + 1, !1)
                    }, s.default.getMillisToBackoffForRetry(d))
                } else
                    this._activeConnections--,
                    p.default.backOffTransmission(),
                    this._queueManager.addBackRequest(n)
            }
            ,
            e.prototype._handleRequestFinished = function(e, t, n, i) {
                for (var a in e && p.default.clearBackOff(),
                t)
                    t.hasOwnProperty(a) && (e ? c.default.eventsSent(t[a]) : c.default.eventsDropped(t[a], r.AWTEventsDroppedReason.NonRetryableStatus));
                this._activeConnections--,
                i || n || this.sendQueuedRequests()
            }
            ,
            e.prototype._convertAllHeadersToMap = function(e) {
                var t = {};
                if (e)
                    for (var n = e.split("\n"), r = 0, a; r < n.length; ++r)
                        a = n[r].split(": "),
                        t[a[0]] = a[1];
                return t
            }
            ,
            e
        }();
        t.default = u
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , i = n(27)
          , a = n(3)
          , s = n(25)
          , o = n(2)
          , d = n(1)
          , l = function() {
            function e(e, t, n, a) {
                this._queueSizeLimit = t,
                this._isCurrentlyUploadingNow = !1,
                this._uploadNowQueue = [],
                this._shouldDropEventsOnPause = !1,
                this._paused = !1,
                this._queueSize = 0,
                this._outboundQueue = [],
                this._inboundQueues = {},
                this._inboundQueues[r.AWTEventPriority.High] = [],
                this._inboundQueues[r.AWTEventPriority.Normal] = [],
                this._inboundQueues[r.AWTEventPriority.Low] = [],
                this._addEmptyQueues(),
                this._batcher = new s.default(this._outboundQueue,500),
                this._httpManager = new i.default(this._outboundQueue,e,this,n,a)
            }
            return e.prototype.addEvent = function(e) {
                d.isPriority(e.priority) || (e.priority = r.AWTEventPriority.Normal),
                e.priority === r.AWTEventPriority.Immediate_sync ? this._httpManager.sendSynchronousRequest(this._batcher.addEventToBatch(e), e.apiKey) : this._queueSize < this._queueSizeLimit ? this._addEventToProperQueue(e) : this._dropEventWithPriorityOrLess(e.priority) ? this._addEventToProperQueue(e) : o.default.eventsDropped([e], r.AWTEventsDroppedReason.QueueFull)
            }
            ,
            e.prototype.sendEventsForPriorityAndAbove = function(e) {
                this._batchEvents(e),
                this._httpManager.sendQueuedRequests()
            }
            ,
            e.prototype.hasEvents = function() {
                return (0 < this._inboundQueues[r.AWTEventPriority.High][0].length || 0 < this._inboundQueues[r.AWTEventPriority.Normal][0].length || 0 < this._inboundQueues[r.AWTEventPriority.Low][0].length || this._batcher.hasBatch()) && this._httpManager.hasIdleConnection()
            }
            ,
            e.prototype.addBackRequest = function(e) {
                if (!this._paused || !this._shouldDropEventsOnPause) {
                    for (var t in e)
                        if (e.hasOwnProperty(t))
                            for (var n = 0; n < e[t].length; ++n)
                                e[t][n].sendAttempt < 6 ? this.addEvent(e[t][n]) : o.default.eventsDropped([e[t][n]], r.AWTEventsDroppedReason.NonRetryableStatus);
                    a.default.scheduleTimer()
                }
            }
            ,
            e.prototype.teardown = function() {
                this._paused || (this._batchEvents(r.AWTEventPriority.Low),
                this._httpManager.teardown())
            }
            ,
            e.prototype.uploadNow = function(e) {
                var t = this;
                this._addEmptyQueues(),
                this._isCurrentlyUploadingNow ? this._uploadNowQueue.push(e) : (this._isCurrentlyUploadingNow = !0,
                setTimeout(function() {
                    return t._uploadNow(e)
                }, 0))
            }
            ,
            e.prototype.pauseTransmission = function() {
                this._paused = !0,
                this._httpManager.pause(),
                this.shouldDropEventsOnPause && (this._queueSize -= this._inboundQueues[r.AWTEventPriority.High][0].length + this._inboundQueues[r.AWTEventPriority.Normal][0].length + this._inboundQueues[r.AWTEventPriority.Low][0].length,
                this._inboundQueues[r.AWTEventPriority.High][0] = [],
                this._inboundQueues[r.AWTEventPriority.Normal][0] = [],
                this._inboundQueues[r.AWTEventPriority.Low][0] = [],
                this._httpManager.removeQueuedRequests())
            }
            ,
            e.prototype.resumeTransmission = function() {
                this._paused = !1,
                this._httpManager.resume()
            }
            ,
            e.prototype.shouldDropEventsOnPause = function(e) {
                this._shouldDropEventsOnPause = e
            }
            ,
            e.prototype._removeFirstQueues = function() {
                this._inboundQueues[r.AWTEventPriority.High].shift(),
                this._inboundQueues[r.AWTEventPriority.Normal].shift(),
                this._inboundQueues[r.AWTEventPriority.Low].shift()
            }
            ,
            e.prototype._addEmptyQueues = function() {
                this._inboundQueues[r.AWTEventPriority.High].push([]),
                this._inboundQueues[r.AWTEventPriority.Normal].push([]),
                this._inboundQueues[r.AWTEventPriority.Low].push([])
            }
            ,
            e.prototype._addEventToProperQueue = function(e) {
                this._paused && this._shouldDropEventsOnPause || (this._queueSize++,
                this._inboundQueues[e.priority][this._inboundQueues[e.priority].length - 1].push(e))
            }
            ,
            e.prototype._dropEventWithPriorityOrLess = function(e) {
                for (var t = r.AWTEventPriority.Low; t <= e; ) {
                    if (0 < this._inboundQueues[t][this._inboundQueues[t].length - 1].length)
                        return o.default.eventsDropped([this._inboundQueues[t][this._inboundQueues[t].length - 1].shift()], r.AWTEventsDroppedReason.QueueFull),
                        !0;
                    t++
                }
                return !1
            }
            ,
            e.prototype._batchEvents = function(e) {
                for (var t = r.AWTEventPriority.High; t >= e; ) {
                    for (; 0 < this._inboundQueues[t][0].length; ) {
                        var n = this._inboundQueues[t][0].pop();
                        this._queueSize--,
                        this._batcher.addEventToBatch(n)
                    }
                    t--
                }
                this._batcher.flushBatch()
            }
            ,
            e.prototype._uploadNow = function(e) {
                var t = this;
                this.hasEvents() && this.sendEventsForPriorityAndAbove(r.AWTEventPriority.Low),
                this._checkOutboundQueueEmptyAndSent(function() {
                    t._removeFirstQueues(),
                    null !== e && void 0 !== e && e(),
                    0 < t._uploadNowQueue.length ? setTimeout(function() {
                        return t._uploadNow(t._uploadNowQueue.shift())
                    }, 0) : (t._isCurrentlyUploadingNow = !1,
                    t.hasEvents() && a.default.scheduleTimer())
                })
            }
            ,
            e.prototype._checkOutboundQueueEmptyAndSent = function(e) {
                var t = this;
                this._httpManager.isCompletelyIdle() ? e() : setTimeout(function() {
                    return t._checkOutboundQueueEmptyAndSent(e)
                }, 250)
            }
            ,
            e
        }();
        t.default = l
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(3)
          , r = function() {
            function e() {}
            return e.setEventsHandler = function(e) {
                i.default.setEventsHandler(e)
            }
            ,
            e.getEventsHandler = function() {
                return i.default.getEventsHandler()
            }
            ,
            e.scheduleTimer = function() {
                i.default.scheduleTimer()
            }
            ,
            e
        }();
        t.default = r
    }
    , function(e, t, n) {
        e.exports = n(16)
    }
    ])
});
var Microsoft;
(function(e) {
    var t;
    (function(e) {
        var t;
        (function(t) {
            class n {
                constructor(e) {
                    this.hostIFrame = e,
                    this.provider = null,
                    this.visibility = !0,
                    this.preservedHeight = 0
                }
                setVisibility(e) {
                    return this.visibility = e,
                    !0
                }
                setHeight(e) {
                    return !!this.hostIFrame && (this.hostIFrame.height = this.visibility ? 0 < e ? e.toString() : "calc(100% - 10px)" : "0",
                    !0)
                }
                static getDefaultWidth() {
                    return e.Constants.DEFAULT_WIDGET_WIDTH.toString()
                }
                setWidth(e) {
                    return !!this.hostIFrame && (this.preservedWidth = e,
                    this.hostIFrame.width = this.visibility ? 0 < e ? e.toString() : n.getDefaultWidth() : "0",
                    !0)
                }
                getContentWindow() {
                    return this.hostIFrame ? this.hostIFrame.contentWindow : null
                }
                setProvider(e) {
                    this.provider = e
                }
            }
            t.WidgetIFrameWrapper = n
        }
        )(t = e.Internal || (e.Internal = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(e) {
        var t;
        (function(e) {
            var t;
            (function(e) {
                e.apiVersion = "API_Version",
                e.appId = "App_ID",
                e.channelOrder = "Channel_Order",
                e.clientType = "Client_Type",
                e.crmVersion = "CRM_Version",
                e.orgId = "Organization_ID",
                e.orgName = "Organization_Name",
                e.providerId = "Provider_ID",
                e.providerName = "Provider_Name",
                e.startTime = "Start_Time",
                e.timeTaken = "Time_Taken",
                e.apiName = "API_Name",
                e.telemetryData = "API_Perf_Markers",
                e.isError = "Is_Error",
                e.errorMessage = "Error_Message",
                e.errorType = "Error_Type",
                e.errorReportTime = "Error_Report_Time",
                e.errorFunction = "Error_Function",
                e.perfTable = "D365_CIF_Perf",
                e.usageTable = "D365_CIF_Usage",
                e.userId = "User_ID",
                e.CIFVersion = "CIF_Version"
            }
            )(t = e.TelemetryConstants || (e.TelemetryConstants = {}))
        }
        )(t = e.Internal || (e.Internal = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(e) {
        var t;
        (function(e) {
            var t;
            (function(e) {
                e[e.InvalidParams = 0] = "InvalidParams",
                e[e.TimeOut = 1] = "TimeOut",
                e[e.XrmApiError = 2] = "XrmApiError",
                e[e.GenericError = 3] = "GenericError"
            }
            )(t = e.errorTypes || (e.errorTypes = {}))
        }
        )(t = e.Internal || (e.Internal = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(t) {
        var n;
        (function(t) {
            function n() {
                let e = window.location.host;
                return e || (e = window.parent.location.host),
                e
            }
            function i() {
                let e = n();
                return e.endsWith("dod-crm.microsoftdynamics.us") ? "DoD" : e.endsWith("crm9.dynamics.com") || e.endsWith("crm.microsoftdynamics.us") ? "GCCHigh" : e.endsWith("crm.microsoftdynamics.de") ? "BlackForest" : e.endsWith("crm.dynamics.cn") ? "MoonCake" : e.endsWith("crm4.dynamics.com") ? "Europe" : e.endsWith("extest.microsoft.com") || e.endsWith("crm10.dynamics.com") || e.endsWith("crm.crmlivetie.com") || e.endsWith("crm2.crmlivetie.com") || e.endsWith("contoso.com:444") || e.endsWith("microsoft.com") || e.endsWith("msmecrm.com") || e.endsWith("crm.crmlivetoday.com") || e.endsWith("crm.1boxtest.com") || e.endsWith("crm.crmifd.com") || e.endsWith("msmecrm.com:444") || 0 == e.search("localhost") ? "Dev" : "Public"
            }
            function r(e) {
                let t = {
                    disableCookiesUsage: !0
                };
                return "GCCHigh" === e ? t.collectorUri = o : "DoD" === e ? t.collectorUri = d : "BlackForest" === e ? t.collectorUri = s : "Europe" === e ? t.collectorUri = l : void 0,
                t
            }
            function a(e) {
                var n = new AWTEventProperties;
                n.setName(t.TelemetryConstants.usageTable),
                n.setProperty(t.TelemetryConstants.apiVersion, e.apiVersion ? e.apiVersion : ""),
                n.setProperty(t.TelemetryConstants.appId, e.appId ? e.appId : ""),
                n.setProperty(t.TelemetryConstants.channelOrder, e.sortOrder ? e.sortOrder : ""),
                n.setProperty(t.TelemetryConstants.clientType, Xrm.Utility.getGlobalContext().client.getClient()),
                n.setProperty(t.TelemetryConstants.crmVersion, Xrm.Utility.getGlobalContext().getVersion()),
                n.setProperty(t.TelemetryConstants.orgId, Xrm.Utility.getGlobalContext().organizationSettings.organizationId),
                n.setProperty(t.TelemetryConstants.orgName, Xrm.Utility.getGlobalContext().organizationSettings.uniqueName),
                n.setProperty(t.TelemetryConstants.providerId, e.providerId ? e.providerId : ""),
                n.setProperty(t.TelemetryConstants.providerName, e.providerName ? e.providerName : ""),
                n.setProperty(t.TelemetryConstants.isError, !!e.isError && e.isError),
                n.setProperty(t.TelemetryConstants.errorMessage, e.errorObject ? e.errorObject.errorMsg : ""),
                n.setProperty(t.TelemetryConstants.errorType, e.errorObject ? t.errorTypes[e.errorObject.errorType] : ""),
                n.setProperty(t.TelemetryConstants.errorReportTime, e.errorObject ? e.errorObject.reportTime : ""),
                n.setProperty(t.TelemetryConstants.errorFunction, e.errorObject ? e.errorObject.sourceFunc : ""),
                n.setProperty(t.TelemetryConstants.userId, Xrm.Utility.getGlobalContext().userSettings.userId),
                n.setProperty(t.TelemetryConstants.apiName, e.apiName ? e.apiName : ""),
                n.setProperty(t.TelemetryConstants.CIFVersion, e.cifVersion),
                defaultLogger.logEvent(n)
            }
            let s = "https://de.pipe.aria.microsoft.com/Collector/3.0/"
              , o = "https://tb.pipe.aria.microsoft.com/Collector/3.0/"
              , d = "https://pf.pipe.aria.microsoft.com/Collector/3.0"
              , l = "https://eu.pipe.aria.microsoft.com/Collector/3.0/";
            t.initializeTelemetry = function() {
                let e = i()
                  , t = r(e);
                defaultLogger = "Dev" == e ? AWTLogManager.initialize("d129926264ad4dcc891eaf004fb351de-9bb27fd5-7e89-42a5-960c-c397c94ce2af-7153", t) : AWTLogManager.initialize("0cd345da5c484bff8b75c696a3ac2159-3a768593-5759-4630-a59e-a75af2a7bf20-6631", t),
                AWTLogManager.addNotificationListener({
                    eventsSent: e=>{
                        console.log("CIF Telemetry - Number of Events Sent: " + e.length)
                    }
                    ,
                    eventsDropped: e=>{
                        console.log("CIF Telemetry - Number of Events Dropped: " + e.length)
                    }
                })
            }
            ,
            t.generateErrorObject = function(t, e, n) {
                let i = {};
                try {
                    i.errorMsg = t.get("message")
                } catch (n) {
                    i.errorMsg = t.message
                }
                return i.sourceFunc = e,
                i.errorType = n,
                i.reportTime = new Date().toUTCString(),
                i
            }
            ,
            t.logFailure = function(t, n, i, r, s, o, d) {
                var l = new c(o ? o : "",d ? d : "",null,r,null,t ? t : "",s,!!n && n,i ? i : null);
                return a(l),
                Promise.reject(e.CIFramework.Utility.createErrorMap(i.errorMsg, r))
            }
            ,
            t.setUsageData = a,
            t.logApiData = function(e, t, n, i) {
                let r = {};
                r.StartTime = t.toUTCString(),
                r.TimeTaken = n,
                e && (e[i] = r)
            }
            ,
            t.setPerfData = function(e) {
                var n = new AWTEventProperties;
                n.setName(t.TelemetryConstants.perfTable),
                n.setProperty(t.TelemetryConstants.providerId, e.providerData.providerId ? e.providerData.providerId : ""),
                n.setProperty(t.TelemetryConstants.providerName, e.providerData.name ? e.providerData.name : ""),
                n.setProperty(t.TelemetryConstants.crmVersion, e.providerData.crmVersion ? e.providerData.crmVersion : ""),
                n.setProperty(t.TelemetryConstants.appId, e.providerData.appId ? e.providerData.appId : ""),
                n.setProperty(t.TelemetryConstants.apiVersion, e.providerData.apiVersion ? e.providerData.apiVersion : ""),
                n.setProperty(t.TelemetryConstants.orgId, Xrm.Utility.getGlobalContext().organizationSettings.organizationId),
                n.setProperty(t.TelemetryConstants.orgName, e.providerData.orgName ? e.providerData.orgName : ""),
                n.setProperty(t.TelemetryConstants.startTime, e.startTime ? e.startTime.toUTCString() : ""),
                n.setProperty(t.TelemetryConstants.timeTaken, e.timeTaken ? e.timeTaken : ""),
                n.setProperty(t.TelemetryConstants.apiName, e.apiName ? e.apiName : ""),
                n.setProperty(t.TelemetryConstants.telemetryData, e.telemetryData ? JSON.stringify(e.telemetryData) : ""),
                n.setProperty(t.TelemetryConstants.CIFVersion, e.cifVersion),
                defaultLogger.logEvent(n)
            }
            ;
            class c {
                constructor(e, t, n, i, r, a, s, o, d) {
                    this.providerId = e ? e : "",
                    this.providerName = t ? t : "",
                    this.apiVersion = n ? n : "",
                    this.apiName = i ? i : "",
                    this.sortOrder = r ? r : "",
                    this.appId = a ? a : "",
                    this.isError = !!o && o,
                    this.errorObject = d ? d : null,
                    this.cifVersion = s ? s : ""
                }
            }
            t.UsageTelemetryData = c;
            t.PerfTelemetryData = class {
                constructor(e, t, n, i, r, a) {
                    this.providerData = e ? e : null,
                    this.startTime = t ? t : "",
                    this.timeTaken = n ? n : "",
                    this.apiName = i ? i : "",
                    this.telemetryData = a ? a : null,
                    this.cifVersion = r ? r : ""
                }
            }
        }
        )(n = t.Internal || (t.Internal = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(Microsoft) {
    var CIFramework;
    (function(CIFramework) {
        var Internal;
        (function(Internal) {
            function webClient() {
                let client = {};
                return client.registerHandler = (e,t)=>(this.eventHandlers || (this.eventHandlers = new Map),
                t && this.eventHandlers.set(e, t),
                !0),
                client.removeHandler = e=>{
                    if (!this.eventHandlers)
                        return null;
                    let t = this.eventHandlers.get(e);
                    return this.eventHandlers.delete(e),
                    t
                }
                ,
                client.createRecord = (e,t,n,i)=>{
                    if (!i) {
                        let e = {
                            errorMsg: "Need values to create for createRecord",
                            errorType: Internal.errorTypes.InvalidParams,
                            reportTime: new Date().toUTCString(),
                            sourceFunc: "client.createRecord"
                        };
                        return Promise.reject(e)
                    }
                    let r = null;
                    return r = "string" == typeof i ? JSON.parse(i) : i,
                    new Promise((t,i)=>{
                        let a = new Date;
                        return Xrm.WebApi.createRecord(e, Microsoft.CIFramework.Utility.buildEntity(r)).then(e=>{
                            let i = Date.now() - a.getTime();
                            return Internal.logApiData(n, a, i, "Xrm.WebApi.createRecord"),
                            t(Microsoft.CIFramework.Utility.buildMap(e))
                        }
                        , e=>{
                            let t = Internal.generateErrorObject(e, "client.createRecord - Xrm.WebApi.createRecord", Internal.errorTypes.XrmApiError);
                            return i(t)
                        }
                        )
                    }
                    )
                }
                ,
                client.updateRecord = (e,t,n,i)=>{
                    if (!i) {
                        let e = {
                            errorMsg: "Need values to Update for updateRecord",
                            errorType: Internal.errorTypes.InvalidParams,
                            reportTime: new Date().toUTCString(),
                            sourceFunc: "client.updateRecord"
                        };
                        return Promise.reject(e)
                    }
                    let r = null;
                    return r = "string" == typeof i ? JSON.parse(i) : i,
                    new Promise((i,a)=>{
                        let s = new Date;
                        return Xrm.WebApi.updateRecord(e, t, Microsoft.CIFramework.Utility.buildEntity(r)).then(e=>{
                            let t = Date.now() - s.getTime();
                            return Internal.logApiData(n, s, t, "Xrm.WebApi.updateRecord"),
                            i(Microsoft.CIFramework.Utility.buildMap(e))
                        }
                        , e=>{
                            let t = Internal.generateErrorObject(e, "client.updateRecord - Xrm.WebApi.updateRecord", Internal.errorTypes.XrmApiError);
                            return a(t)
                        }
                        )
                    }
                    )
                }
                ,
                client.retrieveRecord = (e,t,n,i)=>new Promise((r,a)=>{
                    let s = new Date;
                    return Xrm.WebApi.retrieveRecord(e, t, i).then(e=>{
                        let t = Date.now() - s.getTime();
                        return Internal.logApiData(n, s, t, "Xrm.WebApi.retrieveRecord"),
                        r(Microsoft.CIFramework.Utility.buildMap(e))
                    }
                    , e=>{
                        let t = Internal.generateErrorObject(e, "client.retrieveRecord - Xrm.WebApi.retrieveRecord", Internal.errorTypes.XrmApiError);
                        return a(t)
                    }
                    )
                }
                ),
                client.getEntityMetadata = (e,t)=>{
                    var n = t ? t : null;
                    return new Promise((t,i)=>Xrm.Utility.getEntityMetadata(e, n).then(e=>t(JSON.stringify(Microsoft.CIFramework.Utility.flatten(e))), e=>{
                        let t = Internal.generateErrorObject(e, "client.getEntityMetadata - Xrm.Utility.getEntityMetadata", Internal.errorTypes.XrmApiError);
                        return i(t)
                    }
                    ))
                }
                ,
                client.deleteRecord = (e,t,n)=>new Promise((i,r)=>{
                    let a = new Date;
                    return Xrm.WebApi.deleteRecord(e, t).then(e=>{
                        let t = Date.now() - a.getTime();
                        return Internal.logApiData(n, a, t, "Xrm.WebApi.deleteRecord"),
                        i(Microsoft.CIFramework.Utility.buildMap(e))
                    }
                    , e=>{
                        let t = Internal.generateErrorObject(e, "client.deleteRecord - Xrm.WebApi.deleteRecord", Internal.errorTypes.XrmApiError);
                        return r(t)
                    }
                    )
                }
                ),
                client.sizeChanged = ()=>{
                    this.eventHandlers || (this.eventHandlers = new Map);
                    let e = this.eventHandlers.get(CIFramework.Constants.SizeChangeHandler);
                    if (e) {
                        let t = new Map().set(CIFramework.Constants.value, client.getWidgetWidth())
                          , n = new CustomEvent(CIFramework.Constants.SizeChangeHandler,{
                            detail: t
                        });
                        e(n)
                    }
                }
                ,
                client.modeChanged = ()=>{
                    this.eventHandlers || (this.eventHandlers = new Map);
                    let e = this.eventHandlers.get(CIFramework.Constants.ModeChangeHandler);
                    if (e) {
                        let t = new Map().set(CIFramework.Constants.value, Xrm.Panel.state)
                          , n = new CustomEvent(CIFramework.Constants.ModeChangeHandler,{
                            detail: t
                        });
                        e(n)
                    }
                }
                ,
                client.navigationHandler = e=>{
                    this.eventHandlers || (this.eventHandlers = new Map);
                    let t = this.eventHandlers.get(CIFramework.Constants.NavigationHandler);
                    if (t) {
                        let n = "";
                        try {
                            let t = e.getEventArgs();
                            n = t.pageUrl
                        } catch (e) {}
                        let i = new Map().set(CIFramework.Constants.value, n)
                          , r = new CustomEvent(CIFramework.Constants.ModeChangeHandler,{
                            detail: i
                        });
                        t(r)
                    }
                }
                ,
                client.getUserID = ()=>Xrm.Utility.getGlobalContext().userSettings.userId,
                client.loadWidgets = (e,t)=>{
                    const n = {
                        defaultCollapsedBehavior: !1,
                        onSizeChangeHandler: client.sizeChanged,
                        onStateChangeHandler: client.modeChanged
                    };
                    return new Promise(i=>Xrm.Panel.loadPanel("/webresources/widgets_container.html", t, n).then(function() {
                        Xrm.Navigation.addOnPreNavigation(client.navigationHandler);
                        let t = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId)
                          , n = window.parent
                          , r = new Map
                          , a = t.clientHeight * (1 - .9) / e.size;
                        return t.onload = function() {
                            t.contentWindow.document.body.dir = window.parent.document.body.dir;
                            var n = t.contentDocument ? t.contentDocument : t.contentWindow.document;
                            for (let[t,o] of e) {
                                var i = document.createElement("div");
                                i.setAttribute("id", o.providerId),
                                i.setAttribute("tabindex", "-1"),
                                i.setAttribute("role", "tabpanel"),
                                i.setAttribute("style", "height: 100%");
                                var s = document.createElement("iframe");
                                s.setAttribute("allow", "microphone; camera; geolocation"),
                                s.setAttribute("sandbox", "allow-forms allow-popups allow-scripts allow-same-origin"),
                                s.setAttribute("style", "border: 0px;"),
                                s.height = "100%",
                                s.width = "100%",
                                s.src = t,
                                s.title = o.label,
                                o.setContainer(new Internal.WidgetIFrameWrapper(s), a),
                                i.appendChild(s),
                                n.getElementById("widgetControlDiv").appendChild(i),
                                r.set(o.name, !0)
                            }
                        }
                        ,
                        i(r)
                    }))
                }
                ,
                client.openKBSearchControl = (searchString,telemetryData)=>{
                    try {
                        return eval("window.top.Xrm.Page.getControl('KBSearchcontrol').setFocus()"),
                        !0
                    } catch (e) {
                        return !1
                    }
                }
                ,
                client.openForm = (e,t)=>{
                    var n = JSON.parse(e)
                      , i = t ? JSON.parse(t) : null;
                    return new Promise((e,t)=>{
                        const r = window.top.getCurrentXrm() || Xrm;
                        return r.Navigation.openForm(n, i).then(function(t) {
                            return e(new Map().set(CIFramework.Constants.value, t))
                        }, function(e) {
                            let n = Internal.generateErrorObject(e, "client.openForm - Xrm.Navigation.openForm", Internal.errorTypes.XrmApiError);
                            return t(n)
                        })
                    }
                    )
                }
                ,
                client.retrieveMultipleAndOpenRecords = (e,t,n,i)=>new Promise((r,a)=>{
                    let s = new Date
                      , o = Microsoft.CIFramework.Utility.splitQueryForSearch(t);
                    if (1 >= o[0].length) {
                        if (n) {
                            let e = {
                                errorMsg: "Error. Either the seach query is empty or searchOnly is true for search query",
                                errorType: Internal.errorTypes.InvalidParams,
                                reportTime: new Date().toUTCString(),
                                sourceFunc: "client.retrieveMultipleAndOpenRecords"
                            };
                            return a(Microsoft.CIFramework.Utility.createErrorMap(e.errorMsg, CIFramework.MessageType.searchAndOpenRecords))
                        }
                        return Microsoft.CIFramework.Utility.launchSearchPage(o[1], e),
                        r(new Map().set(CIFramework.Constants.value, []))
                    }
                    Xrm.WebApi.retrieveMultipleRecords(e, o[0]).then(t=>{
                        if (1 == t.entities.length) {
                            let i = t.entities[0];
                            !1 == n && Xrm.Utility.getEntityMetadata(e, null).then(t=>{
                                var n = {
                                    entityName: e,
                                    entityId: i[t.PrimaryIdAttribute]
                                };
                                Xrm.Navigation.openForm(n)
                            }
                            , e=>{
                                let t = Internal.generateErrorObject(e, "client.retrieveMultipleAndOpenRecords - Xrm.WebApi.retrieveMultipleRecords", Internal.errorTypes.XrmApiError);
                                return a(Microsoft.CIFramework.Utility.createErrorMap(t.errorMsg, CIFramework.MessageType.searchAndOpenRecords))
                            }
                            )
                        } else
                            !1 == n && Microsoft.CIFramework.Utility.launchSearchPage(o[1], e);
                        let d = Date.now() - s.getTime();
                        return Internal.logApiData(i, s, d, "Xrm.WebApi.retrieveMultipleRecords"),
                        r(new Map().set(CIFramework.Constants.value, t.entities))
                    }
                    , t=>{
                        let i = Internal.generateErrorObject(t, "client.retrieveMultipleAndOpenRecords - Xrm.WebApi.retrieveMultipleRecords", Internal.errorTypes.XrmApiError);
                        return !1 == n && Microsoft.CIFramework.Utility.launchSearchPage(o[1], e),
                        a(Microsoft.CIFramework.Utility.createErrorMap(i.errorMsg, CIFramework.MessageType.searchAndOpenRecords))
                    }
                    )
                }
                ),
                client.setWidgetMode = (e,t,n)=>{
                    let i = new Date;
                    Xrm.Panel.state = t;
                    let r = Date.now() - i.getTime();
                    return Internal.logApiData(n, i, r, "Xrm.Panel.setState"),
                    t
                }
                ,
                client.setWidgetWidth = (e,t)=>{
                    let n = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId)
                      , i = n.contentDocument.getElementById("sessionPanel");
                    return client.setPanelWidth("setPanelWidth", t + i.clientWidth),
                    t
                }
                ,
                client.setPanelWidth = (e,t,n)=>{
                    let i = new Date;
                    Xrm.Panel.width = t;
                    let r = Date.now() - i.getTime();
                    Internal.logApiData(n, i, r, "Xrm.Panel.setWidth")
                }
                ,
                client.getWidgetMode = e=>{
                    let t = new Date
                      , n = Xrm.Panel.state
                      , i = Date.now() - t.getTime();
                    return Internal.logApiData(e, t, i, "Xrm.Panel.getState"),
                    n
                }
                ,
                client.getEnvironment = telemetryData=>{
                    var data = new Map;
                    try {
                        let startTime = new Date
                          , pageUrl = new URL(eval("window.top.Xrm.Page.getUrl()"))
                          , timeTaken = Date.now() - startTime.getTime()
                          , apiName = "Xrm.Page.getUrl";
                        Internal.logApiData(telemetryData, startTime, timeTaken, apiName);
                        for (var entry of pageUrl.searchParams.entries())
                            data.set(entry[0], entry[1])
                    } catch (e) {}
                    let startTime = new Date;
                    var context = Xrm.Utility.getGlobalContext();
                    let timeTaken = Date.now() - startTime.getTime()
                      , apiName = "Xrm.Utility.getGlobalContext"
                      , xrmInstance = window.top.getCurrentXrm()
                      , isDirtyValue = null
                      , pageData = xrmInstance.Page.data;
                    if (null != pageData) {
                        let e = xrmInstance.Page.data.entity;
                        null != e && (isDirtyValue = xrmInstance.Page.data.entity.getIsDirty())
                    }
                    return Internal.logApiData(telemetryData, startTime, timeTaken, apiName),
                    data.set(CIFramework.Constants.ClientUrl, context.getClientUrl()),
                    data.set(CIFramework.Constants.AppUrl, context.getCurrentAppUrl()),
                    data.set(CIFramework.Constants.OrgLcid, context.organizationSettings.languageId),
                    data.set(CIFramework.Constants.OrgUniqueName, context.organizationSettings.uniqueName),
                    data.set(CIFramework.Constants.OrgId, context.organizationSettings.organizationId),
                    data.set(CIFramework.Constants.UserId, context.userSettings.userId),
                    data.set(CIFramework.Constants.UserLcid, context.userSettings.languageId),
                    data.set(CIFramework.Constants.UserName, context.userSettings.userName),
                    data.set(CIFramework.Constants.crmVersion, context.getVersion()),
                    data.set(CIFramework.Constants.isDirty, isDirtyValue),
                    data
                }
                ,
                client.getWidgetWidth = ()=>{
                    let e = new Date
                      , t = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId)
                      , n = t.contentDocument.getElementById("widgetArea");
                    return n.clientWidth
                }
                ,
                client.checkCIFCapability = ()=>{
                    if ("UnifiedServiceDesk" === Xrm.Utility.getGlobalContext().client.getClient())
                        return !1;
                    try {
                        if (window.top.document.getElementById(CIFramework.Constants.widgetIframeId))
                            return !1
                    } catch (e) {
                        return !1
                    }
                    return !0
                }
                ,
                client.renderSearchPage = (e,t,n)=>{
                    let i;
                    return new Promise((r,a)=>{
                        try {
                            i = new Date,
                            Xrm.Navigation.navigateTo({
                                pageType: "search",
                                searchText: t,
                                searchType: 1,
                                EntityNames: [e],
                                EntityGroupName: ""
                            });
                            let a = Date.now() - i.getTime();
                            return Internal.logApiData(n, i, a, "Xrm.Navigation.navigateTo"),
                            r()
                        } catch (e) {
                            let t = Internal.generateErrorObject(e, "client.renderSearchPage - Xrm.Navigation.navigateTo", Internal.errorTypes.XrmApiError);
                            return a(t)
                        }
                    }
                    )
                }
                ,
                client.addUISession = (e,t,n,i)=>{
                    var r = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    let a = CIFramework.Utility.getElementFromIframe(r, CIFramework.Constants.sessionPanel);
                    if (null != a) {
                        var s = new DOMParser
                          , o = s.parseFromString("<div class=\"uiSession flexJustify\" role=\"tab\" tabindex=\"-1\" aria-controls=\"" + i + "\" aria-label=\"" + t + "\" id=\"" + e + "\"><div class=\"flexJustify\" id=\"" + e + "UiSessionIcon\"><div class=\"iconCircle\" id=\"" + e + "IconCircle\" style=\"background-color: " + n + ";\"><span class=\"initials\">" + t + "</span></div></div><div id=\"" + e + "CrossIcon\" class=\"flexJustify\" style=\"display:none\"><span class=\"symbolFont Cancel-symbol crossIconFont\"></span></div></div>", "text/html")
                          , d = o.getElementById(e);
                        d.onclick = function(t) {
                            e == Microsoft.CIFramework.Internal.SessionPanel.getInstance().getvisibleUISession() ? Microsoft.CIFramework.Internal.SessionPanel.getInstance().endUISession(t.currentTarget.id.replace("CrossIcon", "")) : Microsoft.CIFramework.Internal.SessionPanel.getInstance().switchUISession(t.currentTarget.id)
                        }
                        ,
                        d.onkeydown = function(t) {
                            if (13 == t.keyCode)
                                e == Microsoft.CIFramework.Internal.SessionPanel.getInstance().getvisibleUISession() ? Microsoft.CIFramework.Internal.SessionPanel.getInstance().endUISession(t.currentTarget.id.replace("CrossIcon", "")) : Microsoft.CIFramework.Internal.SessionPanel.getInstance().switchUISession(t.currentTarget.id);
                            else if (37 == t.keyCode) {
                                if (null != d.previousElementSibling)
                                    d.previousElementSibling.focus();
                                else {
                                    let e = CIFramework.Utility.getElementsByClassName(r, "uiSession");
                                    e[e.length - 1].focus()
                                }
                            } else if (39 == t.keyCode)
                                if (null != d.nextElementSibling && -1 != d.nextElementSibling.className.indexOf("uiSession"))
                                    d.nextElementSibling.focus();
                                else {
                                    let e = CIFramework.Utility.getElementsByClassName(r, "uiSession");
                                    e[0].focus()
                                }
                        }
                        ;
                        let a = CIFramework.Utility.getElementFromIframe(r, "uiSessions");
                        a.appendChild(d)
                    }
                }
                ,
                client.removeUISession = e=>{
                    var t = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    let n = CIFramework.Utility.getElementFromIframe(t, e);
                    null == n || n.parentNode.removeChild(n)
                }
                ,
                client.getUISessionColor = e=>{
                    var t = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    let n = CIFramework.Utility.getElementFromIframe(t, e + "IconCircle");
                    return null == n ? "" : CIFramework.Utility.rgb2hex(n.style.backgroundColor)
                }
                ,
                client.updateUISession = (e,t)=>{
                    var n = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    let i = CIFramework.Utility.getElementFromIframe(n, e);
                    if (null == i)
                        return;
                    var r = i.getAttribute("aria-controls");
                    let a = CIFramework.Utility.getElementFromIframe(n, r)
                      , s = CIFramework.Utility.getElementFromIframe(n, e + "UiSessionIcon")
                      , o = CIFramework.Utility.getElementFromIframe(n, e + "CrossIcon");
                    t ? (i.style.backgroundColor = "#FFFFFF",
                    i.style.boxShadow = "0px 4px 8px rgba(102, 102, 102, 0.2)",
                    s.style.display = "none",
                    o.style.display = "flex",
                    i.setAttribute("tabindex", 0),
                    a.setAttribute("aria-labelledby", e)) : (i.style.backgroundColor = "transparent",
                    i.style.boxShadow = "none",
                    s.style.display = "flex",
                    o.style.display = "none",
                    i.setAttribute("tabindex", -1),
                    a.setAttribute("aria-labelledby", "")),
                    i.setAttribute("aria-selected", t)
                }
                ,
                client.expandFlap = ()=>{
                    if (this.flapExpanded)
                        return 0;
                    let e = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId)
                      , t = e.contentDocument.getElementById("sessionPanel")
                      , n = client.getWidgetWidth();
                    return this.origWidth = n + t.clientWidth,
                    this.flapExpanded = !0,
                    client.setPanelWidth("setPanelWidth", 2 * this.origWidth - t.clientWidth),
                    e.contentDocument.documentElement.style.setProperty("--flapAreaWidth", n.toString() + "px"),
                    this.origWidth
                }
                ,
                client.collapseFlap = ()=>{
                    if (!this.flapExpanded)
                        return 0;
                    client.setPanelWidth("setPanelWidth", this.origWidth);
                    let e = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId);
                    return e.contentDocument.documentElement.style.setProperty("--flapAreaWidth", "0px"),
                    this.flapExpanded = !1,
                    this.origWidth
                }
                ,
                client.flapInUse = ()=>!0 === this.flapExpanded,
                client
            }
            function UCIPresenceManager() {
                return {
                    setAgentPresence: (e,t)=>{
                        let n = new Date
                          , i = Microsoft.CIFramework.Internal.PresenceControl.Instance.setAgentPresence(e)
                          , r = Date.now() - n.getTime();
                        Internal.logApiData(t, n, r, "PresenceControl.setAgentPresence");
                        let a = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId)
                          , s = a.contentWindow.document.getElementById("CurrentStatus");
                        return null != s && (s.innerHTML = "",
                        s.appendChild(i),
                        !0)
                    }
                    ,
                    initializeAgentPresenceList: (e,t)=>{
                        let n = new Date
                          , i = Microsoft.CIFramework.Internal.PresenceControl.Instance.setAllPresences(e)
                          , r = Date.now() - n.getTime();
                        Internal.logApiData(t, n, r, "PresenceControl.initializeAgentPresenceList");
                        let a = window.parent.document.getElementById(CIFramework.Constants.widgetIframeId)
                          , s = a.contentWindow.document.getElementById("PresenceList");
                        return null != s && (s.innerHTML = "",
                        s.appendChild(i),
                        !0)
                    }
                }
            }
            Internal.webClient = webClient,
            Internal.UCIPresenceManager = UCIPresenceManager
        }
        )(Internal = CIFramework.Internal || (CIFramework.Internal = {}))
    }
    )(CIFramework = Microsoft.CIFramework || (Microsoft.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(e) {
        var t;
        (function(t) {
            class n {
                constructor() {
                    this.counter = 0,
                    this.UIsessions = new Map,
                    this.visibleUISession = ""
                }
                static getInstance() {
                    return n.instance || (n.instance = new n),
                    n.instance
                }
                setState(e) {
                    this.state = e
                }
                getvisibleUISession() {
                    return this.visibleUISession
                }
                switchUISession(e) {
                    if (this.visibleUISession == e || !this.UIsessions.has(e))
                        return;
                    let t = !0, n = this.UIsessions.get(e), i;
                    "" != this.visibleUISession && (i = this.UIsessions.get(this.visibleUISession),
                    i == n && (t = !1),
                    i.setInvisibleUISession(this.visibleUISession, t),
                    this.state.client.updateUISession(this.visibleUISession, !1)),
                    this.visibleUISession = e,
                    n.setVisibleUISession(this.visibleUISession, t);
                    this.state.client.getUISessionColor(this.visibleUISession);
                    this.state.client.updateUISession(this.visibleUISession, !0)
                }
                canAddUISession() {
                    return !!(this.UIsessions.size < e.Constants.MaxUISessions)
                }
                addUISession(t, n, i) {
                    this.UIsessions.set(t, n);
                    let r = e.Constants.sessionColors[this.counter++ % e.Constants.sessionColors.length];
                    this.state.client.addUISession(t, i, r, n.providerId),
                    "" == this.visibleUISession && this.switchUISession(t),
                    this.UIsessions.size == e.Constants.MaxUISessions
                }
                removeUISession(e) {
                    this.UIsessions.has(e) && (this.UIsessions.delete(e),
                    this.state.client.removeUISession(e),
                    this.visibleUISession == e && (this.visibleUISession = "",
                    0 < this.UIsessions.size && this.switchUISession(Array.from(this.UIsessions.keys()).pop())))
                }
                endUISession(n) {
                    if (this.UIsessions.has(n)) {
                        let i = this.UIsessions.get(n);
                        t.endUISession(new Map().set(e.Constants.sessionId, n).set(e.Constants.originURL, i.landingUrl))
                    }
                }
            }
            t.SessionPanel = n
        }
        )(t = e.Internal || (e.Internal = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(t) {
        var n;
        (function(t) {
            t.postMsgWrapper = class {
                constructor(e, n, i, r) {
                    this.pendingPromises = new Map,
                    this.messageHandlers = new Map,
                    this.responseTargetWindow = null,
                    e && (e.removeEventListener(t.messageConstant, this.processMessage.bind(this)),
                    e.addEventListener(t.messageConstant, this.processMessage.bind(this))),
                    this.listWhitelistedDomains = n,
                    i && (this.messageHandlers = i),
                    this.responseTargetWindow = r
                }
                addHandler(e, t) {
                    this.messageHandlers.has(e) ? this.messageHandlers.get(e).add(t) : this.messageHandlers.set(e, new Set().add(t))
                }
                getHandlers(e) {
                    return this.messageHandlers.has(e) ? this.messageHandlers.get(e) : null
                }
                removeHandler(e, t) {
                    this.messageHandlers.has(e) && this.messageHandlers.get(e).delete(t)
                }
                getCorrelationId() {
                    return (Math.random() + 1).toString(36).substring(7)
                }
                createDeferred(n) {
                    const i = {
                        promise: null,
                        resolve: null,
                        reject: null,
                        timerId: null
                    };
                    let r = new Promise((e,t)=>{
                        i.resolve = e,
                        i.reject = t
                    }
                    )
                      , a = [r];
                    if (!n) {
                        let n = new Promise((n,r)=>{
                            i.timerId = setTimeout(()=>{
                                r(e.CIFramework.Utility.createErrorMap("Timeout occurred as no response was received from listener window"))
                            }
                            , t.promiseTimeOut)
                        }
                        );
                        a.push(n)
                    }
                    return i.promise = Promise.race(a).then(e=>(i.timerId && clearTimeout(i.timerId),
                    this.removePromise(i),
                    e)).catch(e=>{
                        throw i.timerId && clearTimeout(i.timerId),
                        this.removePromise(i),
                        e
                    }
                    ),
                    i
                }
                removePromise(e) {
                    let t = null;
                    for (let[n,i] of this.pendingPromises)
                        if (i == e) {
                            t = n;
                            break
                        }
                    t && this.pendingPromises.delete(t)
                }
                postMsg(e, n, i, r, a) {
                    if (e && "*" != i) {
                        let r = this.createDeferred(a)
                          , s = this.getCorrelationId()
                          , o = n;
                        return o[t.messageCorrelationId] = s,
                        this.pendingPromises.set(s, r),
                        this.postMsgInternal(e, o, i, r)
                    }
                    return t.rejectWithErrorMessage("Receiving window or targetOrigin cannot be unspecified")
                }
                postMsgInternal(e, n, i, r) {
                    for (let a = 0; ; )
                        try {
                            return e.postMessage(n, i),
                            r ? r.promise : void 0
                        } catch (e) {
                            if (++a == t.retryCount)
                                return t.rejectWithErrorMessage("Not able to post the request to receiving window after multiple tries.")
                        }
                }
                sendResponseMsg(e, t, n) {
                    e && "*" != n && e.postMessage(t, n)
                }
                processMessage(n) {
                    try {
                        let i = this.responseTargetWindow || n.source, r = this.listWhitelistedDomains.find(e=>{
                            var t = new URL(n.origin), i = decodeURIComponent(t.hostname), r = "", a;
                            return (null != e && (a = new URL(e),
                            r = decodeURIComponent(a.hostname)),
                            "" != r && r == i) || !!(null != e && r.startsWith("*")) && i.endsWith(r.substr(2))
                        }
                        ), a = n.data[t.messageCorrelationId], s = null, o;
                        if (n.origin && "*" !== n.origin && n.source || (s = e.CIFramework.Utility.createErrorMap("Origin/Source of the message cant be null or all")),
                        r || (s = e.CIFramework.Utility.createErrorMap("Sender domain is not a recognised or is invalid and hence the message cant be processed")),
                        !a) {
                            if (s)
                                return void console.trace("Ignoring message from unknown event source: " + n.origin);
                        } else if (s)
                            return o = {
                                messageOutcome: t.messageFailure,
                                messageData: s,
                                messageCorrelationId: a,
                                messageType: "CIF_Response"
                            },
                            this.sendResponseMsg(i, o, n.origin);
                        let d;
                        if (a && this.pendingPromises && (d = this.pendingPromises.get(a)),
                        !d) {
                            let s = n.data;
                            if(s.messageType === "CIF_Response")
                                return;
                            if ("string" != typeof s.messageData && s.messageData.set(t.originURL, r),
                            !this.messageHandlers.get(s.messageType))
                                return void (a && (o = {
                                    messageOutcome: t.messageSuccess,
                                    messageData: e.CIFramework.Utility.createErrorMap("No handlers found to process the request."),
                                    messageCorrelationId: a,
                                    messageType: "CIF_Response"
                                },
                                this.sendResponseMsg(i, o, n.origin)));
                            this.messageHandlers.get(s.messageType).forEach(e=>{
                                e(s.messageData).then(function(e) {
                                    a && (o = {
                                        messageOutcome: t.messageSuccess,
                                        messageData: e,
                                        messageCorrelationId: a,
                                        messageType: "CIF_Response"
                                    },
                                    this.sendResponseMsg(i, o, n.origin))
                                }
                                .bind(this), function(e) {
                                    a && (o = {
                                        messageOutcome: t.messageFailure,
                                        messageData: e,
                                        messageCorrelationId: a,
                                        messageType: "CIF_Response"
                                    },
                                    this.sendResponseMsg(i, o, n.origin))
                                }
                                .bind(this))
                            }
                            )
                        } else {
                            let e = n.data;
                            e.messageOutcome === t.messageSuccess ? d.resolve(e.messageData) : d.reject(e.messageData)
                        }
                    } catch (t) {
                        console.error("Error in PostMsgWrapper - processMessage. " + t)
                    }
                }
            }
        }
        )(n = t.postMessageNamespace || (t.postMessageNamespace = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(t) {
        var n;
        (function(n) {
            n.ProviderManager = class {
                constructor(e, t, n) {
                    this._client = e,
                    this.ciProviders = new Map,
                    this.ciProviders.set(t, n),
                    this._defaultProvider = n
                }
                addProvider(e, t) {
                    this.ciProviders.set(e, t)
                }
                setActiveProvider(e) {
                    this._activeProvider = e
                }
                getActiveProvider() {
                    return this._activeProvider || this._defaultProvider
                }
            }
            ;
            n.CIProvider = class {
                constructor(e, n, i) {
                    this._state = n,
                    this.name = e[t.Constants.name],
                    this.providerId = e[t.Constants.providerId],
                    this.label = e[t.Constants.label],
                    this.landingUrl = e[t.Constants.landingUrl],
                    this.clickToAct = e[t.Constants.clickToActAttributeName],
                    this._widgetContainer = null,
                    this.sortOrder = e[t.Constants.SortOrder],
                    this.apiVersion = e[t.Constants.APIVersion],
                    this.trustedDomain = e[t.Constants.trustedDomain],
                    this.customParams = e.msdyn_customparams,
                    this.orgId = i.orgId,
                    this.orgName = i.orgName,
                    this.crmVersion = i.crmVersion,
                    this.appId = i.appId,
                    this.uiSessions = new Map
                }
                raiseEvent(n, i, r) {
                    const a = {
                        messageType: i,
                        messageData: JSON.stringify(e.CIFramework.Utility.buildEntity(n))
                    };
                    switch (i) {
                    case t.MessageType.onClickToAct:
                        if (!this.clickToAct)
                            return Promise.resolve(new Map().set(t.Constants.value, !1));
                    }
                    return this.getContainer() ? this._state.messageLibrary.postMsg(this.getContainer().getContentWindow(), a, this.trustedDomain || this.landingUrl, !0, r) : Promise.resolve(new Map().set(t.Constants.value, !1))
                }
                getContainer() {
                    return this._widgetContainer
                }
                setContainer(e, t) {
                    this._widgetContainer = e,
                    this._minimizedHeight = t
                }
                startUISession(e, i) {
                    if (!n.SessionPanel.getInstance().canAddUISession()) {
                        let e = {
                            reportTime: new Date().toUTCString(),
                            errorMsg: "Cannot add the UISession. Maximum UISessions limit reached. Limit: " + t.Constants.MaxUISessions,
                            errorType: n.errorTypes.GenericError,
                            sourceFunc: n.startUISession.name
                        };
                        return [null, e]
                    }
                    let r = this._state.messageLibrary.getCorrelationId();
                    return this.uiSessions.set(r, {
                        sessionId: r,
                        context: e,
                        applicationTabs: null,
                        initials: i
                    }),
                    n.SessionPanel.getInstance().addUISession(r, this, i),
                    this.raiseEvent(new Map().set("sessionId", r).set("visible", this.visibleUISession == r).set("context", e), t.MessageType.onUISessionStarted),
                    [r, null]
                }
                switchUISession(e) {
                    if (!this.uiSessions.has(e)) {
                        let t = {
                            reportTime: new Date().toUTCString(),
                            errorMsg: "Session with ID:" + e + " does not exist",
                            errorType: n.errorTypes.GenericError,
                            sourceFunc: n.switchUISession.name
                        };
                        return [null, t]
                    }
                    if (n.SessionPanel.getInstance().getvisibleUISession() == e) {
                        let t = {
                            reportTime: new Date().toUTCString(),
                            errorMsg: "Session with ID:" + e + " is already visible",
                            errorType: n.errorTypes.GenericError,
                            sourceFunc: n.switchUISession.name
                        };
                        return [null, t]
                    }
                    return n.SessionPanel.getInstance().switchUISession(e),
                    [e, null]
                }
                endUISession(e) {
                    if (!this.uiSessions.has(e)) {
                        let t = {
                            reportTime: new Date().toUTCString(),
                            errorMsg: "Session with ID:" + e + "does not exist",
                            errorType: n.errorTypes.GenericError,
                            sourceFunc: n.endUISession.name
                        };
                        return [null, t]
                    }
                    return this.raiseEvent(new Map().set("sessionId", e).set("visible", this.visibleUISession == e).set("context", this.uiSessions.get(e).context), t.MessageType.onUISessionEnded, !0).then(function() {
                        this.uiSessions.delete(e),
                        n.SessionPanel.getInstance().removeUISession(e)
                    }
                    .bind(this)),
                    [e, null]
                }
                setVisibleUISession(e, n) {
                    this.raiseEvent(new Map().set("sessionId", e).set("visible", !0).set("context", this.uiSessions.get(e).context), t.MessageType.onUISessionVisibilityChanged),
                    this.visibleUISession = e,
                    n && this._state.providerManager.setActiveProvider(this)
                }
                setInvisibleUISession(e, n) {
                    this.raiseEvent(new Map().set("sessionId", e).set("visible", !1).set("context", this.uiSessions.get(e).context), t.MessageType.onUISessionVisibilityChanged),
                    this.visibleUISession = "",
                    n && this._state.providerManager.setActiveProvider(null)
                }
            }
        }
        )(n = t.Internal || (t.Internal = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(t) {
        var n;
        (function(n) {
            function r(e, n, r, d, l) {
                let c = o.document.getElementById(s.widgetIframeId)
                  , p = c.contentWindow.document.getElementById("toastDiv")
                  , m = 0
                  , u = !1
                  , g = new Map;
                if (-1 != d[0].search(t.MessageType.softNotification))
                    g = a(e, n, d[1]);
                else {
                    -1 == l.search(s.Chat) ? -1 == l.search(s.Call) ? -1 != l.search(s.Case) && p.insertAdjacentHTML("beforeend", "<div id=\"CIFToast\" tabindex=\"0\" aria-label=\"Notification Window\" class=\"CIFToastDiv\"><div tabindex=\"0\" class=\"header_NotificationType_CIF\"></div><div aria-label=\"Notification Header\" tabindex=\"0\" class=\"header_CIF\"><div class=\"CIFHeaderIconDiv\"><img class=\"CIFHeaderImage\" src=\"/webresources/case_icon.svg\"></div><div tabindex=\"0\" class=\"headerKeyCIF\"></div><div tabindex=\"0\" id=\"headerTimerCIFId\" class=\"headerTimerCIF\"></div><div tabindex=\"0\" class=\"headerNameCIF\"></div><div tabindex=\"0\" class=\"headerDetailsCIF\"></div></div><div></div><div tabindex=\"0\" aria-label=\"Notification Body\" class=\"bodyDivCIF\"><div class=\"bodyDivider_CIF\"></div><p tabindex=\"0\" class=\"body_CIF\"><div></div><p><br></p></div></div>") : p.insertAdjacentHTML("beforeend", "<div id=\"CIFToast\" tabindex=\"0\" aria-label=\"Notification Window\" class=\"CIFToastDiv\"><div tabindex=\"0\" class=\"header_NotificationType_CIF\"></div><div aria-label=\"Notification Header\" tabindex=\"0\" class=\"header_CIF\"><div class=\"CIFHeaderIconDiv\"><img class=\"CIFHeaderImage\" src=\"/webresources/call_icon.svg\"></div><div tabindex=\"0\" class=\"headerKeyCIF\"></div><div tabindex=\"0\" id=\"headerTimerCIFId\" class=\"headerTimerCIF\"></div><div tabindex=\"0\" class=\"headerNameCIF\"></div><div tabindex=\"0\" class=\"headerDetailsCIF\"></div></div><div></div><div tabindex=\"0\" aria-label=\"Notification Body\" class=\"bodyDivCIF\"><div class=\"bodyDivider_CIF\"></div><p tabindex=\"0\" class=\"body_CIF\"><div></div><p><br></p></div></div>") : p.insertAdjacentHTML("beforeend", "<div id=\"CIFToast\" tabindex=\"0\" aria-label=\"Notification Window\" class=\"CIFToastDiv\"><div tabindex=\"0\" class=\"header_NotificationType_CIF\"></div><div aria-label=\"Notification Header\" tabindex=\"0\" class=\"header_CIF\"><div class=\"CIFHeaderIconDiv\"><img class=\"CIFHeaderImage\" src=\"/webresources/chat_icon.svg\"></div><div tabindex=\"0\" class=\"headerKeyCIF\"></div><div tabindex=\"0\" id=\"headerTimerCIFId\" class=\"headerTimerCIF\"></div><div tabindex=\"0\" class=\"headerNameCIF\"></div><div tabindex=\"0\" class=\"headerDetailsCIF\"></div></div><div></div><div tabindex=\"0\" aria-label=\"Notification Body\" class=\"bodyDivCIF\"><div class=\"bodyDivider_CIF\"></div><p tabindex=\"0\" class=\"body_CIF\"><div></div><p><br></p></div></div>");
                    let i = p.getElementsByClassName("CIFToastDiv").length
                      , a = p.getElementsByClassName("CIFToastDiv")[i - 1];
                    p.getElementsByClassName("CIFToastDiv")[i - 1].id = "CIFToastDiv_" + i;
                    let o = "100%";
                    if (c.contentWindow.document.getElementById("CIFToastDiv_" + i).style.width = "100%",
                    null != d && "undefined" != d && 0 < d.length) {
                        let e = p.getElementsByClassName("header_NotificationType_CIF")[i - 1];
                        if (-1 != d[0].search(t.MessageType.broadCast) && 3 == d.length) {
                            e.classList.add("header_NotificationType_CIF_Broadcast"),
                            p.getElementsByClassName("header_NotificationType_CIF_Broadcast")[i - 1].id = "CIFToastType_" + i,
                            c.contentWindow.document.getElementById("CIFToastType_" + i).style.width = o;
                            var y = document.createElement("label");
                            e.appendChild(y),
                            y.classList.add("broadCastLabel1"),
                            y.innerText = d[1],
                            y.setAttribute("aria-label", d[1]);
                            var _ = document.createElement("label");
                            e.appendChild(_),
                            _.classList.add("broadCastLabel2"),
                            _.innerText = d[2],
                            _.setAttribute("aria-label", d[2])
                        } else if (-1 != (-1 != d[0].search(t.MessageType.notification) || d[0].search(t.MessageType.escalation)) && 2 == d.length) {
                            e.classList.add("header_NotificationType_CIF_notification"),
                            p.getElementsByClassName("header_NotificationType_CIF_notification")[i - 1].id = "CIFToastType_" + i,
                            c.contentWindow.document.getElementById("CIFToastType_" + i).style.width = o;
                            var I = document.createElement("span");
                            e.appendChild(I),
                            e.getElementsByTagName("span")[0].classList.add("notificationSpan"),
                            -1 == d[0].search(t.MessageType.escalation) ? e.getElementsByTagName("span")[0].classList.add("FontIcons_notificationSpan") : e.getElementsByTagName("span")[0].classList.add("FontIcons_escalationSpan");
                            var T = document.createElement("label");
                            e.appendChild(T),
                            T.classList.add("notificationLabel"),
                            T.innerText = d[1],
                            T.setAttribute("aria-label", d[1])
                        } else if (-1 != d[0].search(t.MessageType.transfer) && 2 == d.length) {
                            e.classList.add("header_NotificationType_CIF_transfer"),
                            p.getElementsByClassName("header_NotificationType_CIF_transfer")[i - 1].id = "CIFToastType_" + i,
                            c.contentWindow.document.getElementById("CIFToastType_" + i).style.width = o;
                            var y = document.createElement("label");
                            e.appendChild(y),
                            y.classList.add("transferLabel"),
                            y.innerText = d[1],
                            y.setAttribute("aria-label", d[1])
                        } else if (-1 != d[0].search(t.MessageType.internalCommunication) && 2 == d.length) {
                            e.classList.add("header_NotificationType_CIF_internalCommunication"),
                            p.getElementsByClassName("header_NotificationType_CIF_internalCommunication")[i - 1].id = "CIFToastType_" + i,
                            c.contentWindow.document.getElementById("CIFToastType_" + i).style.width = o;
                            var I = document.createElement("span");
                            e.appendChild(I),
                            e.getElementsByTagName("span")[0].classList.add("internalCommunicationSpan"),
                            e.getElementsByTagName("span")[0].classList.add("FontIcons_internalCommunicationSpan");
                            var T = document.createElement("label");
                            e.appendChild(T),
                            T.classList.add("internalCommunicationLabel"),
                            T.innerText = d[1],
                            T.setAttribute("aria-label", d[1]),
                            a.classList.add("internalCommunication_CIFToastDiv")
                        } else if (-1 != d[0].search(t.MessageType.notification)) {
                            e.classList.add("header_NotificationType_CIF_Broadcast"),
                            p.getElementsByClassName("header_NotificationType_CIF_Broadcast")[i - 1].id = "CIFToastType_" + i,
                            c.contentWindow.document.getElementById("CIFToastType_" + i).style.width = o;
                            var y = document.createElement("label");
                            e.appendChild(y),
                            y.classList.add("broadCastLabel1");
                            var _ = document.createElement("label");
                            e.appendChild(_),
                            _.innerText = "secs remaining",
                            _.classList.add("hardNotificationLabel2"),
                            _.setAttribute("aria-label", "secs remaining")
                        }
                    }
                    let f = "";
                    for (m = 0; m < e.length; m++)
                        for (let t in e[m]) {
                            p.getElementsByClassName("headerKeyCIF")[i - 1].innerHTML = t;
                            for (let n = 0; n < e[m][t].length; n++)
                                0 == n ? p.getElementsByClassName("headerNameCIF")[i - 1].innerHTML = e[m][t][n] : f += e[m][t][n] + "\n"
                        }
                    if (null != n && "undefined" != n)
                        for (m = 0; m < n.length; m++)
                            for (let e in n[m]) {
                                let t = p.getElementsByClassName("body_CIF")[i - 1];
                                var y = document.createElement("label");
                                t.appendChild(y),
                                y.classList.add("body_CIFLabel1");
                                var _ = document.createElement("label");
                                _.classList.add("body_CIFLabel2"),
                                y.innerText = e,
                                y.setAttribute("aria-label", e),
                                _.innerText = n[m][e],
                                _.setAttribute("aria-label", n[m][e]),
                                _.addEventListener("mouseover", function() {
                                    this.classList.add("body_CIFLabel2_mouseover"),
                                    _.style.width = "calc(70% - 20px)"
                                }),
                                _.addEventListener("mouseout", function() {
                                    this.classList.add("body_CIFLabel2_mouseout"),
                                    _.style.width = "calc(70% - 20px)"
                                }),
                                y.style.width = "30%",
                                _.style.width = "calc(70% - 20px)",
                                t.appendChild(_);
                                var v = document.createElement("div");
                                v.appendChild(document.createElement("br")),
                                t.appendChild(v)
                            }
                    else
                        p.getElementsByClassName("bodyDivider_CIF")[i - 1].classList.add("bodyDivider_CIF_invisible");
                    p.getElementsByClassName("bodyDivider_CIF")[i - 1].id = "CIFToastDivider_" + i,
                    c.contentWindow.document.getElementById("CIFToastDivider_" + i).style.width = "100%",
                    p.getElementsByClassName("bodyDivider_CIF")[i - 1].id = "CIFToastDividerInvisible_" + i,
                    c.contentWindow.document.getElementById("CIFToastDividerInvisible_" + i).style.width = "100%",
                    p.getElementsByClassName("headerDetailsCIF")[i - 1].innerHTML = f,
                    p.getElementsByClassName("headerDetailsCIF")[i - 1].setAttribute("aria-label", f);
                    let E = p.getElementsByClassName("bodyDivCIF")[i - 1];
                    if (null != r && "undefined" != r) {
                        let e = !1
                          , t = !1;
                        for (m = 0; m < r.length; m++)
                            for (let n in r[m])
                                -1 != n.search(s.actionType) && (-1 != r[m][n].search(s.Accept) && (e = !0),
                                -1 != r[m][n].search(s.Reject) && (t = !0));
                        for (m = 0; m < r.length; m++) {
                            var C = document.createElement("BUTTON")
                              , I = document.createElement("span");
                            E.appendChild(C);
                            let n = new Map;
                            u = !1;
                            let i = !1, o, d;
                            for (let n in !0 == e && !0 == t && (i = !0),
                            r[m])
                                if (-1 != n.search(s.actionType) && (-1 == r[m][n].search(s.Accept) ? -1 == r[m][n].search(s.Reject) ? -1 != r[m][n].search(s.Timeout) && (C.classList.add("timeOutCIF"),
                                u = !0) : (!1 == i ? (C.classList.add("bothButtonsReject_CIF"),
                                C.style.width = "calc(100% - 30px)") : (C.classList.add("singleButtonReject_CIF"),
                                C.style.width = "calc(50% - 20px)"),
                                C.appendChild(I),
                                C.getElementsByTagName("span")[0].classList.add("rejectButtonSpan_CIF"),
                                C.getElementsByTagName("span")[0].classList.add("FontIcons-rejectHardNotification_CIF")) : (!1 == i ? (C.classList.add("bothButtonsAccept_CIF"),
                                C.style.width = "calc(100% - 30px)") : (C.classList.add("singleButtonAccept_CIF"),
                                C.style.width = "calc(50% - 20px)"),
                                C.appendChild(I),
                                C.getElementsByTagName("span")[0].classList.add("acceptButtonSpan_CIF"),
                                C.getElementsByTagName("span")[0].classList.add("FontIcons_acceptButtonSpan_CIF"))),
                                -1 != n.search(s.actionDisplayText)) {
                                    var I = document.createElement("span");
                                    I.innerText = r[m][n],
                                    I.classList.add("actionDisplayText_CIF"),
                                    I.tabIndex = 0,
                                    I.setAttribute("aria-label", r[m][n]),
                                    C.appendChild(I)
                                } else
                                    -1 == n.search(s.actionName) ? -1 == n.search(s.actionReturnValue) ? -1 != n.search(s.actionColor) && (C.style.backgroundColor = r[m][n]) : d = r[m][n] : o = r[m][n];
                            n.set(s.actionName, o),
                            n.set(s.actionReturnValue, d),
                            u ? g.set(a, n) : g.set(C, n)
                        }
                    }
                    p.getElementsByClassName("header_CIF")[i - 1].addEventListener("click", function() {
                        if (h = p.getElementsByTagName("div"),
                        null != h) {
                            for (m = 0; m < h.length; m++) {
                                let e = h[m];
                                null != e.getElementsByClassName("bodyDivCIF")[0] && (e.getElementsByClassName("bodyDivCIF")[0].setAttribute("style", "display:none;"),
                                e.getElementsByClassName("headerTimerCIF")[0].setAttribute("style", "display:block;")),
                                null != e.getElementsByClassName("headerDetailsCIF")[0] && e.getElementsByClassName("headerDetailsCIF")[0].setAttribute("style", "display:none;"),
                                null != e.getElementsByClassName("header_NotificationType_CIF")[0] && e.getElementsByClassName("header_NotificationType_CIF")[0].setAttribute("style", "display:none;")
                            }
                            this.parentElement.getElementsByClassName("bodyDivCIF")[0].setAttribute("style", "display:block;"),
                            this.parentElement.getElementsByClassName("headerTimerCIF")[0].style.display = "none",
                            this.parentElement.getElementsByClassName("headerDetailsCIF")[0].setAttribute("style", "display:block;"),
                            this.parentElement.getElementsByClassName("header_NotificationType_CIF")[0].setAttribute("style", "display:block;"),
                            !1 == u && this.parentElement.getElementsByClassName("header_NotificationType_CIF")[0].setAttribute("style", "display:none;")
                        }
                    })
                }
                var h = p.getElementsByTagName("div");
                if (null != h) {
                    let e = 0
                      , t = 0;
                    for (m = 0; m < h.length; m++) {
                        let n = h[m];
                        null != n.getElementsByClassName("bodyDivCIF")[0] && (0 == e ? (n.getElementsByClassName("bodyDivCIF")[0].setAttribute("style", "display:block;"),
                        n.getElementsByClassName("headerTimerCIF")[0].setAttribute("style", "display:none;")) : (n.getElementsByClassName("bodyDivCIF")[0].setAttribute("style", "display:none;"),
                        n.getElementsByClassName("headerTimerCIF")[0].setAttribute("style", "display:block;")),
                        e++),
                        null != n.getElementsByClassName("headerDetailsCIF")[0] && n.getElementsByClassName("headerDetailsCIF")[0].setAttribute("style", "display:none;"),
                        null != n.getElementsByClassName("header_NotificationType_CIF")[0] && (0 == t ? !0 == u && n.getElementsByClassName("header_NotificationType_CIF")[0].setAttribute("style", "display:block;") : n.getElementsByClassName("header_NotificationType_CIF")[0].setAttribute("style", "display:none;"),
                        t++)
                    }
                    for (m = 0; m < h.length; m++) {
                        let e = h[m];
                        if (null != e.getElementsByClassName("headerDetailsCIF")[0]) {
                            e.getElementsByClassName("headerDetailsCIF")[0].setAttribute("style", "display:block;"),
                            e.getElementsByClassName("headerTimerCIF")[0].setAttribute("style", "display:none;");
                            break
                        }
                    }
                }
                return g
            }
            function a(e, t, n) {
                let r = new Map
                  , a = o.document.getElementById(s.widgetIframeId)
                  , d = a.contentWindow.document.getElementById("softToastDiv");
                var l = d.getElementsByTagName("div");
                let c = 0;
                if (null != l)
                    for (c = 0; c < l.length; c++) {
                        let e = l[c];
                        null != e && e.setAttribute("style", "display:none;")
                    }
                d.insertAdjacentHTML("afterbegin", "<div tabindex=\"0\" id=\"CIFSoftToast\" class=\"CIFSoftNotificationToast\"><div tabindex=\"0\" id=\"header_SoftNotification_CIF\" class=\"headerSoftNotification_CIF\"><div><br></div></div><div tabindex=\"0\" id=\"bodyDivSoftToastCIF\" class=\"bodyDivSoftToast_CIF\"></div></div>");
                let p = a.contentWindow.document.getElementById("header_SoftNotification_CIF");
                var m = document.createElement("span");
                p.appendChild(m),
                p.getElementsByTagName("span")[0].classList.add("chatWindowHeaderSpan_CIF"),
                a.contentWindow.document.getElementById("CIFSoftToast").style.width = "100%",
                -1 == n.search(s.SMS) ? -1 == n.search(s.Chat) ? -1 == n.search(s.Informational) ? -1 != n.search(s.Failure) && p.getElementsByTagName("span")[0].classList.add("FontIcons_linkToConversationFailWindowHeaderSpan_CIF") : p.getElementsByTagName("span")[0].classList.add("FontIcons_linkToConversationSuccessWindowHeaderSpan_CIF") : p.getElementsByTagName("span")[0].classList.add("FontIcons_chatWindowHeaderSpan_CIF") : p.getElementsByTagName("span")[0].classList.add("FontIcons_smsWindowHeaderSpan_CIF");
                var u = document.createElement("label");
                p.appendChild(u),
                u.classList.add("chatWindowHeaderLabel_CIF"),
                u.innerText = e[0],
                u.setAttribute("aria-label", e[0]),
                m = document.createElement("span"),
                m.classList.add("closeSoftNotification_CIF"),
                m.classList.add("FontIcons-closeSoftNotification_CIF"),
                m.setAttribute("aria-label", "Close"),
                p.appendChild(m),
                p.getElementsByTagName("span")[1].id = "closeSoftNotificationCIF";
                var g = document.createElement("div");
                if (g.classList.add("chatWindowHeaderDiv_CIF"),
                p.appendChild(g),
                null != t && "undefined" != t) {
                    let e = a.contentWindow.document.getElementById("bodyDivSoftToastCIF");
                    if ("string" == typeof t) {
                        g = document.createElement("div"),
                        g.classList.add("chatWindowHeaderDiv_CIF"),
                        e.appendChild(g);
                        var y = document.createElement("label");
                        e.appendChild(y),
                        y.classList.add("notificationBodyCIF"),
                        y.innerText = t,
                        y.setAttribute("aria-label", t),
                        g = document.createElement("div"),
                        g.classList.add("chatWindowHeaderDiv_CIF"),
                        e.appendChild(g)
                    } else
                        for (g = document.createElement("div"),
                        g.classList.add("chatWindowHeaderDiv_CIF"),
                        e.appendChild(g),
                        c = 0; c < t.length; c++)
                            for (let n in t[c]) {
                                var y = document.createElement("label");
                                e.appendChild(y),
                                y.classList.add("notificationBodyLabel1_CIF");
                                var _ = document.createElement("label");
                                e.appendChild(_),
                                _.classList.add("notificationBodyLabel2_CIF"),
                                y.innerText = n,
                                y.setAttribute("aria-label", n),
                                _.innerText = t[c][n],
                                _.setAttribute("aria-label", t[c][n]),
                                y.style.width = "30%",
                                _.style.width = "calc(70% - 30px)",
                                g = document.createElement("div"),
                                g.classList.add("chatWindowHeaderDiv_CIF"),
                                e.appendChild(g)
                            }
                }
                return r.set(a.contentWindow.document.getElementById("closeSoftNotificationCIF"), d),
                r.set(a.contentWindow.document.getElementById("CIFSoftToast"), d),
                r
            }
            function i(e) {
                let n = o.document.getElementById(s.widgetIframeId), a = n.contentWindow.document.getElementById("toastDiv"), c = 0, p = -1, m = [], u, g, y, _;
                for (let[t,n] of e)
                    if (-1 != t.search(s.eventType) && (console.log(n),
                    _ = n),
                    -1 != t.search(s.notificationUXObject))
                        for (let[e,t] of n)
                            -1 == e.search(s.headerDataCIF) ? -1 == e.search(s.bodyDataCIF) ? -1 == e.search(s.actionsCIF) ? -1 != e.search(s.notificationType) && (m = t) : y = t : g = t : u = t;
                if (null == u || "undefined" == u)
                    return t.postMessageNamespace.rejectWithErrorMessage("The header value is blank. Provide a value to the parameter.");
                if (-1 != m[0].search(t.MessageType.softNotification) && (null == g || "undefined" == g))
                    return t.postMessageNamespace.rejectWithErrorMessage("The body value is blank. Provide a value to the parameter.");
                if (null == m || "undefined" == m || 0 >= m.length)
                    return t.postMessageNamespace.rejectWithErrorMessage("The notificationType value is blank. Provide a value to the parameter.");
                -1 == m[0].search(t.MessageType.softNotification) && (d++,
                5 < d && (a.removeChild(a.getElementsByClassName("CIFToastDiv")[a.getElementsByClassName("CIFToastDiv").length - 1]),
                d--));
                let I = new Map;
                if (I = r(u, g, y, m, _),
                null != y && "undefined" != y)
                    for (c = 0; c < y.length; c++)
                        for (let e in y[c])
                            -1 != e.search(s.Timer) && (p = y[c][e]);
                return new Promise(function(e) {
                    if (-1 != m[0].search(t.MessageType.softNotification))
                        for (let[t,i] of I)
                            t == n.contentWindow.document.getElementById("CIFSoftToast") ? t.addEventListener("click", function n() {
                                t.removeEventListener("click", n),
                                t.parentElement.removeChild(t);
                                var i = new Map().set(s.value, new Map().set(s.value, s.Accept));
                                return e(i)
                            }) : (t.addEventListener("click", function n() {
                                t.removeEventListener("click", n),
                                t.parentElement.parentElement.parentElement.removeChild(t.parentElement.parentElement);
                                var i = new Map().set(s.value, new Map().set(s.value, s.Reject));
                                return e(i)
                            }),
                            setTimeout(function() {
                                if (null != t.parentElement.parentElement.parentElement) {
                                    t.parentElement.parentElement.parentElement.removeChild(t.parentElement.parentElement);
                                    var n = new Map().set(s.value, new Map().set(s.value, s.Reject));
                                    return e(n)
                                }
                            }, 2e4));
                    else {
                        l = a.getElementsByClassName("CIFToastDiv").length,
                        -1 == p && a.getElementsByClassName("header_NotificationType_CIF")[a.getElementsByClassName("CIFToastDiv").length - 1].setAttribute("style", "display:none;");
                        for (let[t,n] of I)
                            if (t != a.getElementsByClassName("CIFToastDiv")[a.getElementsByClassName("CIFToastDiv").length - 1])
                                t.addEventListener("click", function i() {
                                    t.removeEventListener("click", i),
                                    t.parentElement.parentElement.style.display = "none",
                                    t.parentElement.parentElement.parentElement.removeChild(t.parentElement.parentElement),
                                    d--;
                                    var r = a.getElementsByTagName("div");
                                    if (null != r) {
                                        let e = 0
                                          , t = 0
                                          , n = 0;
                                        for (c = 0; c < r.length; c++) {
                                            let i = r[c];
                                            if (null != i.getElementsByClassName("bodyDivCIF")[0] && (i.getElementsByClassName("bodyDivCIF")[0].setAttribute("style", "display:block;"),
                                            i.getElementsByClassName("headerTimerCIF")[0].setAttribute("style", "display:none;"),
                                            e = 1),
                                            null != i.getElementsByClassName("headerDetailsCIF")[0] && (i.getElementsByClassName("headerDetailsCIF")[0].setAttribute("style", "display:block;"),
                                            t = 1),
                                            null != i.getElementsByClassName("header_NotificationType_CIF")[0] && (-1 != p && i.getElementsByClassName("header_NotificationType_CIF")[0].setAttribute("style", "display:block;"),
                                            n = 1),
                                            1 == e && 1 == t && 1 == n)
                                                break
                                        }
                                    }
                                    let o = a.getElementsByClassName("CIFToastDiv").length
                                      , l = 0;
                                    for (l = 1; l <= o; l++)
                                        a.getElementsByClassName("CIFToastDiv")[l - 1].id = "CIFToastDiv_" + l;
                                    var m = new Map().set(s.value, n);
                                    return e(m)
                                });
                            else if (-1 != p) {
                                var i = p / 1e3;
                                t.getElementsByClassName("broadCastLabel1")[0].innerHTML = i + "",
                                t.getElementsByClassName("headerTimerCIF")[0].innerHTML = i + " sec ";
                                var r = setInterval(function() {
                                    var i = +t.getElementsByClassName("broadCastLabel1")[0].innerHTML;
                                    if (i--,
                                    t.getElementsByClassName("broadCastLabel1")[0].innerHTML = i + "",
                                    t.getElementsByClassName("headerTimerCIF")[0].innerHTML = i + " sec ",
                                    0 > i) {
                                        if (clearInterval(r),
                                        null != t && null != t.parentElement) {
                                            t.parentElement.removeChild(t),
                                            d--;
                                            var o = a.getElementsByTagName("div");
                                            if (null != o) {
                                                for (c = 0; c < o.length; c++) {
                                                    let e = o[c];
                                                    null != e.getElementsByClassName("bodyDivCIF")[0] && e.getElementsByClassName("bodyDivCIF")[0].setAttribute("style", "display:none;"),
                                                    null != e.getElementsByClassName("headerDetailsCIF")[0] && e.getElementsByClassName("headerDetailsCIF")[0].setAttribute("style", "display:none;"),
                                                    null != e.getElementsByClassName("header_NotificationType_CIF")[0] && e.getElementsByClassName("header_NotificationType_CIF")[0].setAttribute("style", "display:none;")
                                                }
                                                let e = 0
                                                  , t = 0
                                                  , n = 0;
                                                for (c = 0; c < o.length; c++) {
                                                    let i = o[c];
                                                    if (null != i.getElementsByClassName("bodyDivCIF")[0] && (i.getElementsByClassName("bodyDivCIF")[0].setAttribute("style", "display:block;"),
                                                    i.getElementsByClassName("headerTimerCIF")[0].setAttribute("style", "display:none;"),
                                                    e = 1),
                                                    null != i.getElementsByClassName("headerDetailsCIF")[0] && (i.getElementsByClassName("headerDetailsCIF")[0].setAttribute("style", "display:block;"),
                                                    t = 1),
                                                    null != i.getElementsByClassName("header_NotificationType_CIF")[0] && (i.getElementsByClassName("header_NotificationType_CIF")[0].setAttribute("style", "display:block;"),
                                                    n = 1),
                                                    1 == e && 1 == t && 1 == n)
                                                        break
                                                }
                                            }
                                        }
                                        let i = a.getElementsByClassName("CIFToastDiv").length
                                          , p = 0;
                                        for (p = 1; p <= i; p++)
                                            a.getElementsByClassName("CIFToastDiv")[p - 1].id = "CIFToastDiv_" + p;
                                        var l = new Map().set(s.value, n);
                                        return e(l)
                                    }
                                }, 1e3)
                            }
                    }
                }
                )
            }
            let s = e.CIFramework.Constants;
            const o = window.parent;
            let d = 0
              , l = 0;
            n.renderEventNotification = r,
            n.renderSoftNotification = a,
            n.notifyEventClient = i
        }
        )(n = t.Internal || (t.Internal = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(t) {
        var n;
        (function(n) {
            function i(e, t) {
                let i, r, s, o, d;
                for (let[n,l] of e)
                    -1 == n.search(a.entityName) ? -1 == n.search(a.originURL) ? -1 == n.search(a.entityId) ? -1 == n.search(a.entitySetName) ? -1 != n.search(a.annotationId) && (d = l) : o = l : s = l : r = l : i = l;
                let l = t.value
                  , c = new Map().set(a.notetext, l)
                  , p = ""
                  , m = new Map().set(a.entityName, a.annotation).set(a.value, c).set(a.originURL, r);
                return new Promise(function(e) {
                    if ("" == d)
                        n.createRecord(m).then(function(t) {
                            for (let[e,n] of t)
                                if (-1 != e.search(a.value))
                                    for (let[e,t] of n)
                                        -1 != e.search(a.Id) && (d = t);
                            var l = new Map;
                            let c = o + "(" + s + ")"
                              , p = "objectid_" + i + "@odata.bind"
                              , m = new Map().set(p, c)
                              , u = new Map().set(a.entityName, a.annotation).set(a.entityId, d).set(a.value, m).set(a.originURL, r);
                            n.updateRecord(u).then(function(t) {
                                for (let[e,n] of t)
                                    -1 != e.search(a.value) && (l = n);
                                var n = new Map().set(a.value, d);
                                e(n)
                            })
                        });
                    else {
                        let t = "?$select=notetext&$filter=_objectid_value eq " + s
                          , i = new Map().set(a.entityName, a.annotation).set(a.queryParameters, t).set(a.originURL, r);
                        n.search(i).then(function(t) {
                            for (let[e,n] of t)
                                if (-1 != e.search(a.value))
                                    for (let e = 0; e < n.length; e++)
                                        for (let t in n[e])
                                            -1 != t.search(a.notetext) && (p = n[e][t]);
                            let i = new Map().set(a.notetext, p + " " + l)
                              , s = new Map().set(a.entityName, a.annotation).set(a.entityId, d).set(a.value, i).set(a.originURL, r);
                            n.updateRecord(s).then(function(t) {
                                for (let[e,n] of t)
                                    if (-1 != e.search(a.value))
                                        for (let[e,t] of n)
                                            -1 != e.search(a.Id) && (d = t);
                                var n = new Map().set(a.value, d);
                                e(n)
                            })
                        })
                    }
                }
                )
            }
            function r() {
                let e = s.document.getElementById(a.widgetIframeId)
                  , n = e.contentWindow.document.getElementById("notesDiv");
                t.isNullOrUndefined(n) || n.removeChild(n.getElementsByClassName("CIFNotes")[0])
            }
            let a = e.CIFramework.Constants;
            const s = window.parent;
            n.toggleNotesVisibility = function() {
                let e = s.document.getElementById(a.widgetIframeId)
                  , t = e.contentWindow.document.getElementById("notesDiv");
                t.style.visibility = "hidden" == t.style.visibility ? "visible" : "hidden"
            }
            ,
            n.insertNotesClient = function(e) {
                let n = s.document.getElementById(a.widgetIframeId), o = n.contentWindow.document.getElementById("notesDiv"), d, l, c, p;
                var m = o.getElementsByTagName("div");
                if (null != m && 0 < m.length)
                    return t.postMessageNamespace.rejectWithErrorMessage("This conversation already has a note opened.");
                for (let[t,n] of e)
                    -1 == t.search(a.entityName) ? -1 == t.search(a.originURL) ? -1 == t.search(a.entityId) ? -1 != t.search(a.entitySetName) && (p = n) : c = n : l = n : d = n;
                return new Promise(function(t) {
                    o.insertAdjacentHTML("beforeend", "<div id=\"CIFActivityNotes\" tabindex=\"0\" class=\"CIFNotes\"><div id=\"notesHeaderIdCIF\" tabindex=\"0\" class=\"notesHeader\"><div class=\"notesHeaderSpan_CIF\" aria-label=\"Add Notes\" style=\"margin-left:18px\"><br/>Add Notes</div></div></div>"),
                    o.getElementsByClassName("CIFNotes")[0].classList.add("notesDivCIF"),
                    o.getElementsByClassName("notesHeader")[0].classList.add("notesHeaderCIF");
                    let s = n.clientHeight - 26;
                    n.contentWindow.document.getElementById("notesHeaderIdCIF").style.height = .14 * s + "px";
                    var d = document.createElement("span");
                    d.classList.add("closeNotes_CIF"),
                    d.classList.add("FontIcons-closeSoftNotification_CIF"),
                    d.setAttribute("aria-label", "Close"),
                    o.getElementsByClassName("notesHeaderSpan_CIF")[0].appendChild(d);
                    var l = document.createElement("TextArea");
                    let c = o.getElementsByClassName("CIFNotes")[0];
                    c.appendChild(l),
                    n.contentWindow.document.getElementById("CIFActivityNotes").style.width = "calc(100% - 7px)",
                    n.contentWindow.document.getElementById("CIFActivityNotes").style.height = s.toString() + "px",
                    l.setAttribute("placeholder", "Start adding notes"),
                    l.classList.add("newTextAreaCIF");
                    l.id = "notesTextAreaCIF",
                    l.style.width = "calc(87.5% - 15px)",
                    l.style.height = .7 * s + "px";
                    var p = document.createElement("BUTTON");
                    c.appendChild(p),
                    p.classList.add("notesSaveButtonCIF"),
                    p.innerText = "Add Note",
                    p.tabIndex = 0,
                    p.setAttribute("aria-label", "Add Note");
                    var m = document.createElement("a");
                    m.setAttribute("href", "#"),
                    c.appendChild(m),
                    m.classList.add("notesCancelButtonCIF"),
                    m.innerText = "Cancel",
                    m.tabIndex = 0,
                    m.setAttribute("aria-label", "Cancel"),
                    p.addEventListener("click", function() {
                        i(e, l).then(function(e) {
                            return r(),
                            t(new Map().set(a.value, e))
                        })
                    }),
                    m.addEventListener("click", function() {
                        return r(),
                        t(new Map().set(a.value, new Map().set(a.value, "")))
                    }),
                    d.addEventListener("click", function() {
                        return r(),
                        t(new Map().set(a.value, new Map().set(a.value, "")))
                    })
                }
                )
            }
            ,
            n.saveNotes = i,
            n.cancelNotes = r
        }
        )(n = t.Internal || (t.Internal = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(t) {
        var n;
        (function(n) {
            function i() {
                let e = [];
                Xrm.WebApi.retrieveMultipleRecords(H.providerLogicalName, "?$filter=statecode eq 0 and contains(" + H.appSelectorFieldName + ",'" + appId + "')&$orderby=" + H.sortOrderFieldName + " asc&$top=1").then(i=>{
                    if (i && i.entities) {
                        q.removeEventListener(H.CIClickToAct, g),
                        q.addEventListener(H.CIClickToAct, g),
                        q.removeEventListener(H.CISendKBArticle, y),
                        q.addEventListener(H.CISendKBArticle, y),
                        q.removeEventListener(H.SetPresenceEvent, _),
                        q.addEventListener(H.SetPresenceEvent, _),
                        G.client.registerHandler(H.ModeChangeHandler, m),
                        G.client.registerHandler(H.SizeChangeHandler, p),
                        G.client.registerHandler(H.NavigationHandler, u);
                        var r = G.client.getWidgetMode({})
                          , a = !0
                          , s = [];
                        s.orgId = Xrm.Utility.getGlobalContext().organizationSettings.organizationId,
                        s.orgName = Xrm.Utility.getGlobalContext().organizationSettings.uniqueName,
                        s.crmVersion = Xrm.Utility.getGlobalContext().getVersion(),
                        s.appId = appId;
                        for (var o of i.entities) {
                            cifVersion = o[H.cifSolVersion];
                            var d = o[H.roleSelectorFieldName];
                            d = null == d ? null : d.split(";"),
                            e.push(o[H.landingUrl]),
                            "" != o[H.trustedDomain] && e.push(o[H.trustedDomain]);
                            var l = new n.CIProvider(o,G,s)
                              , c = "";
                            a ? (G.providerManager = new n.ProviderManager(G.client,o[H.landingUrl],l),
                            a = !1,
                            c = l.label) : G.providerManager.addProvider(o[H.landingUrl], l);
                            var I = new n.UsageTelemetryData(o[H.providerId],o[H.name],o[H.APIVersion],"loadProvider",o[H.SortOrder],appId,cifVersion,!1,null);
                            n.setUsageData(I)
                        }
                        G.messageLibrary = new t.postMessageNamespace.postMsgWrapper(q,Array.from(e),V),
                        G.client.loadWidgets(G.providerManager.ciProviders, c).then(function() {
                            var e = new n.UsageTelemetryData(l.providerId,l.name,l.apiVersion,"loadProvider - loadWidgets",l.sortOrder,appId,cifVersion,!1,null);
                            n.setUsageData(e)
                        })
                    }
                }
                , e=>{
                    let t = n.generateErrorObject(e, "loadProvider - Xrm.WebApi.retrieveMultipleRecords", n.errorTypes.XrmApiError);
                    n.logFailure(appId, !0, t, "loadProvider", cifVersion)
                }
                )
            }
            function r(i, r, a, s) {
                Date.now();
                ({
                    messageType: r,
                    messageData: JSON.stringify(e.CIFramework.Utility.buildEntity(i))
                });
                if (t.isNullOrUndefined(s))
                    for (let[e,t] of G.providerManager.ciProviders) {
                        var o = {};
                        if (t.raiseEvent(i, r).then(function(e) {
                            this.result = e
                        }
                        .bind(o), function(e) {
                            this.error = e;
                            let i = n.generateErrorObject(e, r + " - raiseEvent", n.errorTypes.GenericError);
                            n.logFailure(appId, !0, i, r + " - raiseEvent", cifVersion, t.providerId, t.name)
                        }
                        .bind(o)),
                        o.result)
                            break
                    }
                else
                    s.raiseEvent(i, r)
            }
            function a(e, i) {
                if (!e) {
                    let e = {
                        reportTime: new Date().toUTCString(),
                        errorMsg: "Parameter list cannot be empty",
                        errorType: n.errorTypes.InvalidParams,
                        sourceFunc: "getProvider"
                    };
                    return [null, e]
                }
                if (!e.get(H.originURL)) {
                    let e = {
                        reportTime: new Date().toUTCString(),
                        errorMsg: "Paramter:url cannot be empty",
                        errorType: n.errorTypes.InvalidParams,
                        sourceFunc: "getProvider"
                    };
                    return [null, e]
                }
                i && i.forEach(function(i) {
                    if (t.isNullOrUndefined(e.get(i))) {
                        let e = {
                            reportTime: new Date().toUTCString(),
                            errorMsg: "Parameter: " + i + " cannot be empty",
                            errorType: n.errorTypes.InvalidParams,
                            sourceFunc: "getProvider"
                        };
                        return [null, e]
                    }
                });
                let r = G.providerManager.ciProviders.get(e.get(H.originURL));
                if (r && r.providerId)
                    return [r, null];
                else {
                    let e = {
                        reportTime: new Date().toUTCString(),
                        errorMsg: "Associated Provider record not found",
                        errorType: n.errorTypes.InvalidParams,
                        sourceFunc: "getProvider"
                    };
                    return [null, e]
                }
            }
            function s(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e);
                if (r) {
                    let e;
                    e = G.client.getEnvironment(t),
                    e.set(H.customParamsKey, r.customParams);
                    var o = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"getEnvironment",cifVersion,t);
                    return n.setPerfData(o),
                    Promise.resolve(new Map().set(H.value, e))
                }
                return n.logFailure(appId, !0, s, "getEnvironment", cifVersion)
            }
            function o(e) {
                return 0 <= Object.keys(t.MessageType).indexOf(e)
            }
            function d(e) {
                let t = new Date;
                const [i,r] = a(e);
                if (i) {
                    let r = e.get(H.eventType);
                    var s = new n.PerfTelemetryData(i,t,Date.now() - t.getTime(),"addGenericHandler",cifVersion,{});
                    if (n.setPerfData(s),
                    !o(r))
                        if (z.has(r) && 0 < z.get(r).length)
                            z.get(r).push(i);
                        else {
                            let e = [];
                            e[0] = i,
                            z.set(r, e),
                            q.addEventListener(r, c)
                        }
                    return Promise.resolve(new Map().set(H.value, !0))
                }
                return n.logFailure(appId, !0, r, "addGenericHandler", cifVersion)
            }
            function l(e) {
                let t = new Date;
                const [r,i] = a(e, [H.eventType]);
                if (r) {
                    let a = e.get(H.eventType);
                    var s = new n.PerfTelemetryData(r,t,Date.now() - t.getTime(),"removeGenericHandler",cifVersion,{});
                    if (n.setPerfData(s),
                    !o(a)) {
                        if (z.has(a))
                            for (let e = 0; e < z.get(a).length; e++)
                                z.get(a)[e] == r && z.get(a).splice(e, 1);
                        0 == z.get(a).length && q.removeEventListener(a, c)
                    }
                    return Promise.resolve(new Map().set(H.value, !0))
                }
                return n.logFailure(appId, !0, i, "removeGenericHandler", cifVersion)
            }
            function c(t) {
                if (z.has(t.type))
                    for (let n = 0; n < z.get(t.type).length; n++)
                        r(e.CIFramework.Utility.buildMap(t.detail), t.type, "Generic event raised", z.get(t.type)[n])
            }
            function p(e) {
                G.client.flapInUse() || r(e.detail, t.MessageType.onSizeChanged, "onSizeChanged invoked", G.providerManager.getActiveProvider())
            }
            function m(e) {
                r(e.detail, t.MessageType.onModeChanged, "onModeChanged invoked")
            }
            function u(e) {
                r(e.detail, t.MessageType.onPageNavigate, "onPageNavigation invoked")
            }
            function g(n) {
                r(e.CIFramework.Utility.buildMap(n.detail), t.MessageType.onClickToAct, "onClickToAct event recieved from client with event data as " + JSON.stringify(n.detail))
            }
            function y(n) {
                r(e.CIFramework.Utility.buildMap(n.detail), t.MessageType.onSendKBArticle, "onSendKBArticle event recieved from client")
            }
            function _(n) {
                let i = e.CIFramework.Utility.buildMap(n.detail);
                j.setAgentPresence(i.get("presenceInfo")),
                r(i, t.MessageType.onSetPresenceEvent, "onSetPresence event received from client")
            }
            function I(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e, [H.value]);
                return r ? new Promise((a,s)=>G.client.updateRecord(H.providerLogicalName, r.providerId, t, new Map([[H.clickToActAttributeName, e.get(H.value)]])).then(s=>{
                    r.clickToAct = e.get(H.value),
                    G.providerManager.ciProviders.set(e.get(H.originURL), r);
                    var o = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"setClickToAct",cifVersion,t);
                    return n.setPerfData(o),
                    a(s)
                }
                , e=>(n.logFailure(appId, !0, e, "setClickToAct", cifVersion, r.providerId, r.name),
                s(new Map().set(H.value, e))))) : n.logFailure(appId, !0, s, "setClickToAct", cifVersion)
            }
            function T(e) {
                let t = new Date;
                const [i,r] = a(e);
                if (i) {
                    var s = new n.PerfTelemetryData(i,t,Date.now() - t.getTime(),"getClickToAct",cifVersion);
                    return n.setPerfData(s),
                    Promise.resolve(new Map().set(H.value, i.clickToAct))
                }
                return n.logFailure(appId, !0, r, "getClickToAct", cifVersion)
            }
            function v(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e, [H.value]);
                if (r) {
                    let a = G.client.setWidgetMode("setWidgetMode", e.get(H.value), t);
                    var o = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"setMode",cifVersion,t);
                    return n.setPerfData(o),
                    Promise.resolve(new Map().set(H.value, a))
                }
                return n.logFailure(appId, !0, s, "setMode", cifVersion)
            }
            function C(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e);
                if (r) {
                    let e = G.client.getWidgetMode(t);
                    var o = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"getMode",cifVersion,t);
                    return n.setPerfData(o),
                    Promise.resolve(new Map().set(H.value, e))
                }
                return n.logFailure(appId, !0, s, "getMode", cifVersion)
            }
            function h(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e, [H.value]);
                if (r) {
                    let a = G.client.setWidgetWidth("setWidgetWidth", e.get(H.value), t);
                    var o = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"setWidth",cifVersion,t);
                    return n.setPerfData(o),
                    Promise.resolve(new Map().set(H.value, a))
                }
                return n.logFailure(appId, !0, s, "setWidth", cifVersion)
            }
            function f(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e);
                if (r) {
                    let e = G.client.getWidgetWidth(t);
                    var o = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"getWidth",cifVersion,t);
                    return n.setPerfData(o),
                    Promise.resolve(new Map().set(H.value, e))
                }
                return n.logFailure(appId, !0, s, "getWidth", cifVersion)
            }
            function E(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e, [H.SearchString]);
                if (r) {
                    let a = G.client.openKBSearchControl(e.get(H.SearchString), t);
                    var o = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"openKBSearchControl",cifVersion,t);
                    return n.setPerfData(o),
                    Promise.resolve(new Map().set(H.value, a))
                }
                return n.logFailure(appId, !0, s, "openKBSearchControl", cifVersion)
            }
            function S(e) {
                const [t,i] = a(e);
                return t ? b(e, !1, "searchAndOpenRecords") : n.logFailure(appId, !0, i, "searchAndOpenRecords", cifVersion)
            }
            function b(e, t, i) {
                let r = {}
                  , s = new Date;
                const [o,d] = a(e, [H.entityName, H.queryParameters]);
                if (o) {
                    let a = G.client.retrieveMultipleAndOpenRecords(e.get(H.entityName), e.get(H.queryParameters), t, r);
                    var l = new n.PerfTelemetryData(o,s,Date.now() - s.getTime(),i ? i : "doSearch",cifVersion,r);
                    return n.setPerfData(l),
                    a
                }
                return n.logFailure(appId, !0, d, "doSearch", cifVersion)
            }
            function A(e) {
                const [t,i] = a(e);
                return t ? b(e, !0, "search") : n.logFailure(appId, !0, i, "search", cifVersion)
            }
            function P(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e, [H.entityName]);
                return r ? new Promise((a,s)=>{
                    G.client.renderSearchPage(e.get(H.entityName), e.get(H.SearchString)).then(function(e) {
                        var s = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"renderSearchPage",cifVersion,t);
                        return n.setPerfData(s),
                        a(new Map().set(H.value, e))
                    }, e=>(n.logFailure(appId, !0, e, "renderSearchPage", cifVersion, r.providerId, r.name),
                    s(new Map().set(H.value, e))))
                }
                ) : n.logFailure(appId, !0, s, "renderSearchPage", cifVersion)
            }
            function N(e) {
                let t = {}
                  , i = new Date
                  , [r,s] = a(e, [H.entityName, H.value]);
                return r ? new Promise((a,s)=>{
                    G.client.createRecord(e.get(H.entityName), null, t, e.get(H.value)).then(function(e) {
                        var s = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"createRecord",cifVersion,t);
                        return n.setPerfData(s),
                        a(new Map().set(H.value, e))
                    }, e=>(n.logFailure(appId, !0, e, "createRecord", cifVersion, r.providerId, r.name),
                    s(new Map().set(H.value, e))))
                }
                ) : n.logFailure(appId, !0, s, "createRecord", cifVersion)
            }
            function F(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e, [H.entityName, H.entityId, H.queryParameters]);
                return r ? new Promise((a,s)=>{
                    G.client.retrieveRecord(e.get(H.entityName), e.get(H.entityId), t, e.get(H.queryParameters)).then(function(e) {
                        var s = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"retrieveRecord",cifVersion,t);
                        return n.setPerfData(s),
                        a(new Map().set(H.value, e))
                    }, e=>(n.logFailure(appId, !0, e, "retrieveRecord", cifVersion, r.providerId, r.name),
                    s(new Map().set(H.value, e))))
                }
                ) : n.logFailure(appId, !0, s, "retrieveRecord", cifVersion)
            }
            function W(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e, [H.entityName, H.entityId, H.value]);
                return r ? new Promise((a,s)=>{
                    G.client.updateRecord(e.get(H.entityName), e.get(H.entityId), t, e.get(H.value)).then(function(e) {
                        var s = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"updateRecord",cifVersion,t);
                        return n.setPerfData(s),
                        a(new Map().set(H.value, e))
                    }, e=>(n.logFailure(appId, !0, e, "updateRecord", cifVersion, r.providerId, r.name),
                    s(new Map().set(H.value, e))))
                }
                ) : n.logFailure(appId, !0, s, "updateRecord", cifVersion)
            }
            function B(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e, [H.entityName, H.entityId]);
                return r ? new Promise((a,s)=>{
                    G.client.deleteRecord(e.get(H.entityName), e.get(H.entityId), t).then(function(e) {
                        var s = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"deleteRecord",cifVersion,t);
                        return n.setPerfData(s),
                        a(new Map().set(H.value, e))
                    }, e=>(n.logFailure(appId, !0, e, "deleteRecord", cifVersion, r.providerId, r.name),
                    s(new Map().set(H.value, e))))
                }
                ) : n.logFailure(appId, !0, s, "deleteRecord", cifVersion)
            }
            function D(e) {
                const [t,i] = a(e, [H.entityFormOptions, H.entityFormParameters]);
                return t ? G.client.openForm(e.get(H.entityFormOptions), e.get(H.entityFormParameters)) : n.logFailure(appId, !0, i, "openForm", cifVersion)
            }
            function w(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e, [H.entityName]);
                return r ? new Promise((a,s)=>{
                    G.client.getEntityMetadata(e.get(H.entityName), e.get(H.Attributes)).then(function(e) {
                        var s = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"getEntityMetadata",cifVersion,t);
                        return n.setPerfData(s),
                        a(new Map().set(H.value, e))
                    }, e=>(n.logFailure(appId, !0, e, "getEntityMetadata", cifVersion, r.providerId, r.name),
                    s(new Map().set(H.value, e))))
                }
                ) : n.logFailure(appId, !0, s, "getEntityMetadata", cifVersion)
            }
            function U(i) {
                let r = {}
                  , s = new Date;
                const [o,d] = a(i, [H.value]);
                return o ? new Promise((a,d)=>{
                    n.notifyEventClient(i).then(function(e) {
                        var t = new n.PerfTelemetryData(o,s,Date.now() - s.getTime(),"notifyEvent",cifVersion,r);
                        return n.setPerfData(t),
                        a(e)
                    }, i=>(n.logFailure(appId, !0, i, "notifyEvent", cifVersion, o.providerId, o.name),
                    d(e.CIFramework.Utility.createErrorMap(i.errorMsg, t.MessageType.notifyEvent))))
                }
                ) : n.logFailure(appId, !0, d, "notifyEvent", cifVersion)
            }
            function k(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e, [H.value]);
                return r ? new Promise((a,s)=>{
                    let o = G.client.expandFlap();
                    return o ? void n.insertNotesClient(e).then(function(e) {
                        var s = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"insertNotes",cifVersion,t);
                        return n.setPerfData(s),
                        G.client.collapseFlap(),
                        a(e)
                    }, e=>(G.client.collapseFlap(),
                    n.logFailure(appId, !0, e, "insertNotes", cifVersion, r.providerId, r.name),
                    s(new Map().set(H.value, e)))) : s(new Map().set(H.value, "Flap already expanded"))
                }
                ) : n.logFailure(appId, !0, s, "insertNotes", cifVersion)
            }
            function M(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e, [H.entityName]);
                if (r) {
                    let a = j.setAgentPresence(JSON.parse(e.get(H.presenceInfo)), t);
                    var o = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"setAgentPresence",cifVersion,t);
                    return n.setPerfData(o),
                    Promise.resolve(new Map().set(H.value, a))
                }
                return n.logFailure(appId, !0, s, "setAgentPresence", cifVersion)
            }
            function R(e) {
                let t = {}
                  , i = new Date;
                const [r,s] = a(e, [H.entityName]);
                if (r) {
                    let a = j.initializeAgentPresenceList(JSON.parse(e.get(H.presenceList)), t);
                    var o = new n.PerfTelemetryData(r,i,Date.now() - i.getTime(),"initializeAgentPresenceList",cifVersion,t);
                    return n.setPerfData(o),
                    Promise.resolve(new Map().set(H.value, a))
                }
                return n.logFailure(appId, !0, s, "initializeAgentPresenceList", cifVersion)
            }
            function x(e) {
                let t = new Date;
                const [i,r] = a(e);
                if (i) {
                    const [r,a] = i.startUISession(e.get(H.context), e.get(H.initials));
                    var s = new n.PerfTelemetryData(i,t,Date.now() - t.getTime(),"startUISession",cifVersion,{});
                    return n.setPerfData(s),
                    null == r ? n.logFailure(appId, !0, a, "startUISession", cifVersion, i.providerId, i.name) : Promise.resolve(new Map().set(H.value, r))
                }
                return n.logFailure(appId, !0, r, "startUISession", cifVersion)
            }
            function L(e) {
                let t = new Date;
                const [i,r] = a(e);
                if (i) {
                    const [r,a] = i.switchUISession(e.get(H.sessionId));
                    var s = new n.PerfTelemetryData(i,t,Date.now() - t.getTime(),"switchUISession",cifVersion,{});
                    return n.setPerfData(s),
                    null == r ? n.logFailure(appId, !0, a, "switchUISession", cifVersion, i.providerId, i.name) : Promise.resolve(new Map().set(H.value, r))
                }
                return n.logFailure(appId, !0, r, "switchUISession", cifVersion)
            }
            function O(e) {
                let t = new Date;
                const [i,r] = a(e);
                if (i) {
                    const [r,a] = i.endUISession(e.get(H.sessionId));
                    var s = new n.PerfTelemetryData(i,t,Date.now() - t.getTime(),"endUISession",cifVersion,{});
                    return n.setPerfData(s),
                    null == r ? n.logFailure(appId, !0, a, "endUISession", cifVersion, i.providerId, i.name) : Promise.resolve(new Map().set(H.value, r))
                }
                return n.logFailure(appId, !0, r, "endUISession", cifVersion)
            }
            let H = e.CIFramework.Constants;
            const V = new Map([["setclicktoact", [I]], ["getclicktoact", [T]], ["getEntityMetadata", [w]], ["getenvironment", [s]], ["createrecord", [N]], ["retrieverecord", [F]], ["updaterecord", [W]], ["deleterecord", [B]], ["openform", [D]], ["setmode", [v]], ["getmode", [C]], ["setwidth", [h]], ["getwidth", [f]], ["addGenericHandler", [d]], ["removeGenericHandler", [l]], ["setAgentPresence", [M]], ["initializeAgentPresenceList", [R]], ["search", [A]], ["searchandopenrecords", [S]], ["renderSearchPage", [P]], ["openkbsearchcontrol", [E]], ["notifyEvent", [U]], ["insertNotes", [k]], ["startUISession", [x]], ["switchUISession", [L]], ["endUISession", [O]]]);
            let z = new Map
              , G = {}
              , j = {};
            const q = window.parent;
            cifVersion = "",
            n.initializeCI = function(e) {
                new Date;
                return (n.initializeTelemetry(),
                G.client = n.setClient(e),
                !!G.client.checkCIFCapability()) && (n.SessionPanel.getInstance().setState(G),
                j = n.GetPresenceManager(e),
                appId = top.location.search.split("appid=")[1].split("&")[0],
                i(),
                !1)
            }
            ,
            n.getEnvironment = s,
            n.addGenericHandler = d,
            n.removeGenericHandler = l,
            n.onClickToAct = g,
            n.onSendKBArticle = y,
            n.onSetPresence = _,
            n.setClickToAct = I,
            n.getClickToAct = T,
            n.setMode = v,
            n.getMode = C,
            n.setWidth = h,
            n.getWidth = f,
            n.openKBSearchControl = E,
            n.searchAndOpenRecords = S,
            n.search = A,
            n.renderSearchPage = P,
            n.createRecord = N,
            n.retrieveRecord = F,
            n.updateRecord = W,
            n.deleteRecord = B,
            n.openForm = D,
            n.getEntityMetadata = w,
            n.notifyEvent = U,
            n.insertNotes = k,
            n.setAgentPresence = M,
            n.initializeAgentPresenceList = R,
            n.startUISession = x,
            n.switchUISession = L,
            n.endUISession = O
        }
        )(n = t.Internal || (t.Internal = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(t) {
        var e;
        (function(e) {
            class n {
                constructor() {}
                static get Instance() {
                    return null == this.instance && (this.instance = new n),
                    this.instance
                }
                setAllPresences(e) {
                    if (null != e) {
                        var t = document.createElement("div");
                        t.classList.add("PresenceListInnerNode");
                        for (var n = 0, r; n < e.length; n++) {
                            r = document.createElement("div"),
                            r.id = e[n].presenceId,
                            r.classList.add("PresenceListItem");
                            var a = document.createElement("div");
                            a.classList.add("ColorNode"),
                            a.style.backgroundColor = e[n].presenceColor,
                            r.appendChild(a);
                            var s = document.createElement("div");
                            s.classList.add("textNode"),
                            s.innerText = e[n].presenceText,
                            r.appendChild(s);
                            var o = document.createElement("br");
                            r.appendChild(o),
                            t.appendChild(r)
                        }
                        return t.addEventListener("click", this.raiseSetPresence, !1),
                        t
                    }
                    var t = document.createElement("div");
                    return t
                }
                setAgentPresence(e) {
                    var t = document.createElement("div");
                    t.classList.add("agentPresenceDiv"),
                    t.title = e.presenceText,
                    t.addEventListener("click", this.toggleList, !1);
                    var n = document.createElement("div");
                    n.classList.add("innerDiv");
                    var i = document.createElement("div");
                    i.classList.add("backgroundColorDiv");
                    var r = document.createElement("img");
                    r.classList.add("userImageNode"),
                    r.src = "/_imgs/svg_2.svg",
                    i.appendChild(r),
                    n.appendChild(i);
                    var a = document.createElement("div");
                    a.style.backgroundColor = e.presenceColor,
                    a.innerText = " ",
                    a.classList.add("agentPresenceColorNode"),
                    n.appendChild(a);
                    var s = document.createElement("div");
                    return s.innerText = e.presenceText,
                    s.id = "TextNode",
                    s.classList.add("textNode"),
                    t.appendChild(n),
                    t.appendChild(s),
                    t
                }
                toggleList() {
                    var e = window.top.document.getElementById("SidePanelIFrame").contentDocument.getElementById("PresenceList");
                    e.style.display = "none" === window.getComputedStyle(e).display ? "block" : "none"
                }
                raiseSetPresence(n) {
                    var e = window.top.document.getElementById("SidePanelIFrame").contentDocument.getElementById("PresenceList");
                    e.style.display = "none";
                    let i = {}
                      , r = n.target;
                    t.isNullOrUndefined(r.getAttribute("id")) || "" == r.getAttribute("id") ? (i.presenceId = r.parentElement.getAttribute("id"),
                    i.presenceText = r.parentElement.firstElementChild.nextSibling.innerText,
                    i.presenceColor = r.parentElement.firstChild.style.backgroundColor,
                    i.basePresenceStatus = r.parentElement.firstElementChild.nextSibling.innerText) : (i.presenceId = r.getAttribute("id"),
                    i.presenceText = r.firstElementChild.nextSibling.innerText,
                    i.presenceColor = r.firstChild.style.backgroundColor,
                    i.basePresenceStatus = r.firstElementChild.nextSibling.innerText);
                    var a = new CustomEvent("setPresenceEvent",{
                        detail: {
                            presenceId: n.target.parentElement.getAttribute("id"),
                            presenceInfo: i
                        }
                    });
                    window.parent.dispatchEvent(a)
                }
            }
            e.PresenceControl = n
        }
        )(e = t.Internal || (t.Internal = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(e) {
        var t;
        (function(e) {
            e.setClient = function(t) {
                return 0 === t ? e.webClient() : e.webClient()
            }
            ,
            e.GetPresenceManager = function(t) {
                return 0 === t ? e.UCIPresenceManager() : e.UCIPresenceManager()
            }
        }
        )(t = e.Internal || (e.Internal = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
