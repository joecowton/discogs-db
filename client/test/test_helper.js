import jquery from 'jquery';
import TestUtils from 'react-dom';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';
import jsdom from 'jsdom';

// set up testing enviroment to run like a browser in the cli
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build a renderComponent helper
function renderComponent(ComponentClass, props, state) {
	const componentInstance = TestUtils.renderIntoDocument(
		<Provider store={createStore(reducers, state)}>
			<ComponentClass {...props} />
		</Provider>
	);

	return $(ReactDOM.findDOMNode(componentInstance)); // produces html
}

$.fn.simulate = function(eventName, value) {
	if (value) {
		this.val(value);
	}
	TestUtils.Simulate[eventName](this[0]);
};

chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
