// eslint-disable-next-line
import { useEffect, useRef, useState } from "react";
// import * as Blockly from "blockly";
import "./App.css";
import { blocks } from "./blocks/text";
import { javascriptGenerator } from "blockly/javascript";
import { forBlock } from "./generators/javascript";
import { toolbox } from "./toolbox";
import * as Blockly from "blockly";
import { save, load } from "./serialization";
function App() {
  // Register the blocks and generator with Blockly
  Blockly.common.defineBlocks(blocks);
  Object.assign(javascriptGenerator.forBlock, forBlock);

  useEffect(() => {
    // Set up UI elements and inject Blockly
    let blocklyDiv: any = document.getElementById("blocklyDiv");
    const codeDiv = document.getElementById("generatedCode")?.firstChild;
    const outputDiv = document.getElementById("output");

    if (!blocklyDiv) {
      throw new Error(`div with id 'blocklyDiv' not found`);
    } else {
      console.log(blocklyDiv);
    }

    const ws = Blockly.inject(blocklyDiv, { toolbox });

    // This function resets the code and output divs, shows the
    // generated code from the workspace, and evals the code.
    // In a real application, you probably shouldn't use `eval`.
    const runCode = () => {
      const code = javascriptGenerator.workspaceToCode(ws as Blockly.Workspace);
      if (codeDiv) codeDiv.textContent = code;

      if (outputDiv) outputDiv.innerHTML = "";

      eval(code);
    };

    if (ws) {
      // Load the initial state from storage and run the code.
      load(ws);
      runCode();

      // Every time the workspace changes state, save the changes to storage.
      ws.addChangeListener((e: Blockly.Events.Abstract) => {
        // UI events are things like scrolling, zooming, etc.
        // No need to save after one of these.
        if (e.isUiEvent) return;
        save(ws);
      });

      // Whenever the workspace changes meaningfully, run the code again.
      ws.addChangeListener((e: Blockly.Events.Abstract) => {
        // Don't run the code when the workspace finishes loading; we're
        // already running it once when the application starts.
        // Don't run the code during drags; we might have invalid state.
        if (
          e.isUiEvent ||
          e.type == Blockly.Events.FINISHED_LOADING ||
          ws.isDragging()
        ) {
          return;
        }
        runCode();
      });
    }

    return () => {};
  }, []);

  return (
    <div className="App">
      <div id="pageContainer">
        <div id="blocklyDiv"></div>
        <div id="outputPane">
          <pre id="generatedCode">
            <code></code>
          </pre>
          <div id="output"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
