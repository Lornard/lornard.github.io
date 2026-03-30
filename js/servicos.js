function confirmarAgendamento(dateElement){
    var data = dateElement.value.toISOString();
    var agora = new Date().toISOString();
    if (data < agora) {
        alert('Selectione uma data válida');
    } else {
        alert('Serviço agendado');
    }
}