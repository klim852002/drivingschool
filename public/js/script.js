$(document).ready(function ($) {
  var $userForm = $('.new-user')

  $userForm.on('submit', function (e) {
    alert('Ajax request working')
    e.preventDefault()

    var formdata = $(this).serializeArray()

    var user_name = $('#user-name').val()
    var user_age = $('#user-age').val()
    var user_password = $('#user-password').val()

    console.log(user_name, user_age, user_password)
    // Ajax only get and post, no delete
    // alert('ajax call now')
    $.ajax({
      type: 'POST',
      url: '/api/users',
      data: formdata
    }).done(doSomething)
  })
  function doSomething (data) {
    alert('new user created')
    alert(data)
    $('#all-user-list').append('<li>' + data.local.name + data.local.age + data.local.password + '</li>')
  }
})
