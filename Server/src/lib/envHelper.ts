// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import 'dotenv/config';

export const getResourceConnectionString = (): string => {
  const resourceConnectionString = process.env.RESOURCE_CONNECTION_STRING;

  if (!resourceConnectionString) {
    throw new Error('No ACS connection string provided');
  }

  return resourceConnectionString;
};

export const getEndpoint = (): string => {
  const uri = new URL(process.env.ENDPOINT_URL);
  return `${uri.protocol}//${uri.host}`;
};

export const getAdminUserId = (): string => {
  const adminUserId = process.env.ADMIN_USER_ID;

  if (!adminUserId) {
    throw new Error('No ACS Admin UserId provided');
  }

  return adminUserId;
};
