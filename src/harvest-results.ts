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

const getElementText = async (baseEl: Locator, selector: string): Promise<string> => {
    /* 
    
        Accepts an element and selector. The selector is used in the 
        context of the base element. The matched element's text is returned.

    */

    const rowTextElement: Locator = baseEl.locator(selector);
    const rowTextElementCount = await rowTextElement.count();
    
    let rowText: string | void;
    if(rowTextElementCount > 0) {
        rowText = await rowTextElement.innerText({ timeout: 1000 })
            .catch(e => console.log(e));
    }
    return rowText ? rowText : 'no text';
};

const harvestSearchResults = async (page: Page, searchQuery: string): Promise<rowData[]> => {
    const searchResultsParent: Locator = page.locator(elementSelectors.searchResultsParent);
    await searchResultsParent.waitFor();
    await page.waitForLoadState();
    
    const resultRows: Locator = searchResultsParent.locator(elementSelectors.searchResultsRow);
    const numberOfRows = await resultRows.count();
    console.log('NUMBER OF RESULT ROWS: ', numberOfRows);

    const searchResults: rowData[] = [];
    for (let i = 0; i < numberOfRows; i++) {
        const baseElement: Locator = resultRows.nth(i);

        const rowURL = await getLinkUrl(baseElement, elementSelectors.searchResultRowLink);
        const rowTitleText: string = await getElementText(baseElement, elementSelectors.searchResultRowTitle);
        const rowDollarsText: string = await getElementText(baseElement, elementSelectors.searchResultRowDollars);
        const rowCentsText: string = await getElementText(baseElement, elementSelectors.searchResultRowCents);

        searchResults.push({
            searchQuery,
            itemURL: `${amazonBaseURL}${rowURL}`,
            itemName: rowTitleText,
            itemPrice: parseFloat(
                `${rowDollarsText.replace('\n', '').replace(',', '')}${rowCentsText}`
            ),
            dateTimeScraped: new Date()
        });
    }

    return searchResults;
};

export default harvestSearchResults;