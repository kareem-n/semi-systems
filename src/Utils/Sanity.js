import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = new SanityClient({
  projectId: "nau6h6k0",
  dataset: "production",
  useCdn: true,
  token:
    "skYlX4rlokGaLdYNkuqA8i8eSXE0Nr9isFQaJnkEGbm5ooPQEzfc5fZox5wWMkroC1tm19ydLig4SKG62TqGXLs4JPh6JjZtVBVXQUnVXj21f8IQzc3ONCHLan6FfC9AEDiaIqh1FHiyDnUz01uY4Lt2Jk8aglhXL1r4tATlpmw70pgYpOex",
  apiVersion: "2024-09-14",
});

const builder = ImageUrlBuilder(client);

// Helper function to generate image URLs
export function urlFor(source) {
  return builder.image(source);
}

export default client;
