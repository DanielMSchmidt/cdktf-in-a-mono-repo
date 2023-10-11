import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // define resources here

    new TerraformOutput(this, "hello", {
      value: "darkness my old friend",
    });
  }
}

const app = new App();
new MyStack(app, "infrastructure-b");
app.synth();
