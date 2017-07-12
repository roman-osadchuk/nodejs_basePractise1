module.exports = {

    user_scores: [
        {
            name: 'Roman',
            score: 52
        },
        {
            name: 'Taras',
            score: 44
        },
        {
            name: 'Johny',
            score: 49
        },
    ],


    getAllHighestScores: function (arr){
        return arr
    },


    getUserHighestScore: function (arr, user){
        return arr.find(function(elt, ind, obj){
            if(elt.name === user) return elt
        });
    }
}