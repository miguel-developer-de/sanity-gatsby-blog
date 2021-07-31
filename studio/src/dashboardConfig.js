export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6105450f422fcae572ac717f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-z164dbn2",
                  apiId: "b8a0a770-7df7-424b-af0a-afa97715e2e7",
                },
                {
                  buildHookId: "6105450f8de07f334fdda27f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-zqy9ks7g",
                  apiId: "145d0e7c-9002-4d1f-9222-308fb5535d78",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/miguel-developer-de/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-zqy9ks7g.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
