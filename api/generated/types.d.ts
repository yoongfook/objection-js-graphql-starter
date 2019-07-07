/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */






declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateWorkspaceInput: { // input type
    name: string; // String!
  }
  DeleteWorkspaceInput: { // input type
    id: string; // String!
  }
  LoginInput: { // input type
    email: string; // String!
    password: string; // String!
  }
  SignupInput: { // input type
    email: string; // String!
    name: string; // String!
    password: string; // String!
  }
  UpdateUserInput: { // input type
    email?: string | null; // String
    name?: string | null; // String
    password?: string | null; // String
  }
  UpdateWorkspaceInput: { // input type
    id: string; // String!
    name: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  AuthPayload: { // root type
    jwt: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  DeletePayload: { // root type
    count: number; // Int!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    id: string; // ID!
    name: string; // String!
  }
  Workspace: { // root type
    id: string; // ID!
    name: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CreateWorkspaceInput: NexusGenInputs['CreateWorkspaceInput'];
  DeleteWorkspaceInput: NexusGenInputs['DeleteWorkspaceInput'];
  LoginInput: NexusGenInputs['LoginInput'];
  SignupInput: NexusGenInputs['SignupInput'];
  UpdateUserInput: NexusGenInputs['UpdateUserInput'];
  UpdateWorkspaceInput: NexusGenInputs['UpdateWorkspaceInput'];
}

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    jwt: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  DeletePayload: { // field return type
    count: number; // Int!
  }
  Mutation: { // field return type
    createWorkspace: NexusGenRootTypes['Workspace']; // Workspace!
    deleteWorkspace: NexusGenRootTypes['DeletePayload']; // DeletePayload!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateUser: NexusGenRootTypes['User']; // User!
    updateWorkspace: NexusGenRootTypes['Workspace']; // Workspace!
  }
  Query: { // field return type
    me: NexusGenRootTypes['User']; // User!
    workspaces: NexusGenRootTypes['Workspace'][]; // [Workspace!]!
  }
  User: { // field return type
    email: string; // String!
    id: string; // ID!
    name: string; // String!
  }
  Workspace: { // field return type
    id: string; // ID!
    name: string; // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createWorkspace: { // args
      input: NexusGenInputs['CreateWorkspaceInput']; // CreateWorkspaceInput!
    }
    deleteWorkspace: { // args
      input: NexusGenInputs['DeleteWorkspaceInput']; // DeleteWorkspaceInput!
    }
    login: { // args
      input: NexusGenInputs['LoginInput']; // LoginInput!
    }
    signup: { // args
      input: NexusGenInputs['SignupInput']; // SignupInput!
    }
    updateUser: { // args
      input: NexusGenInputs['UpdateUserInput']; // UpdateUserInput!
    }
    updateWorkspace: { // args
      input: NexusGenInputs['UpdateWorkspaceInput']; // UpdateWorkspaceInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthPayload" | "DeletePayload" | "Mutation" | "Query" | "User" | "Workspace";

export type NexusGenInputNames = "CreateWorkspaceInput" | "DeleteWorkspaceInput" | "LoginInput" | "SignupInput" | "UpdateUserInput" | "UpdateWorkspaceInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}