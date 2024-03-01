import Script from "next/script";
import React from "react";

const MetaMessenger = () => {
    return (
        <>
            <div id="fb-root"></div>

            <div id="fb-customer-chat" className="fb-customerchat"></div>

            <Script>
                {`
                    var chatbox = document.getElementById('fb-customer-chat');
                    chatbox.setAttribute("page_id", "100761282981593");
                    chatbox.setAttribute("attribution", "biz_inbox");

                    window.fbAsyncInit = function() {
                        FB.init({
                        xfbml            : true,
                        version          : 'v16.0'
                        });
                    };
                
                    (function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                `}
            </Script>
        </>
    );
};

export default MetaMessenger;
