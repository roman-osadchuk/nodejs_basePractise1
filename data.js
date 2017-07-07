module.exports = {

    user_scores: [
        {
            name: 'Roman',
            scores: [34, 52, 27, 48]
        },
        {
            name: 'Taras',
            scores: [27, 44, 41, 39]
        },
        {
            name: 'Johny',
            scores: [45, 36, 28, 53]
        },
    ],


    getUserHighestScore: function (arr, user){
        var i;

        for(i = 0; i < arr.length; i++){
            if(arr[i]['name'] === user){
                return {
                    name: user,
                    highest_score: this.findMax(arr[i]['scores'])
                }
            }
        }
    },


    getAllHighestScores: function (arr){
        var arrOfHighestScores = [],
            i;

        for(i = 0; i < arr.length; i++){
            arrOfHighestScores.push(this.findMax(arr[i].scores));
        }
        return arrOfHighestScores
    },


    findMax: function (arr) {
        var max = -Infinity;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }


}