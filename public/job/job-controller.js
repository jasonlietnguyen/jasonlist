function JobController() {
  var jobService = new JobService()


  this.createJob = function (e) {
    e.preventDefault()
    var job = {
      title: e.target.title.value,
      rating: e.target.rating.value,
      salary: e.target.salary.value,
    }

    jobService.createJob(job)
    app.controllers.jobController.getJobs()
  }

  function draw(data) {
    var template = ''
    var elem = document.getElementById('job-list')
    var form = `
      <h4>Jobs</h4>
        <form onsubmit="app.controllers.jobController.createJob(event)">
          <input type="text" name="title" placeholder="Title">
          <input type="text" name="rating" placeholder="Rating">
          <input type="text" name="salary" placeholder="Salary">
          <button type="submit">Submit</button>
        </form><br>
      <div id="jobs"></div>
      `
    for (var i = 0; i < data.length; i++) {
      var job = data[i];
      template += `
      <div class="col-lg-3">
      <h4>${job.title}</h4>
      <h4>${job.rating}</h4>
      <h4>${job.salary}</h4>
      </div>
      `
    }
    return elem.innerHTML = form + template 
  }

  this.getJobs = function () {
    jobService.getJob(function (data) {
      draw(data)
      document.getElementById('car-list').innerHTML = ''
      document.getElementById('house-list').innerHTML = ''
    })
  }

}