document.addEventListener('DOMContentLoaded',function()){
    const aumentaFonteBotao=document.getElementByuld('aumentar-fonte');
    const diminuiFonteBotao=document.getElementByuld('diminui-fonte');
    let tamanhoAtualFont=1
    aumentaFonteBotao.addEventListener('click',function(){
        tamanhoAtualFont+=0.1;
        document.body.requestPointerLock.fontSize=${tamanhoAtualFont}rem``
    })
