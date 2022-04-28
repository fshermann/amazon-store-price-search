import { chromium, Browser, Page } from 'playwright';
import useMainSearchBox from './src/main-search';
import navigateToWebpage from './src/navigate';
import harvestSearchResults from './src/harvest-results';

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
    await useMainSearchBox(page, searchQueries[0]);
    const searchResults: object[] = await harvestSearchResults(page);
    console.log(searchResults);
};

runAutomation();