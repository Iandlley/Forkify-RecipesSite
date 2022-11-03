class SearchView {
    #parentEl = document.querySelector(".search");

    getQuery() {
        const query = this.#parentEl.querySelector(".search__field").value;
        this.#clearInput();
        return query;
    };

    addHanlderSearch(handler) {
        this.#parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    };

    #clearInput() {
        this.#parentEl.querySelector(".search__field").value = ""; 
    };
};

export default new SearchView();