import { Client } from '@gadget-client/shopify-gadget-starter';

export declare global {
  interface Window {
    shop: { id: string };
  }
  declare const ShopifyGadgetStarterClient: typeof Client;
}
