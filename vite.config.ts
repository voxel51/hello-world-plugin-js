import { defineConfig } from "@voxel51/fiftyone-js-plugin-build";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dir = __dirname;

/**
 * List any third-party dependencies that should be bundled into the plugin.
 * You can either use regex or package names.
 */
const myThirdPartyDependencies = ["lodash"];

export default defineConfig(dir, {
  buildConfigOverride: { sourcemap: true },
  /**
   * Uncomment the following line to bundle any third party dependencies.
   * We use an opt-in approach to avoid bundling dependencies that are already
   * included in the host application, as this can lead to bloated bundles.
   */
  forceBundleDependencies: myThirdPartyDependencies,
});
