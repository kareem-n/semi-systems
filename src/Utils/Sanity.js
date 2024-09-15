import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = new SanityClient({
  projectId: "nau6h6k0",
  dataset: "production",
  useCdn: true,
  token:
    "skH9tLogHuiCurQnlXeJb1t5Oj0G0eXyVM41mptEo8k3J8Gnpl4LBtIaOehpI5AYE4slmfLBgCqIjEQFFubZQC7QsPKM6wBOQbXyg1G0sZokMJBk4mIfCT7QdWjTCBwRXg95NUBxVthdcPhYFHgmiOPBAR5luJBWLzjlka94SJS5AS377yRt",
  apiVersion: "2024-09-14",
});

const builder = ImageUrlBuilder(client);

// Helper function to generate image URLs
export function urlFor(source) {
  return builder.image(source);
}

export default client;
