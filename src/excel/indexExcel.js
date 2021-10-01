const exportUsersToExcel = require('./exportExcelService');
const workSheetName = 'TOPSIS';
const filePath = 'example.xlsx';

const users = [
    {
        A1: 5,
        A2: 6,
        A3: 5,
        A4: 4,
        A5: 3,
    }, 
    {
        A1: 5,
        A2: 4,
        A3: 3,
        A4: 6,
        A5: 4,
    },
     {
        A1: 3,
        A2: 5,
        A3: 4,
        A4: 6,
        A5: 3,
    },
    
];

const workSheetColumnName = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
]



exportUsersToExcel(users, workSheetColumnName, workSheetName, filePath);