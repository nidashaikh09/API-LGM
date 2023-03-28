let b = document.getElementById('btn');
var a = fetch('https://reqres.in/api/users?page=1');
a.then((value)=>{
    return value.json();
}).then((value)=>{
    
    
    // console.log(value)
    // console.log(value['data'][0])
    // console.log(value['data'][0].email)

   
    b.addEventListener("click",()=>{

        

    var aa = 0;
    do{

        let newdiv = document.createElement('div');
        newdiv.classList.add('cont');
        document.getElementById('main').append(newdiv);
        newdiv.innerHTML+=`<div class="cont">
        <img src="${value['data'][aa].avatar}" alt="">
        <div class="info-cont">
            <div class="info">
                <div><span class="title">First Name : </span><span>${value['data'][aa].first_name}</span></div>
                <div><span class="title">Last Name: </span><span>${value['data'][aa].last_name}</span></div>
                <div><span class="title">Email Name : </span><span>${value['data'][aa].email}</span></div>
            </div>
        </div>
    </div>`

        
        aa++;
    }while(aa<value['data'].length)
    
        
    })
    

}).catch((error)=>{
    console.log("error")
})