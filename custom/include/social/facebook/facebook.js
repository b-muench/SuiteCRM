/**
 * Created by ian on 14/01/14.
 */

$(function() {
    //create new subpanel for social feeds
    $("#subpanel_title_activities").before('<table cellspacing="0" cellpadding="0" border="0" width="100%" class="formHeader h3Row"><tbody><tr><td style="width:100px;"><h3 style="width:100px;"><span><a name="socialfeeds"></a><span style="display: none" id="show_socialfeeds"><a id="show_socialfeeds" class="utilsLink" href="#"><img border="0" align="absmiddle" alt="Show" src="themes/Suite7/images/advanced_search.gif?v=2KCfmg8Syk4QkxQ5cge6iw"></a></span><span style="display: inline" id="hide_socialfeeds"><a  class="utilsLink" href="#" id="socialfeeds_show"><img border="0" align="absmiddle" alt="Hide" src="themes/Suite7/images/basic_search.gif?v=2KCfmg8Syk4QkxQ5cge6iw"></a></span>&nbsp;Social Feeds</span></h3></td><td width="100%"><img width="1" height="1" alt="" src="themes/Suite7/images/blank.gif?v=2KCfmg8Syk4QkxQ5cge6iw"></td></tr></tbody></table><div id="SocialDiv" class="doNotPrint" style="width:100%"><table class="list view"><tr></tr><td width="50%"><span id="facebook_feed"></span></td><td><span id="twitter_feed"></span></td><tr></tr></table></div>');

    $("#show_socialfeeds").click(function(  ) {
        $("#SocialDiv").show();
        $("#show_socialfeeds").hide();
        $("#socialfeeds_show").show();
        $("#show").hide();

        return false;
    });
    $("#socialfeeds_show").click(function() {

        $("#SocialDiv").hide();
        $("#socialfeeds_show").hide();
        $("#show_socialfeeds").show();
        return false;
    });


        //Ajax Call
        username = $("#facebook_username_c").text();
        module = $("#formDetailView input[name=module]").val()
        record = $("input[name=record]").val()
        social = "facebook";
        url = document.URL;

        $.ajax({
            type: "POST",
            url: "index.php?entryPoint=social&social=facebook&username=" + username + "&module=" + module + "&record=" + record,
            data: { username: username, social: "facebook", url:url }
        })
            .done(function( msg ) {
                $("#facebook_feed").html( msg + $("#feed_history_c").html() );
            });

});



