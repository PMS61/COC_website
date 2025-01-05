export default {
  async fetch() {
    return new Response(null, {
      headers: {
        'Compatibility-Flags': 'nodejs_compat'
      }
    });
  }
}
