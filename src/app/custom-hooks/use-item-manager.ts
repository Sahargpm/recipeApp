import { useState, useEffect, useRef } from "react";
import { ItemManager } from "../models/Item/item-manager";
import _ from "lodash";
import fetchItems from "../api-services/fetch-items";
import { Item } from "../models/Item/Item";

const useItemManager = (loadRecipe: (recipeName: string) => Promise<void>) => {
    const [itemManager, setItemManager] = useState<ItemManager>(new ItemManager());
    const originalItemRef = useRef<ItemManager>(new ItemManager());
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const handelItemClik = (itemId: string) => {
        const newItemManager = _.cloneDeep(itemManager);
        newItemManager.getItemIndexById(itemId);
        setItemManager(newItemManager);

        const selectedItem = newItemManager.getSelectedItem();
        if (selectedItem) {
            loadRecipe(selectedItem.title as string);
        }
    };

    const handleSearch = (itemTitle: string) => {
        if (itemTitle.length > 0) {
            const filterItemList: Item[] = originalItemRef.current.filterItemsByTwoCharMatch(itemTitle);
            const newItemManager = _.cloneDeep(itemManager);
            newItemManager.setItems(filterItemList);
            newItemManager.inlilized();
            setItemManager(newItemManager);

            if(filterItemList.length>0)
                {
                    loadRecipe(itemTitle)
                }
                else
                {
                    loadRecipe('');
                }


        } else {
            const newItemManager = _.cloneDeep(originalItemRef.current);
            newItemManager.inlilized();
             loadRecipe(newItemManager.getSelectedItem()?.title!)
            setItemManager(newItemManager);
        }
    };

    useEffect(() => {
        const loadItems = async () => {
            try {
                setLoading(true);
                const items = await fetchItems();
                originalItemRef.current.setItems(items);
                const newItemManager = _.cloneDeep(originalItemRef.current);
                setItemManager(newItemManager);
                setLoading(false);

                if (newItemManager.getSelectedItem()) {
                    loadRecipe(newItemManager.getSelectedItem()?.title as string);
                }
            } catch (err) {
                setError("Failed to load items");
                setLoading(false);
            }
        };

        loadItems();
    }, []);

    return { itemManager, setItemManager, loading, error, handleSearch, handelItemClik };
};

export default useItemManager;
