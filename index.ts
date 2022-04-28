import { chromium, Browser, Page } from 'playwright';
import useMainSearchBox from './src/main-search';
import navigateToWebpage from './src/navigate';

const searchQueries: string[] = [
    'nvidia 3060',
    'nvidia 3070',
    'nvidia 3080'
];

const runAutomation = async () => {
    const browser: Browser = await chromium.launch({
        headless: false
    });

    const page: Page = await browser.newPage();

    await navigateToWebpage(page, 'https://www.amazon.com');
    await useMainSearchBox(page, searchQueries[0]);
};

runAutomation();