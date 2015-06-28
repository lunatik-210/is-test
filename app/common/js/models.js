'use strict';

var models = {};


models.activate = function (array, element) 
{
    for( var i = 0; i<array.length; ++i)
    {
        if(array[i].id === element.id)
        {
            array[i].is_active = true;
        } 
        else
        {
            array[i].is_active = false;
        }
    }
};


models.is_active = function (array) 
{
    for( var i = 0; i<array.length; ++i)
    {
        if(array[i].is_active === true)
        {
            return true;
        }
    }
    return false;
};


module.exports = models;
