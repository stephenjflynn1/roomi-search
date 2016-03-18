$(document).ready(function () {

    $.getJSON('/bunki-input', printUsers);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/bunki-input', {fullName: $('#fullName').val(), email: $('#email').val()}, printUsers);
        this.reset();
    });

});

function printUsers(users) {
    $('body>dl').empty();
    $.each(users, function () {
        $('<dt>').text(this.fullName).appendTo('body>dl');
        $('<dd>').text(this.email).appendTo('body>dl');
    });
    $('dt').off('dblclick').dblclick(function() {
        $.ajax({
            url: '/dictionary-api/' + $(this).text(),
            type: 'DELETE',
            success: printUsers
        });
    });
}
