/**
 * Created by winston on 6/14/15.
 */

//todo fix this!
Meteor.publish('currentGame', function(){
    return Games.find({});
})