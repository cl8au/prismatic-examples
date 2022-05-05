import { util } from "@prismatic-io/spectral";
import { DropboxResponseError } from "dropbox";

export const handleDropboxError = (err, paths = []) => {
  // https://developers.dropbox.com/error-handling-guide
  if (err instanceof DropboxResponseError) {
    switch (err.status) {
      case 401:
        throw new Error(
          `An error occurred with authorization. You may not have permissions to perform this task. Error: ${JSON.stringify(
            err
          )}`
        );
      case 409:
        throw new Error(
          `An error related to file paths occurred. You may be trying to create a directory that already exists, or you may be referencing a file or directory that does not exist. File paths: "${paths}". Error: ${JSON.stringify(
            err
          )}`
        );
      case 429:
        throw new Error(
          `Dropbox reports that your app has been rate-limited. Please slow the number of requests you are making. Error: ${JSON.stringify(
            err
          )}`
        );
      case 500:
        throw new Error(
          `An error occurred on Dropbox's side. Is the Dropbox API down? https://status.dropbox.com/ Error: ${JSON.stringify(
            err
          )}`
        );
    }
  }
  throw new Error(`An unknown error occurred. Error: ${JSON.stringify(err)}`);
};

export const validatePath = (path) => {
  if (!util.types.toString(path).startsWith("/")) {
    throw new Error(
      `Dropbox requires all file paths to start with a leading "/". The file path "${path}" does not start with a "/".`
    );
  }
};

export default { validatePath };