/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import CommonMarkDataProcessor from './commonmarkdataprocessor';

// Simple plugin which loads the data processor.
// eslint-disable-next-line no-unused-vars
function EnableDataProcessor( editor ) {
	editor.data.processor = new CommonMarkDataProcessor();
}

export default class CommonMark extends Plugin {
	static get requires() {
		return [];
	}
}
