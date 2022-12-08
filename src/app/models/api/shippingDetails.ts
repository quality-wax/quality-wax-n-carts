export class ShippingDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    contactOption: string = "Phone";
    paymentOption: string;
    country: string = "United States";
    state: string = "-";
    city: string;
    zip: string;
    address1: string;
    address2: string = "-";
    notes: string = "";
}
