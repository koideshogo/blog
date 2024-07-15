import {microCMSClient} from "@/libs/microCMSClient";
import {notFound} from "next/navigation";
import {MicroCMSQueries} from "microcms-js-sdk";

export const getArticles = async (
    queries?: MicroCMSQueries
)  => {
    return await microCMSClient.getList({
        endpoint: 'blog',
        queries: queries
    })
    .catch(notFound)
}