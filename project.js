//Body 1 ve içindeki inputların DOM'u.
const form=document.querySelector("#film-form");
const inputname=document.querySelector("#title");
const inputdirector=document.querySelector("#director");
const inputurl=document.querySelector("#url");

const cardBody2=document.querySelectorAll(".card-body")[1];
const clear=document.querySelector("#clear-films");

//UI Objesini Başlatma:
const ui=new UI();
//-------------------------------------------------------------
//Storage Objesi:
const storage=new Storage();
//-------------------------------------------------------------
allEventsListener();
//-------------------------------------------------------------
//Tüm Eventleri Yükleme:
function allEventsListener()
{
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
    
        let films=storage.getFilmToStorage();
        ui.loadAllFilms(films);
    });
    cardBody2.addEventListener("click",deleteFilm);
    clear.addEventListener("click",allClear);
}
//-------------------------------------------------------------

function addFilm(e)
{
    //İnputtan değerler çekildi.
    const title=inputname.value;
    const director=inputdirector.value; 
    const url=inputurl.value;

    if(title === " " || director === " " || url === " ")
    {
        ui.displayMessage("Tüm alanları doldurunuz.","danger");
    }
    else
    {
        const newFilm=new Film(title,director,url); //Yeni film objesi oluşturma.
        ui.addFilmToUI(newFilm); //Arayüze film ekleme.
        storage.addFilmToStorage(newFilm); //Storage'a film ekleme.
        ui.displayMessage("Eklendi.","success");
    }

    ui.clearInputs(inputname,inputdirector,inputurl);

    e.preventDefault();
}
//-------------------------------------------------------------
function deleteFilm(e)
{
    if(e.target.id==="delete-film")
    {
    ui.deleteFilmToUI(e.target);
    storage.deleteFilmToStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    //Filmin ismine göre silme
    ui.displayMessage("Film silindi.","success");
    }
};
//-------------------------------------------------------------
function allClear()
{
if(confirm("Tümünü temizlemek istediğinize emin misiniz ?")) //True olunca işleme girer.
{
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
    ui.displayMessage("Hepsi silindi.","success");
}
};
