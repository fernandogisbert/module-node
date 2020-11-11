
var moduloNameGenerator = {

    nameGenerator: function(){

        let nombres = ['Pepe', 'María', 'Andrés', 'Elvira', 'Manolito'];

        return nombres[Math.floor(Math.random()*5)];
    }
};

module.exports = moduloNameGenerator;