const debug = require('debug');

module.exports = {
    statusCode: {},
    apiCode: {
        SUCCESS: { code: 1, message: 'Thành công' },
        UNAUTHORIZED: { code: 403, message: 'Không có quyền truy cập' },
        INVALID_ACCESS_TOKEN: { code: 404, message: 'Token không hợp lệ' },
    },
    config: {},
    debug: {},
    typy_input: {
        TEXT: 1,
        SELECT: 2,
        MULTIPLE_SELECT: 3,
        DATE: 4,
        YES_NO: 5,
    }
};