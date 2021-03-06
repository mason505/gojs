
Accounts.config({
      forbidClientAccountCreation : true
});


Meteor.methods({

    registerUser({username, password, token}){
        let tokenFound = Tokens.findOne(token);
        if (tokenFound) {
            let created = Accounts.createUser({username, password});
            if (created) {
                tokenFound.expire();
            } else {
                throw new Meteor.Error("failed-to-add-user");
            }
            return true;
        } else {
            throw new Meteor.Error('invalid-token', `The token you have is invalid. Please seek a new token.`);
        }
    }

});


