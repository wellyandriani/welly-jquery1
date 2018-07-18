$(document).ready(function () {
    $("h1").css("color", " rgb(177, 51, 72)");
});

$(document).ready(function () {
    $("h2").css("color", "blue");
});


$(document).ready(function () {
    $(".h3").css("border", "3px solid red");
});

$(document).ready(function () {
    $('input').css("border", "3px solid rgb(250, 138, 156)");
    $('input').css("border-radius", "0px");
    $('input').css("padding", "10px");
    $('input').css("margin-top", "5px");
    $('input').css("color", "rgb(177, 51, 72)");
});


$(document).ready(function () {

    
    $('button#add').on('click', function () {
  
        var $newTask = $('#new-task').val();

        if ($newTask === '') {
        } else {
            
            var newListItem = '<li>';
            newListItem += '<label>' + $newTask + '</label>';
            newListItem += '<input class="delete"></button> <hr>';
            newListItem += '</li>';
             
            $('ul#incomplete-tasks').append(newListItem);
            $('#new-task').val('');
        }; 
    });   
 
    $('ul').on('click', '.delete', function () {
        $(this).parent().remove();
        countTask();
    });  
});  