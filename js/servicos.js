function confirmarAgendamento(dateElement){
    var data = dateElement.value;
    if (data < new Date()) {
        alert('Selectione uma data válida');
    } else {
        alert('Serviço agendado');
    }
}