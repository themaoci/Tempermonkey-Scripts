// ==UserScript==
// @name     Auto Twitch Claimer
// @version  1
// @author TheMaoci
// @grant    none
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @downloadURL https://raw.githubusercontent.com/themaoci/Tempermonkey-Scripts/master/AutoTwitchBonusClaim.user.js
// @include https://www.twitch.tv/*
// ==/UserScript==

if(window.location.href.indexOf("twitch.tv") != -1){
  (function(){
		function GM_wait()
    {
      if(typeof window.jQuery == 'undefined')
        window.setTimeout(GM_wait,100);
      else
      {
        window.jQuery(function() { 
          letsJQuery(window.jQuery); 
        });
      }
    }
    GM_wait();
    function letsJQuery($)
    {
      $( document ).ready(function() {
        setTimeout(function(){windowIsReadyNow($); }, 2000);
      });

    }
		function AutoClick($){
      if($("div.claimable-bonus__icon.tw-flex").length){
      	console.log("Found Bonus!!");
        $("div.claimable-bonus__icon.tw-flex").click();
      }
    	
    }
    function windowIsReadyNow($){
      console.log("Loaded at Twitch");
      window.setInterval(function(){ AutoClick($); },500);
    }
  })();
}
