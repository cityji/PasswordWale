const crypto = require('crypto');

     const key = crypto.randomBytes(32).toString('hex');
     console.log(key);
    //  30a8ec10e6a8b803b32e055362bacba3437048cd2a063bc689c70cc36e816899