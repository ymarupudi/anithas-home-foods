// Tiny localStorage cart shared across pages.
const KEY = 'ahf_cart_v1';

export const Cart = {
  read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
  },
  write(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent('cart:change', { detail: items }));
  },
  count() {
    return this.read().reduce((n, i) => n + i.qty, 0);
  },
  total() {
    return this.read().reduce((s, i) => s + i.price * i.qty, 0);
  },
  add(item) {
    const items = this.read();
    const key = (i) => `${i.slug}|${i.weight}`;
    const existing = items.find((i) => key(i) === key(item));
    if (existing) existing.qty += item.qty || 1;
    else items.push({ ...item, qty: item.qty || 1 });
    this.write(items);
  },
  setQty(slug, weight, qty) {
    const items = this.read()
      .map((i) => (i.slug === slug && i.weight === weight ? { ...i, qty } : i))
      .filter((i) => i.qty > 0);
    this.write(items);
  },
  remove(slug, weight) {
    this.write(this.read().filter((i) => !(i.slug === slug && i.weight === weight)));
  },
  clear() { this.write([]); },
};

// Expose for inline scripts in .astro files
window.Cart = Cart;
document.dispatchEvent(new CustomEvent('cart:ready'));
