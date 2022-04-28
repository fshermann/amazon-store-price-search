import rowData from './constants/row-data-interface';
import converter from 'json-2-csv';
import fs from 'fs';

const writeToCSV = (searchResults: rowData[] | rowData[][], fileName: string) => {
    converter.json2csv(searchResults, (err, csv) => {
        if (err) {
            throw err;
        }

        fs.writeFileSync(fileName, csv ?? '');
    });
};

export default writeToCSV;