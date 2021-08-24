const exportUsersToExcel = require('./exportExcelService');
const workSheetName = 'Users';
const filePath = './excelFile/excel-from-js.xlsx';

const users = [
    {
        id: 0,
        name: 'Peter',
        age: 31
    },
    {
        id: 1,
        name: 'John',
        age: 23
    }
];

const workSheetColumnName = [
    "ID",
    "Name",
    "Age"
]


exportUsersToExcel(users, workSheetColumnName, workSheetName, filePath);