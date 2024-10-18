This is a template for writing a Javascript panel plugin in FiftyOne.

## Important
1. Make sure you have a local copy of FiftyOne.
2. Set `FIFTYONE_DIR` to the path of your local FiftyOne repository.
3. You can see the usage of portals in the `package.json` file. Notice how it references the `fiftyone` package from the local FiftyOne repository. The current setup assumes that the plugin dir is a sibling of the FiftyOne repository. If this is not the case, you will need to update the portal paths in the `package.json` file.
4. See also [Fiftyone JS Plugin Build Utils](https://github.com/voxel51/fiftyone-js-plugin-build).