// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    User: {
      id: "kjzl6hvfrbw6cbbc9yvvt3ntcsym5xss8xy0zh50mbsx90uxunl2z0a32nnanxh",
      accountRelation: { type: "single" },
    },
    Dataset: {
      id: "kjzl6hvfrbw6c53gdyv53qqjoy1r0p1qxor1bm7nmq4q99axpur85bgjv9zrlrt",
      accountRelation: { type: "list" },
    },
    TextClassificationRecord: {
      id: "kjzl6hvfrbw6c8kbvpxj4jzijdpx14bsetk4bv38329x24kdkguz3la8j7narpa",
      accountRelation: { type: "list" },
    },
  },
  objects: {
    User: {
      last_name: { type: "string", required: true },
      first_name: { type: "string", required: true },
      author: { type: "view", viewType: "documentAccount" },
      datasets: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c53gdyv53qqjoy1r0p1qxor1bm7nmq4q99axpur85bgjv9zrlrt",
          property: "userId",
        },
      },
    },
    Dataset: {
      name: { type: "string", required: true },
      type: { type: "string", required: false },
      userId: { type: "streamid", required: true },
      user: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6cbbc9yvvt3ntcsym5xss8xy0zh50mbsx90uxunl2z0a32nnanxh",
          property: "userId",
        },
      },
      author: { type: "view", viewType: "documentAccount" },
      textClassificationRecords: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c8kbvpxj4jzijdpx14bsetk4bv38329x24kdkguz3la8j7narpa",
          property: "datasetId",
        },
      },
    },
    TextClassificationRecord: {
      _id: { type: "integer", required: true },
      uid: { type: "integer", required: true },
      url: { type: "string", required: true },
      type: { type: "string", required: true },
      stars: { type: "integer", required: true },
      review: { type: "string", required: true },
      filename: { type: "string", required: true },
      annotator: { type: "integer", required: true },
      datasetId: { type: "streamid", required: true },
      lead_time: { type: "float", required: true },
      sentiment: { type: "string", required: true },
      created_at: { type: "string", required: true },
      updated_at: { type: "string", required: true },
      annotation_id: { type: "integer", required: true },
      author: { type: "view", viewType: "documentAccount" },
      dataset: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c53gdyv53qqjoy1r0p1qxor1bm7nmq4q99axpur85bgjv9zrlrt",
          property: "datasetId",
        },
      },
    },
  },
  enums: {},
  accountData: {
    user: { type: "node", name: "User" },
    datasetList: { type: "connection", name: "Dataset" },
    textClassificationRecordList: {
      type: "connection",
      name: "TextClassificationRecord",
    },
  },
};
