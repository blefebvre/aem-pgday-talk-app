window.pgday = window.pgday || {};

pgday.targetAge = function(age) {
    console.log('Targeting with age: ' + age);
	pgday.targetContentFromProfile(
        {
            'profile.age': age
        }
    );
};

pgday.targetGender = function(gender) {
    console.log('Targeting with gender: ' + gender);
	pgday.targetContentFromProfile(
        {
            'profile.gender': gender
        }
    );
};

pgday.targetContentFromProfile = function(profile) {
	// Find all elements with a cq-targeting attribute
    var targetedElements = document.querySelectorAll('[cq-targeting]');

    for (var i = 0; i < targetedElements.length; i++) {
        var targetedEl = targetedElements[i];
        var mboxId = targetedEl.dataset.mboxid;
        console.log('Fetching targeted content for: [' + targetedEl + '], mboxid: [' + mboxId + '], with profile: [' + profile + '].');

        var target = new cq.mobileapps.targeting.Target(mboxId, targetedEl);

        target.targetLoadRequest(
            profile,
            function(error, offer){
                if (error) {
                    return console.error('error targeting: ' + error);
                } 

                console.log('offer received! [' + offer + ']');
            }
        );
    }
};