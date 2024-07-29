import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Get stats for a single collection.
     *
     * @summary Get Collection Stats
     */
    get_collection_stats(metadata: types.GetCollectionStatsMetadataParam): Promise<FetchResponse<200, types.GetCollectionStatsResponse200>>;
    /**
     * Get a list of events based on before and after timestamps.
     *
     * @summary Get Events
     */
    list_events(metadata?: types.ListEventsMetadataParam): Promise<FetchResponse<200, types.ListEventsResponse200>>;
    /**
     * Get a list of events for an account.
     *
     * @summary Get Events (by account)
     */
    list_events_by_account(metadata: types.ListEventsByAccountMetadataParam): Promise<FetchResponse<200, types.ListEventsByAccountResponse200>>;
    /**
     * Get a list of events for a collection.
     *
     * @summary Get Events (by collection)
     */
    list_events_by_collection(metadata: types.ListEventsByCollectionMetadataParam): Promise<FetchResponse<200, types.ListEventsByCollectionResponse200>>;
    /**
     * Get a list of events for a single NFT.
     *
     * @summary Get Events (by NFT)
     */
    list_events_by_nft(metadata: types.ListEventsByNftMetadataParam): Promise<FetchResponse<200, types.ListEventsByNftResponse200>>;
    /**
     * Get an OpenSea Account Profile including details such as bio, social media usernames,
     * and profile image.
     *
     * @summary Get Account
     */
    get_account(metadata: types.GetAccountMetadataParam): Promise<FetchResponse<200, types.GetAccountResponse200>>;
    /**
     * Get a single collection including details such as fees, traits, and links.
     *
     * @summary Get Collection
     */
    get_collection(metadata: types.GetCollectionMetadataParam): Promise<FetchResponse<200, types.GetCollectionResponse200>>;
    /**
     * Get a list of OpenSea collections.
     *
     * @summary Get Collections
     */
    list_collections(metadata?: types.ListCollectionsMetadataParam): Promise<FetchResponse<200, types.ListCollectionsResponse200>>;
    /**
     * Get a smart contract for a given chain and address.
     *
     * @summary Get Contract
     */
    get_contract(metadata: types.GetContractMetadataParam): Promise<FetchResponse<200, types.GetContractResponse200>>;
    /**
     * Get metadata, traits, ownership information, and rarity for a single NFT.
     *
     * @summary Get NFT
     */
    get_nft(metadata: types.GetNftMetadataParam): Promise<FetchResponse<200, types.GetNftResponse200>>;
    /**
     * Get NFTs owned by a given account address.
     *
     * @summary Get NFTs (by account)
     */
    list_nfts_by_account(metadata: types.ListNftsByAccountMetadataParam): Promise<FetchResponse<200, types.ListNftsByAccountResponse200>>;
    /**
     * Get multiple NFTs for a collection.
     *
     * @summary Get NFTs (by collection)
     */
    list_nfts_by_collection(metadata: types.ListNftsByCollectionMetadataParam): Promise<FetchResponse<200, types.ListNftsByCollectionResponse200>>;
    /**
     * Get multiple NFTs for a smart contract.
     *
     * @summary Get NFTs (by contract)
     */
    list_nfts_by_contract(metadata: types.ListNftsByContractMetadataParam): Promise<FetchResponse<200, types.ListNftsByContractResponse200>>;
    /**
     * Get a smart contract for a given chain and address.
     *
     * @summary Get Payment Token
     */
    get_payment_token(metadata: types.GetPaymentTokenMetadataParam): Promise<FetchResponse<200, types.GetPaymentTokenResponse200>>;
    /**
     * Get the traits in a collection.
     *
     * @summary Get Traits
     */
    get_traits(metadata: types.GetTraitsMetadataParam): Promise<FetchResponse<200, types.GetTraitsResponse200>>;
    /**
     * Refresh metadata for a single NFT.
     *
     * @summary Refresh NFT Metadata
     */
    refresh_nft(metadata: types.RefreshNftMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Build a portion of a criteria offer including the merkle tree needed to post an offer.
     *
     * @summary Build Criteria Offer
     */
    build_offer_v2(body: types.BuildOfferV2BodyParam): Promise<FetchResponse<200, types.BuildOfferV2Response200>>;
    /**
     * Offchain cancel a single order, offer or listing, by its order hash when protected by
     * the SignedZone. Protocol and Chain are required to prevent hash collisions. Please note
     * cancellation is only assured if a fulfillment signature was not vended prior to
     * cancellation.
     *
     * @summary Cancel Order
     */
    cancel_order(body: types.CancelOrderBodyParam, metadata: types.CancelOrderMetadataParam): Promise<FetchResponse<200, types.CancelOrderResponse200>>;
    cancel_order(metadata: types.CancelOrderMetadataParam): Promise<FetchResponse<200, types.CancelOrderResponse200>>;
    /**
     * Create a criteria offer to purchase any NFT in a collection or which matches the
     * specified trait.
     *
     * @summary Create Criteria Offer
     */
    post_criteria_offer_v2(body: types.PostCriteriaOfferV2BodyParam): Promise<FetchResponse<200, types.PostCriteriaOfferV2Response200>>;
    /**
     * Create an offer to purchase a single NFT (ERC721 or ERC1155).
     *
     * @summary Create Item Offer
     */
    post_offer(body: types.PostOfferBodyParam, metadata: types.PostOfferMetadataParam): Promise<FetchResponse<200, types.PostOfferResponse200>>;
    /**
     * List a single NFT (ERC721 or ERC1155) for sale on the OpenSea marketplace.
     *
     * @summary Create Listing
     */
    post_listing(body: types.PostListingBodyParam, metadata: types.PostListingMetadataParam): Promise<FetchResponse<200, types.PostListingResponse200>>;
    /**
     * Retrieve all the information, including signatures, needed to fulfill a listing directly
     * onchain.
     *
     * @summary Fulfill Listing
     */
    generate_listing_fulfillment_data_v2(body: types.GenerateListingFulfillmentDataV2BodyParam): Promise<FetchResponse<200, types.GenerateListingFulfillmentDataV2Response200>>;
    /**
     * Retrieve all the information, including signatures, needed to fulfill an offer directly
     * onchain.
     *
     * @summary Fulfill Offer
     */
    generate_offer_fulfillment_data_v2(body: types.GenerateOfferFulfillmentDataV2BodyParam): Promise<FetchResponse<200, types.GenerateOfferFulfillmentDataV2Response200>>;
    /**
     * Get all active, valid listings for a single collection.
     *
     * @summary Get All Listings (by collection)
     */
    get_all_listings_on_collection_v2(metadata: types.GetAllListingsOnCollectionV2MetadataParam): Promise<FetchResponse<200, types.GetAllListingsOnCollectionV2Response200>>;
    /**
     * Get all active, valid offers for the specified collection. This includes individual and
     * criteria offers.
     *
     * @summary Get All Offers (by collection)
     */
    get_all_offers_on_collection_v2(metadata: types.GetAllOffersOnCollectionV2MetadataParam): Promise<FetchResponse<200, types.GetAllOffersOnCollectionV2Response200>>;
    /**
     * Get the best listing for an NFT.
     *
     * @summary Get Best Listing (by NFT)
     */
    get_best_listing_on_nft_v2(metadata: types.GetBestListingOnNftV2MetadataParam): Promise<FetchResponse<200, types.GetBestListingOnNftV2Response200>>;
    /**
     * Get the cheapest priced active, valid listings on a single collection.
     *
     * @summary Get Best Listings (by collection)
     */
    get_best_listings_on_collection_v2(metadata: types.GetBestListingsOnCollectionV2MetadataParam): Promise<FetchResponse<200, types.GetBestListingsOnCollectionV2Response200>>;
    /**
     * Get the best offers for an NFT.
     *
     * @summary Get Best Offer (by NFT)
     */
    get_best_offer_on_nft_v2(metadata: types.GetBestOfferOnNftV2MetadataParam): Promise<FetchResponse<200, types.GetBestOfferOnNftV2Response200>>;
    /**
     * Get the active, valid collection offers for the specified collection.
     *
     * @summary Get Collection Offers
     */
    get_collection_offers_v2(metadata: types.GetCollectionOffersV2MetadataParam): Promise<FetchResponse<200, types.GetCollectionOffersV2Response200>>;
    /**
     * Get the active, valid individual offers. This does not include criteria offers.
     *
     * @summary Get Item Offers
     */
    get_offers(metadata: types.GetOffersMetadataParam): Promise<FetchResponse<200, types.GetOffersResponse200>>;
    /**
     * Get the complete set of active, valid listings.
     *
     * @summary Get Listings
     */
    get_listings(metadata: types.GetListingsMetadataParam): Promise<FetchResponse<200, types.GetListingsResponse200>>;
    /**
     * Get a single order, offer or listing, by its order hash. Protocol and Chain are required
     * to prevent hash collisions.
     *
     * @summary Get Order
     */
    get_order(metadata: types.GetOrderMetadataParam): Promise<FetchResponse<200, types.GetOrderResponse200>>;
    /**
     * Get the active, valid trait offers for the specified collection.
     *
     * @summary Get Trait Offers
     */
    get_trait_offers_v2(metadata: types.GetTraitOffersV2MetadataParam): Promise<FetchResponse<200, types.GetTraitOffersV2Response200>>;
}
declare const createSDK: SDK;
export = createSDK;
