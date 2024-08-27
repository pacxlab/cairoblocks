/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Block for defining an Ink! storage struct
const inkStorageStruct = {
  type: 'ink_storage_struct',
  message0: 'Define storage struct %1',
  args0: [
    {
      type: 'input_value',
      name: 'FIELDS',
      check: 'String',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: 'Defines the storage struct for an Ink! contract',
  helpUrl: '',
};

// Block for creating an Ink! constructor
const inkConstructor = {
  type: 'ink_constructor',
  message0: 'Constructor %1 with initial supply %2',
  args0: [
    {
      type: 'field_input',
      name: 'NAME',
      text: 'new',
    },
    {
      type: 'input_value',
      name: 'INITIAL_SUPPLY',
      check: 'Number',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  tooltip: 'Defines the constructor of an Ink! contract',
  helpUrl: '',
};

// Block for defining an Ink! event
const inkEvent = {
  type: 'ink_event',
  message0: 'Event %1 with fields %2',
  args0: [
    {
      type: 'field_input',
      name: 'EVENT_NAME',
      text: 'Transfer',
    },
    {
      type: 'input_statement',
      name: 'FIELDS',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 290,
  tooltip: 'Defines an event in an Ink! contract',
  helpUrl: '',
};

// Register the custom blocks
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  inkStorageStruct,
  inkConstructor,
  inkEvent,
]);