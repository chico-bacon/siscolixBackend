
export class AdministracaoController {
    administracao(request, response) {
        let nomePagina = '';
        // nomePagina = '';
        
        response.render('administracao',{nomePagina});
    }
}

// app.get('/', (req, res) => {
//   // Simula o status do usuário (isso viria de uma sessão, autenticação, etc.)
//   const usuarioLogado = true; // Altere para `false` para testar o outro caso

//   let mensagem; // Declara a variável aqui para poder atualizá-la

//   // O "if" que atualiza o valor da variável
//   if (usuarioLogado) {
//     mensagem = "Olá, bem-vindo de volta!";
//   } else {
//     mensagem = "Por favor, faça login para continuar.";
//   }

//   // Renderiza a view 'index.ejs' e passa a variável `mensagem`
//   res.render('index', { mensagem: mensagem });
// });