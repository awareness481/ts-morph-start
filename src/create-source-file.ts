import {
  ObjectLiteralExpression,
  Project,
  VariableDeclarationKind,
  SyntaxKind
} from "ts-morph";

const createSourceFile = (): string => {
  const project = new Project({ useInMemoryFileSystem: true });
  const sourceFile = project.createSourceFile("file.ts");

  const variable = sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [{ name: "example", initializer: "{}" }]
  });

  const objectLiteral: ObjectLiteralExpression = variable.getFirstDescendantByKindOrThrow(
    SyntaxKind.ObjectLiteralExpression
  );

  objectLiteral.addPropertyAssignments([
    { name: "property1", initializer: "123" },
    {
      name: "property2",
      initializer: "false"
    }
  ]);

  return sourceFile.getFullText();
};

export { createSourceFile };
