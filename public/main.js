var l = window.location;
var apiURL = l.protocol + '//' + l.host + '/api/users';

$(document).ready(function () {
    $('.new-user-form').hide();
    $.ajax({
      url: apiURL,
      cache: false,
      success: function (users) {
          users = $.parseJSON(users);
          for (var i = 0; i < users.length; i++) {
              $('.user-list').append('<div class="user" data-id="' + users[i].id + '" ><div class="user-info" data-id="' + users[i].id + '"> <h2>' + users[i].name + '</h2> <ul> <li>' + users[i].occupation + '</li> <li>' + users[i].email + '</li> <li>' + users[i].phone + '</li> <li>' + users[i].age + ' years old </ul></div><form class="edit-user-form" data-id="' + users[i].id + '"><input name="name" value="'+ users[i].name + '"/> <input name="occupation" value="' + users[i].occupation + '"/><input name="email" value="' + users[i].email + '"/><input name="phone" value="' + users[i].phone + '"/><input name="age" value="' + users[i].age + '"/><input type="submit" value="Save" /></form><button class="edit-user" data-id="' + users[i].id +'">Edit</button> <button class="delete-user" data-id="' + users[i].id + '">Delete user</button></div>');
          }
          $('.edit-user-form').hide();
          $('button.edit-user').click(function () {
            $('.user-info[data-id="' + $(this).data('id') + '"]').hide();
            $('.edit-user-form[data-id="' + $(this).data('id') + '"]').show();
          });
          $('.edit-user-form').submit(function (event) {
              event.preventDefault();
              var userId = $(this).data('id');
              $.ajax({
                type: 'PUT',
                url: apiURL + '/' + userId,
                data: $(this).serialize()
              })
                .done(function () {
                  window.location.reload();
                });
          });
          $('button.delete-user').click(function () {
            var userId = $(this).data('id');
            $.ajax({
              type: 'DELETE',
              url: apiURL + '/' + userId
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

$('.new-user-form').submit(function (event) {
  event.preventDefault();
  $.ajax({
    type: 'POST',
    url: apiURL,
    data: $(this).serialize()
    })
      .done(function () {
        window.location.reload();
      });
});


