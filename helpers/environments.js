//module scaffolding

const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging'
};

environments.production = {
    port: 5000,
    envName: 'production'
};


//determine which environment was passed

const currentEnvironment = 
    typeof process.env.Node_ENV === 'string' ? process.env.Node_ENV : 'staging';

//export corresponding environment object

const environmentToExport = 
    typeof environments[currentEnvironment] === 'object'
    ? environments[currentEnvironment]
    : environments.staging; 

module.exports = environmentToExport;