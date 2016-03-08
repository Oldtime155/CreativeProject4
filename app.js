var mySign = angular.module('mySign', []);
mySign.controller('SubjectDropDownController', function ($scope) {
 
    $scope.subjects = ['Aires', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    $scope.selectedItem = 'What is your sign:';
	var myurl = "/onionScope"
	function getHoriscope(index) {
			var url = "../onionScope"
			$.getJSON(url, function(data) {
				console.log(data[+index].prediction);
				document.getElementById("prediction").innerHTML = data[+index].prediction;
			})
	}
	
    $scope.dropboxitemselected = function (item) {
 
        $scope.selectedItem = 'what is your sign: ' + item;
        console.log($scope.selectedItem);
      
      if (item.toString() == 'Aires')
		getHoriscope(0);
	  else if (item.toString() == 'Taurus')
		getHoriscope(1);
	  else if (item.toString() == 'Gemini')          
		getHoriscope(2);
	  else if (item.toString() == 'Cancer')
		getHoriscope(3);
	  else if (item.toString() == 'Leo')
		getHoriscope(4);
	  else if (item.toString() == 'Virgo')             
		getHoriscope(5);
	  else if (item.toString() == 'Libra')
		getHoriscope(6);
	  else if (item.toString() == 'Scorpio')              
		getHoriscope(7);
	  else if (item.toString() == 'Sagittarius')
		getHoriscope(8);
	  else if (item.toString() == 'Capricorn')
		getHoriscope(9);
	  else if (item.toString() == 'Aquarius')              
		getHoriscope(10);
	  else if (item.toString() == 'Pisces')
		getHoriscope(11);
    }
	
	
});
