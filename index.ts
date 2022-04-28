import { chromium, Browser, Page } from 'playwright';
import useMainSearchBox from './src/main-search';
import navigateToWebpage from './src/navigate';
import harvestSearchResults from './src/harvest-results';
import rowData from './src/constants/row-data-interface';
import sortSearchResultsByPrice from './src/sort-prices';
import writeToCSV from './src/write-to-csv';

const searchQueries: string[] = [
    'nvidia 3060',
    'nvidia 3070',
    'nvidia 3080'
];

const runAutomation = async () => {
    /* 
    
    Main runner function.

    */

    const browser: Browser = await chromium.launch({
        headless: false
    });
    const page: Page = await browser.newPage();
    await navigateToWebpage(page, 'https://www.amazon.com');

    let allSearchQueryResults: rowData[] = [];
    for (const searchQuery of searchQueries) {
        await useMainSearchBox(page, searchQuery);
        const searchResults: rowData[] = await harvestSearchResults(page, searchQuery);
    
        // doing this so variable names make sense, breaking into functions might otherwise be overkill
        const searchResultSortedByPrice: rowData[] = sortSearchResultsByPrice(searchResults); 
        writeToCSV(searchResultSortedByPrice, `output/${searchQuery}_all.csv`);
        const threeCheapestItems: rowData[] = searchResultSortedByPrice.slice(0, 3);
        writeToCSV(threeCheapestItems, `output/${searchQuery}_top_3.csv`);

        allSearchQueryResults = [...allSearchQueryResults, ...threeCheapestItems];
    }

    writeToCSV(allSearchQueryResults, 'output/all_top_3.csv');
    browser.close();
};

runAutomation();