window.pgday = window.pgday || {};

pgday.targetGender = function(gender) {
    // Find all elements with a cq-targeting attribute
    var targetedElements = document.querySelectorAll('[cq-targeting]');

    for (var i = 0; i < targetedElements.length; i++) {
        var targetedEl = targetedElements[i];
        var mboxId = targetedEl.dataset.mboxid;
        console.log('Fetching targeted content for: [' + targetedEl + '], mboxid: [' + mboxId + '], with gender: [' + gender + '].');

        var target = new cq.mobileapps.targeting.Target(mboxId, targetedEl, {});

        target.targetLoadRequest(
            {
                'profile.gender': gender
            }, 
            function(error, offer){
                if (error) {
                    return console.error('error targeting: ' + error);
                } 

                console.log('offer received! [' + offer + ']');
            }
        );
    }
};