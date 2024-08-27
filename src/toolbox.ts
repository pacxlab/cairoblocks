/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Ink! Storage',
      categorystyle: 'variable_category',
      contents: [
        {
          kind: 'block',
          type: 'ink_storage_struct',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Ink! Constructor',
      categorystyle: 'procedure_category',
      contents: [
        {
          kind: 'block',
          type: 'ink_constructor',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Ink! Events',
      categorystyle: 'logic_category',
      contents: [
        {
          kind: 'block',
          type: 'ink_event',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Logic',
      categorystyle: 'logic_category',
      contents: [
        {
          kind: 'block',
          type: 'controls_if',
        },
        {
          kind: 'block',
          type: 'logic_compare',
        },
        // Other logic blocks...
      ],
    },
    {
      kind: 'category',
      name: 'Loops',
      categorystyle: 'loop_category',
      contents: [
        {
          kind: 'block',
          type: 'controls_repeat_ext',
        },
        {
          kind: 'block',
          type: 'controls_whileUntil',
        },
        // Other loop blocks...
      ],
    },
    {
      kind: 'category',
      name: 'Math',
      categorystyle: 'math_category',
      contents: [
        {
          kind: 'block',
          type: 'math_number',
        },
        {
          kind: 'block',
          type: 'math_arithmetic',
        },
        // Other math blocks...
      ],
    },
    {
      kind: 'category',
      name: 'Text',
      categorystyle: 'text_category',
      contents: [
        {
          kind: 'block',
          type: 'text',
        },
        {
          kind: 'block',
          type: 'text_join',
        },
        // Other text blocks...
      ],
    },
    {
      kind: 'sep',
    },
    {
      kind: 'category',
      name: 'Variables',
      categorystyle: 'variable_category',
      custom: 'VARIABLE',
    },
    {
      kind: 'category',
      name: 'Functions',
      categorystyle: 'procedure_category',
      custom: 'PROCEDURE',
    },
  ],
};
