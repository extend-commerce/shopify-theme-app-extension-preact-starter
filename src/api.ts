export const api = new ShopifyGadgetStarterClient({
  browserSession: { shopId: window.shop.id },
  endpoint: import.meta.env.VITE_APP_PROXY_URL,
  environment: import.meta.env.VITE_GADGET_ENVIRONMENT,
});
