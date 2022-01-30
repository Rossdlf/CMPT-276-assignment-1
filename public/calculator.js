// const { query } = require("express");

var i=4;

var score = document.getElementsByName("score");
var totalscore = document.getElementsByName("totalScore");
var weight = document.getElementsByName("weight");
var output = document.getElementsByClassName("output");
var meanButton=document.getElementById("meanbutton");
meanButton.addEventListener("click",meanFunction);
var weightedButton=document.getElementById("weightedbutton");
weightedButton.addEventListener("click",weightedFunction);
var addButton=document.getElementById("addbutton");
addButton.addEventListener("click",addRowFunction);

var percentage=[];
var totalPercent = 0;

var totalweight=0

var test;
var testarray = [];


alert("If input is not given, this program will do 0/0 for the calculation");
addlistener();
function addlistener(){
var element = document.querySelectorAll("input");
for(x=0;x<element.length;x++)
element[x].addEventListener("keyup", fuctionPercentageCalc);
}

function fuctionPercentageCalc(){
for(j=0;j<i;j++){
    var temp=((score[j].value)/(totalscore[j].value)*100);
    percentage[j]=parseFloat(temp).toFixed(2);
    output[j].innerHTML = percentage[j] + "%";
    
}
}
function meanFunction(){
    totalPercent=0;
    var temparray=[];
    for(k=0;k<i;k++){
        temparray[k]=((score[k].value)/(totalscore[k].value));
    }
    for(k=0;k<i;k++){
        totalPercent+=temparray[k];
    }
    totalPercent=parseFloat(totalPercent*100/i).toFixed(2);
    
    document.getElementById("answerid").innerHTML = totalPercent + "%";

}
function weightedFunction(){
    totalPercent=0;
    var temparray=[];
    totalweight=0;
    for( k=0;k<i;k++){
        totalweight+=parseInt(weight[k].value);
    }
    for(k=0;k<i;k++){
        temparray[k]=(parseInt(score[k].value)*parseInt(weight[k].value)/parseInt(totalscore[k].value));
        testarray[k]=temparray[k];
    }
    for(k=0;k<i;k++){
        totalPercent+=temparray[k];
    }
    test=totalPercent
    totalPercent=totalPercent/totalweight;
    totalPercent=parseFloat(totalPercent*100).toFixed(2);
    
    document.getElementById("answerid").innerHTML = totalPercent + "%";
}

function addRowFunction(){
    i++;
    col0=document.getElementById("col0");
    col1=document.getElementById("col1");
    col2=document.getElementById("col2");
    col3=document.getElementById("col3");
    col4=document.getElementById("col4");

    cln0=col0.cloneNode(true);
    cln1=col1.cloneNode(true);
    cln2=col2.cloneNode(true);
    cln3=col3.cloneNode(true);
    cln4=col4.cloneNode(true);

    cln0.innerHTML="Activity "+ i;
    cln1.innerHTML="A"+ i;
    cln4.innerHTML="";
    
    
    

    var table=document.getElementById("mytable");
    
    row=table.insertRow(i);
    row.appendChild(cln0);
    row.appendChild(cln1);
    row.appendChild(cln2);
    row.appendChild(cln3);
    row.appendChild(cln4);
    
    
    addlistener();
    clearrow();
}

function clearrow(){
    var clear0=document.getElementsByName("weight");
    var clear1=document.getElementsByName("score");
    var clear2=document.getElementsByName("totalScore");
    
    for(g=i-1;g<i;g++){
        clear0[g].value="";
        clear1[g].value="";
        clear2[g].value="";
    }
}
 