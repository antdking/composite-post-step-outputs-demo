const core = require('@actions/core');

async function run() {
    const value = core.getInput('value');

    if (value.toLowerCase() !== 'two') {
        core.setFailed(`value: '${value}' is not 'two'`);
    } else {
        core.info(`value: ${value} is 'two'`);
    }
}

run();
