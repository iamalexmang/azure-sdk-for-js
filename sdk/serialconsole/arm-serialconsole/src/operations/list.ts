/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/listMappers";
import * as Parameters from "../models/parameters";
import { MicrosoftSerialConsoleClientContext } from "../microsoftSerialConsoleClientContext";

/** Class representing a List. */
export class List {
  private readonly client: MicrosoftSerialConsoleClientContext;

  /**
   * Create a List.
   * @param {MicrosoftSerialConsoleClientContext} client Reference to the service client.
   */
  constructor(client: MicrosoftSerialConsoleClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of Serial Console API operations.
   * @param [options] The optional parameters
   * @returns Promise<Models.ListOperationsResponse>
   */
  operations(options?: msRest.RequestOptionsBase): Promise<Models.ListOperationsResponse>;
  /**
   * @param callback The callback
   */
  operations(callback: msRest.ServiceCallback<Models.SerialConsoleOperations>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  operations(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SerialConsoleOperations>): void;
  operations(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SerialConsoleOperations>, callback?: msRest.ServiceCallback<Models.SerialConsoleOperations>): Promise<Models.ListOperationsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      operationsOperationSpec,
      callback) as Promise<Models.ListOperationsResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const operationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/operations",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SerialConsoleOperations
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
