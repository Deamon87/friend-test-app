module.exports = function () {
    var friendsList = [];
    for (var i = 0; i < 50; i++) {
        var age = Math.trunc(Math.random()*40+20);
        var birthDate = new Date();
        birthDate.setDate(birthDate.getDate() - age*365);

        friendsList.push({
            name : 'Friend ' + i,
            lastname : 'Lastname ' + i,
            age: age,
            birthDate: birthDate.toISOString().slice(0,10),
            gender: Math.random() > 0.5 ? 'Male' : 'Female'
        })
    }

    return friendsList;
};