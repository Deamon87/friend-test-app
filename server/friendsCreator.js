module.exports = function () {
    var friendsList = [];
    for (var i = 0; i < 50; i++) {
        friendsList.push({
            name : 'Friend ' + i,
            age: Math.trunc(Math.random()*40+15),
            gender: Math.random() > 0.5 ? 'male' : 'female'
        })
    }

    return friendsList;
};