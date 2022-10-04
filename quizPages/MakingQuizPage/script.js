// ----------------------------------------starting html-----------------------------------------------------------------
function calculate(){
    var score=5;
    if(document.getElementById('HyperText').checked){
       
    }
    else{
        score=score-1;
    }

    if(document.getElementById('CSS').checked){
        
    }
    else{
        score=score-1;
    }

    if(document.getElementById('target').checked){
        
    }
    else{
        score=score-1;
    }
    if(document.getElementById('i').checked){
        
    }
    else{
        score=score-1;
    }
    if(document.getElementById('ul').checked){
        
    }
    else{
        score=score-1;
    }    
    alert('View HTML Result');
    sessionStorage.setItem("htmlScore",score);
    
}
// ----------------------------------------Ending html--------------------------------------------------------------------------


// ----------------------------------------starting css-------------------------------------------------------------------------

function css(){
    var cssScore=5;
    if(document.getElementById('Cascading').checked){
       
    }
    else{
        cssScore=cssScore-1;
    }

    if(document.getElementById('style').checked){
        
    }
    else{
        cssScore=cssScore-1;
    }

    if(document.getElementById('background').checked){
        
    }
    else{
        cssScore=cssScore-1;
    }
    if(document.getElementById('Multiline').checked){
        
    }
    else{
        cssScore=cssScore-1;
    }
    if(document.getElementById('padding').checked){
        
    }
    else{
        cssScore=cssScore-1;
    }
    
    alert('View CSS Result');
    sessionStorage.setItem("cssScore",cssScore);
    
   
}
// ----------------------------------------Ending Css-------------------------------------------------

// ----------------------------------------starting Python-------------------------------------------------------------------

function pythonfunction(){
    var pythonScore=5;
    if(document.getElementById('Guido').checked){
       
    }
    else{
        pythonScore=pythonScore-1;
    }

    if(document.getElementById('Yes').checked){
        
    }
    else{
        pythonScore=pythonScore-1;
    }

    if(document.getElementById('seven').checked){
        
    }
    else{
        pythonScore=pythonScore-1;
    }
    if(document.getElementById('comments').checked){
        
    }
    else{
        pythonScore=pythonScore-1;
    }
    if(document.getElementById('error').checked){
        
    }
    else{
        pythonScore=pythonScore-1;
    }
    
    alert('View Python Result');
    sessionStorage.setItem("pythonScore",pythonScore);
    
}
// ----------------------------------------Ending Python----------------------------------------------------------------------

// ----------------------------------------starting Java----------------------------------------------------------------------
function javaFunction(){
    var javaScore=5;

    if(document.getElementById('James').checked){
       
    }
    else{
        javaScore=javaScore-1;
    }

    if(document.getElementById('Key').checked){
        
    }
    else{
        javaScore=javaScore-1;
    }

    if(document.getElementById('Multi').checked){
        
    }
    else{
        javaScore=javaScore-1;
    }
    if(document.getElementById('if').checked){
        
    }
    else{
        javaScore=javaScore-1;
    }
    if(document.getElementById('void').checked){
        
    }
    else{
        javaScore=javaScore-1;
    }
    
    alert('View Java Result');
    sessionStorage.setItem("javaScore",javaScore);
    
}
// ----------------------------------------Ending Java-------------------------------------------------
