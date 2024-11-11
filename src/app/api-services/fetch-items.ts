import { Item } from "../models/Item/Item";

interface Image {
  url: string;
}

interface GraphQLItem {
  itemName: string;
  Image?: Image;
}

interface GraphQLResponse {
  data: {
    items: GraphQLItem[];
  };
  errors?: any;
}

const endpoint = 'https://upbeat-surprise-c14a529e81.strapiapp.com/graphql';

const query = `
query($limit: Int, $start: Int) {
  items(pagination: { limit: $limit, start: $start }) {
        itemName
        Image {
          url
        }
    
  }
}
`;

const fetchItems = async (limit = 400, start = 0): Promise<Item[]> => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { limit, start }, 
    }),
  });

  const json: GraphQLResponse = await response.json();



  if (json.errors) {
    console.error('GraphQL Errors:', json.errors);
    return [];
  }

  const itemsData = json.data.items;

  
  const itemsList = itemsData.map((item: GraphQLItem) => {
    return new Item(
      item.itemName, 
      item.itemName, 
      item.Image ?item.Image.url : '', 
      false 
    );
  });

  return itemsList;
};

export default fetchItems;
