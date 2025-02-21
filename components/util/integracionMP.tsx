import {
	openBrowserAsync
} from "expo-web-browser";

export const integracionMP = async () => {

    const preferencia = {
        "items": [{
                "id": "Ticketera ticket",
                "title": "Ticketera prouououo",
                "description": "Esto es una pijamada real, la pijamada real, la pijamada real",
                "quantity": 1,
                "currency_id": "$",
                "unit_price": 100
            }],
            "back_urls": {
              "success": "https://test.com/success",
              "pending": "https://test.com/pending",
              "failure": "https://test.com/failure"
            },
            "auto_return": "approved",
    }

    try {
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TEST'
            },
            body: JSON.stringify(preferencia)
        });
        
    } catch (error) {
        console.error('Error:', error);
    }
}