/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { testDataProcessor as test } from '/tests/markdown-gfm/_utils/utils.js';

describe( 'GFMDataProcessor', () => {
	describe( 'headers', () => {
		it( 'should process level 1 header #1', () => {
			test(
				'# Level 1',

				'<h1>Level 1</h1>'
			);
		} );

		it( 'should process level 1 header #2', () => {
			test(
				'Level 1\n' +
				'===',

				'<h1>Level 1</h1>',

				// When converting back it will be normalized to # representation.
				'# Level 1'
			);
		} );

		it( 'should process level 2 header #1', () => {
			test(
				'## Level 2',

				'<h2>Level 2</h2>'
			);
		} );

		it( 'should process level 2 header #2', () => {
			test(
				'Level 2\n' +
				'---',

				'<h2>Level 2</h2>',

				// When converting back it will be normalized to ## representation.
				'## Level 2'
			);
		} );

		it( 'should process level 3 header', () => {
			test(
				'### Level 3',

				'<h3>Level 3</h3>'
			);
		} );

		it( 'should process level 4 header', () => {
			test(
				'#### Level 4',

				'<h4>Level 4</h4>'
			);
		} );

		it( 'should process level 5 header', () => {
			test(
				'##### Level 5',

				'<h5>Level 5</h5>'
			);
		} );

		it( 'should process level 6 header', () => {
			test(
				'###### Level 6',

				'<h6>Level 6</h6>'
			);
		} );

		it( 'should create header when more spaces before text', () => {
			test(
				'#      Level 1',

				'<h1>Level 1</h1>',

				// When converting back it will be normalized to # Level 1.
				'# Level 1'
			);
		} );
	} );
} );
