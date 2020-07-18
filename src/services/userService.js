// import { store } from "../redux";
import {
  store,
  setIsLoadingOn,
  setIsLoadingOff,
  setUsersBatch,
  setLatestError,
} from "../redux";
import { BATCH_SIZE, SEED, RANDOMUSER_ME_BASE_URL } from "../Constants";

export function loadNextBatch() {
  let userAlreadyLoaded = store.getState().usersLoaded;
  let currentPage = userAlreadyLoaded / BATCH_SIZE;
  let url = `${RANDOMUSER_ME_BASE_URL}?page=${currentPage}&results=${BATCH_SIZE}&seed=${SEED}`;

  console.log(store.getState());
  store.dispatch(setIsLoadingOn("message"));
  console.log(store.getState());

  fetch(url)
    .then(
      async (response) => {
        let json = await response.json();
        /* The json file with the payload from the randomsuer.me request is strucured as follows:
            info {
                page: number
                results: number;
                seed: string
                version: string
            },
            results: [ randomuser.me user]

            the relevant fields of a user from randomuser.me are
            {
                name: {
                    title: string,
                    first: string,
                    last: string
                },
                picture: string,
                login: {
                    username: string
                },
                email: string,
                location: {
                    street: string,
                    city: string,
                    state: string,
                    postcode: number
                },
                phone: string,
                cell: string
            }
        */
        store.dispatch(setUsersBatch(json.results));
      },
      (error) => {
        store.dispatch(setLatestError(`Error loading users from url: ${url}`));
      }
    )
    .finally(() => {
      store.dispatch(setIsLoadingOff("message"));
    });
}
