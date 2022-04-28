import { Page } from 'playwright';

const navigateToWebpage = async (page: Page, url: string): Promise<void> => {
    await page.goto(url)
        .catch(e => console.log('NAVIGATION FUNC ERR:', e));
};

export default navigateToWebpage;