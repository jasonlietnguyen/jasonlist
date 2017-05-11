function CarService() {
  var url = 'http://localhost:8000/cars'

  this.createCar = function (car) {
    $.post(url, car).then(function (data) {
      console.log(data)
    })
  }

  this.getCar = function (callWhenDone) {
    $.get(url, function (data) {
      callWhenDone(data)
    })
  }
}