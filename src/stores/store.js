import { defineStore } from "pinia";

export const useFeedStore = defineStore({
  id: "feedStore",
  state: () => {
    return {
      //information the rss
      sources: [
        {
          id: crypto.randomUUID(),
          name: "Mozilla Firefox",
          url: "https://hacks.mozilla.org/feed/",
        },
      ],

      //actual feed
      current: {
        source: null,
        items: null,
      },
    };
  },
  //actions
  actions: {
    async loadSource(source) {
      const response = await fetch(source.url);
      let text = await response.text();
      text = text.replace(/content:encoded/g, "content");

      const domParser = new DOMParser();
      let doc = domParser.parseFromString(text, "text/xml");

      const posts = [];
      doc.querySelectorAll("item, entry").forEach((item) => {
        const post = {
          title: item.querySelector("title").textContent ?? "Sin titulo",
          content: item.querySelector("content").textContent ?? "Sin contenido",
        };
        posts.push(post);
      });
      this.current.items = [...posts];
      this.current.source = source;
    },
    async registerNewSource(url) {
      const response = await fetch(url);
      let text = await response.text();

      text = text.replace(/content:encoded/g, "content");
      const domParser = new DOMParser();
      let doc = domParser.parseFromString(text, "text/xml");

      console.log(doc);

      const title =
        doc.querySelector("channel")?.querySelector("title") ||
        doc.querySelector("feed title");

      const source = {
        id: crypto.randomUUID(),
        name: title.textContent,
        url: url,
      };
      this.sources.push(source);
    },
  },
});
