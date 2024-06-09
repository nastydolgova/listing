import ItemViewModel from "@/models/ItemViewModel"

const getCurrency = (currencyCode: string) => {
    switch (currencyCode) {
        case "USD":
            return "$";
        case "EUR":
            return "€";
        default:
            return "GBP";
    }
}

const getQuantityStyle = (quantity: number) => {
    const baseStyle = "item-quantity";
    if (quantity <= 10) return `${baseStyle} level-low`;
    if (quantity > 10 && quantity <= 20) return `${baseStyle} level-medium`;
    if (quantity > 20) return `${baseStyle} level-high`;
    return baseStyle;
}

const cropTitle = (title: string) => {
    if (title.length > 50) return `${title.slice(0, 50)}... `
    return title;
}

interface ItemViewProps {
    item: ItemViewModel
}

export default function ItemView({item}: ItemViewProps) {
    const {title, MainImage: {url_570xN}, price, quantity, currency_code} = item as ItemViewModel;
    const linkHref = `https://www.etsy.com/listing/292754135/${title}`;

    return (
        <div className="item">
            <div className="item-image">
                <a href={linkHref}>
                    <img src={url_570xN} alt={title}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{cropTitle(title)}</p>
                <p className="item-price">{getCurrency(currency_code)} {price}</p>
                <p className={`${getQuantityStyle(quantity)}`}>{quantity} left</p>
            </div>
        </div>
    )
}