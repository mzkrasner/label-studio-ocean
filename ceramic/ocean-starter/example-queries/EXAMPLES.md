## Getting a dataset by user did

You can search for all datasets created by a given user and pull in all corresponding records with the following query:

```
query {
        node(id: "did:pkh:eip155:1:0x514e3b94f0287caf77009039b72c321ef5f016e6") {
            ... on CeramicAccount {
            id
            datasetList(first: 100) {
                edges {
                node {
                    id
                    name
                  textClassificationRecords(first: 100){
                    edges{
                      node{
                        id
                     	  annotation_id
                        annotator
                        created_at
                        filename
                        _id
                        lead_time
                        review
                        sentiment
                        stars
                        type
                        uid
                        updated_at
                        url
                      }
                    }
                  }
                }
              }
            }
          } 
        }
      } 
```

If you already know the StreamID of the dataset you're looking for, you can also search for it directly:

```
query {
        node(id: "kjzl6kcym7w8y5nw29y15r5v92wv5vkcfk4oaajjez2satfxk5b735wqdw5d46r") {
            ... on Dataset {
            id
            textClassificationRecords(first: 20) {
                edges {
                node {
                    id
                    annotation_id
              			annotator
              			created_at
              			filename
              			_id
              			lead_time
              			review
              			sentiment
              			stars
              			type
              			uid
              			updated_at
              			url
                }
              }
            }
          } 
        }
      } 
```