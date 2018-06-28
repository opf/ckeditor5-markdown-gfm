/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module markdown-gfm/commonmarkdataprocessor
 */

/* eslint-env browser */

import HtmlDataProcessor from '@ckeditor/ckeditor5-engine/src/dataprocessor/htmldataprocessor';
import DomConverter from '@ckeditor/ckeditor5-engine/src/view/domconverter';
import { gfm } from 'turndown-plugin-gfm';
import TurndownService from 'turndown';
import marked from './lib/marked/marked';
import GFMRenderer from './lib/marked/renderer';

/**
 * This data processor implementation uses CommonMark as input/output data.
 *
 * @implements module:engine/dataprocessor/dataprocessor~DataProcessor
 */
export default class CommonMarkDataProcessor {
	constructor() {
		this._htmlDP = new HtmlDataProcessor();
		this._domConverter = new DomConverter();
	}

	/**
	 * Converts the provided CommonMark string to view tree.
	 *
	 * @param {String} data A CommonMark string.
	 * @returns {module:engine/view/documentfragment~DocumentFragment} The converted view element.
	 */
	toView( data ) {
		const html = marked.parse( data, {
			gfm: true,
			breaks: true,
			tables: true,
			xhtml: true,
			renderer: new GFMRenderer()
		} );

		return this._htmlDP.toView( html );
	}

	/**
	 * Converts the provided {@link module:engine/view/documentfragment~DocumentFragment} to data format &mdash; in this
	 * case to a CommonMark string.
	 *
	 * @param {module:engine/view/documentfragment~DocumentFragment} viewFragment
	 * @returns {String} CommonMark string.
	 */
	toData( viewFragment ) {
		// Convert view DocumentFragment to DOM DocumentFragment.
		const domFragment = this._domConverter.viewToDom( viewFragment, document );

		// Use Turndown to convert DOM fragment to markdown
		const turndownService = new TurndownService( { headingStyle: 'atx' } );
		turndownService.use( gfm );
		turndownService.keep( [ 'macro' ] );

		return turndownService.turndown( domFragment )
			.replace( /(<macro .+?>).+?(<\/macro>)/g, '$1$2' );
	}
}

