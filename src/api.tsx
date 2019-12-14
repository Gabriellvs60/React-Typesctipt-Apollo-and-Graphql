import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export enum _ModelMutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

/** Meta information about the query. */
export type _QueryMeta = {
   __typename?: '_QueryMeta',
  count: Scalars['Int'],
};

export type Client = Node & {
   __typename?: 'Client',
  address: Scalars['String'],
  age: Scalars['String'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  name: Scalars['String'],
  telephone: Scalars['String'],
  type: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type ClientFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ClientFilter>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ClientFilter>>,
  address?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>,
  age?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  age_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  age_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  age_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  age_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  age_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  age_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  age_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  age_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  age_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  age_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  age_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  age_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  age_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  telephone?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  telephone_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  telephone_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  telephone_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  telephone_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  telephone_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  telephone_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  telephone_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  telephone_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  telephone_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  telephone_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  telephone_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  telephone_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  telephone_not_ends_with?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  type_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  type_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  type_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  type_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  type_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  type_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  type_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  type_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  type_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  type_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  type_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export enum ClientOrderBy {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  AgeAsc = 'age_ASC',
  AgeDesc = 'age_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TelephoneAsc = 'telephone_ASC',
  TelephoneDesc = 'telephone_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ClientPreviousValues = {
   __typename?: 'ClientPreviousValues',
  address: Scalars['String'],
  age: Scalars['String'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  name: Scalars['String'],
  telephone: Scalars['String'],
  type: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type ClientSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ClientSubscriptionFilter>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ClientSubscriptionFilter>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ClientSubscriptionFilterNode>,
};

export type ClientSubscriptionFilterNode = {
  address?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>,
  age?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  age_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  age_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  age_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  age_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  age_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  age_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  age_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  age_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  age_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  age_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  age_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  age_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  age_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  telephone?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  telephone_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  telephone_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  telephone_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  telephone_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  telephone_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  telephone_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  telephone_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  telephone_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  telephone_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  telephone_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  telephone_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  telephone_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  telephone_not_ends_with?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  type_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  type_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  type_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  type_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  type_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  type_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  type_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  type_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  type_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  type_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  type_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type ClientSubscriptionPayload = {
   __typename?: 'ClientSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Client>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ClientPreviousValues>,
};

export type CreateClient = {
  address: Scalars['String'],
  age: Scalars['String'],
  name: Scalars['String'],
  telephone: Scalars['String'],
  type: Scalars['String'],
};

export type CreateFile = {
  name: Scalars['String'],
};


export type File = Node & {
   __typename?: 'File',
  contentType: Scalars['String'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  name: Scalars['String'],
  secret: Scalars['String'],
  size: Scalars['Int'],
  updatedAt: Scalars['DateTime'],
  url: Scalars['String'],
};

export type FileFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FileFilter>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FileFilter>>,
  contentType?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  contentType_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  contentType_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  contentType_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  contentType_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  contentType_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  contentType_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  contentType_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  contentType_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  contentType_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  contentType_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  contentType_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  contentType_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  contentType_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  secret?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  secret_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  secret_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  secret_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  secret_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  secret_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  secret_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  secret_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  secret_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  secret_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  secret_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  secret_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  secret_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  secret_not_ends_with?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>,
};

export enum FileOrderBy {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type FilePreviousValues = {
   __typename?: 'FilePreviousValues',
  contentType: Scalars['String'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  name: Scalars['String'],
  secret: Scalars['String'],
  size: Scalars['Int'],
  updatedAt: Scalars['DateTime'],
  url: Scalars['String'],
};

export type FileSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FileSubscriptionFilter>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FileSubscriptionFilter>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<FileSubscriptionFilterNode>,
};

export type FileSubscriptionFilterNode = {
  contentType?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  contentType_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  contentType_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  contentType_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  contentType_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  contentType_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  contentType_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  contentType_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  contentType_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  contentType_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  contentType_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  contentType_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  contentType_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  contentType_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  secret?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  secret_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  secret_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  secret_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  secret_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  secret_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  secret_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  secret_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  secret_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  secret_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  secret_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  secret_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  secret_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  secret_not_ends_with?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>,
};

export type FileSubscriptionPayload = {
   __typename?: 'FileSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<File>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<FilePreviousValues>,
};

export type InvokeFunctionInput = {
  name: Scalars['String'],
  input: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type InvokeFunctionPayload = {
   __typename?: 'InvokeFunctionPayload',
  result: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createClient?: Maybe<Client>,
  createFile?: Maybe<File>,
  updateClient?: Maybe<Client>,
  updateFile?: Maybe<File>,
  updateUser?: Maybe<User>,
  updateOrCreateClient?: Maybe<Client>,
  updateOrCreateFile?: Maybe<File>,
  updateOrCreateUser?: Maybe<User>,
  deleteClient?: Maybe<Client>,
  deleteFile?: Maybe<File>,
  deleteUser?: Maybe<User>,
  createUser?: Maybe<User>,
  invokeFunction?: Maybe<InvokeFunctionPayload>,
};


export type MutationCreateClientArgs = {
  address: Scalars['String'],
  age: Scalars['String'],
  name: Scalars['String'],
  telephone: Scalars['String'],
  type: Scalars['String']
};


export type MutationCreateFileArgs = {
  name: Scalars['String']
};


export type MutationUpdateClientArgs = {
  address?: Maybe<Scalars['String']>,
  age?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  telephone?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>
};


export type MutationUpdateFileArgs = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']
};


export type MutationUpdateOrCreateClientArgs = {
  update: UpdateClient,
  create: CreateClient
};


export type MutationUpdateOrCreateFileArgs = {
  update: UpdateFile,
  create: CreateFile
};


export type MutationUpdateOrCreateUserArgs = {
  update: UpdateUser
};


export type MutationDeleteClientArgs = {
  id: Scalars['ID']
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID']
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']
};


export type MutationInvokeFunctionArgs = {
  input: InvokeFunctionInput
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'],
};

export type Query = {
   __typename?: 'Query',
  allClients: Array<Client>,
  allFiles: Array<File>,
  allUsers: Array<User>,
  _allClientsMeta: _QueryMeta,
  _allFilesMeta: _QueryMeta,
  _allUsersMeta: _QueryMeta,
  Client?: Maybe<Client>,
  File?: Maybe<File>,
  User?: Maybe<User>,
  user?: Maybe<User>,
  /** Fetches an object given its ID */
  node?: Maybe<Node>,
};


export type QueryAllClientsArgs = {
  filter?: Maybe<ClientFilter>,
  orderBy?: Maybe<ClientOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllFilesArgs = {
  filter?: Maybe<FileFilter>,
  orderBy?: Maybe<FileOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllUsersArgs = {
  filter?: Maybe<UserFilter>,
  orderBy?: Maybe<UserOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllClientsMetaArgs = {
  filter?: Maybe<ClientFilter>,
  orderBy?: Maybe<ClientOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllFilesMetaArgs = {
  filter?: Maybe<FileFilter>,
  orderBy?: Maybe<FileOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllUsersMetaArgs = {
  filter?: Maybe<UserFilter>,
  orderBy?: Maybe<UserOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryClientArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryFileArgs = {
  id?: Maybe<Scalars['ID']>,
  secret?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type Subscription = {
   __typename?: 'Subscription',
  Client?: Maybe<ClientSubscriptionPayload>,
  File?: Maybe<FileSubscriptionPayload>,
  User?: Maybe<UserSubscriptionPayload>,
};


export type SubscriptionClientArgs = {
  filter?: Maybe<ClientSubscriptionFilter>
};


export type SubscriptionFileArgs = {
  filter?: Maybe<FileSubscriptionFilter>
};


export type SubscriptionUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>
};

export type UpdateClient = {
  address?: Maybe<Scalars['String']>,
  age?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  telephone?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type UpdateFile = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};

export type UpdateUser = {
  id: Scalars['ID'],
};

export type User = Node & {
   __typename?: 'User',
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  updatedAt: Scalars['DateTime'],
};

export type UserFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserFilter>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserFilter>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export enum UserOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserPreviousValues = {
   __typename?: 'UserPreviousValues',
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  updatedAt: Scalars['DateTime'],
};

export type UserSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserSubscriptionFilter>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserSubscriptionFilter>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserSubscriptionFilterNode>,
};

export type UserSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type UserSubscriptionPayload = {
   __typename?: 'UserSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type CreateClientMutationVariables = {
  name: Scalars['String'],
  age: Scalars['String'],
  telephone: Scalars['String'],
  address: Scalars['String'],
  type: Scalars['String']
};


export type CreateClientMutation = (
  { __typename?: 'Mutation' }
  & { createClient: Maybe<(
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name' | 'age'>
  )> }
);

export type DeleteClientMutationVariables = {
  id: Scalars['ID']
};


export type DeleteClientMutation = (
  { __typename?: 'Mutation' }
  & { deleteClient: Maybe<(
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name'>
  )> }
);

export type UpdateClientMutationVariables = {
  id: Scalars['ID'],
  name: Scalars['String'],
  age: Scalars['String'],
  telephone: Scalars['String'],
  address: Scalars['String'],
  type: Scalars['String']
};


export type UpdateClientMutation = (
  { __typename?: 'Mutation' }
  & { updateClient: Maybe<(
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name' | 'age' | 'telephone' | 'address' | 'type'>
  )> }
);

export type GetClientQueryVariables = {
  id: Scalars['ID']
};


export type GetClientQuery = (
  { __typename?: 'Query' }
  & { Client: Maybe<(
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name' | 'age' | 'telephone' | 'address' | 'type'>
  )> }
);

export type GetAllClientsQueryVariables = {};


export type GetAllClientsQuery = (
  { __typename?: 'Query' }
  & { allClients: Array<(
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name' | 'age' | 'telephone' | 'address' | 'type'>
  )> }
);


export const CreateClientDocument = gql`
    mutation createClient($name: String!, $age: String!, $telephone: String!, $address: String!, $type: String!) {
  createClient(name: $name, age: $age, telephone: $telephone, address: $address, type: $type) {
    id
    name
    age
  }
}
    `;
export type CreateClientMutationFn = ApolloReactCommon.MutationFunction<CreateClientMutation, CreateClientMutationVariables>;
export type CreateClientProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateClientMutation, CreateClientMutationVariables> | TChildProps;
export function withCreateClient<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateClientMutation,
  CreateClientMutationVariables,
  CreateClientProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateClientMutation, CreateClientMutationVariables, CreateClientProps<TChildProps>>(CreateClientDocument, {
      alias: 'createClient',
      ...operationOptions
    });
};

/**
 * __useCreateClientMutation__
 *
 * To run a mutation, you first call `useCreateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClientMutation, { data, loading, error }] = useCreateClientMutation({
 *   variables: {
 *      name: // value for 'name'
 *      age: // value for 'age'
 *      telephone: // value for 'telephone'
 *      address: // value for 'address'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateClientMutation, CreateClientMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateClientMutation, CreateClientMutationVariables>(CreateClientDocument, baseOptions);
      }
export type CreateClientMutationHookResult = ReturnType<typeof useCreateClientMutation>;
export type CreateClientMutationResult = ApolloReactCommon.MutationResult<CreateClientMutation>;
export type CreateClientMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateClientMutation, CreateClientMutationVariables>;
export const DeleteClientDocument = gql`
    mutation deleteClient($id: ID!) {
  deleteClient(id: $id) {
    id
    name
  }
}
    `;
export type DeleteClientMutationFn = ApolloReactCommon.MutationFunction<DeleteClientMutation, DeleteClientMutationVariables>;
export type DeleteClientProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteClientMutation, DeleteClientMutationVariables> | TChildProps;
export function withDeleteClient<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteClientMutation,
  DeleteClientMutationVariables,
  DeleteClientProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteClientMutation, DeleteClientMutationVariables, DeleteClientProps<TChildProps>>(DeleteClientDocument, {
      alias: 'deleteClient',
      ...operationOptions
    });
};

/**
 * __useDeleteClientMutation__
 *
 * To run a mutation, you first call `useDeleteClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClientMutation, { data, loading, error }] = useDeleteClientMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteClientMutation, DeleteClientMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteClientMutation, DeleteClientMutationVariables>(DeleteClientDocument, baseOptions);
      }
export type DeleteClientMutationHookResult = ReturnType<typeof useDeleteClientMutation>;
export type DeleteClientMutationResult = ApolloReactCommon.MutationResult<DeleteClientMutation>;
export type DeleteClientMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteClientMutation, DeleteClientMutationVariables>;
export const UpdateClientDocument = gql`
    mutation updateClient($id: ID!, $name: String!, $age: String!, $telephone: String!, $address: String!, $type: String!) {
  updateClient(id: $id, name: $name, age: $age, telephone: $telephone, address: $address, type: $type) {
    id
    name
    age
    telephone
    address
    type
  }
}
    `;
export type UpdateClientMutationFn = ApolloReactCommon.MutationFunction<UpdateClientMutation, UpdateClientMutationVariables>;
export type UpdateClientProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateClientMutation, UpdateClientMutationVariables> | TChildProps;
export function withUpdateClient<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateClientMutation,
  UpdateClientMutationVariables,
  UpdateClientProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateClientMutation, UpdateClientMutationVariables, UpdateClientProps<TChildProps>>(UpdateClientDocument, {
      alias: 'updateClient',
      ...operationOptions
    });
};

/**
 * __useUpdateClientMutation__
 *
 * To run a mutation, you first call `useUpdateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClientMutation, { data, loading, error }] = useUpdateClientMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      age: // value for 'age'
 *      telephone: // value for 'telephone'
 *      address: // value for 'address'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useUpdateClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateClientMutation, UpdateClientMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateClientMutation, UpdateClientMutationVariables>(UpdateClientDocument, baseOptions);
      }
export type UpdateClientMutationHookResult = ReturnType<typeof useUpdateClientMutation>;
export type UpdateClientMutationResult = ApolloReactCommon.MutationResult<UpdateClientMutation>;
export type UpdateClientMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateClientMutation, UpdateClientMutationVariables>;
export const GetClientDocument = gql`
    query getClient($id: ID!) {
  Client(id: $id) {
    id
    name
    age
    telephone
    address
    type
  }
}
    `;
export type GetClientProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetClientQuery, GetClientQueryVariables> | TChildProps;
export function withGetClient<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetClientQuery,
  GetClientQueryVariables,
  GetClientProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetClientQuery, GetClientQueryVariables, GetClientProps<TChildProps>>(GetClientDocument, {
      alias: 'getClient',
      ...operationOptions
    });
};

/**
 * __useGetClientQuery__
 *
 * To run a query within a React component, call `useGetClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetClientQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetClientQuery, GetClientQueryVariables>) {
        return ApolloReactHooks.useQuery<GetClientQuery, GetClientQueryVariables>(GetClientDocument, baseOptions);
      }
export function useGetClientLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetClientQuery, GetClientQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetClientQuery, GetClientQueryVariables>(GetClientDocument, baseOptions);
        }
export type GetClientQueryHookResult = ReturnType<typeof useGetClientQuery>;
export type GetClientLazyQueryHookResult = ReturnType<typeof useGetClientLazyQuery>;
export type GetClientQueryResult = ApolloReactCommon.QueryResult<GetClientQuery, GetClientQueryVariables>;
export const GetAllClientsDocument = gql`
    query getAllClients {
  allClients {
    id
    name
    age
    telephone
    address
    type
  }
}
    `;
export type GetAllClientsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetAllClientsQuery, GetAllClientsQueryVariables> | TChildProps;
export function withGetAllClients<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllClientsQuery,
  GetAllClientsQueryVariables,
  GetAllClientsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllClientsQuery, GetAllClientsQueryVariables, GetAllClientsProps<TChildProps>>(GetAllClientsDocument, {
      alias: 'getAllClients',
      ...operationOptions
    });
};

/**
 * __useGetAllClientsQuery__
 *
 * To run a query within a React component, call `useGetAllClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllClientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllClientsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllClientsQuery, GetAllClientsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllClientsQuery, GetAllClientsQueryVariables>(GetAllClientsDocument, baseOptions);
      }
export function useGetAllClientsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllClientsQuery, GetAllClientsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllClientsQuery, GetAllClientsQueryVariables>(GetAllClientsDocument, baseOptions);
        }
export type GetAllClientsQueryHookResult = ReturnType<typeof useGetAllClientsQuery>;
export type GetAllClientsLazyQueryHookResult = ReturnType<typeof useGetAllClientsLazyQuery>;
export type GetAllClientsQueryResult = ApolloReactCommon.QueryResult<GetAllClientsQuery, GetAllClientsQueryVariables>;