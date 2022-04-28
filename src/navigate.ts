import { Page } from 'playwright';

const navigateToWebpage = async (page: Page, url: string): Promise<void> => {
    await page.goto(url);
};

export default navigateToWebpage;