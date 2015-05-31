

(function init() {

    var plant = {
        waterCount:0,
        foodCount:0,
        height: 0,
        isSeed: true,
        isDead: false,
        isBloom: false,
        feed: function() {
            if (plant.isSeed === false && plant.height < 12) {
                plant.height += 1;
                plant.foodCount++;
            } else if(plant.isSeed === false) {
                plant.foodCount++;
            }

        },

        water: function(){
            if (plant.isSeed) {
                plant.isSeed = false;
                plant.waterCount++

            } else if (plant.height < 11){
                plant.height += 2;
                plant.waterCount++

            } else {
                plant.waterCount++
            }
        },
        status: function() {
            if (plant.isSeed) {
                return 'your plant is currently a seed';
            }
                else if(plant.waterCount > 4 && plant.foodCount > 4) {
                    plant.height = 0;
                    plant.isDead = true;
                    bud.innerHTML='X_X';
                    flower.innerHTML ='';
                    bud.style.display = 'block'
                    bloom.style.display ='none';
                    return 'you killed your plant... good job'
                }
             else if (plant.isBloom === false) {
                return 'your plant is currently ' + plant.height + ' inches tall';
            } else if(plant.isBloom === true) {
                return 'your plant is currently ' + plant.height + ' inches tall and bloomed!';
            }

        },
        grow: function(type) {
            if (plant.isSeed) {
                return '.'
            } else if (plant.height === 0 && plant.isSeed === false) {
                return 'O'
            } else if (type==='water' && plant.height < 11){
                return '|<br/>|<br/>'
            } else if (type==='food' && plant.height < 12){
                return '|<br/>'
            } else {
                return ''
            }
        }


    };

    var water = document.getElementById('water');
    var feed = document.getElementById('feed');
    var status = document.getElementById('status');
    var output = document.getElementById('output');
    var flower = document.getElementById('flower');
    var bloom = document.getElementById('bloom');
    var sun = document.getElementById('sun');
    var bud = document.getElementById('bud');
    var outSun = document.getElementById('outSun');


    water.addEventListener('click', function() {
        plant.water();


        if (plant.height === 0 && plant.isSeed === false) {
            bud.innerHTML = plant.grow();
        } else {
            flower.innerHTML += plant.grow('water');
        }
        output.innerHTML = plant.status();
    });

    feed.addEventListener('click', function(){
        if (plant.isSeed === false) {
            plant.feed();
            flower.innerHTML += plant.grow('food');
            output.innerHTML = plant.status();
        } else {
            output.innerHTML = 'Please water your plant before giving it food'
        }

    })
    status.addEventListener('click', function(){
        output.innerHTML = plant.status();
    });

    sun.addEventListener('click', function () {
        if (plant.isSeed === false && plant.height > 0 && plant.isDead===false) {
            bloom.style.display = 'block';
            bud.style.display = 'none';
            plant.isBloom =true;
            output.innerHTML = plant.status();

        }



    });

    outSun.addEventListener('click', function() {
        if (plant.isDead === false) {
            plant.isBloom = false;
            bloom.style.display = 'none';
            bud.style.display = 'block';
            output.innerHTML =plant.status();
        }

    });


    bud.innerHTML = plant.grow();
    output.innerHTML = plant.status();

})();

