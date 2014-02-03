$(document).ready(function () {
  $.get( location.protocol + '/api/users',
          function (users) {
            for (var i = 0; i < users.length; i++) {
              $('.user-list').append('<div class="user" data-id="' + users[i].id + '" > <h2>' + users[i].name + '</h2> <ul> <li>' + users[i].occupation + '</li> <li>' + users[i].email + '</li> <li>' + users[i].phone + '</li> <li>' + users[i].age + ' years old </ul> </div>');
            }
          },
          'json');
  $('.new-user-form').hide();
});

$('.add-new-user').click( function () {
  $('.new-user-form').show();
});

$('.new-user-form').submit(function () {
    $.post(location.protocol + '/api/users', $(this).serialize());
});

