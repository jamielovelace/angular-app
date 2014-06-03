'use strict';

/* Controllers */

var contactsControllers = angular.module('contactsControllers', []);

// Create our contactListController - Ctrl for short
// use the array of contactData to grab all of the contact data
contactsControllers.controller('ContactListCtrl', ['$scope', '$http',
	function ($scope, $http) {
	// Using scope keeps it contained in this controller

	// OLD WAY
	// $scope.contacts = contactData;

	// Grab the data from our json file and use scope to keep
	// it contained in this controller
	$http.get('data/contacts.json').success(function(data) {
	$scope.contacts = data;
});

	// Create our orderType default
  $scope.orderProp = 'name';

  //
  // Add new contact
  //

  // Create an empty newContact
	$scope.newContact = "";
  // Add new function
	$scope.addNew = function(isValid) {

		// check to make sure the form is completely valid
			if (isValid) {
				$scope.contacts.push({
					name: $scope.newContact.name,
					email: $scope.newContact.email,
					location: $scope.newContact.location,
					primary: $scope.newContact.primary
				});
				$scope.showAlert = true;
				$scope.alertText = "Success! New contact added!";
				$scope.alertClass = 'alert-success';
				$scope.formStatus = true;

				// Clear the newContact - wipe the fields
				$scope.newContact = "";

				// setPristine - Resets the form to its original state
				// allowing for a new contact to be added
				$scope.addContact.$setPristine();

			} else {
				$scope.showAlert = true;
			  	$scope.alertText = "Oops, you need at least a name.";
			  	$scope.alertClass = 'alert-fail';
			  	$scope.formStatus = false;
			}

	};


  //
  // Remove a contact 
  //

	// use index parameter to splice (remove array item) item
	// EDIT: Caused problems when data is filtered / sorted!
	//       because it takes the original index of the array :(
	// $scope.removeContact = function(index){
	//     $scope.contacts.splice(index, 1);
	// }

	// This finds the index of the current item by using indexOf
	// If I'm extremely honest, I don't fully understand this part, 
	// but I believe it's going back up on itself by using $scope.contact.indexOf 
	// within the splice itself
	$scope.removeContact = function(contact){
		$scope.contacts.splice($scope.contacts.indexOf(contact),1);
	};


}]);


// IGNORE
// my old way of pulling data in 
// var contactData = [
//   { name: 'Steve Wozniack', email: 'woz@apple.com', location: 'United States', primary: '718-886-5540' },
//   { name: 'Linus Torvalds', email: 'linus@linux.com', location: 'Finland', primary: '+358 9 568 042' },
//   { name: 'Bill Gates', email: 'bill@microsoft.com', location: 'United States', primary: '4841698514' },
//   { name: 'Richard Stallman', email: 'richard@fsf.org', location: 'United States', primary: '664 613 7896' },
//   { name: 'Ada Lovelace', email: 'ada@lovelace.co.uk', location: 'United Kingdom', primary: '02394 786236' },
//   { name: 'Alan Turing', email: 'alan@turingtest.org.uk', location: 'United Kingdom', primary: '+44796 37829368' },
//   { name: 'Charles Babbage', email: 'charles@diffengine.com', location: 'United Kingdom', primary: '+442392343478' },
//   { name: 'Dennis Ritchie', email: 'dennis@cprogramming.com', location: 'United States', primary: '012-589-1651' },
//   { name: 'Ken Thompson', email: 'ken@unix.net', location: 'United States', primary: '6434030340' },
//   { name: 'Steve Jobs', email: 'steve@apple.com', location: 'United States', primary: '805-110-9825' }
// ];

