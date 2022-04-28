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
    searchResultsParent: '#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row',
    searchResultsRow: 'div.s-result-item.s-asin',
    searchResultRowLink: 'div > div > div > div > div > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20.s-list-col-right > div > div > div.a-section.a-spacing-none.s-padding-right-small.s-title-instructions-style > h2 > a',
    searchResultRowTitle: 'div > div > div > div > div > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20.s-list-col-right > div > div > div.a-section.a-spacing-none.s-padding-right-small.s-title-instructions-style > h2 > a > span',
    searchResultRowDollars: 'span.a-price-whole',
    searchResultRowCents: 'span.a-price-fraction'
};

export default elementSelectors;