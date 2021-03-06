if (Meteor.isClient) {


    setPanelTemplate = (tmpl, timer = 1) => {
        var toggle = Session.get(SELECTED_PANEL) != tmpl ? tmpl : false;
        Session.set(SELECTED_PANEL, false); 
        setTimeout(() => Session.set(SELECTED_PANEL, toggle), timer);
    };


    Template.BigButtons.events({

        'click .logout': () => {
           Meteor.logout(); 
        },

        'click .side-panel-toggle' : (e) => {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled")
        },

        'click .controll-panel-toggle': (e) => {
            e.preventDefault();
            setPanelTemplate('ControlPanel');
        },

        'click .create-game' : (e) => {
            e.preventDefault();
            setPanelTemplate('testTemplate');
        }

    });

    Template.BigButtons.helpers({
        getCurrentStoneIcon(){
            game = Games.findOne( Session.get(SESSON.ACTIVE_GAME) );
            if (! game) return 'ion-ios-infinite-outline';

            return  game.white == Meteor.user()._id ? 'ion-ios-circle-outline' : 'ion-ios-circle-filled';
        },
    });

    // TODO: move this function to a helpers file
    Template.registerHelper('isTurn', () =>{
        var game = Games.findOne( Session.get(SESSON.ACTIVE_GAME) );
        if (game){
            return game.activePlayer == Meteor.userId() ? 'active' : 'inactive';
        }
    });
}

