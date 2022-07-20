const core = require('@actions/core');

async function run() {
    const value = core.getInput('value');
    const targetValue = core.getInput('is') ?? 'two';

    if (value.toLowerCase() !== targetValue.toLowerCase()) {
        core.setFailed(`value: '${value}' is not '${targetValue}'`);
    } else {
        core.info(`value: ${value} is '${targetValue}'`);
    }
}

run();
