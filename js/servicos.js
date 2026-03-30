function confirmarAgendamento(dateElement){
    var data = dateElement.value;
    var agora = new Date().toISOString();
    if (data < agora) {
        alert('Selectione uma data válida');
    } else {
        alert('Serviço agendado');
    }
}