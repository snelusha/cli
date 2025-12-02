import fs from "fs";

import { getInstallationInfo } from "~/installation-info.ts";

const cliPath = process.argv[1];
const realPath = fs.realpathSync(cliPath!).replace(/\\/g, "/");

console.log(cliPath);
console.log(realPath);

const installationInfo = await getInstallationInfo();
console.log(installationInfo);
