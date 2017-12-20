var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
var campo = $(".campo-digitacao");
var tempoRestante = $("#tempo-digitacao").text();

tamanhoFrase.text(numPalavras);

campo.on("input", function() {

  var conteudo = campo.val();
  var qtdPalavras = conteudo.split(/\S+/).length -1;
  var qtdCaracteres = conteudo.length;

  $("#contador-palavras").text(qtdPalavras);
  $("#contador-caracteres").text(qtdCaracteres);
});

campo.one("focus", function() {

  var cronometroID = setInterval(function() {
    tempoRestante--;
    $("#tempo-digitacao").text(tempoRestante);
    if (tempoRestante < 1) {
      campo.attr("disabled", true);
      clearInterval(cronometroID);
    }
  }, 1000);
});
