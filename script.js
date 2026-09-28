window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-FHM2JL8SER');document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a');if(!a)return;var h=a.getAttribute('href')||'',l=a.getAttribute('data-listing')||document.body.getAttribute('data-listing')||'',p={listing:l,page_type:document.body.getAttribute('data-page')||''};if(h.indexOf('tel:')===0)gtag('event','call_click',p);else if(h.indexOf('google.com/maps')>-1)gtag('event','directions_click',p);else if(h.indexOf('#request')>-1)gtag('event','request_click',p);else if(h.indexOf('mailto:')===0)gtag('event','email_click',p);},true);

(function(){
var CITIES=[["Baltimore","/maryland/baltimore/baltimore/"],["Catonsville","/maryland/baltimore/catonsville/"],["Cockeysville","/maryland/baltimore/cockeysville/"],["Dundalk","/maryland/baltimore/dundalk/"],["Essex","/maryland/baltimore/essex/"],["Halethorpe","/maryland/baltimore/halethorpe/"],["Nottingham","/maryland/baltimore/nottingham/"],["Owings Mills","/maryland/baltimore/owings-mills/"],["Parkville","/maryland/baltimore/parkville/"],["Pikesville","/maryland/baltimore/pikesville/"],["Timonium","/maryland/baltimore/timonium/"],["Towson","/maryland/baltimore/towson/"],["White Marsh","/maryland/baltimore/white-marsh/"],["Woodlawn","/maryland/baltimore/woodlawn/"],["Damascus","/maryland/montgomery-county/damascus/"],["Gaithersburg","/maryland/montgomery-county/gaithersburg/"],["Germantown","/maryland/montgomery-county/germantown/"],["Olney","/maryland/montgomery-county/olney/"],["Rockville","/maryland/montgomery-county/rockville/"],["Silver Spring","/maryland/montgomery-county/silver-spring/"],["Wheaton","/maryland/montgomery-county/wheaton/"]];
var TASKS=[[/temp|30.?day/,"/maryland/temporary-tags/"],[/lost|duplicate|replace.*title|damaged/,"/maryland/duplicate-title/"],[/return|turn in|cancel/,"/maryland/plate-return/"],[/renew|sticker|expired/,"/maryland/registration-renewal/"],[/moved|moving|new resident|new to|out of state|out-of-state/,"/maryland/new-to-maryland/"],[/transfer|bought|private sale|title/,"/maryland/title-transfer/"],[/weekend|saturday|sunday/,"/maryland/open-weekends/"],[/fee|cost|price/,"/maryland/tag-and-title-fees/"]];
var M="/maryland/montgomery-county/",B="/maryland/baltimore/";
var Z={"20877":"gaithersburg","20878":"gaithersburg","20879":"gaithersburg","20882":"gaithersburg","20886":"gaithersburg","20850":"rockville","20851":"rockville","20852":"rockville","20853":"rockville","20902":"wheaton","20901":"silver-spring","20903":"silver-spring","20904":"silver-spring","20905":"silver-spring","20906":"silver-spring","20910":"silver-spring","20832":"olney","20874":"germantown","20876":"germantown","20872":"damascus"};
var ZB={"21227":"halethorpe","21244":"woodlawn","21207":"woodlawn","21228":"catonsville","21221":"essex","21204":"towson","21286":"towson","21214":"parkville","21234":"parkville","21030":"cockeysville","21117":"owings-mills","21085":"white-marsh","21162":"white-marsh","21222":"dundalk","21208":"pikesville","21236":"nottingham","21093":"timonium"};
var BC=["21201","21202","21205","21206","21209","21210","21211","21212","21213","21215","21216","21217","21218","21223","21224","21225","21226","21229","21230","21231"];
function zipUrl(q){if(Z[q])return M+Z[q]+"/";if(ZB[q])return B+ZB[q]+"/";if(BC.indexOf(q)!==-1)return B+"baltimore/";return null;}
function track(q,result,dest){try{var t=q.replace(/\S+@\S+/g,'').replace(/\d{6,}|\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g,'').replace(/[^a-z0-9 \-']/gi,'').trim().slice(0,40);if(window.gtag)gtag('event','site_search',{search_term:t,search_result:result,destination:dest||''});}catch(e){}}
var form=document.getElementById('cityFinder'),input=document.getElementById('cityInput'),msg=document.getElementById('finderMsg');
function say(html){msg.innerHTML=html;msg.style.color='var(--ink)';}
function go(q,result,u){track(q,result,u);setTimeout(function(){window.location.href=u;},150);}
var both="<a href='"+M+"'>Montgomery County</a> or <a href='"+B+"'>Baltimore City &amp; County</a>",tell=" Know an agency there? <a href='/maryland/list-your-agency/'>Tell us</a>.";
form.addEventListener('submit',function(e){
  e.preventDefault();
  var raw=input.value.trim(),q=raw.toLowerCase();if(!q)return;
  if(/^\d{5}$/.test(q)){
    var u=zipUrl(q);if(u){go(q,'zip',u);return;}
    var p=q.slice(0,3);track(q,'zip_not_covered');
    if(p==='208'||p==='209'){say("No agencies listed in "+q+" yet. The closest area we cover: <a href='"+M+"'>Montgomery County</a>."+tell);return;}
    if(p==='210'||p==='211'||p==='212'){say("No agencies listed in "+q+" yet. The closest area we cover: <a href='"+B+"'>Baltimore City &amp; County</a>."+tell);return;}
    say("We don't cover "+q+" yet. Browse "+both+"."+tell);return;
  }
  var c=null,i;
  for(i=0;i<CITIES.length&&!c;i++)if(CITIES[i][0].toLowerCase()===q)c=CITIES[i];
  for(i=0;i<CITIES.length&&!c;i++)if(CITIES[i][0].toLowerCase().indexOf(q)===0)c=CITIES[i];
  for(i=0;i<CITIES.length&&!c;i++)if(CITIES[i][0].toLowerCase().indexOf(q)!==-1)c=CITIES[i];
  if(c){go(q,'city',c[1]);return;}
  for(i=0;i<TASKS.length;i++)if(TASKS[i][0].test(q)){go(q,'task',TASKS[i][1]);return;}
  track(q,'no_match');
  var safe=raw.replace(/[<>&"']/g,'');
  say("We don't have "+safe+" yet. Try a ZIP code, pick what you need done above, or browse "+both+"."+tell);
});
})();