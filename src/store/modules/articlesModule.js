export default {
    state: () => {
        return {articles: [
            {
              id: 0,
              image: 'article_1.png',
              imgText: 'Kitchan Design',
              itemTitle: 'Let’s Get Solution For Building Construction Work',
              itemData: '26 December,2022'
            },
            {
              id: 1,
              image: 'article_2.png',
              imgText: 'Living Design',
              itemTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
              itemData: '22 December,2022'
            },
            {
              id: 2,
              image: 'article_3.png',
              imgText: 'Interior Design',
              itemTitle: 'Best For Any Office & Business Interior Solution',
              itemData: '25 December,2022'
            },
            {
              id: 3,
              image: 'article_1.png',
              imgText: 'Kitchan Design',
              itemTitle: 'Let’s Get Solution For Building Construction Work',
              itemData: '26 December,2022'
            },
            {
              id: 4,
              image: 'article_2.png',
              imgText: 'Living Design',
              itemTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
              itemData: '22 December,2022'
            },
            {
              id: 5,
              image: 'article_3.png',
              imgText: 'Interior Design',
              itemTitle: 'Best For Any Office & Business Interior Solution',
              itemData: '25 December,2022'
            },
            {
              id: 6,
              image: 'article_1.png',
              imgText: 'Kitchan Design',
              itemTitle: 'Let’s Get Solution For Building Construction Work',
              itemData: '26 December,2022'
            },
            {
              id: 7,
              image: 'article_2.png',
              imgText: 'Living Design',
              itemTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
              itemData: '22 December,2022'
            },
            {
              id: 8,
              image: 'article_3.png',
              imgText: 'Interior Design',
              itemTitle: 'Best For Any Office & Business Interior Solution',
              itemData: '25 December,2022'
            }
          ],
          currentPage: 0,
          articlesPerPage: 6,
        }
    },
    actions: {
        nextPage({ state, commit, getters}) {
            return state.currentPage === getters.getPageCount - 1
            ? null
            : commit('setCurrentPage', state.currentPage + 1);
        },
        prevPage({ state, commit}) {
            return state.currentPage === 0
            ? null
            : commit('setCurrentPage', state.currentPage - 1);
        }
    },
    mutations: {
        setCurrentPage(state, pagination_pageNumber) {
            state.currentPage = pagination_pageNumber;
        }
    },
    getters: {
        getPaginatedData: state => {
            const start = state.currentPage * state.articlesPerPage;
            const end = start + state.articlesPerPage;
            return state.articles.slice(start, end);
        },
        getPagination_items_total: (state) => {
            return state.articles.length;
        },
        getPageCount(state, getters) {
            return Math.ceil(getters.getPagination_items_total / state.articlesPerPage);
        }
    },
}