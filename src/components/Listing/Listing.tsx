import ItemView from "./ItemView/ItemView.tsx";
import ItemViewModel from "@/models/ItemViewModel.ts";


interface ListingProps{
    items: ItemViewModel[]
}

export default function Listing({items}: ListingProps) {
    const itemsList = items
        .filter(item => item.state !== "removed")
        .map(item => <ItemView key={item.listing_id} item={item} />)

    return (
        <div className="item-list">{itemsList}</div>
    )
}