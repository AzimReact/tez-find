import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Iphone = () => {
    const storeIphones = useSelector((store) => ({ ...store.iphones }));
    const { iphoneType } = useParams()

    const iphones = useMemo(() => {
        const result = []

        for (const market in storeIphones[iphoneType]) {
            storeIphones[iphoneType][market] = storeIphones[iphoneType][market].map(el => ({...el, market}))
            result.push(...storeIphones[iphoneType][market])
        }

        return result;
    }, [storeIphones, iphoneType])

    console.log(iphones)
    return <div className="container">
        <pre>
            {JSON.stringify(iphones, null, 2)}
        </pre>
    </div>
}