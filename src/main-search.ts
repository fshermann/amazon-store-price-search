import { Page, Locator } from 'playwright';
import elementSelectors from './constants/element-selectors';

const useMainSearchBox = async (page: Page, searchString: string): Promise<void> => {
    /*
    
        This function takes a page and a search string and searches amazon using
        the main search box at the top of the webpage. When the returned promise 
        resolves, the webpage should be ready for consumption.

    */

    const mainSearchBox: Locator = page.locator(elementSelectors.mainSearchBox);
    await mainSearchBox.fill(searchString)
        .catch(e => console.log('SEARCH FUNC ERR 1:', e));

    const mainSearchBoxSubmitButton: Locator = page.locator(elementSelectors.mainSearchBoxSubmitButton);
    await mainSearchBoxSubmitButton.click()
        .catch(e => console.log('SEARCH FUNC ERR 2:', e));
};

export default useMainSearchBox;