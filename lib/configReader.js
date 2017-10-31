var fs = require('fs');

var configFile = (function(){
    for (var i = 0; i < process.argv.length; i++){
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();


try {
    global.config = JSON.parse(fs.readFileSync(configFile));
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

global.version = "v0.99.3.3";
global.devDonationAddress = '447iCrLWUbsTSxqfvRcckQgZHz1XAX98W9Q1qmAkcmDvA9gYysfms2teJcByLuCQv7ezpWbHtKpiUgBffBVqjftS1F6HvkR';
global.coreDevDonationAddress = '447iCrLWUbsTSxqfvRcckQgZHz1XAX98W9Q1qmAkcmDvA9gYysfms2teJcByLuCQv7ezpWbHtKpiUgBffBVqjftS1F6HvkR';
global.doDonations =  devDonationAddress[0] === config.poolServer.poolAddress[0] && (
    config.blockUnlocker.devDonation > 0 || config.blockUnlocker.coreDevDonation > 0
);
