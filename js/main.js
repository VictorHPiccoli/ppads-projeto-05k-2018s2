let nomeLista;
let classificacaoLista;
let user = localStorage.getItem("login");
$(document).ready(function () {
    localStorage.removeItem("nomeLista");
    getList();
});

createList = () => {
    let name = $("#nameList").val();
    let user = localStorage.getItem("login");
    let priority = $("#createPriority").val();

    $.ajax({
            method: "POST",
            url: "php/createList.php",
            data: {
                name: name,
                user: user,
                priority: priority
            }
        })
        .done(() => {
            $("#create-list-modal").modal('toggle');
            location.reload();
        })
}

createClassification = () => {
    let name = $("#nameClassification").val();
    let user = localStorage.getItem("login");
    $.ajax({
            method: "POST",
            url: "php/createClassification.php",
            data: {
                name: name,
                user: user
            }
        })
        .done(() => {

            $("#create-classification-modal").modal('toggle');
            location.reload();

        })
}

getList = () => {
    $.get("php/getList.php", (res) => {
        let user = localStorage.getItem("login");
        let resultado = res;
        resultado = JSON.parse(resultado);
        console.log(resultado);
        let resultados = [];

        resultado.forEach((e) => {
            if (e.usuario == user) {
                resultados.push({
                    "nome": e.nome,
                    "classificacao": e.classificacao,
                    "prioridade": e.prioridade
                })
            }
        });

        if ($.fn.DataTable.isDataTable('#tableList')) {
            dataTableList = $('#tableList').DataTable();

            dataTableList.clear().draw();
        }

        dataTableList = $('#tableList').DataTable();
        dataTableList.destroy();
        dataTableList = $("#tableList").DataTable({
            responsive: true
        });
        resultados.forEach((e, index, array) => {
            dataTableList.row.add([
                e.nome,
                e.classificacao,
                e.prioridade,
                `<i class="fas fa-pencil-alt" id="edit-${index}" data-toggle="modal" data-target="#edit-list-modal" style="cursor:pointer" onclick="getClassification(this.id)"></i>`,
                `<i class="far fa-trash-alt" id="delete-${index}" data-toggle="modal" data-target="#delete-list-modal" style="cursor:pointer" onclick="showDeleteModal()" ></i>`,
                `<i class="fas fa-arrow-right" id="task-${index}" data-toggle="modal" style="cursor:pointer" onclick="seeTasks()"></i></i>`
            ]).draw(false);
        });
    });

    $('#tableList tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            dataTableList.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
}

getClassification = (rowId) => {
    let listData = $("#tableList").DataTable().rows('.selected').data();

    nomeLista = listData[0][0];
    classificacaoLista = listData[0][1];

    $.get("php/getClassification.php", (res) => {
        let resultado = res;
        resultado = JSON.parse(resultado);

        let resultados = [];

        resultado.forEach((e) => {
            if (e.usuario == user) {
                resultados.push({
                    "nome": e.nome
                })
            }
        });

        let select = $("#editList");

        resultados.forEach((e) => {
            let option = $(`<option value="${e.nome}">${e.nome}</option>`);
            select.append(option);
        });
        $('.selectpicker').selectpicker('refresh');
    })
}

editList = () => {
    let newName = $("#editNameList").val();
    if (newName == "") {
        newName = nomeLista;
    }

    let priority = $("#editPriority").val();

    $.ajax({
            method: "POST",
            url: "php/editList.php",
            data: {
                oldNome: nomeLista,
                oldClass: classificacaoLista,
                newNome: newName,
                newClass: $("#editList").val(),
                user: user,
                priority: priority
            }
        })
        .done(() => {
            $("#edit-list-modal").modal('toggle');
            location.reload()
        })
}

deleteList = () => {
    $.ajax({
            method: "POST",
            url: "php/deleteList.php",
            data: {
                name: nomeLista,
                classification: classificacaoLista,
                user: user
            }
        })
        .done(() => {
            $("#delete-list-modal").modal('toggle');
            getList();
        })
}

showDeleteModal = () => {
    let listData = $("#tableList").DataTable().rows('.selected').data();
    nomeLista = listData[0][0];
    classificacaoLista = listData[0][1];
}

seeTasks = () => {
    let listData = $("#tableList").DataTable().rows('.selected').data();
    nomeLista = listData[0][0];
    classificacaoLista = listData[0][1];
    localStorage.setItem("nomeLista", nomeLista);

    window.location = "https://todo-list-mack.000webhostapp.com/tarefas.html";

}

logoff = () => {
    window.location = "https://todo-list-mack.000webhostapp.com/";
}