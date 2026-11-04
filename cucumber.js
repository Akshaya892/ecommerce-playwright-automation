
module.exports = {
    default: {

        requireModule: ['ts-node/register'],

        require: [
            'step-definitions/**/*.ts',
            'support/**/*.ts'
        ],

        format: [
            'progress',
            'html:reports/cucumber-report.html'
        ],

        publishQuiet: true
    }
};
