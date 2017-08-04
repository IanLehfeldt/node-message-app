console.log('client.js has been loaded');

$(document).ready(function () {
    console.log('jQuery has been loaded');
    postMessage();

//Button function that takes whatever is in the inputs and sends them to the server as an object with the types: name and input.
//Button will also clear out the message input while leaving the name input so the user doesnt have to keep putting their name down
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
                postMessage();
            }
        })
    });
});


//Function that grabs the messages array from the server and updates the dom with the new list.
function postMessage() {
    $.ajax({
        method: 'GET',
        url: '/updateMessage',
        success: function (response) {
            console.log(response);
            drawMessages(response);
        }
    })
}

//We created an outside function to handle the DOM appendings
//Outside function will empty the message div for the updated list
function drawMessages (messageArray) {
    $('#messageDiv').empty();
    for (var i = 0; i < messageArray.length; i++) {
                $('#messageDiv').prepend('<p>' 
                + '<div class="userName">'
                + messageArray[i].name 
                + ':</div>'
                + "<div class='messageDiv'>"
                + messageArray[i].message  
                + '</div></p>');
            }
}