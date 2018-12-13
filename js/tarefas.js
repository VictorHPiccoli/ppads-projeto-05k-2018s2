let nomeTarefa;
let user = localStorage.getItem("login");

$(document).ready(function () {
    let nameList = localStorage.getItem("nomeLista");
    $("#taskTitle").html("Tarefas - " + nameList);
    getTask();
});


createTask = () => {
    let name = $("#nameTask").val();
    let nameList = localStorage.getItem("nomeLista");
    let priority = $("#createPriority").val();

    $.ajax({
            method: "POST",
            url: "php/createTask.php",
            data: {
                name: name,
                nameList: nameList,
                user: user,
                priority: priority
            }
        })
        .done(() => {
            $("#create-task-modal").modal('toggle');
            location.reload();
        })
};


getTask = () => {
    let nameList = localStorage.getItem("nomeLista");

    $.get("php/getTask.php", (res) => {
        
        let resultado = res;
        resultado = JSON.parse(resultado);
        let tarefas = [];
        resultado.forEach((e) => {
            if (e.nomeLista == nameList && e.usuario == user) {
                tarefas.push({
                    "nomeTarefa": e.nomeTarefa,
                    "prioridade": e.prioridade
                })
            };
        });

        if ($.fn.DataTable.isDataTable('#tableTask')) {
            dataTableTask = $('#tableTask').DataTable();

            dataTableTask.clear().draw();
        }

        dataTableTask = $('#tableTask').DataTable();
        dataTableTask.destroy();
        dataTableTask = $("#tableTask").DataTable({
            responsive: true
        });
        tarefas.forEach((e, index, array) => {
            dataTableTask.row.add([
                e.nomeTarefa,
                e.prioridade,
                `<i class="fas fa-pencil-alt" id="edit-${index}" onclick="showTask()" style="cursor:pointer"></i>`,
                `<i class="far fa-trash-alt" id="delete-${index}" onclick="showDeleteTask()" style="cursor:pointer"></i>`,
            ]).draw(false);
        });
    });

    $('#tableTask tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            dataTableTask.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
}


editTask = () => {
    let newName = $("#editNameTask").val();
    if (newName == "" || newName == undefined) {
        newName = nomeTarefa;
    }
    let priority = $("#editPriority").val();
    $.ajax({
            method: "POST",
            url: "php/editTask.php",
            data: {
                oldNome: nomeTarefa,
                newNome: newName,
                user: user,
                priority: priority
            }
        })
        .done(() => {
            $("#edit-task-modal").modal('toggle');
            location.reload();
        })
}

showTask = () => {
    $("#edit-task-modal").modal("toggle");
    let listData = $("#tableTask").DataTable().rows('.selected').data();

    nomeTarefa = listData[0][0];
}

showDeleteTask = () => {
    $("#delete-task-modal").modal("toggle");
    let listData = $("#tableTask").DataTable().rows('.selected').data();

    nomeTarefa = listData[0][0];
}

deleteTask = () => {
    $.ajax({
            method: "POST",
            url: "php/deteleTask.php",
            data: {
                name: nomeTarefa,
                user: user
            }
        })
        .done(() => {
            $("#delete-task-modal").modal('toggle');
            getTask();
        })

}