
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
						
document.write('<script type="text/javascript" src="'+'\x2f_static\x2f_common\x2fscripts\x2fMicrosoftAjax.js\x3fver\x3d-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript" src="'+'\x2f_static\x2f_common\x2fscripts\x2fEncodeDecode.js\x3fver\x3d-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript" src="'+'\x2f_static\x2f_common\x2fscripts\x2fMicrosoft.Crm.Client.Core.js\x3fver\x3d-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript" src="'+'\x2f_static\x2f_common\x2fscripts\x2fcrminternalutility.js\x3fver\x3d-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript" src="'+'\x2f_static\x2f_common\x2fscripts\x2fjquery-2.1.1.min.js\x3fver\x3d-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript">jQuery.noConflict()</script>')
document.write('\x3cscript id\x3d\x27sharedScript\x2f_static\x2f_common\x2fscripts\x2fCrmServiceProxy.js\x3fver\x3d-1036121454\x27 type\x3d\x27text\x2fjavascript\x27\x3eMicrosoft.Crm.Client.Core.SharedScript.load\x28window, \x27\x2f_static\x2f_common\x2fscripts\x2fCrmServiceProxy.js\x3fver\x3d-1036121454\x27, function\x28host\x29\x7b\x0d\x0a\x09Type.registerNamespace\x28\x27Microsoft.Crm.Client\x27\x29\x3b\x0d\x0a\x09Type.registerNamespace\x28\x27Xrm\x27\x29\x3b\x0d\x0a\x0d\x0a\x09window.Microsoft.Crm.Client.Core \x3d host.Microsoft.Crm.Client.Core\x3b\x0d\x0a\x09window.Xrm.Soap \x3d host.Xrm.Soap\x3b\x0d\x0a\x09window.Xrm.Gen \x3d host.Xrm.Gen\x3b\x0d\x0a\x7d\x29\x3b\x3c\x2fscript\x3e\x0d\x0a');
document.write('\x3cscript id\x3d\x27sharedScript\x2f_static\x2f_common\x2fscripts\x2fCrmServiceProxyFramework.js\x3fver\x3d-1036121454\x27 type\x3d\x27text\x2fjavascript\x27\x3eMicrosoft.Crm.Client.Core.SharedScript.load\x28window, \x27\x2f_static\x2f_common\x2fscripts\x2fCrmServiceProxyFramework.js\x3fver\x3d-1036121454\x27, function\x28host\x29\x7b\x0d\x0a\x09Type.registerNamespace\x28\x27Microsoft.Crm.Client\x27\x29\x3b\x0d\x0a\x09Type.registerNamespace\x28\x27Xrm\x27\x29\x3b\x0d\x0a\x0d\x0a\x09window.Microsoft.Crm.Client.Core \x3d host.Microsoft.Crm.Client.Core\x3b\x0d\x0a\x09window.Xrm.Soap \x3d host.Xrm.Soap\x3b\x0d\x0a\x09window.Xrm.Gen \x3d host.Xrm.Gen\x3b\x0d\x0a\x09window.Xrm.Sdk \x3d host.Xrm.Sdk\x3b\x0d\x0a\x09window.Xrm.Objects \x3d host.Xrm.Objects\x3b\x0d\x0a\x09window._Math \x3d host._Math\x3b\x0d\x0a\x09window._Script \x3d host._Script\x3b\x0d\x0a\x7d\x29\x3b\x3c\x2fscript\x3e\x0d\x0a');
document.write('<script type="text/javascript" src="'+'\x2f_common\x2fglobal.ashx\x3fver\x3d-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript" src="'+'\x2f_common\x2fwindowinformation\x2fwindowinformation.js.aspx\x3flcid\x3d1033\x26amp\x3bver\x3d-1036121454'+'"></'+'script>')
document.write('<script type="text/javascript" src="'+'\x2f_common\x2fentityproperties\x2fentitypropertiesutil.js.aspx\x3flcid\x3d1033\x26amp\x3btstamp\x3d862117823\x26amp\x3bver\x3d-1036121454'+'"></'+'script>')
function GetGlobalContext(){return Xrm.Page.context};document.write('<link rel="stylesheet" href="'+'\x2f_static\x2f_common\x2fstyles\x2fsessionmanagement.css\x3fver\x3d-1036121454'+'">')
window.REMIND_AUTH_EXPIRATION=true;
window.AUTH_EXPIRATION_REMINDER_TIME_IN_SECONDS=0;
window.AUTH_EXPIRATION_AFTER_REMINDER_IN_SECONDS=0;
window.AUTH_EXPIRATION_LAST_UPDATE='20211013181428';
window.DIALOG_REAUTH_DESCRIPTION='Your Microsoft Dynamics 365 session is about to expire. To continue working, please sign in again.';
window.DIALOG_REAUTH_EXPIRED_DESCRIPTION='Your session has expired. Any unsaved changes have been lost.';
window.DIALOG_REAUTH_SIGNIN_BUTTON='Sign in';
window.DIALOG_REAUTH_CANCEL_BUTTON='Cancel';
window.DIALOG_REAUTH_CLOSE_BUTTON='Close';
document.write('<script type="text/javascript" src="'+'\x2f_static\x2f_common\x2fscripts\x2fMaxSessionMonitor.js\x3fver\x3d-1036121454'+'"></'+'script>')
var xhr = new XMLHttpRequest();
xhr.open("GET", "/WebResources/ClientGlobalContext.js.aspx", false);
if(xhr.addEventListener) {
   xhr.addEventListener('load',function(){if(xhr.status == 200){eval(xhr.responseText);}});
 } else { 
xhr.onreadystatechange  = function() { if (xhr.readyState==4 && xhr.status==200) {eval(xhr.responseText);} }
 }
xhr.setRequestHeader("Content-Type", "application/json");xhr.send();
}
