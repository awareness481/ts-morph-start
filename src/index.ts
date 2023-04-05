import "./styles.css";
import { createSourceFile } from "./create-source-file";
import prettier from "prettier";
import typescriptParser from "prettier/parser-typescript";

const code = prettier.format(createSourceFile(), {
  parser: "typescript",
  plugins: [typescriptParser]
});

document.getElementById("app")!.innerText = code;
