import privateClient from "../client/private.client.js";
import publicClient from "../client/public.client.js";

const reviewEnpoints = {
  list: "reviews",
  add: "reviews",
  remove: ({ reviewId }) => `reviews/${reviewId}`,
};

const reviewApi = {
  add: async ({ mediaId, mediaType, mediaTitle, mediaPoster, content }) => {
    try {
      const response = await privateClient.post(reviewEnpoints.add, {
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        content,
      });
      return { response };
    } catch (err) {
      return { err };
    }
  },

  remove: async ({ reviewId }) => {
    try {
      const response = await privateClient.post(
        reviewEnpoints.remove({ reviewId })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },

  getList: async () => {
    try {
      const response = privateClient.get(reviewEnpoints.list);
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default reviewApi;
