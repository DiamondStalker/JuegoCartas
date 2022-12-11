import { ENV } from "../utils";

const getIdGame = async () => {
	const url = `${ENV.BASE_API}/${ENV.API_ROUTES.NEW_GAME}`;
	const res = await fetch(url);
	const data = await res.json();
	return data?.deck_id;
};

const getCards = async deckId => {
	const url = `${ENV.BASE_API}/${deckId}/draw/?count=2`;
	const res = await fetch(url);
	const data = await res.json();
	return data?.cards;
};

/**
 * Number of cards in the remaining stock
 * @param {String} deckId Id current game
 * @returns {int} remaining cards
 */
const validateRemainingCards = async deckId => {
	const url = `${ENV.BASE_API}/${deckId}/draw/?count=0`;
	const res = await fetch(url);
	const data = await res.json();
	return data?.remaining;

}

const DeckOfCardsAPI = {
	getIdGame,
	getCards,
	validateRemainingCards
};

export default DeckOfCardsAPI;
