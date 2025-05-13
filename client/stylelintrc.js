// client/.stylelintrc.js
module.exports = {
    extends: [
        'stylelint-config-standard',
        // the Tailwind config below will register its at-rules
        'stylelint-config-tailwindcss'
    ],
    rules: {
        // if you can’t install `stylelint-config-tailwindcss`, you can manually ignore:
        'at-rule-no-unknown': [true, {
            ignoreAtRules: [
                'tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'
            ]
        }]
    }
};
