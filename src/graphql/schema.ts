import { makeSchema, fieldAuthorizePlugin } from 'nexus';
import { Query } from './Query';
import { Mutation } from './Mutation';
import { UserType } from './UserType';
import { GetMeType } from './GetMeType';
import { CustomerQuery } from './CustomerQuery';

export const getSchema = () => {
  const schema = makeSchema({
    types: [Query, Mutation, UserType, GetMeType, CustomerQuery],

    outputs: {
      schema: process.cwd() + '/nexus/schema.graphql',
      typegen: process.cwd() + '/nexus/nexus.ts',
    },
    plugins: [fieldAuthorizePlugin()],

  });
  return schema;
};
