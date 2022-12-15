import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { API_URL, API_VERSION, PLAN_AUTH_TOKEN, PROXY_SERVER_URL } from "../../../config";

export default function usePlans() {
    const { t } = useTranslation("features");
    const [plans, setPlans] = useState({});
    const [plan, setPlan] = useState(0);

    function getDiscount(price = 0, pct = 0.1379) {
        const discount = price * pct;
        const total = price - discount;
        return +total.toFixed(0);
    }

    useEffect(() => {
        async function getPlans() {
            const headers = {
                "Accept": "application/json",
                "Authorization": PLAN_AUTH_TOKEN,
                "App-version": API_VERSION,
            };

            try {
                const req = await fetch(`${PROXY_SERVER_URL}/${API_URL.replace("testing", "backend")}/v1/miran-plan/plan-price`, { headers });
                const res = await req.json();

                const plans = {};

                if (res.status) {
                    res.result.forEach(p => {
                        if (!p.prime_trainer_included && p.period === "1") // 1 month subscription without a trainer
                            plans["1monthPrime"] = {
                                price: p.price,
                                discount: getDiscount(p.price)
                            };
                        else if (!p.prime_trainer_included && p.period === "3") // 3 months subscription without a trainer
                            plans["3monthPrime"] = {
                                price: p.price,
                                discount: getDiscount(p.price)
                            };
                        else if (p.prime_trainer_included && p.period === "1") // 1 month subscription with a trainer
                            plans["1monthPrime+"] = {
                                price: p.price,
                                discount: getDiscount(p.price)
                            };
                        else if (p.prime_trainer_included && p.period === "3") // 3 months subscription with a trainer
                            plans["3monthPrime+"] = {
                                price: p.price,
                                discount: getDiscount(p.price)
                            };
                    });

                    setPlans(plans);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getPlans();
    }, []);

    const data = [
        {
            title: t("plan.prime.title"),
            color: "#23262F",
            description: t("plan.prime.desc"),
            price: plan === 0 ? plans["1monthPrime"]?.price : plans["3monthPrime"]?.price, // check if the plan is 1 month(0) or 3 months(1)
            discount: plan === 0 ? plans["1monthPrime"]?.discount : plans["3monthPrime"]?.discount,
            note: plan === 0 ? t("plan.per_month") : t("plan.per_3month"),
            button: t("plan.btns.get_started"),
            options: [
                "true",
                "true",
                "true",
                "true",
                "false"
            ],
        },
        {
            title: t("plan.prime+.title"),
            color: "#23262F",
            tag: t("plan.prime.popular"),
            description: t("plan.prime+.desc"),
            price: plan === 0 ? plans["1monthPrime+"]?.price : plans["3monthPrime+"]?.price,
            discount: plan === 0 ? plans["1monthPrime+"]?.discount : plans["3monthPrime+"]?.discount,
            note: plan === 0 ? t("plan.per_month") : t("plan.per_3month"),
            button: t("plan.btns.get_started"),
            options: [
                "true",
                "true",
                "true",
                "true",
                "true"
            ],
        },
    ];

    return { data, plan, setPlan };
}
