const xdInstall = require("@adobe/xdpm/commands/install");
const path = require('path');


class AdobeXDPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("Hello World Plugin", (
      stats /* stats is passed as argument when done hook is tapped.  */
    ) => {
      const xdOptions = {
        overwrite: true,
        json: true
      };
    
      xdInstall(xdOptions, [path.resolve(__dirname, "../dist")]);      
    });
  }
}

module.exports = AdobeXDPlugin;

