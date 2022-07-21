const core = require('@actions/core');

const TARGET = 'foo';

async function run() {
    const value = core.getInput('value');

    core.info(`value received: ${value}`);

    if (value !== TARGET) {
        core.setFailed(`value: '${value}' is not '${TARGET}'`);
    } else {
        core.info(`value: ${value} is '${TARGET}'`);
    }
}

run();
