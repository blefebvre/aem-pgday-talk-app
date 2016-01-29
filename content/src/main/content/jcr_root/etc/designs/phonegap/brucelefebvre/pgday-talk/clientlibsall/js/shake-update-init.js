var initShakeUpdate = function() {
	var contentUpdater = CQ.mobile.contentUpdate({id: 'AEMAngularApp'});
    var isUpdating = false;

	var deviceShakeDetected = function() {
        if (isUpdating) {
            return;
        }

        isUpdating = true;
		shake.stopWatch();
		console.log('[shake] shake detected! Querying for an update');
		
		var contentPackageName = 'en';
		contentUpdater.isContentPackageUpdateAvailable(contentPackageName,
			function callback(error, isUpdateAvailable) {
				if (error) {
					// Alert the error details.
					watchForShake();
					return navigator.notification.alert(error, null, 'ContentSync Error');
				}

				if (isUpdateAvailable) {
					// Confirm if the user would like to update now 
					navigator.notification.confirm('Update is available, would you like to install it now?', 
						function onConfirm(buttonIndex) {
							if (buttonIndex == 1) {
								contentUpdater.updateContentPackageByName(contentPackageName,
									function callback(error, pathToContent) {
										if (error) {
											return navigator.notification.alert(error, null, 'Error');
										}
										// else 
										console.log('Update complete; reloading app.');
										window.location.reload( true );
									});
							}
							else {
								// user selected Later
								watchForShake();
							}
						}, 
						'ContentSync Update',		// title
						['Update', 'Later']	// button labels
					);
				}
				else {
                    navigator.notification.alert('App is up to date.', function() {
        				watchForShake();
                    }, 'ContentSync Update', 'Done');
				}
			}
		);
	};

	var watchForShake = function() {
        // safe to use the PhoneGap API
        shake.startWatch(deviceShakeDetected);
        isUpdating = false;
    };

	document.addEventListener("deviceready", watchForShake, false);
};

initShakeUpdate();