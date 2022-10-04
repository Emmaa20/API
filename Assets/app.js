let btn = document.getElementById('btn-send');

btn.onclick=function(){
    fetch('https://randomuser.me/api/?results=100')
    .then(response=> response.json())
    .then(data =>{
        let users ='';

        data.results.forEach(user => {
            users += `
            <div class="col-lg-4 mt-4" >
            <div class="card">
  <img src=${user.picture.large} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
            `
            document.getElementById('list').innerHTML=users
        })
    })
    .catch(error=>console.log(error))
}





