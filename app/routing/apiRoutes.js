var friends = require("../data/friends.js");
module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });
    app.post("/api/friends", (req, res) => {
        var newHomie = {
            name: "",
            pic: "",
            scoreDiff: 1000
        };

        console.log(req.body);
        var userData = req.body;
        var userScore = userData.scores;
        console.log(userScore);
        var totalDifference = 0;

        for (var i = 0; i < friends[i].length; i++) {
            console.log(friends[i]);
            totalDifference = 0;
            for (var x = 0; x < friends[i].scores[x]; x++) {
                totalDifference += Math.abs(parseInt(userScore[x]) - parseInt(friends[i].scores[x]));
                if (totalDifference <= newHomie.scoreDiff) {
                    newHomie.name = friends[i].name;
                    newHomie.pic = friends[i].pic;
                    newHomie.scoreDiff = friends[i].scoreDiff;
                }
            };

        }
        friends.push(userData);
        res.json(newHomie);
    })
}
