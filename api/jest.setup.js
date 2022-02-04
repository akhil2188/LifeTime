require('dotenv').config()
var fs = require('fs');
var yaml = require('js-yaml');
var { local } = yaml.load(fs.readFileSync('env.yml', 'utf8'));
process.env = {
    ...local,
    // allow process.env to override
    ...process.env,
    // for integration tests
    API_URL: 'http://localhost:5000',
    AWS_ACCOUNT_ID: '123456789012',
    IS_OFFLINE: true,
    REGION: 'us-east-1',
    SERVICE_NAME: 'code-test-api',
}
