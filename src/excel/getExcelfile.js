const xlsx = require( 'xlsx');

const wb = xlsx.readFile("topsis-example.xlsx",{});
const ws = wb.Sheets["results"];
const data = xlsx.utils.sheet_to_json(ws);

const newData = data.map(function(record){
   delete record.Ci;
   return record;
});

console.log(data);

const newWB = xlsx.utils.book_new();
const newWS = xlsx.utils.json_to_sheet(newData);
xlsx.utils.book_append_sheet(newWB,newWS,"NewData");
xlsx.writeFile(newWB, "test.xlsx")