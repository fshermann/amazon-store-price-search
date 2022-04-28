/* 

    This file serves two purposes:
    1. Centralizes all dom selectors which will change fairly often.
    2. Prevents the (usually) ugly dom selectors from polluting the codebase.

*/

interface elementSelectorTypes {
    mainSearchBox: string,
    mainSearchBoxSubmitButton: string,
    searchResultsParent: string
}

const elementSelectors: elementSelectorTypes = {
    mainSearchBox: '#twotabsearchtextbox',
    mainSearchBoxSubmitButton: '#nav-search-submit-button',
    searchResultsParent: '#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row'
};

export default elementSelectors;