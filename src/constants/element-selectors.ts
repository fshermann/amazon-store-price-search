/* 

    This file serves two purposes:
    1. Centralizes all dom selectors which will change fairly often.
    2. Prevents the (usually) ugly dom selectors from polluting the codebase.

*/

interface elementSelectorTypes {
    mainSearchBox: string,
    mainSearchBoxSubmitButton: string,
    searchResultsParent: string,
    searchResultsRow: string,
    searchResultRowLink: string,
    searchResultRowTitle: string,
    searchResultRowDollars: string,
    searchResultRowCents: string
}

const elementSelectors: elementSelectorTypes = {
    mainSearchBox: '#twotabsearchtextbox',
    mainSearchBoxSubmitButton: '#nav-search-submit-button',
    searchResultsParent: '#search > div > div > div > span:nth-child(4) > div:nth-child(2)',
    searchResultsRow: 'div.s-result-item.s-asin',
    searchResultRowLink: 'div > div > div > div > div > div > div > div > div > h2 > a',
    searchResultRowTitle: 'div > div > div > div > div > div > div > div > div > h2 > a > span',
    searchResultRowDollars: 'span.a-price-whole',
    searchResultRowCents: 'span.a-price-fraction'
};

export default elementSelectors;