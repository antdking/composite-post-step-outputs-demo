const core = require('@actions/core');

async function run() {
    const value = core.getInput('value', {required: true});
    let target = core.getInput('target', {required: false});

    core.info(`value received: ${value}`);
    if (!target) {
        core.info("No target given, assuming 'two'");
        target = 'two';
    } else {
        core.info(`target received: '${target}'`);
    }

    if (value.toLowerCase() !== target.toLowerCase()) {
        core.setFailed(`value: '${value}' is not '${target}'`);
    } else {
        core.info(`value: ${value} is '${target}'`);
    }
}

run();
