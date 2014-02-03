$(document).ready(function () {
    $('.new-user-form').hide();
    var l = window.location;
    console.log(l.protocol + '//' + l.host + '/api/users');
    $.ajax({
      url: l.protocol + '//' + l.host + '/api/users',
      cache: false,
      success: function (users) {
          users = $.parseJSON(users);
          for (var i = 0; i < users.length; i++) {
              $('.user-list').append('<div class="user" data-id="' + users[i].id + '" > <h2>' + users[i].name + '</h2> <ul> <li>' + users[i].occupation + '</li> <li>' + users[i].email + '</li> <li>' + users[i].phone + '</li> <li>' + users[i].age + ' years old </ul> <button class="delete-user" data-id="' + users[i].id + '">Delete user</button></div>');
          }
          $('button.delete-user').click(function () {
            var userId = $(this).data('id');
            $.ajax({
              type: 'DELETE',
              url: l.protocol + '//' + l.host + '/api/users/' + userId
              }
            )
              .done(function () {
               $('div.user[data-id="' + userId + '"]').fadeOut("slow");
              });
          }
        );
     }
    });

});

$('.add-new-user').click( function () {
  $('.new-user-form').show();
});

$('.new-user-form').submit(function () {
  var l = window.location;
  console.log(window.location);
  $.ajax({
    type: 'POST',
    url: l.protocol + '//' + l.host + '/api/users',
    data: $(this).serialize()
    })
      .done(function () {
        window.reload();
      });
});


