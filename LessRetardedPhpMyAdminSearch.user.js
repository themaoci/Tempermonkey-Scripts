// ==UserScript==
// @name     Less Retarded PhpMyAdmin Search
// @version  1
// @author   TheMaoci
// @grant    none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @downloadURL https://raw.githubusercontent.com/themaoci/Tempermonkey-Scripts/master/LessRetardedPhpMyAdminSearch.user.js
// ==/UserScript==


if(window.location.href.indexOf("db_search.php") != -1){
  (function(){
    var $ = "undefined";
		function GM_wait()
    {
      if(typeof window.jQuery == 'undefined')
        window.setTimeout(GM_wait,100);
      else
      {
        window.jQuery(function() { 
          $ = window.jQuery;
          $( document ).ready(function() {
          	setTimeout(function(){MainFunction(); }, 2500);
      		});
        });
      }
    }
    GM_wait();
    
    function checkForSearch(){
    	if($(".noclick").length){
        $(".noclick").each(function(){ $(this).hide(); });
      	$(".noclick td a").each(function(){ $(this).parents('tr').show(); });
      }
    }
    
    function MainFunction(){
      console.log("Loaded at PhpMyAdmin - Search Page");
      window.setInterval(function(){ checkForSearch($); },500);
    }
    
  })();
}
