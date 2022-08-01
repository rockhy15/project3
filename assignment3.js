var app = angular.module('myApp', [])
app.controller('myCtrl', function ($scope) {
  $scope.searchItems = [
    {
      section: 'boys',
      id: 1,
      name: 'Product : Iphone 13',
      desc: 'Description : Quality Camera',
      Image: './images/ip.jpg',
      price: "1,80,000",
    },
    {
      section: 'boys',
      id: 2,
      name: 'Product : one-plus',
      desc: 'Description : High Battery',
      Image: './images/plus.jpg',
      price: 'Price : 70,000',
    },
    {
      section: 'boys',
      id: 3,
      name: 'Product : Redmi ',
      desc: ' Description : Low Prize ',
      Image: './images/sum.jpg',
      price: ' Price : 18,000',
    },
    {
      section: 'boys',
      id: 4,
      name: 'Product : Realme ',
      desc: ' Description : Good Look ',
      Image: './images/reelme.jpg',
      price: ' Price :20,000',
    },
    {
      section: 'boys',
      id: 5,
      name: 'Product : Sumsung',
      desc: ' Description : Long Life',
      Image: './images/sumsung.jpg',
      price: ' Price : 23,000',
    },
    {
      section: 'boys',
      id: 6,
      name: 'Product : vivo',
      desc: ' Description : Good Performance',
      Image: './images/vivo.jpg',
      price: ' Price : 25,000',
    },


  ]
  $scope.foundList = []
  $scope.message = ''
  $scope.isVisible = false
  $scope.show = function (item) {
    $scope.isVisible = $scope.isVisible ? false : true
  }
  $scope.add = function (item) {

    if (item) {

      $scope.foundList.push({

        name: item.name,
        desc: item.desc,

        price: item.price,

        Image: item.Image,

      });

    }

  };




  $scope.remove = function (add) {
    if (add)

      $scope.foundList.splice($scope.foundList.indexOf(add), 1)

  }
});