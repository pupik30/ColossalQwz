export type PricingPlan = {
    id: number;
    plan_name: string;
    price: number;
    feature_1: string | null;
    feature_2: string | null;
    feature_3: string | null;
    feature_4: string | null;
    extra_price: number | null;
    extra_label: string | null;
    color_hex: string;
};
