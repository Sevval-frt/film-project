function UI() //Ekleme işlemi burada gerçekleşiyor.
{

}
UI.prototype.addFilmToUI=function(newFilm)
{   
    const filmList= document.querySelector("#films");

    filmList.innerHTML += //Eğer sadece "=" kullanılsaydı önceki HTML'i otomatik siliyor. Burada üzerine ekliyor. 
    `<tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> `;

};
//İnput silme işlemi.
UI.prototype.clearInputs=function(node1,node2,node3) 
{
node1.value="";
node2.value="";
node3.value="";
};
UI.prototype.displayMessage=function(message,type)
{
    const cardBody=document.querySelector(".card-body");

    //Alert div'ini oluşturma.
    const alertdiv=document.createElement("div");
    alertdiv.className=`alert alert-${type}`;
    alertdiv.role="alert";
    alertdiv.textContent=`${message}`;

    //Alert Div'ini cardBody'e ekleme.
    cardBody.appendChild(alertdiv);

    //Süre.
    setTimeout(() => { alertdiv.remove(); },3000);

};
UI.prototype.loadAllFilms=function(films)
{
    const filmList= document.querySelector("#films");

    films.forEach(function(film){
        filmList.innerHTML +=
        `<tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`;

    });
        
};
UI.prototype.deleteFilmToUI=function(element)
{
    element.parentElement.parentElement.remove();
}
UI.prototype.clearAllFilmsFromUI=function()
{

    const filmList= document.querySelector("#films");

    while(filmList.firstElementChild!==null)
    {
        filmList.firstElementChild.remove();
    }

}