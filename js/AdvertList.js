class AdvertList{
  
    constructor(obj){

        
        this.elementId = obj.elementId;
        this.data  = obj.initialAdverts;


        }

    
    
    
        initAdvert(){

            for(let i=0; i<this.data.length; i++){
                this.listAdvert(this.data[i]);
                //console.log(`initAdvert`);
            }
    
        }
    
        listAdvert(data){
            let advert = new Advert(data); 
            let advTemplate = advert.getTemplate();   
            advert.setEvent();
            //console.log(advert);
            //console.log(advert.template);
            //this.elementId.insertAdjacentHTML('beforeEnd', advert.template);
            this.elementId.appendChild(advert.template);
        }
    
    }
    