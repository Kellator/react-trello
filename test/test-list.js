import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();
import CardList from '../js/components/list';

describe('List component', function() {
	it('Renders a list of cards', function() {
		const text = "I am Text";
		const title = "List Title";
		const cards = "list";
		const index = "1";
		const list = [{text: "text 1", cards: "1"}, {text: "text 2", cards: "2"}, 
		{text: "text 3", cards: "3"}];

		const renderer = TestUtils.createRenderer();
		console.log(renderer);
		renderer.render(<CardList text={text} cards={cards} index={index} />)
	});
});