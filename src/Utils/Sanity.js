import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = new SanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-09-14",
});



const builder = ImageUrlBuilder(client);

// Helper function to generate image URLs
export function urlFor(source) {
  return builder.image(source);
}

export default client;
