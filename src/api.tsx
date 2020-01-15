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

export type _QueryMeta = {
   __typename?: '_QueryMeta',
  count: Scalars['Int'],
};

export type Ad = Node & {
   __typename?: 'Ad',
  createdAt: Scalars['DateTime'],
  date: Scalars['String'],
  description: Scalars['String'],
  establishmentId: Scalars['String'],
  id: Scalars['ID'],
  imageUrl: Scalars['String'],
  price: Scalars['String'],
  qtdHirings: Scalars['String'],
  segment: Scalars['String'],
  title: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type AdFilter = {
  AND?: Maybe<Array<AdFilter>>,
  OR?: Maybe<Array<AdFilter>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  date?: Maybe<Scalars['String']>,
  date_not?: Maybe<Scalars['String']>,
  date_in?: Maybe<Array<Scalars['String']>>,
  date_not_in?: Maybe<Array<Scalars['String']>>,
  date_lt?: Maybe<Scalars['String']>,
  date_lte?: Maybe<Scalars['String']>,
  date_gt?: Maybe<Scalars['String']>,
  date_gte?: Maybe<Scalars['String']>,
  date_contains?: Maybe<Scalars['String']>,
  date_not_contains?: Maybe<Scalars['String']>,
  date_starts_with?: Maybe<Scalars['String']>,
  date_not_starts_with?: Maybe<Scalars['String']>,
  date_ends_with?: Maybe<Scalars['String']>,
  date_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  establishmentId?: Maybe<Scalars['String']>,
  establishmentId_not?: Maybe<Scalars['String']>,
  establishmentId_in?: Maybe<Array<Scalars['String']>>,
  establishmentId_not_in?: Maybe<Array<Scalars['String']>>,
  establishmentId_lt?: Maybe<Scalars['String']>,
  establishmentId_lte?: Maybe<Scalars['String']>,
  establishmentId_gt?: Maybe<Scalars['String']>,
  establishmentId_gte?: Maybe<Scalars['String']>,
  establishmentId_contains?: Maybe<Scalars['String']>,
  establishmentId_not_contains?: Maybe<Scalars['String']>,
  establishmentId_starts_with?: Maybe<Scalars['String']>,
  establishmentId_not_starts_with?: Maybe<Scalars['String']>,
  establishmentId_ends_with?: Maybe<Scalars['String']>,
  establishmentId_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  imageUrl?: Maybe<Scalars['String']>,
  imageUrl_not?: Maybe<Scalars['String']>,
  imageUrl_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_not_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_lt?: Maybe<Scalars['String']>,
  imageUrl_lte?: Maybe<Scalars['String']>,
  imageUrl_gt?: Maybe<Scalars['String']>,
  imageUrl_gte?: Maybe<Scalars['String']>,
  imageUrl_contains?: Maybe<Scalars['String']>,
  imageUrl_not_contains?: Maybe<Scalars['String']>,
  imageUrl_starts_with?: Maybe<Scalars['String']>,
  imageUrl_not_starts_with?: Maybe<Scalars['String']>,
  imageUrl_ends_with?: Maybe<Scalars['String']>,
  imageUrl_not_ends_with?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['String']>,
  price_not?: Maybe<Scalars['String']>,
  price_in?: Maybe<Array<Scalars['String']>>,
  price_not_in?: Maybe<Array<Scalars['String']>>,
  price_lt?: Maybe<Scalars['String']>,
  price_lte?: Maybe<Scalars['String']>,
  price_gt?: Maybe<Scalars['String']>,
  price_gte?: Maybe<Scalars['String']>,
  price_contains?: Maybe<Scalars['String']>,
  price_not_contains?: Maybe<Scalars['String']>,
  price_starts_with?: Maybe<Scalars['String']>,
  price_not_starts_with?: Maybe<Scalars['String']>,
  price_ends_with?: Maybe<Scalars['String']>,
  price_not_ends_with?: Maybe<Scalars['String']>,
  qtdHirings?: Maybe<Scalars['String']>,
  qtdHirings_not?: Maybe<Scalars['String']>,
  qtdHirings_in?: Maybe<Array<Scalars['String']>>,
  qtdHirings_not_in?: Maybe<Array<Scalars['String']>>,
  qtdHirings_lt?: Maybe<Scalars['String']>,
  qtdHirings_lte?: Maybe<Scalars['String']>,
  qtdHirings_gt?: Maybe<Scalars['String']>,
  qtdHirings_gte?: Maybe<Scalars['String']>,
  qtdHirings_contains?: Maybe<Scalars['String']>,
  qtdHirings_not_contains?: Maybe<Scalars['String']>,
  qtdHirings_starts_with?: Maybe<Scalars['String']>,
  qtdHirings_not_starts_with?: Maybe<Scalars['String']>,
  qtdHirings_ends_with?: Maybe<Scalars['String']>,
  qtdHirings_not_ends_with?: Maybe<Scalars['String']>,
  segment?: Maybe<Scalars['String']>,
  segment_not?: Maybe<Scalars['String']>,
  segment_in?: Maybe<Array<Scalars['String']>>,
  segment_not_in?: Maybe<Array<Scalars['String']>>,
  segment_lt?: Maybe<Scalars['String']>,
  segment_lte?: Maybe<Scalars['String']>,
  segment_gt?: Maybe<Scalars['String']>,
  segment_gte?: Maybe<Scalars['String']>,
  segment_contains?: Maybe<Scalars['String']>,
  segment_not_contains?: Maybe<Scalars['String']>,
  segment_starts_with?: Maybe<Scalars['String']>,
  segment_not_starts_with?: Maybe<Scalars['String']>,
  segment_ends_with?: Maybe<Scalars['String']>,
  segment_not_ends_with?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export enum AdOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EstablishmentIdAsc = 'establishmentId_ASC',
  EstablishmentIdDesc = 'establishmentId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageUrlAsc = 'imageUrl_ASC',
  ImageUrlDesc = 'imageUrl_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  QtdHiringsAsc = 'qtdHirings_ASC',
  QtdHiringsDesc = 'qtdHirings_DESC',
  SegmentAsc = 'segment_ASC',
  SegmentDesc = 'segment_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AdPreviousValues = {
   __typename?: 'AdPreviousValues',
  createdAt: Scalars['DateTime'],
  date: Scalars['String'],
  description: Scalars['String'],
  establishmentId: Scalars['String'],
  id: Scalars['ID'],
  imageUrl: Scalars['String'],
  price: Scalars['String'],
  qtdHirings: Scalars['String'],
  segment: Scalars['String'],
  title: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type AdSubscriptionFilter = {
  AND?: Maybe<Array<AdSubscriptionFilter>>,
  OR?: Maybe<Array<AdSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<AdSubscriptionFilterNode>,
};

export type AdSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  date?: Maybe<Scalars['String']>,
  date_not?: Maybe<Scalars['String']>,
  date_in?: Maybe<Array<Scalars['String']>>,
  date_not_in?: Maybe<Array<Scalars['String']>>,
  date_lt?: Maybe<Scalars['String']>,
  date_lte?: Maybe<Scalars['String']>,
  date_gt?: Maybe<Scalars['String']>,
  date_gte?: Maybe<Scalars['String']>,
  date_contains?: Maybe<Scalars['String']>,
  date_not_contains?: Maybe<Scalars['String']>,
  date_starts_with?: Maybe<Scalars['String']>,
  date_not_starts_with?: Maybe<Scalars['String']>,
  date_ends_with?: Maybe<Scalars['String']>,
  date_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  establishmentId?: Maybe<Scalars['String']>,
  establishmentId_not?: Maybe<Scalars['String']>,
  establishmentId_in?: Maybe<Array<Scalars['String']>>,
  establishmentId_not_in?: Maybe<Array<Scalars['String']>>,
  establishmentId_lt?: Maybe<Scalars['String']>,
  establishmentId_lte?: Maybe<Scalars['String']>,
  establishmentId_gt?: Maybe<Scalars['String']>,
  establishmentId_gte?: Maybe<Scalars['String']>,
  establishmentId_contains?: Maybe<Scalars['String']>,
  establishmentId_not_contains?: Maybe<Scalars['String']>,
  establishmentId_starts_with?: Maybe<Scalars['String']>,
  establishmentId_not_starts_with?: Maybe<Scalars['String']>,
  establishmentId_ends_with?: Maybe<Scalars['String']>,
  establishmentId_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  imageUrl?: Maybe<Scalars['String']>,
  imageUrl_not?: Maybe<Scalars['String']>,
  imageUrl_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_not_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_lt?: Maybe<Scalars['String']>,
  imageUrl_lte?: Maybe<Scalars['String']>,
  imageUrl_gt?: Maybe<Scalars['String']>,
  imageUrl_gte?: Maybe<Scalars['String']>,
  imageUrl_contains?: Maybe<Scalars['String']>,
  imageUrl_not_contains?: Maybe<Scalars['String']>,
  imageUrl_starts_with?: Maybe<Scalars['String']>,
  imageUrl_not_starts_with?: Maybe<Scalars['String']>,
  imageUrl_ends_with?: Maybe<Scalars['String']>,
  imageUrl_not_ends_with?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['String']>,
  price_not?: Maybe<Scalars['String']>,
  price_in?: Maybe<Array<Scalars['String']>>,
  price_not_in?: Maybe<Array<Scalars['String']>>,
  price_lt?: Maybe<Scalars['String']>,
  price_lte?: Maybe<Scalars['String']>,
  price_gt?: Maybe<Scalars['String']>,
  price_gte?: Maybe<Scalars['String']>,
  price_contains?: Maybe<Scalars['String']>,
  price_not_contains?: Maybe<Scalars['String']>,
  price_starts_with?: Maybe<Scalars['String']>,
  price_not_starts_with?: Maybe<Scalars['String']>,
  price_ends_with?: Maybe<Scalars['String']>,
  price_not_ends_with?: Maybe<Scalars['String']>,
  qtdHirings?: Maybe<Scalars['String']>,
  qtdHirings_not?: Maybe<Scalars['String']>,
  qtdHirings_in?: Maybe<Array<Scalars['String']>>,
  qtdHirings_not_in?: Maybe<Array<Scalars['String']>>,
  qtdHirings_lt?: Maybe<Scalars['String']>,
  qtdHirings_lte?: Maybe<Scalars['String']>,
  qtdHirings_gt?: Maybe<Scalars['String']>,
  qtdHirings_gte?: Maybe<Scalars['String']>,
  qtdHirings_contains?: Maybe<Scalars['String']>,
  qtdHirings_not_contains?: Maybe<Scalars['String']>,
  qtdHirings_starts_with?: Maybe<Scalars['String']>,
  qtdHirings_not_starts_with?: Maybe<Scalars['String']>,
  qtdHirings_ends_with?: Maybe<Scalars['String']>,
  qtdHirings_not_ends_with?: Maybe<Scalars['String']>,
  segment?: Maybe<Scalars['String']>,
  segment_not?: Maybe<Scalars['String']>,
  segment_in?: Maybe<Array<Scalars['String']>>,
  segment_not_in?: Maybe<Array<Scalars['String']>>,
  segment_lt?: Maybe<Scalars['String']>,
  segment_lte?: Maybe<Scalars['String']>,
  segment_gt?: Maybe<Scalars['String']>,
  segment_gte?: Maybe<Scalars['String']>,
  segment_contains?: Maybe<Scalars['String']>,
  segment_not_contains?: Maybe<Scalars['String']>,
  segment_starts_with?: Maybe<Scalars['String']>,
  segment_not_starts_with?: Maybe<Scalars['String']>,
  segment_ends_with?: Maybe<Scalars['String']>,
  segment_not_ends_with?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type AdSubscriptionPayload = {
   __typename?: 'AdSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Ad>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<AdPreviousValues>,
};

export type Advertiser = Node & {
   __typename?: 'Advertiser',
  address: Scalars['String'],
  averageAvaliation: Scalars['String'],
  createdAt: Scalars['DateTime'],
  description: Scalars['String'],
  establishmentName: Scalars['String'],
  id: Scalars['ID'],
  province: Scalars['String'],
  segment: Scalars['String'],
  telephone: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type AdvertiserFilter = {
  AND?: Maybe<Array<AdvertiserFilter>>,
  OR?: Maybe<Array<AdvertiserFilter>>,
  address?: Maybe<Scalars['String']>,
  address_not?: Maybe<Scalars['String']>,
  address_in?: Maybe<Array<Scalars['String']>>,
  address_not_in?: Maybe<Array<Scalars['String']>>,
  address_lt?: Maybe<Scalars['String']>,
  address_lte?: Maybe<Scalars['String']>,
  address_gt?: Maybe<Scalars['String']>,
  address_gte?: Maybe<Scalars['String']>,
  address_contains?: Maybe<Scalars['String']>,
  address_not_contains?: Maybe<Scalars['String']>,
  address_starts_with?: Maybe<Scalars['String']>,
  address_not_starts_with?: Maybe<Scalars['String']>,
  address_ends_with?: Maybe<Scalars['String']>,
  address_not_ends_with?: Maybe<Scalars['String']>,
  averageAvaliation?: Maybe<Scalars['String']>,
  averageAvaliation_not?: Maybe<Scalars['String']>,
  averageAvaliation_in?: Maybe<Array<Scalars['String']>>,
  averageAvaliation_not_in?: Maybe<Array<Scalars['String']>>,
  averageAvaliation_lt?: Maybe<Scalars['String']>,
  averageAvaliation_lte?: Maybe<Scalars['String']>,
  averageAvaliation_gt?: Maybe<Scalars['String']>,
  averageAvaliation_gte?: Maybe<Scalars['String']>,
  averageAvaliation_contains?: Maybe<Scalars['String']>,
  averageAvaliation_not_contains?: Maybe<Scalars['String']>,
  averageAvaliation_starts_with?: Maybe<Scalars['String']>,
  averageAvaliation_not_starts_with?: Maybe<Scalars['String']>,
  averageAvaliation_ends_with?: Maybe<Scalars['String']>,
  averageAvaliation_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  establishmentName?: Maybe<Scalars['String']>,
  establishmentName_not?: Maybe<Scalars['String']>,
  establishmentName_in?: Maybe<Array<Scalars['String']>>,
  establishmentName_not_in?: Maybe<Array<Scalars['String']>>,
  establishmentName_lt?: Maybe<Scalars['String']>,
  establishmentName_lte?: Maybe<Scalars['String']>,
  establishmentName_gt?: Maybe<Scalars['String']>,
  establishmentName_gte?: Maybe<Scalars['String']>,
  establishmentName_contains?: Maybe<Scalars['String']>,
  establishmentName_not_contains?: Maybe<Scalars['String']>,
  establishmentName_starts_with?: Maybe<Scalars['String']>,
  establishmentName_not_starts_with?: Maybe<Scalars['String']>,
  establishmentName_ends_with?: Maybe<Scalars['String']>,
  establishmentName_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  province?: Maybe<Scalars['String']>,
  province_not?: Maybe<Scalars['String']>,
  province_in?: Maybe<Array<Scalars['String']>>,
  province_not_in?: Maybe<Array<Scalars['String']>>,
  province_lt?: Maybe<Scalars['String']>,
  province_lte?: Maybe<Scalars['String']>,
  province_gt?: Maybe<Scalars['String']>,
  province_gte?: Maybe<Scalars['String']>,
  province_contains?: Maybe<Scalars['String']>,
  province_not_contains?: Maybe<Scalars['String']>,
  province_starts_with?: Maybe<Scalars['String']>,
  province_not_starts_with?: Maybe<Scalars['String']>,
  province_ends_with?: Maybe<Scalars['String']>,
  province_not_ends_with?: Maybe<Scalars['String']>,
  segment?: Maybe<Scalars['String']>,
  segment_not?: Maybe<Scalars['String']>,
  segment_in?: Maybe<Array<Scalars['String']>>,
  segment_not_in?: Maybe<Array<Scalars['String']>>,
  segment_lt?: Maybe<Scalars['String']>,
  segment_lte?: Maybe<Scalars['String']>,
  segment_gt?: Maybe<Scalars['String']>,
  segment_gte?: Maybe<Scalars['String']>,
  segment_contains?: Maybe<Scalars['String']>,
  segment_not_contains?: Maybe<Scalars['String']>,
  segment_starts_with?: Maybe<Scalars['String']>,
  segment_not_starts_with?: Maybe<Scalars['String']>,
  segment_ends_with?: Maybe<Scalars['String']>,
  segment_not_ends_with?: Maybe<Scalars['String']>,
  telephone?: Maybe<Scalars['String']>,
  telephone_not?: Maybe<Scalars['String']>,
  telephone_in?: Maybe<Array<Scalars['String']>>,
  telephone_not_in?: Maybe<Array<Scalars['String']>>,
  telephone_lt?: Maybe<Scalars['String']>,
  telephone_lte?: Maybe<Scalars['String']>,
  telephone_gt?: Maybe<Scalars['String']>,
  telephone_gte?: Maybe<Scalars['String']>,
  telephone_contains?: Maybe<Scalars['String']>,
  telephone_not_contains?: Maybe<Scalars['String']>,
  telephone_starts_with?: Maybe<Scalars['String']>,
  telephone_not_starts_with?: Maybe<Scalars['String']>,
  telephone_ends_with?: Maybe<Scalars['String']>,
  telephone_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export enum AdvertiserOrderBy {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  AverageAvaliationAsc = 'averageAvaliation_ASC',
  AverageAvaliationDesc = 'averageAvaliation_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EstablishmentNameAsc = 'establishmentName_ASC',
  EstablishmentNameDesc = 'establishmentName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProvinceAsc = 'province_ASC',
  ProvinceDesc = 'province_DESC',
  SegmentAsc = 'segment_ASC',
  SegmentDesc = 'segment_DESC',
  TelephoneAsc = 'telephone_ASC',
  TelephoneDesc = 'telephone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AdvertiserPreviousValues = {
   __typename?: 'AdvertiserPreviousValues',
  address: Scalars['String'],
  averageAvaliation: Scalars['String'],
  createdAt: Scalars['DateTime'],
  description: Scalars['String'],
  establishmentName: Scalars['String'],
  id: Scalars['ID'],
  province: Scalars['String'],
  segment: Scalars['String'],
  telephone: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type AdvertiserSubscriptionFilter = {
  AND?: Maybe<Array<AdvertiserSubscriptionFilter>>,
  OR?: Maybe<Array<AdvertiserSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<AdvertiserSubscriptionFilterNode>,
};

export type AdvertiserSubscriptionFilterNode = {
  address?: Maybe<Scalars['String']>,
  address_not?: Maybe<Scalars['String']>,
  address_in?: Maybe<Array<Scalars['String']>>,
  address_not_in?: Maybe<Array<Scalars['String']>>,
  address_lt?: Maybe<Scalars['String']>,
  address_lte?: Maybe<Scalars['String']>,
  address_gt?: Maybe<Scalars['String']>,
  address_gte?: Maybe<Scalars['String']>,
  address_contains?: Maybe<Scalars['String']>,
  address_not_contains?: Maybe<Scalars['String']>,
  address_starts_with?: Maybe<Scalars['String']>,
  address_not_starts_with?: Maybe<Scalars['String']>,
  address_ends_with?: Maybe<Scalars['String']>,
  address_not_ends_with?: Maybe<Scalars['String']>,
  averageAvaliation?: Maybe<Scalars['String']>,
  averageAvaliation_not?: Maybe<Scalars['String']>,
  averageAvaliation_in?: Maybe<Array<Scalars['String']>>,
  averageAvaliation_not_in?: Maybe<Array<Scalars['String']>>,
  averageAvaliation_lt?: Maybe<Scalars['String']>,
  averageAvaliation_lte?: Maybe<Scalars['String']>,
  averageAvaliation_gt?: Maybe<Scalars['String']>,
  averageAvaliation_gte?: Maybe<Scalars['String']>,
  averageAvaliation_contains?: Maybe<Scalars['String']>,
  averageAvaliation_not_contains?: Maybe<Scalars['String']>,
  averageAvaliation_starts_with?: Maybe<Scalars['String']>,
  averageAvaliation_not_starts_with?: Maybe<Scalars['String']>,
  averageAvaliation_ends_with?: Maybe<Scalars['String']>,
  averageAvaliation_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  establishmentName?: Maybe<Scalars['String']>,
  establishmentName_not?: Maybe<Scalars['String']>,
  establishmentName_in?: Maybe<Array<Scalars['String']>>,
  establishmentName_not_in?: Maybe<Array<Scalars['String']>>,
  establishmentName_lt?: Maybe<Scalars['String']>,
  establishmentName_lte?: Maybe<Scalars['String']>,
  establishmentName_gt?: Maybe<Scalars['String']>,
  establishmentName_gte?: Maybe<Scalars['String']>,
  establishmentName_contains?: Maybe<Scalars['String']>,
  establishmentName_not_contains?: Maybe<Scalars['String']>,
  establishmentName_starts_with?: Maybe<Scalars['String']>,
  establishmentName_not_starts_with?: Maybe<Scalars['String']>,
  establishmentName_ends_with?: Maybe<Scalars['String']>,
  establishmentName_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  province?: Maybe<Scalars['String']>,
  province_not?: Maybe<Scalars['String']>,
  province_in?: Maybe<Array<Scalars['String']>>,
  province_not_in?: Maybe<Array<Scalars['String']>>,
  province_lt?: Maybe<Scalars['String']>,
  province_lte?: Maybe<Scalars['String']>,
  province_gt?: Maybe<Scalars['String']>,
  province_gte?: Maybe<Scalars['String']>,
  province_contains?: Maybe<Scalars['String']>,
  province_not_contains?: Maybe<Scalars['String']>,
  province_starts_with?: Maybe<Scalars['String']>,
  province_not_starts_with?: Maybe<Scalars['String']>,
  province_ends_with?: Maybe<Scalars['String']>,
  province_not_ends_with?: Maybe<Scalars['String']>,
  segment?: Maybe<Scalars['String']>,
  segment_not?: Maybe<Scalars['String']>,
  segment_in?: Maybe<Array<Scalars['String']>>,
  segment_not_in?: Maybe<Array<Scalars['String']>>,
  segment_lt?: Maybe<Scalars['String']>,
  segment_lte?: Maybe<Scalars['String']>,
  segment_gt?: Maybe<Scalars['String']>,
  segment_gte?: Maybe<Scalars['String']>,
  segment_contains?: Maybe<Scalars['String']>,
  segment_not_contains?: Maybe<Scalars['String']>,
  segment_starts_with?: Maybe<Scalars['String']>,
  segment_not_starts_with?: Maybe<Scalars['String']>,
  segment_ends_with?: Maybe<Scalars['String']>,
  segment_not_ends_with?: Maybe<Scalars['String']>,
  telephone?: Maybe<Scalars['String']>,
  telephone_not?: Maybe<Scalars['String']>,
  telephone_in?: Maybe<Array<Scalars['String']>>,
  telephone_not_in?: Maybe<Array<Scalars['String']>>,
  telephone_lt?: Maybe<Scalars['String']>,
  telephone_lte?: Maybe<Scalars['String']>,
  telephone_gt?: Maybe<Scalars['String']>,
  telephone_gte?: Maybe<Scalars['String']>,
  telephone_contains?: Maybe<Scalars['String']>,
  telephone_not_contains?: Maybe<Scalars['String']>,
  telephone_starts_with?: Maybe<Scalars['String']>,
  telephone_not_starts_with?: Maybe<Scalars['String']>,
  telephone_ends_with?: Maybe<Scalars['String']>,
  telephone_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type AdvertiserSubscriptionPayload = {
   __typename?: 'AdvertiserSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Advertiser>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<AdvertiserPreviousValues>,
};

export type Client = Node & {
   __typename?: 'Client',
  age: Scalars['String'],
  averageAvaliation: Scalars['String'],
  cpf: Scalars['String'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  name: Scalars['String'],
  qtdHirings: Scalars['String'],
  telephone: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type ClientFilter = {
  AND?: Maybe<Array<ClientFilter>>,
  OR?: Maybe<Array<ClientFilter>>,
  age?: Maybe<Scalars['String']>,
  age_not?: Maybe<Scalars['String']>,
  age_in?: Maybe<Array<Scalars['String']>>,
  age_not_in?: Maybe<Array<Scalars['String']>>,
  age_lt?: Maybe<Scalars['String']>,
  age_lte?: Maybe<Scalars['String']>,
  age_gt?: Maybe<Scalars['String']>,
  age_gte?: Maybe<Scalars['String']>,
  age_contains?: Maybe<Scalars['String']>,
  age_not_contains?: Maybe<Scalars['String']>,
  age_starts_with?: Maybe<Scalars['String']>,
  age_not_starts_with?: Maybe<Scalars['String']>,
  age_ends_with?: Maybe<Scalars['String']>,
  age_not_ends_with?: Maybe<Scalars['String']>,
  averageAvaliation?: Maybe<Scalars['String']>,
  averageAvaliation_not?: Maybe<Scalars['String']>,
  averageAvaliation_in?: Maybe<Array<Scalars['String']>>,
  averageAvaliation_not_in?: Maybe<Array<Scalars['String']>>,
  averageAvaliation_lt?: Maybe<Scalars['String']>,
  averageAvaliation_lte?: Maybe<Scalars['String']>,
  averageAvaliation_gt?: Maybe<Scalars['String']>,
  averageAvaliation_gte?: Maybe<Scalars['String']>,
  averageAvaliation_contains?: Maybe<Scalars['String']>,
  averageAvaliation_not_contains?: Maybe<Scalars['String']>,
  averageAvaliation_starts_with?: Maybe<Scalars['String']>,
  averageAvaliation_not_starts_with?: Maybe<Scalars['String']>,
  averageAvaliation_ends_with?: Maybe<Scalars['String']>,
  averageAvaliation_not_ends_with?: Maybe<Scalars['String']>,
  cpf?: Maybe<Scalars['String']>,
  cpf_not?: Maybe<Scalars['String']>,
  cpf_in?: Maybe<Array<Scalars['String']>>,
  cpf_not_in?: Maybe<Array<Scalars['String']>>,
  cpf_lt?: Maybe<Scalars['String']>,
  cpf_lte?: Maybe<Scalars['String']>,
  cpf_gt?: Maybe<Scalars['String']>,
  cpf_gte?: Maybe<Scalars['String']>,
  cpf_contains?: Maybe<Scalars['String']>,
  cpf_not_contains?: Maybe<Scalars['String']>,
  cpf_starts_with?: Maybe<Scalars['String']>,
  cpf_not_starts_with?: Maybe<Scalars['String']>,
  cpf_ends_with?: Maybe<Scalars['String']>,
  cpf_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  qtdHirings?: Maybe<Scalars['String']>,
  qtdHirings_not?: Maybe<Scalars['String']>,
  qtdHirings_in?: Maybe<Array<Scalars['String']>>,
  qtdHirings_not_in?: Maybe<Array<Scalars['String']>>,
  qtdHirings_lt?: Maybe<Scalars['String']>,
  qtdHirings_lte?: Maybe<Scalars['String']>,
  qtdHirings_gt?: Maybe<Scalars['String']>,
  qtdHirings_gte?: Maybe<Scalars['String']>,
  qtdHirings_contains?: Maybe<Scalars['String']>,
  qtdHirings_not_contains?: Maybe<Scalars['String']>,
  qtdHirings_starts_with?: Maybe<Scalars['String']>,
  qtdHirings_not_starts_with?: Maybe<Scalars['String']>,
  qtdHirings_ends_with?: Maybe<Scalars['String']>,
  qtdHirings_not_ends_with?: Maybe<Scalars['String']>,
  telephone?: Maybe<Scalars['String']>,
  telephone_not?: Maybe<Scalars['String']>,
  telephone_in?: Maybe<Array<Scalars['String']>>,
  telephone_not_in?: Maybe<Array<Scalars['String']>>,
  telephone_lt?: Maybe<Scalars['String']>,
  telephone_lte?: Maybe<Scalars['String']>,
  telephone_gt?: Maybe<Scalars['String']>,
  telephone_gte?: Maybe<Scalars['String']>,
  telephone_contains?: Maybe<Scalars['String']>,
  telephone_not_contains?: Maybe<Scalars['String']>,
  telephone_starts_with?: Maybe<Scalars['String']>,
  telephone_not_starts_with?: Maybe<Scalars['String']>,
  telephone_ends_with?: Maybe<Scalars['String']>,
  telephone_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type ClientHistory = Node & {
   __typename?: 'ClientHistory',
  clientId: Scalars['String'],
  createdAt: Scalars['DateTime'],
  hiringId: Scalars['String'],
  id: Scalars['ID'],
  updatedAt: Scalars['DateTime'],
};

export type ClientHistoryFilter = {
  AND?: Maybe<Array<ClientHistoryFilter>>,
  OR?: Maybe<Array<ClientHistoryFilter>>,
  clientId?: Maybe<Scalars['String']>,
  clientId_not?: Maybe<Scalars['String']>,
  clientId_in?: Maybe<Array<Scalars['String']>>,
  clientId_not_in?: Maybe<Array<Scalars['String']>>,
  clientId_lt?: Maybe<Scalars['String']>,
  clientId_lte?: Maybe<Scalars['String']>,
  clientId_gt?: Maybe<Scalars['String']>,
  clientId_gte?: Maybe<Scalars['String']>,
  clientId_contains?: Maybe<Scalars['String']>,
  clientId_not_contains?: Maybe<Scalars['String']>,
  clientId_starts_with?: Maybe<Scalars['String']>,
  clientId_not_starts_with?: Maybe<Scalars['String']>,
  clientId_ends_with?: Maybe<Scalars['String']>,
  clientId_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  hiringId?: Maybe<Scalars['String']>,
  hiringId_not?: Maybe<Scalars['String']>,
  hiringId_in?: Maybe<Array<Scalars['String']>>,
  hiringId_not_in?: Maybe<Array<Scalars['String']>>,
  hiringId_lt?: Maybe<Scalars['String']>,
  hiringId_lte?: Maybe<Scalars['String']>,
  hiringId_gt?: Maybe<Scalars['String']>,
  hiringId_gte?: Maybe<Scalars['String']>,
  hiringId_contains?: Maybe<Scalars['String']>,
  hiringId_not_contains?: Maybe<Scalars['String']>,
  hiringId_starts_with?: Maybe<Scalars['String']>,
  hiringId_not_starts_with?: Maybe<Scalars['String']>,
  hiringId_ends_with?: Maybe<Scalars['String']>,
  hiringId_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export enum ClientHistoryOrderBy {
  ClientIdAsc = 'clientId_ASC',
  ClientIdDesc = 'clientId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HiringIdAsc = 'hiringId_ASC',
  HiringIdDesc = 'hiringId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ClientHistoryPreviousValues = {
   __typename?: 'ClientHistoryPreviousValues',
  clientId: Scalars['String'],
  createdAt: Scalars['DateTime'],
  hiringId: Scalars['String'],
  id: Scalars['ID'],
  updatedAt: Scalars['DateTime'],
};

export type ClientHistorySubscriptionFilter = {
  AND?: Maybe<Array<ClientHistorySubscriptionFilter>>,
  OR?: Maybe<Array<ClientHistorySubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ClientHistorySubscriptionFilterNode>,
};

export type ClientHistorySubscriptionFilterNode = {
  clientId?: Maybe<Scalars['String']>,
  clientId_not?: Maybe<Scalars['String']>,
  clientId_in?: Maybe<Array<Scalars['String']>>,
  clientId_not_in?: Maybe<Array<Scalars['String']>>,
  clientId_lt?: Maybe<Scalars['String']>,
  clientId_lte?: Maybe<Scalars['String']>,
  clientId_gt?: Maybe<Scalars['String']>,
  clientId_gte?: Maybe<Scalars['String']>,
  clientId_contains?: Maybe<Scalars['String']>,
  clientId_not_contains?: Maybe<Scalars['String']>,
  clientId_starts_with?: Maybe<Scalars['String']>,
  clientId_not_starts_with?: Maybe<Scalars['String']>,
  clientId_ends_with?: Maybe<Scalars['String']>,
  clientId_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  hiringId?: Maybe<Scalars['String']>,
  hiringId_not?: Maybe<Scalars['String']>,
  hiringId_in?: Maybe<Array<Scalars['String']>>,
  hiringId_not_in?: Maybe<Array<Scalars['String']>>,
  hiringId_lt?: Maybe<Scalars['String']>,
  hiringId_lte?: Maybe<Scalars['String']>,
  hiringId_gt?: Maybe<Scalars['String']>,
  hiringId_gte?: Maybe<Scalars['String']>,
  hiringId_contains?: Maybe<Scalars['String']>,
  hiringId_not_contains?: Maybe<Scalars['String']>,
  hiringId_starts_with?: Maybe<Scalars['String']>,
  hiringId_not_starts_with?: Maybe<Scalars['String']>,
  hiringId_ends_with?: Maybe<Scalars['String']>,
  hiringId_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type ClientHistorySubscriptionPayload = {
   __typename?: 'ClientHistorySubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<ClientHistory>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ClientHistoryPreviousValues>,
};

export enum ClientOrderBy {
  AgeAsc = 'age_ASC',
  AgeDesc = 'age_DESC',
  AverageAvaliationAsc = 'averageAvaliation_ASC',
  AverageAvaliationDesc = 'averageAvaliation_DESC',
  CpfAsc = 'cpf_ASC',
  CpfDesc = 'cpf_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  QtdHiringsAsc = 'qtdHirings_ASC',
  QtdHiringsDesc = 'qtdHirings_DESC',
  TelephoneAsc = 'telephone_ASC',
  TelephoneDesc = 'telephone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ClientPreviousValues = {
   __typename?: 'ClientPreviousValues',
  age: Scalars['String'],
  averageAvaliation: Scalars['String'],
  cpf: Scalars['String'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  name: Scalars['String'],
  qtdHirings: Scalars['String'],
  telephone: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type ClientSubscriptionFilter = {
  AND?: Maybe<Array<ClientSubscriptionFilter>>,
  OR?: Maybe<Array<ClientSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ClientSubscriptionFilterNode>,
};

export type ClientSubscriptionFilterNode = {
  age?: Maybe<Scalars['String']>,
  age_not?: Maybe<Scalars['String']>,
  age_in?: Maybe<Array<Scalars['String']>>,
  age_not_in?: Maybe<Array<Scalars['String']>>,
  age_lt?: Maybe<Scalars['String']>,
  age_lte?: Maybe<Scalars['String']>,
  age_gt?: Maybe<Scalars['String']>,
  age_gte?: Maybe<Scalars['String']>,
  age_contains?: Maybe<Scalars['String']>,
  age_not_contains?: Maybe<Scalars['String']>,
  age_starts_with?: Maybe<Scalars['String']>,
  age_not_starts_with?: Maybe<Scalars['String']>,
  age_ends_with?: Maybe<Scalars['String']>,
  age_not_ends_with?: Maybe<Scalars['String']>,
  averageAvaliation?: Maybe<Scalars['String']>,
  averageAvaliation_not?: Maybe<Scalars['String']>,
  averageAvaliation_in?: Maybe<Array<Scalars['String']>>,
  averageAvaliation_not_in?: Maybe<Array<Scalars['String']>>,
  averageAvaliation_lt?: Maybe<Scalars['String']>,
  averageAvaliation_lte?: Maybe<Scalars['String']>,
  averageAvaliation_gt?: Maybe<Scalars['String']>,
  averageAvaliation_gte?: Maybe<Scalars['String']>,
  averageAvaliation_contains?: Maybe<Scalars['String']>,
  averageAvaliation_not_contains?: Maybe<Scalars['String']>,
  averageAvaliation_starts_with?: Maybe<Scalars['String']>,
  averageAvaliation_not_starts_with?: Maybe<Scalars['String']>,
  averageAvaliation_ends_with?: Maybe<Scalars['String']>,
  averageAvaliation_not_ends_with?: Maybe<Scalars['String']>,
  cpf?: Maybe<Scalars['String']>,
  cpf_not?: Maybe<Scalars['String']>,
  cpf_in?: Maybe<Array<Scalars['String']>>,
  cpf_not_in?: Maybe<Array<Scalars['String']>>,
  cpf_lt?: Maybe<Scalars['String']>,
  cpf_lte?: Maybe<Scalars['String']>,
  cpf_gt?: Maybe<Scalars['String']>,
  cpf_gte?: Maybe<Scalars['String']>,
  cpf_contains?: Maybe<Scalars['String']>,
  cpf_not_contains?: Maybe<Scalars['String']>,
  cpf_starts_with?: Maybe<Scalars['String']>,
  cpf_not_starts_with?: Maybe<Scalars['String']>,
  cpf_ends_with?: Maybe<Scalars['String']>,
  cpf_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  qtdHirings?: Maybe<Scalars['String']>,
  qtdHirings_not?: Maybe<Scalars['String']>,
  qtdHirings_in?: Maybe<Array<Scalars['String']>>,
  qtdHirings_not_in?: Maybe<Array<Scalars['String']>>,
  qtdHirings_lt?: Maybe<Scalars['String']>,
  qtdHirings_lte?: Maybe<Scalars['String']>,
  qtdHirings_gt?: Maybe<Scalars['String']>,
  qtdHirings_gte?: Maybe<Scalars['String']>,
  qtdHirings_contains?: Maybe<Scalars['String']>,
  qtdHirings_not_contains?: Maybe<Scalars['String']>,
  qtdHirings_starts_with?: Maybe<Scalars['String']>,
  qtdHirings_not_starts_with?: Maybe<Scalars['String']>,
  qtdHirings_ends_with?: Maybe<Scalars['String']>,
  qtdHirings_not_ends_with?: Maybe<Scalars['String']>,
  telephone?: Maybe<Scalars['String']>,
  telephone_not?: Maybe<Scalars['String']>,
  telephone_in?: Maybe<Array<Scalars['String']>>,
  telephone_not_in?: Maybe<Array<Scalars['String']>>,
  telephone_lt?: Maybe<Scalars['String']>,
  telephone_lte?: Maybe<Scalars['String']>,
  telephone_gt?: Maybe<Scalars['String']>,
  telephone_gte?: Maybe<Scalars['String']>,
  telephone_contains?: Maybe<Scalars['String']>,
  telephone_not_contains?: Maybe<Scalars['String']>,
  telephone_starts_with?: Maybe<Scalars['String']>,
  telephone_not_starts_with?: Maybe<Scalars['String']>,
  telephone_ends_with?: Maybe<Scalars['String']>,
  telephone_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type ClientSubscriptionPayload = {
   __typename?: 'ClientSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Client>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ClientPreviousValues>,
};

export type CreateAd = {
  date: Scalars['String'],
  description: Scalars['String'],
  establishmentId: Scalars['String'],
  imageUrl: Scalars['String'],
  price: Scalars['String'],
  qtdHirings: Scalars['String'],
  segment: Scalars['String'],
  title: Scalars['String'],
};

export type CreateAdvertiser = {
  address: Scalars['String'],
  averageAvaliation: Scalars['String'],
  description: Scalars['String'],
  establishmentName: Scalars['String'],
  province: Scalars['String'],
  segment: Scalars['String'],
  telephone: Scalars['String'],
};

export type CreateClient = {
  age: Scalars['String'],
  averageAvaliation: Scalars['String'],
  cpf: Scalars['String'],
  name: Scalars['String'],
  qtdHirings: Scalars['String'],
  telephone: Scalars['String'],
};

export type CreateClientHistory = {
  clientId: Scalars['String'],
  hiringId: Scalars['String'],
};

export type CreateFile = {
  name: Scalars['String'],
};

export type CreateHiring = {
  adId: Scalars['String'],
  advertiserId: Scalars['String'],
  clientId: Scalars['String'],
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
  AND?: Maybe<Array<FileFilter>>,
  OR?: Maybe<Array<FileFilter>>,
  contentType?: Maybe<Scalars['String']>,
  contentType_not?: Maybe<Scalars['String']>,
  contentType_in?: Maybe<Array<Scalars['String']>>,
  contentType_not_in?: Maybe<Array<Scalars['String']>>,
  contentType_lt?: Maybe<Scalars['String']>,
  contentType_lte?: Maybe<Scalars['String']>,
  contentType_gt?: Maybe<Scalars['String']>,
  contentType_gte?: Maybe<Scalars['String']>,
  contentType_contains?: Maybe<Scalars['String']>,
  contentType_not_contains?: Maybe<Scalars['String']>,
  contentType_starts_with?: Maybe<Scalars['String']>,
  contentType_not_starts_with?: Maybe<Scalars['String']>,
  contentType_ends_with?: Maybe<Scalars['String']>,
  contentType_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  secret?: Maybe<Scalars['String']>,
  secret_not?: Maybe<Scalars['String']>,
  secret_in?: Maybe<Array<Scalars['String']>>,
  secret_not_in?: Maybe<Array<Scalars['String']>>,
  secret_lt?: Maybe<Scalars['String']>,
  secret_lte?: Maybe<Scalars['String']>,
  secret_gt?: Maybe<Scalars['String']>,
  secret_gte?: Maybe<Scalars['String']>,
  secret_contains?: Maybe<Scalars['String']>,
  secret_not_contains?: Maybe<Scalars['String']>,
  secret_starts_with?: Maybe<Scalars['String']>,
  secret_not_starts_with?: Maybe<Scalars['String']>,
  secret_ends_with?: Maybe<Scalars['String']>,
  secret_not_ends_with?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  size_not?: Maybe<Scalars['Int']>,
  size_in?: Maybe<Array<Scalars['Int']>>,
  size_not_in?: Maybe<Array<Scalars['Int']>>,
  size_lt?: Maybe<Scalars['Int']>,
  size_lte?: Maybe<Scalars['Int']>,
  size_gt?: Maybe<Scalars['Int']>,
  size_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
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
  AND?: Maybe<Array<FileSubscriptionFilter>>,
  OR?: Maybe<Array<FileSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<FileSubscriptionFilterNode>,
};

export type FileSubscriptionFilterNode = {
  contentType?: Maybe<Scalars['String']>,
  contentType_not?: Maybe<Scalars['String']>,
  contentType_in?: Maybe<Array<Scalars['String']>>,
  contentType_not_in?: Maybe<Array<Scalars['String']>>,
  contentType_lt?: Maybe<Scalars['String']>,
  contentType_lte?: Maybe<Scalars['String']>,
  contentType_gt?: Maybe<Scalars['String']>,
  contentType_gte?: Maybe<Scalars['String']>,
  contentType_contains?: Maybe<Scalars['String']>,
  contentType_not_contains?: Maybe<Scalars['String']>,
  contentType_starts_with?: Maybe<Scalars['String']>,
  contentType_not_starts_with?: Maybe<Scalars['String']>,
  contentType_ends_with?: Maybe<Scalars['String']>,
  contentType_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  secret?: Maybe<Scalars['String']>,
  secret_not?: Maybe<Scalars['String']>,
  secret_in?: Maybe<Array<Scalars['String']>>,
  secret_not_in?: Maybe<Array<Scalars['String']>>,
  secret_lt?: Maybe<Scalars['String']>,
  secret_lte?: Maybe<Scalars['String']>,
  secret_gt?: Maybe<Scalars['String']>,
  secret_gte?: Maybe<Scalars['String']>,
  secret_contains?: Maybe<Scalars['String']>,
  secret_not_contains?: Maybe<Scalars['String']>,
  secret_starts_with?: Maybe<Scalars['String']>,
  secret_not_starts_with?: Maybe<Scalars['String']>,
  secret_ends_with?: Maybe<Scalars['String']>,
  secret_not_ends_with?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  size_not?: Maybe<Scalars['Int']>,
  size_in?: Maybe<Array<Scalars['Int']>>,
  size_not_in?: Maybe<Array<Scalars['Int']>>,
  size_lt?: Maybe<Scalars['Int']>,
  size_lte?: Maybe<Scalars['Int']>,
  size_gt?: Maybe<Scalars['Int']>,
  size_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
};

export type FileSubscriptionPayload = {
   __typename?: 'FileSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<File>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<FilePreviousValues>,
};

export type Hiring = Node & {
   __typename?: 'Hiring',
  adId: Scalars['String'],
  advertiserId: Scalars['String'],
  clientId: Scalars['String'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  updatedAt: Scalars['DateTime'],
};

export type HiringFilter = {
  AND?: Maybe<Array<HiringFilter>>,
  OR?: Maybe<Array<HiringFilter>>,
  adId?: Maybe<Scalars['String']>,
  adId_not?: Maybe<Scalars['String']>,
  adId_in?: Maybe<Array<Scalars['String']>>,
  adId_not_in?: Maybe<Array<Scalars['String']>>,
  adId_lt?: Maybe<Scalars['String']>,
  adId_lte?: Maybe<Scalars['String']>,
  adId_gt?: Maybe<Scalars['String']>,
  adId_gte?: Maybe<Scalars['String']>,
  adId_contains?: Maybe<Scalars['String']>,
  adId_not_contains?: Maybe<Scalars['String']>,
  adId_starts_with?: Maybe<Scalars['String']>,
  adId_not_starts_with?: Maybe<Scalars['String']>,
  adId_ends_with?: Maybe<Scalars['String']>,
  adId_not_ends_with?: Maybe<Scalars['String']>,
  advertiserId?: Maybe<Scalars['String']>,
  advertiserId_not?: Maybe<Scalars['String']>,
  advertiserId_in?: Maybe<Array<Scalars['String']>>,
  advertiserId_not_in?: Maybe<Array<Scalars['String']>>,
  advertiserId_lt?: Maybe<Scalars['String']>,
  advertiserId_lte?: Maybe<Scalars['String']>,
  advertiserId_gt?: Maybe<Scalars['String']>,
  advertiserId_gte?: Maybe<Scalars['String']>,
  advertiserId_contains?: Maybe<Scalars['String']>,
  advertiserId_not_contains?: Maybe<Scalars['String']>,
  advertiserId_starts_with?: Maybe<Scalars['String']>,
  advertiserId_not_starts_with?: Maybe<Scalars['String']>,
  advertiserId_ends_with?: Maybe<Scalars['String']>,
  advertiserId_not_ends_with?: Maybe<Scalars['String']>,
  clientId?: Maybe<Scalars['String']>,
  clientId_not?: Maybe<Scalars['String']>,
  clientId_in?: Maybe<Array<Scalars['String']>>,
  clientId_not_in?: Maybe<Array<Scalars['String']>>,
  clientId_lt?: Maybe<Scalars['String']>,
  clientId_lte?: Maybe<Scalars['String']>,
  clientId_gt?: Maybe<Scalars['String']>,
  clientId_gte?: Maybe<Scalars['String']>,
  clientId_contains?: Maybe<Scalars['String']>,
  clientId_not_contains?: Maybe<Scalars['String']>,
  clientId_starts_with?: Maybe<Scalars['String']>,
  clientId_not_starts_with?: Maybe<Scalars['String']>,
  clientId_ends_with?: Maybe<Scalars['String']>,
  clientId_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export enum HiringOrderBy {
  AdIdAsc = 'adId_ASC',
  AdIdDesc = 'adId_DESC',
  AdvertiserIdAsc = 'advertiserId_ASC',
  AdvertiserIdDesc = 'advertiserId_DESC',
  ClientIdAsc = 'clientId_ASC',
  ClientIdDesc = 'clientId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type HiringPreviousValues = {
   __typename?: 'HiringPreviousValues',
  adId: Scalars['String'],
  advertiserId: Scalars['String'],
  clientId: Scalars['String'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  updatedAt: Scalars['DateTime'],
};

export type HiringSubscriptionFilter = {
  AND?: Maybe<Array<HiringSubscriptionFilter>>,
  OR?: Maybe<Array<HiringSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<HiringSubscriptionFilterNode>,
};

export type HiringSubscriptionFilterNode = {
  adId?: Maybe<Scalars['String']>,
  adId_not?: Maybe<Scalars['String']>,
  adId_in?: Maybe<Array<Scalars['String']>>,
  adId_not_in?: Maybe<Array<Scalars['String']>>,
  adId_lt?: Maybe<Scalars['String']>,
  adId_lte?: Maybe<Scalars['String']>,
  adId_gt?: Maybe<Scalars['String']>,
  adId_gte?: Maybe<Scalars['String']>,
  adId_contains?: Maybe<Scalars['String']>,
  adId_not_contains?: Maybe<Scalars['String']>,
  adId_starts_with?: Maybe<Scalars['String']>,
  adId_not_starts_with?: Maybe<Scalars['String']>,
  adId_ends_with?: Maybe<Scalars['String']>,
  adId_not_ends_with?: Maybe<Scalars['String']>,
  advertiserId?: Maybe<Scalars['String']>,
  advertiserId_not?: Maybe<Scalars['String']>,
  advertiserId_in?: Maybe<Array<Scalars['String']>>,
  advertiserId_not_in?: Maybe<Array<Scalars['String']>>,
  advertiserId_lt?: Maybe<Scalars['String']>,
  advertiserId_lte?: Maybe<Scalars['String']>,
  advertiserId_gt?: Maybe<Scalars['String']>,
  advertiserId_gte?: Maybe<Scalars['String']>,
  advertiserId_contains?: Maybe<Scalars['String']>,
  advertiserId_not_contains?: Maybe<Scalars['String']>,
  advertiserId_starts_with?: Maybe<Scalars['String']>,
  advertiserId_not_starts_with?: Maybe<Scalars['String']>,
  advertiserId_ends_with?: Maybe<Scalars['String']>,
  advertiserId_not_ends_with?: Maybe<Scalars['String']>,
  clientId?: Maybe<Scalars['String']>,
  clientId_not?: Maybe<Scalars['String']>,
  clientId_in?: Maybe<Array<Scalars['String']>>,
  clientId_not_in?: Maybe<Array<Scalars['String']>>,
  clientId_lt?: Maybe<Scalars['String']>,
  clientId_lte?: Maybe<Scalars['String']>,
  clientId_gt?: Maybe<Scalars['String']>,
  clientId_gte?: Maybe<Scalars['String']>,
  clientId_contains?: Maybe<Scalars['String']>,
  clientId_not_contains?: Maybe<Scalars['String']>,
  clientId_starts_with?: Maybe<Scalars['String']>,
  clientId_not_starts_with?: Maybe<Scalars['String']>,
  clientId_ends_with?: Maybe<Scalars['String']>,
  clientId_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type HiringSubscriptionPayload = {
   __typename?: 'HiringSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Hiring>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<HiringPreviousValues>,
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
  createAd?: Maybe<Ad>,
  createAdvertiser?: Maybe<Advertiser>,
  createClient?: Maybe<Client>,
  createClientHistory?: Maybe<ClientHistory>,
  createFile?: Maybe<File>,
  createHiring?: Maybe<Hiring>,
  updateAd?: Maybe<Ad>,
  updateAdvertiser?: Maybe<Advertiser>,
  updateClient?: Maybe<Client>,
  updateClientHistory?: Maybe<ClientHistory>,
  updateFile?: Maybe<File>,
  updateHiring?: Maybe<Hiring>,
  updateUser?: Maybe<User>,
  updateOrCreateAd?: Maybe<Ad>,
  updateOrCreateAdvertiser?: Maybe<Advertiser>,
  updateOrCreateClient?: Maybe<Client>,
  updateOrCreateClientHistory?: Maybe<ClientHistory>,
  updateOrCreateFile?: Maybe<File>,
  updateOrCreateHiring?: Maybe<Hiring>,
  updateOrCreateUser?: Maybe<User>,
  deleteAd?: Maybe<Ad>,
  deleteAdvertiser?: Maybe<Advertiser>,
  deleteClient?: Maybe<Client>,
  deleteClientHistory?: Maybe<ClientHistory>,
  deleteFile?: Maybe<File>,
  deleteHiring?: Maybe<Hiring>,
  deleteUser?: Maybe<User>,
  createUser?: Maybe<User>,
  invokeFunction?: Maybe<InvokeFunctionPayload>,
};


export type MutationCreateAdArgs = {
  date: Scalars['String'],
  description: Scalars['String'],
  establishmentId: Scalars['String'],
  imageUrl: Scalars['String'],
  price: Scalars['String'],
  qtdHirings: Scalars['String'],
  segment: Scalars['String'],
  title: Scalars['String']
};


export type MutationCreateAdvertiserArgs = {
  address: Scalars['String'],
  averageAvaliation: Scalars['String'],
  description: Scalars['String'],
  establishmentName: Scalars['String'],
  province: Scalars['String'],
  segment: Scalars['String'],
  telephone: Scalars['String']
};


export type MutationCreateClientArgs = {
  age: Scalars['String'],
  averageAvaliation: Scalars['String'],
  cpf: Scalars['String'],
  name: Scalars['String'],
  qtdHirings: Scalars['String'],
  telephone: Scalars['String']
};


export type MutationCreateClientHistoryArgs = {
  clientId: Scalars['String'],
  hiringId: Scalars['String']
};


export type MutationCreateFileArgs = {
  name: Scalars['String']
};


export type MutationCreateHiringArgs = {
  adId: Scalars['String'],
  advertiserId: Scalars['String'],
  clientId: Scalars['String']
};


export type MutationUpdateAdArgs = {
  date?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  establishmentId?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  imageUrl?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['String']>,
  qtdHirings?: Maybe<Scalars['String']>,
  segment?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>
};


export type MutationUpdateAdvertiserArgs = {
  address?: Maybe<Scalars['String']>,
  averageAvaliation?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  establishmentName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  province?: Maybe<Scalars['String']>,
  segment?: Maybe<Scalars['String']>,
  telephone?: Maybe<Scalars['String']>
};


export type MutationUpdateClientArgs = {
  age?: Maybe<Scalars['String']>,
  averageAvaliation?: Maybe<Scalars['String']>,
  cpf?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  qtdHirings?: Maybe<Scalars['String']>,
  telephone?: Maybe<Scalars['String']>
};


export type MutationUpdateClientHistoryArgs = {
  clientId?: Maybe<Scalars['String']>,
  hiringId?: Maybe<Scalars['String']>,
  id: Scalars['ID']
};


export type MutationUpdateFileArgs = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>
};


export type MutationUpdateHiringArgs = {
  adId?: Maybe<Scalars['String']>,
  advertiserId?: Maybe<Scalars['String']>,
  clientId?: Maybe<Scalars['String']>,
  id: Scalars['ID']
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']
};


export type MutationUpdateOrCreateAdArgs = {
  update: UpdateAd,
  create: CreateAd
};


export type MutationUpdateOrCreateAdvertiserArgs = {
  update: UpdateAdvertiser,
  create: CreateAdvertiser
};


export type MutationUpdateOrCreateClientArgs = {
  update: UpdateClient,
  create: CreateClient
};


export type MutationUpdateOrCreateClientHistoryArgs = {
  update: UpdateClientHistory,
  create: CreateClientHistory
};


export type MutationUpdateOrCreateFileArgs = {
  update: UpdateFile,
  create: CreateFile
};


export type MutationUpdateOrCreateHiringArgs = {
  update: UpdateHiring,
  create: CreateHiring
};


export type MutationUpdateOrCreateUserArgs = {
  update: UpdateUser
};


export type MutationDeleteAdArgs = {
  id: Scalars['ID']
};


export type MutationDeleteAdvertiserArgs = {
  id: Scalars['ID']
};


export type MutationDeleteClientArgs = {
  id: Scalars['ID']
};


export type MutationDeleteClientHistoryArgs = {
  id: Scalars['ID']
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID']
};


export type MutationDeleteHiringArgs = {
  id: Scalars['ID']
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']
};


export type MutationInvokeFunctionArgs = {
  input: InvokeFunctionInput
};

export type Node = {
  id: Scalars['ID'],
};

export type Query = {
   __typename?: 'Query',
  allAds: Array<Ad>,
  allAdvertisers: Array<Advertiser>,
  allClients: Array<Client>,
  allClientHistories: Array<ClientHistory>,
  allFiles: Array<File>,
  allHirings: Array<Hiring>,
  allUsers: Array<User>,
  _allAdsMeta: _QueryMeta,
  _allAdvertisersMeta: _QueryMeta,
  _allClientsMeta: _QueryMeta,
  _allClientHistoriesMeta: _QueryMeta,
  _allFilesMeta: _QueryMeta,
  _allHiringsMeta: _QueryMeta,
  _allUsersMeta: _QueryMeta,
  Ad?: Maybe<Ad>,
  Advertiser?: Maybe<Advertiser>,
  Client?: Maybe<Client>,
  ClientHistory?: Maybe<ClientHistory>,
  File?: Maybe<File>,
  Hiring?: Maybe<Hiring>,
  User?: Maybe<User>,
  user?: Maybe<User>,
  node?: Maybe<Node>,
};


export type QueryAllAdsArgs = {
  filter?: Maybe<AdFilter>,
  orderBy?: Maybe<AdOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllAdvertisersArgs = {
  filter?: Maybe<AdvertiserFilter>,
  orderBy?: Maybe<AdvertiserOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
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


export type QueryAllClientHistoriesArgs = {
  filter?: Maybe<ClientHistoryFilter>,
  orderBy?: Maybe<ClientHistoryOrderBy>,
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


export type QueryAllHiringsArgs = {
  filter?: Maybe<HiringFilter>,
  orderBy?: Maybe<HiringOrderBy>,
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


export type Query_AllAdsMetaArgs = {
  filter?: Maybe<AdFilter>,
  orderBy?: Maybe<AdOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllAdvertisersMetaArgs = {
  filter?: Maybe<AdvertiserFilter>,
  orderBy?: Maybe<AdvertiserOrderBy>,
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


export type Query_AllClientHistoriesMetaArgs = {
  filter?: Maybe<ClientHistoryFilter>,
  orderBy?: Maybe<ClientHistoryOrderBy>,
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


export type Query_AllHiringsMetaArgs = {
  filter?: Maybe<HiringFilter>,
  orderBy?: Maybe<HiringOrderBy>,
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


export type QueryAdArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryAdvertiserArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryClientArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryClientHistoryArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryFileArgs = {
  id?: Maybe<Scalars['ID']>,
  secret?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>
};


export type QueryHiringArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type Subscription = {
   __typename?: 'Subscription',
  Ad?: Maybe<AdSubscriptionPayload>,
  Advertiser?: Maybe<AdvertiserSubscriptionPayload>,
  Client?: Maybe<ClientSubscriptionPayload>,
  ClientHistory?: Maybe<ClientHistorySubscriptionPayload>,
  File?: Maybe<FileSubscriptionPayload>,
  Hiring?: Maybe<HiringSubscriptionPayload>,
  User?: Maybe<UserSubscriptionPayload>,
};


export type SubscriptionAdArgs = {
  filter?: Maybe<AdSubscriptionFilter>
};


export type SubscriptionAdvertiserArgs = {
  filter?: Maybe<AdvertiserSubscriptionFilter>
};


export type SubscriptionClientArgs = {
  filter?: Maybe<ClientSubscriptionFilter>
};


export type SubscriptionClientHistoryArgs = {
  filter?: Maybe<ClientHistorySubscriptionFilter>
};


export type SubscriptionFileArgs = {
  filter?: Maybe<FileSubscriptionFilter>
};


export type SubscriptionHiringArgs = {
  filter?: Maybe<HiringSubscriptionFilter>
};


export type SubscriptionUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>
};

export type UpdateAd = {
  date?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  establishmentId?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  imageUrl?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['String']>,
  qtdHirings?: Maybe<Scalars['String']>,
  segment?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

export type UpdateAdvertiser = {
  address?: Maybe<Scalars['String']>,
  averageAvaliation?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  establishmentName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  province?: Maybe<Scalars['String']>,
  segment?: Maybe<Scalars['String']>,
  telephone?: Maybe<Scalars['String']>,
};

export type UpdateClient = {
  age?: Maybe<Scalars['String']>,
  averageAvaliation?: Maybe<Scalars['String']>,
  cpf?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  qtdHirings?: Maybe<Scalars['String']>,
  telephone?: Maybe<Scalars['String']>,
};

export type UpdateClientHistory = {
  clientId?: Maybe<Scalars['String']>,
  hiringId?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};

export type UpdateFile = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};

export type UpdateHiring = {
  adId?: Maybe<Scalars['String']>,
  advertiserId?: Maybe<Scalars['String']>,
  clientId?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
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
  AND?: Maybe<Array<UserFilter>>,
  OR?: Maybe<Array<UserFilter>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
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
  AND?: Maybe<Array<UserSubscriptionFilter>>,
  OR?: Maybe<Array<UserSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserSubscriptionFilterNode>,
};

export type UserSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type UserSubscriptionPayload = {
   __typename?: 'UserSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type GetAllAdsQueryVariables = {};


export type GetAllAdsQuery = (
  { __typename?: 'Query' }
  & { allAds: Array<(
    { __typename?: 'Ad' }
    & Pick<Ad, 'id' | 'title' | 'description' | 'price'>
  )> }
);


export const GetAllAdsDocument = gql`
    query getAllAds {
  allAds {
    id
    title
    description
    price
  }
}
    `;
export type GetAllAdsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetAllAdsQuery, GetAllAdsQueryVariables> | TChildProps;
export function withGetAllAds<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllAdsQuery,
  GetAllAdsQueryVariables,
  GetAllAdsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllAdsQuery, GetAllAdsQueryVariables, GetAllAdsProps<TChildProps>>(GetAllAdsDocument, {
      alias: 'getAllAds',
      ...operationOptions
    });
};

/**
 * __useGetAllAdsQuery__
 *
 * To run a query within a React component, call `useGetAllAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllAdsQuery, GetAllAdsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllAdsQuery, GetAllAdsQueryVariables>(GetAllAdsDocument, baseOptions);
      }
export function useGetAllAdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllAdsQuery, GetAllAdsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllAdsQuery, GetAllAdsQueryVariables>(GetAllAdsDocument, baseOptions);
        }
export type GetAllAdsQueryHookResult = ReturnType<typeof useGetAllAdsQuery>;
export type GetAllAdsLazyQueryHookResult = ReturnType<typeof useGetAllAdsLazyQuery>;
export type GetAllAdsQueryResult = ApolloReactCommon.QueryResult<GetAllAdsQuery, GetAllAdsQueryVariables>;