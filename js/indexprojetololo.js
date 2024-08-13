function formularioLolo () {
    const form = document.querySelector ('.form');
    const resultado = document.querySelector ('.resultado');

    const clientes = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const dataDeNascimento = form.querySelector('#dataDeNascimento');
        const feminino = form.querySelector('#feminino');
        const masculino = form.querySelector('#masculino');

        const celular = form.querySelector('#celular');
        const email = form.querySelector('#email');

        const endereco = form.querySelector('#endereco');
        const bairro = form.querySelector('#bairro');
        const cidade = form.querySelector('#cidade');
        const cep = form.querySelector('#cep');

        const estado = form.querySelector('#select');

        const mensagem = form.querySelector('#mensagem');

         // Verifica qual gênero foi selecionado
         let genero = ''; // Não tem nada pq não foi selecionado
         if (feminino.checked) {
             genero = 'Feminino';
         } else if (masculino.checked) {
             genero = 'Masculino';
         }

        clientes.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            dataDeNascimento: dataDeNascimento.value,
            genero: genero,
            
            celular: celular.value,
            email: email.value,

            endereco: endereco.value,
            bairro: bairro.value,
            cidade: cidade.value,
            cep: cep.value,

            estado: estado.value,

            mensagem: mensagem.value
        });
        console.log(clientes);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${dataDeNascimento.value} ${genero} 
        ${celular.value} ${ email.value} ${endereco.value} ${bairro.value} ${cidade.value} ${cep.value}
        ${estado.value} ${mensagem.value}
        </p>`
    }
    form.addEventListener('submit', recebeEventoForm);
}
formularioLolo();