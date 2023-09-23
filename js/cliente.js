const URL = 'http://localhost:3400/clientes';
let tabelaCliente = document.querySelector('table>tbody');


function obterClientes() {
    fetch(URL, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            popularTabela(response);
        })
        .catch()
}

function editarCliente(id) {
    alert('Editar cliente: ' + id);
}

function excluirCliente(id) {
    alert('Excluir cliente: ' + id);
}

function criarLinha(cliente) {
    //criar uma linha
    let tr = document.createElement('tr');

    //criar as tds
    let tdId = document.createElement('td');
    let tdNome = document.createElement('td');
    let tdCPF = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdTelefone = document.createElement('td');
    let tdData = document.createElement('td');
    let tdAcao = document.createElement('td');

    //adicionar os valores dos clientes
    tdId.textContent = cliente.id;
    tdNome.textContent = cliente.nome;
    tdCPF.textContent = cliente.cpfOuCnpj;
    tdEmail.textContent = cliente.email;
    tdTelefone.textContent = cliente.telefone;
    tdData.textContent = cliente.dataCadastro;

    tdAcao.innerHTML = `<button onclick="editarCliente(${cliente.id})" class="btn btn-outline-primary btn-sm mr-2">Editar</button> 
                        <button onclick="excluirCliente(${cliente.id})" class="btn btn-outline-primary btn-sm mr-3">Deletar</button>`;

    //adicionar as tds dentro da linha
    tr.appendChild(tdId);
    tr.appendChild(tdNome);
    tr.appendChild(tdCPF);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelefone);
    tr.appendChild(tdData);
    tr.appendChild(tdAcao);
    //adicionar a linha na tabela
    tabelaCliente.appendChild(tr);

}

function popularTabela(clientes) {

    clientes.forEach(cliente => {
        criarLinha(cliente);

    });
}

obterClientes();