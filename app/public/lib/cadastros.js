const novoRegistro = document.getElementById('novoRegistro');
const cancelar = document.getElementById('cancelar');

novoRegistro.addEventListener("click",(evt)=>{
    telaPopupCadastro.classList.remove("ocultaTelaPopupCadastro");
});

cancelar.addEventListener("click",(evt)=>{
    telaPopupCadastro.classList.add("ocultaTelaPopupCadastro");
});
