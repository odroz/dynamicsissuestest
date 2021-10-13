
function reportTelemetry() {
	try
	{
		var scenario;
		if (window.parent.location.href !== window.location.href && window.parent.Xrm) {
			scenario = 'Embedded';
		}
		else if (window.opener && window.opener.Xrm) {
			scenario = 'NewWindow';
		}
		else {
			scenario = 'DirectNavigation';
		}

		var client = Xrm.Internal.isUci() ? 'UCI' : 'Web';
		var clientName = Xrm.Utility.getGlobalContext().client.getClient();
		var userId = Xrm.Utility.getGlobalContext().userSettings.userId;

		var payload = {
			'request': {
				'MetricsCollections': [{
					'RequestId': createUUID(),
					'Metrics': [
						{
							'n': 'clientapiusage',
							'v': null,
							't': Date.now().valueOf(),
							'p': {
								'apiName': 'ClientGlobalContext_' + client + '_' + scenario,
								'client': clientName,
								'isDeprecating': 'true',
								'userId': userId
							}
						},
					],
					'IsExistingActivity': true
				}]
			}
		}

		var reportUrl = Xrm.Utility.getGlobalContext().getClientUrl() + '/AppWebServices/MetricsReportingService.asmx/Report';
		var xhr = new XMLHttpRequest();
		xhr.open('POST', reportUrl, true);
		xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		xhr.send(JSON.stringify(payload));
	}
	catch(e)
	{
		// Let this silently fail so that the end user doesn't see it.
	}
}

function createUUID() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

window.addEventListener('load', reportTelemetry);

						var source=null;
						try
						{
							if(window.parent && window.parent.getGlobalContextObject) {
								source=window.parent;
							}
							else if (window.opener && window.opener.getGlobalContextObject)
							{
								source=window.opener;
							}
						}
						catch(e)
						{
						// try catch is included to avoid error in case of cross domain script access 
						}

						if (source && source.getGlobalContextObject)
						{
							window.GetGlobalContext=function(){ return  source.getGlobalContextObject()};
							var XrmStatus=source.getCurrentXrmStatus();
							if(XrmStatus && XrmStatus.xrmInstance)
							{
								window.Xrm = XrmStatus.xrmInstance;
							}
						}
						else
						{
						
document.write('<script type="text/javascript" src="'+'https://odroz.github.io/dynamicsissuestest/_static/_common/scripts/MicrosoftAjax.js?ver=-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript" src="'+'https://odroz.github.io/dynamicsissuestest/_static/_common/scripts/EncodeDecode.js?ver=-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript" src="'+'https://odroz.github.io/dynamicsissuestest/_static/_common/scripts/Microsoft.Crm.Client.Core.js?ver=-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript" src="'+'https://odroz.github.io/dynamicsissuestest/_static/_common/scripts/crminternalutility.js?ver=-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript" src="'+'https://odroz.github.io/dynamicsissuestest/_static/_common/scripts/jquery-2.1.1.min.js?ver=-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript">jQuery.noConflict()</script>')
document.write('<script id="sharedScript/_static/_common/scripts/CrmServiceProxy.js?ver=-1036121454" type="text/javascript">Microsoft.Crm.Client.Core.SharedScript.load(window, "/_static/_common/scripts/CrmServiceProxy.js?ver=-1036121454", function(host){Type.registerNamespace("Microsoft.Crm.Client");Type.registerNamespace("Xrm");window.Microsoft.Crm.Client.Core = host.Microsoft.Crm.Client.Core;window.Xrm.Soap = host.Xrm.Soap;window.Xrm.Gen = host.Xrm.Gen;});</script>');
document.write('<script id="sharedScript/_static/_common/scripts/CrmServiceProxyFramework.js?ver=-1036121454" type="text/javascript">Microsoft.Crm.Client.Core.SharedScript.load(window, "/_static/_common/scripts/CrmServiceProxyFramework.js?ver=-1036121454", function(host){Type.registerNamespace("Microsoft.Crm.Client");Type.registerNamespace("Xrm");window.Microsoft.Crm.Client.Core = host.Microsoft.Crm.Client.Core;window.Xrm.Soap = host.Xrm.Soap;window.Xrm.Gen = host.Xrm.Gen;window.Xrm.Sdk = host.Xrm.Sdk;window.Xrm.Objects = host.Xrm.Objects;window._Math = host._Math;window._Script = host._Script;});</script>');
document.write('<script type="text/javascript" src="'+'https://odroz.github.io/dynamicsissuestest/_common/global.ashx?ver=-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript" src="'+'https://odroz.github.io/dynamicsissuestest/_common/windowinformation/windowinformation.js.aspx?lcid=1033&ver=-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript" src="'+'https://odroz.github.io/dynamicsissuestest/_common/entityproperties/entitypropertiesutil.js.aspx?lcid=1033&tstamp=867197467&ver=-1036121454'+'"></'+'script>')
function GetGlobalContext(){return Xrm.Page.context};document.write('<link rel="stylesheet" href="'+'/_static/_common/styles/sessionmanagement.css/ver=1036121454'+'">')
window.REMIND_AUTH_EXPIRATION=true;
window.AUTH_EXPIRATION_REMINDER_TIME_IN_SECONDS=0;
window.AUTH_EXPIRATION_AFTER_REMINDER_IN_SECONDS=0;
window.AUTH_EXPIRATION_LAST_UPDATE='20211013181428';
window.DIALOG_REAUTH_DESCRIPTION='Your Microsoft Dynamics 365 session is about to expire. To continue working, please sign in again.';
window.DIALOG_REAUTH_EXPIRED_DESCRIPTION='Your session has expired. Any unsaved changes have been lost.';
window.DIALOG_REAUTH_SIGNIN_BUTTON='Sign in';
window.DIALOG_REAUTH_CANCEL_BUTTON='Cancel';
window.DIALOG_REAUTH_CLOSE_BUTTON='Close';
document.write('<script type="text/javascript" src="'+'https://odroz.github.io/dynamicsissuestest/dynamicsissuestest/_static/_common/scripts/MaxSessionMonitor.js?ver=1036121454'+'"></'+'script>')
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://odroz.github.io/dynamicsissuestest/WebResources/ClientGlobalContext.js.aspx", false);
if(xhr.addEventListener) {
   xhr.addEventListener('load',function(){if(xhr.status == 200){eval(xhr.responseText);}});
 } else { 
xhr.onreadystatechange  = function() { if (xhr.readyState==4 && xhr.status==200) {eval(xhr.responseText);} }
 }
xhr.setRequestHeader("Content-Type", "application/json");xhr.send();
}
