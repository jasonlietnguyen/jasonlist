function HouseService(){
  var url = 'http://localhost:8000/houses'

  this.createHouse = function(house){
    $.post(url, house).then(function(data){
      console.log(data)
    })
  }

  this.getHouse = function (callWhenDone) {
    $.get(url, function (data) {
      callWhenDone(data)
    })
  }

}