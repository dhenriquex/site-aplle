const visualizacao = document.getElementById('imagem-visualizacao');
const titulo = document.getElementById('titulo-produto');
const cor_selecionada= document.getElementById('nome-cor-selecionada');
const opc_img_0 = document.getElementById('0-imagem-miniatura');
const opc_img_1 = document.getElementById('1-imagem-miniatura');
const opc_img_2= document.getElementById('2-imagem-miniatura');

const verde = {
  nome:'verde cipreste',
  pasta: 'imagens-verde-cipreste',
}
const azul ={
  nome:'azul inverno',
  pasta: 'imagens-azul-inverno',
}
const meia={
  nome:'meia noite',
  pasta: 'imagens-meia-noite',
}
const estelar ={
  nome: 'estelar',
  pasta: 'imagens-estelar',
}

const rosa={
  nome: 'rosa',
  pasta: 'imagens-rosa-claro',
}
const lista =[verde,azul,meia,estelar,rosa]
const tamanho=['41 mm' , '45mm'];
let selecao =1
let tamanho_s= 1 
let cor =1;
function trocar(){
  const idopcao = document.querySelector('[name="opcao-imagem"]:checked')
  selecao = idopcao.id.charAt(0); // Corrigido aqui
  visualizacao.src="./imagens/opcoes-cores/"+lista[cor].pasta+"/imagem-"+selecao+".jpeg";
}
function tamanho_trocar(){
  const idopcao = document.querySelector('[name="opcao-tamanho"]:checked')
  tamanho_s = idopcao.id.charAt(0); // Corrigido aqui
  titulo.innerText='Pulseira loop esportiva '+lista[cor].nome+' para caixa de '+tamanho[tamanho_s];
  if (tamanho[tamanho_s]==='41 mm'){
    visualizacao.classList.add('caixa-pequena')
  }else{
    visualizacao.classList.remove('caixa-pequena')
  }
  
}
function trocarCor(){
  const idopcao = document.querySelector('[name="opcao-cor"]:checked')
  cor = idopcao.id.charAt(0); // Corrigido aqui
  titulo.innerText='Pulseira loop esportiva '+lista[cor].nome+' para caixa de '+tamanho[tamanho_s];
  visualizacao.src = `./imagens/opcoes-cores/${lista[cor].pasta}/imagem-${selecao}.jpeg`;
  cor_selecionada.innerText = `Cor - ${lista[cor].nome}`;
  opc_img_0.src = `./imagens/opcoes-cores/${lista[cor].pasta}/imagem-0.jpeg`;
  opc_img_1.src = `./imagens/opcoes-cores/${lista[cor].pasta}/imagem-1.jpeg`;
  opc_img_2.src = `./imagens/opcoes-cores/${lista[cor].pasta}/imagem-2.jpeg`;
}
