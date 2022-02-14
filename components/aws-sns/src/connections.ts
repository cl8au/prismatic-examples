import { connection } from "@prismatic-io/spectral";

export const accessKeySecretPair = connection({
  key: "apiKeySecret",
  label: "AWS SNS Access Key and Secret",
  comments: "Authenticates requests to AWS SNS using an API Key and API Secret",
  inputs: {
    accessKeyId: {
      label: "Access Key ID",
      placeholder: "Access Key ID",
      type: "string",
      required: true,
      shown: true,
      comments: "An AWS IAM Access Key ID",
      example: "AKIAIOSFODNN7EXAMPLE",
    },
    secretAccessKey: {
      label: "Secret Access Key",
      placeholder: "Secret Access Key",
      type: "string",
      required: true,
      shown: true,
      comments: "An AWS IAM Secret Access Key",
      example: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    },
  },
});

export default [accessKeySecretPair];