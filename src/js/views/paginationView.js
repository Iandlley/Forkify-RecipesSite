import View from "./View.js"
import icons from "url:../../img/icons.svg";
import { RESULTS_PER_PAGE } from "../config.js";

class PaginationView extends View {
    _parentElement = document.querySelector(".pagination");

    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
        });
    };

    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        // Page 1 and there are other pages
        if (curPage === 1 && numPages > 1) {
            return `
                <button class="btn--inline pagination__btn--next">
                    <span>${curPage + 1}</span>
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>
            `;
        };

        // Last page
        if (curPage === numPages) {
            return `
                <button class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>${curPage - 1}</span>
                </button>
            `;
        };

        // Other page
        if (curPage < numPages && numPages > 1) {
            return `
                <button class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>${curPage - 1}</span>
                </button>
                <button class="btn--inline pagination__btn--next">
                    <span>${curPage + 1}</span>
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>
            `;
        };

        // Page 1 and there are not other pages
        return "";
    };
};

export default new PaginationView();