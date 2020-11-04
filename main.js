let app = new Vue({
  el: '#app',
  data: {
    product: 'Boots',
    image: './assets/vmSocks-green-onWhite.jpg',
    description: 'A pair o socks image',
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantCollor: "green"
      }, {
        variantId: 2235,
        variantCollor: "blue"
      }
    ]
  }
});