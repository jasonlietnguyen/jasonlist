function CarController(){
  var carService = new CarService()


  this.createCar = function(e){
    e.preventDefault()
    var car = {
      image: e.target.image.value,
      make: e.target.make.value,
      model: e.target.model.value,
      price: e.target.price.value,
    }

    carService.createCar(car)
    app.controllers.carController.getCars()
  }

  function draw(data) {
    var template = ''
    var elem = document.getElementById('car-list')
    var form = `
      <h4>Cars</h4>
        <form onsubmit="app.controllers.carController.createCar(event)">
          <input type="text" name="image" placeholder="Image Url">
          <input type="text" name="make" placeholder="make">
          <input type="text" name="model" placeholder="model">
          <input type="text" name="price" placeholder="Price">
          <button type="submit">Submit</button>
        </form><br>
      <div id="cars"></div>
      `
    for (var i = 0; i < data.length; i++) {
      var car = data[i];
      template += `
      <h4>${car.image}</h4>
      <h4>${car.make}</h4>
      <h4>${car.model}</h4>
      <h4>${car.price}</h4>
      `
    }
    return elem.innerHTML = form + template 
  }

  this.getCars = function () {
    carService.getCar(function (data) {
      draw(data)
    })
  }

}