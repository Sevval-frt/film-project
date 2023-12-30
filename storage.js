function Storage()
{

}
Storage.prototype.getFilmToStorage=function()
{
    let films;
    if(localStorage.getItem("films")===null)
    {
        films=[];
    }
    else
    {
        films=JSON.parse(localStorage.getItem("films"));
    }
    return films; // Tekrar array döndürsün. Yani fonksiyon tekrar kullanılsın.
};
Storage.prototype.addFilmToStorage=function(newFilm)
{
    let films=this.getFilmToStorage();

    films.push(newFilm);
    //Yani Array'in içine obje ekliyoruz. 
    /*[
        {title:"film-ismi",director:"film-yönetmeni",url:"http://asdasdasdac"},
        {obje 2},
        {obje 3}
    ]
     */

    localStorage.setItem("films",JSON.stringify(films));

};
Storage.prototype.deleteFilmToStorage=function(filmText)
{
    let films=this.getFilmToStorage();

    films.forEach(function(film,index){
        if(film.title===filmText) // Local'deki title ile UI'deki title'ı karşılaştırıyor.
        {
        films.splice(index,1); //splice metodu ile silme işlemi. O objenin bulunduğu index'ten bir tane silme.
        }
    });

    localStorage.setItem("films",JSON.stringify(films));
};
Storage.prototype.clearAllFilmsFromStorage=function()
{

let films=this.getFilmToStorage();

localStorage.removeItem("films");

}