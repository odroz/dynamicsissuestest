var Microsoft;
(function(e) {
    var t;
    (function(t) {
        var a;
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
        )(a = t.postMessageNamespace || (t.postMessageNamespace = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(t) {
        var a;
        (function(a) {
            function s(e, a) {
                return new Map().set(t.Constants.message, e).set(t.Constants.nameParameter, a)
            }
            function i(e) {
                return e.message !== void 0
            }
            a.getResourceString = function(e) {
                let t = e;
                return Xrm && Xrm.Utility && Xrm.Utility.getResourceString && (t = Xrm.Utility.getResourceString("Localization/CIF_webresource_strings", e),
                (void 0 === t || null === t) && (t = e)),
                t
            }
            ,
            a.createErrorMap = s,
            a.isError = i,
            a.launchSearchPage = function(t, a) {
                try {
                    const s = {
                        pageType: "search",
                        searchText: e.CIFramework.Utility.extractSearchText(t),
                        searchType: 1,
                        EntityNames: [a],
                        EntityGroupName: ""
                    }
                      , i = window.top.getCurrentXrm() || Xrm;
                    i.Navigation.navigateTo(s)
                } catch (e) {}
            }
            ,
            a.buildMap = function(e) {
                if (i(e))
                    return s(e.message);
                else {
                    const t = new Map;
                    return Object.keys(e).forEach(a=>{
                        t.set(a, e[a])
                    }
                    ),
                    t
                }
            }
            ,
            a.mapToString = function(e, t=[]) {
                let a = "";
                return e ? (e.forEach((e,s)=>{
                    -1 === t.indexOf(s) && (a += s + " : " + e + ", ")
                }
                ),
                a) : ""
            }
            ,
            a.flattenMetadata = function(e) {
                const t = {};
                if (null == Object.getPrototypeOf(e) || "undefined" === Object.getPrototypeOf(e))
                    return e;
                const a = Object.getOwnPropertyNames(Object.getPrototypeOf(e)).filter(e=>"constructor" !== e);
                for (const s in a) {
                    const i = a[s];
                    t[i] = "object" == typeof e[i] && e[i].hasOwnProperty("_collection") ? this.flattenCollection(e[i]._collection) : t[i] = e[i]
                }
                return t
            }
            ,
            a.flattenCollection = function(e) {
                const t = {};
                if ("object" == typeof e && Object.keys(e).length)
                    for (const a in e)
                        t[a] = this.flattenMetadata(e[a]);
                return t
            }
            ,
            a.buildEntity = function(e) {
                const t = {};
                return e.forEach((e,a)=>{
                    t[a] = e
                }
                ),
                t
            }
            ,
            a.extractParameter = function(e, t) {
                const a = {};
                if (e) {
                    const t = e.substr(1).split("&");
                    t.forEach(e=>{
                        const t = e.split("=")
                          , s = decodeURIComponent(t.shift())
                          , i = decodeURIComponent(t.join("="));
                        a[s] = i
                    }
                    )
                }
                return a.hasOwnProperty(t) ? a[t] : ""
            }
            ,
            a.extractSearchText = function(e) {
                if (e) {
                    const t = e.split("=");
                    return null != t[1] && "" !== t[1] ? t[1] : ""
                }
                return ""
            }
            ,
            a.splitQueryForSearch = function(e) {
                let t = [];
                e && (t = e.split("&"));
                const a = ["", ""];
                return t.forEach(e=>{
                    e.startsWith("$search") || e.startsWith("?$search") ? a[1] = e : "" === a[0] ? a[0] += e : a[0] += "&" + e
                }
                ),
                a[0].startsWith("?") || (a[0] = "?" + a[0]),
                a[1].startsWith("?") && (a[1] = a[1].substr(1)),
                a
            }
            ,
            a.rgb2hex = function(e) {
                const t = e.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+)/i);
                return t && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2).toUpperCase() + ("0" + parseInt(t[2], 10).toString(16)).slice(-2).toUpperCase() + ("0" + parseInt(t[3], 10).toString(16)).slice(-2).toUpperCase() : e
            }
            ,
            a.getElementFromIframe = function(e, t) {
                return e.contentWindow.document.getElementById(t)
            }
            ,
            a.getElementsByClassName = function(e, t) {
                return e.contentWindow.document.getElementsByClassName(t)
            }
            ,
            a.blinkBrowserTab = function(e) {
                if (e.contentWindow.document.hasFocus() || !0 === window.top.titleAnimation)
                    return;
                const t = window.top.document.title
                  , a = "New notification"
                  , s = setInterval(function() {
                    window.top.document.title = window.top.document.title === a ? t : a
                }, 800);
                window.top.titleAnimation = !0;
                const i = function() {
                    clearInterval(s),
                    window.top.document.title = t,
                    window.top.titleAnimation = !1,
                    e.contentWindow.removeEventListener("focus", i)
                };
                e.contentWindow.addEventListener("focus", i)
            }
            ,
            a.compareVersion = function(e, t) {
                const a = e.split(".")
                  , s = t.split(".");
                if (a.length !== s.length)
                    return !1;
                for (let n = 0; n < a.length; ++n) {
                    const e = parseInt(a[n], 10)
                      , t = parseInt(s[n], 10);
                    if (e > t)
                        return !0;
                    if (e < t)
                        return !1
                }
                return !0
            }
            ,
            a.onFormSaveHandler = function(t) {
                const a = window.top.Xrm.App.sessions.getFocusedSession().sessionId
                  , s = window.top.Xrm.App.sessions.getFocusedSession().tabs.getFocusedTab().tabId
                  , i = ()=>{
                    window.top.Xrm.Navigation.removeOnPreNavigation(i),
                    window.top.Xrm.App.sessions.getSession(a).tabs.getTab(s).close()
                }
                  , n = setInterval(()=>{
                    try {
                        const e = t.getFormContext()
                          , a = e.data.entity.getId();
                        "" !== a && (clearInterval(n),
                        window.top.dispatchEvent(new CustomEvent("entityRecordSaved",{
                            detail: {
                                entityLogicalName: e.data.entity.getEntityName(),
                                entityId: a
                            }
                        })),
                        2 === t.getEventArgs().getSaveMode() && window.top.Xrm.Navigation.addOnPreNavigation(i))
                    } catch (e) {
                        clearInterval(n),
                        console.log("Error in onFormSaveHandler. " + e)
                    }
                }
                , 100);
                window.top.Xrm.Page.data.entity.removeOnSave(e.CIFramework.Utility.onFormSaveHandler)
            }
            ,
            a.newGuid = function() {
                const e = /[xy]/g;
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(e, e=>{
                    const t = 0 | 16 * Math.random()
                      , a = "x" === e ? t : 8 | 3 & t;
                    return a.toString(16)
                }
                )
            }
        }
        )(a = t.Utility || (t.Utility = {}))
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
        t.refreshForm = "refreshform",
        t.createRecord = "createrecord",
        t.deleteRecord = "deleterecord",
        t.retrieveRecord = "retrieverecord",
        t.retrieveMultipleRecords = "retrieveMultipleRecords",
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
        t.onSessionSwitched = "onSessionSwitched",
        t.onSessionIdle = "onSessionIdle",
        t.onUserActivity = "onUserActivity",
        t.onSessionCreated = "onSessionCreated",
        t.onBeforeSessionClosed = "onBeforeSessionClosed",
        t.onSessionClosed = "onSessionClosed",
        t.getEntityMetadata = "getEntityMetadata",
        t.notifyEvent = "notifyEvent",
        t.softNotification = "softNotification",
        t.broadCast = "broadCast",
        t.internalCommunication = "internalCommunication",
        t.notification = "notification",
        t.transfer = "transfer",
        t.escalation = "escalation",
        t.renderSearchPage = "renderSearchPage",
        t.requestFocusSession = "requestFocusSession",
        t.getAllSessions = "getAllSessions",
        t.getFocusedSession = "getFocusedSession",
        t.getSession = "getSession",
        t.canCreateSession = "canCreateSession",
        t.createSession = "createSession",
        t.getFocusedTab = "getFocusedTab",
        t.getTabsByTagOrName = "getTabsByTagOrName",
        t.refreshTab = "refreshTab",
        t.setSessionTitle = "setSessionTitle",
        t.setTabTitle = "setTabTitle",
        t.createTab = "createTab",
        t.focusTab = "focusTab",
        t.onMaxSessionsReached = "onMaxSessionsReached",
        t.setAgentPresence = "setAgentPresence",
        t.initializeAgentPresenceList = "initializeAgentPresenceList",
        t.insertNotes = "insertNotes",
        t.openKBSearchControl = "openkbsearchcontrol",
        t.onSetPresenceEvent = "setPresenceEvent",
        t.hardNotification = "hardNotification",
        t.removeGenericHandler = "removeGenericHandler",
        t.addGenericHandler = "addGenericHandler",
        t.setPosition = "setPosition",
        t.isConsoleApp = "isConsoleApp",
        t.getPosition = "getPosition",
        t.doSearch = "doSearch",
        t.initializeCI = "initializeCI",
        t.loadProvider = "loadProvider",
        t.openDialog = "openDialog",
        t.logErrorsAndReject = "logErrorsAndReject",
        t.initLogAnalytics = "initLogAnalytics",
        t.logAnalyticsEvent = "logAnalyticsEvent",
        t.updateContext = "updateContext",
        t.notifyKpiBreach = "notifyKpiBreach",
        t.notifyNewActivity = "notifyNewActivity",
        t.updateConversation = "updateConversation",
        t.setOCInstallStatus = "setOCInstallStatus",
        t.onKeyDownEvent = "keydown",
        t.fetchDebugData = "fetchDebugData",
        t.debugInformationEvent = "debugInformationEvent",
        t.showGlobalNotification = "showGlobalNotification",
        t.clearGlobalNotification = "clearGlobalNotification",
        t.onResetPresenceEvent = "resetPresenceEvent",
        t.showTimeoutGlobalNotification = "showTimeoutGlobalNotification",
        t.executeFetchQuery = "executeFetchQuery",
        t.notificationDisplayEvent = "notificationDisplayEvent",
        t.sessionVisibilityEvent = "sessionVisibilityEvent",
        t.windowFocusEvent = "windowFocusEvent",
        t.showProgressIndicator = "showProgressIndicator",
        t.closeProgressIndicator = "closeProgressIndicator",
        e.MessageType = t;
        class a {
        }
        a.Started = "Started",
        a.Completed = "Completed",
        e.ScenarioState = a;
        class s {
        }
        s.Success = "Success",
        s.Failure = "Failure",
        e.ScenarioStatus = s;
        class i {
        }
        i.NotificationReceived = "NotificationReceived",
        i.InitAgentPresenceList = "InitAgentPresenceList",
        i.SetAgentPresence = "SetAgentPresence",
        i.InitCIF = "InitCIF",
        e.ScenarioEvent = i;
        class n {
        }
        n.data = "data",
        n.url = "url",
        n.relationship = "relationship",
        n.createFromEntity = "createfromentity",
        n.searchType = "searchtype",
        n.CustomControlInputString = "customcontrol",
        n.ThirdPartyWebsiteInputString = "websiteurl",
        n.ThirdPartyWebsiteInputString1 = "thirdpartywebsite",
        n.EntityViewInputString = "entityview",
        n.DashboardInputString = "dashboard",
        n.EntityRecordInputString = "entityrecord",
        n.EntitySearchInputString = "entitysearch",
        n.WebResourceInputString = "webresource",
        n.control = "control",
        n.dashboard = "dashboard",
        n.entitylist = "entitylist",
        n.entityrecord = "entityrecord",
        n.search = "search",
        n.webresource = "webresource",
        n.thirdPartyWebsite = "webresource",
        e.OpenAppTabType = n;
        class o {
        }
        o.notificationId = "notificationId",
        o.value = "value",
        o.entityName = "entityName",
        o.entityId = "entityId",
        o.queryParameters = "queryParameters",
        o.options = "options",
        o.message = "message",
        o.searchOnly = "searchOnly",
        o.entityFormOptions = "entityFormOptions",
        o.entityFormParameters = "entityFormParameters",
        o.Save = "save",
        o.ScriptIdAttributeName = "data-cifid",
        o.ScriptIdAttributeValue = "CIFMainLibrary",
        o.ScriptCRMUrlAttributeName = "data-crmurl",
        o.nameParameter = "msdyn_name",
        o.originURL = "originURL",
        o.CIClickToAct = "CIClickToAct",
        o.CISendKBArticle = "KMClickToSend",
        o.SetPresenceEvent = "setPresenceEvent",
        o.widgetIframeId = "SidePanelIFrame",
        o.clickToActAttributeName = "msdyn_clicktoact",
        o.enableAnalyticsAttributeName = "msdyn_enableanalytics",
        o.systemUserLogicalName = "systemuser",
        o.templateTag = "templateTag",
        o.appSelectorFieldName = "msdyn_appselector",
        o.sortOrderFieldName = "msdyn_sortorder",
        o.roleSelectorFieldName = "msdyn_roleselector",
        o.providerOdataQuery = "?$select=fullname&$expand=msdyn_ciprovider_systemuser_membership($filter=statecode eq 0;$orderby=msdyn_sortorder asc,createdon asc;$top={0})",
        o.providerNavigationProperty = "msdyn_ciprovider_systemuser_membership",
        o.providerId = "msdyn_ciproviderid",
        o.landingUrl = "msdyn_landingurl",
        o.label = "msdyn_label",
        o.providerLogicalName = "msdyn_ciprovider",
        o.widgetHeight = "msdyn_widgetheight",
        o.widgetWidth = "msdyn_widgetwidth",
        o.SizeChangeHandler = "sizeChangeHandler",
        o.ModeChangeHandler = "modeChangedHandler",
        o.NavigationHandler = "NavigationHandler",
        o.AppName = "appName",
        o.ClientUrl = "clientUrl",
        o.AppUrl = "appUrl",
        o.Theme = "themeName",
        o.darkTheme = "dark",
        o.lightTheme = "light",
        o.OrgLcid = "orgLcid",
        o.OrgUniqueName = "orgUniqueName",
        o.UserId = "userId",
        o.UserLcid = "userLcid",
        o.UserName = "username",
        o.UserRoles = "userRoles",
        o.DefaultCountryCode = "defaultCountryCode",
        o.MinimizedHeight = 34,
        o.DefaultFullWidth = 100,
        o.APIVersion = "msdyn_ciproviderapiversion",
        o.SortOrder = "msdyn_sortorder",
        o.crmVersion = "crmVersion",
        o.cifVersion = "cifVersion",
        o.CIFInitEvent = "CIFInitDone",
        o.Attributes = "attributes",
        o.UciLib = "ucilib",
        o.OrgId = "orgId",
        o.TenantId = "tenantId",
        o.trustedDomain = "msdyn_trusteddomain",
        o.customParams = "msdyn_customparams",
        o.customParamsKey = "customParams",
        o.eventType = "eventType",
        o.headerDataCIF = "headerDataCIF",
        o.bodyDataCIF = "bodyDataCIF",
        o.notificationUXObject = "notificationUXObject",
        o.actionDisplayText = "actionDisplayText",
        o.actionReturnValue = "actionReturnValue",
        o.actionsCIF = "actions",
        o.actionName = "actionName",
        o.responseReason = "responseReason",
        o.CIFNotificationIcon = "CIFNotificationIcon",
        o.actionColor = "actionColor",
        o.actionImage = "actionImage",
        o.Timeout = "Timeout",
        o.Accept = "Accept",
        o.Reject = "Reject",
        o.actionType = "actionType",
        o.notificationType = "notificationType",
        o.Timer = "Timer",
        o.NoOfNotifications = "NoOfNotifications",
        o.SMS = "sms",
        o.Chat = "chat",
        o.Facebook = "facebook",
        o.Twitter = "twitter",
        o.Custom = "custom",
        o.Call = "call",
        o.Informational = "informational",
        o.Failure = "failure",
        o.Case = "case",
        o.SearchString = "searchString",
        o.input = "input",
        o.context = "context",
        o.customerName = "customerName",
        o.sessionId = "sessionId",
        o.tabId = "tabId",
        o.messagesCount = "messagesCount",
        o.shouldReset = "shouldReset",
        o.MaxSessions = 5,
        o.sessionColors = ["#2A757D", "#70278B", "#FF8C00", "#427825", "#B4009E", "#B4A0FF"],
        o.sessionPanel = "sessionPanel",
        o.DEFAULT_WIDGET_WIDTH = 378,
        o.DEFAULT_SIDEPANEL_WIDTH = 34,
        o.DEFAULT_SIDEPANEL_WIDTH_WITH_BORDER = 36,
        o.presenceInfo = "presenceInfo",
        o.presenceList = "presenceList",
        o.activityType = "activityType",
        o.sessionDetails = "sessionDetails",
        o.activityId = "activityId",
        o.Id = "id",
        o.notetext = "notetext",
        o.annotation = "annotation",
        o.entitySetName = "entitySetName",
        o.annotationId = "annotationid",
        o.secRemaining = "secs remaining",
        o.CollapseFlapHandler = "collapseFlapHandler",
        o.newSessionId = "newSessionId",
        o.previousSessionId = "previousSessionId",
        o.left = 1,
        o.right = 2,
        o.GLOBAL_PRESENCE_LIST = "GlobalToolBar_PresenceList",
        o.presenceText = "presenceText",
        o.presenceSelectControl = "presence_id",
        o.OK_BUTTON_ID = "ok_id",
        o.CANCEL_BUTTON_ID = "cancel_id",
        o.LAST_BUTTON_CLICKED = "param_lastButtonClicked",
        o.SET_PRESENCE_MDD = "SetAgentPresenceMDD",
        o.PRESENCE_SELECTED_VALUE = "param_selectedValue",
        o.CURRENT_PRESENCE_INFO = "GlobalToolBar_CurrentPresenceInfo",
        o.PRESENCE_BUTTON_DATA_ID = "[data-id='Microsoft.Dynamics.Service.CIFramework.Presence.Dialog']",
        o.PRESENCE_LIST_ID = "[id='|NoRelationship||Microsoft.Dynamics.Service.CIFramework.Presence.DialogCommand5crm_header_global']",
        o.sidePanelCollapsedState = 0,
        o.sidePanelExpandedState = 1,
        o.sidePanelHiddenState = 2,
        o.sessionNotValidErrorMessage = "Focused session is neither the default session nor it belongs to the provider",
        o.cifSolVersion = "msdyn_cifsolversion",
        o.correlationId = "correlationId",
        o.providerSessionId = "providerSessionId",
        o.errorMessage = "errorMsg",
        o.dialogStrings = "dialogStrings",
        o.dialogOptions = "dialogOptions",
        o.functionName = "functName",
        o.ErrorCode = "errorCode",
        o.notificationTemplateIconAttribute = "msdyn_icon",
        o.notificationTemplateIconDefaultValue = "/webresources/msdyn_chat_icon_zfp.svg",
        o.notificationTemplateTimeoutAttribute = "msdyn_timeout",
        o.templateName = "templateName",
        o.notificationTemplate = "notificationTemplate",
        o.templateParameters = "templateParameters",
        o.notificationTemplateTimeoutDefaultValue = 120,
        o.templateNameResolver = "templateNameResolver",
        o.notificationResponse = "NotificationResponse",
        o.isDelete = "isDelete",
        o.isDirty = "isDirty",
        o.onHiddenTimerEvent = "onHiddenTimerEvent",
        o.resetKpiBreach = "resetKpiBreach",
        o.kpiBreachDetails = "kpiBreachDetails",
        o.liveWorkItemEntity = "msdyn_ocliveworkitem",
        o.skipLwiCreation = "skipLwiCreation",
        o.idleTimeThreshold = "idleTimeThreshold",
        o.entityStateCode = "statecode",
        o.stateCodeClose = 3,
        o.entityStatusCode = "statuscode",
        o.statusCodeClose = 4,
        o.defaultSessionId = "session-id-0",
        o.OnKeyDownEvent = "keydown",
        o.defaultOmnichannelLabel = "omnichannel",
        o.defaultOmnichannelProviderId = "7E74C210-F8FF-4C16-84AF-5AE454A5514A",
        o.confirmButton = "confirmButton",
        o.result = "result",
        o.homeSession = "session-id-0",
        o.collection = "_collection",
        o.notificationOptions = "notificationOptions",
        o.globalMissedNotificationMessageBarId = "globalMissedNotificationMessageBarId",
        o.presenceCanUserSet = "canUserSet",
        o.inactivePresenceId = "a89ee9cf-453a-4b52-8d7a-ad647feecd5d",
        o.NotificationDisplayEvent = "notificationDisplayEvent",
        o.notificationAction = "notificationAction",
        o.OnWindowFocusEvent = "onWindowFocusEvent",
        o.OmniChannelProvider = "omnichannel",
        o.idle = "idle",
        o.WindowFocusEvent = "windowFocusEvent",
        o.progressIndicatorMessage = "progressIndicatorMessage",
        e.Constants = o;
        class r {
        }
        r.SelectOperator = "?$select=",
        r.FilterOperator = "$filter=",
        e.QueryDataConstants = r;
        class d {
        }
        d.productivityPaneControlName = "MscrmControls.ProductivityToolPanel.ProductivityPanelControl",
        d.entityName = "msdyn_productivitypaneconfiguration",
        d.productivityPaneState = "msdyn_productivitypanestate",
        d.productivityPaneMode = "msdyn_productivitypanemode",
        d.applicationName = "msdyn_applicationname",
        d.msdyn_name = "msdyn_name",
        e.ProductivityPaneConfigConstants = d;
        class c {
        }
        c.notificationResponseAction = "notificationResponseAction",
        c.acceptNotificationResponse = "accepted",
        c.rejectNotificationResponse = "rejected",
        c.channelProviderName = "providerName",
        c.channelProviderId = "providerId",
        c.telemetryApiName = "telemetryAPIName",
        c.telemetryInitApiName = "InitCIFAnalytics",
        c.telemetryLogCustomEventApiName = "LogCustomEvent",
        c.telemetryLogSystemEventApiName = "LogSystemEvent",
        c.analyticsdata = "analyticsData",
        c.initLogAnalyticsEventName = "initAnalytics",
        c.analyticsEventType = "analyticsEventtype",
        c.analyticsEventName = "analyticsEventname",
        c.initAnalyticsPlatformEventName = "initCIFAnalytics",
        c.logAnalyticsPlatformEventName = "logCIFAnalytics",
        c.focussedSession = "focussedSession",
        c.clientSessionId = "clientSessionId",
        c.enableAnalytics = "enableAnalytics",
        c.telemetryUpdateConversationName = "updateConversation",
        c.updateConversationsPlatformEventName = "updateConversation",
        c.sessionUniqueId = "sessionUniqueId",
        c.correlationId = "correlationId",
        c.conversationId = "conversationId",
        c.providerSessionId = "providerSessionId",
        c.sessionStarted = "SessionStarted",
        c.SessionFocusIn = "SessionFocusIn",
        c.SessionFocusOut = "SessionFocusOut",
        c.sessionClosed = "SessionClosed",
        c.cifSessionStart = "cifSessionStart",
        c.cifSessionEnd = "cifSessionEnd",
        c.notificationReceived = "NotificationReceived",
        c.notificationAccepted = "NotificationAccepted",
        c.notificationRejected = "NotificationRejected",
        c.notificationTimedOut = "NotificationTimedOut",
        e.AnalyticsConstants = c;
        class l {
        }
        l.Accept = "Accept",
        l.AutoAcceptOnTimeout = "AutoAcceptOnTimeout",
        l.AutoAccept = "AutoAccept",
        l.DeclinedByAgent = "DeclinedByAgent",
        l.DisplayTimeout = "DisplayTimeout",
        l.NotificationQueueLimitExceeded = "NotificationQueueLimitExceeded",
        l.NotificationQueueTimeLimitExceeded = "NotificationQueueTimeLimitExceeded",
        l.NotificationTemplateNotFoundError = "NotificationTemplateNotFoundError",
        l.NotificationTemplateResolverNotFoundError = "NotificationTemplateResolverNotFoundError",
        l.RejectAfterTimeoutNonPlatformTimer = "RejectAfterTimeoutNonPlatformTimer",
        e.ResponseReason = l;
        class m {
        }
        m.DisplayStart = "DisplayStart",
        m.DisplayEnd = "DisplayEnd",
        e.NotificationState = m;
        var p;
        (function(e) {
            e[e.Notes_Flap_Already_Expanded = 101] = "Notes_Flap_Already_Expanded"
        }
        )(p = e.ErrorCode || (e.ErrorCode = {}));
        var g;
        (function(e) {
            e[e.SystemEvent = 0] = "SystemEvent",
            e[e.CustomEvent = 1] = "CustomEvent"
        }
        )(g = e.EventType || (e.EventType = {}));
        var y;
        (function(e) {
            e[e.Yes = 1e8] = "Yes",
            e[e.No = 100000001] = "No"
        }
        )(y = e.ShowTimeoutOption || (e.ShowTimeoutOption = {}));
        var u;
        (function(e) {
            e[e.NotificationReceived = 0] = "NotificationReceived",
            e[e.NotificationAccepted = 1] = "NotificationAccepted",
            e[e.NotificationAutoAccepted = 2] = "NotificationAutoAccepted",
            e[e.NotificationRejected = 3] = "NotificationRejected",
            e[e.NotificationTimedOut = 4] = "NotificationTimedOut",
            e[e.SessionStarted = 5] = "SessionStarted",
            e[e.SessionFocusIn = 6] = "SessionFocusIn",
            e[e.SessionFocusOut = 7] = "SessionFocusOut",
            e[e.SessionClosed = 8] = "SessionClosed",
            e[e.NewTabOpened = 9] = "NewTabOpened",
            e[e.CifSessionStart = 10] = "CifSessionStart",
            e[e.CifSessionEnd = 11] = "CifSessionEnd"
        }
        )(u = e.InternalEventName || (e.InternalEventName = {}));
        class T {
        }
        T.Granted = "granted",
        T.Denied = "denied",
        T.Default = "default",
        T.Accept = "accept",
        T.Reject = "reject",
        T.Never = 100000002,
        T.OnlyWhenPageNotInFocus = 100000003,
        T.InstalledEvent = "install",
        T.ActivateEvent = "activate",
        T.NotificationClickEvent = "notificationclick",
        T.MessageEvent = "message",
        T.BroadcastChannel = "BroadcastChannel",
        T.ServiceWorker = "serviceWorker",
        T.Error = "Error",
        T.timeoutBuffer = 5e3,
        T.browserPrefixes = ["moz", "ms", "o", "webkit"],
        e.DesktopNotificationConstants = T;
        class v {
        }
        v.MessageType = 2,
        v.Level = 3,
        v.Title = "",
        v.ActionResourceKey = "RESET_PRESENCE_ACTION",
        v.MessageResourceKey = "MISSED_NOTIFICATION_MESSAGE_BAR_TEXT",
        v.PresencePlaceholderResourceKey = "MISSED_NOTIFICATION_PRESENCE_PLACEHOLDER",
        e.MissedNotificationsConstants = v
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(t) {
        var a;
        (function(t) {
            t.postMsgWrapper = class {
                constructor(e, a, s, i) {
                    this.pendingPromises = new Map,
                    this.messageHandlers = new Map,
                    this.responseTargetWindow = null,
                    e && (e.removeEventListener(t.messageConstant, this.processMessage.bind(this)),
                    e.addEventListener(t.messageConstant, this.processMessage.bind(this))),
                    this.listWhitelistedDomains = a,
                    s && (this.messageHandlers = s),
                    this.responseTargetWindow = i
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
                createDeferred(a) {
                    const s = {
                        promise: null,
                        resolve: null,
                        reject: null,
                        timerId: null
                    }
                      , i = new Promise((e,t)=>{
                        s.resolve = e,
                        s.reject = t
                    }
                    )
                      , n = [i];
                    if (!a) {
                        const a = new Promise((a,i)=>{
                            s.timerId = setTimeout(()=>{
                                i(e.CIFramework.Utility.createErrorMap("Timeout occurred as no response was received from listener window"))
                            }
                            , t.promiseTimeOut)
                        }
                        );
                        n.push(a)
                    }
                    return s.promise = Promise.race(n).then(e=>(s.timerId && clearTimeout(s.timerId),
                    this.removePromise(s),
                    e)).catch(e=>{
                        throw s.timerId && clearTimeout(s.timerId),
                        this.removePromise(s),
                        e
                    }
                    ),
                    s
                }
                removePromise(e) {
                    let t = null;
                    for (const [a,s] of this.pendingPromises)
                        if (s === e) {
                            t = a;
                            break
                        }
                    t && this.pendingPromises.delete(t)
                }
                postMsg(e, a, s, i, n) {
                    if (e && "*" !== s) {
                        const i = this.createDeferred(n)
                          , o = this.getCorrelationId()
                          , r = a;
                        return r[t.messageCorrelationId] = o,
                        this.pendingPromises.set(o, i),
                        this.postMsgInternal(e, r, s, i)
                    }
                    return t.rejectWithErrorMessage("Receiving window or targetOrigin cannot be unspecified")
                }
                postMsgInternal(e, a, s, i) {
                    for (let n = 0; ; )
                        try {
                            return e.postMessage(a, s),
                            i ? i.promise : void 0
                        } catch (e) {
                            if (++n === t.retryCount)
                                return t.rejectWithErrorMessage("Not able to post the request to receiving window after multiple tries.")
                        }
                }
                sendResponseMsg(e, t, a) {
                    e && "*" !== a && e.postMessage(t, a)
                }
                processMessage(a) {
                    try {
                        const s = this.responseTargetWindow || a.source
                          , i = this.listWhitelistedDomains.find(e=>{
                            const t = new URL(a.origin)
                              , s = decodeURIComponent(t.hostname);
                            let i, n = "";
                            return (null != e && (i = new URL(e),
                            n = decodeURIComponent(i.hostname)),
                            "" !== n && n === s) || !!(null != e && n.startsWith("*")) && s.endsWith(n.substr(2))
                        }
                        )
                          , n = a.data[t.messageCorrelationId];
                        let o, r = null;
                        if (a.origin && "*" !== a.origin && a.source || (r = e.CIFramework.Utility.createErrorMap("Origin/Source of the message cant be null or all")),
                        i || (r = e.CIFramework.Utility.createErrorMap("Sender domain is not a recognised or is invalid and hence the message cant be processed")),
                        !n) {
                            if (r)
                                return void console.trace("Ignoring message from unknown event source: " + a.origin);
                        } else if (r)
                            return o = {
                                messageOutcome: t.messageFailure,
                                messageData: r,
                                messageCorrelationId: n,
                                messageType: 'CIF_Response'
                            },
                            this.sendResponseMsg(s, o, a.origin);
                        let d;
                        if (n && this.pendingPromises && (d = this.pendingPromises.get(n)),
                        !d) {
                            const r = a.data;
                            if(r.messageType === 'CIF_Response')
                                return;
                            if ("string" != typeof r.messageData && r.messageData.set(t.originURL, i),
                            !this.messageHandlers.get(r.messageType))
                                return void (n && (o = {
                                    messageOutcome: t.messageSuccess,
                                    messageData: e.CIFramework.Utility.createErrorMap("No handlers found to process the request."),
                                    messageCorrelationId: n,
                                    messageType: 'CIF_Response'
                                },
                                this.sendResponseMsg(s, o, a.origin)));
                            this.messageHandlers.get(r.messageType).forEach(i=>{
                                try {
                                    i(r.messageData).then(function(e) {
                                        n && (o = {
                                            messageOutcome: t.messageSuccess,
                                            messageData: e,
                                            messageCorrelationId: n,
                                            messageType: 'CIF_Response'
                                        },
                                        this.sendResponseMsg(s, o, a.origin))
                                    }
                                    .bind(this), function(e) {
                                        n && (o = {
                                            messageOutcome: t.messageFailure,
                                            messageData: e,
                                            messageCorrelationId: n,
                                            messageType: 'CIF_Response'
                                        },
                                        this.sendResponseMsg(s, o, a.origin))
                                    }
                                    .bind(this))
                                } catch (i) {
                                    n && (o = {
                                        messageOutcome: t.messageFailure,
                                        messageData: e.CIFramework.Utility.buildMap(i),
                                        messageCorrelationId: n,
                                        messageType: 'CIF_Response'
                                    },
                                    this.sendResponseMsg(s, o, a.origin))
                                }
                            }
                            )
                        } else {
                            const e = a.data;
                            e.messageOutcome === t.messageSuccess ? d.resolve(e.messageData) : d.reject(e.messageData)
                        }
                    } catch (t) {
                        console.error("Error in PostMsgWrapper - processMessage. " + t)
                    }
                }
            }
        }
        )(a = t.postMessageNamespace || (t.postMessageNamespace = {}))
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
var Microsoft;
(function(e) {
    var t;
    (function(t) {
        function a(e) {
            return null == e || "undefined" == typeof e
        }
        function s() {
            function a(e) {
                if (s(),
                e.shiftKey && e.altKey && e.ctrlKey && 68 === e.keyCode) {
                    console.log("Debug event: in widget code");
                    const e = {
                        messageType: t.MessageType.debugInformationEvent,
                        messageData: new Map().set(ie.value, "event form main lib ")
                    };
                    return i("debugInformationEvent", e, !1)
                }
                return Promise.resolve()
            }
            function s() {
                console.log("onUserActivity event: in widget code");
                const e = {
                    messageType: t.MessageType.onUserActivity,
                    messageData: new Map().set(ie.value, "event form main lib")
                };
                i(t.MessageType.onUserActivity, e, !1)
            }
            Date.now();
            te = window.top;
            const n = document.createElement("a");
            let o = document.referrer
              , r = "";
            try {
                const e = document.querySelector("script[" + ie.ScriptIdAttributeName + "=\"" + ie.ScriptIdAttributeValue + "\"]")
                  , t = e.getAttribute(ie.ScriptCRMUrlAttributeName);
                t && (o = t)
            } catch (e) {}
            try {
                r = e.CIFramework.Utility.extractParameter(window.location.search, ie.UciLib)
            } catch (e) {}
            if (n.href = o,
            se.push(n.protocol + "//" + n.hostname),
            "" !== r && null != r) {
                const e = document.createElement("a");
                e.href = r,
                se.push(e.protocol + "//" + e.hostname)
            }
            1 < se.length,
            ae = new t.postMessageNamespace.postMsgWrapper(window,se,null,te);
            const d = new CustomEvent(ie.CIFInitEvent,{
                detail: se
            });
            document.removeEventListener(ie.OnKeyDownEvent, a),
            document.addEventListener(ie.OnKeyDownEvent, a),
            document.removeEventListener("onclick", s),
            document.removeEventListener("mousemove", s),
            document.removeEventListener("touchstart", s),
            document.addEventListener("onclick", s),
            document.addEventListener("mousemove", s),
            document.addEventListener("touchstart", s),
            window.setTimeout(()=>{
                window.dispatchEvent(d)
            }
            , 0)
        }
        function i(e, t, s, i) {
            Date.now();
            return new Promise((e,s)=>ae.postMsg(te, t, se[se.length - 1], !1, i).then(t=>t && !a(t.get(ie.value)) ? e(t.get(ie.value)) : e(null), e=>s(e)))
        }
        function n(e, a, s) {
            const o = {
                messageType: t.MessageType.logErrorsAndReject,
                messageData: new Map().set(ie.errorMessage, e).set(ie.correlationId, s).set(ie.functionName, a)
            };
            return i(n.name, o, !1),
            t.postMessageNamespace.rejectWithErrorMessage(e)
        }
        function o() {
            const e = Date.now()
              , a = {
                messageType: t.MessageType.isConsoleApp,
                messageData: new Map
            };
            return i(o.name, a, !1)
        }
        function r(e, s) {
            a(e) && (e = !1);
            const n = {
                messageType: t.MessageType.setClickToAct,
                messageData: new Map().set(ie.value, e).set(ie.correlationId, s)
            };
            return i(r.name, n, !1)
        }
        function d(s, o, r, c, l) {
            if (!(a(s) || a(o) || a(r))) {
                const a = {
                    messageType: t.MessageType.insertNotes,
                    messageData: new Map().set(ie.entityName, s).set(ie.entitySetName, o).set(ie.entityId, r).set(ie.annotationId, c).set(ie.correlationId, l)
                };
                return new Promise((t,s)=>i(d.name, a, !1, !0).then(a=>t(JSON.stringify(e.CIFramework.Utility.buildEntity(a))), t=>s(JSON.stringify(e.CIFramework.Utility.buildEntity(t)))))
            }
            if (a(s)) {
                return n("The entityName parameter is blank. Provide a value to the parameter.", t.MessageType.insertNotes, l)
            }
            if (a(o)) {
                return n("The entitySetName parameter is blank. Provide a value to the parameter.", t.MessageType.insertNotes, l)
            }
            if (a(r)) {
                return n("The entityId parameter is blank. Provide a value to the parameter.", t.MessageType.insertNotes, l)
            }
        }
        function c(s, o) {
            if (!a(s)) {
                const n = new Map;
                n.set(ie.eventType, s.eventType),
                n.set(ie.correlationId, o),
                n.set(ie.templateName, s.templateName),
                n.set(ie.templateParameters, s.templateParameters),
                n.set(ie.templateNameResolver, s.templateNameResolver),
                n.set(ie.customParamsKey, s.additionalParametersObject),
                a(s.notificationUXObject) || n.set(ie.notificationUXObject, e.CIFramework.Utility.buildMap(JSON.parse(s.notificationUXObject)));
                const r = {
                    messageType: t.MessageType.notifyEvent,
                    messageData: n
                };
                return new Promise((t,a)=>i(c.name, r, !1, !0).then(a=>t(JSON.stringify(e.CIFramework.Utility.buildEntity(a))), t=>a(JSON.stringify(e.CIFramework.Utility.buildEntity(t)))))
            } else {
                return n("The Input parameter is blank. Provide a value.", t.MessageType.notifyEvent, o)
            }
        }
        function l(s, o, r) {
            if (!(a(s) || "" === s)) {
                const a = {
                    messageType: t.MessageType.openForm,
                    messageData: new Map().set(ie.entityFormOptions, s).set(ie.entityFormParameters, o).set(ie.correlationId, r)
                };
                return new Promise((t,s)=>i(l.name, a, !1, !0).then(e=>t(JSON.stringify(e)), t=>s(JSON.stringify(e.CIFramework.Utility.buildEntity(t)))))
            }
            if (a(s) || "" === s) {
                return n("The EntityFormOptions parameter is blank. Provide a value to the parameter.", t.MessageType.openForm, r)
            }
        }
        function m(a, s) {
            const n = {
                messageType: t.MessageType.refreshForm,
                messageData: new Map().set(ie.Save, a).set(ie.correlationId, s)
            };
            return new Promise((t,a)=>i(m.name, n, !1, !1).then(e=>t(JSON.stringify(e)), t=>a(JSON.stringify(e.CIFramework.Utility.buildEntity(t)))))
        }
        function p(s, o, r, d) {
            if (!(a(s) || "" === s) && !(a(o) || "" === o)) {
                const a = {
                    messageType: t.MessageType.retrieveRecord,
                    messageData: new Map().set(ie.entityName, s).set(ie.entityId, o).set(ie.queryParameters, r).set(ie.correlationId, d)
                };
                return new Promise((t,s)=>i(p.name, a, !1).then(a=>t(JSON.stringify(e.CIFramework.Utility.buildEntity(a))), t=>s(JSON.stringify(e.CIFramework.Utility.buildEntity(t)))))
            }
            if (a(s) || "" === s) {
                return n("The EntityName parameter is blank.Provide a value to the parameter.", t.MessageType.retrieveRecord, d)
            }
            if (a(o) || "" === o) {
                return n("The EntityId parameter is blank. Provide a value to the parameter.", t.MessageType.retrieveRecord, d)
            }
        }
        function g(s, o, r, d) {
            if (!(a(s) || "" === s) && !(a(o) || "" === o) && !a(r)) {
                const a = {
                    messageType: t.MessageType.updateRecord,
                    messageData: new Map().set(ie.entityName, s).set(ie.entityId, o).set(ie.value, e.CIFramework.Utility.buildMap(JSON.parse(r))).set(ie.correlationId, d)
                };
                return new Promise((t,s)=>i(g.name, a, !1).then(a=>t(JSON.stringify(e.CIFramework.Utility.buildEntity(a))), t=>s(JSON.stringify(e.CIFramework.Utility.buildEntity(t)))))
            }
            if (a(s) || "" === s) {
                return n("The EntityName parameter is blank. Provide a value to the parameter.", t.MessageType.updateRecord, d)
            }
            if (a(o) || "" === o) {
                return n("The EntityId parameter is blank. Provide a value to the parameter.", t.MessageType.updateRecord, d)
            }
            if (a(r)) {
                return n("The data parameter is blank. Provide a value to the parameter to update the record.", t.MessageType.updateRecord, d)
            }
        }
        function y(s, o, r) {
            if (!(a(s) || "" === s) && !a(o)) {
                const a = {
                    messageType: t.MessageType.createRecord,
                    messageData: new Map().set(ie.entityName, s).set(ie.value, e.CIFramework.Utility.buildMap(JSON.parse(o))).set(ie.correlationId, r)
                };
                return new Promise((t,s)=>i(y.name, a, !1).then(a=>t(JSON.stringify(e.CIFramework.Utility.buildEntity(a))), t=>s(JSON.stringify(e.CIFramework.Utility.buildEntity(t)))))
            }
            if (a(s) || "" === s) {
                return n("The EntityName parameter is blank. Provide a value to the parameter.", t.MessageType.createRecord, r)
            }
            if (a(o)) {
                return n("Provide a value to the data parameter to create record.", t.MessageType.createRecord, r)
            }
        }
        function u(s, o, r) {
            if (!(a(s) || "" === s) && !(a(o) || "" === o)) {
                const a = {
                    messageType: t.MessageType.deleteRecord,
                    messageData: new Map().set(ie.entityName, s).set(ie.entityId, o).set(ie.correlationId, r)
                };
                return new Promise((t,s)=>i(u.name, a, !1).then(a=>t(JSON.stringify(e.CIFramework.Utility.buildEntity(a))), t=>s(JSON.stringify(e.CIFramework.Utility.buildEntity(t)))))
            }
            if (a(s) || "" === s) {
                return n("The EntityName parameter is blank. Provide a value to the parameter.", t.MessageType.deleteRecord, r)
            }
            if (a(o) || "" === o) {
                return n("The EntityId parameter is blank. Provide a value to the parameter.", t.MessageType.deleteRecord, r)
            }
        }
        function T(s, o, r, d) {
            if (!(a(s) || "" === s) && !(a(o) || "" === o) && !a(r)) {
                const a = {
                    messageType: r ? t.MessageType.search : t.MessageType.searchAndOpenRecords,
                    messageData: new Map().set(ie.entityName, s).set(ie.queryParameters, o).set(ie.searchOnly, r).set(ie.correlationId, d)
                };
                return new Promise((t,s)=>i(T.name, a, !1).then(a=>t(JSON.stringify(e.CIFramework.Utility.buildEntity(a))), t=>s(JSON.stringify(e.CIFramework.Utility.buildEntity(t)))))
            }
            if (a(s) || "" === s) {
                return n("The EntityName parameter is blank. Provide a value to the parameter.", t.MessageType.searchAndOpenRecords, d)
            }
            if (a(o) || "" === o) {
                return n("The queryParmeters parameter is blank. Provide a value to the parameter.", t.MessageType.searchAndOpenRecords, d)
            }
            if (a(r)) {
                return n("The searchOnly parameter is blank. Provide a value to the parameter.", t.MessageType.searchAndOpenRecords, d)
            }
        }
        function v(e) {
            const a = {
                messageType: t.MessageType.getMode,
                messageData: new Map().set(ie.correlationId, e)
            };
            return i(v.name, a, !1)
        }
        function h(a) {
            const s = {
                messageType: t.MessageType.getEnvironment,
                messageData: new Map().set(ie.correlationId, a)
            };
            return new Promise((t,a)=>i(h.name, s, !1).then(a=>t(JSON.stringify(e.CIFramework.Utility.buildEntity(a))), t=>a(JSON.stringify(e.CIFramework.Utility.buildEntity(t)))))
        }
        function I(e) {
            const a = Date.now()
              , s = {
                messageType: t.MessageType.getWidth,
                messageData: new Map().set(ie.correlationId, e)
            };
            return i(I.name, s, !1)
        }
        function f(e, s) {
            Date.now();
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.openKBSearchControl,
                    messageData: new Map().set(ie.SearchString, e).set(ie.correlationId, s)
                };
                return i(f.name, a, !1)
            } else {
                return n("The openKBSearchControl parameter value is invalid. Provide a positive number to the parameter.", t.MessageType.openKBSearchControl, s)
            }
        }
        function C(e) {
            Date.now();
            if (!a(e) && 0 <= e) {
                const a = {
                    messageType: t.MessageType.setWidth,
                    messageData: new Map().set(ie.value, e)
                };
                return i(C.name, a, !1)
            } else {
                return n("The setWidth parameter value is invalid. Provide a positive number to the parameter.", t.MessageType.setWidth, "")
            }
        }
        function S(e, s) {
            Date.now();
            if (!a(e) && (0 === e || 1 === e || 2 === e)) {
                const a = {
                    messageType: t.MessageType.setMode,
                    messageData: new Map().set(ie.value, e).set(ie.correlationId, s)
                };
                return i(S.name, a, !1)
            } else {
                return n("The setMode paramter value must be 0, 1 or 2.", t.MessageType.setMode, s)
            }
        }
        function E(e) {
            const a = Date.now()
              , s = {
                messageType: t.MessageType.getClickToAct,
                messageData: new Map().set(ie.correlationId, e)
            };
            return i(E.name, s, !1)
        }
        function N(e, s, o) {
            Date.now();
            if (!(a(e) || "" === e) && !a(s)) {
                ae.addHandler(e, s);
                const a = {
                    messageType: t.MessageType.addGenericHandler,
                    messageData: new Map().set(ie.eventType, e).set(ie.correlationId, o)
                };
                i("addGenericHandler", a, !1)
            } else {
                if (a(e) || "" === e) {
                    return n("The parameter EventName is blank. Provide a value to the parameter.", t.MessageType.addGenericHandler, o)
                }
                if (a(s)) {
                    return n("Passing data parameters to addHandler is mandatory.", t.MessageType.addGenericHandler, o)
                }
            }
        }
        function b(e, s, o) {
            Date.now();
            if (!(a(e) || "" === e) && !a(s)) {
                ae.removeHandler(e, s);
                const a = {
                    messageType: t.MessageType.removeGenericHandler,
                    messageData: new Map().set(ie.eventType, e).set(ie.correlationId, o)
                };
                i("removeGenericHandler", a, !1)
            } else {
                if (a(e) || "" === e) {
                    return n("The EventName parameter is blank. Provide a value to the parameter.", t.MessageType.removeGenericHandler, o)
                }
                if (a(s)) {
                    return n("Passing data parameters to removeHandler is mandatory.", t.MessageType.removeGenericHandler, o)
                }
            }
        }
        function M(e, s, o) {
            if (!(a(e) || "" === e)) {
                const a = {
                    messageType: t.MessageType.getEntityMetadata,
                    messageData: new Map().set(ie.entityName, e).set(ie.Attributes, s).set(ie.correlationId, o)
                };
                return i(M.name, a, !1)
            }
            if (a(e) || "" === e) {
                return n("The EntityName parameter is blank. Provide a value to the parameter", t.MessageType.getEntityMetadata, o)
            }
        }
        function P(e, s, o) {
            if (!(a(e) || "" === e) && !a(s)) {
                const a = {
                    messageType: t.MessageType.renderSearchPage,
                    messageData: new Map().set(ie.entityName, e).set(ie.SearchString, s).set(ie.correlationId, o)
                };
                return i(P.name, a, !1)
            }
            if (a(e) || "" === e) {
                return n("The EntityName Parameter is blank. Provide a value to the parameter", t.MessageType.renderSearchPage, o)
            }
            if (a(s)) {
                return n("The SearchString Parameter cannot be NULL", t.MessageType.renderSearchPage, o)
            }
        }
        function A(e, s) {
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.setAgentPresence,
                    messageData: new Map().set(ie.presenceInfo, e).set(ie.correlationId, s)
                };
                return i(A.name, a, !1)
            } else {
                return n("The presenceInfo parameter is null. Provide a value to the parameter", t.MessageType.setAgentPresence, s)
            }
        }
        function F(e) {
            const a = {
                messageType: t.MessageType.getAllSessions,
                messageData: new Map().set(ie.correlationId, e)
            };
            return i(F.name, a, !1)
        }
        function D(e) {
            const a = {
                messageType: t.MessageType.getFocusedSession,
                messageData: new Map().set(ie.correlationId, e)
            };
            return i(D.name, a, !1)
        }
        function w(e, s) {
            if (!(a(e) || "" === e)) {
                const a = {
                    messageType: t.MessageType.getSession,
                    messageData: new Map().set(ie.sessionId, e).set(ie.correlationId, s)
                };
                return i(w.name, a, !1)
            } else {
                return n("The sessionId parameter is null. Provide a value to the parameter", t.MessageType.getSession, s)
            }
        }
        function k(e) {
            const a = {
                messageType: t.MessageType.canCreateSession,
                messageData: new Map().set(ie.correlationId, e)
            };
            return i(k.name, a, !1)
        }
        function R(e, s, o) {
            if (!a(e)) {
                let n = e.customerName;
                a(n) && !a(e.templateParameters) && (n = e.templateParameters.customerName);
                const r = {
                    messageType: t.MessageType.createSession,
                    messageData: new Map().set(ie.input, e).set(ie.context, e.context).set(ie.customerName, n).set(ie.correlationId, s).set(ie.providerSessionId, o)
                };
                return i(R.name, r, !1, !0)
            } else {
                return n("Some of required parameters are null", t.MessageType.createSession, s)
            }
        }
        function O(e, s, o) {
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.requestFocusSession,
                    messageData: new Map().set(ie.sessionId, e).set(ie.messagesCount, s).set(ie.correlationId, o)
                };
                return i(O.name, a, !1)
            } else {
                return n("SessionID is null or undefined", t.MessageType.requestFocusSession, o)
            }
        }
        function U(e, s, o, r) {
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.notifyKpiBreach,
                    messageData: new Map().set(ie.sessionId, e).set(ie.resetKpiBreach, s).set(ie.kpiBreachDetails, o).set(ie.correlationId, r)
                };
                return i(U.name, a, !1)
            } else {
                return n("SessionID is null or undefined", t.MessageType.notifyKpiBreach, r)
            }
        }
        function _(e, s, o, r) {
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.notifyNewActivity,
                    messageData: new Map().set(ie.sessionId, e).set(ie.messagesCount, s).set(ie.shouldReset, o).set(ie.correlationId, r)
                };
                return i(_.name, a, !1)
            } else {
                return n("SessionID is null or undefined", t.MessageType.notifyNewActivity, r)
            }
        }
        function L(e) {
            const a = {
                messageType: t.MessageType.getFocusedTab,
                messageData: new Map().set(ie.correlationId, e)
            };
            return i(L.name, a, !1)
        }
        function x(e, a, s) {
            const n = {
                messageType: t.MessageType.getTabsByTagOrName,
                messageData: new Map().set(ie.templateTag, a).set(ie.nameParameter, e).set(ie.correlationId, s)
            };
            return i(x.name, n, !1)
        }
        function W(e, s) {
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.refreshTab,
                    messageData: new Map().set(ie.tabId, e).set(ie.correlationId, s)
                };
                return i(W.name, a, !1)
            } else {
                return n("The tabId Parameter is blank. Provide a value to the parameter", t.MessageType.refreshTab, s)
            }
        }
        function H(e, s) {
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.setSessionTitle,
                    messageData: new Map().set(ie.input, e).set(ie.correlationId, s)
                };
                return i(H.name, a, !1)
            } else {
                return n("The input Parameter is blank. Provide a value to the parameter", t.MessageType.setSessionTitle, s)
            }
        }
        function B(e, s, o) {
            if (!a(s) && !a(e)) {
                const a = {
                    messageType: t.MessageType.setTabTitle,
                    messageData: new Map().set(ie.input, s).set(ie.tabId, e).set(ie.correlationId, o)
                };
                return i(B.name, a, !1)
            }
            if (a(e)) {
                return n("The tabId Parameter is blank. Provide a value to the parameter", t.MessageType.setTabTitle, o)
            }
            if (a(s)) {
                return n("The input Parameter cannot be NULL", t.MessageType.setTabTitle, o)
            }
        }
        function G(e, s) {
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.createTab,
                    messageData: new Map().set(ie.input, e).set(ie.correlationId, s)
                };
                return i(G.name, a, !1)
            } else {
                return n("Some of the required parameters are Null", t.MessageType.createTab, s)
            }
        }
        function j(e, s) {
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.focusTab,
                    messageData: new Map().set(ie.tabId, e).set(ie.correlationId, s)
                };
                return i(j.name, a, !1)
            } else {
                return n("tabId is null or undefined", t.MessageType.focusTab, s)
            }
        }
        function K(e, s) {
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.initializeAgentPresenceList,
                    messageData: new Map().set(ie.presenceList, e).set(ie.correlationId, s)
                };
                return i(K.name, a, !1)
            } else {
                return n("The presenceList parameter is null. Provide a value to the parameter", t.MessageType.initializeAgentPresenceList, s)
            }
        }
        function q(s, o, r) {
            if (!(a(s) || "" === s) && !a(o)) {
                const a = {
                    messageType: t.MessageType.updateConversation,
                    messageData: new Map().set(ie.entityName, ie.liveWorkItemEntity).set(ie.entityId, s).set(ie.value, e.CIFramework.Utility.buildMap(JSON.parse(o))).set(ie.correlationId, r)
                };
                return new Promise((t,s)=>i(q.name, a, !1).then(a=>t(JSON.stringify(e.CIFramework.Utility.buildEntity(a))), t=>s(JSON.stringify(e.CIFramework.Utility.buildEntity(t)))))
            }
            if (a(s) || "" === s) {
                return n("The EntityId parameter is blank. Provide a value to the parameter.", t.MessageType.updateConversation, r)
            }
            if (a(o)) {
                return n("The data parameter is blank. Provide a value to the parameter to update the record.", t.MessageType.updateConversation, r)
            }
        }
        function V(e, s, o) {
            if (!a(e) || !a(s)) {
                const a = {
                    messageType: t.MessageType.logAnalyticsEvent,
                    messageData: new Map().set(t.AnalyticsConstants.analyticsdata, e).set(ie.correlationId, o).set(t.AnalyticsConstants.analyticsEventName, s).set(t.AnalyticsConstants.analyticsEventType, t.EventType.CustomEvent)
                };
                return i(V.name, a, !1)
            } else {
                return n("logAnalyticsEvent payload data or eventType is not valid. ", t.MessageType.logAnalyticsEvent, o)
            }
        }
        function z(e, s, o, r) {
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.updateContext,
                    messageData: new Map().set(ie.input, e).set(ie.sessionId, s).set(ie.isDelete, o).set(ie.correlationId, r)
                };
                return i(z.name, a, !1)
            } else {
                return n("The input parameter is null. Provide a value to the parameter", t.MessageType.updateContext, r)
            }
        }
        function X(s, o, r) {
            if (!a(s)) {
                const a = {
                    messageType: t.MessageType.openDialog,
                    messageData: new Map().set(ie.dialogStrings, s).set(ie.dialogOptions, o).set(ie.correlationId, r)
                };
                return new Promise((t,s)=>i(X.name, a, !1, !0).then(e=>t(JSON.stringify(e)), t=>s(JSON.stringify(e.CIFramework.Utility.buildEntity(t)))))
            } else {
                return n("The dialogStrings parameter is null. Provide a value to the parameter", t.MessageType.openDialog, r)
            }
        }
        function Q(e, s) {
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.showGlobalNotification,
                    messageData: new Map().set(ie.notificationOptions, e).set(ie.correlationId, s)
                };
                return i(Q.name, a, !1, !0)
            } else {
                return n("The notificationOptions parameter is null. Provide a value to the parameter", t.MessageType.showGlobalNotification, s)
            }
        }
        function $(e) {
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.clearGlobalNotification,
                    messageData: new Map().set(ie.notificationId, e)
                };
                return i($.name, a, !1, !0)
            } else {
                return n("The notificationId parameter is null. Provide a value to the parameter", t.MessageType.clearGlobalNotification)
            }
        }
        function Y(a, s) {
            const n = {
                messageType: t.MessageType.executeFetchQuery,
                messageData: new Map().set(ie.entityName, a).set(ie.options, s)
            };
            return new Promise((t,a)=>i(Y.name, n, !1).then(e=>t(JSON.stringify(e)), t=>a(JSON.stringify(e.CIFramework.Utility.buildEntity(t)))))
        }
        function Z(e, s) {
            if (!a(e)) {
                const a = {
                    messageType: t.MessageType.showProgressIndicator,
                    messageData: new Map().set(ie.progressIndicatorMessage, e).set(ie.correlationId, s)
                };
                return i(Z.name, a, !1)
            } else {
                return n("The message parameter is null. Provide a value to the parameter", t.MessageType.showProgressIndicator)
            }
        }
        function J(e) {
            const a = {
                messageType: t.MessageType.closeProgressIndicator,
                messageData: new Map().set(ie.correlationId, e)
            };
            return i(J.name, a, !1)
        }
        function ee(e) {
            const a = {
                messageType: t.MessageType.showTimeoutGlobalNotification,
                messageData: new Map().set(ie.correlationId, e)
            };
            return i(ee.name, a, !1)
        }
        let te, ae;
        const se = []
          , ie = e.CIFramework.Constants;
        t.isNullOrUndefined = a,
        t.isConsoleApp = o,
        t.setClickToAct = r,
        t.insertNotes = d,
        t.notifyEvent = c,
        t.openForm = l,
        t.refreshForm = m,
        t.retrieveRecord = p,
        t.updateRecord = g,
        t.createRecord = y,
        t.deleteRecord = u,
        t.searchAndOpenRecords = T,
        t.getMode = v,
        t.getEnvironment = h,
        t.getWidth = I,
        t.openKBSearchControl = f,
        t.setWidth = C,
        t.setMode = S,
        t.getClickToAct = E,
        t.addHandler = N,
        t.removeHandler = b,
        t.getEntityMetadata = M,
        t.renderSearchPage = P,
        t.setAgentPresence = A,
        t.getAllSessions = F,
        t.getFocusedSession = D,
        t.getSession = w,
        t.canCreateSession = k,
        t.createSession = R,
        t.requestFocusSession = O,
        t.notifyKpiBreach = U,
        t.notifyNewActivity = _,
        t.getFocusedTab = L,
        t.getTabs = x,
        t.refreshTab = W,
        t.setSessionTitle = H,
        t.setTabTitle = B,
        t.createTab = G,
        t.focusTab = j,
        t.initializeAgentPresenceList = K,
        t.updateConversation = q,
        t.logAnalyticsEvent = V,
        t.updateContext = z,
        t.openDialog = X,
        t.showGlobalNotification = Q,
        t.clearGlobalNotification = $,
        t.executeFetchQuery = Y,
        t.showProgressIndicator = Z,
        t.closeProgressIndicator = J,
        t.showTimeoutGlobalNotification = ee,
        s()
    }
    )(t = e.CIFramework || (e.CIFramework = {}))
}
)(Microsoft || (Microsoft = {}));
