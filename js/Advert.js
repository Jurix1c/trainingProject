    
class Advert{

    constructor(name){

        this.name = name;
        this.deleteAdvert = this.deleteAdvert.bind(this);
        let template = this.getTemplate(name);
        //console.log(template);
       // return this.setEvent(template);
        return template;
    }

    getTemplate(){
    
        let divTemplate = `<div class="card" id="${this.name.id}">
        <div class="card-preview">
            <img src="./images/default.jpg" />
        </div>
        <div class="card-data">
        <div class="card-title">
            ${this.name.title}        
        </div>
        <div class="card-cost">
            ${this.name.cost}
        </div>
        <div class="card-address">
            ${this.name.address}
        </div>
        </div>
        <div class="card-buttons">
            <div>
            <form action="/red" target="_blank">
            <button class="button-edit"> Редактировать</button>
            </form>
            </div>
            <div>
            <button class="button-delete"> Удалить</button>
            </div>
        </div>
    </div>`;
    let docDiv = document.createElement('div');
    docDiv.insertAdjacentHTML('afterbegin',divTemplate);
    this.template = docDiv; 

    }

    deleteAdvert(){
        
        
        console.log(this.template);
        debugger;
        this.template.remove();
        console.log(delete this.template);
        console.log(this.template);
    }

    setEvent(){
        //console.log(obj);
        //let btDelete = this.template.getElementsByClassName("button-delete")[0];
        let btDelete = this.template.querySelector(".button-delete");
        btDelete.addEventListener("click", this.deleteAdvert);

        //console.log('setEvent');
    }
    
    deleteEvent(obj){
        //console.log('deleteEvent');
    }


}
