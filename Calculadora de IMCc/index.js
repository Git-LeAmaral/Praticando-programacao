function calcular() {
    var altura = (document.getElementById('altura').value) / 100
    var peso = document.getElementById('peso').value
    
    var imc = peso / altura ** 2;

    var imprimir = ""
    
    if(imc < 18.5){
        imprimir = "Você está muito magro!"
    } else if(imc < 24.9) {
      imprimir = "Parabéns! Forma esta em perfeita forma!"
    } else if(imc < 29.9) {
      imprimir = "HUMMM! Esta um pouquinho acima do peso!"
    } else if(imc < 39.9) {
      imprimir = "Seu corpo precisa de atenção, vamos se exercitar?"
    } else {
      imprimir = "OBESIDADE MÓRBIDA! Você precisa perder peso urgente!"
    }

    document.getElementById("resultado").innerText = imprimir
}