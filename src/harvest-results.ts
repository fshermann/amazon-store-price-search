import { Page, Locator } from 'playwright';
import elementSelectors from './constants/element-selectors';
import rowData from './constants/row-data-interface';

const amazonBaseURL = 'https://www.amazon.com';

const getLinkUrl = async (baseEl: Locator, selector: string) => {
    /* 
    
        Accepts an element and selector. The selector is used in the 
        context of the base element. The matched element's url is returned.

    */

    const rowURLElement: Locator = baseEl.locator(selector);
    return await rowURLElement.evaluate((link) => link.getAttribute('href'));
};

const getElementText = async (baseEl: Locator, selector: string) => {
    /* 
    
        Accepts an element and selector. The selector is used in the 
        context of the base element. The matched element's text is returned.

    */

    const rowTextElement: Locator = baseEl.locator(selector);
    return await rowTextElement.innerText({ timeout: 2000 });
};

const harvestSearchResults = async (page: Page): Promise<object[]> => {
    const searchResultsParent: Locator = page.locator(elementSelectors.searchResultsParent);
    await searchResultsParent.waitFor();

    const resultRows: Locator = searchResultsParent.locator(elementSelectors.searchResultsRow);
    const numberOfRows = await resultRows.count();
    console.log('NUMBER OR RESULT ROWS: ', numberOfRows);

    const searchResults: rowData[] = [];
    for (let i = 0; i < numberOfRows; i++) {
        const baseElement: Locator = resultRows.nth(i);

        const rowURL = await getLinkUrl(baseElement, elementSelectors.searchResultRowLink);
        const rowTitleText: string = await getElementText(baseElement, elementSelectors.searchResultRowTitle);
        const rowDollarsString: string = await getElementText(baseElement, elementSelectors.searchResultRowDollars);
        const rowCentsText: string = await getElementText(baseElement, elementSelectors.searchResultRowCents);

        searchResults.push({
            itemURL: `${amazonBaseURL}${rowURL}`,
            itemName: rowTitleText,
            itemPrice: parseFloat(`${rowDollarsString.replace('\n', '')}${rowCentsText}`),
            dateTimeScraped: new Date()
        });
    }

    return searchResults;
};

export default harvestSearchResults;