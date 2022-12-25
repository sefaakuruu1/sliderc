var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpeg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpeg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpeg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpeg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

var index = 0;
var slaytCount = models.length;
var interval;//verilen saniyede bir iindex degistirir


var settings={
    duration : '1000',//slide atlama suresi 1sn belirlendi
    random : false//sırayla devam etmesi isteniyorsa false,karısık sekilde devam etmesi isteniyorsa true verilir
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;//icon a tıklandiğinda bi onceki degere gitmeyi saglar
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);//icona tıklandıgında bı sonraki degere gitmeyi saglar
    console.log(index);    
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){//fare ıconların uzerine geldıgınde durduruyor.Fare oradan cekıldıgınde ise durmeya devam ediyor
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);//burada ise cekildigi anda  kaldıgı yerden devam eder
    })
})


function init(settings){

    var prev;
    interval=setInterval(function(){
        
        if(settings.random){//random sayı ureterek slayt degeroını fonderir
            // random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;//aynı indexi uretmemizi engeller 
        }else{
            // artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration)
  

}



function showSlide(i){// slayttaki elemanları gostermeye yarar


    index = i;

    if (i<0) {//eger sıfırıncı indexdeysek ve sagdaki ikona tıklarsak -1e gitmesini engeller
        index = slaytCount - 1;
    }
    if(i >= slaytCount){//eger son slayttaysak ve ileri gitmeye calısırsak direkt 0 a atar
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    //src href gibi(sanırım text dişinda kalan seyler )setattribute ile atanır.
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}



