# Theme App Extension

```liquid
<p>Hello World</p>
<ec-action-button label="Click me" />

<script src="https://shopify-gadget-starter.gadget.app/api/client/web.min.js" defer></script>
<script>
  // attach the shop id to the window object for authentication
  window.shop = { id: '{{ shop.id }}' };
</script>

<script src="{{ 'action-button.js' | asset_url }}" type="module" defer></script>

{% schema %}
{
  "name": "Sample Action",
  "target": "section",
}
{% endschema %}
```
