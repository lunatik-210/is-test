'use strict';

module.exports = function (array, element) {
    for( var i = 0; i<array.length; ++i)
    {
        if(array[i].name === element.name)
        {
            array[i].is_active = true;
        } else
        {
            array[i].is_active = false;
        }
    }	
}
