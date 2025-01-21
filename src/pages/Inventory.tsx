import React, { useEffect, useState } from "react";
import { getInventory, getProducts } from "../services/api";
import Loader from "../components/Loader";
import DataGridComponent from "../components/DataGridComponent";
import { ProcessedData } from "../types/inventory";
import processProduct from "../services/processData";


const Inventory: React.FC = () => {

    const [data, setData] = useState<ProcessedData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [productsResponse, inventoryResponse] = await Promise.all([getProducts(), getInventory()]);
                const processedData = productsResponse.products.map((product) =>
                    processProduct(product, inventoryResponse.inventory)
                );
                setData(processedData);
            } catch (error) {
                console.error('Error Loader Data', error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);
    if (loading) return <Loader />;
    return <DataGridComponent data={data} />;
}

export default Inventory;