function JobService() {
  var url = 'http://localhost:8000/jobs'

  this.createJob = function (job) {
    $.post(url, job).then(function (data) {
      console.log(data)
    })
  }

  this.getJob = function (callWhenDone) {
    $.get(url, function (data) {
      callWhenDone(data)
    })
  }

}