/* eslint-disable camelcase */
/* Need snake_case to match nodes in CM AST */

import document from './document';
import paragraph from './paragraph';
import block_quote from './block_quote';
import text from './text';
import strong from './strong';
import emph from './emph';
import image from './image';
import link from './link';
import heading from './heading';

export default {
	document,
	paragraph,
	block_quote,
	text,
	strong,
	emph,
	image,
	link,
	heading
};
