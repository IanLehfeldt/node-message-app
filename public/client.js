console.log('client.js has been loaded');

$(document).ready(function () {
    console.log('jQuery has been loaded');

    $('#sendMessageButton').on('click', function () {
        console.log('Message button was clicked!');
        var nameInput = $('#nameInput').val();
        var messageInput = $('#messageInput').val();

        $.ajax({
            method: 'POST',
            url: '/newMessage',
            data: {
                name: nameInput,
                message: messageInput
            },
            success: function (response) {
                $('#messageInput').val('');
                console.log(response);
            }
        })
        //postMessage();
    });

});

//$('#messageInput').val('');


// function postMessage() {
//     $.ajax({
//         method: 'GET',
//         url: '/updateMessage',
//         success: function (response) {
//             console.log(response);
//             $('#messageDiv').prepend(response);
//         }
//     })
// }