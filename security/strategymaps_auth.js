'use strict';
/**
 * Authorize function for securityDefinitions:strategymaps_auth
 * type : oauth2
 * description: 
 */
module.exports = function authorize(req, res, next) {
    //The context('this') for authorize will be bound to the 'securityDefinition'
    //this.authorizationUrl - The authorization URL for securityDefinitions:strategymaps_auth
    //this.scopes - The available scopes for the securityDefinitions:strategymaps_auth security scheme
    //this.flow - The flow used by the securityDefinitions:strategymaps_auth OAuth2 security scheme

    //req.requiredScopes - list of scope names required for the execution (defined as part of security requirement object).
    

    //Perform auth here

    next();
};
