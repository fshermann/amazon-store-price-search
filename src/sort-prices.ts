import rowData from './constants/row-data-interface';

const sortSearchResultsByPrice = (searchResults: rowData[]): rowData[] => {
    searchResults.sort((a: rowData, b: rowData) => a.itemPrice - b.itemPrice);
    return searchResults;
};

export default sortSearchResultsByPrice;