
const span1=document.getElementById('req1')
const span2=document.getElementById('req2')
const span3=document.getElementById('req3')
const labelday=document.getElementById("labelday")
const labelmonth=document.getElementById("labelmonth")
const labelyear=document.getElementById("labelyear")
const submit=document.getElementById('submit');

const current=new Date();
 
submit.addEventListener('click',function(e){
    e.preventDefault();
    const year=parseInt(document.querySelector("#year").value);
    const month= parseInt(document.querySelector('#month').value);
    const day= parseInt(document.querySelector('#day').value);
    validation(year,month,day)
    
     
     
     
})

function validation(year,month,day){
   
    if(isNaN(year) && isNaN(month) && isNaN(day)){
        span1.innerHTML='This field is required';
        span1.style.color='hsl(0, 100%, 67%)';
        labelday.style.color='hsl(0, 100%, 67%)';
        span2.innerHTML='This field is required';
        span2.style.color='hsl(0, 100%, 67%)';
        labelmonth.style.color='hsl(0, 100%, 67%)';
        span3.innerHTML='This field is required';
        span3.style.color='hsl(0, 100%, 67%)';
        labelyear.style.color='hsl(0, 100%, 67%)';

    }else if(year > 2024 && month > 12 && day > 31){
        span3.innerHTML='Must be a valid Year';
        span3.style.color='hsl(0, 100%, 67%)';
        labelyear.style.color='hsl(0, 100%, 67%)';

        span2.innerHTML='Must be a valid Month';
        span2.style.color='hsl(0, 100%, 67%)';
        labelmonth.style.color='hsl(0, 100%, 67%)';

        span1.innerHTML='Must be a valid Day';
        span1.style.color='hsl(0, 100%, 67%)';
        labelday.style.color='hsl(0, 100%, 67%)';
    } else{
        displayMassage(year,month,day);
    }
}

function displayMassage(year,month,day){
   const years=current.getFullYear();
   const  months=current.getMonth ();
   const days=current.getDay();
   document.getElementById("addYear").innerHTML=`${years - year}  `
   document.getElementById("addMonth").innerHTML=`${months - month}  `
   document.getElementById("addday").innerHTML=`${day - days}  `
   
   
}