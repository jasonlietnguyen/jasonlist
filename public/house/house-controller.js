function HouseController() {
  var houseService = new HouseService()


  this.createHouse = function (e) {
    e.preventDefault()
    var house = {
      image: e.target.image.value,
      price: e.target.price.value,
      city: e.target.city.value,
      beds: e.target.beds.value
    }

    houseService.createHouse(house)
    app.controllers.houseController.getHouses()
  }

  function draw(data) {
    var template = ''
    var elem = document.getElementById('house-list')
    var form = `
        <h4>Houses</h4>
          <form onsubmit="app.controllers.houseController.createHouse(event)">
            <input type="text" name="image" placeholder="Image Url">
            <input type="text" name="price" placeholder="Price">
            <input type="text" name="city" placeholder="City">
            <input type="text" name="beds" placeholder="Beds">
            <button type="submit">Submit</button>
          </form><br>
        <div id="houses"></div>
      `
    for (var i = 0; i < data.length; i++) {
      var house = data[i];
      template += `
      <div class="col-lg-3">
        <img src="${house.image}" width="100%">
        <h4>${house.price}</h4>
        <h4>${house.city}</h4>
        <h4>${house.beds}</h4>
      </div>
      `
    }
    return elem.innerHTML = form + template
  }

  this.getHouses = function () {
    houseService.getHouse(function (data) {
      draw(data)
    })
  }

}