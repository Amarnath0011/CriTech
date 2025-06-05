function showGreetingCard(){
    const name = document.getElementById("name").value;
    const message=document.getElementById("message").value;
    const event= document.getElementById("event").value;

    
    document.body.innerHTML=`
    <div class="container">
    <div class="card">
    <h2>Hello ${name}, </h2>
    <marquee><p> Happy ${event} to ${name} </p></marquee>
    <br>
     <div class="wish">${message} </div></div>
     </div>`; 

     
}

