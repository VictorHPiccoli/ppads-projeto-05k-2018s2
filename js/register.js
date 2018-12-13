register = () => {
    
        let username = $("#lg_username").val();
        let password = $("#lg_password").val();
            
        $.ajax({
            method: "POST",
            url: "php/createUser.php",
            data: {
                username: username,
                password: password
            }
        })
            .done(() => {
                setTimeout(() => {
                    window.location = "https://todo-list-mack.000webhostapp.com/";
                }, 500);
            })
    
}