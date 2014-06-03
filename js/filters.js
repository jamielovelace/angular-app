'use strict';

/* Filters */

// Create a filter for the telephone number
contactsApp.filter('tel', function() {
	return function (tel) {
       
        // strip all spaces and dashes out of our input
        var str = tel.toString().trim().replace(/[\s-]/g, '');

      
        var partOne, 
        	partTwo, 
        	partThree;

        switch (str.length) {

            case 10: // US (I think?)
                partOne = str.slice(0, 3);
                partTwo = str.slice(3,6)
                partThree = str.slice(6);
                break;

            case 11: // UK Number
                partOne = str.slice(0, 3);
                partTwo = str.slice(3, 7);
                partThree = str.slice(7);
                break;


            case 13: // UK Number with country code
                partOne = str.slice(0, 3);
                partTwo = str.slice(3, 7);
                partThree = str.slice(7);
                break;
        
            default: // If its something else - just leave it as its entered
                return tel;
        }

        // Return the strings in 3 parts, placing a space between each
        return (partOne + " " + partTwo + " " + partThree).trim();
    };
});