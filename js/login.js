login = () => {
    let username = $("#lg_username").val();
    let password = $("#lg_password").val();

    $.get("php/login.php", (res) => {

        let resultado = res;
        resultado = JSON.parse(resultado);
        console.log(resultado);
        let login = [];
        resultado.forEach((e) => {
            if ((e.usuario == username && e.senha == password)) {
                login.push(e.usuario);
            };
        });

        if (login.length >= 1) {
            localStorage.setItem("login", login[0]);
            window.location = "https://todo-list-mack.000webhostapp.com/listas.html";
        }

    });
}